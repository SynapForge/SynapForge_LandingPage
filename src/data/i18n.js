/**
 * Từ điển UI song ngữ VI/EN cho MockupBView + helpers.
 * Không dùng thư viện i18n — state + dict là đủ (YAGNI).
 */

export const pick = (lang, vi, en) => (lang === 'en' && en ? en : vi);

export const T = {
  meta_title: {
    vi: 'SynapForge — Thiết kế Website Bán Hàng, AI & Chuyển Đổi Số cho Doanh Nghiệp | Đà Nẵng',
    en: 'SynapForge — Web Design, Automation & AI for SMEs | Da Nang, Vietnam',
  },
  meta_desc: {
    vi: 'SynapForge thiết kế website bán hàng, tự động hóa đơn hàng & thanh toán, AI chăm khách 24/7 cho doanh nghiệp vừa & nhỏ tại Đà Nẵng. Báo giá 24h, bàn giao 30–60 ngày.',
    en: 'SynapForge builds e-commerce websites, order & payment automation, and 24/7 AI customer support for SMEs in Da Nang, Vietnam. Quote in 24h, delivery in 30–60 days.',
  },

  nav_services: { vi: 'Dịch vụ', en: 'Services' },
  nav_team: { vi: 'Đội ngũ', en: 'Team' },
  nav_contact: { vi: 'Liên hệ', en: 'Contact' },
  nav_cta: { vi: 'Bắt đầu dự án', en: 'Start a project' },

  rail_services: { vi: 'Dịch vụ', en: 'Services' },
  rail_team: { vi: 'Đội ngũ', en: 'Team' },
  rail_contact: { vi: 'Liên hệ', en: 'Contact' },

  hero_eyebrow: { vi: '// A/01 — VENTURE STUDIO & SOFTWARE FACTORY — ĐÀ NẴNG, VN', en: '// A/01 — VENTURE STUDIO & SOFTWARE FACTORY — DA NANG, VN' },
  h1_a: { vi: 'Thiết kế website bán hàng,', en: 'E-commerce websites,' },
  h1_b: { vi: 'tự động hóa & AI chăm khách', en: 'automation & AI customer care' },
  sub_b: { vi: 'Website bán hàng, thanh toán tự động, AI chăm khách 24/7.', en: 'E-commerce website, auto payments, 24/7 AI customer care.' },
  sub_r: { vi: 'Chúng tôi làm trọn gói cho doanh nghiệp vừa & nhỏ — bạn lo bán, công nghệ lo phần còn lại.', en: 'We deliver end-to-end for SMEs — you focus on selling, we handle the rest of the stack.' },
  cta_ventures: { vi: 'Xem dự án thật', en: 'See real projects' },
  cta_contact: { vi: 'Báo giá trong 24h →', en: 'Quote in 24h →' },
  dual_label: { vi: '02 động cơ:', en: '02 engines:' },
  dual_1: { vi: '■ Sản phẩm riêng — BrandHub, BienSoVip', en: '■ Own products — BrandHub, BienSoVip' },
  dual_2: { vi: '■ Gia công chuẩn doanh nghiệp', en: '■ Enterprise outsourcing' },

  ety_syn: { vi: 'Khớp thần kinh — tư duy mạng nơ-ron, AI và xử lý dữ liệu thông minh.', en: 'Synapse — neural-network thinking, AI and intelligent data processing.' },
  ety_forge: { vi: 'Lò rèn — kỷ luật kỹ thuật, ý tưởng thành sản phẩm bền vững.', en: 'Forge — engineering discipline, turning ideas into durable products.' },
  ety_motto: { vi: '// tư duy như mạng nơ-ron, kiến tạo như xưởng rèn', en: '// think like a neural network, build like a forge' },

  ven_title: { vi: 'Sản phẩm tự xây', en: 'Products we built' },
  svc_title: { vi: 'Dịch vụ chuyển đổi số', en: 'Digital transformation services' },
  svc_note: { vi: 'Cho doanh nghiệp vừa & nhỏ', en: 'For SMEs' },
  team_title: { vi: 'Đội ngũ thực chiến', en: 'Hands-on team' },
  team_note: { vi: '05 kỹ sư FPT / FSoft', en: '05 FPT / FSoft engineers' },
  faq_title: { vi: 'Câu hỏi thường gặp', en: 'Frequently asked questions' },
  faq_note: { vi: '4 câu phổ biến nhất', en: '4 most common questions' },
  contact_title: { vi: 'Bắt đầu dự án', en: 'Start a project' },
  contact_note: { vi: 'Phản hồi trong 24h', en: 'Response within 24h' },
  contact_phone: { vi: 'Điện thoại', en: 'Phone' },
  contact_hq: { vi: 'Trụ sở', en: 'Headquarters' },
  contact_addr: { vi: 'Hải Châu, TP. Đà Nẵng, Việt Nam', en: 'Hai Chau, Da Nang, Vietnam' },
  contact_cta: { vi: 'Gửi mô tả ý tưởng →', en: 'Send your idea brief →' },
  footer_addr: { vi: 'Đà Nẵng, Việt Nam', en: 'Da Nang, Vietnam' },
};

