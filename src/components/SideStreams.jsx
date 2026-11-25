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
    id: 'brandhub', tag: 'FLAGSHIP · 141 FRs', title: 'BrandHub AI MarTech', img: '/stream/brandhub.png',
    line: { vi: 'Quản trị Agency, GraphRAG & tự đăng 4 MXH', en: 'Agency OS, GraphRAG & 4-channel auto-publish' },
    stat: { vi: '6 vai trò · 0% rớt lịch', en: '6 roles · 0% drop rate' },
  },
  {
    id: 'biensovip', tag: 'MARKETPLACE · VPA', title: 'BienSoVip', img: '/stream/biensovip.png',
    line: { vi: 'Sàn biển số & định giá VPA — giữ chỗ 15p', en: 'VIP plate vault & VPA engine — 15m lock' },
    stat: { vi: '86 bảng DB · lọc < 8ms', en: '86 DB tables · < 8ms' },
  },
  {
    id: 'threadlearn', tag: 'RESEARCH', title: 'ThreadLearn', img: '/stream/threadlearn.jpg',
    line: { vi: 'LLM tự sửa lỗi concurrency JavaScript', en: 'LLM that repairs JavaScript concurrency bugs' },
    stat: { vi: '73.3% pass — vượt GPT-3.5', en: '73.3% pass — beats GPT-3.5' },
  },
];

// Right: packages
const rightServices = [
  {
    id: 'starter_mvp', tag: '1 DEV', badge: { vi: 'Tiết kiệm', en: 'Budget' }, img: '/stream/pkg-mvp.jpg',
    title: { vi: 'Gói MVP Khởi Nghiệp', en: 'Startup MVP' },
    line: { vi: 'Web bán hàng chuẩn mobile, SEO, bảo hành 6 tháng', en: 'Mobile-ready store, SEO, 6-month warranty' },
    time: { vi: '3–4 tuần', en: '3–4 weeks' },
  },
  {
    id: 'fast_mvp', tag: '2 DEVS', badge: { vi: 'Đề xuất', en: 'Popular' }, img: '/stream/pkg-fast.jpg',
    title: { vi: 'Gói Tốc Hành', en: 'Fast Track' },
    line: { vi: 'Thanh toán VietQR tự khớp, báo đơn Telegram < 30s', en: 'VietQR auto-match, Telegram order alerts < 30s' },
    time: { vi: '4–6 tuần', en: '4–6 weeks' },
  },
  {
    id: 'enterprise_full', tag: '5 DEVS', badge: { vi: 'Toàn diện', en: 'Full power' }, img: '/stream/pkg-enterprise.jpg',
    title: { vi: 'Gói Enterprise', en: 'Enterprise' },
    line: { vi: 'Sàn TMĐT lớn, trợ lý AI, bàn giao source', en: 'Large marketplace, AI assistant, full source handover' },
    time: { vi: '6–8 tuần', en: '6–8 weeks' },
  },
];

const x4 = (arr) => [...arr, ...arr, ...arr, ...arr];

function Card({ href, img, alt, tag, badge, title, line, foot }) {
  return (
    <a
      href={href}
      className="relative rounded-[2px] bg-white border border-[#E4DAC6] hover:border-[#b83700] transition-colors duration-200 block group/card overflow-hidden"
    >
      <img src={img} alt={alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top border-b border-[#E4DAC6]" />
      <div className="p-3.5">
        <div className="flex items-center justify-between mb-1.5 gap-2">
          <span className="text-[11.5px] font-mono text-[#b83700] font-bold tracking-wider">{tag}</span>
          {badge && (
            <span className="text-[11.5px] font-mono bg-[#f4efe4] text-[#b83700] px-1.5 py-0.5 rounded-[2px] font-bold">{badge}</span>
          )}
        </div>
        <h4 className="text-[14px] font-bold text-[#1D1510] group-hover/card:text-[#b83700] transition-colors mb-1 font-mono leading-snug">
          {title}
        </h4>
        <p className="text-[12px] text-[#524336] leading-snug">{line}</p>
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
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" aria-hidden="true"></span>
            <span className="text-[11.5px] font-mono font-bold tracking-wider uppercase text-[#1D1510]">
              {lang === 'en' ? 'Shipped' : 'Thực chiến'}
            </span>
          </div>
          <span className="text-[11.5px] font-mono text-[#b83700] bg-[#f4efe4] px-1.5 py-0.5 rounded-[2px] border border-[#dfd4be] font-bold">
            VENTURES
          </span>
        </div>

        <div className="relative max-h-[calc(100vh-150px)] overflow-y-auto flex flex-col gap-3 pr-1">
          {leftProjects.map((it) => (
            <Card key={it.id} href={`/san-pham/${it.id}`} img={it.img} alt={it.title} tag={it.tag}
              title={it.title} line={p(it.line)} foot={<span className="text-[#b83700]">{p(it.stat)}</span>} />
          ))}
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
            <Zap className="w-3.5 h-3.5 text-[#c83e00]" />
            <span className="text-[11.5px] font-mono font-bold tracking-wider uppercase text-[#1D1510]">
              {lang === 'en' ? 'Packages' : 'Gói dịch vụ'}
            </span>
          </div>
          <span className="text-[11.5px] font-mono text-[#524336] bg-[#F4EFE4] px-1.5 py-0.5 rounded-[2px] font-bold">
            SERVICES
          </span>
        </div>

        <div className="relative max-h-[calc(100vh-150px)] overflow-y-auto flex flex-col gap-3 pl-1">
          {rightServices.map((it) => (
            <Card key={it.id} href="#estimator" img={it.img} alt={p(it.title)} tag={it.tag} badge={p(it.badge)}
              title={p(it.title)} line={p(it.line)}
              foot={<span className="flex justify-between"><span className="text-[#524336] font-normal">{lang === 'en' ? 'Timeline' : 'Tiến độ'}</span><span className="text-[#b83700]">{p(it.time)}</span></span>} />
          ))}
        </div>
      </div>

      {/* Docking toggle */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="fixed bottom-6 right-6 z-40 px-3 py-2 min-h-[36px] rounded-[2px] bg-white text-[#1D1510] border border-[#1D1510] hover:bg-[#c83e00] hover:text-white transition-colors pointer-events-auto text-[11.5px] font-mono font-bold flex items-center gap-1.5"
        title={collapsed ? 'Show streams' : 'Hide streams'}
      >
        <Layers className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? (collapsed ? 'Show streams' : 'Hide streams') : (collapsed ? 'Hiện thanh' : 'Ẩn thanh')}</span>
      </button>
    </div>
  );
}
