# TIÊU CHUẨN XUẤT XƯỞNG: BẢO MẬT ĐA TẦNG, OWASP TOP 10 & SỔ TAY CHỈ MỤC CSDL
> **Bộ quy tắc phòng thủ an ninh và cẩm nang tối ưu hóa hiệu năng cơ sở dữ liệu tại SynapForge**  
> **Cam kết:** Không lỗ hổng bảo mật nghiêm trọng (Zero Critical Vulnerability), Truy vấn CSDL < 8ms  

---

## 1. BẢO MẬT XÁC THỰC HAI LỚP: DUAL-TOKEN AUTHENTICATION PATTERN
SynapForge nghiêm cấm lưu trữ JWT Token trong `localStorage` hoặc `sessionStorage` vì nguy cơ lộ dữ liệu 100% khi dính tấn công XSS (Cross-Site Scripting).

```
                      MÔ HÌNH XÁC THỰC DUAL-TOKEN CHỐNG XSS & CSRF
                      
    [Trình Duyệt Khách Hàng]                                   [Backend API Gateway]
            │                                                           │
            │── 1. Đăng nhập (Username/Password) ──────────────────────>│
            │                                                           │ (Xác thực hợp lệ)
            │<── 2. Trả về Access Token (Body) + Refresh Token (Cookie) ─│
            │    • Access Token: Lưu trong JavaScript Memory (15 phút)  │
            │    • Refresh Token: Lưu trong HttpOnly, Secure Cookie     │
            │                                                           │
            │── 3. Gọi API (Kèm Header: Authorization: Bearer <Token>) ─>│
            │                                                           │ (Thực thi API)
            │<── 4. Token hết hạn (HTTP 401 Unauthorized) ──────────────│
            │                                                           │
            │── 5. Tự động gọi /api/auth/refresh (Gửi kèm Cookie ngầm) ─>│
            │                                                           │ (Kiểm tra & Thu hồi Token cũ)
            │<── 6. Cấp cặp Token mới (Token Rotation) ─────────────────│
```

* **Access Token:** Hạn sống 15 phút, lưu thuần trong bộ nhớ biến JavaScript (State/Memory).
* **Refresh Token:** Hạn sống 7 ngày, bắt buộc thiết lập các cờ bảo vệ:
  `HttpOnly = true` (Javascript không thể đọc được),
  `Secure = true` (Chỉ truyền qua giao thức HTTPS),
  `SameSite = Strict` (Chống 100% tấn công CSRF).
* **Cơ chế Token Rotation (Thu hồi Token tái sử dụng):** Mỗi khi Refresh Token được dùng để xin Access Token mới, Refresh Token cũ sẽ bị vô hiệu hóa ngay lập tức. Nếu phát hiện Refresh Token cũ được sử dụng lại lần 2, hệ thống lập tức khóa toàn bộ phiên của tài khoản đó (phát hiện hành vi đánh cắp phiên).

---

## 2. BỘ QUY TẮC PHÒNG VỆ TOÀN DIỆN OWASP TOP 10

