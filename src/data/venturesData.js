/**
 * Dữ liệu chi tiết chuyên sâu của 2 Sản phẩm cốt lõi (BrandHub & BienSoVip)
 * Được đồng bộ trực tiếp từ hệ thống tài liệu docs/ventures/
 */

// =========================================================================
// 1. BRANDHUB DATA CONSTANTS
// =========================================================================
export const BRANDHUB_DATA = {
  id: "brandhub",
  name: "BrandHub",
  tagline: "Nền tảng trí tuệ thương hiệu & xuất bản nội dung tự động đa kênh phân tán",
  category: "AI MarTech & Distributed Omnichannel Publisher",
  status: "R&D Production",
  metrics: [
    { value: "07", label: "Microservices & Modules", sub: "Độc lập phân tán" },
    { value: "32", label: "Tuần phát triển", sub: "16 Sprints Agile FSoft" },
    { value: "430+", label: "Tasks Jira hoàn thành", sub: "Spec → Plan → Code → Test" },
    { value: "05", label: "Mạng xã hội tích hợp", sub: "FB, TikTok, Insta, Threads, Zalo" },
    { value: "0%", label: "Tỷ lệ mất tin nhắn (DLQ)", sub: "RabbitMQ Retry lũy thừa" }
  ],
  microservices: [
    {
      id: "gateway",
      name: "brandhub-api-gateway",
      port: 8080,
      tag: "Cổng Định Tuyến & Bảo Mật",
      tech: "Spring Cloud Gateway • WebFlux • JWT • Redis",
      desc: "Cổng định tuyến tập trung bất đồng bộ, xác thực JWT phân tán không truy vấn lại DB, bảo vệ chống brute-force và Redis Token Bucket Rate Limiting."
    },
    {
      id: "business",
      name: "brandhub-business-service",
      port: 8081,
      tag: "Nghiệp Vụ Cốt Lõi Multi-Tenant",
      tech: "Java 21 • Spring Boot 3.3.5 • PostgreSQL • MongoDB",
      desc: "Quản trị nghiệp vụ đa người dùng Multi-tenancy, phân quyền chặt chẽ giữa Agency, Brand Owner và CTV viết bài, quy trình phê duyệt Kanban và thanh toán."
    },
    {
      id: "ai",
      name: "brandhub-ai-service",
      port: 8082,
      tag: "AI & GraphRAG Khắc Chế Ảo Giác",
      tech: "Python FastAPI • ChromaDB • Neo4j • Groq Llama 3",
      desc: "RAG học giọng điệu thương hiệu (Brand Voice) từ tài liệu mẫu, Neo4j GraphRAG phân tích mối tương quan giữa KOLs/Trends và sinh ảnh Stability AI SDXL."
    },
    {
      id: "publisher",
      name: "brandhub-publisher-service",
      port: 8083,
      tag: "Xuất Bản Đa Kênh Async 0% Rớt Tin",
      tech: "Spring Boot 3 • RabbitMQ DLQ • Social Media APIs",
      desc: "Tiêu thụ hàng đợi RabbitMQ, lập lịch tự động đăng bài lên 5 nền tảng mạng xã hội với cơ chế Dead Letter Queue (DLQ) và Exponential Backoff."
    },
    {
      id: "web",
      name: "brandhub-web-dashboard",
      port: 3000,
      tag: "Dashboard Điều Khiển Tập Trung",
      tech: "React 18 • TypeScript • Vite • Tailwind CSS",
      desc: "Portal quản trị trực quan, quản lý chiến dịch tiếp thị, bảng Kanban phê duyệt nội dung kéo-thả và lịch đăng bài trực quan."
    },
    {
      id: "mobile",
      name: "brandhub-mobile-app",
      port: "App",
      tag: "Ứng Dụng Đồng Hành Di Động",
      tech: "React Native • Expo • Push Notifications",
      desc: "Ứng dụng di động đồng bộ thời gian thực giúp ban giám đốc phê duyệt bài viết nhanh chóng và nhận thông báo tiến độ chiến dịch tức thời."
    },
    {
      id: "infra",
      name: "brandhub-infrastructure",
      port: "Cloud",
      tag: "Hạ Tầng Cụm Container & CI/CD",
      tech: "Docker Compose • AWS EC2 • GitHub Actions • Nginx",
      desc: "Toàn bộ cụm container điều phối qua Docker Compose, quy trình CI/CD tự động kiểm thử và deploy lên hạ tầng AWS EC2 ổn định 24/7."
    }
  ]
};

