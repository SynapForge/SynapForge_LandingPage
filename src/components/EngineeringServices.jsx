import React from 'react';
import { motion } from 'framer-motion';
import { OUTSOURCE_SERVICES } from '../data/companyData';
import { 
  Globe, Server, Cpu, Rocket, CheckCircle2, 
  ArrowUpRight, Clock, Users, ShieldCheck, Zap 
} from 'lucide-react';

export default function EngineeringServices({ t }) {
  const serviceIcons = {
    'enterprise-web': Globe,
    'highload-backend': Server,
    'ai-rag-integration': Cpu,
    'turnkey-mvp': Rocket
  };

  return (
    <motion.section 
      id="services" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 border-b border-black/5 dark:border-white/5 bg-slate-50/60 dark:bg-[#0e1420]/30 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 text-xs font-mono text-[#FF5500] mb-3">
              <span className="font-bold">{t?.services?.tag || "/ 03 DỊCH VỤ KỸ NGHỆ MAY ĐO"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t?.services?.title || "4 Gói Kỹ Nghệ Chuyên Sâu"}
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            {t?.services?.sub || "Áp dụng các chuẩn mực nghiêm ngặt từ FPT Software & Clean Architecture để xây dựng nền tảng vững chắc cho đối tác."}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {OUTSOURCE_SERVICES.map((s, index) => {
            const Icon = serviceIcons[s.id] || Globe;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-8 rounded-3xl glass-panel hover:border-[#FF5500]/50 transition-colors flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Index tag */}
                <div className="absolute top-6 right-6 font-mono text-xs text-gray-400 dark:text-gray-500 group-hover:text-[#FF5500] transition-colors">
                  [0{index + 1}]
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] mb-6 border border-[#FF5500]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                      {s.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-inherit mb-2 group-hover:text-[#FF5500] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                    {s.subtitle}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-black/5 dark:border-white/5">
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div>
                    <span className="font-semibold text-inherit">Phù hợp: </span>
                    <span>{s.bestFor}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

