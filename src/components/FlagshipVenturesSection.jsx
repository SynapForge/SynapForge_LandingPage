import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDHUB_DATA, BIENSOVIP_DATA } from '../data/venturesData';

export default function FlagshipVenturesSection({ t }) {
  const [activeVentureTab, setActiveVentureTab] = useState('brandhub');

  return (
    <motion.section
      id="ventures"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 border-b border-black/5 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 text-xs font-mono text-[#FF5500] mb-3">
              <span className="font-bold">{t.ventures.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t.ventures.title}
            </h2>
          </div>
          {/* Toggle Venture Tabs */}
          <div className="flex rounded-2xl glass-panel p-1.5 font-mono text-xs shadow-sm">
            <button
              onClick={() => setActiveVentureTab("brandhub")}
              className={`px-5 py-2.5 rounded-xl transition-all font-bold ${
                activeVentureTab === "brandhub"
                  ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                  : "text-gray-600 dark:text-gray-400 hover:text-inherit"
              }`}
            >
              {t.ventures.tabBrandHub}
            </button>
            <button
              onClick={() => setActiveVentureTab("biensovip")}
              className={`px-5 py-2.5 rounded-xl transition-all font-bold ${
                activeVentureTab === "biensovip"
                  ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25"
                  : "text-gray-600 dark:text-gray-400 hover:text-inherit"
              }`}
            >
              {t.ventures.tabBienSoVip}
            </button>
          </div>
        </div>

        {/* Active Venture Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeVentureTab === "brandhub" ? (
            <motion.div 
              key="brandhub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-12 glass-panel border border-[#FF5500]/40 relative overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                      {BRANDHUB_DATA.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      ● R&D Production Ready
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-inherit mb-3">
                    BrandHub — Nền Tảng Trí Tuệ Thương Hiệu
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Giải pháp B2B SaaS toàn diện giúp các Agencies và Nhãn hàng
                    quản trị chiến dịch truyền thông, tự động sinh nội dung theo
                    Brand Voice và lập lịch đăng tự động lên Facebook, TikTok,
                    Instagram, Threads, Zalo với 0% tỷ lệ rớt tin nhắn.
                  </p>

                  {/* Microservices breakdown */}
                  <div className="space-y-3 mb-8">
                    {BRANDHUB_DATA.microservices.slice(0, 4).map((ms) => (
                      <div
                        key={ms.id}
                        className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-black/5 dark:border-white/5 text-xs"
                      >
                        <div className="flex items-center justify-between font-bold text-inherit mb-1">
                          <span className="text-[#FF5500] font-mono">
                            {ms.name} (:{ms.port})
                          </span>
                          <span className="text-[10px] text-gray-500 dark:text-gray-400 font-normal">
                            {ms.tag}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-[11px] leading-relaxed">
                          {ms.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="grid grid-cols-2 gap-3.5">
                    {BRANDHUB_DATA.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white dark:bg-black/50 border border-black/5 dark:border-white/5 shadow-sm"
                      >
                        <div className="text-3xl font-extrabold text-[#FF5500] font-mono">
                          {m.value}
                        </div>
                        <div className="text-xs font-bold text-inherit mt-0.5">
                          {m.label}
                        </div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400">
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 text-xs">
                    <div className="font-mono text-[#FF5500] font-bold mb-2">
                      TECH STACK PHÂN TÁN LÕI:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java 21",
                        "Spring Boot 3",
                        "Python FastAPI",
                        "RabbitMQ DLQ",
                        "Neo4j GraphRAG",
                        "ChromaDB",
                        "React 18",
                      ].map((tTech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-black/60 text-gray-800 dark:text-gray-200 font-mono text-[10px] font-semibold border border-black/5 dark:border-white/5"
                        >
                          {tTech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="biensovip"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-12 glass-panel border border-amber-500/40 relative overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {BIENSOVIP_DATA.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      ● Live Production • biensovip.com
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-inherit mb-3">
                    BienSoVip — Sàn Đấu Giá Biển Số Xe Tốc Độ Cao
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Sàn thương mại điện tử chuyên biệt tốc độ cao sở hữu 61 bảng
                    thực thể do Founder Lê Trí Trung tự tay thiết kế và lập
                    trình. Tối ưu lọc đa tiêu chí dưới 8ms, tự động hóa khớp cọc
                    VietQR dưới 0.5s với 0đ chi phí cổng, tích hợp khóa phân tán
                    chống bán trùng và trợ lý AI 24/7.
                  </p>

                  {/* Specs breakdown */}
                  <div className="space-y-3 mb-8">
                    {BIENSOVIP_DATA.specs.slice(0, 4).map((sp) => (
                      <div
                        key={sp.id}
                        className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-black/5 dark:border-white/5 text-xs"
                      >
                        <div className="font-bold text-amber-700 dark:text-amber-300 mb-1">
                          {sp.title}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-[11px] leading-relaxed">
                          {sp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="grid grid-cols-2 gap-3.5">
                    {BIENSOVIP_DATA.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white dark:bg-black/50 border border-black/5 dark:border-white/5 shadow-sm"
                      >
                        <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                          {m.value}
                        </div>
                        <div className="text-xs font-bold text-inherit mt-0.5">
                          {m.label}
                        </div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400">
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
                    <div className="font-mono text-amber-700 dark:text-amber-400 font-bold mb-2">
                      TECH STACK TỐI ƯU CSDL:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        ".NET 8 Clean Arch",
                        "PostgreSQL GIN",
                        "Redis Distributed Lock",
                        "React 19",
                        "VietQR Webhook",
                        "DeepSeek API",
                      ].map((tTech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-black/60 text-gray-800 dark:text-gray-200 font-mono text-[10px] font-semibold border border-black/5 dark:border-white/5"
                        >
                          {tTech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
