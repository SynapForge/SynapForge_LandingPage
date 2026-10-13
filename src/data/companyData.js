/**
 * Dữ liệu chuẩn hóa toàn bộ thông tin SynapForge phục vụ Render giao diện
 */

export const BRAND_DESIGN_TOKENS = {
  colors: {
    primary: "#FF5500",
    primaryHover: "#E04B00",
    primaryGlow: "rgba(255, 85, 0, 0.25)",
    backgroundDark: "#0B0F17",
    cardDark: "#111827",
    borderDark: "#1F2937",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
  typography: {
    display: "'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
    code: "'JetBrains Mono', monospace",
  },
  principles: [
    "Swiss Minimalist Grid (Chủ nghĩa tối giản)",
    "High-contrast Warm Orange & Matte Black",
    "Glassmorphism Backdrop Hierarchy",
    "Pixel-perfect Geometric SF Monogram"
  ]
};

export const COMPANY_INFO = {
  name: "SynapForge",
  legalName: "SynapForge Venture & Engineering Studio",
  masterSlogan: "Forging Intelligence. Engineering Scale.",
  masterSloganVi: "Tôi luyện Trí tuệ. Kiến tạo Quy mô.",
  actionTagline: "ARCHITECT. CODE. FORGE. SCALE.",
  tagline: "Forging Intelligence. Engineering Scale.",
  shortDesc: "Venture Studio & Đối tác Kỹ nghệ Phần mềm Đẳng cấp tại Đà Nẵng, chuyên xây dựng nền tảng chịu tải, kiến trúc Microservices và tích hợp AI thực chiến.",
  nameEtymology: {
    title: "Ý Nghĩa Tên Gọi SynapForge",
    pronunciation: "/sɪˈnæp.fɔːrdʒ/ (3 âm tiết)",
    synap: {
      root: "Synapse (Khớp thần kinh & Mạng nơ-ron)",
      desc: "Tượng trưng cho trí tuệ nhân tạo (AI/ML), tư duy thuật toán mạch lạc và các luồng dữ liệu phân tán (Event Streams / Microservices)."
    },
    forge: {
      root: "Forge (Lò rèn & Kỹ nghệ tôi luyện)",
      desc: "Tượng trưng cho sự bền bỉ, kỷ luật kiến trúc Clean Architecture và tinh thần biến ý tưởng sơ khai thành cỗ máy phần mềm kiên cường."
    },
    synthesis: "Chúng tôi tư duy với sự linh hoạt của mạng nơ-ron (Synapse), và kiến tạo sản phẩm với độ bền thép của một xưởng rèn (Forge)."
  },
  establishedYear: "2026",
  headquarters: "Hải Châu, TP. Đà Nẵng, Việt Nam",
  email: "solutions@synapforge.id.vn",
  phone: "(+84) 912 158 715",
  website: "https://synapforge.dev",
  founder: {
    name: "Lê Trí Trung",
    role: "Founder & Head of Technology (Tech Lead / System Architect)",
    avatar: "/team/le-tri-trung.jpg",
    email: "letritrung2605@gmail.com",
    github: "https://github.com/trung2605",
    portfolio: "https://trungle2605.vercel.app"
  },
  metrics: [
    { value: "05+", label: "Kỹ sư phần mềm FPT / FSoft", sub: "Kinh nghiệm triển khai thực tế" },
    { value: "02", label: "Trụ cột Sản phẩm Lõi (Flagship)", sub: "BrandHub & BienSoVip" },
    { value: "0%", label: "Tỷ lệ mất tin nhắn (DLQ)", sub: "Bảo đảm tin cậy RabbitMQ" },
    { value: "30-60", label: "Ngày bàn giao MVP", sub: "Tốc độ đưa ý tưởng ra thị trường" }
  ]
};

export const CORE_TEAM = [
  {
    id: "ha-van-an",
    name: "Hà Văn Ân",
    role: "Senior Full-Stack & AI Solutions Lead",
    title: "AI Pipeline & Modern Web Integrator",
    education: "Kỹ thuật phần mềm — FPT University Đà Nẵng (2022–2026, GPA 3.0/4.0)",
    experience: "7 tháng Full-stack Intern FPT Software (Inventory System), Lead Dev STEMGO.net (34 mini-games, Gemini AI Tutor), Đồng tác giả nghiên cứu AI ThreadLearn (ICTA 2026, 73.3% pass rate)",
    skills: ["Next.js 16 (App Router)", "React / TypeScript", "Node.js (Express)", "Python FastAPI", "RAG Pipelines", "QLoRA Fine-tuning", "Google Gemini API", "MongoDB / MySQL", "Tailwind CSS"],
    bio: "Kỹ sư Full-Stack giàu kinh nghiệm thực tập FPT Software và nghiên cứu AI quốc tế. Chuyên sâu Next.js 16, React, Node.js và xây dựng trợ lý AI RAG phản hồi chuẩn xác theo dữ liệu doanh nghiệp."
  },
  {
    id: "nguyen-thanh-loc",
    name: "Nguyễn Thành Lộc",
    role: "Backend Architect & AI Lead",
    title: "Microservices & GraphRAG Specialist",
    education: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 3.5/4.0), TOEIC 650, Coursera AI Agents & RAG Certified (2026)",
    experience: "AI Team Lead BrandHub Platform (FastAPI, GraphRAG Neo4j & ChromaDB), Team Lead UniNest (.NET 8), Backend .NET Intern FPT Software (C# Legacy Migration sang Clean Arch)",
    skills: [".NET 8 / ASP.NET Core", "C# Clean Architecture", "Python FastAPI", "Neo4j GraphRAG", "ChromaDB Vector Store", "PostgreSQL / SQL Server", "Entity Framework Core", "Agile / WBS"],
    bio: "GPA xuất sắc 3.5/4.0. Chuyên sâu về nguyên lý .NET Clean Architecture, chuyển đổi monolithic sang microservices và phân tích mạng dữ liệu phức tạp với GraphRAG."
  },
  {
    id: "le-tri-trung",
    name: "Lê Trí Trung",
    role: "Founder & Head of Technology",
    title: "Founder, Tech Lead & Engineering Manager",
    education: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 3.3/4.0 – 8.2/10), Học bổng Trao đổi Sinh viên Quốc tế tại Malaysia",
    experience: "Điều hành đội ngũ 5 kỹ sư SynapForge, CEO & Tech Lead The MC Hub (team 6 kỹ sư, 87 MCs), Solo Architect Biensovip.com (61 bảng CSDL, <8ms), Quán quân Hackathon CV 2026, Team Leader Chung kết InnoCodeCamp 2025",
    skills: ["Engineering Leadership", "Agile & WBS Delivery", "System Architecture & DDD", ".NET 8 Clean Arch", "Java 21 Spring Boot 3", "PostgreSQL (Index Tuning)", "Team Mentoring & Code Review"],
    bio: "Điều hành chiến lược công nghệ và quản trị đội ngũ kỹ nghệ tại SynapForge. Chuyên sâu phân rã bài toán kinh doanh thành WBS kỹ thuật, kiểm soát chất lượng mã nguồn, cam kết tiến độ SLA và thiết kế kiến trúc hệ thống chịu tải cao."
  },
  {
    id: "nguyen-chon-phuoc",
    name: "Nguyễn Chơn Phước",
    role: "Cloud DevOps & Infrastructure",
    title: "Distributed Systems & Infra Engineer",
    education: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 3.2/4.0), IELTS 5.5, Finalist InnoCodeCamp FPT 2024",
    experience: "Acronic Solutions Intern (vận hành thiết bị Anti-DDoS 24/7 qua Socket.IO và UDS Socket IPC), Backend Danatour (Java Spring Boot & PostgreSQL Tuning), V-Try 3D Fitting (Google MediaPipe)",
    skills: ["Java 21 / Spring Boot 3", "Docker & Compose", "Nginx Reverse Proxy", "Linux Server (Ubuntu)", "PostgreSQL (Query Indexing)", "Socket.IO & IPC", "Raspberry Pi IoT", "PM2"],
    bio: "Phụ trách hạ tầng Cloud, Docker, Nginx và tối ưu hóa cơ sở dữ liệu. Kinh nghiệm thực tế vận hành hệ thống phần cứng giám sát mạng 24/7 với cơ chế tự phục hồi sự cố."
  },
  {
    id: "nguyen-minh-tuan",
    name: "Nguyễn Minh Tuấn",
    role: "Enterprise .NET Developer",
    title: "Gov & Enterprise Integration Specialist",
    education: "Kỹ thuật phần mềm — FPT University Đà Nẵng (GPA 7.8/10.0), Chứng chỉ Microsoft Back-End Developer Professional (08/2026)",
    experience: "Team Leader VivuCar (ASP.NET Core 8, tích hợp API Dịch vụ công Bộ Công An, Hive AI Moderation), Fullstack .NET Intern FPT Software (C# Migration, tối ưu hóa SQL Stored Procedures nghìn dòng)",
    skills: [".NET 8 / ASP.NET Core", "C# Clean Architecture", "Entity Framework Core", "SQL Server (Stored Procedures & Triggers)", "Gov Portal APIs", "Hive AI Integration", "ClosedXML / iTextSharp", "Docker"],
    bio: "Sở hữu chứng chỉ chuyên nghiệp Microsoft. Chuyên sâu phát triển giải pháp doanh nghiệp trên .NET, tích hợp cổng dịch vụ công của cơ quan Nhà nước và tự động hóa báo cáo doanh nghiệp."
  }
];

