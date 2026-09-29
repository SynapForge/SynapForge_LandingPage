# QUY CHUẨN BÀN GIAO TOÀN QUYỀN & BIÊN BẢN NGHIỆM THU DỰ ÁN
> **Quy trình chuyển giao mã nguồn, hạ tầng đám mây và biên bản nghiệm thu kỹ thuật chuẩn**  
> **Áp dụng cho:** Toàn bộ các hợp đồng gia công phần mềm (Outsource) và Turnkey MVP tại SynapForge  
> **Cam kết:** Bàn giao 100% Quyền sở hữu trí tuệ, Không ràng buộc phụ thuộc (Zero Lock-in), Sẵn sàng vận hành độc lập  

---

## 1. NGUYÊN TẮC BÀN GIAO TOÀN QUYỀN (100% ZERO LOCK-IN PRINCIPLE)
SynapForge cam kết khách hàng nắm giữ toàn quyền kiểm soát tuyệt đối sản phẩm sau khi nghiệm thu:
1. **Không giấu mã nguồn:** Toàn bộ Repository (Frontend, Backend, Database scripts, Docker configs) được chuyển quyền quản trị viên cao nhất (Owner) sang tài khoản GitHub / GitLab của khách hàng.
2. **Không ép dùng Cloud trung gian:** Hệ thống được triển khai trực tiếp trên tài khoản VPS/Cloud (AWS / DigitalOcean / Vercel / Cloudflare) do khách hàng đứng tên và sở hữu thẻ thanh toán.
3. **Không tính phí bản quyền duy trì ngầm:** Không có bất kỳ chi phí duy trì phần mềm định kỳ nào ngoại trừ chi phí thuê máy chủ thực tế khách hàng trả trực tiếp cho nhà cung cấp hạ tầng.

---

## 2. BẢNG CHECKLIST KIỂM TRA TRƯỚC BÀN GIAO (PRE-HANDOVER CHECKLIST)

### 2.1. Mã nguồn & Phiên bản Git (Codebase & Version Control)
* [ ] Kiểm tra toàn bộ mã nguồn sạch, đã xóa bỏ các đoạn mã comment thừa, mã thử nghiệm (debug code), và các token test bí mật.
* [ ] Kiểm tra file `README.md` trong thư mục gốc của repository có hướng dẫn cài đặt và chạy máy local chi tiết (Local Setup Guide).
* [ ] Đóng gói toàn bộ file cấu hình môi trường mẫu (`.env.example`) với mô tả rõ ràng từng biến cấu hình.
* [ ] Chuyển giao quyền **Owner / Admin** của Repository Git cho email đại diện kỹ thuật của khách hàng.

### 2.2. Cơ sở dữ liệu & Tệp di chuyển (Database & Migration)
* [ ] Xuất bản sao lưu cơ sở dữ liệu mới nhất (Database Dump: `.sql` hoặc file nén `.dump`).
* [ ] Đảm bảo toàn bộ các file migration (EF Core Migrations hoặc Flyway/Liquibase) chạy thành công từ đầu đến cuối trên cơ sở dữ liệu trống.
* [ ] Kiểm tra toàn bộ các bảng bắt buộc có đầy đủ chỉ mục (GIN Index, B-Tree Index) theo chuẩn [Database Indexing Playbook](../standards/03_SECURITY_AND_PERFORMANCE.md).
* [ ] Cung cấp tài khoản quản trị Database riêng biệt cho khách hàng, đổi mật khẩu mặc định của môi trường dev.

