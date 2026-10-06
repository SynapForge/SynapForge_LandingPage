import React, { useState } from 'react';
import { Zap, Layers } from 'lucide-react';
import { pick } from '../data/i18n';

/**
 * SideStreams - Live Vertical Streaming Rails (ultra-wide only)
 * 1. Boundary Guard: min-[1800px] so 280px rails never overlap the 1180px content (≥30px gap).
 * 2. Auto-scroll: CSS marqueeY over the list rendered 4× (translateY -50% = 2 copies),
 *    so even 3 tall cards fill the track without a gap; pauses on hover, respects reduced-motion.
 * 3. Z-order: rails at z-30, SynapseCanvas + ticker (z-40) slide over them.
 * 4. Interactive Docking: toggle minimize/maximize.
 */

// Left: flagship ventures (images verified against real screenshots)
const leftProjects = [
  {
    id: 'brandhub', tag: 'FLAGSHIP', title: 'BrandHub AI MarTech', img: '/stream/brandhub.jpg',
    line: { vi: 'Tự viết & đăng bài lên 5 MXH', en: 'Auto-writes & posts to 5 social platforms' },
    stat: { vi: '0% mất bài đăng', en: '0% lost posts' },
  },
  {
    id: 'biensovip', tag: 'MARKETPLACE', title: 'BienSoVip', img: '/stream/biensovip.jpg',
    line: { vi: 'Sàn biển số — khớp cọc VietQR 0.5s', en: 'Plate marketplace — VietQR match in 0.5s' },
    stat: { vi: 'Truy vấn < 8ms', en: 'Queries < 8ms' },
  },
  {
    id: 'threadlearn', tag: 'RESEARCH', title: 'ThreadLearn AI', img: '/stream/threadlearn.jpg',
    line: { vi: 'AI tự tìm & sửa lỗi code', en: 'AI that finds & fixes code bugs' },
    stat: { vi: 'Nghiên cứu ICTA 2026', en: 'ICTA 2026 research' },
  },
];

// Right: packages
const rightServices = [
  {
    id: 'starter_mvp', tag: '1 DEV', badge: { vi: 'Tiết kiệm', en: 'Budget' }, img: '/stream/pkg-mvp.jpg',
    title: { vi: 'Gói MVP Khởi Nghiệp', en: 'Startup MVP' },
    line: { vi: 'Web bán hàng chuẩn mobile, SEO, bảo hành 6 tháng', en: 'Mobile-ready store, SEO, 6-month warranty' },
    price: '11.500.000₫',
  },
  {
    id: 'fast_mvp', tag: '2 DEVS', badge: { vi: 'Đề xuất', en: 'Popular' }, img: '/stream/pkg-fast.jpg',
    title: { vi: 'Gói Tốc Hành', en: 'Fast Track' },
    line: { vi: 'Thanh toán VietQR tự khớp, báo đơn Telegram < 30s', en: 'VietQR auto-match, Telegram order alerts < 30s' },
    price: '18.500.000₫',
  },
  {
    id: 'enterprise_full', tag: '5 DEVS', badge: { vi: 'Toàn diện', en: 'Full power' }, img: '/stream/pkg-enterprise.jpg',
    title: { vi: 'Gói Enterprise', en: 'Enterprise' },
    line: { vi: 'Sàn TMĐT lớn, trợ lý AI, bàn giao source', en: 'Large marketplace, AI assistant, full source handover' },
    price: '33.000.000₫',
  },
];

const x4 = (arr) => [...arr, ...arr, ...arr, ...arr];

