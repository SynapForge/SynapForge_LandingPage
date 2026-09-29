# ĐỀ XUẤT KIẾN TRÚC KỸ THUẬT & HẠ TẦNG ĐÁM MÂY (TECHNICAL ARCHITECTURE PROPOSAL)
> **Tài liệu thẩm định giải pháp kỹ thuật dành cho Giám đốc Công nghệ (CTO), Kỹ sư trưởng & Hội đồng Thẩm định**  
> **Đơn vị phát hành:** Ban Kỹ thuật SynapForge Studio  
> **Kiến trúc sư trưởng:** Lê Trí Trung — Tech Lead & System Architect  

---

## 1. NGUYÊN LÝ THIẾT KẾ HỆ THỐNG TỔNG THỂ (ARCHITECTURAL PRINCIPLES)
Kiến trúc do SynapForge đề xuất được xây dựng dựa trên 4 trụ cột kỹ nghệ chuẩn mực quốc tế:
1. **Kiến trúc Sạch (Clean Architecture):** Tách biệt tuyệt đối giữa nghiệp vụ cốt lõi (Domain Logic) và công nghệ triển khai (Database, Message Broker, Framework).
2. **Khả năng Mở rộng Không giới hạn (Horizontal Scalability):** Hệ thống được container hóa 100% bằng Docker, sẵn sàng tăng số lượng instance khi lượng truy cập bùng nổ mà không cần sửa code.
3. **Chống Thất thoát Dữ liệu 100% (Zero Message Loss):** Áp dụng kiến trúc Event-Driven với RabbitMQ Dead Letter Exchange (DLX) và Transactional Outbox Pattern.
4. **Bảo mật Đa tầng Chuyên sâu (Defense in Depth):** Tuân thủ nghiêm ngặt tiêu chuẩn an ninh mạng quốc tế OWASP Top 10 và mô hình xác thực Dual-Token.

```
                           SƠ ĐỒ HẠ TẦNG VẬN HÀNH & LUỒNG DỮ LIỆU
                           
    [Khách Hàng Toàn Cầu / Mobile & Desktop]
                       │ HTTPS (TLS 1.3) / HTTP/3
                       ▼
    ┌────────────────────────────────────────────────────────┐
    │ CLOUDFLARE EDGE NETWORK (CDN, WAF, Chống DDoS L3/L4/L7)│
    └──────────────────────────┬─────────────────────────────┘
                               │ Nginx Reverse Proxy / SSL Termination
    ┌──────────────────────────▼─────────────────────────────┐
    │ DOCKER CONTAINER TIER (VPS LINUX UBUNTU 24.04 LTS)     │
    │                                                        │
    │  ┌──────────────────────────────────────────────────┐  │
    │  │ FRONTEND CONTAINER: React 19 / Next.js 16 (Port 3000)│
    │  └────────────────────────┬─────────────────────────┘  │
    │                           │ REST API / WebSocket       │
    │  ┌────────────────────────▼─────────────────────────┐  │
    │  │ BACKEND API CONTAINER: .NET 8 / Java 21 (Port 5000)│
    │  │ • Clean Architecture (CQRS Handlers)            │  │
    │  │ • Redis Token Bucket Rate Limiting (Port 6379)   │  │
    │  │ • Redis Distributed Lock (Redlock Concurrency)   │  │
    │  └─────────────┬───────────────────────┬────────────┘  │
    │                │ AMQP Protocol         │ SQL Queries   │
    │  ┌─────────────▼────────────┐ ┌────────▼────────────┐  │
    │  │ RABBITMQ CONTAINER       │ │ POSTGRESQL 16       │  │
    │  │ • Primary Queue & Retry  │ │ • CSDL 50+ Bảng     │  │
    │  │ • Dead Letter Queue (DLQ)│ │ • GIN & B-Tree Index│  │
    │  └──────────────────────────┘ └─────────────────────┘  │
    └────────────────────────────────────────────────────────┘
```

---

## 2. LỰA CHỌN CÔNG NGHỆ & LẬP LUẬN KỸ THUẬT (TECH STACK JUSTIFICATION)

