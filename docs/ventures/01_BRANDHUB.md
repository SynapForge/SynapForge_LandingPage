# SẢN PHẨM LÕI 01: BRANDHUB — AI MARTECH & OMNICHANNEL PUBLISHER
> **Nền tảng Trí tuệ Thương hiệu & Xuất bản Tự động Đa kênh Phân tán**  
> **Phân loại:** Enterprise B2B SaaS Platform  
> **Kiến trúc trưởng & Tech Lead:** Lê Trí Trung (Founder)  
> **Đội ngũ phát triển nòng cốt:** Lê Trí Trung, Hà Văn Ân, Nguyễn Thành Lộc (SynapForge Core Team)  

---

## 1. TỔNG QUAN & BÀI TOÁN DOANH NGHIỆP GIẢI QUYẾT
Trong kỷ nguyên tiếp thị đa kênh, các Agency và Nhãn hàng đối mặt với 3 thách thức sinh tử:
1. **Lệch giọng điệu thương hiệu (Brand Voice Drifting):** Khi mở rộng đội ngũ copywriter hoặc thuê CTV ngoài, chất lượng bài viết thường thiếu nhất quán với định vị thương hiệu.
2. **Nghẽn cổ chai và mất mát khi xuất bản đa nền tảng:** Đăng bài thủ công lên đồng thời Facebook, TikTok, Instagram, Threads, Zalo tốn hàng trăm giờ làm việc, dễ sai sót và không kiểm soát được lỗi rớt mạng.
3. **Chi phí API mô hình ngôn ngữ lớn (LLM) quá đắt đỏ:** Sử dụng API GPT-4 cho hàng triệu bài viết gây thủng ngân sách vận hành.

👉 **BrandHub** được SynapForge thiết kế như một **cỗ máy phân tán 7 Microservices** giải quyết triệt để 3 bài toán trên thông qua RAG học giọng điệu, hàng đợi RabbitMQ Dead Letter Queue (0% rớt tin nhắn) và GraphRAG phân tích xu hướng.

---

## 2. CHỈ SỐ HOẠT ĐỘNG & THƯỚC ĐO KỸ THUẬT THỰC TẾ (REAL METRICS)
* **07 Microservices & Modules Độc Lập:** Phân tách hoàn toàn giữa Định tuyến (Gateway), Nghiệp vụ lõi (Business), Trí tuệ nhân tạo (AI RAG), Xuất bản (Publisher), Giao diện Web, Mobile App và Hạ tầng Cloud.
* **32 Tuần Phát Triển (16 Sprints Agile Chuẩn):** Tuân thủ quy trình kiểm thử và nghiệm thu nghiêm ngặt theo chuẩn FPT Software.
* **430+ Tasks Jira Hoàn Thành:** Chu trình khép kín: *Specification → Architecture Plan → Clean Code → Unit/Integration Test → Production Deploy*.
* **05 Mạng Xã Hội Tích Hợp Đồng Bộ:** Facebook Pages & Groups, TikTok Video, Instagram Professional, Threads, Zalo OA.
* **0% Tỷ Lệ Mất Tin Nhắn Xuất Bản (DLQ):** Xử lý hàng chục ngàn bài viết không bao giờ bị thất lạc nhờ hàng đợi RabbitMQ với cơ chế Thử lại lũy thừa (Exponential Backoff).

---

## 3. KIẾN TRÚC KỸ THUẬT CHUYÊN SÂU 7 MICROSERVICES

