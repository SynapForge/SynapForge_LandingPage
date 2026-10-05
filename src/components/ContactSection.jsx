import React from 'react';
import { motion } from 'framer-motion';
import { Send, Check, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactSection({ t, formSent, handleSubmitContact }) {
  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 relative"
    >
      <div className="max-w-5xl mx-auto rounded-3xl glass-panel p-8 sm:p-12 border border-[#FF5500]/30 relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF5500]/20 blur-[100px] pointer-events-none rounded-full"></div>

        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/30"
            >
              <Send className="w-5 h-5" />
            </motion.div>
            <h2 className="text-3xl font-extrabold text-inherit tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <Mail className="w-4 h-4 text-[#FF5500]" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-slate-100 dark:bg-black/50 p-6 sm:p-8 rounded-3xl border border-black/5 dark:border-white/10 shadow-lg">
            {formSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-inherit mb-1">
                  {t.contact.successTitle}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {t.contact.successDesc}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase text-gray-600 dark:text-gray-400 block mb-1 font-semibold">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-inherit text-xs placeholder:text-gray-400 focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase text-gray-600 dark:text-gray-400 block mb-1 font-semibold">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="0912 xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-inherit text-xs placeholder:text-gray-400 focus:outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-gray-600 dark:text-gray-400 block mb-1 font-semibold">
                    {t.contact.projectLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Gói MVP Tốc Hành / Tích hợp VietQR / Sàn TMĐT..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-inherit text-xs placeholder:text-gray-400 focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-gray-600 dark:text-gray-400 block mb-1 font-semibold">
                    {t.contact.descLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tôi cần làm website bán hàng có tự động khớp cọc..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-inherit text-xs placeholder:text-gray-400 focus:outline-none focus:border-[#FF5500]"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#FF5500]/30"
                >
                  <span>{t.contact.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
