import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/companyData';

export default function EtymologySection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 border-b border-black/5 dark:border-white/5 bg-slate-100/60 dark:bg-[#0e1420]/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-2">
            {COMPANY_INFO.nameEtymology.title}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-inherit">
            Khi Trí Tuệ Mạng Nơ-ron Gặp Kỹ Nghệ Lò Rèn
          </p>
          <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-1">
            Phiên âm chuẩn: {COMPANY_INFO.nameEtymology.pronunciation}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl glass-panel border-l-4 border-l-[#FF5500] shadow-sm"
          >
            <div className="text-xs font-mono text-[#FF5500] font-bold mb-1">
              TIỀN TỐ (PREFIX)
            </div>
            <h3 className="text-xl font-bold text-inherit mb-2">
              {COMPANY_INFO.nameEtymology.synap.root}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {COMPANY_INFO.nameEtymology.synap.desc}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl glass-panel border-l-4 border-l-orange-500 shadow-sm"
          >
            <div className="text-xs font-mono text-orange-500 font-bold mb-1">
              HẬU TỐ (SUFFIX)
            </div>
            <h3 className="text-xl font-bold text-inherit mb-2">
              {COMPANY_INFO.nameEtymology.forge.root}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {COMPANY_INFO.nameEtymology.forge.desc}
            </p>
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="p-6 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/25 text-center"
        >
          <p className="text-sm sm:text-base font-semibold text-orange-950 dark:text-orange-200 italic">
            "{COMPANY_INFO.nameEtymology.synthesis}"
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
