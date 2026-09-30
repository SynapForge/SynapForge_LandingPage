# SYNAPFORGE MASTER DOCUMENTATION SYSTEM
> **Hệ thống tài liệu doanh nghiệp & Hồ sơ năng lực kỹ thuật chuẩn hóa**  
> **SynapForge Venture & Engineering Studio — 2026**  
> **Master Slogan:** *Forging Intelligence. Engineering Scale.* (Tôi luyện Trí tuệ. Kiến tạo Quy mô.)  
> **Action Tagline:** *ARCHITECT. CODE. FORGE. SCALE.*  

---

## 🗺️ BẢN ĐỒ CẤU TRÚC TÀI LIỆU TOÀN DIỆN (DOCUMENTATION SITEMAP)

Hệ thống tài liệu tại `D:\Working\SynapForge\docs` được phân cấp chuyên biệt thành 4 phân hệ khoa học:

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
├── 📁 ventures/                                     <- PHÂN HỆ 3: HỆ SINH THÁI SẢN PHẨM LÕI (PRODUCE)
│   ├── 01_BRANDHUB.md                               <- AI MarTech 7 Microservices, Neo4j GraphRAG, 0% rớt tin nhắn
│   └── 02_BIENSOVIP.md                              <- Sàn đấu giá biển số .NET 8, 61 bảng CSDL, truy vấn <8ms, VietQR 0.5s
│
├── 📁 standards/                                    <- PHÂN HỆ 5: BỘ TIÊU CHUẨN XUẤT XƯỞNG PHẦN MỀM
│   ├── 01_CLEAN_ARCHITECTURE.md                     <- Clean Arch (.NET 8 / Java 21), CQRS & RFC 7807 ProblemDetails
│   ├── 02_ZERO_MESSAGE_LOSS_RABBITMQ.md             <- RabbitMQ DLQ, Transactional Outbox & Idempotent Consumer
│   └── 03_SECURITY_AND_PERFORMANCE.md               <- Dual-Token Auth, OWASP Top 10, Redis & DB Indexing Playbook
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
