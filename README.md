# ⚡ SYNAPFORGE — OFFICIAL PORTAL & LANDING PAGE

> **Master Slogan:** *Forging Intelligence. Engineering Scale.* (Tôi luyện Trí tuệ. Kiến tạo Quy mô.)  
> **Action Tagline:** *ARCHITECT. CODE. FORGE. SCALE.*  
> **Trụ sở:** Hải Châu, TP. Đà Nẵng, Việt Nam  
> **Hotline / Zalo:** (+84) 912 158 715  
> **Email Doanh nghiệp:** solutions@synapforge.id.vn  
> **Website Chính thức:** [synapforge.id.vn](https://synapforge.id.vn)

---

## 📌 1. TỔNG QUAN DỰ ÁN (OVERVIEW)

**SynapForge Official Portal** là cổng thông tin chính thức của **SynapForge Venture Studio & Software Factory** — mô hình kết hợp giữa **Venture Studio** (tự ươm tạo và phát triển các sản phẩm phần mềm lõi) và **Software Factory** (cung cấp dịch vụ kỹ thuật, chuyển đổi số và phát triển phần mềm trọn gói cho doanh nghiệp B2B & SME).

### Triết lý định danh & Thiết kế:
- **Synapse (Trí tuệ nhân tạo & Dữ liệu):** Tư duy kiến trúc mô phỏng mạng nơ-ron phân tán, xử lý dữ liệu thông minh và tích hợp các mô hình AI thực chiến.
- **Forge (Kỷ luật công nghệ phần mềm):** Kỷ luật kỹ thuật sắt đá, tôi luyện mã nguồn theo chuẩn Clean Architecture, bền bỉ, an toàn và sẵn sàng mở rộng quy mô.
- **Ngôn ngữ thẩm mỹ Technical Brutalism:** Lấy cảm hứng từ chuẩn mực thiết kế công nghệ Thụy Sĩ (Swiss Grid 8pt), kết hợp bảng màu tương phản kỹ thuật (`Ink #1D1510`, `Paper #F5F1E8`, `Signal Orange #FF5500`), kiểu chữ monospace `JetBrains Mono` kết hợp `Space Grotesk`, viền nét mảnh sắc sảo và bóng cứng vật lý (Tactile Shadows).

---

## 🏗️ 2. KIẾN TRÚC CÔNG NGHỆ (TECH STACK & CORE HIGHLIGHTS)

Hệ thống được phát triển với hiệu năng cao nhất, loại bỏ sự phụ thuộc vào các thư viện UI cồng kềnh, tối ưu hóa tốc độ tải trang dưới 1.2s và đạt điểm số chuẩn Core Web Vitals (INP < 200ms, LCP < 2.5s, CLS < 0.1):

| Phân hệ | Công nghệ triển khai | Mô tả chi tiết |
| :--- | :--- | :--- |
| **Core Framework** | **React 19** + **Vite 6** | Tốc độ biên dịch tức thời (HMR), bundle siêu nhẹ, tận dụng React 19 Concurrent Rendering. |
| **Styling & Design System** | **Vanilla CSS Architecture** | Hệ thống CSS Variables tokens chuẩn mực, không bloat mã CSS, tối ưu hóa kích thước trang. |
| **Smooth Motion & Scroll** | **Lenis Scroll Engine** | Cuộn trang mượt mà (Smooth Inertia Scrolling), tích hợp đồng bộ thanh tiến trình `--sp`. |
| **Interactive Graphic** | **HTML5 Canvas (Synapse Canvas)** | Vẽ đồ thị mạng nơ-ron tương tác thời gian thực theo tọa độ chuột với thuật toán liên kết nút động. |
| **Scroll Reveal System** | **Custom `useReveal` Hook** | Kích hoạt hiệu ứng xuất hiện (Fade-up, image zoom, metric counter) mượt mà dựa trên `IntersectionObserver`. |
| **Song ngữ Toàn diện** | **Bilingual Engine (VI / EN)** | Tự động phát hiện ngôn ngữ trình duyệt, đồng bộ `localStorage`, cập nhật thuộc tính `<html lang>` và Meta SEO. |
| **Điều hướng & Routing** | **Hash Router + Breadcrumb** | Định tuyến nhẹ nhàng không cần tải lại trang (`#/`, `#/san-pham`, `#/san-pham/:id`, `#/doi-ngu/:id`), tích hợp thanh điều hướng Breadcrumb chuẩn SEO & Accessibility. |

---

## 🚀 3. SẢN PHẨM LÕI & CASE STUDIES TIÊU BIỂU (IN-HOUSE VENTURES)

Hệ sinh thái sản phẩm do đội ngũ kỹ sư SynapForge tự tay kiến trúc và vận hành thực tế:

### 1. BrandHub — AI MarTech & Omnichannel Publisher
- **Bản chất:** Nền tảng Trí tuệ Thương hiệu & Tự động xuất bản đa kênh phân tán phục vụ Agency và doanh nghiệp bán lẻ.
- **Kiến trúc:** Cụm **07 Microservices độc lập** (Spring Cloud Gateway, Java 21 Business Core, Python FastAPI AI RAG, Spring Boot Publisher Worker, React Dashboard, Expo Mobile, Docker Infra).
- **Điểm nhấn kỹ thuật:**
  - **Brand Voice RAG & Neo4j GraphRAG:** Vector store ChromaDB lưu trữ chuẩn giọng điệu thương hiệu; đồ thị Neo4j liên kết Thực thể - Xu hướng - KOLs, triệt tiêu ảo giác (Hallucination).
  - **RabbitMQ Dead Letter Queue (DLQ):** Thử lại lũy thừa (Exponential Backoff), cam kết **0% tỷ lệ sót bài** trên 5 mạng xã hội (Facebook, TikTok, Instagram, Threads, Zalo).
  - **Dual-LLM Engine:** Sinh văn bản tốc độ cao với Groq Llama 3 và fallback sang Claude 3.5 Sonnet.

### 2. BienSoVip.com — Luxury High-Performance Marketplace
- **Bản chất:** Sàn thương mại điện tử, đấu giá và đối chiếu phong thủy biển số xe định danh độc bản tốc độ cao.
- **Kiến trúc:** **.NET 8 Clean Architecture**, CSDL PostgreSQL ACID với **61 bảng thực thể quan hệ**.
- **Điểm nhấn kỹ thuật:**
  - **PostgreSQL GIN Indexing:** Tốc độ phản hồi bộ lọc đa tiêu chí luôn duy trì **< 8ms** trên kho hàng chục nghìn biển số.
  - **Redis Distributed Lock (15 phút):** Khóa giao dịch phân tán chống bán trùng tuyệt đối (Double-Booking / Concurrency Lock).
  - **VietQR Webhook Engine:** Tự động đối soát và khớp cọc trong **< 0.5 giây**, 0đ phí cổng trung gian, hoạt động 24/7/365.
  - **Phong thủy Bát Tự Tứ Trụ:** Ma trận so sánh 3 biển song song, nâng tỷ lệ chốt cọc lên **33.3%** với 150+ giao dịch thành công.

### 3. The MC Hub Academy — EdTech & AI Speech Analysis
- **Bản chất:** Nền tảng đào tạo kỹ năng nói, diễn thuyết và MC tích hợp gia sư AI phân tích giọng nói.
- **Kiến trúc:** Microservice AI bóc băng và phân tích âm sắc (Python FastAPI + OpenAI Whisper), chấm phát âm, cao độ, tốc độ nói (WPM) và phát hiện từ đệm trong **< 30 giây**. 101 bài thực hành tương tác, onboard 87 MC chuyên nghiệp ngay tháng đầu.

### 4. ThreadLearn — Research & AI Concurrency Repair (ICTA 2026)
- **Bản chất:** Đề tài nghiên cứu khoa học công bố tại Hội thảo Quốc tế ICTA 2026 về tự động phát hiện và sửa lỗi Race Condition trong Node.js.
- **Kiến trúc:** Mô hình ngôn ngữ nhỏ (SLM) Qwen2.5-Coder 1.5B Fine-tuning bằng kỹ thuật QLoRA trên 783 mẫu Chain-of-Thought, kết hợp BM25 RAG trên 2,061 tài liệu. Đạt tỷ lệ sửa lỗi **73.3%**, vượt trội so với GPT-3.5-turbo (41.0%) dù kích thước nhỏ hơn 125 lần.

---

## 👥 4. ĐỘI NGŨ KỸ SƯ NÒNG CỐT (CORE ENGINEERING TEAM)

Đội ngũ kỹ sư xuất thân từ Đại học FPT Đà Nẵng và tập đoàn FPT Software, giàu kinh nghiệm thực chiến từ kiến trúc hệ thống đến trí tuệ nhân tạo:

| Kỹ sư | Chức danh | Nền tảng học vấn & Bằng cấp | Dự án & Thế mạnh công nghệ |
| :--- | :--- | :--- | :--- |
| **Lê Trí Trung** | Founder, Tech Lead & Engineering Manager | • GPA 3.3/4.0 (8.2/10.0) FPTU<br>• Học bổng Quốc tế Kuala Lumpur<br>• IELTS 6.0 (IDP) | • Điều hành 5 kỹ sư SynapForge & quản trị WBS/Agile<br>• Quán quân Hackathon Computer Vision 2026<br>• Solo Architect BienSoVip (61 bảng CSDL, <8ms)<br>• CEO & Tech Lead The MC Hub (team 6 kỹ sư, 87 MCs) |
| **Hà Văn Ân** | Full-Stack & AI Solutions Lead | • GPA 3.0/4.0 FPTU<br>• 7 tháng thực tập FPT Software | • Đồng tác giả nghiên cứu AI ICTA 2026 (ThreadLearn)<br>• Lead Dev STEMGO.net (34 mini-games, Gemini AI Tutor)<br>• Next.js 16 App Router, FastAPI, RAG Pipelines |
| **Nguyễn Thành Lộc** | Backend Architect & AI Lead | • GPA xuất sắc 3.5/4.0 FPTU<br>• TOEIC 650<br>• 3 Chứng chỉ Coursera AI & PM | • AI Team Lead BrandHub (FastAPI, GraphRAG Neo4j & ChromaDB)<br>• Team Lead UniNest (.NET 8 Clean Arch)<br>• Backend .NET Intern FPT Software |
| **Nguyễn Chơn Phước** | Cloud DevOps & Infrastructure | • GPA 3.2/4.0 FPTU<br>• IELTS 5.5 | • Chung kết Toàn quốc InnoCodeCamp FPT 2024<br>• Acronic Solutions Intern (Vận hành thiết bị Anti-DDoS 24/7 qua Socket.IO & IPC)<br>• Backend Java Spring Boot 3 & PostgreSQL Index Tuning |
| **Nguyễn Minh Tuấn** | Enterprise .NET Developer | • GPA 7.8/10.0 FPTU<br>• Microsoft Certified Back-End Pro | • Team Leader VivuCar (Tích hợp API Cổng DV công Bộ Công An & Hive AI)<br>• Fullstack .NET Intern FPT Software (Migration & Stored Procedures) |

---

## 📂 5. CẤU TRÚC THƯ MỤC NGUỒN (PROJECT STRUCTURE)

```
SynapForge_LandingPage/
├── index.html                     # HTML Entry point (Meta SEO, Fonts, OpenGraph)
├── package.json                   # Dependencies & Scripts (React 19, Vite 6, Lenis)
├── vite.config.js                 # Cấu hình Vite Build & Plugins
├── public/                        # Static Assets phục vụ Production
│   ├── brand/                     # Logo chính & Identity icons
│   ├── products/                  # Ảnh chụp màn hình thật sản phẩm (BienSoVip, BrandHub...)
│   ├── team/                      # Ảnh chân dung chuẩn hóa của 5 kỹ sư
│   └── mockups/                   # Bản vẽ kiến trúc & telemetry dashboards
└── src/
    ├── main.jsx                   # React Root entry point
    ├── App.jsx                    # Hash Router & Trình quản lý State ngôn ngữ
    ├── index.css                  # Toàn bộ Design System (Technical Brutalism, Motion, Breadcrumb)
    ├── components/                # Khối giao diện chức năng
    │   ├── MockupBView.jsx        # Landing Page View chính (Hero, Flywheel, Cases, Team, FAQ)
    │   ├── ProductsPage.jsx       # Trang Danh mục Sản phẩm (#/san-pham)
    │   ├── ProductDetail.jsx      # Trang Chi tiết Case Study (#/san-pham/:id)
    │   ├── MemberPage.jsx         # Trang Hồ sơ Năng lực Kỹ sư (#/doi-ngu/:id)
    │   ├── Breadcrumb.jsx         # Thanh điều hướng phân cấp (Technical Brutalist Breadcrumb)
    │   ├── SynapseCanvas.jsx      # Hiệu ứng đồ họa mạng neural Canvas tương tác
    │   └── SideStreams.jsx        # HUD Telemetry cho màn hình siêu rộng (Ultra-Wide)
    └── data/
        ├── i18n.js                # Toàn bộ từ điển song ngữ, CASES, TEAM_CV, ALL_PRODUCTS
        └── companyData.js         # Dữ liệu công ty, quy chuẩn kỹ thuật & Core Team
```

---

## 💻 6. HƯỚNG DẪN CÀI ĐẶT & CHẠY DỰ ÁN (GETTING STARTED)

### Yêu cầu môi trường:
- **Node.js:** Phiên bản `>= 18.0.0` (Khuyến nghị Node.js 20 LTS trở lên).
- **Trình quản lý gói:** `npm`, `pnpm` hoặc `yarn`.

### Các bước khởi chạy:

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/SynapForge/SynapForge_LandingPage.git
   cd SynapForge_LandingPage
   ```

2. **Cài đặt các gói phụ thuộc:**
   ```bash
   npm install
   ```

3. **Chạy máy chủ phát triển (Development Server):**
   ```bash
   npm run dev
   ```
   > Truy cập tại địa chỉ local: [http://localhost:5173](http://localhost:5173)

4. **Biên dịch đóng gói cho Production:**
   ```bash
   npm run build
   ```
   > Sản phẩm đóng gói sẽ nằm trong thư mục `/dist` với dung lượng tối ưu (gzipped ~107kB JS, ~13kB CSS).

5. **Xem thử bản build Production cục bộ:**
   ```bash
   npm run preview
   ```

---

## 🛡️ 7. QUY CHUẨN KỸ THUẬT & QUY TRÌNH PHÁT TRIỂN (ENGINEERING STANDARDS)

Toàn bộ mã nguồn tuân thủ các quy tắc nghiêm ngặt:
1. **Kiến trúc dữ liệu một nguồn sự thật (Single Source of Truth):**
   - Mọi thông số kỹ thuật, bài toán, giải pháp và metrics của sản phẩm được quản lý tập trung tại `src/data/i18n.js`.
   - Mọi thông tin nhân sự, học vấn, chứng chỉ và kinh nghiệm được đồng bộ tuyệt đối với hồ sơ gốc trong `SynapForge_Document/06_Team_Credentials`.
2. **Quy chuẩn Git & Nhánh làm việc:**
   - `main`: Nhánh triển khai Production thực tế.
   - `develop`: Nhánh tích hợp tính năng chung của nhóm.
   - `BA`: Nhánh cập nhật tài liệu, phân tích nghiệp vụ và nội dung chuẩn hóa.
   - Commit message theo chuẩn **Conventional Commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `perf:`, `style:`.
3. **Kiểm thử trước khi bàn giao:**
   - Luôn chạy `npm run build` trước khi push code để đảm bảo 0 lỗi biên dịch, không có broken import hay lỗi cú pháp CSS.

---

## 📬 8. LIÊN HỆ & THÔNG TIN DOANH NGHIỆP

SynapForge Venture Studio sẵn sàng đồng hành cùng doanh nghiệp trong các bài toán chuyển đổi số, xây dựng website thương mại điện tử, tự động hóa quy trình vận hành và tích hợp trợ lý AI 24/7.

- **Văn phòng:** Hải Châu, TP. Đà Nẵng, Việt Nam
- **Hotline & Zalo:** [(+84) 912 158 715](https://zalo.me/0912158715)
- **Email Hợp tác & Dự án:** [solutions@synapforge.id.vn](mailto:solutions@synapforge.id.vn)
- **Tài liệu Chi tiết:** Xem thêm tại kho tài liệu [SynapForge_Document](https://github.com/SynapForge/SynapForge_Document).

---
*© 2026 SynapForge Venture Studio & Software Factory. All rights reserved.*
