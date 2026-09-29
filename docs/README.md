# SYNAPFORGE MASTER DOCUMENTATION SYSTEM
> **Hệ thống tài liệu doanh nghiệp & Hồ sơ năng lực kỹ thuật chuẩn hóa**  
> **SynapForge Venture & Engineering Studio — 2026**  
> **Master Slogan:** *Forging Intelligence. Engineering Scale.* (Tôi luyện Trí tuệ. Kiến tạo Quy mô.)  
> **Action Tagline:** *ARCHITECT. CODE. FORGE. SCALE.*  

---

## 🗺️ BẢN ĐỒ CẤU TRÚC TÀI LIỆU TOÀN DIỆN (DOCUMENTATION SITEMAP)

Hệ thống tài liệu tại `D:\Working\SynapForge\docs` được phân cấp chuyên biệt thành 5 phân hệ khoa học:

```
D:\Working\SynapForge\docs
│
├── 📜 README.md                                     <- Mục lục tổng thể toàn bộ hệ thống tài liệu
│
├── 📁 branding/                                     <- PHÂN HỆ 1: THƯƠNG HIỆU & MÔ HÌNH VẬN HÀNH
│   ├── 01_NAME_AND_ETYMOLOGY.md                     <- Ý nghĩa tên gọi 3 âm tiết SynapForge & Monogram SF
│   ├── 02_DESIGN_SYSTEM_AND_COLORS.md               <- Bảng màu chuẩn, Lưới 8pt Swiss Grid, Glassmorphism & Logo SF
│   └── 03_BUSINESS_MODEL_FLYWHEEL.md                <- Mô hình bánh đà kép (Produce & Outsource)
│
├── 📁 team/                                         <- PHÂN HỆ 2: BỘ MÁY NHÂN SỰ & HỒ SƠ TỪNG KỸ SƯ
│   ├── 01_Le-Tri-Trung_Founder-TechLead/            <- Folder Founder Lê Trí Trung (PROFILE.md + CV PDF)
│   ├── 02_Ha-Van-An_Fullstack-AI/                   <- Folder Kỹ sư Hà Văn Ân (PROFILE.md + CV PDF)
│   ├── 03_Nguyen-Thanh-Loc_Backend-AI/              <- Folder Kỹ sư Nguyễn Thành Lộc (PROFILE.md + CV PDF)
│   ├── 04_Nguyen-Chon-Phuoc_Java-DevOps/            <- Folder Kỹ sư Nguyễn Chơn Phước (PROFILE.md + CV PDF)
│   └── 05_Nguyen-Minh-Tuan_DotNet-Backend/          <- Folder Kỹ sư Nguyễn Minh Tuấn (PROFILE.md + CV PDF)
│
├── 📁 ventures/                                     <- PHÂN HỆ 3: HỆ SINH THÁI SẢN PHẨM LÕI (PRODUCE)
│   ├── 01_BRANDHUB.md                               <- AI MarTech 7 Microservices, Neo4j GraphRAG, 0% rớt tin nhắn
│   └── 02_BIENSOVIP.md                              <- Sàn đấu giá biển số .NET 8, 61 bảng CSDL, truy vấn <8ms, VietQR 0.5s
│
├── 📁 services/                                     <- PHÂN HỆ 4: DANH MỤC DỊCH VỤ & GIẢI PHÁP GIA CÔNG
│   ├── 📜 README.md                                 <- Mục lục tổng thể & Bản đồ kết nối toàn bộ hệ sinh thái dịch vụ
│   ├── 📁 engineering/                              <- 4 Dịch vụ kỹ nghệ phần mềm cốt lõi (Bespoke Engineering)
│   │   ├── 01_ENTERPRISE_WEB_MARKETPLACE.md         <- Nền tảng TMĐT, đấu giá & CSDL 50+ bảng (.NET / Java)
│   │   ├── 02_HIGHLOAD_BACKEND_MIGRATION.md         <- Hệ thống phân tán, RabbitMQ DLQ 0% rớt tin & Tách Monolith
│   │   ├── 03_AI_RAG_INTEGRATION.md                 <- AI Agent, GraphRAG Neo4j không ảo giác & Fine-tuning SLM
│   │   └── 04_TURNKEY_MVP_DELIVERY.md               <- Bàn giao sản phẩm trọn gói cho Founders trong 30–60 ngày
│   ├── 📁 saas/                                     <- 13 Module tự động hóa tái sử dụng thực chiến (Plug & Play)
│   │   ├── 📜 README.md                             <- Tổng quan 13 module & giải pháp tích hợp nhanh
│   │   └── 📁 01_lead_funnel/ ... 13_multitenant_rbac/
│   └── 📁 pricing/                                  <- Chính sách giá minh bạch & Khung hợp đồng 40/60
│       ├── 01_PRICING_PACKAGES.md                   <- 3 Gói cước: MVP Sprint (11.5M), Growth (18.5M), Enterprise (33M)
│       └── 02_CONTRACT_AND_WORKFLOW.md              <- Cơ chế thanh toán 40/60 Escrow, SLA & Bàn giao 100% IP
│
├── 📁 standards/                                    <- PHÂN HỆ 5: BỘ TIÊU CHUẨN XUẤT XƯỞNG PHẦN MỀM
│   ├── 01_CLEAN_ARCHITECTURE.md                     <- Clean Arch (.NET 8 / Java 21), CQRS & RFC 7807 ProblemDetails
│   ├── 02_ZERO_MESSAGE_LOSS_RABBITMQ.md             <- RabbitMQ DLQ, Transactional Outbox & Idempotent Consumer
│   └── 03_SECURITY_AND_PERFORMANCE.md               <- Dual-Token Auth, OWASP Top 10, Redis & DB Indexing Playbook
│
├── 📁 proposals/                                    <- PHÂN HỆ 7: HỆ THỐNG HỒ SƠ CHÀO THẦU & BÁO GIÁ
│   ├── 📜 README.md                                 <- Quy trình 5 bước chào thầu & Bản đồ phân hệ
│   ├── 01_MASTER_PROPOSAL_TEMPLATE.md               <- Bản Đề xuất Dự án Tổng thể (Dành cho Giám đốc/Founder)
│   ├── 02_STATEMENT_OF_WORK_SOW.md                  <- Đặc tả Phạm vi Công việc Chi tiết (WBS, In/Out-Scope)
│   ├── 03_TECHNICAL_ARCHITECTURE_PROPOSAL.md        <- Đề xuất Kiến trúc Kỹ thuật & Hạ tầng Cloud (Dành cho CTO)
│   ├── 04_TIMELINE_SPRINT_DELIVERY_PLAN.md          <- Kế hoạch Tiến độ, Lộ trình Sprints & Kênh giao tiếp
│   ├── 05_COMMERCIAL_PRICING_AND_ESCROW.md          <- Báo giá Thương mại, Bóc tách ngày công & Ký quỹ 40/60
│   └── 06_CLIENT_DISCOVERY_QUESTIONNAIRE.md         <- Bộ Câu hỏi Khảo sát Nghiệp vụ & Đánh giá Nhu cầu (24h)
│
├── 📁 operations/                                   <- PHÂN HỆ 8: QUY CHUẨN VẬN HÀNH, TÀI CHÍNH & BÀN GIAO
│   ├── 01_AGILE_WORKFLOW.md                         <- Quy định Git branching, commit convention, PR review
│   ├── 02_REVENUE_SHARE_POLICY.md                   <- Cơ chế chia sẻ doanh thu 80/10/10 & Quỹ Forge Reserve
│   └── 03_HANDOVER_AND_ACCEPTANCE_CHECKLIST.md      <- Quy chuẩn bàn giao IP, Cloud VPS & Mẫu biên bản nghiệm thu
│
└── 📁 website/                                      <- PHÂN HỆ 6: ĐẶC TẢ KỸ THUẬT WEBSITE PORTAL
    ├── 01_SITEMAP_AND_SPEC.md                       <- Sơ đồ trang, UX flow, Interactive Estimator & Synapse Canvas
    └── 02_SPRINT_ROADMAP.md                         <- Lộ trình 4 Sprints hoàn thiện và bàn giao website
```

---

## 💻 DỮ LIỆU ĐỒNG BỘ MÃ NGUỒN REACT
Toàn bộ thông tin trong các phân hệ trên đã được chuyển hóa sang cấu trúc JavaScript tại:
👉 `D:\Working\SynapForge\src\data\companyData.js`

Khởi chạy website demo ngay tại thư mục gốc:
```bash
cd D:\Working\SynapForge
npm run dev
```
