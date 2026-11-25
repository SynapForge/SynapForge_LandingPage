import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SAAS_AUTOMATION_MODULES } from '../data/pricingAndSaasData';
import { 
  Zap, Database, Bot, Mail, Users, ShieldCheck, 
  Share2, Sparkles, Filter, ChevronRight, ChevronDown, ChevronUp, Layers
} from 'lucide-react';

export default function SaasModulesSection({ t }) {
  const [activeGroup, setActiveGroup] = useState('ALL');
  const [isExpanded, setIsExpanded] = useState(false);

  const groups = [
    { key: 'ALL', label: 'TẤT CẢ (13 MODULES)' },
    { key: 'TĂNG DOANH SỐ', label: 'TĂNG DOANH SỐ' },
    { key: 'AI THỰC CHIẾN', label: 'AI THỰC CHIẾN' },
    { key: 'CHỐT SALES', label: 'CHỐT SALES' },
    { key: 'ĐA KÊNH', label: 'ĐA KÊNH & VẬN HÀNH' }
  ];

  const filteredModules = SAAS_AUTOMATION_MODULES.filter(m => {
    if (activeGroup === 'ALL') return true;
    if (activeGroup === 'ĐA KÊNH') return m.group === 'ĐA KÊNH' || m.group === 'VẬN HÀNH' || m.group === 'BẢO MẬT' || m.group === 'GIỮ CHÂN';
    return m.group === activeGroup;
  });

  // Show 6 items initially in 'ALL' mode if not expanded, or all items when expanded or filtered
  const displayedModules = (activeGroup === 'ALL' && !isExpanded) 
    ? filteredModules.slice(0, 6) 
    : filteredModules;

  return (
    <motion.section 
      id="saas-modules" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 border-b border-black/5 dark:border-white/5 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 text-xs font-mono text-[#FF5500] mb-3">
              <span className="font-bold">{t?.saas?.tag || "/ 04 13 VŨ KHÍ TỰ ĐỘNG HÓA THỰC CHIẾN"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t?.saas?.title || "Kho Module SaaS Sẵn Sàng Triển Khai"}
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            {t?.saas?.sub || "Các khối module được đóng gói sẵn từ 2 sản phẩm thực chiến (BrandHub & BienSoVip), giúp tích hợp vào website của bạn với tốc độ tức thì và 0đ phí duy trì trung gian."}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-black/5 dark:border-white/10">
          {groups.map(g => (
            <motion.button
              key={g.key}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveGroup(g.key);
                if (g.key !== 'ALL') setIsExpanded(true);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeGroup === g.key
                  ? 'bg-[#FF5500] text-white font-bold shadow-md shadow-[#FF5500]/20'
                  : 'bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-inherit hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              {g.label}
            </motion.button>
          ))}
        </div>

        {/* Bento Grid of Modules with Layout Animations */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {displayedModules.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl glass-panel hover:border-[#FF5500]/50 transition-colors group flex flex-col justify-between shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500 group-hover:text-[#FF5500] transition-colors">
                      #{item.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                      {item.metric}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                    {item.group}
                  </div>

                  <h3 className="text-lg font-bold text-inherit mb-2.5 group-hover:text-[#FF5500] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-gray-400 dark:text-gray-400 group-hover:text-inherit transition-colors">
                  <span className="font-mono text-[11px]">Sẵn sàng tích hợp</span>
                  <ChevronRight className="w-4 h-4 text-[#FF5500] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button when in ALL mode */}
        {activeGroup === 'ALL' && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3.5 rounded-2xl glass-panel hover:border-[#FF5500] text-inherit font-mono text-xs font-bold transition-all inline-flex items-center gap-2.5 shadow-md group"
            >
              <Layers className="w-4 h-4 text-[#FF5500] group-hover:rotate-12 transition-transform" />
              <span>
                {isExpanded 
                  ? "Thu gọn danh sách (Hiển thị 6 module nổi bật)" 
                  : `Xem toàn bộ kho vũ khí (${filteredModules.length} Modules)`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#FF5500]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#FF5500]" />
              )}
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
}