export const IN_HOUSE_VENTURES = [
  {
    id: "brandhub",
    name: "BrandHub",
    category: "AI MarTech & Omnichannel Publisher",
    tagline: "Nền tảng trí tuệ thương hiệu & xuất bản nội dung tự động đa kênh",
    stats: "07 Microservices • 0% Lost Rate • 5 Platforms",
    techStack: ["Java 21", "Spring Boot 3", "Python FastAPI", "RabbitMQ DLQ", "Neo4j GraphRAG", "React 18"],
    description: "Giải pháp B2B SaaS toàn diện giúp các Agencies và Nhãn hàng quản trị chiến dịch truyền thông, tự động sinh nội dung theo Brand Voice và lập lịch đăng tự động lên Facebook, TikTok, Instagram, Threads, Zalo với 0% tỷ lệ rớt tin nhắn."
  },
  {
    id: "biensovip",
    name: "BienSoVip",
    category: "Luxury Marketplace & High-Performance Web",
    tagline: "Sàn giao dịch & đấu giá biển số xe định danh cao cấp tốc độ cao",
    stats: "61 Entities • Truy vấn < 8ms • Khớp cọc VietQR < 0.5s",
    techStack: [".NET 8 Clean Arch", "PostgreSQL GIN", "Redis Lock", "React 19", "VietQR Webhook", "DeepSeek AI"],
    description: "Sàn thương mại điện tử chuyên biệt tốc độ cao sở hữu 61 bảng thực thể, tối ưu lọc đa tiêu chí dưới 8ms, tự động hóa khớp cọc VietQR dưới 0.5s với 0đ chi phí cổng, tích hợp khóa phân tán chống bán trùng và trợ lý AI 24/7."
  }
];