| Lớp kiến trúc | Công nghệ lựa chọn | Lý do lựa chọn & Lập luận kỹ thuật |
| :--- | :--- | :--- |
| **Frontend Web** | **React 19 / Next.js 16 + Tailwind CSS** | Khả năng render máy chủ (SSR/SSG) tối ưu SEO đạt 100/100, quản lý state linh hoạt, giao diện tối giản Thụy Sĩ phản hồi 60 FPS mượt mà. |
| **Backend Core** | **.NET 8 (C#) Clean Architecture** *(hoặc Java 21 Spring Boot 3.3)* | Hiệu năng biên dịch AOT siêu nhanh, xử lý đa luồng bất đồng bộ (Async/Await), tối ưu bộ nhớ RAM, hỗ trợ cấu trúc phân tầng sạch sẽ. |
| **Cơ sở dữ liệu** | **PostgreSQL 16 Enterprise** | Động cơ CSDL quan hệ tin cậy số 1 thế giới, hỗ trợ mạnh mẽ tìm kiếm toàn văn bản bằng chỉ mục GIN, lưu trữ linh hoạt dữ liệu phi cấu trúc JSONB. |
| **Caching & Khóa** | **Redis 7.2 In-Memory Data Store** | Tốc độ đọc ghi < 1ms, cung cấp cơ chế khóa phân tán Redlock chống bán trùng đơn hàng và thuật toán giới hạn lưu lượng Token Bucket. |
| **Message Broker** | **RabbitMQ with DLX & TTL Queues** | Xử lý các tác vụ ngầm (Gửi mail AWS SES, thông báo Telegram, đồng bộ ngân hàng) không làm chậm luồng người dùng, cam kết 0% mất tin nhắn. |
| **Hạ tầng & DevOps** | **Docker, Docker Compose, Linux Ubuntu, Nginx** | Đóng gói môi trường nhất quán 100% giữa máy dev và production, triển khai thần tốc bằng CI/CD GitHub Actions. |

---

## 3. THIẾT KẾ CƠ SỞ DỮ LIỆU & CHIẾN LƯỢC TỐI ƯU TRUY VẤN (< 8MS)

### 3.1. Quy mô & Chuẩn hóa Thực thể
* Cấu trúc cơ sở dữ liệu gồm từ **30 đến 60+ bảng thực thể** liên kết chặt chẽ (Kho hàng, Biến thể, Đơn hàng, Giao dịch ngân hàng, CTV, Audit logs).
* Mọi bảng đều kế thừa chuẩn kiểm toán: `Id (UUIDv7)`, `created_at`, `updated_at`, `is_deleted (Soft Delete)`.

### 3.2. Sổ tay Đánh chỉ mục Chuyên sâu (Indexing Strategy)
SynapForge áp dụng nguyên tắc đánh chỉ mục theo đúng [Tiêu chuẩn Kỹ thuật Xuất xưởng](../standards/03_SECURITY_AND_PERFORMANCE.md):
* **GIN Index (Generalized Inverted Index):** Đánh chỉ mục trên trường văn bản phục vụ tìm kiếm ký tự bất kỳ (`ILIKE '%keyword%'`):
  ```sql
  CREATE INDEX idx_products_search_gin ON products 
  USING gin (name_unaccent gin_trgm_ops);
  ```
* **Composite Index (Quy tắc Equality First):** Sắp xếp thứ tự cột trong chỉ mục phức hợp: So sánh chính xác đặt trước $\rightarrow$ So sánh khoảng giá đặt tiếp theo $\rightarrow$ Sắp xếp thời gian đặt cuối cùng:
  ```sql
  CREATE INDEX idx_orders_filter ON orders (status, store_id, total_amount, created_at DESC);
  ```
* **Cam kết hiệu năng:** 100% các câu truy vấn lọc danh mục đều được kiểm tra qua `EXPLAIN ANALYZE`, thời gian thực thi **luôn < 8.000 ms**.

---

## 4. BẢO VỆ GIAO DỊCH TÀI CHÍNH & KHÓA PHÂN TÁN CHỐNG BÁN TRÙNG

```
                          QUY TRÌNH KHÓA PHÂN TÁN VỚI REDIS REDLOCK
                          
    [Khách A Bấm "Đặt Cọc"] ──> [Acquire Redis Lock: `lock:product:9999` (TTL = 15 phút)]
                                                    │
                 ┌──────────────────────────────────┴──────────────────────────────────┐
                 ▼                                                                     ▼
      [Khóa Thành Công (Khách A)]                                           [Khóa Thất Bại (Khách B)]
  • Chuyển trạng thái: "Đang Giữ Chỗ"                                   • Trả về HTTP 409 Conflict
  • Sinh mã VietQR động riêng cho Khách A                               • Thông báo: "Sản phẩm đang được giao dịch"
  • Khách A quét mã -> Khớp tiền -> Đổi "Đã Bán"                        • Mời Khách B chọn sản phẩm khác
```

---

## 5. BẢO MẬT HỆ THỐNG & PHÒNG THỦ THEO TIÊU CHUẨN OWASP TOP 10

1. **Xác thực Token Kép (Dual-Token Pattern):**
   * Access Token có thời hạn sống 15 phút lưu trong Memory.
   * Refresh Token 7 ngày lưu trong Cookie bảo mật với 3 cờ bắt buộc: `HttpOnly = true`, `Secure = true`, `SameSite = Strict` (Loại trừ 100% rủi ro bị hacker đánh cắp phiên qua XSS và CSRF).
2. **Mã hóa Dữ liệu Nhạy cảm (Data Encryption at Rest):**
   * Thông tin định danh cá nhân (CCCD, Số điện thoại, Tài khoản ngân hàng) được mã hóa cột bằng thuật toán **AES-256-GCM**.
   * Mật khẩu tài khoản băm bằng **BCrypt (Work Factor >= 12)** hoặc **Argon2id**.
3. **Phòng chống Tấn công Tải & Brute-force:**
   * Cấu hình Redis Token Bucket tại tầng Gateway: Tối đa 100 requests/phút/IP và tối đa 5 lần đăng nhập sai/15 phút.
4. **Nhật ký Hệ thống Bất biến (Immutable Audit Trail):**
   * Lưu vết mọi thao tác chỉnh sửa giá, hủy đơn, xuất dữ liệu khách hàng với địa chỉ IP, User ID và timestamp chính xác đến mili-giây.

---

## 6. HẠ TẦNG CLOUD, BACKUP TỰ ĐỘNG & BÀN GIAO TOÀN QUYỀN

* **Môi trường máy chủ:** Linux Ubuntu 24.04 LTS (Tối thiểu 2 CPU Cores, 4GB RAM, 40GB SSD NVMe).
* **Quy trình sao lưu tự động (Automated Backup Cron):**
  * Tự động xuất file dump CSDL mỗi ngày vào lúc 02:00 sáng.
  * Nén file và mã hóa bằng GPG, tự động đồng bộ lên Amazon S3 / Google Drive lưu trữ an toàn trong 30 ngày.
* **Quyền sở hữu tuyệt đối:** Khách hàng nắm giữ tài khoản Root của máy chủ Cloud và quyền Owner của Repository GitHub. SynapForge không cài cắm bất kỳ mã khóa hay cửa sau (Zero Backdoors / Zero Vendor Lock-in).