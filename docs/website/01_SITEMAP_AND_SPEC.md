# ĐẶC TẢ KỸ THUẬT & KIẾN TRÚC WEBSITE CHÍNH THỨC SYNAPFORGE
> **Portal Architecture, Sitemap, UX Flow & Interactive Components Specification**  
> **Áp dụng cho:** Website chính thức tại `synapforge.dev` (React 19 + Tailwind CSS + Framer Motion)  
> **Mục tiêu:** Tạo trải nghiệm thị giác ấn tượng (Wow Factor), chứng minh năng lực kỹ thuật và chuyển đổi khách hàng tiềm năng  

---

## 1. SƠ ĐỒ CẤU TRÚC TRANG TOÀN DIỆN (SITEMAP & UX FLOW)

```
SYNAPFORGE OFFICIAL PORTAL (Single-Page App với Dynamic Deep Routing)
│
├── 🌐 1. HOME (Trang chủ chính thức)
│   ├── 1.1. Navigation Bar (Logo Monogram SF, Menu, Nút CTA "Khởi Động Dự Án")
│   ├── 1.2. Hero Section (Master Slogan: Forging Intelligence. Engineering Scale.)
│   ├── 1.3. Interactive Synapse Canvas (Mạng nơ-ron 3D tương tác theo chuột)
│   ├── 1.4. Brand Etymology & Principles (Giải mã tên gọi 3 âm tiết & Triết lý tôi thép)
│   ├── 1.5. Dual-Engine Flywheel (Mô hình Bánh đà kép tương tác: Produce & Outsource)
│   ├── 1.6. Flagship Ventures Showcase (2 Trụ cột cốt lõi: BrandHub & BienSoVip)
│   ├── 1.7. High-End Engineering Services (4 Dịch vụ kỹ nghệ cốt lõi)
│   ├── 1.8. 13 SaaS Automation Modules Explorer (Kho module thực chiến kèm ảnh thật)
│   ├── 1.9. Transparent Pricing & 40/60 Escrow (3 Gói cước minh bạch & Quy chế an toàn)
│   ├── 1.10. Interactive Project Estimator (Bộ tính toán dự toán kinh phí & thời gian)
│   ├── 1.11. Leadership & Core Engineering Team (Hồ sơ 5 kỹ sư cốt lõi & Tải CV PDF)
│   ├── 1.12. Battle-Tested Proof Metrics (0% rớt tin nhắn, CSDL 61 bảng, <8ms query)
│   ├── 1.13. Project Discovery & Contact Form (Form gửi yêu cầu tư vấn kỹ thuật)
│   └── 1.14. Terminal Footer (Console log giả lập, bản quyền & liên kết tài liệu)
│
├── 🚀 2. VENTURES (Trang chi tiết các sản phẩm hạt giống nội bộ)
│   ├── BrandHub AI MarTech Deep Dive (7 Microservices, GraphRAG Neo4j, RabbitMQ DLQ)
│   └── BienSoVip Marketplace Deep Dive (.NET 8 Clean Arch, 61 bảng CSDL, VietQR <0.5s)
│
├── 🛠️ 3. SERVICES (Trang chi tiết dịch vụ gia công & tiêu chuẩn kỹ thuật)
│   ├── Chi tiết 4 gói kỹ nghệ (Enterprise Web, Backend High-load, AI RAG, Turnkey MVP)
│   └── Chi tiết 13 module tự động hóa và demo giải pháp
│
├── 👥 4. TEAM & CAPABILITY (Trang hồ sơ năng lực thành viên)
│   └── Xem chi tiết 5 hồ sơ, công trình nghiên cứu ICTA 2026 và tải CV chính thức
│
└── 🧮 5. PROJECT ESTIMATOR (Bộ tính giá độc lập chia sẻ link cho khách hàng)
```

---

## 2. ĐẶC TẢ CHI TIẾT CÁC COMPONENT TƯƠNG TÁC ĐỘC QUYỀN

