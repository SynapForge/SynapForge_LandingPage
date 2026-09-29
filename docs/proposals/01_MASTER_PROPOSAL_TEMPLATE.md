# BẢN ĐỀ XUẤT GIẢI PHÁP TỔNG THỂ & BÁO GIÁ DỰ ÁN (MASTER PROJECT PROPOSAL)
> **Tài liệu đề xuất kỹ thuật & thương mại chính thức gửi khách hàng doanh nghiệp & nhà sáng lập**  
> **Đơn vị phát hành:** SynapForge Venture & Engineering Studio  
> **Đại diện kỹ thuật:** Lê Trí Trung — Founder & Head of Technology  
> **Hiệu lực báo giá:** 15 ngày kể từ ngày ban hành  

---

## 1. THÔNG TIN DỰ ÁN & CÁC BÊN THAM GIA (PROJECT OVERVIEW)

| Thông tin | Chi tiết bên yêu cầu (Khách hàng) | Chi tiết bên thực thi (SynapForge) |
| :--- | :--- | :--- |
| **Tên đơn vị** | `[TÊN DOANH NGHIỆP / TỔ CHỨC CỦA KHÁCH HÀNG]` | **SynapForge Venture & Engineering Studio** |
| **Đại diện** | `[Họ và tên người đại diện, Chức vụ]` | **Ông Lê Trí Trung** — Founder & Head of Technology |
| **Liên hệ** | `[Số điện thoại, Email]` | **0912 158 715** — `contact@synapforge.dev` |
| **Địa chỉ** | `[Địa chỉ trụ sở khách hàng]` | Hải Châu, TP. Đà Nẵng, Việt Nam |
| **Tên dự án** | `[TÊN DỰ ÁN PHẦN MỀM / NỀN TẢNG]` | Mã dự án nội bộ: `SF-PRJ-2026/[MÃ-DỰ-ÁN]` |
| **Thời gian triển khai** | `[30 / 45 / 60]` Ngày làm việc | Bắt đầu ngay sau khi nhận cọc Đợt 1 (40%) |

---

## 2. BỐI CẢNH THỰC TẾ & MỤC TIÊU CHIẾN LƯỢC (BUSINESS CONTEXT & GOALS)

### 2.1. Thực trạng & Nỗi đau hiện tại của Khách hàng
* Hệ thống hiện tại vận hành thủ công hoặc sử dụng nền tảng mẫu (template) cũ kỹ, tốc độ tải trang chậm chạp (> 3 giây), tỷ lệ thoát trang cao.
* Khâu thanh toán và xác nhận cọc phụ thuộc vào chụp ảnh chuyển khoản ngân hàng thủ công, dẫn đến tình trạng chậm trễ xác nhận, sót đơn hoặc nhầm lẫn doanh thu.
* Nguy cơ bán trùng đơn hàng khi nhiều khách cùng đặt cọc một sản phẩm độc bản tại cùng một thời điểm.
* Phải chi trả từ 1.5% đến 2.5% phí giao dịch cho các cổng thanh toán trung gian truyền thống.

### 2.2. Mục tiêu giải pháp sau khi SynapForge hoàn thành
1. **Nâng tầm trải nghiệm thương hiệu:** Xây dựng website/nền tảng theo tiêu chuẩn thẩm mỹ Thụy Sĩ (Swiss Minimalist), đạt điểm số Google Lighthouse **> 90/100**, tốc độ tải trang dưới **1 giây**.
2. **Tự động hóa thanh toán 100% (0đ phí cổng):** Tích hợp đối soát VietQR Pro tự động khớp tiền cọc trong **dưới 0.5 giây**, loại bỏ hoàn toàn chi phí trung gian.
3. **Tuyệt đối không bán trùng (Zero Collision):** Khóa phân tán Redis Lock bảo vệ kho hàng độc bản, giữ chỗ tự động trong 15 phút.
4. **Nâng cao tỷ lệ chuyển đổi:** Tăng trưởng ít nhất **35% tỷ lệ chốt đơn** nhờ phễu mua hàng tương tác cao, trợ lý AI tư vấn 24/7 và thông báo Social Proof thời gian thực.

---

