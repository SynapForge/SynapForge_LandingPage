import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Check, Sparkles, Send, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function ProjectEstimator({ t }) {
  const [platformType, setPlatformType] = useState('marketplace');
  const [selectedAddons, setSelectedAddons] = useState(['vietqr', 'ai_bot']);

  const PLATFORMS = [
    {
      id: 'landing',
      name: 'Landing Page & Web Giới Thiệu Doanh Nghiệp',
      basePrice: 11500000,
      days: 30,
      desc: 'Thiết kế độc quyền, tối ưu SEO Google & Responsive 100%'
    },
    {
      id: 'marketplace',
      name: 'Sàn TMĐT / Marketplace / Cổng Đặt Lịch (Khuyên dùng)',
      basePrice: 18500000,
      days: 45,
      desc: 'Giỏ hàng, danh mục đa cấp, quản trị đơn hàng & thông báo tức thời'
    },
    {
      id: 'enterprise_micro',
      name: 'Hệ Thống Phân Tán Microservices & AI RAG Chuyên Sâu',
      basePrice: 33000000,
      days: 60,
      desc: 'Kiến trúc chịu tải cao, RabbitMQ DLQ, AI RAG & bàn giao 100% Source Code'
    }
  ];

  const ADDONS = [
    {
      id: 'vietqr',
      name: 'Thanh toán & Đối soát VietQR Động 0đ',
      price: 2500000,
      desc: 'Webhook ngân hàng khớp cọc 0.5s, không qua cổng trung gian'
    },
    {
      id: 'redis_lock',
      name: 'Khóa phân tán Redis Lock chống bán trùng 15p',
      price: 2000000,
      desc: 'Bảo vệ dữ liệu giao dịch độc bản không xung đột đồng thời'
    },
    {
      id: 'ai_bot',
      name: 'Trợ lý AI CSKH & Tư vấn tự động 24/7',
      price: 3500000,
      desc: 'Tích hợp OpenAI/DeepSeek API có bộ nhớ đệm chống ảo giác'
    },
    {
      id: 'email_builder',
      name: 'Hệ thống Email Builder Kéo Thả & SMTP 0đ',
      price: 2000000,
      desc: 'Tự động gửi biên lai điện tử & email chăm sóc khách hàng'
    },
    {
      id: 'ctv_portal',
      name: 'Cổng Quản Trị Đại Lý / CTV & Ví Hoa Hồng',
      price: 3000000,
      desc: 'Cấp link UTM định danh riêng & ví hoa hồng tự động'
    },
    {
      id: 'omnichannel',
      name: 'Xuất bản tự động 5 Mạng Xã Hội (RabbitMQ DLQ)',
      price: 4500000,
      desc: 'Lập lịch đăng bài lên FB, TikTok, Insta, Threads, Zalo'
    }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentPlatform = PLATFORMS.find(p => p.id === platformType) || PLATFORMS[0];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const rawTotal = currentPlatform.basePrice + addonsTotal;
  const daysEstimate = currentPlatform.days + (selectedAddons.length > 2 ? 10 : 0);

  const formatMoney = (val) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  return (
    <motion.section 
      id="estimator" 
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
              <span className="font-bold">{t?.estimator?.tag || "/ 06 DỰ TOÁN ĐẦU TƯ TRỰC QUAN"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-inherit tracking-tight">
              {t?.estimator?.title || "Interactive Project Estimator"}
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            {t?.estimator?.sub || "Tự chọn quy mô và các module tính năng để ước tính kinh phí và thời gian xuất xưởng cam kết ngay lập tức."}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Platform & Addons Selector */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Platform */}
            <div>
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FF5500] text-white flex items-center justify-center font-bold text-[10px]">1</span>
                <span>Chọn Quy Mô Nền Tảng (Platform Tier)</span>
              </div>

              <div className="space-y-3">
                {PLATFORMS.map(p => {
                  const isSelected = platformType === p.id;
                  return (
                    <motion.div
                      key={p.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setPlatformType(p.id)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-colors ${
                        isSelected
                          ? 'bg-[#FF5500]/10 border-[#FF5500] text-inherit shadow-md shadow-[#FF5500]/10'
                          : 'glass-panel text-inherit hover:border-[#FF5500]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm sm:text-base text-inherit">{p.name}</span>
                        <span className="font-mono text-xs font-bold text-[#FF5500]">
                          {formatMoney(p.basePrice)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{p.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div>
              <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FF5500] text-white flex items-center justify-center font-bold text-[10px]">2</span>
                <span>Chọn Thêm Module SaaS Thực Chiến (Add-ons)</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <motion.div
                      key={addon.id}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl cursor-pointer border transition-colors flex items-start gap-3 ${
                        isChecked
                          ? 'bg-[#FF5500]/10 border-[#FF5500]'
                          : 'glass-panel hover:border-[#FF5500]/40'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 ${isChecked ? 'bg-[#FF5500] text-white' : 'border border-gray-400'}`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs font-bold text-inherit mb-0.5">
                          <span>{addon.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#FF5500] block mb-1">
                          +{formatMoney(addon.price)}
                        </span>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">{addon.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Estimation Output Box */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div 
              layout
              className="rounded-3xl p-6 sm:p-8 glass-panel border-2 border-[#FF5500]/40 shadow-2xl shadow-[#FF5500]/15 relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10 mb-6">
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  DỰ TOÁN THỜI GIAN THỰC
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                  LIVE ESTIMATE
                </span>
              </div>

              {/* Total Price */}
              <div className="mb-6">
                <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Tổng kinh phí dự toán:</span>
                <motion.div 
                  key={rawTotal}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl sm:text-4xl font-extrabold font-mono text-inherit tracking-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-orange-400 to-amber-400">
                    {formatMoney(rawTotal)}
                  </span>
                </motion.div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-xs font-mono mb-6 p-4 rounded-2xl bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/5">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Nền tảng chính:</span>
                  <span>{formatMoney(currentPlatform.basePrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Module mở rộng ({selectedAddons.length}):</span>
                  <span className="text-[#FF5500]">+{formatMoney(addonsTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300 pt-2 border-t border-black/5 dark:border-white/10">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#FF5500]" /> Thời gian bàn giao:</span>
                  <span className="font-bold text-inherit">~{daysEstimate} Ngày</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> Ký quỹ đợt 1 (40%):</span>
                  <span className="font-bold text-emerald-500 dark:text-emerald-400">{formatMoney(rawTotal * 0.4)}</span>
                </div>
              </div>

              {/* CTA Action */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="w-full py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#FF5500]/30"
              >
                <span>Nhận Tư Vấn & Khảo Sát Miễn Phí</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-3">
                * Báo giá đã bao gồm miễn phí VPS 6 tháng & bảo hành kỹ thuật.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

