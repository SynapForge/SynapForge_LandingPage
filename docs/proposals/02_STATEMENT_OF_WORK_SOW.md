# BẢN ĐẶC TẢ PHẠM VI CÔNG VIỆC CHI TIẾT (STATEMENT OF WORK - SOW)
> **Tài liệu xác lập ranh giới tính năng, cấu trúc phân rã công việc (WBS) & tiêu chuẩn nghiệm thu**  
> **Áp dụng cho:** Kỹ sư SynapForge và Đội ngũ Giám sát Dự án của Khách hàng  
> **Mục tiêu:** Rạch ròi 100% phạm vi công việc, loại trừ hoàn toàn rủi ro phình phạm vi (Scope Creep)  

---

## 1. NGUYÊN TẮC QUẢN TRỊ PHẠM VI (SCOPE MANAGEMENT PRINCIPLES)
Để đảm bảo dự án hoàn thành đúng hạn và chất lượng vượt trội, hai bên cam kết tuân thủ các nguyên tắc:
1. **Phạm vi tĩnh trong Sprint:** Khi một Sprint đã bắt đầu (Sprint Backlog đã chốt), khách hàng không đưa thêm tính năng mới vào Sprint đó.
2. **Nguyên tắc In-Scope vs Out-of-Scope:** Mọi hạng mục nằm ngoài danh mục `In-Scope` sẽ được xếp vào danh sách tính năng tương lai hoặc kích hoạt quy trình Đổi Yêu Cầu (Change Request).
3. **Tiêu chuẩn nghiệm thu chức năng (DoD):** Tính năng chỉ được coi là hoàn thành khi đáp ứng trọn vẹn tiêu chí kỹ thuật, vượt qua kiểm thử đơn vị và được demo trực tiếp trên môi trường Staging.

---

## 2. BẢNG PHÂN RÃ CẤU TRÚC CÔNG VIỆC (WORK BREAKDOWN STRUCTURE - WBS)

```
                            SƠ ĐỒ CẤU TRÚC PHÂN RÃ CÔNG VIỆC (WBS)
                            
                               ┌────────────────────────────────┐
                               │     WBS 0.0: DỰ ÁN TỔNG THỂ    │
                               └────────────────┬───────────────┘
                                                │
         ┌───────────────┬───────────────┬──────┴────────┬───────────────┬───────────────┐
         ▼               ▼               ▼               ▼               ▼               ▼
   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
   │  WBS 1.0  │   │  WBS 2.0  │   │  WBS 3.0  │   │  WBS 4.0  │   │  WBS 5.0  │   │  WBS 6.0  │
   │  UI/UX &  │   │   CỔNG    │   │  ADMIN    │   │  VIETQR   │   │   REDIS   │   │  DEVOPS   │
   │  DATABASE │   │  CLIENT   │   │  QUẢN TRỊ │   │  ĐỐI SOÁT │   │   LOCK    │   │  & CLOUD  │
   └───────────┘   └───────────┘   └───────────┘   └───────────┘   └───────────┘   └───────────┘
```

### WBS 1.0: Thiết Kế Trải Nghiệm & Kiến Trúc Dữ Liệu
* **1.1. Khảo sát & Đặc tả:** Phân tích quy trình nghiệp vụ thực tế, xây dựng sơ đồ luồng người dùng (User Flow).
* **1.2. Thiết kế Figma UI/UX:** Thiết kế toàn bộ màn hình theo phong cách tối giản Thụy Sĩ (Swiss Minimalist), tạo Clickable Prototype để khách hàng duyệt trước khi code.
* **1.3. Thiết kế CSDL (ERD):** Chuẩn hóa cơ sở dữ liệu quan hệ (PostgreSQL / SQL Server) từ 30 đến 60+ bảng thực thể, tối ưu chỉ mục (GIN Index, B-Tree).