| Hạng mục lỗ hổng | Biện pháp kỹ thuật bắt buộc tại SynapForge | Công cụ kiểm soát tự động |
| :--- | :--- | :--- |
| **A01: Broken Access Control** | Phân quyền ma trận chặt chẽ (RBAC) + Xác thực quyền sở hữu tài nguyên (Resource-based Authorization). Không chỉ kiểm tra quyền `User`, mà phải kiểm tra `order.UserId == currentUserId`. | Unit Test Authorization, Spring Security PreAuthorize / .NET Policy |
| **A02: Cryptographic Failures** | Mọi thông tin nhạy cảm (CCCD, Số tài khoản ngân hàng, Địa chỉ nhà) bắt buộc mã hóa cột bằng thuật toán **AES-256-GCM**. Mật khẩu bắt buộc băm bằng **BCrypt (Work Factor >= 12)** hoặc **Argon2id**. | EF Core Value Converters, JPA AttributeConverter |
| **A03: Injection (SQL / NoSQL)** | Nghiêm cấm 100% việc cộng chuỗi SQL (`string.Format`, `+`). Toàn bộ truy vấn phải qua Parameterized Query hoặc ORM (Entity Framework Core, Spring Data JPA). | SonarQube, CodeQL Static Analysis |
| **A04: Insecure Design** | Áp dụng Redis Token Bucket Rate Limiting chặn đứng Brute-force mật khẩu (tối đa 5 lần sai/15 phút). Thiết lập giới hạn request tối đa (100 req/phút/IP). | Redis Lua Script Atomic Rate Limiter |
| **A05: Security Misconfiguration** | Bật đầy đủ bộ HTTP Security Headers: `Content-Security-Policy (CSP)`, `Strict-Transport-Security (HSTS)`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`. | Mozilla Observatory Scanner (>90/100) |
| **A07: Identification & Auth Failures** | Vô hiệu hóa Session ID sau khi đăng xuất. Tự động khóa tạm thời tài khoản nếu phát hiện đăng nhập bất thường từ dải IP lạ. | Audit Log Service, Cloudflare Geo-blocking |

---

## 3. SỔ TAY CHỈ MỤC CƠ SỞ DỮ LIỆU (DATABASE INDEXING PLAYBOOK)
Mục tiêu: Đảm bảo thời gian phản hồi cho các màn hình danh sách, tra cứu trên CSDL 50+ bảng luôn **< 8ms**.

```
              QUY TẮC THỨ TỰ CỘT TRONG COMPOSITE INDEX (EQUALITY FIRST)
              
    Truy vấn SQL thực tế:
    SELECT * FROM plate_numbers 
    WHERE status = 'AVAILABLE'       <-- [1. So sánh bằng: EQUALITY]
      AND province_code = '43'       <-- [2. So sánh bằng: EQUALITY]
      AND price BETWEEN 10M AND 50M  <-- [3. So sánh khoảng: RANGE]
    ORDER BY created_at DESC;        <-- [4. Sắp xếp: SORTING]
    
    ==> COMPOSITE INDEX BẮT BUỘC ĐƯỢC ĐẶT THEO THỨ TỰ:
    CREATE INDEX idx_plates_search ON plate_numbers 
    (status, province_code, price, created_at DESC);
```

### 3.1. Các loại Index và trường hợp sử dụng (Index Types Guide)
1. **B-Tree Index (Mặc định):** Dùng cho so sánh chính xác (`=`), so sánh khoảng (`<`, `>`, `BETWEEN`), và sắp xếp (`ORDER BY`).
2. **GIN Index (Generalized Inverted Index):** Bắt buộc sử dụng cho tìm kiếm toàn văn bản (Full-text search), tìm chuỗi ký tự bất kỳ (`ILIKE '%9999%'`) và tìm kiếm trong trường JSONB của PostgreSQL:
   ```sql
   -- Tối ưu tìm kiếm biển số xe chứa dãy số phong thủy thần tốc
   CREATE INDEX idx_plates_number_gin ON plate_numbers 
   USING gin (plate_clean gin_trgm_ops);
   ```
3. **Partial Index (Chỉ mục một phần):** Tiết kiệm 80% dung lượng RAM máy chủ bằng cách chỉ đánh index trên các bản ghi đang kinh doanh:
   ```sql
   -- Chỉ đánh index cho các đơn hàng chưa xử lý
   CREATE INDEX idx_orders_unprocessed ON orders (created_at) 
   WHERE status = 'PENDING';
   ```

### 3.2. Quy trình kiểm tra với `EXPLAIN ANALYZE`
Trước khi đưa bất kỳ tính năng nào lên Production, kỹ sư phải chạy phân tích kế hoạch thực thi:
* **Tiêu chuẩn đạt (PASS):** Kế hoạch thực thi hiển thị `Index Scan` hoặc `Bitmap Index Scan`. Thời gian thực thi `Execution Time < 8.000 ms`.
* **Tiêu chuẩn trượt (REJECT):** Hiển thị `Seq Scan` (Quét toàn bộ bảng) trên các bảng có số bản ghi lớn hơn 10,000 dòng.

---

## 4. TỐI ƯU HÓA BỘ ĐỆM REDIS & CHỐNG NGHẼN BỘ NHỚ (CACHE STAMPEDE DEFENSE)
* **Quy chuẩn Cache-Aside:** Luôn đọc từ Redis trước -> Nếu Cache Miss thì đọc từ PostgreSQL -> Ghi ngược lại Redis kèm thời gian sống (TTL).
* **Phòng chống Cache Avalanche (Sập sập đồng loạt):** Tuyệt đối không đặt cùng một giá trị TTL cho toàn bộ bản ghi. Bắt buộc cộng thêm một giá trị ngẫu nhiên (TTL Jitter):
  `TTL = 3600 seconds + Random(-300, 300) seconds`.
* **Phòng chống Cache Stampede (Hàng ngàn request đọc lại DB cùng lúc khi cache vừa hết hạn):** Sử dụng khóa phân tán nhẹ (Mutex Lock) để chỉ duy nhất 1 thread đi xuống Database cập nhật dữ liệu, các thread còn lại đợi dữ liệu mới từ Redis.