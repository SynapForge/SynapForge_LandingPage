/**
 * Từ điển UI song ngữ VI/EN cho MockupBView + helpers.
 * Không dùng thư viện i18n — state + dict là đủ (YAGNI).
 */

export const pick = (lang, vi, en) => (lang === "en" && en ? en : vi);

export const T = {
  meta_title: {
    vi: "SynapForge — Thiết kế Website Bán Hàng, AI & Chuyển Đổi Số cho Doanh Nghiệp | Đà Nẵng",
    en: "SynapForge — Web Design, Automation & AI for SMEs | Da Nang, Vietnam",
  },
  meta_desc: {
    vi: "SynapForge thiết kế website bán hàng, tự động hóa đơn hàng & thanh toán, AI chăm khách 24/7 cho doanh nghiệp vừa & nhỏ tại Đà Nẵng. Báo giá 24h, bàn giao 30–60 ngày.",
    en: "SynapForge builds e-commerce websites, order & payment automation, and 24/7 AI customer support for SMEs in Da Nang, Vietnam. Quote in 24h, delivery in 30–60 days.",
  },

  nav_home: { vi: "Trang chủ", en: "Home" },
  nav_products: { vi: "Sản phẩm", en: "Products" },
  nav_model: { vi: "Mô hình song cơ", en: "Dual Engine" },
  rail_model: { vi: "Mô hình", en: "Model" },
  nav_ventures: { vi: "Sản phẩm", en: "Products" },
  nav_services: { vi: "Dịch vụ", en: "Services" },
  rail_intro: { vi: "Giới thiệu", en: "Intro" },
  ven_note: { vi: "Đội ngũ tự xây", en: "Built in-house" },
  nav_team: { vi: "Đội ngũ", en: "Team" },
  nav_contact: { vi: "Liên hệ", en: "Contact" },
  nav_cta: { vi: "Bắt đầu dự án", en: "Start a project" },

  rail_services: { vi: "Dịch vụ", en: "Services" },
  rail_team: { vi: "Đội ngũ", en: "Team" },
  rail_contact: { vi: "Liên hệ", en: "Contact" },

  flywheel_label: {
    vi: "// B/02 — MÔ HÌNH HOẠT ĐỘNG",
    en: "// B/02 — DUAL-ENGINE FLYWHEEL",
  },
  flywheel_title: {
    vi: "Phát triển sản phẩm lõi song hành cùng dịch vụ kỹ thuật",
    en: "Building in-house to engineer client scale",
  },
  flywheel_note: {
    vi: "Công nghệ kiểm chứng qua thực tế, giảm thiểu rủi ro",
    en: "Battle-tested workflows, minimizing risks",
  },
  flywheel_sub: {
    vi: "Chúng tôi chủ động kiểm chứng công nghệ trên các sản phẩm nội bộ trước khi áp dụng cho khách hàng. Các module đưa vào dự án đều đã vận hành ổn định trên môi trường thực tế, giúp tiết kiệm thời gian và ngân sách.",
    en: "Instead of experimenting on client budgets, we validate architectures on our own platforms first, bringing stable, proven modules to your deployment.",
  },
  engine1_badge: { vi: "50% IN-HOUSE · PRODUCE", en: "50% IN-HOUSE · PRODUCE" },
  engine1_title: { vi: "Động cơ 1: Sản phẩm nội bộ", en: "Engine 1: In-House Ventures" },
  engine1_sub: {
    vi: "BrandHub, BienSoVip, AI Film Platform...",
    en: "BrandHub, BienSoVip, AI Film Streaming...",
  },
  engine1_desc: {
    vi: "Phát triển các nền tảng thương mại điện tử và công cụ AI phục vụ người dùng thực tế. Trực tiếp xử lý các bài toán kỹ thuật phức tạp: tự động đối soát giao dịch, khóa chống xung đột đơn hàng và bảo mật dữ liệu.",
    en: "Building our own high-traffic platforms to master real-world challenges: automated reconciliations, race condition locks, high concurrency, and data security.",
  },
  engine1_item1: {
    vi: "Chủ động nghiên cứu và phát triển, không để khách hàng chịu rủi ro thử nghiệm",
    en: "We absorb R&D learning curves ourselves, protecting client budgets",
  },
  engine1_item2: {
    vi: "Làm chủ công nghệ thực tế: Trợ lý AI trích dẫn nguồn, Microservices, Event Streams",
    en: "Mastering practical tech: Sourced RAG, Microservices, Event Streams",
  },
  engine1_item3: {
    vi: "Đóng gói sẵn các module: Đối soát thanh toán VietQR, khóa giao dịch Redis, tối ưu cơ sở dữ liệu",
    en: "Packaged production-ready modules: Zero-fee VietQR webhook, Redis Distributed Lock, optimized DB filters",
  },
  engine2_badge: { vi: "50% CLIENT · OUTSOURCE", en: "50% CLIENT · OUTSOURCE" },
  engine2_title: { vi: "Động cơ 2: Dịch vụ cho doanh nghiệp", en: "Engine 2: Client Engineering" },
  engine2_sub: {
    vi: "Website bán hàng, Sàn TMĐT, Tự động hóa, Trợ lý AI",
    en: "E-commerce, Marketplaces, Automation, AI Support",
  },
  engine2_desc: {
    vi: "Ứng dụng các module phần mềm đã vận hành ổn định vào dự án của khách hàng. Rút ngắn thời gian phát triển, tối ưu chi phí và hỗ trợ kỹ thuật dài hạn.",
    en: "Deploying battle-tested modules and proven engineering practices to deliver client systems. Fast assembly, reliable operations, dedicated long-term support.",
  },
  engine2_item1: {
    vi: "Rút ngắn thời gian triển khai: Bàn giao hệ thống hoàn chỉnh trong 30–60 ngày",
    en: "Accelerated turnaround: Full production delivery in 30–60 days",
  },
  engine2_item2: {
    vi: "Độ tin cậy cao: Hàng đợi chống mất dữ liệu, tốc độ tải nhanh, bảo mật nhiều lớp",
    en: "High reliability: Queue architecture preventing data loss, fast load times, layered security",
  },
  engine2_item3: {
    vi: "Bàn giao 100% mã nguồn, tài liệu kỹ thuật đầy đủ và cam kết bảo hành rõ ràng",
    en: "100% source code handover, full technical docs, and reliable warranty",
  },
  loop_badge: { vi: "// QUY TRÌNH GIÁ TRỊ", en: "// THE VALUE FLYWHEEL" },
  loop_title: {
    vi: "Mô hình phối hợp tạo giá trị bền vững",
    en: "Closed-Loop Dual-Engine Value Cycle",
  },
  loop_s1_num: { vi: "01 / PHÁT TRIỂN NỘI BỘ", en: "01 / FORGE" },
  loop_s1_txt: {
    vi: "Tự làm sản phẩm để kiểm chứng năng lực kỹ thuật và tích lũy các module chuẩn hóa.",
    en: "In-house ventures prove engineering rigor & build real credibility.",
  },
  loop_s2_num: { vi: "02 / ỨNG DỤNG CHO DỰ ÁN", en: "02 / REUSE" },
  loop_s2_txt: {
    vi: "Tái sử dụng các module sẵn có giúp rút ngắn thời gian bàn giao và tối ưu chi phí.",
    en: "Proven modules enable rapid delivery and lower costs for clients.",
  },
  loop_s3_num: { vi: "03 / TÁI ĐẦU TƯ CÔNG NGHỆ", en: "03 / REINVEST" },
  loop_s3_txt: {
    vi: "Liên tục nâng cấp giải pháp công nghệ, đảm bảo hệ thống của khách hàng luôn hiện đại.",
    en: "Outsourcing revenue reinvests into continuous in-house product R&D.",
  },

  hero_eyebrow: {
    vi: "// A/01 — VENTURE STUDIO & SOFTWARE FACTORY — ĐÀ NẴNG, VN",
    en: "// A/01 — VENTURE STUDIO & SOFTWARE FACTORY — DA NANG, VN",
  },
  h1_a: { vi: "Thiết kế website bán hàng,", en: "E-commerce websites," },
  h1_b: {
    vi: "tự động hóa & trợ lý AI 24/7",
    en: "automation & 24/7 AI assistants",
  },
  sub_b: {
    vi: "Website bán hàng, thanh toán tự động, trợ lý AI chăm sóc khách 24/7.",
    en: "E-commerce websites, automated payments, 24/7 AI customer assistance.",
  },
  sub_r: {
    vi: "Giải pháp thực tế cho doanh nghiệp vừa & nhỏ — chuẩn hóa quy trình vận hành và tiết kiệm chi phí công nghệ.",
    en: "End-to-end solutions for SMEs — streamlining operations and saving technology costs.",
  },
  cta_ventures: { vi: "Xem dự án thật", en: "See real projects" },
  cta_contact: { vi: "Báo giá trong 24h →", en: "Quote in 24h →" },
  dual_label: { vi: "02 định hướng:", en: "02 engines:" },
  dual_1: {
    vi: "■ Sản phẩm tự phát triển — BrandHub, BienSoVip",
    en: "■ In-house ventures — BrandHub, BienSoVip",
  },
  dual_2: {
    vi: "■ Dịch vụ phát triển phần mềm cho doanh nghiệp",
    en: "■ Enterprise client engineering",
  },

  ety_syn: {
    vi: "Synapse — Tư duy phân tích dữ liệu và ứng dụng AI giải quyết bài toán thực tế.",
    en: "Synapse — neural-network thinking, AI and intelligent data processing.",
  },
  ety_forge: {
    vi: "Forge — Kỷ luật kỹ thuật phần mềm, xây dựng hệ thống ổn định và bền bỉ.",
    en: "Forge — engineering discipline, turning ideas into durable products.",
  },
  ety_motto: {
    vi: "// Kỹ thuật bài bản, sản phẩm bền bỉ, đồng hành dài hạn",
    en: "// think like a neural network, build like a forge",
  },

  ven_title: { vi: "Sản phẩm", en: "Products" },
  ven_more: { vi: "Xem thêm sản phẩm →", en: "See all products →" },

  pp_back: { vi: "← Trang chủ", en: "← Home" },
  pp_title: { vi: "Toàn bộ sản phẩm", en: "All products" },
  pp_note: { vi: "Đã xây & sắp ra mắt", en: "Built & upcoming" },
  pp_built: { vi: "Đã xây", en: "Built" },
  pp_next: { vi: "Sắp ra mắt", en: "Upcoming" },
  pp_next_empty: {
    vi: "Lộ trình sản phẩm mới đang được cập nhật.",
    en: "New product roadmap is being updated.",
  },
  pd_back: { vi: "← Sản phẩm", en: "← Products" },
  pd_detail: { vi: "Xem chi tiết →", en: "View details →" },
  pd_visit: { vi: "Truy cập sản phẩm ↗", en: "Visit product ↗" },
  pd_demo: { vi: "Xin demo qua Zalo →", en: "Request a demo on Zalo →" },
  pd_problem: {
    vi: "Bài toán & Nỗi đau của khách hàng",
    en: "Customer Pain Points & Challenges",
  },
  pd_solution: {
    vi: "Giải pháp kiến trúc & Kỹ thuật từ SynapForge",
    en: "SynapForge Architectural & Technical Solution",
  },
  pd_feats_title: {
    vi: "Cơ chế vận hành & Tính năng kỹ thuật nổi bật",
    en: "Key Technical Features & Mechanisms",
  },
  pd_gallery: { vi: "Hình ảnh sản phẩm", en: "Screenshots" },
  pp_cta: {
    vi: "Bạn có ý tưởng sản phẩm? Làm cùng chúng tôi →",
    en: "Have a product idea? Build it with us →",
  },
  svc_title: {
    vi: "Dịch vụ chuyển đổi số",
    en: "Digital transformation services",
  },
  svc_note: { vi: "Cho doanh nghiệp vừa & nhỏ", en: "For SMEs" },
  team_title: { vi: "Đội ngũ kỹ sư", en: "Engineering Team" },
  cv_back: { vi: "← Về trang đội ngũ", en: "← Back to team" },
  cv_about: { vi: "Định vị & Giới thiệu chuyên môn", en: "Professional Profile" },
  cv_edu: { vi: "Học vấn & Đào tạo", en: "Education & Background" },
  cv_certs: { vi: "Chứng chỉ quốc tế & Ngoại ngữ", en: "Certifications & Languages" },
  cv_awards: { vi: "Thành tựu & Giải thưởng", en: "Awards & Honors" },
  cv_projects: { vi: "Dự án thực chiến tiêu biểu", en: "Key Featured Projects" },
  cv_exp: { vi: "Kinh nghiệm làm việc & Nghiên cứu", en: "Professional Experience" },
  cv_skills: { vi: "Năng lực công nghệ cốt lõi", en: "Core Technical Skills" },
  cv_links: { vi: "Hồ sơ năng lực & Liên hệ", en: "Profiles & Contact" },
  cv_prev: { vi: "← Kỹ sư trước:", en: "← Previous:" },
  cv_next: { vi: "Kỹ sư kế tiếp:", en: "Next engineer:" },
  cv_open: { vi: "Xem hồ sơ chi tiết", en: "View profile" },
  team_note: { vi: "05 kỹ sư phần mềm FPT / FSoft", en: "05 FPT / FSoft software engineers" },
  faq_title: { vi: "Câu hỏi thường gặp", en: "Frequently asked questions" },
  faq_note: { vi: "4 câu phổ biến nhất", en: "4 most common questions" },
  contact_title: { vi: "Bắt đầu dự án", en: "Start a project" },
  contact_note: { vi: "Phản hồi trong 24h", en: "Response within 24h" },
  contact_phone: { vi: "Điện thoại", en: "Phone" },
  contact_hq: { vi: "Trụ sở", en: "Headquarters" },
  contact_addr: {
    vi: "Hải Châu, TP. Đà Nẵng, Việt Nam",
    en: "Hai Chau, Da Nang, Vietnam",
  },
  contact_cta: {
    vi: "Gửi mô tả dự án qua Zalo →",
    en: "Send your project brief via Zalo →",
  },
  footer_addr: { vi: "Đà Nẵng, Việt Nam", en: "Da Nang, Vietnam" },
};

