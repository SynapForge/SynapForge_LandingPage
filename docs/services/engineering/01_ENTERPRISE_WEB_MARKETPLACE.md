# DỊCH VỤ: ENTERPRISE WEB & MARKETPLACE PLATFORMS
> **Thiết kế & Lập trình Nền tảng Thương mại Điện tử, Cổng Thông tin Doanh nghiệp & Sàn Giao dịch Quy mô lớn**  
> **Phân hệ:** Kỹ nghệ Phần mềm Độc quyền (Core Bespoke Engineering)  
> **Thời gian triển khai tiêu chuẩn:** 4 – 8 Tuần  

---

## 1. TỔNG QUAN & PHẠM VI DỊCH VỤ (OVERVIEW & SCOPE)
SynapForge cung cấp dịch vụ thiết kế kiến trúc và lập trình trọn gói các sàn thương mại điện tử chuyên biệt (Vertical Marketplace), sàn đấu giá trực tuyến, cổng đặt vé / thuê xe tự động và các hệ thống ERP / Portal nội bộ doanh nghiệp.

Dịch vụ này được thiết kế dành riêng cho các doanh nghiệp và nhà sáng lập:
* Cần hệ thống có khả năng xử lý nghiệp vụ phức tạp với **50+ bảng thực thể cơ sở dữ liệu** liên kết chặt chẽ.
* Đòi hỏi giao dịch tài chính an toàn tuyệt đối, thanh toán tự động không qua trung gian tốn phí cổng.
* Cần tốc độ phản hồi cực nhanh (<100ms cho mọi trang, <8ms cho truy vấn lọc sản phẩm).

