import React, { useState } from 'react';
import { Rocket, Zap, Layers } from 'lucide-react';

/**
 * SideStreams - Live Vertical Streaming Rails
 * Tailored for Mockup B (Technical Spec, light):
 * 1. Boundary Guard: only on ultra-wide viewports (min-[1760px]) so the 1180px content is never overlapped.
 * 2. Auto-scroll: CSS marqueeY loop (content duplicated once), pauses on hover, respects reduced-motion.
 * 3. Technical Aesthetic: JetBrains Mono, 2px radius, ink/line borders, corner ticks — no glass blur/shadow.
 * 4. Z-order: rails sit at z-30, the SynapseCanvas ("phần synap") and horizontal ticker ("thanh scroll ngang") sit
 *    above (z-40) so the rails slide behind them; visible from the hero down.
 * 5. Interactive Docking: toggle minimize/maximize.
 */
export default function SideStreams({ t, theme = 'dark' }) {
  const [collapsed, setCollapsed] = useState(false);

  // Left Stream: Flagship Ventures & Systems We Engineered
  const leftProjects = [
    {
      id: "brandhub",
      tag: "FLAGSHIP",
      title: "BrandHub AI MarTech",
      stat: "07 Microservices • 0% Lost",
      tech: "Java 21 • Spring 3 • RabbitMQ",
      highlight: "Tự động xuất bản 5 MXH • GraphRAG",
      href: "#ventures"
    },
    {
      id: "biensovip",
      tag: "HIGH-LOAD",
      title: "BienSoVip Luxury Market",
      stat: "61 Entities • Query < 8ms",
      tech: ".NET 8 Clean Arch • Postgres",
      highlight: "Khớp VietQR 0.5s • Redis Lock 15p",
      href: "#ventures"
    },
    {
      id: "the-mc-hub",
      tag: "EDTECH",
      title: "The MC Hub Academy",
      stat: "10,000+ Học viên online",
      tech: "React 19 • Node.js • Live Stream",
      highlight: "Nền tảng đào tạo MC & Diễn thuyết",
      href: "#ventures"
    },
    {
      id: "threadlearn",
      tag: "RESEARCH",
      title: "ThreadLearn AI Engine",
      stat: "ICTA 2026 Researched",
      tech: "FastAPI • QLoRA • Deep RAG",
      highlight: "Học tập thích ứng cá nhân hóa AI",
      href: "#ventures"
    },
    {
      id: "anti-ddos",
      tag: "INFRA SEC",
      title: "Anti-DDoS 24/7 Shield",
      stat: "Phòng thủ hạ tầng Cloud",
      tech: "Docker • Nginx • Linux Kernel",
      highlight: "Bảo vệ cổng giao dịch tải đỉnh",
      href: "#ventures"
    }
  ];

  // Right Stream: Production Engineering Packages & SaaS Modules
  const rightServices = [
    {
      id: "starter_mvp",
      tag: "1 DEV • 11.5M",
      title: "Gói MVP Khởi Nghiệp",
      desc: "Web chuẩn nhận diện, 100% mobile, SEO & bảo hành 6 tháng",
      price: "11.500.000₫",
      badge: "Tiết kiệm",
      href: "#pricing"
    },
    {
      id: "fast_mvp",
      tag: "2 DEVS • 18.5M",
      title: "Gói Tốc Hành (2 Devs)",
      desc: "Frontend + Backend, VietQR 0.5s, Telegram Webhook <30s",
      price: "18.500.000₫",
      badge: "Đề xuất HOT",
      href: "#pricing"
    },
    {
      id: "enterprise_full",
      tag: "FULL 5 DEVS",
      title: "Gói Toàn Diện Enterprise",
      desc: "Sàn TMĐT lớn, Trợ lý AI DeepSeek, Source Code & BH 24/7",
      price: "33.000.000₫",
      badge: "Full Power",
      href: "#pricing"
    },
    {
      id: "saas_vietqr",
      tag: "MODULE SAAS",
      title: "VietQR Động Khớp 0.5s",
      desc: "Webhook ngân hàng đối soát tức thì 0đ phí trung gian",
      price: "+2.5M Module",
      badge: "#1 Best",
      href: "#pricing"
    },
    {
      id: "saas_redis",
      tag: "MODULE SAAS",
      title: "Khóa Phân Tán Redis Lock",
      desc: "Khóa giữ chỗ 15 phút chống bán trùng sản phẩm độc bản",
      price: "+2.0M Module",
      badge: "High-Load",
      href: "#pricing"
    },
    {
      id: "saas_omni",
      tag: "MODULE SAAS",
      title: "Đăng Bài 5 MXH Tự Động",
      desc: "FB, TikTok, IG, Threads, Zalo qua RabbitMQ DLQ",
      price: "+4.5M Module",
      badge: "MarTech",
      href: "#pricing"
    }
  ];

  return (
    <div className="hidden min-[1760px]:block group/stream">
      {/* LEFT STREAM: Live Engineering Projects */}
      <div 
        className={`fixed top-24 left-4 xl:left-6 w-[240px] z-30 flex flex-col gap-2.5 transition-all duration-300 pointer-events-auto ${
          collapsed ? '-translate-x-[260px]' : 'translate-x-0'
        }`}
      >
        {/* Header Bar */}
        <div className="px-3 py-2 rounded-[2px] bg-white border border-[#1D1510] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#1D1510]">
              {t?.sideStreams?.leftHeader || "THỰC CHIẾN"}
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#FF5500] bg-[#FF5500]/10 px-1.5 py-0.5 rounded-[2px] border border-[#FF5500]/30 font-bold">
            VENTURES
          </span>
        </div>

        {/* Continuous Auto-Scrolling Track */}
        <div className="relative h-[calc(100vh-145px)] overflow-hidden mask-gradient-y">
          <div
            className="flex flex-col gap-2.5 animate-marquee-y group-hover/stream:[animation-play-state:paused] will-change-transform"
            style={{ animationDuration: '30s' }}
          >
            {[...leftProjects, ...leftProjects].map((item, idx) => (
              <a
                href={item.href}
                key={idx}
                className="relative p-3 rounded-[2px] bg-white border border-[#E4DAC6] hover:border-[#FF5500] transition-colors duration-200 block group/card"
              >
                {/* Tech corner accent */}
                <div className="absolute top-1 right-1 text-[8px] font-mono text-gray-300 dark:text-gray-700 select-none group-hover/card:text-[#FF5500] transition-colors">
                  +
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-[#FF5500] font-bold tracking-wider">
                    {item.tag}
                  </span>
                  <Rocket className="w-3 h-3 text-gray-400 group-hover/card:text-[#FF5500] transition-colors" />
                </div>
                <h4 className="text-xs font-bold text-inherit group-hover/card:text-[#FF5500] transition-colors mb-1 font-mono">
                  {item.title}
                </h4>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                  {item.stat}
                </div>
                <div className="text-[9.5px] font-mono text-gray-500 dark:text-gray-400 mb-1 leading-tight">
                  {item.tech}
                </div>
                <div className="text-[10.5px] text-gray-600 dark:text-gray-300 leading-snug pt-1.5 border-t border-black/5 dark:border-white/5">
                  {item.highlight}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT STREAM: Pricing Packages & Capabilities */}
      <div 
        className={`fixed top-24 right-4 xl:right-6 w-[240px] z-30 flex flex-col gap-2.5 transition-all duration-300 pointer-events-auto ${
          collapsed ? 'translate-x-[260px]' : 'translate-x-0'
        }`}
      >
        {/* Header Bar */}
        <div className="px-3 py-2 rounded-[2px] bg-white border border-[#1D1510] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-[#FF5500]" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#1D1510]">
              {t?.sideStreams?.rightHeader || "GÓI & SAAS"}
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#6E5F52] bg-[#F4EFE4] px-1.5 py-0.5 rounded-[2px] font-bold">
            MODULES
          </span>
        </div>

        {/* Continuous Auto-Scrolling Track */}
        <div className="relative h-[calc(100vh-145px)] overflow-hidden mask-gradient-y">
          <div
            className="flex flex-col gap-2.5 animate-marquee-y group-hover/stream:[animation-play-state:paused] will-change-transform"
            style={{ animationDuration: '36s' }}
          >
            {[...rightServices, ...rightServices].map((item, idx) => (
              <a
                href={item.href}
                key={idx}
                className="relative p-3 rounded-[2px] bg-white border border-[#E4DAC6] hover:border-[#FF5500] transition-colors duration-200 block group/card"
              >
                {/* Tech corner accent */}
                <div className="absolute top-1 right-1 text-[8px] font-mono text-gray-300 dark:text-gray-700 select-none group-hover/card:text-[#FF5500] transition-colors">
                  +
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-[#FF5500] font-bold tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-[9px] font-mono bg-[#FF5500]/10 text-[#FF5500] px-1.5 py-0.5 rounded font-bold">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-inherit group-hover/card:text-[#FF5500] transition-colors mb-1 font-mono">
                  {item.title}
                </h4>
                <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug mb-2">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between pt-1.5 border-t border-black/5 dark:border-white/5 text-[10.5px] font-mono">
                  <span className="text-gray-500 dark:text-gray-400">Chi phí:</span>
                  <span className="text-inherit font-bold text-[#FF5500]">{item.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Docking toggle control (Bottom Right corner helper) */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed bottom-6 right-6 z-40 p-2 rounded-[2px] bg-white text-[#1D1510] border border-[#1D1510] hover:bg-[#FF5500] hover:text-white transition-colors pointer-events-auto text-[10px] font-mono flex items-center gap-1"
        title={collapsed ? "Mở rộng 2 thanh dòng chảy SideStreams" : "Thu gọn 2 thanh dòng chảy SideStreams"}
      >
        <Layers className="w-3.5 h-3.5" />
        <span>{collapsed ? "Show Streams" : "Hide Streams"}</span>
      </button>
    </div>
  );
}
