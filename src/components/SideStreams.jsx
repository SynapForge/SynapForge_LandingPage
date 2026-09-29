import React from 'react';
import { 
  Rocket, ShieldCheck, Zap, Sparkles, Database, 
  Globe, Server, Cpu, CheckCircle2, ChevronRight, Layers, ArrowUpRight 
} from 'lucide-react';

export default function SideStreams({ t, theme }) {
  // Left Stream: Projects / Ventures & Features We Built
  const leftProjects = [
    {
      id: "brandhub",
      tag: "FLAGSHIP VENTURE",
      title: "BrandHub AI MarTech",
      stat: "07 Microservices • 0% Lost",
      tech: "Java 21 • Spring Boot 3 • RabbitMQ DLQ",
      highlight: "Tự động xuất bản 5 MXH • Neo4j GraphRAG"
    },
    {
      id: "biensovip",
      tag: "FLAGSHIP VENTURE",
      title: "BienSoVip Luxury Market",
      stat: "61 Entities • Query < 8ms",
      tech: ".NET 8 Clean Arch • PostgreSQL GIN",
      highlight: "Khớp cọc VietQR < 0.5s (0đ phí) • Redis Lock 15p"
    },
    {
      id: "the-mc-hub",
      tag: "EDTECH PRODUCTION",
      title: "The MC Hub Academy",
      stat: "10,000+ Học viên online",
      tech: "React 19 • Node.js • Live Stream",
      highlight: "Nền tảng đào tạo MC & Diễn thuyết quy mô lớn"
    },
    {
      id: "threadlearn",
      tag: "ICTA 2026 RESEARCH",
      title: "ThreadLearn AI Engine",
      stat: "Công trình Nghiên cứu Khoa học",
      tech: "Python FastAPI • QLoRA • RAG",
      highlight: "Học tập thích ứng cá nhân hóa không ảo giác"
    },
    {
      id: "anti-ddos",
      tag: "SECURITY INFRA",
      title: "Anti-DDoS 24/7 Shield",
      stat: "Phòng thủ hạ tầng Cloud",
      tech: "Docker • Nginx • Linux Kernel Ops",
      highlight: "Bảo vệ các cổng giao dịch trước tấn công tải lớn"
    }
  ];

  // Right Stream: Service Packages & SaaS Capabilities
  const rightServices = [
    {
      id: "starter_mvp",
      tag: "GÓI 1 DEV • 11.5M",
      title: "Gói MVP Khởi Nghiệp",
      desc: "Web chuẩn nhận diện, tương thích 100% mobile, SEO Google & bảo hành 6 tháng",
      price: "11.500.000₫",
      badge: "Tiết kiệm nhất"
    },
    {
      id: "fast_mvp",
      tag: "GÓI 2 DEVS • 18.5M",
      title: "Gói MVP Tốc Hành (2 Devs)",
      desc: "Frontend + Backend song song, VietQR động khớp 0.5s, Telegram Webhook <30s",
      price: "18.500.000₫",
      badge: "ĐỀ XUẤT HOT"
    },
    {
      id: "enterprise_full",
      tag: "FULL 5 DEVS • 33.0M",
      title: "Gói Chuyên Nghiệp Toàn Diện",
      desc: "Sàn TMĐT lớn, Trợ lý AI DeepSeek 24/7, Full Source Code, BH 12 tháng 24/7",
      price: "33.000.000₫",
      badge: "Đầy đủ nhất"
    },
    {
      id: "saas_vietqr",
      tag: "MODULE SAAS",
      title: "VietQR Động Khớp Cọc 0.5s",
      desc: "Webhook ngân hàng đối soát tức thì 0đ phí cổng trung gian",
      price: "+2.5M Module",
      badge: "Bán chạy #1"
    },
    {
      id: "saas_redis",
      tag: "MODULE SAAS",
      title: "Khóa Phân Tán Redis Lock",
      desc: "Khóa giữ chỗ 15 phút chống bán trùng cho sản phẩm độc bản",
      price: "+2.0M Module",
      badge: "High-Load"
    },
    {
      id: "saas_omni",
      tag: "MODULE SAAS",
      title: "Đăng Bài 5 Mạng Xã Hội",
      desc: "Lập lịch đăng tự động FB, TikTok, Insta, Threads, Zalo qua RabbitMQ DLQ",
      price: "+4.5M Module",
      badge: "MarTech"
    }
  ];

  return (
    <div className="hidden 2xl:block pointer-events-none group/stream">
      {/* LEFT STREAM: Projects We Built */}
      <div className="fixed top-24 left-6 w-[270px] z-30 flex flex-col gap-3 pointer-events-auto">
        <div className="px-3.5 py-2 rounded-full glass-panel flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-wider text-inherit uppercase">{t?.sideStreams?.leftHeader || "DỰ ÁN ĐÃ THỰC CHIẾN"}</span>
          </div>
          <span className="text-[9px] font-mono text-[#FF5500] bg-[#FF5500]/10 px-1.5 py-0.5 rounded border border-[#FF5500]/20 font-bold">{t?.sideStreams?.leftTag || "PROJECTS"}</span>
        </div>

        {/* Continuous Auto-Scrolling Track */}
        <div className="relative h-[calc(100vh-140px)] overflow-hidden mask-gradient-y">
          <div 
            className="flex flex-col gap-3 animate-marquee-y group-hover/stream:animation-pause"
            style={{ animationDuration: '30s' }}
          >
            {[...leftProjects, ...leftProjects].map((item, idx) => (
              <a
                href="#ventures"
                key={idx}
                className="p-3.5 rounded-2xl glass-panel hover:border-[#FF5500]/60 transition-all duration-200 block shadow-md group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-[#FF5500] font-bold tracking-wider">{item.tag}</span>
                  <Rocket className="w-3 h-3 text-gray-400 group-hover:text-[#FF5500] transition-colors" />
                </div>
                <h4 className="text-xs font-bold text-inherit group-hover:text-[#FF5500] transition-colors mb-1">{item.title}</h4>
                <div className="text-[10px] font-mono text-emerald-500 dark:text-emerald-400 mb-1">{item.stat}</div>
                <div className="text-[10px] font-mono text-gray-500 dark:text-gray-400 mb-1 leading-tight">{item.tech}</div>
                <div className="text-[11px] text-gray-600 dark:text-gray-300 leading-snug pt-1.5 border-t border-black/5 dark:border-white/5">{item.highlight}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT STREAM: Service Packages */}
      <div className="fixed top-24 right-6 w-[270px] z-30 flex flex-col gap-3 pointer-events-auto">
        <div className="px-3.5 py-2 rounded-full glass-panel flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
            <span className="text-[10px] font-mono font-bold tracking-wider text-inherit uppercase">{t?.sideStreams?.rightHeader || "GÓI DỊCH VỤ & SAAS"}</span>
          </div>
          <span className="text-[9px] font-mono text-gray-500 dark:text-gray-300 bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded">{t?.sideStreams?.rightTag || "PACKAGES"}</span>
        </div>

        {/* Continuous Auto-Scrolling Track */}
        <div className="relative h-[calc(100vh-140px)] overflow-hidden mask-gradient-y">
          <div 
            className="flex flex-col gap-3 animate-marquee-y group-hover/stream:animation-pause"
            style={{ animationDuration: '34s' }}
          >
            {[...rightServices, ...rightServices].map((item, idx) => (
              <a
                href="#pricing"
                key={idx}
                className="p-3.5 rounded-2xl glass-panel hover:border-[#FF5500]/60 transition-all duration-200 block shadow-md group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-[#FF5500] font-bold tracking-wider">{item.tag}</span>
                  <span className="text-[9px] font-mono bg-[#FF5500]/10 text-[#FF5500] px-1.5 py-0.5 rounded font-bold">{item.badge}</span>
                </div>
                <h4 className="text-xs font-bold text-inherit group-hover:text-[#FF5500] transition-colors mb-1">{item.title}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mb-2">{item.desc}</p>
                <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-[11px] font-mono">
                  <span className="text-gray-500 dark:text-gray-400">{t?.sideStreams?.costLabel || "Chi phí:"}</span>
                  <span className="text-inherit font-bold">{item.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