export const t = (lang, key) =>
  T[key] ? pick(lang, T[key].vi, T[key].en) : key;

export const HERO_STATS = [
  {
    v: "05+",
    l1: { vi: "Kỹ sư FPT / FSoft", en: "FPT / FSoft engineers" },
    l2: { vi: "Kinh nghiệm thực tế", en: "100% hands-on" },
  },
  {
    v: "02",
    l1: { vi: "Sản phẩm lõi", en: "Core products" },
    l2: { vi: "BrandHub & BienSoVip", en: "BrandHub & BienSoVip" },
  },
  {
    v: "0%",
    l1: { vi: "Tỷ lệ mất dữ liệu", en: "Message loss" },
    l2: { vi: "Hàng đợi RabbitMQ", en: "RabbitMQ DLQ" },
  },
  {
    v: "30–60",
    l1: { vi: "Ngày bàn giao", en: "Days to delivery" },
    l2: { vi: "MVP ra thị trường", en: "MVP to market" },
  },
];

export const TICKER = [
  { vi: "Website bán hàng", en: "E-commerce website" },
  { vi: "Thanh toán tự động", en: "Auto payment" },
  { vi: "AI chăm khách 24/7", en: "24/7 AI support" },
  { vi: "Quản lý đơn hàng", en: "Order management" },
  { vi: "Báo cáo tự động", en: "Auto reports" },
  { vi: "0đ phí cổng", en: "Zero gateway fees" },
  { vi: "<30s thông báo", en: "<30s notifications" },
  { vi: "0% mất dữ liệu", en: "0% data loss" },
];

