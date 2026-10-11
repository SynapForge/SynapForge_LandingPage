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
    vi: "// B/02 — MÔ HÌNH SONG CƠ (DUAL-ENGINE)",
    en: "// B/02 — DUAL-ENGINE FLYWHEEL",
  },
  flywheel_title: {
    vi: "Chủ động làm sản phẩm để gia công vững tay",
    en: "Building in-house to engineer client scale",
  },
  flywheel_note: {
    vi: "Kiểm thử thực tế, giảm thiểu rủi ro",
    en: "Battle-tested workflows, minimizing risks",
  },
  flywheel_sub: {
    vi: "Thay vì thử nghiệm trực tiếp trên dự án của đối tác, chúng tôi chủ động kiểm chứng công nghệ trên các sản phẩm do chính mình phát triển, mang những module đã vận hành ổn định để áp dụng vào hệ thống của bạn.",
    en: "Instead of experimenting on client budgets, we validate architectures on our own platforms first, bringing stable, proven modules to your deployment.",
  },
  engine1_badge: { vi: "50% IN-HOUSE · PRODUCE", en: "50% IN-HOUSE · PRODUCE" },
  engine1_title: { vi: "Động cơ 1: Sản phẩm riêng", en: "Engine 1: In-House Ventures" },
  engine1_sub: {
    vi: "BrandHub, BienSoVip, AI Film Streaming...",
    en: "BrandHub, BienSoVip, AI Film Streaming...",
  },
  engine1_desc: {
    vi: "Tự xây dựng các sàn thương mại và nền tảng AI phục vụ lượng người dùng thực tế. Trực tiếp giải quyết các bài toán kỹ thuật: đối soát tiền cọc, khóa chống bán trùng, lưu lượng cao và an toàn dữ liệu.",
    en: "Building our own high-traffic platforms to master real-world challenges: automated reconciliations, race condition locks, high concurrency, and data security.",
  },
  engine1_item1: {
    vi: "Chủ động nghiên cứu R&D, không để khách hàng gánh chịu rủi ro thử nghiệm",
    en: "We absorb R&D learning curves ourselves, protecting client budgets",
  },
  engine1_item2: {
    vi: "Làm chủ công nghệ thực tế: RAG dẫn nguồn dữ liệu, Microservices, Event Streams",
    en: "Mastering practical tech: Sourced RAG, Microservices, Event Streams",
  },
  engine1_item3: {
    vi: "Đóng gói sẵn các module: Đối soát VietQR Webhook, khóa phân tán Redis, bộ lọc CSDL",
    en: "Packaged production-ready modules: Zero-fee VietQR webhook, Redis Distributed Lock, optimized DB filters",
  },
  engine2_badge: { vi: "50% CLIENT · OUTSOURCE", en: "50% CLIENT · OUTSOURCE" },
  engine2_title: { vi: "Động cơ 2: Gia công chuyển đổi số", en: "Engine 2: Client Engineering" },
  engine2_sub: {
    vi: "Web bán hàng, Sàn TMĐT, Tự động hoá, Trợ lý AI",
    en: "E-commerce, Marketplaces, Automation, AI Support",
  },
  engine2_desc: {
    vi: "Mang các module và quy trình thực chiến đã được tôi luyện để phát triển hệ thống cho bạn. Lắp ráp nhanh, vận hành ổn định, đồng hành hỗ trợ kỹ thuật lâu dài.",
    en: "Deploying battle-tested modules and proven engineering practices to deliver client systems. Fast assembly, reliable operations, dedicated long-term support.",
  },
  engine2_item1: {
    vi: "Rút ngắn thời gian triển khai: Bàn giao hệ thống hoàn chỉnh trong 30–60 ngày",
    en: "Accelerated turnaround: Full production delivery in 30–60 days",
  },
  engine2_item2: {
    vi: "Độ tin cậy cao: Hàng đợi chống thất lạc dữ liệu, tốc độ tải trang nhanh, bảo mật đa tầng",
    en: "High reliability: Queue architecture preventing data loss, fast load times, layered security",
  },
  engine2_item3: {
    vi: "Bàn giao 100% mã nguồn, tài liệu hướng dẫn và đồng hành bảo hành tận tâm",
    en: "100% source code handover, full technical docs, and reliable warranty",
  },
  loop_badge: { vi: "// BÁNH ĐÀ TUẦN HOÀN", en: "// THE VALUE FLYWHEEL" },
  loop_title: {
    vi: "Vòng lặp giá trị song cơ khép kín",
    en: "Closed-Loop Dual-Engine Value Cycle",
  },
  loop_s1_num: { vi: "01 / TÔI LUYỆN", en: "01 / FORGE" },
  loop_s1_txt: {
    vi: "Sản phẩm riêng rèn giũa kỹ nghệ & minh chứng năng lực thật.",
    en: "In-house ventures prove engineering rigor & build real credibility.",
  },
  loop_s2_num: { vi: "02 / TÁI SỬ DỤNG", en: "02 / REUSE" },
  loop_s2_txt: {
    vi: "Module có sẵn giúp bàn giao dự án khách hàng nhanh chóng với chi phí tối ưu.",
    en: "Proven modules enable rapid delivery and lower costs for clients.",
  },
  loop_s3_num: { vi: "03 / TÁI ĐẦU TƯ", en: "03 / REINVEST" },
  loop_s3_txt: {
    vi: "Dòng tiền gia công quay lại nuôi dưỡng R&D, không phụ thuộc vốn vay.",
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
    vi: "Website bán hàng, thanh toán tự động, trợ lý AI hỗ trợ 24/7.",
    en: "E-commerce websites, automated payments, 24/7 AI customer assistance.",
  },
  sub_r: {
    vi: "Giải pháp bài bản cho doanh nghiệp vừa & nhỏ — tối ưu quy trình vận hành và tiết kiệm chi phí công nghệ.",
    en: "End-to-end solutions for SMEs — streamlining operations and saving technology costs.",
  },
  cta_ventures: { vi: "Xem dự án thật", en: "See real projects" },
  cta_contact: { vi: "Báo giá trong 24h →", en: "Quote in 24h →" },
  dual_label: { vi: "02 động cơ:", en: "02 engines:" },
  dual_1: {
    vi: "■ Sản phẩm tự phát triển — BrandHub, BienSoVip",
    en: "■ In-house ventures — BrandHub, BienSoVip",
  },
  dual_2: {
    vi: "■ Gia công kỹ nghệ cho khách hàng",
    en: "■ Enterprise client engineering",
  },

  ety_syn: {
    vi: "Khớp thần kinh — tư duy mạng nơ-ron, AI và xử lý dữ liệu thông minh.",
    en: "Synapse — neural-network thinking, AI and intelligent data processing.",
  },
  ety_forge: {
    vi: "Lò rèn — kỷ luật kỹ thuật, ý tưởng thành sản phẩm bền vững.",
    en: "Forge — engineering discipline, turning ideas into durable products.",
  },
  ety_motto: {
    vi: "// tư duy như mạng nơ-ron, kiến tạo như xưởng rèn",
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
  team_title: { vi: "Đội ngũ", en: "Team" },
  cv_back: { vi: "← Đội ngũ", en: "← Team" },
  cv_about: { vi: "Giới thiệu", en: "About" },
  cv_edu: { vi: "Học vấn", en: "Education" },
  cv_exp: { vi: "Kinh nghiệm", en: "Experience" },
  cv_skills: { vi: "Kỹ năng", en: "Skills" },
  cv_prev: { vi: "← Trước", en: "← Prev" },
  cv_next: { vi: "Tiếp →", en: "Next →" },
  cv_open: { vi: "Xem CV", en: "View CV" },
  team_note: { vi: "05 kỹ sư FPT / FSoft", en: "05 FPT / FSoft engineers" },
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
    l2: { vi: "100% thực chiến", en: "100% hands-on" },
  },
  {
    v: "02",
    l1: { vi: "Sản phẩm lõi", en: "Core products" },
    l2: { vi: "BrandHub & BienSoVip", en: "BrandHub & BienSoVip" },
  },
  {
    v: "0%",
    l1: { vi: "Mất tin nhắn", en: "Message loss" },
    l2: { vi: "RabbitMQ DLQ", en: "RabbitMQ DLQ" },
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
      vi: "Hỗ trợ viết & lập lịch đăng nội dung lên 5 nền tảng MXH",
      en: "Automated content drafts & multi-platform scheduling",
    },
    desc: {
      vi: "Học phong cách thương hiệu từ bài viết cũ, hỗ trợ tạo nội dung và xuất bản lên 5 MXH — tối ưu đáng kể nguồn lực cho đội ngũ marketing.",
      en: "Analyzes brand tone to generate content drafts and schedule posts across 5 platforms — significantly reducing manual overhead for marketing teams.",
    },
    feats: [
      {
        vi: "Học Brand Voice từ bài mẫu — nội dung đa dạng, bám sát định hướng",
        en: "Learns Brand Voice from existing posts — diverse copy aligned with brand guidelines",
      },
      {
        vi: "Lập lịch đăng tự động lên Facebook, TikTok, Instagram, Threads, Zalo",
        en: "Automated post scheduling to Facebook, TikTok, Instagram, Threads, Zalo",
      },
      {
        vi: "Hàng đợi RabbitMQ DLQ — tự động retry khi lỗi mạng, giảm thiểu tối đa thất lạc bài",
        en: "RabbitMQ Dead Letter Queue (DLQ) — automated retries to prevent dropped posts",
      },
    ],
    stats: [
      { v: "07", l: { vi: "Microservices", en: "Microservices" } },
      { v: "DLQ", l: { vi: "Hàng đợi chống rớt", en: "Queue DLQ" } },
      { v: "05", l: { vi: "Nền tảng MXH", en: "Social platforms" } },
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
      vi: "Hệ thống tự động đối soát tiền cọc qua VietQR Webhook trong 0.5s kể cả ngoài giờ làm việc. Tích hợp trợ lý AI giải đáp thông tin và hỗ trợ khách hàng 24/7.",
      en: "Automated deposit reconciliation via VietQR Webhook in 0.5s around the clock. Built-in AI assistant answers buyer questions 24/7.",
    },
    feats: [
      {
        vi: "Đối soát & khớp cọc tự động qua VietQR Webhook — không tốn phí cổng trung gian",
        en: "Automated deposit matching via VietQR Webhook — zero intermediary gateway fees",
      },
      {
        vi: "Khóa phân tán Redis (Distributed Lock) — ngăn ngừa xung đột đặt trùng đơn hàng",
        en: "Redis Distributed Lock — prevents race conditions & duplicate orders",
      },
      {
        vi: "Trợ lý AI phân tích phong thủy & giải đáp khách hàng 24/7",
        en: "AI assistant for number analysis & user inquiries — available 24/7",
      },
    ],
    stats: [
      { v: "61", l: { vi: "Bảng dữ liệu", en: "Database tables" } },
      { v: "<8ms", l: { vi: "Độ trễ truy vấn", en: "Query latency" } },
      { v: "<0.5s", l: { vi: "Khớp đối soát", en: "Deposit match" } },
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
        vi: "Phân loại và điều phối luồng khách hàng (Lead Routing)",
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
      vi: "Ứng dụng mô hình AI được tinh chỉnh theo tài liệu riêng của doanh nghiệp — trả lời chuẩn xác có dẫn nguồn, hạn chế tối đa ảo giác, tiết kiệm chi phí trực tổng đài.",
      en: "AI assistants grounded in your internal knowledge base — accurate answers with source citations, minimizing hallucinations and staffing costs.",
    },
    chips: [
      {
        vi: "Hỗ trợ tư vấn thông tin sản phẩm tự động 24/7",
        en: "24/7 automated product consultation",
      },
      {
        vi: "Học từ tài liệu nội bộ — câu trả lời có dẫn nguồn kiểm chứng",
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
      vi: "TECH — RAG trích dẫn nguồn · hạn chế ảo giác · bảo mật dữ liệu",
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
      vi: "Đồng hành từ khâu phân tích yêu cầu, thiết kế kiến trúc đến triển khai sản phẩm hoàn chỉnh trong 30–60 ngày.",
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
    id: "ha-van-an",
    photo: "/team/anhv-white-polo.png",
    name: "Hà Văn Ân",
    role: "Full-Stack & AI Integrator",
    bio: {
      vi: "Phát triển ứng dụng Web hiệu năng cao + xây dựng pipeline AI RAG có kiểm chứng nguồn dữ liệu.",
      en: "High-performance web applications + RAG AI pipelines with strict factual verification.",
    },
    skills: ["Next.js 16", "RAG", "Gemini API"],
  },
  {
    id: "nguyen-thanh-loc",
    photo: "/team/Locnt-white-polo.png",
    name: "Nguyễn Thành Lộc",
    role: "Backend Architect & AI Lead",
    bio: {
      vi: "Chuyên sâu kiến trúc Clean Architecture, di chuyển hệ thống sang microservices và phân tích dữ liệu với GraphRAG.",
      en: "Specialist in Clean Architecture, microservices migration, and connected data analysis with GraphRAG.",
    },
    skills: [".NET 8", "Neo4j", "FastAPI"],
  },
  {
    id: "le-tri-trung",
    photo: "/team/trunglc-white-polo-glasses.png",
    name: "Lê Trí Trung",
    role: "Founder & Tech Lead",
    bio: {
      vi: "Định hướng kiến trúc hệ thống và chiến lược kỹ thuật. Từng thiết kế các sàn thương mại điện tử và nền tảng EdTech phục vụ hàng chục ngàn người dùng.",
      en: "Leads system architecture and technical strategy. Experience architecting commerce marketplaces and EdTech platforms serving tens of thousands of users.",
    },
    skills: ["Java Spring Boot", ".NET 8", "System Design"],
  },
  {
    id: "nguyen-chon-phuoc",
    photo: "/team/phuocnc-white-polo.png",
    name: "Nguyễn Chơn Phước",
    role: "Java Core & Cloud DevOps",
    bio: {
      vi: "Phụ trách hạ tầng chịu tải phân tán, Docker containerization, tối ưu chỉ mục CSDL và đảm bảo tính sẵn sàng cao.",
      en: "Distributed infrastructure, Docker containerization, database index optimization, and high system availability.",
    },
    skills: ["Java 21", "Docker", "Nginx"],
  },
  {
    id: "nguyen-minh-tuan",
    photo: "/team/tuannm-white-polo.png",
    name: "Nguyễn Minh Tuấn",
    role: "Enterprise .NET Backend",
    bio: {
      vi: "Giải pháp backend .NET chuẩn Microsoft, tích hợp cổng dịch vụ công và tự động hóa quy trình nghiệp vụ.",
      en: "Microsoft-standard .NET backend solutions, public service portal integrations, and business workflow automation.",
    },
    skills: [".NET 8", "SQL Server", "Gov APIs"],
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
    kicker: "EDTECH",
    title: "The MC Hub Academy",
    tag: {
      vi: "Nền tảng đào tạo MC & Diễn thuyết",
      en: "MC & public speaking training platform",
    },
    stat: { vi: "10,000+ học viên online", en: "10,000+ online learners" },
    chips: ["React 19", "Node.js", "Live Stream"],
  },
  {
    id: "threadlearn",
    kicker: "RESEARCH",
    title: "ThreadLearn",
    tag: {
      vi: "LLM tự phát hiện & sửa lỗi concurrency trong JavaScript",
      en: "Fine-tuned LLM that detects & repairs JavaScript concurrency bugs",
    },
    desc: {
      vi: "Pipeline end-to-end tự phát hiện và sửa lỗi concurrency (data race, atomicity, order violation) trong Node.js bất đồng bộ — chỉ dùng model 1.5B tham số, trong khi công cụ hiện có hoặc chỉ phát hiện mà không sửa được, hoặc cần model 7B–32B.",
      en: "End-to-end pipeline that detects and fixes concurrency bugs (data races, atomicity and order violations) in async Node.js — with a 1.5B-parameter model, where existing tools either only detect or need 7B–32B models.",
    },
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

// Member CV pages (#/doi-ngu/<id>) — content from companyData.CORE_TEAM, EN added
export const TEAM_CV = {
  "le-tri-trung": {
    title: "Tech Lead & System Architect",
    edu: {
      vi: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 3.3/4.0 – 8.2/10)",
      en: "Software Engineering — FPT University Da Nang (GPA 3.3/4.0 – 8.2/10)",
    },
    exp: [
      "FPT Software Intern",
      "Solo Architect Biensovip.com",
      "CEO The MC Hub",
      { vi: "Quán quân Hackathon CV 2026", en: "Champion, Hackathon CV 2026" },
      {
        vi: "Đồng tác giả nghiên cứu ICTA 2026",
        en: "Co-author, ICTA 2026 research",
      },
    ],
    about: {
      vi: "Tổng đạo diễn kiến trúc hệ thống và chiến lược kỹ thuật. Tự tay thiết kế các sàn giao dịch thương mại lớn và hệ thống EdTech phục vụ hàng chục ngàn người dùng.",
      en: "Leads system architecture and technical strategy. Personally designed large commerce marketplaces and EdTech systems serving tens of thousands of users.",
    },
    skills: [
      "Java Spring Boot",
      ".NET 8 Clean Arch",
      "Python FastAPI",
      "React 19",
      "PostgreSQL",
      "Docker",
      "System Design",
    ],
  },
  "ha-van-an": {
    title: "Full-stack Web Developer",
    edu: {
      vi: "Kỹ thuật phần mềm — FPT University (2022–2026), GPA 3.0/4.0",
      en: "Software Engineering — FPT University (2022–2026), GPA 3.0/4.0",
    },
    exp: [
      {
        vi: "STEMGO.net — Full-stack Developer (05/2026–nay): nền tảng học STEM với 34 mini-game, gia sư AI Gemini, 50 người dùng đăng ký",
        en: "STEMGO.net — Full-stack Developer (05/2026–present): STEM micro-learning platform with 34 mini-games, Gemini AI tutor, 50 registered users",
      },
      {
        vi: "FPT Software — Full-stack Developer Intern (08/2025–02/2026): hệ thống quản lý kho, WebSocket tính tồn kho real-time, unit test API xuất kho",
        en: "FPT Software — Full-stack Developer Intern (08/2025–02/2026): inventory management system, real-time stock via WebSockets, unit tests for outbound transfer API",
      },
      {
        vi: "TVK House — Full-stack Developer (07/2025): landing page tự đồng bộ lead qua Google Sheets API & Telegram Bot",
        en: "TVK House — Full-stack Developer (07/2025): landing page auto-syncing leads via Google Sheets API & Telegram Bot",
      },
      {
        vi: "Đồng tác giả ThreadLearn — fine-tune Qwen2.5-Coder-1.5B (QLoRA) + RAG BM25 sửa lỗi concurrency JavaScript, 73.3% pass rate",
        en: "Co-author, ThreadLearn — fine-tuned Qwen2.5-Coder-1.5B (QLoRA) + BM25 RAG repairing JavaScript concurrency bugs, 73.3% pass rate",
      },
    ],
    about: {
      vi: "Sinh viên Kỹ thuật phần mềm FPT University với 7 tháng thực tập chuyên nghiệp. Xây web app có khả năng mở rộng bằng React, Next.js, Node.js; thiết kế RESTful API, tính năng real-time và tích hợp AI (Gemini, RAG, fine-tune QLoRA).",
      en: "Software Engineering student at FPT University with 7 months of professional internship. Builds scalable web apps with React, Next.js and Node.js; designs RESTful APIs, real-time features and AI integrations (Gemini, RAG, QLoRA fine-tuning).",
    },
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js (Express)",
      "MongoDB",
      "MySQL",
      "FastAPI",
      "QLoRA",
      "RAG",
      "Gemini API",
      "Docker",
    ],
  },
  "nguyen-thanh-loc": {
    title: "Microservices & GraphRAG Specialist",
    edu: {
      vi: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 3.5/4.0), TOEIC 650",
      en: "Software Engineering — FPT University Da Nang (GPA 3.5/4.0), TOEIC 650",
    },
    exp: [
      "FPT Software Intern (C# Migration)",
      "Team Lead UniNest",
      "AI Team Lead BrandHub Platform",
    ],
    about: {
      vi: "Chuyên sâu kiến trúc sạch Clean Architecture, chuyển hệ thống legacy sang microservices hiện đại và phân tích mạng dữ liệu phức tạp với GraphRAG.",
      en: "Deep expertise in Clean Architecture, migrating legacy systems to modern microservices, and analyzing complex data networks with GraphRAG.",
    },
    skills: [
      ".NET 8",
      "ASP.NET Core",
      "FastAPI",
      "Neo4j GraphRAG",
      "ChromaDB",
      "Clean Architecture",
      "PostgreSQL",
    ],
  },
  "nguyen-chon-phuoc": {
    title: "Distributed Systems & Infra Engineer",
    edu: {
      vi: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 3.2/4.0), IELTS 5.5",
      en: "Software Engineering — FPT University Da Nang (GPA 3.2/4.0), IELTS 5.5",
    },
    exp: [
      "Acronic Solutions (Anti-DDoS Dashboard 24/7)",
      "Danatour Backend",
      "V-Try 3D Web & Computer Vision",
    ],
    about: {
      vi: "Phụ trách hạ tầng chịu tải, container hóa Docker, tối ưu database indexing và đảm bảo hệ thống vận hành 24/7 với độ trễ tối thiểu.",
      en: "Owns high-load infrastructure, Docker containerization and database index tuning, keeping systems running 24/7 with minimal latency.",
    },
    skills: [
      "Java 21",
      "Spring Boot 3",
      "Docker",
      "Nginx",
      "Linux Ops",
      "Socket.IO",
      "Realtime IPC",
    ],
  },
  "nguyen-minh-tuan": {
    title: "Gov & Enterprise Integration Specialist",
    edu: {
      vi: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 7.8/10), Microsoft Certified Back-End Pro",
      en: "Software Engineering — FPT University Da Nang (GPA 7.8/10), Microsoft Certified Back-End Pro",
    },
    exp: [
      "FPT Software Intern (C# & SQL Stored Procedures)",
      {
        vi: "Team Lead VivuCar (thuê xe tự lái & API Bộ Công An)",
        en: "Team Lead VivuCar (self-drive car rental & Ministry of Public Security API)",
      },
    ],
    about: {
      vi: "Chuyên giải pháp doanh nghiệp chuẩn Microsoft, tích hợp cổng dịch vụ công và tự động hóa quy trình kiểm duyệt.",
      en: "Specialist in Microsoft-standard enterprise solutions, government portal integration and review-process automation.",
    },
    skills: [
      ".NET 8",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "Gov Portal APIs",
      "Hive AI",
      "Docker",
    ],
  },
};

// One card shape for products list + detail pages (#/san-pham, #/san-pham/<id>)
export const ALL_PRODUCTS = [
  ...CASES.map(({ rev, fig, ...c }) => c),
  ...MORE_PRODUCTS.map((p) => ({ ...p, stats: p.stats || [] })),
];
