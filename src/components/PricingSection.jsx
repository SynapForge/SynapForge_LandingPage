import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING_PACKAGES, CONTRACT_POLICIES } from '../data/pricingAndSaasData';
import { Check, ShieldAlert, Award, Sparkles, ChevronRight, Zap } from 'lucide-react';

export default function PricingSection({ t }) {
  const [selectedPackage, setSelectedPackage] = useState('fast_mvp');

  return (
    <motion.section 
      id="pricing" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 border-b border-black/5 dark:border-white/5 relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF5500]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 text-xs font-mono text-[#FF5500] mb-3">
              <span className="font-bold">{t?.pricing?.tag || "/ 05 MINH BẠCH & KÝ QUỸ AN TOÀN"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t?.pricing?.title || "Bảng Giá 3 Gói Dịch Vụ"}
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            {t?.pricing?.sub || "Mọi gói cước đều áp dụng quy chế ký quỹ 40% cọc — 60% chỉ thanh toán khi nghiệm thu môi trường thật, bảo vệ 100% quyền lợi đối tác."}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isFeatured = pkg.isFeatured;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: isFeatured ? -16 : -8, transition: { duration: 0.25 } }}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`cursor-pointer rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 relative shadow-sm hover:shadow-xl ${
                  isFeatured
                    ? 'glass-panel border-2 border-[#FF5500] shadow-2xl shadow-[#FF5500]/20 lg:-translate-y-3'
                    : 'glass-panel hover:border-black/20 dark:hover:border-white/25'
                }`}
              >
                {/* Highlight Badge for Featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF5500] text-white font-mono text-[11px] font-bold tracking-wider shadow-md uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{pkg.highlightChip}</span>
                  </div>
                )}

                <div>
                  {/* Top Tag & Discount */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-300 border border-black/5 dark:border-white/5">
                      {pkg.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[#FF5500] font-bold bg-[#FF5500]/10 px-2.5 py-1 rounded border border-[#FF5500]/20">
                      {pkg.discountBadge}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-2xl font-bold text-inherit mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-extrabold font-mono text-inherit tracking-tight">
                      {pkg.priceNum}
                    </span>
                  </div>

                  {/* Timeline & Warranty metadata */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-black/5 dark:bg-black/30 border border-black/5 dark:border-white/5 text-xs font-mono">
                    <div>
                      <span className="text-gray-400 dark:text-gray-400 block">Thời gian:</span>
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{pkg.timeline}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 dark:text-gray-400 block">Bảo hành:</span>
                      <span className="text-[#FF5500] font-medium">{pkg.warranty}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-6 border-t border-black/5 dark:border-white/10 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${isFeatured ? 'bg-[#FF5500] text-white' : 'bg-black/10 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    isFeatured
                      ? 'bg-[#FF5500] hover:bg-[#E04B00] text-white shadow-[#FF5500]/25'
                      : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-inherit'
                  }`}
                >
                  <span>Chọn Gói {pkg.title.split(' ')[1]}</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Contract & Escrow Guarantee Box */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="rounded-3xl p-6 sm:p-8 glass-panel border border-black/5 dark:border-white/10 grid md:grid-cols-3 gap-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#FF5500]/10 text-[#FF5500] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-inherit text-sm mb-1">Cơ Chế Ký Quỹ 40 / 60</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {CONTRACT_POLICIES.paymentTerms}. Không rủi ro giải ngân trước.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#FF5500]/10 text-[#FF5500] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-inherit text-sm mb-1">Thưởng / Phạt Tiến Độ</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {CONTRACT_POLICIES.bonusPolicy} & {CONTRACT_POLICIES.penaltyPolicy}.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#FF5500]/10 text-[#FF5500] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-inherit text-sm mb-1">Nâng Cấp Không Gián Đoạn</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {CONTRACT_POLICIES.upgradePolicy}, bảo toàn 100% dữ liệu đang chạy thực tế.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