export const CASES = [
  {
    id: "brandhub",
    rev: false,
    kicker: "CASE 01 — AI MARTECH & PUBLISHER",
    title: "BrandHub",
    tag: {
      vi: "Hỗ trợ soạn thảo & lập lịch đăng nội dung lên 5 nền tảng mạng xã hội",
      en: "Automated content drafts & multi-platform scheduling",
    },
    desc: {
      vi: "Tự động phân tích phong cách thương hiệu từ bài viết cũ, hỗ trợ tạo nội dung và lên lịch xuất bản trên 5 mạng xã hội — giúp tối ưu chi phí vận hành cho phòng marketing.",
      en: "Analyzes brand tone to generate content drafts and schedule posts across 5 platforms — significantly reducing manual overhead for marketing teams.",
    },
    problem: [
      {
        vi: "Lệch tông thương hiệu (Brand Voice Drifting): Khi thuê nhiều copywriter hoặc CTV ngoài, nội dung thường thiếu đồng nhất về cá tính và dễ vi phạm từ cấm của thương hiệu.",
        en: "Brand Voice Drifting: Outsourced copywriters often produce inconsistent copy that breaches brand identity and prohibited terms.",
      },
      {
        vi: "Rớt lịch & mất bài đăng khi xuất bản thủ công: Đăng bài đồng thời lên 5 nền tảng ngốn hàng trăm giờ làm việc; khi mạng lag hoặc API rate limit, bài viết bị mất mà không có cảnh báo.",
        en: "Dropped posts & bottlenecked publishing: Manual multi-platform posting consumes hundreds of hours; API rate limits often silently drop scheduled posts.",
      },
      {
        vi: "Chi phí API LLM thương mại quá đắt đỏ: Dùng trực tiếp API GPT-4 cho hàng ngàn bài viết đa kênh khiến chi phí vận hành phình to mất kiểm soát.",
        en: "Excessive commercial LLM API costs: Running direct GPT-4 queries across thousands of multi-tenant posts creates unsustainable cloud expenses.",
      },
    ],
    solution: [
      {
        vi: "Kiến trúc 7 Microservices phân tán: Tách biệt hoàn toàn API Gateway (WebFlux), Business (Java 21), AI Service (FastAPI) và Publisher Worker chịu tải cao.",
        en: "7 Distributed Microservices: Complete decoupling of WebFlux Gateway, Java 21 Business Core, FastAPI AI engine, and Async Publisher.",
      },
      {
        vi: "Brand Voice RAG + GraphRAG Neo4j: ChromaDB lưu chuẩn giọng điệu thương hiệu; Neo4j kết nối Thực thể - Xu hướng - KOLs giúp bài viết sắc sảo, chống ảo giác.",
        en: "Brand Voice RAG + Neo4j GraphRAG: Vector store ChromaDB preserves tone guidelines; Neo4j links Entities - Trends - KOLs for hallucination-free generation.",
      },
      {
        vi: "Hàng đợi tin cậy RabbitMQ DLQ: Tự động thử lại lũy thừa (Exponential Backoff sau 5s, 15s, 45s), cam kết 0% mất bài đăng khi mạng xã hội lỗi.",
        en: "RabbitMQ Dead Letter Queue (DLQ): Automated Exponential Backoff retries (5s, 15s, 45s) guaranteeing 0% dropped posts even during third-party outages.",
      },
      {
        vi: "Dual-LLM Engine tối ưu chi phí: Sinh bài siêu tốc bằng Groq Llama 3 và tự động fallback sang Claude 3.5 Sonnet cho phân tích chiến lược chuyên sâu.",
        en: "Cost-optimized Dual-LLM: Ultra-fast generation with Groq Llama 3 and seamless fallback to Claude 3.5 Sonnet for strategic analysis.",
      },
    ],
    feats: [
      {
        vi: "Tự học văn phong thương hiệu từ bài viết cũ — tạo nội dung bám sát định hướng doanh nghiệp",
        en: "Learns Brand Voice from existing posts — diverse copy aligned with brand guidelines",
      },
      {
        vi: "Lập lịch đăng tự động lên Facebook, TikTok, Instagram, Threads, Zalo",
        en: "Automated post scheduling to Facebook, TikTok, Instagram, Threads, Zalo",
      },
      {
        vi: "Hàng đợi tin cậy (RabbitMQ) — tự động xử lý lại khi có lỗi mạng, đảm bảo không bỏ sót bài đăng",
        en: "RabbitMQ Dead Letter Queue (DLQ) — automated retries to prevent dropped posts",
      },
    ],
    stats: [
      { v: "07", l: { vi: "Microservices", en: "Microservices" } },
      { v: "0%", l: { vi: "Tỷ lệ sót bài (DLQ)", en: "Post drop rate (DLQ)" } },
      { v: "05", l: { vi: "Mạng xã hội tích hợp", en: "Integrated social platforms" } },
      { v: "430+", l: { vi: "Tasks hoàn thành", en: "Tasks completed" } },
    ],
    chips: [
      "Java 21",
      "Spring Cloud Gateway",
      "RabbitMQ DLQ",
      "Neo4j GraphRAG",
      "Python FastAPI",
      "React 18",
    ],
    img: "/mockup/img/DA-D19-12.png",
    alt: "BrandHub dashboard",
    fig: ["FIG. 02 — BrandHub", "Dashboard"],
    gallery: [
      "/products/brandhub/01.jpg",
      "/products/brandhub/02.jpg",
      "/products/brandhub/03.jpg",
      "/products/brandhub/04.jpg",
    ],
  },
  {
    id: "biensovip",
    rev: true,
    kicker: "CASE 02 — LUXURY MARKETPLACE",
    title: "BienSoVip",
    tag: {
      vi: "Sàn giao dịch & đấu giá biển số xe trực tuyến",
      en: "Specialized online license-plate auction & marketplace",
    },
    desc: {
      vi: "Hệ thống tự động đối soát tiền cọc qua VietQR Webhook trong 0.5s kể cả ngoài giờ làm việc. Tích hợp trợ lý AI hỗ trợ giải đáp thông tin khách hàng 24/7.",
      en: "Automated deposit reconciliation via VietQR Webhook in 0.5s around the clock. Built-in AI assistant answers buyer questions 24/7.",
    },
    problem: [
      {
        vi: "Độ trễ lọc quá lớn trên kho hàng chục ngàn biển số: Các tiêu chí tìm kiếm phức tạp (tỉnh thành, ngũ quý, tổng điểm phong thủy, không chứa 4 và 7) khiến query mất 3–5 giây, gây nghẽn máy chủ.",
        en: "High query latency on large inventory: Complex search criteria (provinces, feng-shui sums, avoiding 4 & 7) cause 3–5s bottlenecks on standard databases.",
      },
      {
        vi: "Nguy cơ bán trùng (Double-Booking): Biển số là tài sản độc bản duy nhất. Nếu hai khách hàng cùng lúc bấm cọc, việc bán trùng gây tranh chấp pháp lý và mất uy tín.",
        en: "Double-Booking risks: Each license plate is uniquely singular. Simultaneous deposits risk severe legal disputes and reputational damage.",
      },
      {
        vi: "Phí cổng trung gian đắt đỏ & rủi ro đối soát thủ công: Các cổng thanh toán thu 1.5–2.5% trên mỗi giao dịch cọc lớn; đối soát chậm trễ vào ban đêm hoặc ngày lễ.",
        en: "Expensive gateway fees & manual reconciliation: 1.5–2.5% intermediary fees on high-value deposits, coupled with slow after-hours manual verification.",
      },
    ],
    solution: [
      {
        vi: "Tối ưu chỉ mục PostgreSQL GIN Index: Chuẩn hóa biển số thành vector số học khi import, duy trì tốc độ phản hồi bộ lọc đa tiêu chí < 8ms tức thì.",
        en: "PostgreSQL GIN Index optimization: Normalizes plate attributes into numerical vectors on ingest, keeping multi-criteria query latency strictly under 8ms.",
      },
      {
        vi: "Khóa phân tán Redis Lock (15 phút): Hệ thống khóa mềm độc quyền trên Redis ngay khi khách bấm cọc, ngăn chặn 100% tình trạng hai khách đặt trùng.",
        en: "15-minute Redis Distributed Lock: Locks the plate immediately upon deposit initiation, completely eliminating concurrency conflicts and duplicate bookings.",
      },
      {
        vi: "Động cơ VietQR Webhook khớp lệnh < 0.5s: Tự động bắt giao dịch ngân hàng và khóa biển sang 'ĐÃ CỌC' trong nửa giây với 0đ phí cổng trung gian, 24/7.",
        en: "Sub-0.5s VietQR Webhook engine: Instant bank transaction webhook matching that locks plate status to 'DEPOSITED' with zero third-party gateway fees.",
      },
      {
        vi: "Phong thủy Bát Tự Tứ Trụ & Ma trận so sánh 3 biển song song: Thuật toán ngũ hành tương sinh giúp khách hàng quyết định nhanh, tăng tỷ lệ chốt cọc lên 33.3%.",
        en: "Four Pillars Feng-Shui & 3-Plate Decision Matrix: Automated astrological harmony scoring helps buyers decide quickly, lifting deposit conversions to 33.3%.",
      },
    ],
    feats: [
      {
        vi: "Đối soát & khớp tiền cọc tự động qua VietQR Webhook — không tốn chi phí cổng trung gian",
        en: "Automated deposit matching via VietQR Webhook — zero intermediary gateway fees",
      },
      {
        vi: "Khóa giao dịch tự động (Redis Lock) — ngăn ngừa xung đột khi nhiều khách đặt cùng một sản phẩm",
        en: "Redis Distributed Lock — prevents race conditions & duplicate orders",
      },
      {
        vi: "Trợ lý AI hỗ trợ tư vấn và giải đáp thắc mắc khách hàng 24/7",
        en: "AI assistant for number analysis & user inquiries — available 24/7",
      },
    ],
    stats: [
      { v: "61", l: { vi: "Bảng dữ liệu CSDL", en: "Database tables" } },
      { v: "<8ms", l: { vi: "Độ trễ truy vấn lọc", en: "Filter query latency" } },
      { v: "<0.5s", l: { vi: "Khớp đối soát VietQR", en: "VietQR deposit match" } },
      { v: "150+", l: { vi: "Biển giao dịch thành công", en: "Successful transactions" } },
    ],
    chips: [
      ".NET 8 Clean Arch",
      "PostgreSQL GIN",
      "Redis Lock",
      "React 19",
      "VietQR Webhook",
      "DeepSeek AI",
    ],
    img: "/mockup/img/biensovip_real_dashboard.png",
    alt: "BienSoVip dashboard",
    fig: ["FIG. 03 — BienSoVip", "Admin"],
    url: "https://biensovip.com",
    gallery: [
      "/products/biensovip/01.jpg",
      "/products/biensovip/02.jpg",
      "/products/biensovip/03.jpg",
      "/products/biensovip/04.jpg",
    ],
  },
];

export const SERVICES = [
  {
    num: "01",
    title: {
      vi: "Website bán hàng & Nền tảng TMĐT",
      en: "E-commerce Website & Platforms",
    },
    sub: {
      vi: "Giải pháp bán hàng trực tuyến bài bản — quy trình đặt hàng rõ ràng, thanh toán tự động, giảm bớt khâu xác nhận thủ công.",
      en: "Structured online sales solutions — seamless ordering, automated payments, reducing manual follow-ups.",
    },
    chips: [
      {
        vi: "Giỏ hàng, quản lý đơn hàng & tồn kho tức thời",
        en: "Cart, order tracking & real-time inventory",
      },
      {
        vi: "Tích hợp VietQR tự động đối soát + Cổng VNPay/MoMo",
        en: "VietQR auto-reconciliation + VNPay/MoMo gateways",
      },
      {
        vi: "Trang quản trị (CMS Dashboard) tự cập nhật sản phẩm & giá",
        en: "Admin CMS dashboard for managing products & pricing",
      },
      {
        vi: "Tối ưu hóa SEO, bảo mật SSL & tốc độ tải trang nhanh",
        en: "SEO-optimized, SSL security & fast page load times",
      },
    ],
    tech: {
      vi: "TECH — đối soát tự động · bảo mật dữ liệu · sẵn sàng mở rộng",
      en: "TECH — auto reconciliation · data protection · scalable stack",
    },
    time: { vi: "4–8 tuần", en: "4–8 weeks" },
  },
  {
    num: "02",
    title: {
      vi: "Tự động hóa quy trình vận hành",
      en: "Workflow & Operations Automation",
    },
    sub: {
      vi: "Hệ thống tự đối soát đơn hàng, gửi thông báo tức thời, hỗ trợ xuất báo cáo định kỳ nhanh chóng.",
      en: "Automated order matching, instant webhook alerts, and streamlined financial reporting.",
    },
    chips: [
      {
        vi: "Thông báo tức thời qua Telegram / Zalo Webhook",
        en: "Instant Telegram / Zalo Webhook notifications",
      },
      {
        vi: "Đối soát thanh toán VietQR tự động, tiết kiệm chi phí cổng",
        en: "Automated VietQR reconciliation, saving gateway fees",
      },
      {
        vi: "Tự động phân loại và chuyển tiếp thông tin khách hàng đến đúng người phụ trách",
        en: "Automated lead sorting & CRM pipeline routing",
      },
      {
        vi: "Báo cáo doanh thu & đơn hàng tự động",
        en: "Automated revenue & sales reporting",
      },
    ],
    tech: {
      vi: "TECH — thông báo webhook · tự động đối soát · đảm bảo toàn vẹn dữ liệu",
      en: "TECH — webhook alerts · auto reconciliation · data integrity",
    },
    time: { vi: "3–6 tuần", en: "3–6 weeks" },
  },
  {
    num: "03",
    title: {
      vi: "Trợ lý AI chăm sóc khách hàng 24/7",
      en: "24/7 AI Customer Support Assistant",
    },
    sub: {
      vi: "Trợ lý AI được huấn luyện theo tài liệu và chính sách riêng của doanh nghiệp — trả lời chính xác, trích dẫn rõ nguồn, không cung cấp thông tin sai lệch, giảm tải đội ngũ chăm sóc khách hàng.",
      en: "AI assistants grounded in your internal knowledge base — accurate answers with source citations, minimizing hallucinations and staffing costs.",
    },
    chips: [
      {
        vi: "Hỗ trợ tư vấn thông tin sản phẩm tự động 24/7",
        en: "24/7 automated product consultation",
      },
      {
        vi: "Tự động tra cứu tài liệu nội bộ để cung cấp thông tin chính xác và có căn cứ",
        en: "Grounded in internal documents with verifiable citations",
      },
      {
        vi: "Tùy chọn triển khai Private AI / On-Premise bảo mật dữ liệu",
        en: "Private AI / On-Premise options for data confidentiality",
      },
      {
        vi: "Tích hợp API hiệu năng cao qua FastAPI",
        en: "High-performance AI API integration (FastAPI)",
      },
    ],
    tech: {
      vi: "TECH — AI trích dẫn nguồn · Kiểm soát thông tin chính xác · Bảo mật dữ liệu riêng tư",
      en: "TECH — Sourced RAG · reduced hallucination · private deployment",
    },
    time: { vi: "2–5 tuần", en: "2–5 weeks" },
  },
  {
    num: "04",
    title: {
      vi: "Phát triển phần mềm & Chuyển đổi số trọn gói",
      en: "End-to-End Software Engineering & Delivery",
    },
    sub: {
      vi: "Đồng hành từ khâu phân tích yêu cầu, thiết kế kiến trúc đến triển khai hoàn thiện và bàn giao trong 30–60 ngày.",
      en: "Partnering from requirements analysis and architecture to production launch in 30–60 days.",
    },
    chips: [
      {
        vi: "Làm rõ đặc tả yêu cầu (PRD) & Thiết kế UI/UX bài bản",
        en: "Clear PRD specifications & structured UI/UX design upfront",
      },
      {
        vi: "Giao diện hiện đại, tối ưu trải nghiệm người dùng",
        en: "Modern UI/UX optimized for smooth user journeys",
      },
      {
        vi: "Quy trình Agile/Scrum — minh bạch tiến độ từng giai đoạn",
        en: "Agile/Scrum workflow with transparent milestone tracking",
      },
      {
        vi: "Triển khai hạ tầng Cloud + Bàn giao toàn bộ mã nguồn & tài liệu",
        en: "Cloud deployment + 100% source code and documentation handover",
      },
    ],
    tech: {
      vi: "TECH — quy trình chuẩn chỉ · minh bạch tiến độ · bàn giao đầy đủ",
      en: "TECH — structured engineering · milestone transparency · full handover",
    },
    time: { vi: "30–60 ngày", en: "30–60 days" },
  },
];

