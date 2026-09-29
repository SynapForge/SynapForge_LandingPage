# TIÊU CHUẨN XUẤT XƯỞNG: GIAO VẬN TIN CẬY 100% VỚI RABBITMQ DLQ & TRANSACTIONAL OUTBOX
> **Quy chuẩn kiến trúc Event-Driven chống thất thoát dữ liệu cho hệ thống chịu tải cao**  
> **Cam kết:** 0% Tỷ lệ mất tin nhắn (Zero Message Drop Rate) dưới mọi tình huống sự cố mạng hoặc sập nguồn  

---

## 1. NGUY CƠ THẤT THOÁT DỮ LIỆU & BÀI TOÁN GHI HAI PHA (DUAL-WRITE PROBLEM)
Trong hệ thống phân tán thông thường, các lỗi thất thoát dữ liệu nguy hiểm nhất xuất phát từ hai nguyên nhân:
1. **Lỗi Ghi Hai Pha (Dual-Write Failure):** Ứng dụng ghi thành công đơn hàng vào Database nhưng máy chủ sập nguồn trước khi kịp gửi tin nhắn vào RabbitMQ -> Khách hàng mất đơn hoặc không nhận được hàng.
2. **Lỗi Xử lý Không Đồng Bộ (Consumer Crash):** Worker đang xử lý tin nhắn thanh toán thì bị nghẽn mạng hoặc tràn RAM, tin nhắn bị xóa khỏi hàng đợi (Auto-ACK) mà không có bản ghi phục hồi -> Mất tiền của khách hàng.

