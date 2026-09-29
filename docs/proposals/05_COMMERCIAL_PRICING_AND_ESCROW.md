# BÁO GIÁ THƯƠNG MẠI, BÓC TÁCH CHI PHÍ & CƠ CHẾ KÝ QUỸ 40/60 (COMMERCIAL PRICING & ESCROW)
> **Bảng định giá dịch vụ kỹ nghệ, bóc tách ngày công (Man-day) & cơ chế thanh toán an toàn cho khách hàng**  
> **Áp dụng cho:** Báo giá chính thức và Hợp đồng Dân sự / Kinh tế tại SynapForge  
> **Nguyên tắc:** Minh bạch 100%, Không chi phí ẩn, Khách hàng nắm đằng chuôi với cơ chế 40/60  

---

## 1. NGUYÊN TẮC ĐỊNH GIÁ DỊCH VỤ TẠI SYNAPFORGE
Khác với các công ty gia công truyền thống báo giá mập mờ rồi liên tục phát sinh chi phí phụ, SynapForge áp dụng:
1. **Giá Trọn Gói Cố Định (Fixed-Price Turnkey):** Chi phí ký trên hợp đồng là chi phí cuối cùng, bao gồm trọn gói: Thiết kế UI/UX, Lập trình Frontend & Backend, Cấu hình máy chủ Cloud, Kiểm thử tải và Bảo hành.
2. **Tiết Kiệm Nhờ Tái Sử Dụng Module (Flywheel Advantage):** Nhờ sở hữu kho [13 Module Tự động hóa SaaS](../services/saas/README.md) đã được kiểm chứng thực chiến, SynapForge giúp khách hàng **tiết kiệm từ 40% đến 60% ngân sách** so với việc thuê đơn vị khác code từ đầu.
3. **Cơ chế Ký quỹ 40/60 (40/60 Milestone Escrow):** Khách hàng chỉ thanh toán 40% khởi động, 60% còn lại chỉ thanh toán khi đã nghiệm thu 100% hài lòng trên Internet.

---

## 2. BẢNG SO SÁNH 3 GÓI DỊCH VỤ TIÊU CHUẨN

```
┌────────────────────────────────────────────────────────────────────────────────┐
│             BẢNG LỰA CHỌN GÓI DỊCH VỤ PHẦN MỀM CHUẨN SYNAPFORGE                │
├─────────────────────────┬──────────────────────────┬───────────────────────────┤
│    GÓI 1: MVP SPRINT    │ GÓI 2: GROWTH PRODUCTION │ GÓI 3: ENTERPRISE SCALE   │
│   11.500.000 VNĐ        │ 18.500.000 VNĐ (Phổ biến)│ 33.000.000 VNĐ            │
├─────────────────────────┼──────────────────────────┼───────────────────────────┤
│• Thời gian: 30 Ngày     │• Thời gian: 45 Ngày      │• Thời gian: 60 Ngày       │
│• Landing Page cao cấp   │• Sàn giao dịch / Web TMĐT│• Hệ thống phân tán lớn    │
│• CSDL: 15-25 Bảng       │• CSDL: 30-50 Bảng        │• CSDL: 50-70+ Bảng        │
│• Thanh toán VietQR Pro  │• VietQR + Redis Lock     │• VietQR + Redlock + DLQ   │
│• Bot Telegram < 30s     │• Cổng đại lý CTV / UTM   │• Cổng CTV + Audit Trail   │
│• Bảo hành: 60 Ngày      │• Bảo hành: 60 Ngày       │• Bảo hành: 90 Ngày        │
└─────────────────────────┴──────────────────────────┴───────────────────────────┘
```