export const t = (lang, key) => (T[key] ? pick(lang, T[key].vi, T[key].en) : key);

export const HERO_STATS = [
  { v: '05+', l1: { vi: 'Kỹ sư FPT / FSoft', en: 'FPT / FSoft engineers' }, l2: { vi: '100% thực chiến', en: '100% hands-on' } },
  { v: '02', l1: { vi: 'Sản phẩm lõi', en: 'Core products' }, l2: { vi: 'BrandHub & BienSoVip', en: 'BrandHub & BienSoVip' } },
  { v: '0%', l1: { vi: 'Mất tin nhắn', en: 'Lost messages' }, l2: { vi: 'RabbitMQ DLQ', en: 'RabbitMQ DLQ' } },
  { v: '30–60', l1: { vi: 'Ngày bàn giao', en: 'Days to delivery' }, l2: { vi: 'MVP ra thị trường', en: 'MVP to market' } },
];

export const TICKER = [
  { vi: 'Website bán hàng', en: 'E-commerce website' },
  { vi: 'Thanh toán tự động', en: 'Auto payment' },
  { vi: 'AI chăm khách 24/7', en: '24/7 AI support' },
  { vi: 'Quản lý đơn hàng', en: 'Order management' },
  { vi: 'Báo cáo tự động', en: 'Auto reports' },
  { vi: '0đ phí cổng', en: '0đ gateway fees' },
  { vi: '<30s thông báo', en: '<30s notifications' },
  { vi: '0% mất dữ liệu', en: '0% data loss' },
];

export const CASES = [
  {
    id: 'brandhub',
    rev: false,
    kicker: 'CASE 01 — AI MARTECH & PUBLISHER',
    title: 'BrandHub',
    tag: { vi: 'Tự động viết & đăng nội dung lên 5 nền tảng MXH', en: 'Auto-writes & publishes content to 5 social platforms' },
    desc: { vi: 'Học giọng điệu thương hiệu từ bài cũ, tự sinh nội dung, đăng 5 MXH — một người làm việc của cả đội content.', en: "Learns your brand's voice from past posts, generates content, publishes to 5 platforms — one person does a whole content team's work." },
    feats: [
      { vi: 'Tự học Brand Voice — nội dung sinh ra không bao giờ trùng lặp', en: 'Learns Brand Voice — generated content never repeats' },
      { vi: 'Lập lịch đăng tự động Facebook, TikTok, Instagram, Threads, Zalo', en: 'Auto-schedules posts to Facebook, TikTok, Instagram, Threads, Zalo' },
      { vi: 'Lỗi thì tự gửi lại — không bao giờ mất bài đăng', en: 'Auto-retries on failure — never loses a post' },
    ],
    stats: [
      { v: '07', l: { vi: 'Microservices', en: 'Microservices' } },
      { v: '0%', l: { vi: 'Mất bài', en: 'Lost posts' } },
      { v: '05', l: { vi: 'Nền tảng', en: 'Platforms' } },
    ],
    chips: ['Java 21', 'Spring Cloud Gateway', 'RabbitMQ DLQ', 'Neo4j GraphRAG', 'Python FastAPI', 'React 18'],
    img: '/mockup/img/DA-D19-12.png',
    alt: 'BrandHub dashboard',
    fig: ['FIG. 02 — BrandHub', 'Dashboard'],
  },
  {
    id: 'biensovip',
    rev: true,
    kicker: 'CASE 02 — LUXURY MARKETPLACE',
    title: 'BienSoVip',
    tag: { vi: 'Sàn giao dịch & đấu giá biển số xe cao cấp', en: 'Premium license-plate marketplace & auction' },
    desc: { vi: 'Khách cọc lúc 2h sáng, máy tự khớp VietQR trong 0.5s — bạn ngủ, máy bán. AI tư vấn phong thủy trả lời 24/7.', en: 'Customer deposits at 2am, system auto-matches VietQR in 0.5s — you sleep, it sells. Feng shui AI consults 24/7.' },
    feats: [
      { vi: 'Khớp cọc tự động < 0.5s — 0đ phí cổng trung gian', en: 'Auto payment match <0.5s — 0đ gateway fees' },
      { vi: 'Khóa chống bán trùng — 2 khách không bao giờ mua cùng 1 biển', en: 'Anti double-sell lock — two customers can never buy the same plate' },
      { vi: 'AI tư vấn phong thủy theo 4 trụ — trả lời khách 24/7', en: 'Feng shui AI consulting by 4 pillars — answers 24/7' },
    ],
    stats: [
      { v: '61', l: { vi: 'Bảng dữ liệu', en: 'Data tables' } },
      { v: '<8ms', l: { vi: 'Truy vấn', en: 'Queries' } },
      { v: '<0.5s', l: { vi: 'Khớp cọc', en: 'Payment match' } },
    ],
    chips: ['.NET 8 Clean Arch', 'PostgreSQL GIN', 'Redis Lock', 'React 19', 'VietQR Webhook', 'DeepSeek AI'],
    img: '/mockup/img/biensovip_real_dashboard.png',
    alt: 'BienSoVip dashboard',
    fig: ['FIG. 03 — BienSoVip', 'Admin'],
  },
];