export const TEAM = [
  {
    id: "le-tri-trung",
    photo: "/team/trunglc-white-polo-glasses.png",
    name: "Lê Trí Trung",
    role: "Founder & System Architect",
    bio: {
      vi: "Quán quân Hackathon CV 2026. Solo architect sàn BienSoVip (61 bảng CSDL, lọc <8ms) và CEO The MC Hub. Chuyên sâu Clean Architecture .NET & Java phân tán.",
      en: "Champion, Hackathon CV 2026. Solo architected BienSoVip (61-table schema, <8ms query) & CEO The MC Hub. Specialist in .NET & distributed Java Clean Architecture.",
    },
    skills: [".NET 8 Clean Arch", "Java Spring Boot", "System Design", "PostgreSQL", "FastAPI"],
  },
  {
    id: "ha-van-an",
    photo: "/team/anhv-white-polo.png",
    name: "Hà Văn Ân",
    role: "Full-Stack & AI Solutions",
    bio: {
      vi: "Đồng tác giả nghiên cứu AI ICTA 2026 (73.3% pass rate). 7 tháng thực tập FPT Software. Lead Dev STEMGO.net (34 mini-games, Gemini AI).",
      en: "Co-author of ICTA 2026 AI research (73.3% pass rate). 7-month FPT Software intern. Lead Dev for STEMGO.net (34 mini-games, Gemini AI).",
    },
    skills: ["Next.js 16", "RAG Pipelines", "Gemini API", "FastAPI", "Node.js"],
  },
  {
    id: "nguyen-thanh-loc",
    photo: "/team/Locnt-white-polo.png",
    name: "Nguyễn Thành Lộc",
    role: "Backend Architect & Data Solutions",
    bio: {
      vi: "GPA xuất sắc 3.5/4.0 FPTU. AI Lead nền tảng BrandHub (FastAPI, GraphRAG Neo4j & ChromaDB). Team Lead UniNest (.NET 8).",
      en: "Outstanding GPA 3.5/4.0. AI Lead for BrandHub (FastAPI, GraphRAG Neo4j & ChromaDB). Team Lead for UniNest (.NET 8).",
    },
    skills: [".NET 8", "Neo4j GraphRAG", "ChromaDB", "Clean Architecture", "FastAPI"],
  },
  {
    id: "nguyen-chon-phuoc",
    photo: "/team/phuocnc-white-polo.png",
    name: "Nguyễn Chơn Phước",
    role: "Cloud DevOps & Infrastructure",
    bio: {
      vi: "Acronic Solutions (vận hành thiết bị Anti-DDoS 24/7 qua Socket.IO và IPC). Backend Danatour. Chung kết toàn quốc InnoCodeCamp FPT.",
      en: "Acronic Solutions (24/7 Anti-DDoS hardware ops via Socket.IO & IPC). Danatour backend. National Finalist at InnoCodeCamp FPT.",
    },
    skills: ["Java 21", "Spring Boot 3", "Docker", "Nginx", "Linux Ops"],
  },
  {
    id: "nguyen-minh-tuan",
    photo: "/team/tuannm-white-polo.png",
    name: "Nguyễn Minh Tuấn",
    role: "Enterprise .NET Developer",
    bio: {
      vi: "Chứng chỉ quốc tế Microsoft Back-End Developer Pro. Team Leader VivuCar (kết nối API Dịch vụ công Bộ Công An, kiểm duyệt Hive AI).",
      en: "Certified Microsoft Back-End Developer Pro. VivuCar Team Lead (Ministry of Public Security API integration, Hive AI moderation).",
    },
    skills: [".NET 8", "SQL Server", "Gov APIs", "Hive AI", "Entity Framework"],
  },
];

export const FAQ = [
  {
    q: { vi: "Bàn giao trong bao lâu?", en: "How long does delivery take?" },
    a: {
      vi: "Website bán hàng 4–8 tuần, tự động hóa vận hành 3–6 tuần, AI 2–5 tuần. Gói trọn gói: ra mắt trong 30–60 ngày. Tiến độ được cập nhật từng task — bạn luôn biết đang làm tới đâu.",
      en: "E-commerce site 4–8 weeks, operations automation 3–6 weeks, AI 2–5 weeks. End-to-end package: launch in 30–60 days. Progress updated per task — you always know where we are.",
    },
  },
  {
    q: { vi: "Bảo hành thế nào?", en: "What's the warranty?" },
    a: {
      vi: "Sửa lỗi miễn phí 6–12 tháng tùy gói (ghi rõ trong hợp đồng). Gói Chuyên Nghiệp hỗ trợ ưu tiên 12 tháng + trực 24/7.",
      en: "Free bug fixes 6–12 months depending on package (stated in contract). Pro package: 12-month priority support + 24/7 on-call.",
    },
  },
  {
    q: { vi: "Source code thuộc về ai?", en: "Who owns the source code?" },
    a: {
      vi: "Thuộc về bạn. Bàn giao toàn bộ mã nguồn + tài liệu kỹ thuật sau khi nghiệm thu, quy định rõ trong hợp đồng.",
      en: "You do. Full source + technical docs handed over after acceptance, stated clearly in the contract.",
    },
  },
  {
    q: { vi: "Sau này muốn nâng cấp được không?", en: "Can I upgrade later?" },
    a: {
      vi: "Hoàn toàn được. Hệ thống được thiết kế theo kiến trúc module mở rộng (Clean Architecture), cho phép nâng cấp tính năng và mở rộng quy mô linh hoạt mà không cần xây dựng lại từ đầu.",
      en: "Absolutely. Systems are engineered with modular scalability (Clean Architecture), enabling smooth feature expansions and scale-ups without rebuilding from scratch.",
    },
  },
];

