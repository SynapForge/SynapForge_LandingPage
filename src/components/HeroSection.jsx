import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import SynapseCanvas from './SynapseCanvas';
import { COMPANY_INFO } from '../data/companyData';

export default function HeroSection({ t, theme }) {
  return (
    <header className="relative pt-20 pb-32 px-6 overflow-hidden border-b border-black/5 dark:border-white/5">
      <SynapseCanvas theme={theme} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-[#FF5500]/15 blur-[150px] pointer-events-none rounded-full"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono text-gray-700 dark:text-gray-300 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-inherit"
        >
          {t.hero.title1} <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-orange-500 to-amber-500">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-12 font-normal leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#ventures"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-sm transition-colors shadow-lg shadow-[#FF5500]/30 flex items-center justify-center gap-3 font-mono"
          >
            <Rocket className="w-4 h-4" />
            <span>{t.hero.ctaVentures}</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#estimator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:border-[#FF5500]/50 text-inherit font-bold text-sm transition-colors flex items-center justify-center gap-3 font-mono shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span>{t.hero.ctaEstimator}</span>
          </motion.a>
        </motion.div>

        {/* Key Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-black/5 dark:border-white/10"
        >
          {COMPANY_INFO.metrics.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-2xl glass-panel text-left shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold mb-1 font-mono">
                <span className="text-[#FF5500]">{m.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-inherit">
                {m.label}
              </div>
              <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                {m.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}