| Tiêu chí so sánh | Gói MVP Sprint | Gói Growth Production *(Khuyên nghị)* | Gói Enterprise Scale |
| :--- | :--- | :--- | :--- |
| **Giá trọn gói** | **11.500.000 VNĐ** | **18.500.000 VNĐ** | **33.000.000 VNĐ** |
| **Thời gian bàn giao** | **30 Ngày làm việc** | **45 Ngày làm việc** | **60 Ngày làm việc** |
| **Phù hợp nhất với** | Founders cần MVP thần tốc để gọi vốn hoặc thử nghiệm thị trường | Doanh nghiệp bán hàng, sàn giao dịch cần tự động hóa khâu cọc tiền | Nền tảng chịu tải lớn, microservices, cần kiểm toán an ninh nghiêm ngặt |
| **Kiến trúc mã nguồn** | Modular Monolith (.NET 8 / React 19) | Clean Architecture 4 Tầng (.NET / Java) | Distributed Architecture + Message Queue |
| **Quy mô CSDL** | 15 – 25 Bảng thực thể | 30 – 50 Bảng thực thể | 50 – 70+ Bảng thực thể tối ưu GIN Index |
| **Thanh toán tự động** | VietQR Pro 0đ phí cổng | VietQR Pro 0đ phí cổng | VietQR Pro 0đ phí cổng |
| **Khóa chống bán trùng**| Cơ bản (DB Transaction) | Nâng cao (Redis Distributed Lock) | Phân tán Redlock đa cụm máy chủ |
| **Quản lý Đại lý CTV** | Không bao gồm | Có cổng CTV & ví hoa hồng tự động | Cổng CTV + Phân tầng chiết khấu ma trận |
| **Bảo mật & Kiểm toán** | JWT Auth cơ bản | Dual-Token Auth + RBAC | Dual-Token + Immutable Audit Trail Logs |
| **Thời hạn bảo hành** | **60 Ngày miễn phí** | **60 Ngày miễn phí** | **90 Ngày miễn phí** |

---

## 3. BÓC TÁCH CHI PHÍ THEO NGÀY CÔNG (MAN-DAY BREAKDOWN)
Đơn giá ngày công kỹ sư chuẩn mực tại SynapForge: **1.200.000 VNĐ / Man-day** (Áp dụng cho kỹ sư FPT/FSoft 3+ năm kinh nghiệm).

### Bóc tách ngày công Gói Growth Production (Ví dụ mẫu: 18.5M):
* **UI/UX Designer (3 Man-days = 3.600.000 VNĐ):** Nghiên cứu luồng người dùng, vẽ Figma Clickable Prototype chuẩn Thụy Sĩ.
* **Frontend Lead (7 Man-days = 8.400.000 VNĐ):** Lập trình React 19 / Next.js 16, tối ưu SEO, hiệu ứng mượt 60 FPS.
* **Backend Architect (8 Man-days = 9.600.000 VNĐ):** Thiết kế CSDL PostgreSQL, viết API Clean Architecture, tích hợp VietQR và Redis Lock.
* **DevOps & QA Engineer (3 Man-days = 3.600.000 VNĐ):** Cấu hình Cloud VPS, Nginx, SSL, kiểm thử tải và bàn giao.
* *Tổng giá trị ngày công thực tế:* **25.200.000 VNĐ**.  
* *Chiết khấu đối tác thân thiết (-26.5%):* **- 6.700.000 VNĐ** (Nhờ kế thừa các module sẵn có từ BrandHub & BienSoVip).  
* **==> Giá thanh toán thực tế:** **18.500.000 VNĐ (Trọn gói)**.

---

## 4. BẢNG GIÁ MODULE TÍCH HỢP RỜI (A LA CARTE MODULE ADD-ONS)
Khách hàng có thể tùy chọn bổ sung thêm các module chuyên biệt từ kho SaaS của SynapForge:

| Mã Module | Tên Module Tự Động Hóa | Đơn giá bổ sung | Thời gian tích hợp |
| :---: | :--- | :---: | :---: |
| **M-01** | [Phễu Lead & Chốt Cọc Đa Bước](../services/saas/01_lead_funnel/MODULE_INFO.md) | **2.000.000 VNĐ** | 2 Ngày |
| **M-02** | [Đối Soát VietQR Pro Tự Động < 0.5s](../services/saas/02_vietqr_reconcile/MODULE_INFO.md) | **2.500.000 VNĐ** | 2 Ngày |
| **M-03** | [Động Cơ Khóa Phân Tán Redis Lock](../services/saas/03_inventory_lock/MODULE_INFO.md) | **2.000.000 VNĐ** | 2 Ngày |
| **M-04** | [Trợ Lý AI CSKH & Tư Vấn 24/7](../services/saas/04_ai_advisory/MODULE_INFO.md) | **3.500.000 VNĐ** | 4 Ngày |
| **M-05** | [Bộ Sinh Ảnh Phối Cảnh Mockup 1-Click](../services/saas/05_mockup_gen/MODULE_INFO.md) | **2.500.000 VNĐ** | 3 Ngày |
| **M-06** | [Email Builder Kéo-Thả & Gửi SMTP 0đ](../services/saas/06_email_builder/MODULE_INFO.md) | **2.500.000 VNĐ** | 3 Ngày |
| **M-07** | [Cổng Đại Lý / CTV & Ví Hoa Hồng](../services/saas/07_ctv_portal/MODULE_INFO.md) | **3.000.000 VNĐ** | 3 Ngày |
| **M-08** | [Nhật Ký Kiểm Toán Audit Trail Bảo Mật VIP](../services/saas/08_audit_security/MODULE_INFO.md) | **2.000.000 VNĐ** | 2 Ngày |
| **M-11** | [Đăng Bài Đa Kênh Tự Động (RabbitMQ DLQ)](../services/saas/11_omnichannel_publisher/MODULE_INFO.md) | **4.500.000 VNĐ** | 5 Ngày |
| **M-12** | [RAG Nhận Diện Giọng Văn Thương Hiệu](../services/saas/12_ai_brand_rag/MODULE_INFO.md) | **5.000.000 VNĐ** | 5 Ngày |

---

## 5. ĐIỀU KHOẢN KÝ QUỸ AN TOÀN 40/60 (40/60 MILESTONE ESCROW)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                 LỘ TRÌNH THANH TOÁN 2 ĐỢT AN TOÀN CHO KHÁCH HÀNG              │
├────────────────────────────────────────┬───────────────────────────────────────┤
│         ĐỢT 1: 40% KHỞI ĐỘNG           │          ĐỢT 2: 60% NGHIỆM THU        │
│    (Thanh toán khi ký hợp đồng)        │ (CHỈ THANH TOÁN KHI HÀI LÒNG 100%)    │
├────────────────────────────────────────┼───────────────────────────────────────┤
│• Ký hợp đồng dân sự pháp lý minh bạch  │• Toàn bộ tính năng đã chạy trên Cloud │
│• Thiết kế trọn bộ Figma UI/UX          │• Kiểm thử thanh toán VietQR thật      │
│• Lập trình Frontend & Backend APIs     │• Khách hàng ký Biên bản nghiệm thu    │
│• Cung cấp bản demo Staging để test     │• Chuyển giao 100% mã nguồn trên GitHub│
└────────────────────────────────────────┴───────────────────────────────────────┘
```

* **Cam kết bảo vệ vốn:** Nếu trong vòng 7 ngày đầu tiên (kết thúc Sprint 1), khách hàng không hài lòng với bản thiết kế kiến trúc và định hướng UI/UX, SynapForge cam kết hoàn trả **100% số tiền cọc Đợt 1**, không giữ lại bất kỳ khoản phí nào.

---

## 6. ĐIỀU KHOẢN THƯỞNG BÀN GIAO SỚM & PHẠT CHẬM TIẾN ĐỘ
* **Thưởng hoàn thành sớm:** Nếu SynapForge bàn giao sản phẩm hoàn chỉnh và được nghiệm thu sớm hơn thời hạn hợp đồng (sau 2 ngày ân hạn), khách hàng thưởng **200.000 VNĐ / ngày bàn giao sớm** như một sự ghi nhận nỗ lực tăng ca của đội ngũ kỹ sư.
* **Phạt chậm tiến độ:** Nếu việc chậm trễ xuất phát từ lỗi chủ quan của SynapForge, SynapForge chịu phạt **200.000 VNĐ / ngày chậm trễ**, số tiền phạt sẽ được trừ trực tiếp vào đợt thanh toán 60% cuối cùng.