export const SERVICES = [
  {
    num: '01',
    title: { vi: 'Website bán hàng & Marketplace', en: 'E-commerce Website & Marketplace' },
    sub: { vi: 'Bán online chuyên nghiệp — khách tự đặt, tự thanh toán, không cần nhân viên chốt đơn.', en: 'Sell online professionally — customers order and pay themselves, no salesperson needed.' },
    chips: [
      { vi: 'Giỏ hàng, đơn hàng, tồn kho real-time', en: 'Cart, orders, real-time inventory' },
      { vi: 'Thanh toán VietQR tự khớp + VNPay/MoMo', en: 'VietQR auto-match + VNPay/MoMo payments' },
      { vi: 'Tự quản lý sản phẩm, giá, đơn dễ dàng', en: 'Easy self-manage products, prices, orders' },
      { vi: 'SSL, SEO, tải trang < 1s', en: 'SSL, SEO, page load <1s' },
    ],
    tech: { vi: 'TECH — thanh toán tự khớp · dữ liệu an toàn · chịu tải cao', en: 'TECH — auto payment matching · secure data · high-load ready' },
    time: { vi: '4–8 tuần', en: '4–8 weeks' },
  },
  {
    num: '02',
    title: { vi: 'Tự động hóa vận hành', en: 'Operations Automation' },
    sub: { vi: 'Đơn hàng tự đối soát, thông báo < 30s, báo cáo không cần làm tay.', en: 'Orders auto-reconcile, notifications <30s, reports without manual work.' },
    chips: [
      { vi: 'Thông báo Telegram/Zalo Webhook < 30s', en: 'Telegram/Zalo Webhook alerts <30s' },
      { vi: 'Đối soát VietQR tự động 0đ phí', en: 'VietQR auto-reconciliation, 0đ fees' },
      { vi: 'Phễu lead tự phân luồng theo độ nóng', en: 'Lead funnel auto-routed by heat' },
      { vi: 'Báo cáo doanh thu tự động', en: 'Auto revenue reports' },
    ],
    tech: { vi: 'TECH — thông báo < 30s · tự đối soát · không mất dữ liệu', en: 'TECH — <30s alerts · auto-reconcile · no data loss' },
    time: { vi: '3–6 tuần', en: '3–6 weeks' },
  },
  {
    num: '03',
    title: { vi: 'AI chăm sóc khách hàng 24/7', en: '24/7 AI Customer Care' },
    sub: { vi: 'AI trả lời khách 24/7 theo dữ liệu riêng của bạn — đúng, không bịa, tiết kiệm 80% chi phí.', en: 'AI answers customers 24/7 from your own data — accurate, no hallucination, saves 80% of cost.' },
    chips: [
      { vi: 'Tư vấn sản phẩm tự động 24/7', en: 'Auto product consulting 24/7' },
      { vi: 'Học tài liệu nội bộ — trả lời đúng, có nguồn', en: 'Learns internal docs — accurate, sourced answers' },
      { vi: 'Dữ liệu chạy riêng, không ra ngoài', en: 'Data runs privately, never leaves' },
      { vi: 'API AI tốc độ cao', en: 'High-speed AI API' },
    ],
    tech: { vi: 'TECH — AI học dữ liệu riêng · trả lời đúng · chạy tại máy bạn', en: 'TECH — AI on your data · accurate answers · runs on your machine' },
    time: { vi: '2–5 tuần', en: '2–5 weeks' },
  },
  {
    num: '04',
    title: { vi: 'Chuyển đổi số trọn gói', en: 'End-to-End Digital Transformation' },
    sub: { vi: 'Từ ý tưởng trên giấy đến sản phẩm ra mắt trong 30–60 ngày.', en: 'From idea on paper to product launch in 30–60 days.' },
    chips: [
      { vi: 'Chốt rõ yêu cầu & thiết kế trước khi làm', en: 'Clear requirements & design before building' },
      { vi: 'UI/UX chuẩn quốc tế', en: 'International-standard UI/UX' },
      { vi: 'Agile/Scrum — báo tiến độ từng task', en: 'Agile/Scrum — per-task progress' },
      { vi: 'Deploy production + bàn giao source & tài liệu', en: 'Production deploy + source & docs handover' },
    ],
    tech: { vi: 'TECH — làm từ đầu tới cuối · báo tiến độ · bàn giao đầy đủ', en: 'TECH — end-to-end · progress tracking · full handover' },
    time: { vi: '30–60 ngày', en: '30–60 days' },
  },
];

