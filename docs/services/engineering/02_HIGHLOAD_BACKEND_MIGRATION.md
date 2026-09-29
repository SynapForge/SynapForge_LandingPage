# DỊCH VỤ: HIGH-LOAD BACKEND & MICROSERVICES MIGRATION
> **Kiến trúc Hệ thống Phân tán Chịu tải cao, Di chuyển Hệ thống Cũ (Legacy Migration) & Đảm bảo 0% Mất Tin nhắn**  
> **Phân hệ:** Kỹ nghệ Phần mềm Độc quyền (Core Bespoke Engineering)  
> **Thời gian triển khai tiêu chuẩn:** 3 – 6 Tuần  

---

## 1. TỔNG QUAN & BÀI TOÁN THỰC TẾ (OVERVIEW & PROBLEM STATEMENT)
Nhiều doanh nghiệp khởi đầu với một ứng dụng nguyên khối (Monolithic PHP, C# cũ, Node.js đơn luồng). Khi lưu lượng người dùng tăng đột biến, hệ thống bộc lộ những rủi ro chí tử:
1. **Nghẽn cổ chai cơ sở dữ liệu:** Toàn bộ request đổ dồn vào 1 database duy nhất khiến kết nối cạn kiệt (Connection Pool Exhaustion).
2. **Mất mát giao dịch (Message Dropping):** Khi máy chủ nhận đơn quá tải, các giao dịch thanh toán hoặc thông báo bị mất mà không thể phục hồi.
3. **Hiệu ứng domino (Cascading Failure):** Một lỗi nhỏ ở module báo cáo làm sập toàn bộ hệ thống bán hàng.

**Giải pháp của SynapForge:** Tái cấu trúc, bóc tách và di chuyển hệ thống sang kiến trúc **Event-Driven Microservices** linh hoạt, xử lý hàng ngàn request đồng thời với cam kết **tỷ lệ mất mát dữ liệu là 0%**.

```
                   KIẾN TRÚC EVENT-DRIVEN & MESSAGE QUEUE CHỊU TẢI CAO
                   
    [Traffic Cao / Đột biến] ──> [Spring Cloud / Nginx Gateway]
                                          │
                        ┌─────────────────┴─────────────────┐
                        │ Rate Limiter (Redis Token Bucket) │
                        └─────────────────┬─────────────────┘
                                          │
                   ┌──────────────────────┴──────────────────────┐
                   ▼                                             ▼
        [API Publisher Service]                       [Payment / Order Service]
                   │                                             │
                   └──────────────────────┬──────────────────────┘
                                          │ AMQP Protocol
                        ┌─────────────────▼─────────────────┐
                        │      RABBITMQ DIRECT EXCHANGE     │
                        └─────────────────┬─────────────────┘
                                          │
                     ┌────────────────────┴────────────────────┐
                     ▼                                         ▼
            [Primary Work Queue]                     [High Priority Queue]
                     │                                         │
                     │ (Process Failed / Crash)                ▼
                     │ (Exponential Retry x3)         [Instant Consumer Worker]
                     │                                         │
                     ▼                                         ▼
            ┌──────────────────┐                     [Ack / Safe Commit]
            │ DEAD LETTER (DLQ)│
            │  (Zero Drop DB)  │
            └──────────────────┘
```

---

## 2. TIÊU CHUẨN KỸ THUẬT & BÀN GIAO (TECHNICAL DELIVERABLES)

### 2.1. Cổng giao tiếp API Gateway & Phân luồng thông minh
* Định tuyến tập trung (Centralized Routing) qua **Spring Cloud Gateway** hoặc **Nginx Reverse Proxy**.
* **Redis Token Bucket Rate Limiting:** Thiết lập giới hạn request theo IP / User Token, ngăn chặn triệt để tấn công Brute-force và DoS mà không làm chậm người dùng hợp lệ.
* Tập trung hóa việc kiểm tra tính hợp lệ của JWT (JWT Pre-validation) tại Gateway trước khi điều hướng vào các service bên trong.

### 2.2. Hàng đợi thông điệp chịu lỗi RabbitMQ DLQ (0% Message Drop Rate)
* Xây dựng kiến trúc **Dead Letter Exchange (DLX)** kết hợp với cơ chế **Exponential Backoff Retry**:
  * Khi worker xử lý thất bại (do mạng chập chờn hoặc API bên thứ 3 lỗi), message sẽ được retry tự động 3 lần với khoảng cách thời gian lũy thừa (1s -> 5s -> 25s).
  * Nếu sau 3 lần vẫn lỗi, message được chuyển tự động vào **Dead Letter Queue (DLQ)** để kỹ sư phân tích mà không bao giờ bị biến mất khỏi hệ thống.
* Bật cờ `Publisher Confirms` và `Manual Consumer Acknowledgment` đảm bảo dữ liệu đã được ghi an toàn xuống đĩa cứng (Disk Persistence).

### 2.3. Quy trình bóc tách Monolith sang Microservices không ngắt quãng (Zero-Downtime Migration)
* Ứng dụng mô hình **Strangler Fig Pattern**: Bóc tách từng module nghiệp vụ độc lập ra khỏi khối monolithic mà không làm gián đoạn hoạt động kinh doanh hàng ngày.
* Đồng bộ hóa dữ liệu hai chiều (Dual-write / Change Data Capture) giữa CSDL cũ và mới trong suốt giai đoạn chuyển đổi.

### 2.4. Container hóa 100% & Khả năng mở rộng ngang (Horizontal Scaling)
* Toàn bộ services được đóng gói thành các Docker Image gọn nhẹ (Multi-stage builds, dung lượng <150MB).
* Cấu hình **Docker Compose / Kubernetes manifests** sẵn sàng nâng cấp từ 1 container lên hàng chục container chỉ bằng một dòng lệnh khi có sự kiện khuyến mãi hay cao điểm truy cập.

---

## 3. CÔNG NGHỆ ÁP DỤNG (TECH STACK)

| Phân hệ | Công nghệ lựa chọn chính | Lựa chọn thay thế tương đương |
| :--- | :--- | :--- |
| **Microservices Core** | **Java 21 (Spring Boot 3.3.5) / .NET 8** | **Go (Golang) / Node.js NestJS** |
| **API Gateway** | **Spring Cloud Gateway / Nginx** | **Kong API Gateway / Traefik** |
| **Message Broker** | **RabbitMQ (DLX & TTL Queues)** | **Apache Kafka / AWS SQS** |
| **Caching & Rate Limit**| **Redis Cluster (In-Memory K-V)** | **DragonflyDB / Hazelcast** |
| **Giám sát & Log** | **Prometheus + Grafana + Loki** | **ELK Stack (Elasticsearch, Logstash, Kibana)** |
| **Container & Orchestration**| **Docker, Docker Compose, Linux Ubuntu** | **Kubernetes (K8s), AWS EKS** |

---

## 4. DỰ ÁN THỰC THI THAM CHIẾU (PROVEN REFERENCE PROJECT)

### 🌟 Nền tảng Tự động hóa Truyền thông Đa Kênh — [BrandHub Platform](https://brandhub.dev)
* **Kiến trúc phân tán:** Phân tách thành **7 Microservices chuyên biệt** chạy độc lập (Gateway, Business, AI Engine, Publisher Async, Notification, Analytics, Audit Log).
* **Độ tin cậy giao dịch:** Vận hành RabbitMQ DLQ chịu tải hàng ngàn thông điệp đăng bài tự động tới Facebook, TikTok, Instagram, Threads và Zalo.
* **Kết quả:** Đạt chuẩn **0% tỷ lệ rớt tin nhắn**, tự động phục hồi tiến trình khi các nền tảng mạng xã hội gặp sự cố Rate Limit.

---

## 5. CÁC MODULE SAAS TỰ ĐỘNG HÓA TÍCH HỢP SẴN
Khách hàng triển khai gói High-load Backend có thể tích hợp trực tiếp:
* [Module 11: Realtime Async Omnichannel Content Publisher](../saas/11_omnichannel_publisher/MODULE_INFO.md)
* [Module 03: Distributed Inventory Lock Engine](../saas/03_inventory_lock/MODULE_INFO.md)
* [Module 08: Enterprise Audit Trail & Role Matrix](../saas/08_audit_security/MODULE_INFO.md)
* [Module 13: Multi-tenant Workspace & Role-Based Access Control](../saas/13_multitenant_rbac/MODULE_INFO.md)

---

## 6. GÓI DỊCH VỤ & BẢO HÀNH TƯƠNG ỨNG
* **Gói khuyến nghị:** [Gói Enterprise Scale (33M)](../pricing/01_PRICING_PACKAGES.md#3-gói-enterprise-scale-hệ-thống-quy-mô-lớn).
* **Cam kết vận hành:** Cam kết thời gian phản hồi API nội bộ **< 50ms**, tỷ lệ sẵn sàng hệ thống (Uptime SLA) **99.9%**.
* **Bảo hành & Giám sát:** 90 ngày bảo hành kỹ thuật, thiết lập hệ thống cảnh báo qua Telegram / Slack 24/7 khi có service bất thường.