function Card({ href, img, alt, tag, badge, title, line, foot }) {
  return (
    <a
      href={href}
      className="relative rounded-[2px] bg-white border border-[#E4DAC6] hover:border-[#FF5500] transition-colors duration-200 block group/card overflow-hidden"
    >
      <img src={img} alt={alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top border-b border-[#E4DAC6]" />
      <div className="p-3.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono text-[#FF5500] font-bold tracking-wider">{tag}</span>
          {badge && (
            <span className="text-[9.5px] font-mono bg-[#FF5500]/10 text-[#FF5500] px-1.5 py-0.5 rounded-[2px] font-bold">{badge}</span>
          )}
        </div>
        <h4 className="text-[14px] font-bold text-[#1D1510] group-hover/card:text-[#FF5500] transition-colors mb-1 font-mono leading-snug">
          {title}
        </h4>
        <p className="text-[12px] text-[#6E5F52] leading-snug">{line}</p>
        <div className="mt-2.5 pt-2 border-t border-[#E4DAC6] text-[11.5px] font-mono font-bold text-[#1D1510]">{foot}</div>
      </div>
    </a>
  );
}

export default function SideStreams({ lang = 'vi' }) {
  const [collapsed, setCollapsed] = useState(false);
  const p = (o) => pick(lang, o.vi, o.en);

  return (
    <div className="hidden min-[1800px]:block group/stream">
      {/* LEFT STREAM: Projects */}
      <div
        className={`fixed top-24 left-6 w-[280px] z-30 flex flex-col gap-3 transition-all duration-300 pointer-events-auto ${
          collapsed ? '-translate-x-[310px]' : 'translate-x-0'
        }`}
      >
        <div className="px-3 py-2 rounded-[2px] bg-white border border-[#1D1510] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase text-[#1D1510]">
              {lang === 'en' ? 'Shipped' : 'Thực chiến'}
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#FF5500] bg-[#FF5500]/10 px-1.5 py-0.5 rounded-[2px] border border-[#FF5500]/30 font-bold">
            VENTURES
          </span>
        </div>

        <div className="relative h-[calc(100vh-150px)] overflow-hidden mask-gradient-y">
          <div
            className="flex flex-col gap-3 animate-marquee-y group-hover/stream:[animation-play-state:paused] will-change-transform"
            style={{ animationDuration: '44s' }}
          >
            {x4(leftProjects).map((it, idx) => (
              <Card key={idx} href={`#/san-pham/${it.id}`} img={it.img} alt={it.title} tag={it.tag}
                title={it.title} line={p(it.line)} foot={<span className="text-[#E04B00]">{p(it.stat)}</span>} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT STREAM: Packages */}
      <div
        className={`fixed top-24 right-6 w-[280px] z-30 flex flex-col gap-3 transition-all duration-300 pointer-events-auto ${
          collapsed ? 'translate-x-[310px]' : 'translate-x-0'
        }`}
      >
        <div className="px-3 py-2 rounded-[2px] bg-white border border-[#1D1510] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-[#FF5500]" />
            <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase text-[#1D1510]">
              {lang === 'en' ? 'Packages' : 'Gói dịch vụ'}
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#6E5F52] bg-[#F4EFE4] px-1.5 py-0.5 rounded-[2px] font-bold">
            PRICING
          </span>
        </div>

        <div className="relative h-[calc(100vh-150px)] overflow-hidden mask-gradient-y">
          <div
            className="flex flex-col gap-3 animate-marquee-y group-hover/stream:[animation-play-state:paused] will-change-transform"
            style={{ animationDuration: '50s' }}
          >
            {x4(rightServices).map((it, idx) => (
              <Card key={idx} href="#contact" img={it.img} alt={p(it.title)} tag={it.tag} badge={p(it.badge)}
                title={p(it.title)} line={p(it.line)}
                foot={<span className="flex justify-between"><span className="text-[#6E5F52] font-normal">{lang === 'en' ? 'Price' : 'Chi phí'}</span><span className="text-[#FF5500]">{it.price}</span></span>} />
            ))}
          </div>
        </div>
      </div>

      {/* Docking toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed bottom-6 right-6 z-40 p-2 rounded-[2px] bg-white text-[#1D1510] border border-[#1D1510] hover:bg-[#FF5500] hover:text-white transition-colors pointer-events-auto text-[10px] font-mono flex items-center gap-1"
        title={collapsed ? 'Show streams' : 'Hide streams'}
      >
        <Layers className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? (collapsed ? 'Show streams' : 'Hide streams') : (collapsed ? 'Hiện thanh' : 'Ẩn thanh')}</span>
      </button>
    </div>
  );
}