// =========================================================================
// 2. BIENSOVIP DATA CONSTANTS
// =========================================================================
export const BIENSOVIP_DATA = {
  id: "biensovip",
  name: "BienSoVip",
  tagline: "Sàn giao dịch, đấu giá & phân tích biển số xe định danh cao cấp tốc độ cao",
  category: "Luxury Marketplace & High-Performance Web",
  status: "Live Production",
  url: "https://biensovip.com",
  metrics: [
    { value: "61", label: "Bảng Thực Thể CSDL", sub: "Mô hình quan hệ Clean Architecture" },
    { value: "< 8ms", label: "Thời Gian Lọc Đa Tiêu Chí", sub: "PostgreSQL GIN / BTREE Indexing" },
    { value: "< 0.5s", label: "Khớp Lệnh Cọc VietQR", sub: "Webhook tự động, 0đ chi phí cổng" },
    { value: "150+", label: "Biển Số Đã Giao Dịch", sub: "Tỷ lệ chốt cọc thực tế 33.3%" },
    { value: "14", label: "Môi Giới / CTV Hoạt Động", sub: "Link UTM định danh & ví hoa hồng" }
  ],
  specs: [
    {
      id: "fast-query",
      title: "Lọc đa tiêu chí dưới 8ms (PostgreSQL GIN Index)",
      desc: "Tìm kiếm tức thời giữa hàng chục nghìn biển số theo định dạng ngũ quý, sảnh tiến, lộc phát và dải giá, phản hồi dưới 8ms loại bỏ hoàn toàn giật lag."
    },
    {
      id: "vietqr-lock",
      title: "Cổng cọc VietQR tự động & Khóa phân tán 15 phút",
      desc: "Khớp lệnh cọc qua Webhook ngân hàng dưới 0.5s với 0đ phí cổng trung gian. Khóa phân tán Redis Lock 15 phút triệt tiêu 100% rủi ro bán trùng."
    },
    {
      id: "email-builder",
      title: "Soạn Email Marketing Kéo-Thả (Visual Drag & Drop)",
      desc: "Trình thiết kế email trực quan tích hợp sẵn, kết nối hệ thống SMTP doanh nghiệp với 0đ phí phát sinh, tự động xuất hóa đơn và biên lai điện tử PDF."
    },
    {
      id: "wishlist-alerts",
      title: "Thông báo biển mới theo nhu cầu & Broadcast 1-Click",
      desc: "Tự động gửi email/Zalo thông báo khi có biển số khớp với yêu cầu săn biển của khách; cho phép admin phát thông báo ưu đãi xả kho chỉ bằng 1 click."
    },
    {
      id: "video-mockup",
      title: "Nhúng Video TikTok/Reels & Sinh ảnh Mockup AI Hàng Loạt",
      desc: "Gán video thực tế sản phẩm từ TikTok/Reels tăng uy tín, kèm công cụ 1-click tự động render hàng loạt ảnh mockup biển số gắn lên đuôi các dòng xe sang."
    },
    {
      id: "fengshui-matrix",
      title: "Phong thủy Bát Tự 4 Trụ & Ma trận so sánh đa biển",
      desc: "Công cụ chấm điểm hợp mệnh theo ngũ hành ngày sinh kết hợp bảng ma trận đối chiếu 3 biển số song song giúp tăng 35% tỷ lệ chốt cọc."
    },
    {
      id: "affiliate-portal",
      title: "Cổng quản trị 14 Môi Giới & Cộng tác viên (CTV)",
      desc: "Cấp link UTM định danh riêng, ví hoa hồng tự động ghi nhận tức thời khi khách cọc và quy trình duyệt lệnh rút tiền minh bạch 1-click."
    }
  ]
};


export const BRANDHUB_GALLERY = [
  { src: "/docs/images/DA-D19-01.png", title: "Dashboard Quản Trị Chiến Dịch & Telemetry Đa Kênh", tag: "COMMAND CENTER" },
  { src: "/docs/images/DA-D19-02.png", title: "Báo Cáo Hiệu Suất Chiến Dịch & Biểu Đồ Tăng Trưởng", tag: "ANALYTICS" },
  { src: "/docs/images/DA-D19-03.png", title: "Lập Lịch Xuất Bản Tự Động Đa Nền Tảng", tag: "SCHEDULER" },
  { src: "/docs/images/DA-D19-04.png", title: "Studio AI Sinh Bài Viết Theo Brand Voice RAG", tag: "AI STUDIO" },
  { src: "/docs/images/DA-D19-05.png", title: "Kiến Trúc Hạ Tầng Cụm Microservices & Docker", tag: "INFRASTRUCTURE" },
  { src: "/docs/images/DA-D19-06.png", title: "Phân Quyền Tổ Chức Đa Cấp Multi-Tenant", tag: "MULTI-TENANT" },
  { src: "/docs/images/DA-D19-07.png", title: "Bảng Kanban Quản Lý Quy Trình Duyệt Bài", tag: "KANBAN WORKFLOW" },
  { src: "/docs/images/DA-D19-12.png", title: "Bảng Giám Sát Hàng Đợi RabbitMQ Async & DLQ", tag: "RABBITMQ MONITOR" }
];

export const BIENSOVIP_GALLERY = [
  { src: "/docs/images/biensovip_home_real.png", title: "Trang Chủ Biensovip & Cổng Tìm Kiếm Biển Số <8ms", tag: "MARKETPLACE PORTAL" },
  { src: "/docs/images/biensovip_real_dashboard.png", title: "Admin Telemetry 150 Biển Đã Bán & Tỷ Lệ Chốt 33.3%", tag: "ANALYTICS & METRICS" },
  { src: "/docs/images/biensovip_real_plates.png", title: "Quản Trị Kho Biển Số & Sinh Ảnh Mockup Hàng Loạt", tag: "INVENTORY MGMT" },
  { src: "/docs/images/biensovip_real_ctv.png", title: "Cổng Quản Trị 14 CTV & Cấp Link UTM Định Danh", tag: "AFFILIATE SYSTEM" },
  { src: "/docs/images/biensovip_real_audit.png", title: "Nhật Ký Hệ Thống Bất Biến (Audit Trail Logs)", tag: "SECURITY & AUDIT" },
  { src: "/docs/images/biensovip_real_comparison.png", title: "Ma Trận So Sánh Đa Biển & Video Reels Thực Tế", tag: "DECISION MATRIX" },
  { src: "/docs/images/biensovip_real_fengshui.png", title: "Thuật Toán Phong Thủy 4 Trụ Bát Tự", tag: "FENGSHUI ENGINE" }
];
