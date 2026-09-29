# KẾ HOẠCH TIẾN ĐỘ, LỘ TRÌNH SPRINTS & QUY CHUẨN GIAO TIẾP (AGILE DELIVERY PLAN)
> **Khung kế hoạch triển khai linh hoạt theo phương pháp luận Scrum, quản trị tiến độ & mốc bàn giao**  
> **Áp dụng cho:** Quản lý dự án SynapForge và Ban điều hành của Khách hàng  
> **Cam kết:** Bàn giao đúng hạn 100%, Demo sản phẩm thực tế định kỳ hàng tuần  

---

## 1. PHƯƠNG PHÁP LUẬN QUẢN TRỊ DỰ ÁN (AGILE/SCRUM FRAMEWORK)
SynapForge áp dụng triết lý phát triển phần mềm linh hoạt (Agile):
* **Chu kỳ Sprint:** Cố định **1 tuần / 1 Sprint** (hoặc 2 tuần tùy độ phức tạp của dự án).
* **Minh bạch hóa tiến độ (Radical Transparency):** Khách hàng được cấp quyền xem bảng công việc Jira/GitHub, theo dõi từng commit mã nguồn và thử nghiệm trực tiếp trên môi trường Staging sau mỗi Sprint.
* **Không "giấu code đến ngày cuối":** Sản phẩm được tích hợp liên tục (CI/CD), đảm bảo khách hàng nhìn thấy tiến trình tăng trưởng tính năng rõ rệt theo từng tuần.

```
                    TIẾN TRÌNH TRIỂN KHAI 4 SPRINTS TIÊU CHUẨN (6 TUẦN)
                    
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    SPRINT 1     │ ──> │    SPRINT 2     │ ──> │    SPRINT 3     │ ──> │    SPRINT 4     │
│   (TUẦN 1)      │     │  (TUẦN 2 - 3)   │     │  (TUẦN 4 - 5)   │     │    (TUẦN 6)     │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│• Phân tích SRS  │     │• Giao diện Web  │     │• Đối soát VietQR│     │• Kiểm thử tải   │
│• Figma Clickable│     │• API Danh mục   │     │• Redis Lock     │     │• Deploy Cloud   │
│• CSDL (ERD 50+) │     │• Lọc nhanh < 8ms│     │• Admin CMS      │     │• Nghiệm thu     │
│• Khung móng Git │     │• Đăng ký/Đăng nhập│   │• Bot Telegram   │     │• Bàn giao 100%  │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         ▼                       ▼                       ▼                       ▼
    [DEMO 1: UI/UX]         [DEMO 2: CORE]          [DEMO 3: PAYMENT]      [GO-LIVE PRODUCTION]
```

---

## 2. CHI TIẾT CÁC MỐC BÀN GIAO THEO SPRINTS (SPRINT DELIVERABLES)

### SPRINT 1 (Tuần 1): Thiết Kế Trải Nghiệm, Kiến Trúc CSDL & Khung Dự Án
* **Mục tiêu:** Chốt toàn bộ thiết kế giao diện và kiến trúc dữ liệu trước khi viết code.
* **Hạng mục thực hiện:**
  * Thẩm định yêu cầu nghiệp vụ chi tiết với khách hàng.
  * Thiết kế trọn bộ UI/UX trên Figma (Desktop + Mobile) và tạo Clickable Prototype.
  * Thiết kế sơ đồ cơ sở dữ liệu quan hệ (ERD) với 30 đến 60+ bảng thực thể.
  * Khởi tạo Repository Git, cấu hình Docker Compose và pipeline CI/CD cơ bản.
* **Kết quả bàn giao cuối Sprint 1:**
  * Bản vẽ Figma được khách hàng ký duyệt trực tiếp.
  * Bản tài liệu đặc tả kiến trúc cơ sở dữ liệu (Database Schema).

### SPRINT 2 (Tuần 2 – 3): Giao Diện Người Dùng & Cụm API Nghiệp Vụ Cốt Lõi
* **Mục tiêu:** Hoàn thiện toàn bộ mặt tiền ứng dụng (Front-Facing Web) và dữ liệu sản phẩm.
* **Hạng mục thực hiện:**
  * Lập trình giao diện Trang chủ, Trang danh mục, Chi tiết sản phẩm bằng React 19 / Next.js.
  * Xây dựng API Backend (.NET 8 / Java 21) cho danh mục và bộ lọc đa tiêu chí (< 8ms).
  * Tích hợp hệ thống xác thực hai lớp Dual-Token (JWT Memory + HttpOnly Cookie).
  * Triển khai bản dựng đầu tiên lên môi trường thử nghiệm `staging.ten-mien-khach-hang.com`.
* **Kết quả bàn giao cuối Sprint 2:** Khách hàng được cấp link Staging để trực tiếp lướt web, tìm kiếm và trải nghiệm giao diện mượt mà trên điện thoại.

