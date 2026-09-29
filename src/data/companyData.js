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
  email: "contact@synapforge.dev",
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
    { value: "05+", label: "Kỹ sư tinh hoa FPT / FSoft", sub: "100% chuyên sâu thực chiến" },
    { value: "02", label: "Trụ cột Sản phẩm Lõi (Flagship)", sub: "BrandHub & BienSoVip" },
    { value: "0%", label: "Tỷ lệ mất tin nhắn (DLQ)", sub: "Bảo đảm tin cậy RabbitMQ" },
    { value: "30-60", label: "Ngày bàn giao MVP", sub: "Tốc độ đưa ý tưởng ra thị trường" }
  ]
};

export const CORE_TEAM = [
  {
    id: "le-tri-trung",
    name: "Lê Trí Trung",
    role: "Founder & Head of Technology",
    title: "Tech Lead & System Architect",
    education: "Kỹ thuật phần mềm - FPT University Đà Nẵng (GPA 3.3/4.0 - 8.2/10)",
    experience: "FPT Software Intern, Solo Architect Biensovip.com, CEO The MC Hub, Quán quân Hackathon CV 2026, Đồng tác giả nghiên cứu ICTA 2026",
    skills: ["Java Spring Boot", ".NET 8 Clean Arch", "Python FastAPI", "React 19", "PostgreSQL", "Docker", "System Design"],
    bio: "Tổng đạo diễn kiến trúc hệ thống và chiến lược kỹ thuật. Tự tay thiết kế các sàn giao dịch thương mại lớn và hệ thống EdTech phục vụ hàng chục ngàn người dùng."
  },
  {
    id: "ha-van-an",
    name: "Hà Văn Ân",
    role: "Senior Full-Stack & AI Integrator",
    title: "AI Pipeline & Modern Web Lead",
    education: "Kỹ thuật phần mềm - FPT University Đà Nẵng",
    experience: "FPT Software Intern (Inventory System), Lead Dev STEMGO.net, Đồng tác giả nghiên cứu AI ThreadLearn (ICTA 2026)",
    skills: ["Next.js 16", "React", "TypeScript", "Node.js", "FastAPI", "QLoRA", "RAG Pipelines", "Gemini API"],
    bio: "Chuyên gia phát triển ứng dụng Next.js tốc độ cao và tích hợp các mô hình ngôn ngữ lớn (LLM), xây dựng RAG pipelines loại trừ hallucination."
  },
  {
    id: "nguyen-thanh-loc",
    name: "Nguyễn Thành Lộc",
    role: "Backend Architect & AI Lead",
    title: "Microservices & GraphRAG Specialist",
    education: "Kỹ thuật phần mềm - FPT University Đà Nẵng (GPA 3.5/4.0), TOEIC 650",
    experience: "FPT Software Intern (C# Migration), Team Lead UniNest, AI Team Lead BrandHub Platform",
    skills: [".NET 8", "ASP.NET Core", "FastAPI", "Neo4j GraphRAG", "ChromaDB", "Clean Architecture", "PostgreSQL"],
    bio: "Chuyên sâu về kiến trúc sạch Clean Architecture, di chuyển hệ thống legacy sang microservices hiện đại và phân tích mạng dữ liệu phức tạp với GraphRAG."
  },
  {
    id: "nguyen-chon-phuoc",
    name: "Nguyễn Chơn Phước",
    role: "Java Core & Cloud DevOps",
    title: "Distributed Systems & Infra Engineer",
    education: "Kỹ thuật phần mềm - FPT University Đà Nẵng (GPA 3.2/4.0), IELTS 5.5",
    experience: "Acronic Solutions (Anti-DDoS Dashboard 24/7), Danatour Backend, V-Try 3D Web & Computer Vision",
    skills: ["Java 21", "Spring Boot 3", "Docker", "Nginx", "Linux Ops", "Socket.IO", "Realtime IPC"],
    bio: "Chịu trách nhiệm về hạ tầng chịu tải, container hóa Docker, tối ưu hóa database indexing và đảm bảo hệ thống vận hành 24/7 với độ trễ tối thiểu."
  },
  {
    id: "nguyen-minh-tuan",
    name: "Nguyễn Minh Tuấn",
    role: "Enterprise .NET Backend Engineer",
    title: "Gov & Enterprise Integration Specialist",
    education: "Kỹ thuật phần mềm - FPT University Đà Nẵng (GPA 7.8/10), Microsoft Certified Back-End Pro",
    experience: "FPT Software Intern (C# & SQL Stored Procedures), Team Lead VivuCar (Thuê xe tự lái & API Bộ Công An)",
    skills: [".NET 8", "C#", "Entity Framework Core", "SQL Server", "Gov Portal APIs", "Hive AI", "Docker"],
    bio: "Chuyên gia về các giải pháp doanh nghiệp chuẩn mực Microsoft, tích hợp cổng thông tin dịch vụ công và tự động hóa quy trình kiểm duyệt."
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