### 2.1. Hero Section & Interactive Synapse Canvas
* **Hiệu ứng thị giác:** Một nền canvas mạng nơ-ron (Synapse) với các hạt nơ-ron phát sáng màu cam `#FF5500` kết nối với nhau bằng các đường gân dữ liệu. Khi người dùng di chuột, các khớp nơ-ron sẽ phản ứng co giãn và bắn xung điện ánh sáng.
* **Nội dung hiển thị:**
  * Tagline phụ: `VENTURE STUDIO & HIGH-END ENGINEERING FACTORY`
  * Tiêu đề chính: `Forging Intelligence.` <br> `Engineering Scale.`
  * Mô tả: Venture Studio & Đối tác Kỹ nghệ Phần mềm Đẳng cấp tại Đà Nẵng, chuyên xây dựng nền tảng chịu tải, kiến trúc Microservices và tích hợp AI thực chiến.
  * 2 Nút CTA chính:
    * `Khám Phá Sản Phẩm Lõi` (Cuộn mượt đến #ventures)
    * `Tính Dự Toán Dự Án Ngay` (Cuộn mượt đến #estimator)

### 2.2. Flagship Ventures Showcase (Chỉ 2 Trụ cột cốt lõi)
Tuyệt đối không đưa các dự án gia công phụ vào khu vực này. Chỉ tập trung tối đa làm nổi bật 2 sản phẩm biểu tượng:
1. **BrandHub (AI MarTech Platform):**
   * Badges: `07 Microservices` • `0% Lost Rate` • `Neo4j GraphRAG` • `5 Nền Tảng MXH`
   * Hiển thị hình ảnh kiến trúc thực tế và các biểu đồ xuất bản đa kênh.
2. **BienSoVip (Luxury Marketplace Platform):**
   * Badges: `61 Bảng CSDL` • `Truy Vấn < 8ms` • `Khớp Cọc VietQR < 0.5s` • `.NET 8 Clean Arch`
   * Hiển thị giao diện đấu giá thực tế, bộ lọc biển số và đối soát ngân hàng tự động.

### 2.3. Interactive Project Cost Estimator (Bộ tính toán dự toán kinh phí trực quan)
Cho phép khách hàng tự tay lựa chọn các yêu cầu và tính toán ngay chi phí đầu tư dự kiến:
* **Bước 1: Chọn quy mô hệ thống (Platform Type):**
  * Landing Page / Web giới thiệu doanh nghiệp cao cấp (Từ 6M)
  * Sàn thương mại / Cổng dịch vụ / Đặt lịch trực tuyến (Từ 15M)
  * Hệ thống phân tán Microservices / Chịu tải cao (Từ 28M)
* **Bước 2: Chọn các module tích hợp sẵn (SaaS Add-ons):**
  * [ ] Thanh toán tự động VietQR Pro 0đ phí (+ 2.5M)
  * [ ] Khóa phân tán chống bán trùng Redis Lock (+ 2M)
  * [ ] Trợ lý AI CSKH / Tư vấn tự động 24/7 (+ 3.5M)
  * [ ] Cổng quản trị Đại lý / CTV & Ví hoa hồng (+ 3M)
  * [ ] Nhật ký kiểm toán bảo mật dữ liệu VIP (+ 2M)
* **Kết quả tính toán thời gian thực (Realtime Output):**
  * Ước tính chi phí đầu tư (VNĐ)
  * Thời gian bàn giao cam kết (Từ 30 – 60 ngày)
  * Nút hành động: `Tải Báo Giá PDF` hoặc `Gửi Yêu Cầu Cho Tech Lead Lê Trí Trung`.

---

## 3. TIÊU CHUẨN HIỆU NĂNG & THẨM MỸ (DESIGN EXCELLENCE STANDARDS)
* **Màu sắc & Độ tương phản:** Nền tối than chì `#0B0F17`, thẻ nội dung `#111827` viền mờ `#1F2937`, điểm nhấn màu Cam tôi thép `#FF5500`.
* **Tốc độ khung hình:** Toàn bộ hiệu ứng hover, cuộn trang, dropdown phải duy trì ổn định **60 FPS** không giật lag.
* **Tiêu chuẩn điểm số Google Lighthouse:**
  * **Performance:** > 95/100
  * **Accessibility:** 100/100
  * **Best Practices:** 100/100
  * **SEO:** 100/100 (Có đầy đủ Meta OpenGraph, JSON-LD Schema Organization, Sitemap XML).