```
                               [Client Web / Mobile Companion]
                                              │ (HTTPS / TLS 1.3)
                                              ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. API GATEWAY SERVICE (`brandhub-api-gateway` • Port 8080)                            │
│    Tech: Spring Cloud Gateway • WebFlux Async • Distributed JWT Auth • Redis Rate Limit│
└──────┬──────────────────────────────────────┬───────────────────────────────────┬──────┘
       │ (Internal gRPC / REST)               │                                   │
       ▼                                      ▼                                   ▼
┌──────────────────────────────┐ ┌──────────────────────────────┐ ┌──────────────────────────────┐
│ 2. BUSINESS CORE SERVICE     │ │ 3. AI & GRAPHRAG SERVICE     │ │ 4. PUBLISHER ASYNC SERVICE   │
│ (`brandhub-business-service`) │ │ (`brandhub-ai-service`)      │ │ (`brandhub-publisher-service`)│
│ Port: 8081                   │ │ Port: 8082                   │ │ Port: 8083                   │
│ Tech: Java 21 • Spring Boot 3│ │ Tech: Python FastAPI • Neo4j │ │ Tech: Spring Boot 3 • RabbitMQ│
│ • PostgreSQL • MongoDB       │ │ • ChromaDB • Groq Llama 3    │ │ • Social Media Graph APIs    │
├──────────────────────────────┤ ├──────────────────────────────┤ ├──────────────────────────────┤
│• Quản lý Multi-tenancy       │ │• Brand Voice RAG Pipeline    │ │• Tiêu thụ hàng đợi Task Queue│
│• Phân quyền Agency/Brand/CTV │ │• GraphRAG phân tích Trend/KOL│ │• RabbitMQ Dead Letter Queue  │
│• Kanban phê duyệt nội dung   │ │• Fallback Claude 3.5 Sonnet  │ │• Xuất bản song song 5 nền    │
│• Quản lý hóa đơn & gói cước  │ │• Sinh ảnh Stability AI SDXL  │ │  tảng với độ trễ < 2 giây    │
└──────────────────────────────┘ └──────────────────────────────┘ └──────────────────────────────┘
                                              ▲
                                              │ (RabbitMQ Event Bus)
┌─────────────────────────────────────────────┴──────────────────────────────────────────┐
│ 5. WEB DASHBOARD (`brandhub-web-dashboard` • React 18 • TypeScript • Vite • Tailwind)  │
│ 6. MOBILE APP (`brandhub-mobile-app` • React Native • Expo • Realtime Push Alerts)     │
│ 7. INFRASTRUCTURE CLUSTER (`brandhub-infra` • Docker Compose • AWS EC2 • GitHub Actions)│
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Chi tiết các phân hệ:
1. **`brandhub-api-gateway` (Port 8080):** Cổng định tuyến tập trung viết bằng Spring WebFlux bất đồng bộ, xác thực chữ ký JWT phân tán không truy vấn lại DB (Stateless), tích hợp thuật toán Redis Token Bucket chặn đứng brute-force và DDoS.
2. **`brandhub-business-service` (Port 8081):** Trái tim nghiệp vụ chạy trên Java 21. Quản lý phân quyền chặt chẽ giữa Chủ thương hiệu (Brand Owner), Quản lý chiến dịch (Agency Manager) và Cộng tác viên viết bài (Copywriter).
3. **`brandhub-ai-service` (Port 8082):** Trạm xử lý AI chuyên dụng bằng Python FastAPI:
   * **RAG Pipeline:** Trích xuất ngữ nghĩa và phong cách viết (tone, từ khóa cấm, cá tính thương hiệu) lưu trữ trong vector store ChromaDB.
   * **GraphRAG:** Ứng dụng cơ sở dữ liệu đồ thị Neo4j kết nối các nút Thực thể (Entities) — Xu hướng (Trends) — Người ảnh hưởng (KOLs) để định hướng góc nhìn bài viết.
   * **Dual-LLM Engine:** Sử dụng Groq Llama 3 cho tốc độ sinh văn bản thần tốc và Fallback sang Anthropic Claude khi cần phân tích chiến lược phức tạp.
4. **`brandhub-publisher-service` (Port 8083):** Hệ thống công nhân tiêu thụ hàng đợi RabbitMQ:
   * Sử dụng cơ chế Manual ACK và Dead Letter Queue (DLQ).
   * Khi gặp lỗi mạng hoặc API bên thứ ba (ví dụ Facebook Graph API rate limit), tin nhắn tự động chuyển vào hàng đợi thử lại sau 5s, 15s, 45s (Exponential Backoff).
   * Sau 5 lần retry bất thành, tin nhắn đưa vào DLQ để kỹ sư can thiệp, bảo đảm 100% không mất bài đăng.

---

## 4. DỮ LIỆU CẤU TRÚC JSON ĐỒNG BỘ VÀO HỆ THỐNG
Dữ liệu chuẩn của dự án BrandHub được lưu trữ tại `src/data/venturesData.js` với các hằng số:
* `BRANDHUB_METRICS`: 5 chỉ số vận hành.
* `BRANDHUB_MICROSERVICES`: 7 thông số kỹ thuật từng cổng và dịch vụ.
* `BRANDHUB_GALLERY`: Bộ ảnh chụp giao diện Kanban, Dashboard và kiến trúc microservices.

---

## 5. THƯ VIỆN HÌNH ẢNH MINH CHỨNG & BẢN VẼ KIẾN TRÚC THỰC TẾ (VISUAL EVIDENCE & ARCHITECTURE)
Dưới đây là các ảnh chụp thực tế màn hình (Screenshots) và sơ đồ kiến trúc trích xuất từ hệ thống BrandHub phục vụ lập trình viên đối chiếu khi code:

### 5.1. Dashboard Điều Khiển Chiến Dịch & Telemetry Thời Gian Thực
![BrandHub Command Dashboard](/docs/images/DA-D19-01.png)
* **Ý nghĩa kiến trúc:** Màn hình trung tâm tổng hợp chỉ số tương tác, số lượng bài đăng đang xếp hàng và trạng thái kết nối 5 mạng xã hội. Phục vụ code component `CampaignOverviewCard.jsx`.

### 5.2. Studio AI Sinh Bài Viết Theo Ngữ Điệu Thương Hiệu (Brand Voice RAG)
![BrandHub AI Studio](/docs/images/DA-D19-04.png)
* **Ý nghĩa kiến trúc:** Giao diện nhập prompt, chọn Brand Voice và sinh bài viết đồng thời bằng Groq Llama 3 và Stability AI. Phục vụ code component `BrandVoiceAIStudio.jsx`.

### 5.3. Bảng Lập Lịch Xuất Bản Tự Động Đa Nền Tảng (Multichannel Calendar Scheduler)
![BrandHub Scheduler](/docs/images/DA-D19-03.png)
* **Ý nghĩa kiến trúc:** Lịch biểu trực quan phân luồng bài viết theo từng múi giờ vàng của Facebook, TikTok, Instagram, Threads và Zalo.

### 5.4. Bảng Giám Sát Hàng Đợi RabbitMQ Async & Cơ Chế Dead Letter Queue (DLQ)
![BrandHub RabbitMQ Monitor](/docs/images/DA-D19-12.png)
* **Ý nghĩa kiến trúc:** Minh chứng thép cho cam kết 0% tỷ lệ rớt tin nhắn. Hiển thị hàng đợi `task.queue`, `task.retry` và `task.dlq` với cơ chế Exponential Backoff.

### 5.5. Phân Quyền Tổ Chức Đa Cấp Multi-Tenant & Bảng Kanban Duyệt Bài
![BrandHub Multi-Tenant](/docs/images/DA-D19-06.png)
![BrandHub Kanban Workflow](/docs/images/DA-D19-07.png)
* **Ý nghĩa kiến trúc:** Cơ chế phân quyền RBAC đa cấp giữa Agency, Brand Owner và CTV viết bài với luồng phê duyệt trạng thái Kanban kéo-thả.
