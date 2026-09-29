# HỆ SINH THÁI DỊCH VỤ KỸ NGHỆ & GIẢI PHÁP PHẦN MỀM SYNAPFORGE
> **Danh mục Dịch vụ Gia công Cao cấp, Kho Module Tự động hóa & Khung Hợp đồng Minh bạch**  
> **Master Slogan:** *Forging Intelligence. Engineering Scale.* (Tôi luyện Trí tuệ. Kiến tạo Quy mô.)  
> **Cam kết:** Bàn giao 100% Quyền sở hữu trí tuệ, Đúng tiến độ, Không chi phí ẩn  

---

## 🗺️ CẤU TRÚC PHÂN CẤP DANH MỤC DỊCH VỤ (/services)

Toàn bộ dịch vụ của SynapForge được phân loại một cách khoa học thành **3 trụ cột chuyên biệt**:

```
D:\Working\SynapForge\docs\services
│
├── 📜 README.md                                     <- Tài liệu này: Bản đồ điều hướng toàn bộ hệ sinh thái dịch vụ
│
├── 📁 engineering/                                  <- TRỤ CỘT 1: 4 DỊCH VỤ KỸ NGHỆ PHẦN MỀM CỐT LÕI (BESPOKE)
│   ├── 01_ENTERPRISE_WEB_MARKETPLACE.md             <- Nền tảng thương mại điện tử, sàn đấu giá & CSDL 50+ bảng (.NET / Java)
│   ├── 02_HIGHLOAD_BACKEND_MIGRATION.md             <- Hệ thống phân tán, RabbitMQ DLQ 0% rớt tin & Di chuyển Monolith
│   ├── 03_AI_RAG_INTEGRATION.md                     <- Trợ lý AI, Neo4j GraphRAG không ảo giác & Fine-tuning SLM On-Premise
│   └── 04_TURNKEY_MVP_DELIVERY.md                   <- Bàn giao sản phẩm trọn gói cho Founders trong 30–60 ngày
│
├── 📁 saas/                                         <- TRỤ CỘT 2: 13 MODULE TỰ ĐỘNG HÓA TÁI SỬ DỤNG (PLUG & PLAY)
│   ├── 📜 README.md                                 <- Tổng quan 13 module, kiến trúc và hướng dẫn tích hợp
│   ├── 📁 01_lead_funnel/                           <- Phễu thu nạp khách hàng tiềm năng & đặt cọc đa bước
│   ├── 📁 02_vietqr_reconcile/                      <- Đối soát biến động số dư VietQR Pro tự động <0.5s (0đ phí)
│   ├── 📁 03_inventory_lock/                        <- Khóa phân tán Redis Lock chống bán trùng kho hàng
│   ├── 📁 04_ai_advisory/                           <- Trợ lý AI tư vấn phong thủy & số học tự động 24/7
│   ├── 📁 05_mockup_gen/                            <- Bộ sinh ảnh phối cảnh thực tế (Mockup Generator)
│   ├── 📁 06_email_builder/                         <- Trình dựng email marketing kéo thả & gửi tự động AWS SES
│   ├── 📁 07_ctv_portal/                            <- Cổng quản trị đại lý / CTV, tính hoa hồng tự động
│   ├── 📁 08_audit_security/                        <- Nhật ký kiểm toán bảo mật (Audit Trail) & Phân quyền RBAC
│   ├── 📁 09_social_proof/                          <- Popup thông báo mua hàng thời gian thực (Social Proof)
│   ├── 📁 10_comparison_social/                     <- Công cụ so sánh sản phẩm & tạo ảnh chia sẻ mạng xã hội
│   ├── 📁 11_omnichannel_publisher/                 <- Đăng bài đa kênh tự động (Facebook, TikTok, Zalo, Threads)
│   ├── 📁 12_ai_brand_rag/                          <- RAG đồ thị tri thức nhận diện giọng văn thương hiệu
│   └── 📁 13_multitenant_rbac/                      <- Kiến trúc đa người thuê (Multi-tenant) cho nền tảng B2B SaaS
│
└── 📁 pricing/                                      <- TRỤ CỘT 3: CHÍNH SÁCH BÁO GIÁ & HỢP ĐỒNG BẢO VỆ KHÁCH HÀNG
    ├── 01_PRICING_PACKAGES.md                       <- 3 Gói cước minh bạch: MVP Sprint (11.5M), Growth (18.5M), Enterprise (33M)
    └── 02_CONTRACT_AND_WORKFLOW.md                  <- Khung hợp đồng an toàn 40/60, Quy chuẩn SLA & Bàn giao 100% IP
```