```
          GIẢI PHÁP TRANSACTIONAL OUTBOX + RABBITMQ DEAD LETTER EXCHANGE
          
┌────────────────────────────────────────────────────────────────────────┐
│ 1. TẦNG TRANSACTIONAL DATABASE (NGUYÊN TỬ HÓA 100%)                    │
│   BEGIN TRANSACTION;                                                   │
│     INSERT INTO orders (...); -- Ghi đơn hàng                          │
│     INSERT INTO outbox_messages (id, type, payload, status = 'PENDING');│
│   COMMIT; -- Bảo đảm cả 2 cùng thành công hoặc cùng rollback           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Outbox Background Worker (Chạy ngầm)
┌───────────────────────────────────▼────────────────────────────────────┐
│ 2. RABBITMQ PUBLISHER (CONFIRMS & RETRY)                               │
│   • Publisher Confirms (Đợi Broker xác nhận ghi xuống đĩa)             │
│   • Cập nhật Outbox: status = 'PUBLISHED'                              │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ AMQP Protocol
┌───────────────────────────────────▼────────────────────────────────────┐
│ 3. HÀNG ĐỢI XỬ LÝ CHÍNH (PRIMARY QUEUE)                                │
│   • Manual Ack (Chỉ gửi Ack khi Consumer đã xử lý xong hoàn toàn)      │
└──────────────────┬─────────────────────────────────┬───────────────────┘
                   │ Xử lý thành công                │ Gặp lỗi / Crash
                   ▼                                 ▼
         [basicAck(deliveryTag)]      [basicNack(requeue = false)]
                                                     │
┌────────────────────────────────────────────────────▼───────────────────┐
│ 4. DEAD LETTER EXCHANGE (DLX) & RETRY LŨY THỪA                         │
│   • Retry 1 (Sau 5s) -> Retry 2 (Sau 25s) -> Retry 3 (Sau 125s)        │
│   • Sau 3 lần thất bại -> Đẩy vào `task.dead-letter.queue`             │
│   • Bắn cảnh báo Telegram Admin ngay lập tức & Lưu vết Audit           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. QUY CHUẨN TRANSACTIONAL OUTBOX PATTERN
Mọi sự kiện thay đổi trạng thái quan trọng (Tạo đơn, Khớp tiền cọc VietQR, Đổi trạng thái kho) bắt buộc phải sử dụng bảng `outbox_messages` lưu chung trong cùng một Database:

```sql
CREATE TABLE outbox_messages (
    id UUID PRIMARY KEY,
    event_type VARCHAR(100) NOT NULL,
    aggregate_id VARCHAR(100) NOT NULL,
    payload JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, PUBLISHED, FAILED
    retry_count INT DEFAULT 0,
    error_message TEXT,
    processed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_outbox_pending ON outbox_messages(status, created_at) 
WHERE status = 'PENDING';
```

Một tiến trình Background Service (sử dụng Quartz.NET / Spring `@Scheduled` / Hangfire) quét các bản ghi `PENDING` mỗi 500ms, gửi vào RabbitMQ với cờ **Publisher Confirms**. Khi nhận được `Ack` từ RabbitMQ, trạng thái mới được đổi thành `PUBLISHED`.

---

## 3. CẤU HÌNH DEAD LETTER EXCHANGE (DLX) & EXPONENTIAL BACKOFF

### 3.1. Thiết lập Topology Hàng Đợi (Queue Topology)
Bắt buộc cấu hình đầy đủ 3 cấu phần cho mỗi luồng nghiệp vụ quan trọng:
1. **Primary Exchange & Queue:** `order.exchange` -> `order.process.queue`
2. **Retry Exchange & Queue (Có TTL):** `order.retry.exchange` -> `order.retry.5s.queue` (với thuộc tính `x-message-ttl: 5000` và trỏ `x-dead-letter-exchange: order.exchange`)
3. **Dead Letter Queue (Hàng đợi lưu lỗi):** `order.dlx.exchange` -> `order.failed.dlq`

### 3.2. Cấu hình mẫu trong Java Spring AMQP (Spring Boot 3)

```java
@Configuration
public class RabbitMqDlqConfig {

    public static final String MAIN_QUEUE = "brandhub.publisher.queue";
    public static final String RETRY_QUEUE = "brandhub.publisher.retry.queue";
    public static final String DLQ = "brandhub.publisher.dlq";
    public static final String DLX_EXCHANGE = "brandhub.dlx";

    @Bean
    public Queue mainQueue() {
        return QueueBuilder.durable(MAIN_QUEUE)
                .withArgument("x-dead-letter-exchange", DLX_EXCHANGE)
                .withArgument("x-dead-letter-routing-key", DLQ)
                .build();
    }

    @Bean
    public Queue dlq() {
        return QueueBuilder.durable(DLQ).build();
    }

    @Bean
    public DirectExchange dlxExchange() {
        return new DirectExchange(DLX_EXCHANGE);
    }

    @Bean
    public Binding dlqBinding() {
        return BindingBuilder.bind(dlq()).to(dlxExchange()).with(DLQ);
    }
}
```

---

## 4. QUY TRÌNH TIÊU THỤ ĐẢM BẢO TÍNH ĐƠN NHẤT (IDEMPOTENT CONSUMER)

Vì mạng có thể gặp sự cố khiến tin nhắn được gửi lại nhiều lần (At-least-once Delivery), tầng Consumer bắt buộc phải kiểm tra tính đơn nhất (Idempotency) trước khi thực thi nghiệp vụ:

```
[Nhận Message] ──> [Kiểm tra MessageId trong Redis Cache (SETNX with TTL 24h)]
                         │
        ┌────────────────┴────────────────┐
        │ Key đã tồn tại (Đã xử lý)       │ Key chưa tồn tại (Mới)
        ▼                                 ▼
[Bỏ qua & Gửi basicAck ngay]    [Thực thi logic nghiệp vụ]
                                          │
                                          ▼
                                [Lưu DB & Xác nhận basicAck]
```

---

## 5. HỆ THỐNG GIÁM SÁT & CẢNH BÁO TỰ ĐỘNG (DLQ TELEGRAM ALERT)
* Mọi tin nhắn rơi vào `*.dlq` sẽ kích hoạt ngay một tiến trình đọc lỗi, trích xuất: `MessageId`, `Payload`, `Exception StackTrace`, `Số lần đã thử lại`.
* Gửi cảnh báo định dạng Markdown trực tiếp vào nhóm Telegram Kỹ thuật của SynapForge:
  ```
  🚨 [CẢNH BÁO RABBITMQ DLQ]
  • Service: BrandHub-Publisher-Service
  • Queue: brandhub.publisher.dlq
  • Error: Facebook Graph API returned HTTP 429 (Rate Limit Exceeded)
  • Aggregate ID: POST-89421
  • Thời gian: 2026-09-29 01:10:00 UTC+7
  👉 Hành động: Kỹ sư kiểm tra token và kích hoạt lệnh Replay sau khi hạ nhiệt tải.
  ```
* Cung cấp CLI tool nội bộ: `synapforge-cli mq:replay --queue=brandhub.publisher.dlq` để đẩy lại toàn bộ tin nhắn đã khắc phục lỗi vào hàng đợi chính mà không cần can thiệp thủ công vào Database.