### SPRINT 3 (Tuần 4 – 5): Tích Hợp Thanh Toán VietQR, Khóa Kho & Admin CMS
* **Mục tiêu:** Đóng gói toàn bộ chu trình thanh toán tự động và cổng quản trị doanh nghiệp.
* **Hạng mục thực hiện:**
  * Tích hợp thanh toán quét mã VietQR Pro động, tự động khớp cọc ngân hàng trong < 0.5s.
  * Kích hoạt động cơ Redis Distributed Lock chống bán trùng sản phẩm trong 15 phút.
  * Lập trình cổng quản trị Admin CMS: Quản lý đơn hàng, danh mục, tồn kho và mạng lưới CTV.
  * Tích hợp Bot cảnh báo Telegram tức thì (< 30s) mỗi khi có đơn cọc mới.
* **Kết quả bàn giao cuối Sprint 3:** Khách hàng trực tiếp dùng app ngân hàng thật quét mã QR thử nghiệm, hệ thống tự động đổi trạng thái đơn hàng và bắn tin nhắn báo về điện thoại.

### SPRINT 4 (Tuần 6): Kiểm Thử Tải, Đóng Gói Cloud & Bàn Giao Toàn Quyền
* **Mục tiêu:** Tôi luyện hệ thống dưới tải nặng, triển khai lên máy chủ thật và bàn giao.
* **Hạng mục thực hiện:**
  * Chạy kiểm thử chịu tải (Stress test giả lập 1,000 người dùng đồng thời) bằng k6 / JMeter.
  * Cấu hình máy chủ Cloud VPS Linux của khách hàng: Docker, Nginx, SSL/TLS, Tường lửa UFW.
  * Thiết lập lịch sao lưu CSDL tự động hàng ngày lúc 02:00 sáng đẩy lên Cloud Storage.
  * Tổ chức buổi đào tạo hướng dẫn sử dụng (Online / Trực tiếp) và bàn giao toàn bộ tài khoản.
* **Kết quả bàn giao cuối Sprint 4:**
  * Hệ thống chính thức chạy trên tên miền Internet của khách hàng (`https://ten-mien-khach-hang.com`).
  * Ký Biên bản Nghiệm thu kỹ thuật và chuyển giao 100% Repository GitHub.

---

## 3. QUY CHUẨN GIAO TIẾP & BÁO CÁO TIẾN ĐỘ (COMMUNICATION CADENCE)

| Kênh giao tiếp | Tần suất | Mục đích & Nội dung | Thành phần tham gia |
| :--- | :--- | :--- | :--- |
| **Kênh Telegram / Slack riêng** | Hàng ngày (09:30 AM) | Cập nhật tóm tắt tiến độ (Daily Standup): Đã làm gì hôm qua, sẽ làm gì hôm nay, có khó khăn gì cần khách hỗ trợ không. | Toàn bộ Dev team & Đại diện khách hàng |
| **Buổi Demo cuối Sprint** | Hàng tuần (Chiều thứ 6) | Trực tiếp chia sẻ màn hình qua Zoom / Google Meet (45 phút) để demo các tính năng mới hoàn thành trong tuần. | Tech Lead Lê Trí Trung & Ban Giám Đốc khách hàng |
| **Bảng theo dõi Jira / GitHub** | Thời gian thực (24/7) | Khách hàng được cấp tài khoản Guest để xem trạng thái từng thẻ công việc (To Do, In Progress, In Review, Done). | Quản lý dự án & Khách hàng |

---

## 4. NGHĨA VỤ PHẢN HỒI CỦA KHÁCH HÀNG (CLIENT RESPONSIBILITIES)
Tiến độ dự án phụ thuộc vào sự phối hợp chặt chẽ giữa hai bên. Khách hàng cam kết:
1. **Phản hồi duyệt thiết kế UI/UX (Sprint 1):** Phản hồi góp ý hoặc phê duyệt bản vẽ Figma trong vòng **không quá 48 giờ làm việc**.
2. **Cung cấp tài khoản tích hợp (Sprint 3):** Cung cấp thông tin tài khoản ngân hàng / API Key SePay / Tên miền kịp thời theo lịch hẹn kỹ thuật.
3. *Trường hợp khách hàng chậm phản hồi quá 3 ngày làm việc, mốc tiến độ bàn giao của Sprint tương ứng sẽ được tự động gia hạn thêm số ngày chậm trễ.*

---

## 5. KẾ HOẠCH DỰ PHÒNG & QUẢN TRỊ RỦI RO (CONTINGENCY & RISK BUFFER)
* **Thời gian ân hạn kỹ thuật (Buffer Days):** Lộ trình bàn giao luôn tích hợp sẵn **2 ngày đệm dự phòng** để xử lý các phát sinh ngoài dự kiến (như sự cố gián đoạn mạng diện rộng hoặc thay đổi chính sách từ API bên thứ ba).
* **Cơ chế Rollback an toàn:** Toàn bộ bản cập nhật lên máy chủ đều có bản snapshot dự phòng, cho phép hoàn tác về trạng thái ổn định trước đó trong vòng **dưới 3 phút** nếu phát hiện lỗi bất thường.