// Products page: other built products (content mirrors SideStreams rail — nothing new invented)
export const MORE_PRODUCTS = [
  {
    id: "the-mc-hub",
    kicker: "EDTECH & AI VOICE",
    title: "The MC Hub Academy",
    tag: {
      vi: "Nền tảng đào tạo MC & Diễn thuyết tích hợp AI phân tích giọng nói",
      en: "MC & public speaking training platform with AI speech analysis",
    },
    desc: {
      vi: "Học viện trực tuyến chuẩn hóa quy trình luyện giọng và diễn thuyết. Microservice AI chấm phát âm, cao độ, tốc độ nói theo thời gian thực và trả phản hồi chi tiết sau 30 giây.",
      en: "Online academy standardizing speech training and public speaking. Real-time AI microservice evaluates pronunciation, pitch, and cadence, delivering detailed feedback in 30 seconds.",
    },
    problem: [
      {
        vi: "Nghẽn cổ chai chấm bài phát âm: Mỗi ngày có hàng trăm clip thuyết trình gửi về; giảng viên không đủ thời gian nghe và sửa chi tiết từng câu, học viên phải chờ cả tuần mới có nhận xét.",
        en: "Speech grading bottleneck: Hundreds of student speaking clips submitted daily; mentors lacked bandwidth to provide timely sentence-by-sentence feedback.",
      },
      {
        vi: "Chi phí đào tạo 1-kèm-1 đắt đỏ: Khách hàng muốn nâng cao kỹ năng diễn thuyết nhưng rào cản học phí kèm riêng và lịch học cố định quá cao.",
        en: "Prohibitive 1-on-1 tutoring costs: Learners sought speech mastery but were priced out by expensive private tutoring and rigid class schedules.",
      },
      {
        vi: "Thiếu thước đo định lượng khách quan: Các nhận xét trước đây phụ thuộc vào cảm tính người dạy, không có chỉ số cụ thể về tốc độ nói (WPM) hay tần suất từ đệm.",
        en: "Lack of objective metrics: Feedback was historically subjective, lacking measurable data on cadence (WPM), pitch variance, or filler word frequency.",
      },
    ],
    solution: [
      {
        vi: "Microservice AI phân tích giọng nói (FastAPI + Whisper): Tự động bóc băng, đo tốc độ nói, phát hiện từ đệm và chấm độ tròn vành rõ chữ chỉ sau 30 giây nộp bài.",
        en: "AI Voice Analysis Microservice (FastAPI + Whisper): Instant audio transcription, cadence calculation, filler word detection, and pronunciation scoring within 30s.",
      },
      {
        vi: "Hệ thống hóa 101 bài thực hành & 4 khóa học phân cấp: Lộ trình học tự động từ cơ bản đến nâng cao trên React 19 và Node.js, tích hợp bảng xếp hạng động lực.",
        en: "Structured 101 exercises & 4 tiered courses: Gamified self-paced curriculum from beginner to pro on React 19 & Node.js with automated leaderboards.",
      },
      {
        vi: "Đưa sản phẩm ra thị trường trong 6 tháng: Nhóm 6 kỹ sư SynapForge hoàn thành từ bản vẽ đến production; onboard ngay 87 MC chuyên nghiệp trong tháng đầu tiên.",
        en: "6-month end-to-end launch: Team of 6 SynapForge engineers launched the platform from design to scale, onboarding 87 professional MCs in month one.",
      },
    ],
    feats: [
      {
        vi: "Chấm điểm giọng nói tự động bằng OpenAI Whisper kết hợp thuật toán phân tích âm sắc",
        en: "Automated voice grading with OpenAI Whisper and acoustic feature extraction",
      },
      {
        vi: "101 bài luyện tập tương tác phân bổ theo từng chủ đề dẫn chương trình thực tế",
        en: "101 interactive practice units categorized across real-world hosting scenarios",
      },
      {
        vi: "Cổng thanh toán tự động kích hoạt khóa học và cấp tài khoản tức thì",
        en: "Automated payment workflow with instant course activation and LMS access",
      },
    ],
    stats: [
      { v: "87", l: { vi: "MC chuyên nghiệp Onboard", en: "Professional MCs onboarded" } },
      { v: "101", l: { vi: "Bài thực hành tương tác", en: "Interactive practice units" } },
      { v: "<30s", l: { vi: "AI chấm & phản hồi", en: "AI feedback speed" } },
      { v: "06", l: { vi: "Tháng từ thiết kế đến ra mắt", en: "Months to market launch" } },
    ],
    chips: [
      "Python FastAPI",
      "OpenAI Whisper AI",
      "Java Spring Boot",
      "React 19",
      "MongoDB",
      "Docker",
    ],
  },
  {
    id: "threadlearn",
    kicker: "RESEARCH & AI CONCURRENCY",
    title: "ThreadLearn",
    tag: {
      vi: "Mô hình AI tự phát hiện & sửa lỗi bất đồng bộ (Race Condition) trong JavaScript",
      en: "Fine-tuned AI that detects & repairs JavaScript concurrency bugs",
    },
    desc: {
      vi: "Pipeline end-to-end tự phát hiện và sửa lỗi concurrency (data race, atomicity, order violation) trong Node.js bất đồng bộ — chỉ dùng model 1.5B tham số, trong khi công cụ hiện có hoặc chỉ phát hiện mà không sửa được, hoặc cần model 7B–32B.",
      en: "End-to-end pipeline that detects and fixes concurrency bugs (data races, atomicity and order violations) in async Node.js — with a 1.5B-parameter model, where existing tools either only detect or need 7B–32B models.",
    },
    problem: [
      {
        vi: "Lỗi bất đồng bộ cực kỳ khó phát hiện: Race Condition và Atomicity Violation thường chỉ phát sinh khi hệ thống chịu tải cao, gây sai lệch số dư ví hoặc treo server.",
        en: "Elusive concurrency bugs: Async race conditions and atomicity violations only trigger under heavy production traffic, corrupting financial states or locking threads.",
      },
      {
        vi: "Công cụ phân tích tĩnh chỉ báo lỗi mà không biết sửa: Lập trình viên phải mất nhiều ngày gỡ lỗi thủ công vì các linter truyền thống không có năng lực tự sinh bản vá.",
        en: "Detection without repair: Traditional linters flag warnings but cannot synthesize fixes, leaving developers with days of tedious trial-and-error debugging.",
      },
      {
        vi: "Mô hình AI lớn (LLM 70B+) quá tốn kém và cồng kềnh: Chi phí GPU suy luận đắt đỏ và tỷ lệ sửa lỗi đúng của các mô hình thương mại như GPT-3.5 chỉ đạt ~41%.",
        en: "Expensive monolithic LLMs: Massive 70B+ models are too costly to self-host, and general-purpose models like GPT-3.5 achieve poor (~41%) patch success rates on async bugs.",
      },
    ],
    solution: [
      {
        vi: "Huấn luyện chuyên sâu mô hình nhỏ (SLM 1.5B): Ứng dụng QLoRA Fine-tuning trên Qwen2.5-Coder 1.5B với 783 mẫu Chain-of-Thought chuẩn hóa.",
        en: "Specialized Small Language Model (1.5B): QLoRA fine-tuning on Qwen2.5-Coder 1.5B with 783 structured Chain-of-Thought concurrency samples.",
      },
      {
        vi: "RAG BM25 trên 2,061 tài liệu tri thức: Truy xuất ngữ cảnh chuyên sâu về chuẩn JavaScript bất đồng bộ giúp AI sửa code chính xác, không sinh mã rác.",
        en: "BM25 RAG over 2,061 knowledge docs: Real-time context retrieval grounded in async JS specifications prevents hallucinated patches.",
      },
      {
        vi: "Tỷ lệ sửa lỗi thành công 73.3%: Vượt trội hoàn toàn so với GPT-3.5-turbo (41.0%) trên benchmark 30 lỗi npm thực tế, kích thước nhỏ hơn 125 lần.",
        en: "73.3% repair pass rate: Outperforms GPT-3.5-turbo (41.0%) on a 30 real npm bug benchmark while being ~125× more parameter-efficient.",
      },
    ],
    feats: [
      {
        vi: "Bộ phát hiện race tĩnh phủ 5 pattern concurrency phổ biến",
        en: "Static race detector covering 5 common concurrency patterns",
      },
      {
        vi: "Fine-tune Qwen2.5-Coder-1.5B bằng QLoRA trên 783 ví dụ Chain-of-Thought",
        en: "Qwen2.5-Coder-1.5B fine-tuned with QLoRA on 783 Chain-of-Thought examples",
      },
      {
        vi: "RAG BM25 trên kho tri thức JavaScript 2,055 tài liệu",
        en: "BM25 RAG over a 2,055-document JavaScript knowledge base",
      },
      {
        vi: "Vượt GPT-3.5-turbo (65.0%) trên benchmark 30 bug npm thật",
        en: "Beats GPT-3.5-turbo (65.0%) on a benchmark of 30 real npm bugs",
      },
    ],
    stats: [
      { v: "73.3%", l: { vi: "Pass rate", en: "Pass rate" } },
      { v: "~125×", l: { vi: "Nhỏ hơn GPT-3.5", en: "Smaller than GPT-3.5" } },
      { v: "1.5B", l: { vi: "Tham số", en: "Parameters" } },
      { v: "2,061", l: { vi: "Tài liệu RAG", en: "RAG documents" } },
    ],
    chips: [
      "Python",
      "PyTorch",
      "QLoRA",
      "Qwen2.5-Coder-1.5B",
      "BM25",
      "FastAPI",
    ],
    img: "/products/threadlearn/01.jpg",
    gallery: ["/products/threadlearn/01.jpg"],
  },
];

// Upcoming products — fill in real entries: { id, title, tag: {vi,en}, eta }
export const ROADMAP = [];

// Founder Lê Trí Trung's Zalo (company hotline)
export const ZALO_URL = "https://zalo.me/0912158715";

