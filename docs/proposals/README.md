# HỆ THỐNG HỒ SƠ CHÀO THẦU & ĐỀ XUẤT DỰ ÁN (PROPOSALS & BIDDING SUITE)
> **Bộ tài liệu chào thầu, đặc tả phạm vi công việc, kiến trúc kỹ thuật & cơ chế hợp đồng minh bạch**  
> **Áp dụng cho:** Toàn bộ hoạt động tư vấn, chào giá và ký kết hợp đồng khách hàng tại SynapForge  
> **Master Slogan:** *Forging Intelligence. Engineering Scale.* (Tôi luyện Trí tuệ. Kiến tạo Quy mô.)  

---

## 🗺️ CẤU TRÚC PHÂN HỆ HỒ SƠ ĐỀ XUẤT DỰ ÁN (/proposals)

Phân hệ chào thầu của SynapForge được phân rã thành **6 tài liệu chuyên biệt**, phục vụ trọn vẹn từng giai đoạn tiếp cận và đàm phán với khách hàng:

```
D:\Working\SynapForge\docs\proposals
│
├── 📜 README.md                                     <- Tài liệu này: Bản đồ điều hướng & Quy trình 5 bước chào thầu chuẩn
│
├── 📑 01_MASTER_PROPOSAL_TEMPLATE.md                <- Bản Đề xuất Dự án Tổng thể (Dành cho Giám đốc / Nhà sáng lập)
│
├── 📋 02_STATEMENT_OF_WORK_SOW.md                   <- Đặc tả Phạm vi Công việc Chi tiết (WBS, In-Scope & Out-of-Scope)
│
├── 🏗️ 03_TECHNICAL_ARCHITECTURE_PROPOSAL.md        <- Đề xuất Kiến trúc Kỹ thuật & Hạ tầng (Dành cho CTO / Tech Evaluators)
│
├── ⏱️ 04_TIMELINE_SPRINT_DELIVERY_PLAN.md           <- Kế hoạch Tiến độ, Lộ trình Sprints & Quy chuẩn Giao tiếp
│
├── 💰 05_COMMERCIAL_PRICING_AND_ESCROW.md           <- Báo giá Thương mại, Bóc tách Chi phí & Cơ chế Ký quỹ 40/60
│
└── 📝 06_CLIENT_DISCOVERY_QUESTIONNAIRE.md          <- Bộ Câu hỏi Khảo sát Nghiệp vụ & Đánh giá Nhu cầu Ban đầu
```

---

## 🔄 QUY TRÌNH 5 BƯỚC TỪ TIẾP NHẬN LEAD ĐẾN KÝ HỢP ĐỒNG (PITCHING LIFECYCLE)

```
[Bước 1: Khảo sát 24h] ──> [Bước 2: Lên Giải pháp] ──> [Bước 3: Demo & Pitch] ──> [Bước 4: Chốt 40/60] ──> [Bước 5: Kickoff]
Gửi Questionnaire 06       Lập SOW 02 & Tech 03        Thuyết trình Master 01      Ký HĐ Escrow 05          Bắt đầu Sprint 1
Làm rõ nghiệp vụ           Bóc tách ngân sách 05       Demo prototype tương tác    Nhận cọc 40%             Tạo Repo & Jira
```

### Bước 1: Tiếp nhận & Khảo sát Nhu cầu (< 24 Giờ)
* Gửi [06_CLIENT_DISCOVERY_QUESTIONNAIRE.md](./06_CLIENT_DISCOVERY_QUESTIONNAIRE.md) cho khách hàng để thu thập: bài toán cốt lõi, lượng truy cập dự kiến, các tích hợp bên thứ ba và ngân sách mục tiêu.
* Tổ chức buổi Discovery Call 30 phút giữa Founder / Tech Lead Lê Trí Trung và đại diện khách hàng.

### Bước 2: Thiết kế Kiến trúc & Bóc tách Phạm vi (< 48 Giờ)
* Biên soạn [02_STATEMENT_OF_WORK_SOW.md](./02_STATEMENT_OF_WORK_SOW.md): Rạch ròi ranh giới tính năng để chống phình phạm vi (Scope Creep).
* Phác thảo sơ đồ hạ tầng trong [03_TECHNICAL_ARCHITECTURE_PROPOSAL.md](./03_TECHNICAL_ARCHITECTURE_PROPOSAL.md).
* Bóc tách chi phí và chọn gói cước tối ưu trong [05_COMMERCIAL_PRICING_AND_ESCROW.md](./05_COMMERCIAL_PRICING_AND_ESCROW.md).

### Bước 3: Thuyết trình Phương án & Demo Tương tác (Pitch Day)
* Trình bày [01_MASTER_PROPOSAL_TEMPLATE.md](./01_MASTER_PROPOSAL_TEMPLATE.md) bằng slide trực quan.
* Trực tiếp demo các tính năng tương tự đã chạy thực tế từ sản phẩm lõi [BrandHub](../ventures/01_BRANDHUB.md) và [BienSoVip](../ventures/02_BIENSOVIP.md).

### Bước 4: Đàm phán Điều khoản & Ký Hợp đồng An toàn 40/60
* Thống nhất tiến độ trong [04_TIMELINE_SPRINT_DELIVERY_PLAN.md](./04_TIMELINE_SPRINT_DELIVERY_PLAN.md).
* Ký Hợp đồng Dân sự với cơ chế bảo vệ khách hàng: Đợt 1 chỉ thanh toán 40%, 60% còn lại chỉ thanh toán khi đã nghiệm thu 100% trên Internet.

### Bước 5: Bàn giao Khởi động Dự án (Sprint 1 Kickoff)
* Mời khách hàng vào kênh Telegram / Slack riêng biệt để cập nhật tiến độ hàng ngày.
* Cấp tài khoản xem bảng tiến độ Jira và phân chia các công việc Sprint 1.

---

## 🎯 4 NGUYÊN TẮC VÀNG TRONG HỒ SƠ CHÀO THẦU SYNAPFORGE
1. **Minh bạch Tuyệt đối (No Hidden Costs):** Báo giá trọn gói, bóc tách từng ngày công (Man-day), không phát sinh chi phí bất ngờ.
2. **Chứng minh bằng Số liệu (Metric-driven):** Mọi cam kết đều có chỉ số đo lường (Query < 8ms, Đối soát < 0.5s, 0% mất tin nhắn RabbitMQ).
3. **Phân ranh giới rõ ràng (Explicit Boundaries):** Liệt kê chi tiết mục *In-Scope* (Bao gồm) và *Out-of-Scope* (Không bao gồm) để bảo vệ cả khách hàng lẫn đội ngũ kỹ thuật.
4. **Cam kết Quyền lực Khách hàng (Zero Lock-in):** Khẳng định khách hàng sở hữu 100% mã nguồn và toàn quyền hạ tầng Cloud.