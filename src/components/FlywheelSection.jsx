import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FlywheelSection({ t }) {
  return (
    <motion.section
      id="model"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 border-b border-black/5 dark:border-white/5 relative bg-slate-50/70 dark:bg-[#090D14]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 text-xs font-mono text-[#FF5500] mb-3">
              <span className="font-bold">{t.flywheel.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t.flywheel.title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-md font-medium leading-relaxed">
            {t.flywheel.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Engine 1 */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden group hover:border-[#FF5500]/60 transition-colors shadow-md hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] border border-[#FF5500]/20 shadow-inner">
                  <Rocket className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                  50% IN-HOUSE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-inherit group-hover:text-[#FF5500] transition-colors">
                {t.flywheel.engine1Title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                {t.flywheel.engine1Desc}
              </p>

              <div className="space-y-3.5 pt-6 border-t border-black/5 dark:border-white/10">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>
                    Làm chủ 100% công nghệ cao (GraphRAG, LLM Tuning)
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>
                    Phát sinh doanh thu thực tiễn từ ngày đầu (Day One
                    Monetization)
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>
                    Tạo ra các bộ khung mã nguồn (reusable libraries) vững
                    chắc
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>R&D Ecosystem</span>
              <span className="text-[#FF5500] font-bold">
                BrandHub & BienSoVip
              </span>
            </div>
          </motion.div>

          {/* Engine 2 */}
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden group hover:border-[#FF5500]/60 transition-colors shadow-md hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500] border border-[#FF5500]/20 shadow-inner">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  50% OUTSOURCE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-inherit group-hover:text-[#FF5500] transition-colors">
                {t.flywheel.engine2Title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                {t.flywheel.engine2Desc}
              </p>

              <div className="space-y-3.5 pt-6 border-t border-black/5 dark:border-white/10">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>
                    Bàn giao MVP chất lượng cao chỉ trong 30–60 ngày
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>
                    0% rủi ro mất mát giao dịch nhờ kiến trúc RabbitMQ DLQ
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>
                    Minh bạch tiến độ từng Task Jira và từng Commit Git
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-gray-400">
              <span>Standards</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                FPT Software & Clean Arch
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
