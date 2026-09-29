# LỘ TRÌNH 4 SPRINTS PHÁT TRIỂN & BÀN GIAO WEBSITE CHÍNH THỨC
> **Agile Delivery Roadmap cho Website Portal `synapforge.dev`**  
> **Phương pháp luận:** Scrum 1 tuần / 1 Sprint, Demo sản phẩm trực tiếp cuối mỗi tuần  

---

## 🏃 CHI TIẾT KẾ HOẠCH TRIỂN KHAI 4 SPRINTS

```
[Sprint 1: Architecture] ──> [Sprint 2: Core Components] ──> [Sprint 3: Estimator & Form] ──> [Sprint 4: Production]
Setup React 19 + Tailwind    Hero Synapse Canvas, Cards      Interactive Cost Estimator       SEO 100/100, Lighthouse
Sync full Data Models        Flywheel Showcase, Team CV      Email Webhook Integration        Deploy Vercel Custom Domain
```

---

### SPRINT 1: ARCHITECTURE, DESIGN SYSTEM & CORE DATA MODELS (HOÀN THÀNH)
* **Mục tiêu:** Xây dựng khung móng vững chắc cho toàn bộ dự án, đồng bộ hóa 100% dữ liệu từ tài liệu sang mã nguồn.
* **Hạng mục đã hoàn thành:**
  * [x] Khởi tạo mã nguồn React 19 + Vite + Tailwind CSS tại `D:\Working\SynapForge`.
  * [x] Cấu hình bảng màu chuẩn `#FF5500`, `#0B0F17`, `#111827` và Typography `Plus Jakarta Sans`, `JetBrains Mono`.
  * [x] Chuyển đổi dữ liệu công ty sang mô hình JavaScript: `companyData.js`, `venturesData.js`, `pricingAndSaasData.js`.
  * [x] Tích hợp hình ảnh thực tế và CV bản quyền của 5 thành viên sáng lập.

---

### SPRINT 2: INTERACTIVE UI COMPONENTS & FLAGSHIP VENTURES SHOWCASE
* **Mục tiêu:** Tạo ấn tượng thị giác mạnh mẽ (Wow Factor) ngay khi người dùng truy cập trang web.
* **Hạng mục thực hiện:**
  * [ ] Lập trình hiệu ứng **Interactive Synapse Canvas 3D** với các nơ-ron phát sáng cam chuyển động theo con trỏ chuột.
  * [ ] Xây dựng khối tương tác **Dual-Engine Flywheel (Mô hình Bánh đà kép)**: Chuyển đổi mượt mà giữa phân hệ Sản phẩm lõi (Produce) và Dịch vụ kỹ nghệ (Outsource).
  * [ ] Thiết kế thẻ giới thiệu 2 dự án Flagship (**BrandHub** và **BienSoVip**) với hiệu ứng Glassmorphism và hover ánh sáng 3D.
  * [ ] Tích hợp bộ lọc 13 module SaaS với hình ảnh chụp thực tế và thông số kỹ thuật.

---

### SPRINT 3: INTERACTIVE PROJECT ESTIMATOR & LEAD DISCOVERY ENGINE
* **Mục tiêu:** Chuyển đổi lưu lượng truy cập thành khách hàng tiềm năng thông qua công cụ tính giá tự động.
* **Hạng mục thực hiện:**
  * [ ] Lập trình bộ tính toán dự toán kinh phí **Project Cost Estimator**: Tự động tính toán tổng số tiền (VNĐ) và thời gian bàn giao (ngày) dựa trên các module khách hàng chọn.
  * [ ] Thiết lập tính năng tải về bản tóm tắt dự toán (Export Summary PDF / Image).
  * [ ] Tích hợp Form liên hệ khám phá dự án: Tự động gửi thông báo tức thì (Webhook Alert < 30s) về Telegram và Email của Tech Lead Lê Trí Trung.

---

### SPRINT 4: TỐI ƯU HÓA HIỆU NĂNG, SEO 100/100 & TRIỂN KHAI PRODUCTION
* **Mục tiêu:** Đạt điểm số tuyệt đối trên các công cụ đo lường và đưa website vào vận hành thương mại chính thức.
* **Hạng mục thực hiện:**
  * [ ] Tối ưu hóa điểm số **Google Lighthouse**: Performance > 95, SEO 100, Accessibility 100, Best Practices 100.
  * [ ] Cấu hình SEO On-page: OpenGraph tags, Twitter Cards, thẻ Canonical, Robots.txt, Sitemap.xml.
  * [ ] Thiết lập cấu trúc dữ liệu vi mô (Schema.org JSON-LD): `Organization`, `SoftwareApplication`, `Person`.
  * [ ] Kết nối tên miền chính thức `synapforge.dev` qua DNS Cloudflare, kích hoạt giao thức HTTPS và HTTP/3.