---

## 🎯 BẢNG TRA CỨU GIẢI PHÁP THEO NHU CẦU KHÁCH HÀNG (SOLUTION PICKER)

| Chân dung khách hàng | Nhu cầu trọng tâm | Dịch vụ tương ứng | Module SaaS tích hợp ngay | Gói cước đề xuất |
| :--- | :--- | :--- | :--- | :--- |
| **Startup Founder** | Cần ra mắt sản phẩm thần tốc để thử nghiệm thị trường và gọi vốn | [Turnkey MVP Delivery](./engineering/04_TURNKEY_MVP_DELIVERY.md) | • Lead Funnel (01)<br>• VietQR Reconcile (02)<br>• Social Proof (09) | **MVP Sprint**<br>*(11.5M • 30 Ngày)* |
| **Doanh nghiệp TMĐT & Sàn giao dịch** | Xây dựng hệ thống giao dịch tự động, chống bán trùng, quản lý đại lý | [Enterprise Web & Marketplace](./engineering/01_ENTERPRISE_WEB_MARKETPLACE.md) | • Inventory Lock (03)<br>• CTV Portal (07)<br>• Audit Trail (08) | **Growth Production**<br>*(18.5M • 45 Ngày)* |
| **Hệ thống lớn bị nghẽn tải** | Tách Monolithic cũ, xây dựng hàng đợi chịu tải hàng triệu request | [High-Load Backend Migration](./engineering/02_HIGHLOAD_BACKEND_MIGRATION.md) | • Omnichannel Publisher (11)<br>• Inventory Lock (03)<br>• Audit Trail (08) | **Enterprise Scale**<br>*(33M • 60 Ngày)* |
| **Doanh nghiệp cần AI Độc quyền** | Cần tra cứu dữ liệu nội bộ không ảo giác, tự động hóa quy trình | [AI Agents, RAG & Fine-Tuning](./engineering/03_AI_RAG_INTEGRATION.md) | • AI Brand RAG (12)<br>• AI Advisory (04)<br>• Mockup Gen (05) | **Growth / Enterprise**<br>*(Tùy quy mô dữ liệu)* |

---

## ⚡ 5 NGUYÊN TẮC KỸ NGHỆ BẤT BIẾN TẠI SYNAPFORGE
1. **Kiến trúc Sạch (Clean Architecture):** Mã nguồn được phân tầng độc lập (`Domain`, `Application`, `Infrastructure`, `API`), dễ dàng mở rộng và bàn giao.
2. **0% Mất Mát Dữ Liệu (Zero Message Drop):** Mọi giao dịch quan trọng đều đi qua RabbitMQ Dead Letter Exchange (DLX) với cơ chế Retry lũy thừa.
3. **Truy vấn Cực Nhanh (<8ms):** Đánh chỉ mục chuyên sâu (GIN, B-Tree, Composite) trên PostgreSQL / SQL Server cho hệ thống 50+ bảng thực thể.
4. **Đối Soát Tức Thì (<0.5s):** Tích hợp Webhook VietQR Pro tự động khớp tiền vào tài khoản ngân hàng với 0đ chi phí cổng thanh toán.
5. **Cơ Chế Hợp Đồng Bảo Vệ Khách Hàng (40/60 Escrow):** Khách hàng chỉ phải thanh toán 60% còn lại sau khi sản phẩm đã được kiểm thử, nghiệm thu hài lòng và triển khai lên Production.

---

## 🔗 LIÊN KẾT NHANH (QUICK NAVIGATION)
* Xem chi tiết [4 Dịch vụ Kỹ nghệ Phần mềm Độc quyền](./engineering/)
* Khám phá [13 Module Tự động hóa Thực chiến](./saas/)
* Xem chi tiết [3 Gói Báo giá Minh bạch](./pricing/01_PRICING_PACKAGES.md)
* Tìm hiểu [Quy trình Ký kết Hợp đồng & Bảo hành 40/60](./pricing/02_CONTRACT_AND_WORKFLOW.md)