### WBS 2.0: Phân Hệ Người Dùng Trải Nghiệm (Client-Facing Web)
* **2.1. Trang chủ & Giới thiệu:** Banner tương tác cao, giới thiệu năng lực thương hiệu, video/ảnh trực quan.
* **2.2. Danh mục sản phẩm & Bộ lọc đa tiêu chí:** Bộ lọc thông minh theo giá, danh mục, tỉnh thành với tốc độ phản hồi **< 8ms**.
* **2.3. Chi tiết sản phẩm & Thư viện Mockup:** Hiển thị thông số chi tiết, bộ sinh ảnh phối cảnh thực tế 1-click và công cụ so sánh sản phẩm.
* **2.4. Trợ lý AI CSKH 24/7:** Tích hợp chatbot tư vấn tự động, trả lời chính sách bán hàng và hỗ trợ khách hàng không ảo giác.
* **2.5. Phễu đặt hàng & Thu thập thông tin:** Quy trình đặt mua / đặt cọc đa bước trực quan, tự động xác thực số điện thoại và email.

### WBS 3.0: Phân Hệ Quản Trị Trung Tâm (Admin Control Center)
* **3.1. Dashboard Báo Cáo:** Biểu đồ doanh thu theo ngày/tháng/năm, số lượt truy cập, tỷ lệ chuyển đổi chốt đơn.
* **3.2. Quản lý Sản Phẩm & Tồn Kho:** Thêm, sửa, xóa sản phẩm, tải lên hàng loạt ảnh WebP, quản lý biến thể đa thuộc tính.
* **3.3. Quản lý Đơn Hàng & Cọc Tiền:** Tra cứu trạng thái đơn hàng (Chờ cọc, Đã cọc, Đang xử lý, Hoàn thành, Đã hủy).
* **3.4. Cổng Quản Lý Cộng Tác Viên (CTV):** Cấp link giới thiệu UTM định danh cho từng đại lý, tự động trích hoa hồng vào ví CTV.
* **3.5. Nhật Ký Kiểm Toán (Audit Trail):** Ghi vết bất biến mọi thao tác của nhân viên (Ai đã xem, sửa, xuất dữ liệu khách hàng VIP lúc nào từ IP nào).

### WBS 4.0: Tự Động Hóa Thanh Toán & Đối Soát VietQR Pro (0đ Phí)
* **4.1. Tạo mã QR động:** Tự động sinh mã VietQR chuẩn NAPAS247 kèm số tiền chính xác và cú pháp đơn hàng độc nhất.
* **4.2. Webhook Listener:** Lắng nghe biến động số dư ngân hàng qua SePay / Casso, đối soát và kích hoạt đơn hàng trong **< 0.5 giây**.
* **4.3. Tự động hóa thông báo:** Tự động bắn thông báo chốt cọc thành công vào nhóm Telegram / Zalo của chủ shop trong **< 30 giây**.

### WBS 5.0: Động Cơ Khóa Phân Tán Chống Bán Trùng (Redis Lock Engine)
* **5.1. Khóa giao dịch nguyên tử:** Khi khách hàng bấm "Đặt cọc", sản phẩm bị khóa tạm thời trong 15 phút bằng Redis Distributed Lock (Redlock).
* **5.2. Giải phóng kho tự động:** Nếu khách hàng không quét mã thanh toán trong 15 phút, hệ thống tự động mở lại sản phẩm cho khách khác mà không cần nhân viên can thiệp.

### WBS 6.0: Hạ Tầng Đám Mây, Bảo Mật & Đóng Gói Xuất Xưởng
* **6.1. Docker hóa hệ thống:** Đóng gói ứng dụng thành các Docker containers độc lập.
* **6.2. Cấu hình Nginx & SSL/TLS:** Thiết lập Reverse Proxy, chứng chỉ HTTPS tự động gia hạn, bảo vệ chống DoS/Brute-force.
* **6.3. Tự động sao lưu dữ liệu (Automated Backup):** Cấu hình cron job tự động sao lưu CSDL hàng ngày lúc 02:00 AM đẩy lên Amazon S3 / Google Drive.