export const OUTSOURCE_SERVICES = [
  {
    id: "enterprise-web",
    title: "Enterprise Web & Marketplace Platforms",
    subtitle: "Nền tảng thương mại điện tử & Cổng thông tin doanh nghiệp quy mô lớn",
    deliverables: ["Kiến trúc Clean Architecture .NET / Java", "Database 50+ bảng tối ưu chỉ mục", "Bảo mật đa tầng JWT & RBAC", "Tích hợp cổng thanh toán / xác thực dịch vụ"],
    timeline: "4 - 8 Tuần",
    bestFor: "Startups giai đoạn hạt giống, Doanh nghiệp cần sàn giao dịch tự động hóa."
  },
  {
    id: "highload-backend",
    title: "High-Load Backend & Microservices Migration",
    subtitle: "Thiết kế hệ thống phân tán chịu tải cao & Di chuyển hệ thống cũ",
    deliverables: ["API Gateway tập trung & Redis Rate Limiting", "Hàng đợi RabbitMQ với DLQ chống mất dữ liệu 100%", "Tái cấu trúc mã nguồn Legacy sang Dockerized", "Tối ưu hóa Database Query Latency"],
    timeline: "3 - 6 Tuần",
    bestFor: "Hệ thống đang bị nghẽn tải, các doanh nghiệp cần tách monolithic sang microservices."
  },
  {
    id: "ai-rag-integration",
    title: "Custom AI Agents, RAG & Fine-Tuned Models",
    subtitle: "Tích hợp Trí tuệ Nhân tạo thực chiến vào lõi nghiệp vụ kinh doanh",
    deliverables: ["Hệ thống RAG tra cứu tri thức nội bộ không ảo giác", "AI phân tích giọng nói / hình ảnh / tài liệu", "Fine-tuning mô hình ngôn ngữ mã nguồn mở chạy On-Premise", "API Microservice AI hiệu năng cao với FastAPI"],
    timeline: "2 - 5 Tuần",
    bestFor: "Các sản phẩm cần tính năng AI độc quyền, giảm 80% chi phí gọi API bên thứ ba."
  },
  {
    id: "turnkey-mvp",
    title: "Turnkey MVP Delivery for Founders",
    subtitle: "Từ ý tưởng trên giấy đến sản phẩm hoàn chỉnh ra mắt trong 30-60 ngày",
    deliverables: ["Đặc tả kỹ thuật (Technical Spec) & Database Schema", "UI/UX hiện đại theo chuẩn quốc tế", "Phát triển Full-Stack theo chuẩn Agile/Scrum", "Deploy Production lên Cloud & Bàn giao toàn bộ source code"],
    timeline: "30 - 60 Ngày",
    bestFor: "Founders cần sản phẩm thần tốc để demo nhà đầu tư hoặc thử nghiệm thị trường."
  }
];
