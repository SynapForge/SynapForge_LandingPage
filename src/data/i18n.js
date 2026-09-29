/**
 * Từ điển UI song ngữ VI/EN + helpers.
 * Không dùng thư viện i18n — state + dict là đủ (YAGNI).
 */

export const UI = {
  meta_title: {
    vi: 'SynapForge — Venture Studio & Software Engineering Factory',
    en: 'SynapForge — Venture Studio & Software Engineering Factory',
  },
  meta_desc: {
    vi: 'SynapForge là Venture Studio & Đối tác Kỹ nghệ Phần mềm Đẳng cấp tại Đà Nẵng. Chuyên gia công Web App, Microservices, RAG/AI và kiến trúc chịu tải cao.',
    en: 'SynapForge is a Venture Studio & high-end software engineering partner in Da Nang, Vietnam. Specialized in web apps, microservices, RAG/AI and high-load architecture.',
  },
  nav_model: { vi: 'Mô Hình Kép', en: 'Dual Engine' },
  nav_ventures: { vi: 'Sản Phẩm Lõi', en: 'Core Ventures' },
  nav_services: { vi: 'Dịch Vụ Kỹ Nghệ', en: 'Services' },
  nav_team: { vi: 'Đội Ngũ', en: 'Team' },
  nav_contact: { vi: 'Tư Vấn Dự Án', en: 'Consult' },
  nav_cta: { vi: 'Khởi Động Dự Án', en: 'Start a Project' },
  hero_cta_ventures: { vi: 'Khám Phá Sản Phẩm Lõi', en: 'Explore Core Ventures' },
  hero_cta_services: { vi: 'Bảng Dịch Vụ Gia Công', en: 'Outsourcing Services' },
  etymology_heading: {
    vi: 'Khi Trí Tuệ Kết Nối Gặp Kỹ Nghệ Bền Bỉ',
    en: 'When Connected Intelligence Meets Enduring Engineering',
  },
  etymology_pron: { vi: 'Phiên âm:', en: 'Pronunciation:' },
  etymology_prefix: { vi: 'TIỀN TỐ (PREFIX)', en: 'PREFIX' },
  etymology_suffix: { vi: 'HẬU TỐ (SUFFIX)', en: 'SUFFIX' },
  model_label: { vi: 'Triết Lý Vận Hành', en: 'Operating Philosophy' },
  model_title: { vi: 'Mô Hình Bánh Đà Kép: Produce & Outsource', en: 'Dual Flywheel: Produce & Outsource' },
  ventures_label: { vi: 'Hệ Sinh Thái R&D', en: 'R&D Ecosystem' },
  ventures_title: { vi: 'Sản Phẩm Lõi Đã Tôi Luyện', en: 'Battle-Tested Core Products' },
  ventures_intro: {
    vi: 'Mỗi sản phẩm là một minh chứng sống động cho năng lực kiến trúc hệ thống, nghiên cứu AI và kỹ năng lập trình thực tế.',
    en: 'Each product is living proof of our system architecture, AI research and hands-on engineering.',
  },
  services_label: { vi: 'Dịch Vụ Kỹ Nghệ May Đo', en: 'Bespoke Engineering' },
  services_title: { vi: 'Dịch Vụ Gia Công Phần Mềm Đẳng Cấp', en: 'World-Class Software Outsourcing' },
  services_bestfor: { vi: 'Phù hợp nhất:', en: 'Best for:' },
  team_label: { vi: 'Đội Ngũ Sáng Lập & Kỹ Sư Cốt Lõi', en: 'Founding Team & Core Engineers' },
  team_title: {
    vi: 'Kỹ Sư Ưu Tú Từ FPT University & FPT Software',
    en: 'Elite Engineers from FPT University & FPT Software',
  },
  contact_title: {
    vi: 'Sẵn Sàng Tôi Luyện Ý Tưởng Cùng SynapForge?',
    en: 'Ready to Forge Your Idea with SynapForge?',
  },
  contact_desc: {
    vi: 'Dù bạn cần một đối tác tư vấn kiến trúc chịu tải, tích hợp AI chuyên sâu hay bàn giao một ứng dụng trọn gói trong 30–60 ngày, chúng tôi luôn sẵn sàng lắng nghe.',
    en: 'Whether you need a high-load architecture partner, deep AI integration, or a turnkey app delivered in 30–60 days — we are ready to listen.',
  },
  rail_intro: { vi: 'Giới thiệu', en: 'Intro' },
  rail_etymology: { vi: 'Tên gọi', en: 'Etymology' },
  rail_model: { vi: 'Mô hình', en: 'Model' },
  rail_ventures: { vi: 'Sản phẩm', en: 'Ventures' },
  rail_services: { vi: 'Dịch vụ', en: 'Services' },
  rail_team: { vi: 'Đội ngũ', en: 'Team' },
  rail_contact: { vi: 'Liên hệ', en: 'Contact' },
};

export const pick = (lang, vi, en) => (lang === 'en' && en ? en : vi);
export const ui = (lang, key) => pick(lang, UI[key].vi, UI[key].en);