```
               KIẾN TRÚC ENTERPRISE CLEAN ARCHITECTURE (.NET 8 / JAVA 21)
               
┌────────────────────────────────────────────────────────────────────────┐
│                        PRESENTATION / CLIENT TIER                      │
│   React 19 / Next.js 16 + Tailwind CSS (SSR/SSG, Tối ưu SEO 100/100)    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / WSS / JWT
┌───────────────────────────────────▼────────────────────────────────────┐
│                    API GATEWAY & SECURITY ENFORCEMENT                   │
│   • Reverse Proxy Nginx / Spring Cloud Gateway                         │
│   • Redis Token Bucket Rate Limiting (Chống Spam / DoS)                │
│   • Dual-Token Auth (Access Token trong Memory + Refresh HttpOnly)    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                      CORE APPLICATION & DOMAIN LOGIC                   │
│   • Clean Architecture (CQRS với MediatR / Spring Application Services)│
│   • Domain Entities & Value Objects (Bảo toàn quy tắc nghiệp vụ)      │
│   • Distributed Lock (Redis Lock chống bán trùng / giữ chỗ đồng thời)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                     INFRASTRUCTURE & PERSISTENCE TIER                  │
│   • PostgreSQL / SQL Server (GIN Index, Composite Index, JSONB)        │
│   • Redis Cache Layer (Cache Aside, TTL tự động)                       │
│   • VietQR Webhook Listener (Khớp cọc tự động <0.5s, 0đ phí)           │
│   • S3 / Cloudinary (Lưu trữ chứng từ, ảnh định dạng WebP)             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. TIÊU CHUẨN KỸ THUẬT & BÀN GIAO (TECHNICAL DELIVERABLES)

### 2.1. Kiến trúc Clean Architecture phân tầng nghiêm ngặt
* **Tách bạch 4 tầng độc lập:** `Domain`, `Application`, `Infrastructure`, `API Presentation`.
* **Zero Business Leakage:** Mã nghiệp vụ hoàn toàn không phụ thuộc vào thư viện bên ngoài hay loại cơ sở dữ liệu (Database-agnostic).
* Tuân thủ chuẩn mực **SOLID**, thiết kế theo **Design Patterns** (Repository, Unit of Work, Factory, Strategy).

### 2.2. Cơ sở dữ liệu quy mô 50+ bảng thực thể (Database Engineering)
* Chuẩn hóa CSDL từ bậc 3 (3NF) và tối ưu hóa phi chuẩn (Denormalization) có kiểm soát tại các bảng đọc nhiều.
* **Indexing chuyên sâu:** B-Tree Index cho khóa ngoại, GIN Index cho tìm kiếm toàn văn bản (Full-text Search), Composite Index cho các bộ lọc đa tiêu chí (tỉnh thành, khoảng giá, trạng thái, danh mục).
* **Cam kết hiệu năng:** Thời gian thực thi câu lệnh SQL trung bình **< 8ms**, chịu tải hàng triệu bản ghi mà không tràn RAM máy chủ.

### 2.3. Khóa phân tán chống xung đột dữ liệu (Distributed Concurrency Control)
* Áp dụng **Redis Distributed Lock (Redlock)** cho các nghiệp vụ đặt cọc, chốt đơn, giữ số, đấu giá.
* Đảm bảo tính toán tử nguyên tử (**Atomicity**): Ngăn chặn 100% tình trạng 2 khách hàng đặt mua cùng 1 sản phẩm độc bản tại cùng một mili-giây.

### 2.4. Thanh toán tự động hóa VietQR Pro (Zero Transaction Fee)
* Tích hợp Webhook đồng bộ biến động số dư ngân hàng qua SePay / Casso / VietQR Pro.
* Tự động nhận diện cú pháp mã đơn hàng, đối soát và kích hoạt giao dịch thành công trong **dưới 0.5 giây**.
* **Tiết kiệm 100% chi phí trung gian thanh toán** (không mất 1.5% - 2.5% phí cổng như VNPay/Momo/Stripe).

### 2.5. Bảo mật đa tầng & Phân quyền ma trận (RBAC)
* Xác thực kép JWT (Access Token 15 phút lưu trong Memory, Refresh Token 7 ngày lưu trong HttpOnly Cookie chống tấn công XSS).
* Phân quyền ma trận chặt chẽ: `Super Admin`, `Operations Manager`, `Sales / CTV`, `End User`, `Guest`.
* Mã hóa dữ liệu nhạy cảm (CCCD, Số điện thoại, Số tài khoản ngân hàng) bằng chuẩn mã hóa **AES-256**.

---

## 3. CÔNG NGHỆ ÁP DỤNG (TECH STACK)

| Phân hệ | Công nghệ lựa chọn chính | Lựa chọn thay thế tương đương |
| :--- | :--- | :--- |
| **Backend Core** | **.NET 8 (C#) Clean Architecture** | **Java 21 (Spring Boot 3.3)** |
| **Frontend Web** | **React 19 / Next.js 16 + TypeScript** | **Vue 3 / Nuxt 3** |
| **Cơ sở dữ liệu** | **PostgreSQL (với GIN & Full-Text Search)** | **Microsoft SQL Server 2022** |
| **Caching & Locking** | **Redis (Distributed Cache & Redlock)** | **DragonflyDB / Memcached** |
| **Đồ họa & Styling** | **Tailwind CSS + Lucide Icons + Framer Motion** | **Vanilla CSS BEM** |
| **Thanh toán & Đối soát** | **VietQR Open API + SePay Webhooks** | **PayOS / Stripe API** |
| **Hạ tầng & Triển khai** | **Docker Compose, Linux Ubuntu 24.04, Nginx** | **AWS ECS / DigitalOcean Droplets** |

---

## 4. DỰ ÁN THỰC THI THAM CHIẾU (PROVEN REFERENCE PROJECT)

### 🌟 Sàn giao dịch & Đấu giá Biển Số Xe Đẳng Cấp — [BienSoVip.com](https://biensovip.com)
* **Quy mô kiến trúc:** Do Founder Lê Trí Trung trực tiếp thiết kế solo toàn bộ kiến trúc hệ sinh thái.
* **Quy mô CSDL:** **61 bảng thực thể** liên kết đa chiều (kho biển số định danh, hệ thống cọc tự động, mạng lưới CTV, lịch sử đấu giá, hợp đồng ủy quyền).
* **Chỉ số hiệu năng thực chiến:**
  * Thời gian phản hồi bộ lọc đa tiêu chí (loại xe, đầu số, ngũ quý, phong thủy): **< 8ms**.
  * Tốc độ khớp cọc VietQR: **< 0.5 giây** từ khi quét mã trên ứng dụng ngân hàng.
  * Tỷ lệ lỗi giao dịch trùng: **0% tuyệt đối** nhờ cơ chế Redis Lock.

---

## 5. CÁC MODULE SAAS TỰ ĐỘNG HÓA TÍCH HỢP SẴN
Khách hàng đặt hàng dịch vụ này có thể chọn kích hoạt ngay các module trong kho tự động hóa của SynapForge:
* [Module 01: Lead Capture & Multi-step Order Funnel](../saas/01_lead_funnel/MODULE_INFO.md)
* [Module 02: Realtime VietQR Banking Reconcile](../saas/02_vietqr_reconcile/MODULE_INFO.md)
* [Module 03: Distributed Inventory Lock Engine](../saas/03_inventory_lock/MODULE_INFO.md)
* [Module 07: CTV & Affiliate Partner Portal](../saas/07_ctv_portal/MODULE_INFO.md)
* [Module 08: Enterprise Audit Trail & Role Matrix](../saas/08_audit_security/MODULE_INFO.md)

---

## 6. GÓI DỊCH VỤ & BẢO HÀNH TƯƠNG ỨNG
* **Gói khuyến nghị:** [Gói Growth Production (18.5M)](../pricing/01_PRICING_PACKAGES.md#2-gói-growth-production-phát-triển-toàn-diện) hoặc [Gói Enterprise Scale (33M)](../pricing/01_PRICING_PACKAGES.md#3-gói-enterprise-scale-hệ-thống-quy-mô-lớn).
* **Bảo hành tiêu chuẩn:** 60 – 90 ngày hỗ trợ kỹ thuật 24/7, SLA phản hồi sự cố khẩn cấp dưới 4 giờ.
* **Bàn giao quyền sở hữu:** Chuyển giao 100% bản quyền sở hữu trí tuệ, tài liệu kiến trúc kỹ thuật và mã nguồn sạch.