---

## 3. RANH GIỚI PHẠM VI RẠCH RÒI (IN-SCOPE VS OUT-OF-SCOPE)

| Hạng mục | Thuộc phạm vi SynapForge thực thi (IN-SCOPE) | Nằm ngoài phạm vi dự án (OUT-OF-SCOPE) |
| :--- | :--- | :--- |
| **Giao diện & UI** | Thiết kế giao diện Web Responsive tương thích máy tính, máy tính bảng và điện thoại di động | Xuất bản ứng dụng Native App độc lập lên Apple App Store / Google Play Store *(Cần ký gói mở rộng riêng)* |
| **Mã nguồn** | Lập trình toàn bộ mã nguồn sạch theo chuẩn Clean Architecture, bàn giao 100% Repository | Can thiệp hoặc sửa đổi mã nguồn phần mềm kế toán / ERP cũ của bên thứ ba mà khách hàng đang dùng |
| **Thanh toán** | Tích hợp cổng VietQR Pro tự động khớp tiền ngân hàng (0đ phí cổng) | Tích hợp các cổng thanh toán quốc tế phức tạp (Stripe/PayPal đa tiền tệ) nếu không thỏa thuận từ đầu |
| **Nội dung** | Tạo khung dữ liệu mẫu, nhập liệu thử nghiệm từ 20 – 50 sản phẩm ban đầu | Nhập liệu toàn bộ hàng ngàn sản phẩm hoặc viết bài content copywriting chuẩn SEO cho khách hàng |
| **Hạ tầng** | Cài đặt và cấu hình hoàn chỉnh hệ thống trên máy chủ VPS Linux của khách hàng | Chi phí mua máy chủ VPS hàng tháng và chi phí duy trì tên miền *(Khách hàng thanh toán trực tiếp cho nhà cung cấp)* |

---

## 4. QUY TRÌNH THAY ĐỔI YÊU CẦU NGHIỆP VỤ (CHANGE REQUEST PROCESS - CR)

Nếu trong quá trình triển khai, khách hàng có nhu cầu bổ sung tính năng mới nằm ngoài bảng WBS:

```
[Khách hàng đề xuất tính năng mới] ──> [SynapForge phân tích tác động (< 24h)]
                                                    │
                 ┌──────────────────────────────────┴──────────────────────────────────┐
                 ▼                                                                     ▼
    [Dưới 1 Man-day (Nhỏ)]                                                [Trên 1 Man-day (Lớn)]
  Thực hiện miễn phí trong Sprint                                       Lập phiếu Change Request (CR)
  để tối ưu trải nghiệm khách hàng                                      Báo giá bổ sung & dời tiến độ tương ứng
```

* **Công thức tính phí Change Request:**  
  `Chi phí bổ sung = Số ngày công kỹ sư (Man-days) × 1.200.000 VNĐ`
* Sau khi hai bên ký phụ lục Change Request, tính năng mới sẽ được đưa vào Sprint tiếp theo.

---

## 5. TIÊU CHUẨN NGHIỆM THU ĐẦU RA (DEFINITION OF DONE - DOD)
Một tính năng chỉ được ký nghiệm thu khi thỏa mãn 5 tiêu chí bắt buộc:
1. **Functional Test:** Hoạt động đúng 100% theo mô tả trong WBS, không phát sinh lỗi ngoại lệ (500 Internal Server Error).
2. **Cross-browser:** Hiển thị hoàn hảo trên Google Chrome, Apple Safari, Firefox và Microsoft Edge.
3. **Mobile Responsive:** Giao diện co giãn chuẩn xác trên màn hình iPhone, Samsung Galaxy và iPad.
4. **Performance:** Thời gian phản hồi API trung bình **< 100ms**, truy vấn danh mục **< 8ms**.
5. **Code Review:** Vượt qua kiểm tra chất lượng mã nguồn từ Tech Lead Lê Trí Trung.