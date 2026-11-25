import React, { useState, useMemo } from "react";
import {
  Check,
  Clock,
  ShieldCheck,
  Copy,
  MessageCircle,
  FileCode2,
  ArrowRight,
} from "lucide-react";
import {
  pick,
  t,
  PACKAGES_I18N,
  ESTIMATOR_ADDONS_I18N,
  ZALO_URL,
} from "../data/i18n";

const formatVnd = (amount) =>
  new Intl.NumberFormat("vi-VN").format(amount) + " ₫";

export default function SpecEstimatorSection({ lang }) {
  const [selectedPkgId, setSelectedPkgId] = useState("fast_mvp");
  const [selectedAddons, setSelectedAddons] = useState(["vietqr", "ai_bot"]);
  const [copied, setCopied] = useState(false);

  const activePkg = useMemo(
    () => PACKAGES_I18N.find((p) => p.id === selectedPkgId) || PACKAGES_I18N[1],
    [selectedPkgId],
  );

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const addonsTotal = useMemo(
    () =>
      selectedAddons.reduce((sum, id) => {
        const found = ESTIMATOR_ADDONS_I18N.find((a) => a.id === id);
        return sum + (found ? found.price : 0);
      }, 0),
    [selectedAddons],
  );

  const totalPrice = activePkg.priceValue + addonsTotal;
  const depositAmount = Math.round(totalPrice * 0.4);
  const finalAmount = totalPrice - depositAmount;
  const estimatedDays = activePkg.days + (selectedAddons.length > 2 ? 10 : 0);

  const handleCopyBrief = async () => {
    const addonNames = selectedAddons
      .map((id) => {
        const found = ESTIMATOR_ADDONS_I18N.find((a) => a.id === id);
        return found ? pick(lang, found.name.vi, found.name.en) : id;
      })
      .join(", ");

    const summary =
      lang === "vi"
        ? `[SynapForge Dự Toán]\n- Gói nền tảng: ${activePkg.title.vi} (${activePkg.priceNum})\n- Module bổ sung (${selectedAddons.length}): ${addonNames || "Không"}\n- Tổng dự toán: ${formatVnd(totalPrice)}\n- Ký quỹ đợt 1 (40%): ${formatVnd(depositAmount)} | Nghiệm thu (60%): ${formatVnd(finalAmount)}\n- Thời gian dự kiến: ~${estimatedDays} ngày`
        : `[SynapForge Estimate]\n- Tier: ${activePkg.title.en} (${activePkg.priceNum})\n- Add-ons (${selectedAddons.length}): ${addonNames || "None"}\n- Total Estimate: ${formatVnd(totalPrice)}\n- Milestone 1 (40%): ${formatVnd(depositAmount)} | Delivery (60%): ${formatVnd(finalAmount)}\n- Timeline: ~${estimatedDays} days`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section" id="estimator">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">
            <span className="sq"></span>
            <span className="mono">{t(lang, "est_kicker")}</span>
          </div>
          <h2>{t(lang, "est_title")}</h2>
          <div className="sec-note">{t(lang, "est_note")}</div>
        </div>

        {/* 3 Transparent Engineering Tiers */}
        <div className="est-pkg-grid" role="radiogroup" aria-label={lang === "vi" ? "Chọn gói nền tảng" : "Select platform tier"}>
          {PACKAGES_I18N.map((pkg) => {
            const isSelected = selectedPkgId === pkg.id;
            return (
              <button
                key={pkg.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedPkgId(pkg.id)}
                className={`est-pkg-card ${isSelected ? "is-selected" : ""}`}
              >
                <div className="flex items-center justify-between gap-2 w-full">
                  <span className="est-pkg-squad">{pick(lang, pkg.squad.vi, pkg.squad.en)}</span>
                  <span
                    className={`w-5 h-5 rounded-[2px] border flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#c83e00] border-[#1d1510] text-white"
                        : "border-[#dfd4be] bg-white text-transparent"
                    }`}
                    aria-hidden="true"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3>{pick(lang, pkg.title.vi, pkg.title.en)}</h3>
                <div className="est-pkg-price">{pkg.priceNum}</div>
                <div className="est-pkg-meta tabular-nums">
                  <span>{pick(lang, pkg.timeline.vi, pkg.timeline.en)}</span>
                  <span>·</span>
                  <span className="text-[#b83700] font-bold">
                    {pick(lang, pkg.warranty.vi, pkg.warranty.en)}
                  </span>
                </div>

                <p className="est-pkg-desc">{pick(lang, pkg.desc.vi, pkg.desc.en)}</p>

                <ul className="est-pkg-feats">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check className="w-3.5 h-3.5 text-[#c83e00] shrink-0 mt-0.5" />
                      <span>{pick(lang, feat.vi, feat.en)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-3 border-t border-[#dfd4be] w-full flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-[#1d1510]">
                  <span>
                    {isSelected
                      ? lang === "vi"
                        ? "Đang chọn trong dự toán"
                        : "Selected in estimator"
                      : lang === "vi"
                        ? "Chọn gói này"
                        : "Select this tier"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c83e00]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Module Configurator + Escrow Summary */}
        <div className="est-config-grid">
          <div>
            <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#1d1510]">
                {lang === "vi"
                  ? "02 / Ghép thêm module đã kiểm chứng thực chiến"
                  : "02 / Toggle battle-tested production modules"}
              </div>
              <span className="font-mono text-[11px] text-[#524336] tabular-nums">
                {selectedAddons.length}/6 {lang === "vi" ? "đã chọn" : "selected"}
              </span>
            </div>

            <div className="est-addons-grid">
              {ESTIMATOR_ADDONS_I18N.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    aria-pressed={isChecked}
                    onClick={() => toggleAddon(addon.id)}
                    className={`est-addon-btn ${isChecked ? "is-checked" : ""}`}
                  >
                    <span
                      className={`w-4 h-4 rounded-[2px] mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked
                          ? "bg-[#c83e00] border-[#1d1510] text-white"
                          : "border-[#524336] bg-white text-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-[13.5px] text-[#1d1510] leading-snug">
                        {pick(lang, addon.name.vi, addon.name.en)}
                      </span>
                      <span className="block font-mono text-[11.5px] font-bold text-[#b83700] mt-1 tabular-nums">
                        +{formatVnd(addon.price)}
                      </span>
                      <span className="block text-[12px] text-[#524336] mt-1 leading-snug">
                        {pick(lang, addon.desc.vi, addon.desc.en)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Estimation & Legal Milestone Box */}
          <div className="est-summary-box">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dfd4be]">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#524336]">
                {lang === "vi" ? "// Bảng dự toán tức thời" : "// Live Scope Summary"}
              </span>
              <span className="font-mono text-[11.5px] font-bold px-2 py-0.5 bg-[#f4efe4] border border-[#1d1510] text-[#1d1510] rounded-[2px]">
                SLA 40 / 60
              </span>
            </div>

            <div className="mb-5">
              <div className="text-[12.5px] text-[#524336] mb-1">
                {lang === "vi" ? "Tổng kinh phí dự kiến (trọn gói):" : "Estimated total investment:"}
              </div>
              <div className="est-total-val" aria-live="polite">
                {formatVnd(totalPrice)}
              </div>
            </div>

            <div className="space-y-2.5 py-4 border-y border-[#dfd4be] font-mono text-[12px] mb-5 tabular-nums">
              <div className="flex justify-between gap-2 text-[#524336]">
                <span>{pick(lang, activePkg.title.vi, activePkg.title.en)}</span>
                <span className="font-bold text-[#1d1510]">{formatVnd(activePkg.priceValue)}</span>
              </div>
              <div className="flex justify-between gap-2 text-[#524336]">
                <span>
                  {lang === "vi" ? `Module mở rộng (${selectedAddons.length})` : `Add-on modules (${selectedAddons.length})`}
                </span>
                <span className="font-bold text-[#b83700]">+{formatVnd(addonsTotal)}</span>
              </div>
              <div className="pt-2.5 border-t border-dashed border-[#dfd4be] flex justify-between gap-2 text-[#1d1510]">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#c83e00] shrink-0" />
                  <span>{lang === "vi" ? "Thời gian cam kết:" : "Target timeline:"}</span>
                </span>
                <span className="font-bold">~{estimatedDays} {lang === "vi" ? "ngày" : "days"}</span>
              </div>
              <div className="flex justify-between gap-2 text-[#1d1510]">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                  <span>{lang === "vi" ? "Đợt 1 — Ký hợp đồng (40%):" : "Milestone 1 — Sign (40%):"}</span>
                </span>
                <span className="font-bold text-[#15803d]">{formatVnd(depositAmount)}</span>
              </div>
              <div className="flex justify-between gap-2 text-[#524336]">
                <span>{lang === "vi" ? "Đợt 2 — Nghiệm thu chạy thật (60%):" : "Milestone 2 — Production (60%):"}</span>
                <span className="font-bold text-[#1d1510]">{formatVnd(finalAmount)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spec btn-solid w-full"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>
                  {lang === "vi" ? "Nhận báo giá & WBS chi tiết qua Zalo" : "Get fixed quote & WBS on Zalo"}
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyBrief}
                className="btn-spec btn-ghost w-full"
              >
                {copied ? <Check className="w-4 h-4 text-[#15803d] shrink-0" /> : <Copy className="w-4 h-4 shrink-0" />}
                <span>
                  {copied
                    ? lang === "vi"
                      ? "Đã sao chép tóm tắt dự toán"
                      : "Estimate copied to clipboard"
                    : lang === "vi"
                      ? "Sao chép tóm tắt cấu hình này"
                      : "Copy this estimate summary"}
                </span>
              </button>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#dfd4be] flex items-start gap-2 text-[12.5px] text-[#524336] leading-relaxed">
              <FileCode2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
              <span>
                {lang === "vi"
                  ? "Cam kết hợp đồng: Bàn giao 100% mã nguồn Git + Docker + tài liệu kỹ thuật, bảo hành 6–12 tháng và phạt trễ hạn trực tiếp vào đợt nghiệm thu."
                  : "Contract guarantee: 100% Git source code, Docker & docs handover, 6–12 month warranty, and milestone delay protection."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