## 3. GIẢI PHÁP KỸ NGHỆ CỐT LÕI (TECHNICAL BLUEPRINT)

```
       KIẾN TRÚC TỔNG THỂ HỆ THỐNG DO SYNAPFORGE THIẾT KẾ & TRIỂN KHAI
       
┌────────────────────────────────────────────────────────────────────────┐
│                        TẦNG TRẢI NGHIỆM GIAO DIỆN                      │
│   React 19 / Next.js 16 + Tailwind CSS (Tối ưu Mobile 100%, 60 FPS)    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / WSS / JWT
┌───────────────────────────────────▼────────────────────────────────────┐
│                    API GATEWAY & AN NINH HỆ THỐNG                      │
│   • Redis Token Bucket Rate Limiting (Chống DoS / Brute-force)         │
│   • Dual-Token Auth (Access Token 15p Memory + Refresh HttpOnly 7d)    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                  LÕI NGHIỆP VỤ CLEAN ARCHITECTURE (.NET / JAVA)        │
│   • Domain Logic độc lập 100% với Database và Framework                │
│   • Redis Distributed Lock (Chống bán trùng sản phẩm tại cùng 1 ms)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                     HẠ TẦNG DỮ LIỆU & TỰ ĐỘNG HÓA                      │
│   • PostgreSQL CSDL tối ưu GIN / B-Tree Index (Truy vấn < 8ms)         │
│   • VietQR Webhook Listener (Khớp cọc tự động < 0.5s, 0đ phí)          │
│   • RabbitMQ DLQ (Bảo đảm giao vận tin cậy 100%, 0% mất tin nhắn)      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. BẢNG PHÂN RÃ HẠNG MỤC BÀN GIAO (CORE DELIVERABLES SUMMARY)

Chi tiết hạng mục công việc được đặc tả đầy đủ tại [02_STATEMENT_OF_WORK_SOW.md](./02_STATEMENT_OF_WORK_SOW.md):

* **Phân hệ Người dùng (Client-Facing Portal):**
  * Trang chủ, Giới thiệu thương hiệu chuẩn cao cấp với hiệu ứng chuyển động mượt mà.
  * Bộ lọc danh mục sản phẩm/dịch vụ đa tiêu chí với tốc độ truy vấn **< 8ms**.
  * Trang chi tiết sản phẩm tích hợp bộ sinh ảnh Mockup và công cụ so sánh trực quan.
  * Cổng thanh toán quét mã VietQR động tự động điền số tiền và nội dung đơn hàng.
  * Trợ lý AI tư vấn giải đáp thắc mắc khách hàng tự động 24/7.
* **Phân hệ Quản trị (Admin Control Center):**
  * Dashboard hiển thị biểu đồ doanh thu, số lượt quét mã cọc và telemetry thời gian thực.
  * Quản trị danh mục sản phẩm, biến thể và trạng thái kho hàng với khóa phân tán.
  * Cổng quản lý mạng lưới Cộng Tác Viên (CTV), cấp link UTM định danh và ví hoa hồng.
  * Nhật ký kiểm toán bất biến (Audit Trail) ghi vết mọi thao tác xem, sửa, xóa dữ liệu VIP.
* **Hạ tầng & Triển khai Cloud:**
  * Docker hóa 100% hệ thống, cấu hình Reverse Proxy Nginx, chứng chỉ bảo mật SSL/TLS.
  * Thiết lập tường lửa bảo mật, tự động sao lưu CSDL hàng ngày lên lưu trữ đám mây.

---

## 5. KẾ HOẠCH TIẾN ĐỘ THEO SPRINTS (AGILE ROADMAP)

Dự án được triển khai theo phương pháp luận Agile/Scrum chia thành các Sprint 1–2 tuần (xem chi tiết tại [04_TIMELINE_SPRINT_DELIVERY_PLAN.md](./04_TIMELINE_SPRINT_DELIVERY_PLAN.md)):

```
[Sprint 1: Kiến trúc & Wireframe] ──> [Sprint 2: Lập trình Giao diện & APIs] ──> [Sprint 3: Tích hợp Thanh toán & CMS] ──> [Sprint 4: Production]
```

1. **Sprint 1 (Tuần 1):** Khảo sát nghiệp vụ, phê duyệt bản thiết kế Figma tương tác và chốt sơ đồ CSDL (ERD).
2. **Sprint 2 (Tuần 2–3):** Lập trình toàn bộ giao diện Frontend và cụm API nghiệp vụ cốt lõi. Khách hàng trực tiếp kiểm tra bản demo Staging.
3. **Sprint 3 (Tuần 4–5):** Tích hợp đối soát VietQR, khóa phân tán Redis Lock, Bot Telegram thông báo và trung tâm quản trị Admin CMS.
4. **Sprint 4 (Tuần 6):** Kiểm thử chịu tải, tối ưu SEO, triển khai lên máy chủ Cloud VPS của khách hàng và tổ chức đào tạo chuyển giao.

---

## 6. CHI PHÍ ĐẦU TƯ & ĐIỀU KHOẢN KÝ QUỸ AN TOÀN 40/60

* **Gói dịch vụ lựa chọn:** `[Gói MVP Sprint / Growth Production / Enterprise Scale]`
* **Tổng kinh phí trọn gói:** **`[SỐ TIỀN BẰNG SỐ]` VNĐ** *(Bằng chữ: `[Số tiền bằng chữ]`)*
* **Không chi phí ẩn:** Giá trên đã bao gồm toàn bộ chi phí thiết kế, lập trình, cấu hình máy chủ, bảo mật và đào tạo chuyển giao.

### Cơ chế Hợp đồng Bảo vệ Khách hàng (40/60 Milestone Escrow)
Khách hàng không bao giờ phải chịu rủi ro trả trước 100% kinh phí:
* **Đợt 1 (40% Tương đương `[Số tiền]` VNĐ):** Thanh toán khi hai bên ký Hợp đồng Dân sự chính thức để khởi động Sprint 1.
* **Đợt 2 (60% Còn lại Tương đương `[Số tiền]` VNĐ):** **CHỈ THANH TOÁN** sau khi toàn bộ hệ thống đã được kiểm thử, triển khai hoạt động ổn định trên tên miền chính thức của khách hàng và đại diện khách hàng ký Biên bản Nghiệm thu hài lòng 100%.

---

## 7. CAM KẾT CHẤT LƯỢNG & QUYỀN SỞ HỮU TRÍ TUỆ (SLA & IP OWNERSHIP)

1. **Chuyển giao 100% Quyền sở hữu trí tuệ (100% Zero Lock-in):** Khách hàng sở hữu vĩnh viễn toàn bộ Repository mã nguồn trên GitHub, tài khoản Cloud VPS và CSDL. SynapForge không giữ bản quyền phụ.
2. **Chế độ bảo hành miễn phí:** Bảo hành kỹ thuật toàn diện trong **`[60 / 90]` ngày**.
3. **Cam kết thời gian xử lý sự cố (SLA):** Sự cố khẩn cấp (hệ thống gián đoạn, lỗi thanh toán) được phản hồi trong vòng **30 phút** và cam kết khắc phục trong tối đa **4 giờ**.
4. **Điều khoản thưởng phạt tiến độ:**
   * Thưởng hoàn thành sớm: Khách hàng thưởng `[X]%` cho mỗi ngày bàn giao trước hạn.
   * Phạt chậm tiến độ: Phạt `[Y] VNĐ/ngày` chậm trễ do lỗi chủ quan của đội ngũ kỹ thuật, khấu trừ trực tiếp vào đợt thanh toán 60% cuối cùng.

---

## 8. XÁC NHẬN CHẤP THUẬN ĐỀ XUẤT (PROPOSAL SIGN-OFF)

Khách hàng đồng ý với các nội dung đề xuất trên có thể ký xác nhận trực tiếp dưới đây hoặc phản hồi qua email để SynapForge soạn thảo Hợp đồng Kinh tế chính thức:

```
            ĐẠI DIỆN KHÁCH HÀNG                                   ĐẠI DIỆN SYNAPFORGE
            (Ký và ghi rõ họ tên)                                (Ký và ghi rõ họ tên)
            
            
            
            ....................................                  LÊ TRÍ TRUNG
            Ngày ký: ..... / ..... / 2026                         Ngày ký: ..... / ..... / 2026
```