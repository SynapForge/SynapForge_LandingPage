import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, MapPin, Phone, Mail } from 'lucide-react';
import SynapForgeLogo from './SynapForgeLogo';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ t }) {
  return (
    <footer className="pt-20 pb-12 px-6 border-t border-black/5 dark:border-white/10 bg-slate-100/80 dark:bg-[#070A0F] text-xs font-mono relative overflow-hidden">
      {/* Subtle orange accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF5500]/50 to-transparent"></div>
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#FF5500]/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-black/5 dark:border-white/10">
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <SynapForgeLogo variant="full" className="w-8 h-7" />
            <p className="text-gray-600 dark:text-gray-400 font-sans text-xs leading-relaxed max-w-sm pt-2">
              {COMPANY_INFO.nameEtymology.synthesis}
            </p>
            
            {/* Corporate Social Media Links */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 font-bold">
                Mạng Xã Hội & Cộng Đồng Kỹ Thuật:
              </div>
              <div className="flex items-center gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#FF5500] hover:text-white text-gray-600 dark:text-gray-400 flex items-center justify-center transition-colors border border-black/5 dark:border-white/10 shadow-sm"
                  title="Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/trung2605"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#FF5500] hover:text-white text-gray-600 dark:text-gray-400 flex items-center justify-center transition-colors border border-black/5 dark:border-white/10 shadow-sm"
                  title="GitHub Open Source"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#FF5500] hover:text-white text-gray-600 dark:text-gray-400 flex items-center justify-center transition-colors border border-black/5 dark:border-white/10 shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-[#FF5500] hover:text-white text-gray-600 dark:text-gray-400 flex items-center justify-center transition-colors border border-black/5 dark:border-white/10 shadow-sm font-bold text-[10px]"
                  title="Telegram Kênh Kỹ Thuật"
                >
                  Tele
                </motion.a>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-[11px] text-gray-500 dark:text-gray-400 border-t border-black/5 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Pháp nhân:</span>
                <span>{COMPANY_INFO.legalName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Founder:</span>
                <span>{COMPANY_INFO.founder?.name || "Lê Trí Trung"} (Trưởng nhóm Kỹ nghệ)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Flagship Ventures & Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs border-b border-[#FF5500]/30 pb-2">
              Hệ Sinh Thái & Kỹ Nghệ
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#ventures" className="hover:text-[#FF5500] transition-colors flex items-center justify-between group">
                  <span>BrandHub (B2B SaaS MarTech)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]" />
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#FF5500] transition-colors flex items-center justify-between group">
                  <span>BienSoVip (Sàn Đấu Giá 61 Bảng)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5500] transition-colors flex items-center justify-between group">
                  <span>Microservices & AI RAG Chuyên Sâu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]" />
                </a>
              </li>
              <li>
                <a href="#saas-modules" className="hover:text-[#FF5500] transition-colors flex items-center justify-between group">
                  <span>13 Vũ Khí SaaS Đóng Gói Sẵn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]" />
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#FF5500] transition-colors flex items-center justify-between group">
                  <span>Dự Toán Chi Phí Tức Thời</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5500]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Standards & Escrow (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs border-b border-[#FF5500]/30 pb-2">
              Cam Kết & Chuẩn Mực
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-[#FF5500]" />
                <span>Ký quỹ Escrow 40/60</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-[#FF5500]" />
                <span>FPT Standard Quality</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-[#FF5500]" />
                <span>Clean Architecture</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-[#FF5500]" />
                <span>RabbitMQ 0% Loss</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-[#FF5500]" />
                <span>Bàn giao 100% Source</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs border-b border-[#FF5500]/30 pb-2">
              Trụ Sở & Kết Nối Trực Tiếp
            </div>
            <div className="space-y-2.5 text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <span className="leading-tight">{COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#FF5500] transition-colors font-bold text-slate-800 dark:text-slate-200">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FF5500] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/25 text-[#FF5500] font-bold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping"></span>
                  <span>Tiếp nhận dự án 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 dark:text-gray-400">
          <div>
            © {COMPANY_INFO.establishedYear} {COMPANY_INFO.legalName}. All rights reserved. Designed & Engineered with precision in Da Nang.
          </div>
          <div className="flex items-center gap-6">
            <a href="#model" className="hover:text-inherit transition-colors">Chính sách bảo mật</a>
            <a href="#pricing" className="hover:text-inherit transition-colors">Điều khoản hợp đồng</a>
            <a href="#contact" className="hover:text-inherit transition-colors">Hỗ trợ kỹ thuật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