// Member CV pages (#/doi-ngu/<id>) — comprehensive profiles verified from CVs & PROFILES
export const TEAM_CV = {
  "le-tri-trung": {
    title: "Tech Lead & Enterprise System Architect",
    about: {
      vi: "Founder và Tech Lead tại SynapForge. Chuyên sâu về System Architecture, Clean Architecture, Domain-Driven Design (DDD) và hệ thống phân tán chịu tải cao. Có năng lực thiết kế trọn gói từ kiến trúc cơ sở dữ liệu (PostgreSQL/SQL Server), tầng nghiệp vụ backend (.NET 8, Java Spring Boot, FastAPI) đến triển khai hạ tầng máy chủ Linux và bảo mật đa tầng.",
      en: "Founder and Tech Lead at SynapForge. Specializes in System Architecture, Clean Architecture, Domain-Driven Design (DDD), and high-concurrency distributed systems. Hands-on end-to-end expertise spanning database schema design (PostgreSQL/SQL Server), backend business logic (.NET 8, Java Spring Boot, FastAPI) to Linux cloud infrastructure and multi-tier security.",
    },
    edu: {
      vi: "Kỹ thuật Phần mềm — Đại học FPT Đà Nẵng (GPA 3.3/4.0 – 8.2/10.0) • Học bổng Trao đổi Sinh viên Quốc tế tại Technology Kuala Lumpur, Malaysia (12/2023) • Cựu học sinh Chuyên Phan Châu Trinh, Đà Nẵng (GPA tốt nghiệp 9.0/10.0)",
      en: "Software Engineering — FPT University Da Nang (GPA 3.3/4.0 – 8.2/10.0) • International Student Exchange Scholarship at Technology Kuala Lumpur, Malaysia (12/2023) • Phan Chau Trinh High School for the Gifted, Da Nang (Graduation GPA 9.0/10.0)",
    },
    certs: {
      vi: "IELTS 6.0 (IDP Education cấp 04/2026) — Tiếng Anh kỹ thuật chuyên sâu",
      en: "IELTS 6.0 (IDP Education, issued 04/2026) — Professional technical English",
    },
    awards: [
      {
        vi: "🏆 Quán quân (Winner) — Hackathon Computer Vision 2026 (FPT Education tổ chức ngày 06/08/2026): Giải pháp xử lý hình ảnh & thị giác máy tính ứng dụng thực tiễn.",
        en: "🏆 Winner — Hackathon Computer Vision 2026 (Hosted by FPT Education, 06/08/2026): Practical computer vision and image processing solution.",
      },
      {
        vi: "📄 Đồng tác giả bài báo khoa học quốc tế ICTA 2026: Nghiên cứu công bố về mô hình AI Fine-tuning phát hiện và tự động sửa lỗi Race Condition trong mã nguồn Node.js.",
        en: "📄 Co-author, International Research Paper at ICTA 2026: Published research on LLM Fine-tuning pipeline to detect and repair concurrency bugs in Node.js.",
      },
      {
        vi: "🎖️ Chung kết Toàn quốc (Final Round) — InnoCodeCamp 2025: Cuộc thi lập trình đổi mới sáng tạo quy mô đại học toàn quốc (Team Leader).",
        en: "🎖️ National Finalist — InnoCodeCamp 2025: National university-level innovation and software development championship (Team Leader).",
      },
      {
        vi: "🎖️ Chung kết Toàn quốc (Final Round) — Research Festival (ResFres 2024): Dự án nghiên cứu khoa học sinh viên xuất sắc.",
        en: "🎖️ National Finalist — Research Festival (ResFres 2024): Outstanding student scientific research initiative.",
      },
    ],
    projects: [
      {
        name: "Biensovip.com",
        role: { vi: "Solo Software Architect", en: "Solo Software Architect" },
        time: "05/2026 – Hiện tại",
        tech: [".NET 8 Clean Architecture", "PostgreSQL ACID", "Redis Lock", "React 19", "DeepSeek AI"],
        desc: {
          vi: "Tự tay thiết kế và lập trình trọn gói toàn bộ sàn đấu giá biển số xe định danh từ con số 0. Xây dựng 61 bảng thực thể CSDL (PostgreSQL ACID, tối ưu GIN/BTREE index cho truy vấn lọc đa tiêu chí <8ms); xác thực bảo mật kép JWT + HttpOnly Cookie; tích hợp DeepSeek AI Chatbot 24/7; tự cấu hình và vận hành VPS Linux độc lập. Đã ghi nhận 150+ giao dịch thành công.",
          en: "Personally designed and implemented the entire license plate marketplace from scratch. Built a 61-entity schema (PostgreSQL ACID, GIN/BTREE indexes for <8ms multi-criteria filtering); dual JWT + HttpOnly Cookie authentication; 24/7 DeepSeek AI assistant; independently deployed and managed on Linux VPS. Processed 150+ successful transactions.",
        },
      },
      {
        name: "The MC Hub Academy",
        role: { vi: "CEO & Tech Lead (Nhóm 6 kỹ sư)", en: "CEO & Tech Lead (Team of 6 engineers)" },
        time: "01/2026 – 07/2026",
        tech: ["Python FastAPI", "Whisper AI", "Java Spring Boot 3", "React 19", "MongoDB", "Redis", "Docker"],
        desc: {
          vi: "Dẫn dắt 6 kỹ sư đưa sản phẩm từ bản thiết kế ra thị trường trong 6 tháng. Onboard 87 MC chuyên nghiệp ngay tháng đầu; xây dựng microservice AI phân tích giọng nói (FastAPI + OpenAI Whisper) đánh giá phát âm, ngữ điệu, tốc độ; 101 bài thực hành và 4 khóa học phân cấp; tạo dòng tiền thực tế với hơn 20 gói cước đăng ký.",
          en: "Led a team of 6 engineers launching the platform in 6 months. Onboarded 87 professional MCs in month one; developed AI voice analysis microservice (FastAPI + OpenAI Whisper) evaluating pronunciation, intonation, speech rate; 101 exercises and 4 tiered courses; generated real subscription cash flow.",
        },
      },
    ],
    exp: [
      {
        vi: "SynapForge Venture Studio (2026–nay) — Founder & Head of Technology: Điều hành kiến trúc kỹ thuật toàn bộ sản phẩm in-house và giải pháp chuyển đổi số B2B cho khách hàng.",
        en: "SynapForge Venture Studio (2026–present) — Founder & Head of Technology: Oversees architecture for all in-house ventures and client B2B software solutions.",
      },
      {
        vi: "Biensovip.com (05/2026–nay) — Solo Software Architect: Toàn quyền thiết kế kiến trúc .NET 8, CSDL 61 bảng, DevOps và tích hợp AI.",
        en: "Biensovip.com (05/2026–present) — Solo Software Architect: End-to-end design of .NET 8 architecture, 61-table database, DevOps, and AI integration.",
      },
      {
        vi: "The MC Hub (01/2026–07/2026) — CEO & Tech Lead: Quản trị sản phẩm, dẫn dắt đội ngũ kỹ thuật, thiết kế microservice AI phân tích giọng nói.",
        en: "The MC Hub (01/2026–07/2026) — CEO & Tech Lead: Product management, engineering leadership, speech-analysis AI microservice design.",
      },
      {
        vi: "FPT Software (08/2025–12/2025) — Kỹ sư Thực tập Doanh nghiệp: Lập trình Reactive Web, debug, tối ưu hiệu năng và refactor mã nguồn theo quy trình chuẩn Agile/Scrum.",
        en: "FPT Software (08/2025–12/2025) — Software Engineering Intern: Reactive Web development, debugging, performance tuning, and refactoring under Agile/Scrum standards.",
      },
      {
        vi: "Quỹ Thiện nguyện The Dreamers (06/2024–nay) — Founder & Chủ tịch: Điều hành quỹ cộng đồng 30+ thành viên; MC chuyên nghiệp cho 50+ sự kiện lớn và hội thảo công nghệ.",
        en: "The Dreamers Charity Foundation (06/2024–present) — Founder & President: Manages 30+ volunteer members; professional MC for 50+ major events and tech symposiums.",
      },
    ],
    skills: [
      "System Design & DDD",
      ".NET 8 / ASP.NET Core",
      "Clean Architecture",
      "Java 21 / Spring Boot 3",
      "Python FastAPI",
      "React 19 / Next.js",
      "PostgreSQL (Index Tuning)",
      "Redis Cache & Distributed Lock",
      "Docker & Linux Server",
      "JWT Security & RBAC",
    ],
    links: {
      email: "solutions@synapforge.id.vn",
      github: "https://github.com/trung2605",
      portfolio: "https://www.letritrung.id.vn",
    },
  },
  "ha-van-an": {
    title: "Senior Full-Stack & AI Integration Lead",
    about: {
      vi: "Kỹ sư Full-Stack giàu kinh nghiệm thực tập doanh nghiệp (7 tháng tại FPT Software) và nghiên cứu chuyên sâu về Trí tuệ Nhân tạo. Thế mạnh vượt trội về xây dựng giao diện hiện đại với Next.js 16 (App Router), React, TypeScript và thiết kế API backend với Node.js, FastAPI. Trực tiếp phát triển các pipeline tích hợp LLM thực chiến (RAG, Gemini API, QLoRA Fine-tuning) giúp doanh nghiệp tự động hóa và nâng cao trải nghiệm khách hàng.",
      en: "Experienced Full-Stack Engineer with 7 months of corporate internship at FPT Software and advanced AI research. Excels in crafting modern frontend applications with Next.js 16 (App Router), React, TypeScript alongside robust Node.js and FastAPI backends. Hands-on experience developing production AI pipelines (RAG, Gemini API, QLoRA fine-tuning) to automate business processes.",
    },
    edu: {
      vi: "Kỹ sư Kỹ thuật Phần mềm — Đại học FPT Đà Nẵng (2022–2026, GPA: 3.0/4.0)",
      en: "Software Engineering — FPT University Da Nang (2022–2026, GPA: 3.0/4.0)",
    },
    awards: [
      {
        vi: "📄 Đồng tác giả bài báo khoa học quốc tế ICTA 2026 (ThreadLearn): Ứng dụng mô hình LLM Fine-tuning (QLoRA trên Qwen2.5-Coder 1.5B) + RAG BM25 để tự động phát hiện và sửa lỗi Race Condition trong Node.js. Đạt tỷ lệ sửa lỗi 73.3% trên benchmark 30 lỗi npm thực tế, vượt trội so với GPT-3.5-turbo (41.0%).",
        en: "📄 Co-author, International Research Paper at ICTA 2026 (ThreadLearn): LLM Fine-tuning (QLoRA on Qwen2.5-Coder 1.5B) + BM25 RAG to detect & fix Node.js concurrency bugs. Achieved 73.3% repair rate on a 30 real npm bugs benchmark, beating GPT-3.5-turbo (41.0%).",
      },
    ],
    projects: [
      {
        name: "STEMGO.net",
        role: { vi: "Lead Full-Stack Developer & AI Integrator", en: "Lead Full-Stack Developer & AI Integrator" },
        time: "05/2026 – Hiện tại",
        tech: ["Next.js 16 App Router", "React", "Zustand", "Node.js (Express)", "MongoDB Atlas", "Gemini API", "Tailwind CSS"],
        desc: {
          vi: "Nền tảng học tập vi mô (Micro-learning) gamified dành cho học sinh tiểu học với 34 mini-games tương tác. Xây dựng toàn bộ kiến trúc frontend Next.js 16 và backend Node.js; tích hợp Google Gemini API làm gia sư AI tương tác thời gian thực (In-game AI Tutor); tối ưu tốc độ tải trang dưới 1.2s và triển khai tự động qua Vercel + Firebase.",
          en: "Gamified STEM micro-learning platform for primary students with 34 interactive mini-games. Built full Next.js 16 frontend and Node.js backend; integrated Google Gemini API as an in-game real-time AI Tutor; optimized load times under 1.2s with automated deployment on Vercel + Firebase.",
        },
      },
      {
        name: "ThreadLearn (Nghiên cứu AI ICTA 2026)",
        role: { vi: "Đồng tác giả & AI Pipeline Engineer", en: "Co-author & AI Pipeline Engineer" },
        time: "2025 – 2026",
        tech: ["Python", "PyTorch", "QLoRA", "Qwen2.5-Coder-1.5B", "BM25 RAG", "FastAPI"],
        desc: {
          vi: "Thu thập & chuẩn hóa 783 mẫu dữ liệu huấn luyện; tiến hành QLoRA Fine-tuning trên mô hình mã nguồn mở Qwen2.5-Coder 1.5B; xây dựng hệ thống RAG kết hợp thuật toán BM25 trên kho tri thức 2,061 tài liệu; phát triển Static Race Detector bắt lỗi bất đồng bộ. Đạt 73.3% pass rate.",
          en: "Curated 783 training samples; fine-tuned Qwen2.5-Coder 1.5B with QLoRA; constructed BM25 RAG over 2,061 documents; built a Static Race Detector for async patterns. Achieved 73.3% pass rate on real bugs.",
        },
      },
      {
        name: "TVK House Landing Page",
        role: { vi: "Full-Stack Developer", en: "Full-Stack Developer" },
        time: "07/2025",
        tech: ["React", "Next.js", "Google Sheets API", "Telegram Bot Webhook"],
        desc: {
          vi: "Xây dựng website bất động sản tối ưu chuyển đổi, tự động đồng bộ khách hàng tiềm năng (leads) tức thì vào Google Sheets và thông báo qua Telegram Bot trong chưa đầy 3 giây.",
          en: "High-conversion real estate landing page with instant lead auto-sync into Google Sheets and real-time Telegram Bot notification alerts under 3 seconds.",
        },
      },
    ],
    exp: [
      {
        vi: "STEMGO.net (05/2026–nay) — Lead Full-Stack Developer: Phát triển kiến trúc web, hệ thống 34 mini-game và trợ lý gia sư AI Gemini.",
        en: "STEMGO.net (05/2026–present) — Lead Full-Stack Developer: Web architecture, 34 interactive mini-games, and Gemini AI tutor integration.",
      },
      {
        vi: "FPT Software (08/2025–02/2026, 7 tháng) — Full-Stack Developer Intern: Tham gia dự án Quản lý kho vận (Inventory System); lập trình xuất/nhập kho, WebSocket cập nhật tồn kho real-time, unit testing theo quy trình Agile.",
        en: "FPT Software (08/2025–02/2026, 7 months) — Full-Stack Developer Intern: Enterprise Inventory Management System; outbound transfer APIs, real-time WebSocket stock tracking, and unit testing under Agile standards.",
      },
      {
        vi: "SynapForge Studio (2026–nay) — Senior Full-Stack & AI Solutions Lead: Trực tiếp phụ trách các giải pháp giao diện đương đại và module tích hợp AI cho đối tác B2B.",
        en: "SynapForge Studio (2026–present) — Senior Full-Stack & AI Solutions Lead: Directs modern frontend architectures and AI integration modules for B2B partners.",
      },
    ],
    skills: [
      "Next.js 16 (App Router)",
      "React.js / TypeScript",
      "Node.js (Express)",
      "Python FastAPI",
      "RAG Pipelines",
      "QLoRA Fine-tuning",
      "Google Gemini API",
      "MongoDB / MySQL",
      "Tailwind CSS / Framer Motion",
      "Docker / Vercel",
    ],
    links: {
      github: "https://github.com/VanAnWebdev",
      email: "van.an.webdev@gmail.com",
    },
  },
  "nguyen-thanh-loc": {
    title: "Backend Architect & Microservices Specialist",
    about: {
      vi: "Kỹ sư kiến trúc Backend và Trưởng nhóm AI Microservices với nền tảng học vấn xuất sắc (GPA 3.5/4.0 FPT University, TOEIC 650). Chuyên sâu về nguyên lý Clean Architecture trên nền tảng .NET 8, kỹ thuật phân rã hệ thống nguyên khối (Monolith) sang Microservices và xây dựng các hệ thống AI phân tích quan hệ thực thể với GraphRAG (Neo4j kết hợp vector database ChromaDB). Sở hữu các chứng chỉ chuyên môn quốc tế về AI Agents và Project Management.",
      en: "Backend Architect and AI Microservices Lead with an outstanding academic record (GPA 3.5/4.0 FPT University, TOEIC 650). Specialized in .NET 8 Clean Architecture, decomposing monolithic architectures into scalable microservices, and implementing enterprise GraphRAG (Neo4j combined with ChromaDB vector store). Certified in AI Agents, LangChain and Agile project management.",
    },
    edu: {
      vi: "Kỹ sư Kỹ thuật Phần mềm — Đại học FPT Đà Nẵng (2022–2026, GPA xuất sắc: 3.5/4.0) • Ngoại ngữ: TOEIC 650, Tiếng Nhật giao tiếp cơ bản",
      en: "Software Engineering — FPT University Da Nang (2022–2026, Outstanding GPA: 3.5/4.0) • Languages: TOEIC 650, Basic conversational Japanese",
    },
    certs: {
      vi: "Chứng chỉ Coursera Quốc tế (2026): Fundamentals of AI Agents Using RAG & LangChain • Generative AI Applications with RAG & LangChain • Project Management Specialization",
      en: "Coursera Professional Certificates (2026): Fundamentals of AI Agents Using RAG & LangChain • Generative AI Applications with RAG & LangChain • Project Management Specialization",
    },
    projects: [
      {
        name: "BrandHub Platform",
        role: { vi: "AI Team Lead", en: "AI Team Lead" },
        time: "06/2026 – Hiện tại",
        tech: ["Python FastAPI", "Neo4j GraphRAG", "ChromaDB", "LangChain", "RabbitMQ", "PostgreSQL"],
        desc: {
          vi: "Lãnh đạo nhóm kỹ sư AI phát triển cụm AI Microservices phục vụ nền tảng AI MarTech. Xây dựng RAG Pipeline học ngữ điệu thương hiệu (Brand Voice) với cơ chế đánh giá chống ảo giác (Hallucination Evaluation); kết hợp GraphRAG với Neo4j & ChromaDB để phân tích mạng lưới tương quan giữa xu hướng thị trường, nội dung và KOLs; xây dựng pipeline thu thập và chuẩn hóa dữ liệu tự động.",
          en: "Led AI engineering team building AI Microservices cluster for omnichannel MarTech platform. Designed Brand Voice RAG Pipeline with hallucination evaluation gates; deployed GraphRAG with Neo4j & ChromaDB to analyze relationships between trends, content, and influencers; built automated data crawling pipelines.",
        },
      },
      {
        name: "UniNest Platform",
        role: { vi: "Team Lead & Full-Stack Developer", en: "Team Lead & Full-Stack Developer" },
        time: "02/2026 – 05/2026",
        tech: ["ASP.NET Core Web API", ".NET 8", "Entity Framework Core", "SQL Server", "React"],
        desc: {
          vi: "Đảm nhiệm vai trò Trưởng nhóm kỹ thuật, thiết kế toàn bộ hệ thống API backend với ASP.NET Core. Xây dựng module bảo mật JWT, xác thực thẻ sinh viên, quản lý tin đăng trọ và thuật toán ghép đôi roommate thông minh.",
          en: "Technical Team Lead designing full ASP.NET Core backend API. Implemented JWT security, student verification workflows, accommodation listing management, and an intelligent roommate compatibility matching algorithm.",
        },
      },
      {
        name: "FPT Software Legacy Migration",
        role: { vi: "Backend .NET Intern", en: "Backend .NET Intern" },
        time: "09/2025 – 12/2025",
        tech: [".NET 8", "ASP.NET Core", "C# Clean Architecture", "Vite", "SQL Server"],
        desc: {
          vi: "Chuyển đổi ứng dụng C# nguyên khối lâu năm sang kiến trúc Decoupled hiện đại với ASP.NET Core Web API và frontend Vite. Áp dụng chuẩn Clean Architecture để tái cấu trúc mã nguồn, nâng cao khả năng kiểm thử và bảo trì hệ thống.",
          en: "Migrated enterprise monolithic C# codebase to modern Decoupled architecture with ASP.NET Core Web API and Vite. Applied Clean Architecture principles to ensure high maintainability and testability.",
        },
      },
    ],
    exp: [
      {
        vi: "BrandHub Platform (06/2026–nay) — AI Team Lead: Thiết kế cụm AI Microservices, GraphRAG Neo4j và pipeline phân tích dữ liệu đa kênh.",
        en: "BrandHub Platform (06/2026–present) — AI Team Lead: Architecting AI Microservices cluster, Neo4j GraphRAG, and omnichannel ingestion pipelines.",
      },
      {
        vi: "UniNest (02/2026–05/2026) — Team Lead: Dẫn dắt phát triển hệ thống backend ASP.NET Core và thuật toán ghép đôi dữ liệu người dùng.",
        en: "UniNest (02/2026–05/2026) — Team Lead: Led ASP.NET Core backend development and user compatibility matching algorithms.",
      },
      {
        vi: "FPT Software Đà Nẵng (09/2025–12/2025) — Backend .NET Intern: Tái cấu trúc mã nguồn di sản sang Clean Architecture Web API.",
        en: "FPT Software Da Nang (09/2025–12/2025) — Backend .NET Intern: Enterprise legacy migration to Clean Architecture Web API.",
      },
    ],
    skills: [
      ".NET 8 / ASP.NET Core",
      "C# Clean Architecture",
      "Python FastAPI",
      "Neo4j Graph Database",
      "GraphRAG & ChromaDB",
      "PostgreSQL / SQL Server",
      "Entity Framework Core",
      "Agile / Scrum (WBS)",
      "RESTful Microservices",
    ],
    links: {
      linkedin: "https://linkedin.com/in/th4nhl0c",
      email: "locntde180158@fpt.edu.vn",
    },
  },
  "nguyen-chon-phuoc": {
    title: "Distributed Systems & Cloud Infrastructure Engineer",
    about: {
      vi: "Kỹ sư chuyên sâu về Java Enterprise phân tán, hạ tầng điện toán đám mây và DevOps. Có kinh nghiệm thực tế tại Acronic Solutions trong việc xây dựng hệ thống giám sát và vận hành thiết bị Anti-DDoS thời gian thực 24/7 qua giao thức Socket.IO và IPC. Thành thạo Java 21, Spring Boot 3, quản trị máy chủ Linux, container hóa Docker, cân bằng tải Nginx và kỹ thuật tối ưu hóa chỉ mục CSDL (Index Execution Plan Tuning) trên PostgreSQL.",
      en: "Engineer specializing in distributed Java Enterprise, cloud infrastructure, and DevOps. Proven track record at Acronic Solutions engineering 24/7 real-time Anti-DDoS hardware monitoring dashboards via Socket.IO and IPC sockets. Highly proficient in Java 21, Spring Boot 3, Linux server administration, Docker containerization, Nginx reverse proxy tuning, and PostgreSQL index execution plan optimization.",
    },
    edu: {
      vi: "Kỹ sư Kỹ thuật Phần mềm — Đại học FPT Đà Nẵng (2023–2026, GPA: 3.2/4.0) • Ngoại ngữ: IELTS 5.5",
      en: "Software Engineering — FPT University Da Nang (2023–2026, GPA: 3.2/4.0) • Language: IELTS 5.5",
    },
    awards: [
      {
        vi: "🎖️ Chung kết Toàn quốc (Finalist) — InnoCodeCamp FPT 2024: Cuộc thi đổi mới sáng tạo công nghệ quy mô sinh viên toàn quốc.",
        en: "🎖️ National Finalist — InnoCodeCamp FPT 2024: Prestigious nationwide software innovation competition.",
      },
    ],
    projects: [
      {
        name: "Acronic Anti-DDoS Hardware Dashboard",
        role: { vi: "Full-Stack Developer Intern", en: "Full-Stack Developer Intern" },
        time: "08/2025 – 12/2025",
        tech: ["Socket.IO", "UDS Socket IPC", "Node.js", "Nginx Reverse Proxy", "Linux (Ubuntu)", "PM2", "Raspberry Pi"],
        desc: {
          vi: "Phát triển ứng dụng SPA trực quan hóa lưu lượng mạng thời gian thực và giám sát thiết bị phần cứng Anti-DDoS 24/7. Tích hợp Socket.IO và UDS Socket IPC giao tiếp liên tiến trình từ tầng phần cứng lên web; xây dựng background service phân tích gói tin mạng và gửi cảnh báo tự động; cấu hình Nginx Reverse Proxy và PM2 đảm bảo hệ thống tự phục hồi sự cố.",
          en: "Developed SPA dashboard visualizing real-time network traffic and monitoring Anti-DDoS hardware devices 24/7. Integrated Socket.IO and UDS Socket IPC for hardware-to-web inter-process communication; implemented packet analysis background services with automated alert triggers; configured Nginx and PM2 for automated failover.",
        },
      },
      {
        name: "Danatour Booking Portal",
        role: { vi: "Backend Software Engineer", en: "Backend Software Engineer" },
        time: "01/2026 – 03/2026",
        tech: ["Java Spring Boot 3", "PostgreSQL", "JWT Authentication", "RBAC", "Docker"],
        desc: {
          vi: "Xây dựng cổng đặt tour du lịch và dịch vụ lữ hành Đà Nẵng. Lập trình backend Java Spring Boot với cơ chế xác thực JWT và phân quyền RBAC; thiết kế RESTful API ổn định; trực tiếp tối ưu cấu trúc truy vấn và đánh chỉ mục (Index Execution Plan) trên PostgreSQL, giảm độ trễ phản hồi máy chủ.",
          en: "Engineered Da Nang travel booking portal backend. Built Java Spring Boot RESTful APIs with JWT auth and RBAC permissions; tuned PostgreSQL queries and execution plan indexes, significantly reducing server response latency.",
        },
      },
      {
        name: "V-Try 3D Virtual Fitting",
        role: { vi: "Full-Stack Engineer & AI Integrator", en: "Full-Stack Engineer & AI Integrator" },
        time: "01/2026 – 07/2026",
        tech: ["React", "Next.js", "TypeScript", "Google MediaPipe", "Computer Vision"],
        desc: {
          vi: "Xây dựng giao diện web 3D tương tác cao thử đồ ảo và ước tính kích thước cơ thể. Tích hợp thư viện Google MediaPipe nhận diện khung xương và tư thế qua camera theo thời gian thực; kết nối mô hình thị giác máy tính Computer Vision để giả lập mặc trang phục ảo.",
          en: "High-interactivity 3D virtual fitting web application. Integrated Google MediaPipe for real-time skeletal pose detection through web cameras; connected computer vision models to simulate virtual garments.",
        },
      },
    ],
    exp: [
      {
        vi: "Acronic Solutions (08/2025–12/2025) — Full-Stack Intern: Phát triển dashboard điều khiển và giám sát thiết bị Anti-DDoS 24/7 qua Socket.IO và Linux IPC.",
        en: "Acronic Solutions (08/2025–12/2025) — Full-Stack Intern: Real-time 24/7 Anti-DDoS hardware monitoring dashboard via Socket.IO and Linux IPC.",
      },
      {
        vi: "Danatour (01/2026–03/2026) — Backend Software Engineer: Thiết kế backend Java Spring Boot và tối ưu hóa chỉ mục PostgreSQL.",
        en: "Danatour (01/2026–03/2026) — Backend Software Engineer: Java Spring Boot backend architecture and PostgreSQL indexing optimization.",
      },
      {
        vi: "V-Try (01/2026–07/2026) — Full-Stack & AI Integrator: Xây dựng web 3D và tích hợp Google MediaPipe nhận diện tư thế người dùng.",
        en: "V-Try (01/2026–07/2026) — Full-Stack & AI Integrator: Interactive 3D web fitting and Google MediaPipe real-time pose estimation.",
      },
    ],
    skills: [
      "Java 21 / Spring Boot 3",
      "Spring Security & Data JPA",
      "Docker & Docker Compose",
      "Nginx Reverse Proxy",
      "Linux Server Administration",
      "PostgreSQL (Query & Index Tuning)",
      "Socket.IO & IPC",
      "RESTful APIs",
      "Realtime Dashboards",
    ],
    links: {
      github: "https://github.com/Garchomppy",
      email: "nguyenchonphuoc1201@gmail.com",
    },
  },
  "nguyen-minh-tuan": {
    title: "Enterprise .NET & Gov Integration Specialist",
    about: {
      vi: "Kỹ sư Backend chuyên nghiệp sở hữu chứng chỉ quốc tế Microsoft Back-End Developer Professional Certificate (do Microsoft chứng nhận 08/2026). Có kinh nghiệm thực tế tại FPT Software trong các dự án hiện đại hóa hệ thống doanh nghiệp (Migration Project). Từng giữ vai trò Team Leader phát triển nền tảng thuê xe VivuCar với năng lực kết nối trực tiếp API Cổng dịch vụ công của Bộ Công An để thẩm định tính hợp pháp của giấy phép lái xe, tích hợp mô hình Hive AI tự động kiểm duyệt nội dung độc hại, và thiết kế hệ thống báo cáo doanh nghiệp (Excel/PDF).",
      en: "Professional Backend Engineer holding the international Microsoft Back-End Developer Professional Certificate (certified by Microsoft, 08/2026). Hands-on experience at FPT Software modernizing enterprise systems. Served as Team Leader developing VivuCar self-drive rental platform with direct integration into the Ministry of Public Security portal API for driver license validation, Hive AI content moderation, and automated enterprise reporting (Excel/PDF).",
    },
    edu: {
      vi: "Kỹ sư Kỹ thuật Phần mềm — Đại học FPT Đà Nẵng (10/2022–10/2026, GPA: 7.8/10.0)",
      en: "Software Engineering — FPT University Da Nang (10/2022–10/2026, GPA: 7.8/10.0)",
    },
    certs: {
      vi: "🏆 Microsoft Back-End Developer Professional Certificate (Chứng chỉ chuyên gia lập trình Backend cấp bởi Microsoft Corporation — 08/2026)",
      en: "🏆 Microsoft Back-End Developer Professional Certificate (Issued by Microsoft Corporation — 08/2026)",
    },
    projects: [
      {
        name: "VivuCar Platform",
        role: { vi: "Team Leader & Lead Backend Engineer", en: "Team Leader & Lead Backend Engineer" },
        time: "05/2026 – 07/2026",
        tech: ["ASP.NET Core 8", "Entity Framework Core", "SQL Server", "Hive AI", "Gov Portal APIs", "ClosedXML", "iTextSharp"],
        desc: {
          vi: "Lãnh đạo nhóm phát triển nền tảng đặt và quản lý thuê xe tự lái toàn diện. Xây dựng backend ASP.NET Core 8 vững chắc; phát triển bảng điều khiển Admin quản lý xe, hợp đồng và xuất báo cáo tự động (Excel & PDF); tích hợp Hive AI tự động phát hiện và kiểm duyệt đánh giá spam/độc hại; tích hợp trực tiếp API Cổng dịch vụ công Bộ Công An để kiểm tra và xác thực tính hợp lệ của giấy phép lái xe khách hàng.",
          en: "Led development of self-drive car rental platform. Built robust ASP.NET Core 8 backend; Admin portal managing vehicles, contracts, and auto-exporting Excel & PDF reports; integrated Hive AI for automatic content moderation; directly integrated Ministry of Public Security API to verify driver license validity.",
        },
      },
      {
        name: "FPT Software Enterprise C# Migration",
        role: { vi: "Fullstack .NET Intern", en: "Fullstack .NET Intern" },
        time: "09/2025 – 12/2025",
        tech: [".NET 8", "C#", "ASP.NET Core Web API", "Vite", "SQL Server (Stored Procedures & Triggers)"],
        desc: {
          vi: "Hiện đại hóa ứng dụng doanh nghiệp C# nguyên khối sang kiến trúc Decoupled hiện đại với ASP.NET Core Web API và Vite. Trực tiếp phân tích và sửa chữa các lỗi phức tạp trong cơ sở dữ liệu liên quan đến SQL Triggers và Stored Procedures quy mô hàng ngàn dòng lệnh; biên soạn tài liệu kiến trúc cho ban điều hành FSoft.",
          en: "Modernized legacy monolithic C# application into modern Decoupled architecture with ASP.NET Core Web API and Vite. Analyzed and resolved complex database issues in thousand-line Stored Procedures and SQL Triggers; authored technical architecture documentation for FSoft managers.",
        },
      },
    ],
    exp: [
      {
        vi: "VivuCar Platform (05/2026–07/2026) — Team Leader: Dẫn dắt phát triển backend .NET 8, tích hợp API Dịch vụ công Bộ Công An và kiểm duyệt Hive AI.",
        en: "VivuCar Platform (05/2026–07/2026) — Team Leader: Led .NET 8 backend, Ministry of Public Security API integration, and Hive AI moderation.",
      },
      {
        vi: "FPT Software Đà Nẵng (09/2025–12/2025) — Fullstack .NET Intern: Hiện đại hóa ứng dụng C# doanh nghiệp, gỡ lỗi SQL Stored Procedures phức tạp.",
        en: "FPT Software Da Nang (09/2025–12/2025) — Fullstack .NET Intern: Enterprise C# migration and complex SQL Stored Procedures optimization.",
      },
      {
        vi: "SynapForge Studio (2026–nay) — Enterprise .NET Backend Engineer: Thiết kế các giải pháp phần mềm chuẩn Microsoft, tích hợp cổng dịch vụ và tự động hóa quy trình.",
        en: "SynapForge Studio (2026–present) — Enterprise .NET Backend Engineer: Designs Microsoft-standard software solutions, service integrations, and workflow automation.",
      },
    ],
    skills: [
      ".NET 8 / ASP.NET Core",
      "Entity Framework Core",
      "SQL Server (Stored Procedures & Triggers)",
      "C# Clean Architecture",
      "Gov Portal APIs Integration",
      "Hive AI Integration",
      "Excel / PDF Automated Reporting",
      "Docker",
      "RESTful Web APIs",
    ],
    links: {
      github: "https://github.com/winhtuan",
      linkedin: "https://linkedin.com/in/winhtuan",
      email: "winhtuan.dev@gmail.com",
    },
  },
};

// One card shape for products list + detail pages (#/san-pham, #/san-pham/<id>)
export const ALL_PRODUCTS = [
  ...CASES.map(({ rev, fig, ...c }) => c),
  ...MORE_PRODUCTS.map((p) => ({ ...p, stats: p.stats || [] })),
];