export const TEAM = [
  { av: 'T', name: 'Lê Trí Trung', role: 'Founder & Tech Lead', bio: { vi: 'Tổng đạo diễn kiến trúc hệ thống — tự tay thiết kế các sàn giao dịch lớn và EdTech hàng chục ngàn người dùng.', en: 'Chief system architect — personally designs large marketplaces and EdTech platforms serving tens of thousands of users.' }, skills: ['Java Spring Boot', '.NET 8', 'System Design'] },
  { av: 'A', name: 'Hà Văn Ân', role: 'Full-Stack & AI Integrator', bio: { vi: 'Xây web nhanh + AI trả lời chính xác, không bịa.', en: 'Builds fast web apps + accurate AI answers, no hallucination.' }, skills: ['Next.js 16', 'RAG', 'Gemini API'] },
  { av: 'L', name: 'Nguyễn Thành Lộc', role: 'Backend Architect & AI Lead', bio: { vi: 'Kiến trúc sạch, nâng cấp hệ thống cũ, AI hiểu dữ liệu lớn.', en: 'Clean architecture, legacy system upgrades, AI that understands big data.' }, skills: ['.NET 8', 'Neo4j', 'FastAPI'] },
  { av: 'P', name: 'Nguyễn Chơn Phước', role: 'Java Core & Cloud DevOps', bio: { vi: 'Hạ tầng chịu tải, Docker, vận hành 24/7 độ trễ tối thiểu.', en: 'High-load infrastructure, Docker, 24/7 ops with minimal latency.' }, skills: ['Java 21', 'Docker', 'Nginx'] },
  { av: 'T', name: 'Nguyễn Minh Tuấn', role: 'Enterprise .NET Backend', bio: { vi: 'Giải pháp chuẩn Microsoft, tích hợp dịch vụ công, tự động hóa kiểm duyệt.', en: 'Microsoft-standard solutions, government service integration, review automation.' }, skills: ['.NET 8', 'SQL Server', 'Gov APIs'] },
];

export const FAQ = [
  { q: { vi: 'Bàn giao trong bao lâu?', en: 'How long does delivery take?' }, a: { vi: 'Website bán hàng 4–8 tuần, tự động hóa vận hành 3–6 tuần, AI 2–5 tuần. Gói trọn gói: ra mắt trong 30–60 ngày. Tiến độ được cập nhật từng task — bạn luôn biết đang làm tới đâu.', en: 'E-commerce site 4–8 weeks, operations automation 3–6 weeks, AI 2–5 weeks. End-to-end package: launch in 30–60 days. Progress updated per task — you always know where we are.' } },
  { q: { vi: 'Bảo hành thế nào?', en: "What's the warranty?" }, a: { vi: 'Sửa lỗi miễn phí 6–12 tháng tùy gói (ghi rõ trong hợp đồng). Gói Chuyên Nghiệp hỗ trợ ưu tiên 12 tháng + trực 24/7.', en: 'Free bug fixes 6–12 months depending on package (stated in contract). Pro package: 12-month priority support + 24/7 on-call.' } },
  { q: { vi: 'Source code thuộc về ai?', en: 'Who owns the source code?' }, a: { vi: 'Thuộc về bạn. Bàn giao toàn bộ mã nguồn + tài liệu kỹ thuật sau khi nghiệm thu, quy định rõ trong hợp đồng.', en: 'You do. Full source + technical docs handed over after acceptance, stated clearly in the contract.' } },
  { q: { vi: 'Sau này muốn nâng cấp được không?', en: 'Can I upgrade later?' }, a: { vi: 'Được. Có lộ trình nâng cấp từ MVP lên sàn lớn (phụ phí +20% Live Upgrade) — không phải làm lại từ đầu.', en: "Yes. There's a clear path from MVP to large marketplace (+20% Live Upgrade fee) — no rebuild from scratch." } },
];