### 2.3. Hạ tầng Đám mây & Mạng (Cloud VPS, Domain & SSL)
* [ ] Cấu hình tường lửa máy chủ (UFW / AWS Security Group): Chỉ mở port `80` (HTTP), `443` (HTTPS), port SSH được bảo vệ bằng SSH Key (vô hiệu hóa đăng nhập bằng mật khẩu root).
* [ ] Thiết lập chứng chỉ bảo mật SSL/TLS tự động gia hạn (Let's Encrypt Certbot hoặc Cloudflare Universal SSL).
* [ ] Cấu hình Nginx Reverse Proxy với bộ đệm gzip/brotli và đầy đủ các HTTP Security Headers (HSTS, CSP, X-Frame-Options).
* [ ] Bàn giao toàn bộ thông tin đăng nhập máy chủ (IP, SSH Key, Port, Root Password) vào file tài liệu bảo mật riêng biệt.

### 2.4. Dịch vụ Tích hợp Bên thứ ba (Third-Party Services)
* [ ] Cổng thanh toán VietQR Pro / SePay: Đổi Webhook URL từ môi trường staging sang domain chính thức của khách hàng.
* [ ] Dịch vụ gửi email (AWS SES / Resend / Google Workspace SMTP): Xác thực thành công bản ghi DKIM, SPF, DMARC cho tên miền của khách hàng để email không bị rơi vào hòm thư Spam.
* [ ] Dịch vụ cảnh báo Telegram / Zalo Bot: Cấp quyền quản trị viên nhóm bot cho đội ngũ vận hành của khách hàng.
* [ ] Dịch vụ lưu trữ tệp (AWS S3 / Cloudinary): Bàn giao API Key & Secret Key lưu trữ thuộc tài khoản của khách hàng.

---

## 3. MẪU BIÊN BẢN NGHIỆM THU & BÀN GIAO KỸ THUẬT (ACCEPTANCE PROTOCOL)

```
                            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                                Độc lập - Tự do - Hạnh phúc
                                          ---o0o---

                       BIÊN BẢN NGHIỆM THU & BÀN GIAO SẢN PHẨM PHẦN MỀM
                           (Mã biên bản: SF- nghiệm-thu-2026/[Mã-HĐ])

Hôm nay, ngày ...... tháng ...... năm 2026, tại văn phòng TP. Đà Nẵng, chúng tôi gồm có:

BÊN BÀN GIAO (BÊN A - NHÀ THẦU CÔNG NGHỆ):
• Đơn vị: SynapForge Venture & Engineering Studio
• Đại diện: Ông Lê Trí Trung — Chức vụ: Founder & Head of Technology
• Số điện thoại: 0912 158 715 — Email: contact@synapforge.dev

BÊN TIẾP NHẬN (BÊN B - KHÁCH HÀNG):
• Đơn vị: [Tên Doanh Nghiệp / Cá Nhân Khách Hàng]
• Đại diện: [Họ và tên người đại diện] — Chức vụ: [Giám đốc / Chủ sở hữu]
• Số điện thoại: [..................] — Email: [..................]

Hai bên cùng tiến hành kiểm tra thực tế và thống nhất các nội dung nghiệm thu như sau:

ĐIỀU 1: HẠNG MỤC SẢN PHẨM ĐÃ TRIỂN KHAI VÀ HOÀN THÀNH
1. Hệ thống Website / Ứng dụng đã được cài đặt và vận hành ổn định tại tên miền chính thức:
   Domain: https://[ten-mien-khach-hang].com
2. Các tính năng cốt lõi theo Hợp đồng và Bảng đặc tả yêu cầu kỹ thuật (SRS) đã được kiểm thử 
   chức năng (Functional Testing) và đạt yêu cầu:
   [x] Phân hệ giao diện người dùng (Client-Facing Web)
   [x] Phân hệ quản trị nội dung & báo cáo (Admin Control Center)
   [x] Phân hệ đối soát thanh toán tự động VietQR (0đ phí cổng)
   [x] Khóa phân tán chống xung đột dữ liệu Redis Lock
   [x] Hệ thống nhật ký kiểm toán bảo mật dữ liệu khách hàng
3. Tốc độ phản hồi trung bình của hệ thống đạt tiêu chuẩn kỹ thuật SynapForge (< 100ms).

ĐIỀU 2: TÀI LIỆU VÀ TÀI KHOẢN HẠ TẦNG ĐÃ BÀN GIAO
Bên A đã bàn giao đầy đủ cho Bên B:
1. Toàn bộ Repository mã nguồn gốc trên GitHub (Chuyển quyền Owner).
2. Toàn bộ tài khoản Cloud VPS, Cơ sở dữ liệu và Tên miền.
3. Tài liệu hướng dẫn vận hành hệ thống (Operator Runbook) và Video hướng dẫn quản trị CMS.

ĐIỀU 3: KẾT LUẬN & KÍCH HOẠT NGHĨA VỤ THANH TOÁN
1. Bên B xác nhận toàn bộ hệ thống đã hoạt động đúng theo thỏa thuận, giao diện mượt mà và 
   chấp thuận nghiệm thu 100% kết quả công việc.
2. Bên B tiến hành thực hiện nghĩa vụ thanh toán Đợt 2 (60% giá trị hợp đồng còn lại), tương 
   đương số tiền: [Số tiền bằng số] VNĐ (Bằng chữ: [..............................]).
3. Bên A chính thức kích hoạt thời hạn bảo hành kỹ thuật miễn phí [60 / 90] ngày kể từ ngày ký 
   biên bản này, với cam kết SLA xử lý sự cố khẩn cấp dưới 4 giờ.

Biên bản này được lập thành 02 (hai) bản có giá trị pháp lý như nhau, mỗi bên giữ 01 bản.

            ĐẠI DIỆN BÊN A                                      ĐẠI DIỆN BÊN B
            (Ký và ghi rõ họ tên)                               (Ký và ghi rõ họ tên)
            
            
            
              LÊ TRÍ TRUNG                                      [HỌ TÊN ĐẠI DIỆN]
```

---

## 4. QUY CHẾ BẢO HÀNH SAU BÀN GIAO (POST-LAUNCH WARRANTY SLA)
Sau khi ký biên bản nghiệm thu, dự án bước vào giai đoạn bảo hành chính thức:
* **Thời gian bảo hành:** 60 – 90 ngày (tùy theo gói dịch vụ đã chọn).
* **Phạm vi bảo hành miễn phí:** Toàn bộ các lỗi kỹ thuật phát sinh (bugs), lỗi giao diện trên các trình duyệt phổ biến, lỗi kết nối cơ sở dữ liệu hoặc sự cố nghẽn hàng đợi do lỗi mã nguồn của SynapForge.
* **Thời gian phản hồi cam kết (SLA Response Time):**
  * Sự cố nghiêm trọng (Hệ thống sập, khách hàng không thể đặt hàng/thanh toán): **Phản hồi và bắt tay xử lý trong vòng dưới 30 phút, khắc phục trong tối đa 4 giờ**.
  * Sự cố mức độ trung bình (Lỗi hiển thị nhỏ, chỉnh sửa nhãn chữ): **Xử lý trong vòng 24 giờ làm việc**.