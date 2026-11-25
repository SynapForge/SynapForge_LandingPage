import React from "react";
import { ArrowUpRight } from "lucide-react";
import { t, ZALO_URL } from "../data/i18n";

export default function Footer({ lang, wide = false }) {
  return (
    <footer className="footer-spec">
      <div className={wide ? "pp-wide" : "wrap"}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#dfd4be]">
          <div className="md:col-span-5">
            <a href="/" className="brand inline-flex items-center gap-2.5 mb-3">
              <span className="brand-name">
                Synap<em style={{ color: "var(--orange-deep)" }}>Forge</em>
              </span>
            </a>
            <p className="text-[13px] text-[#524336] leading-relaxed max-w-[42ch] mb-3" style={{ textWrap: "pretty" }}>
              {lang === "vi"
                ? "Venture Studio & Software Factory tại Đà Nẵng. Xây dựng sản phẩm lõi và chuyển giao hệ thống phần mềm chạy thật cho doanh nghiệp."
                : "Venture Studio & Software Factory in Da Nang. Building in-house platforms and delivering production software for SMEs."}
            </p>
            <div className="font-mono text-xs text-[#524336] tracking-wide">
              Hải Châu, Đà Nẵng · (+84) 912 158 715 · solutions@synapforge.id.vn
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#b83700] mb-3">
              {lang === "vi" ? "Sản phẩm Flagship" : "Flagship Ventures"}
            </div>
            <ul className="space-y-2 text-[12.5px] font-mono">
              <li>
                <a
                  href="https://brandhub.id.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1D1510] hover:text-[#b83700] transition-colors"
                >
                  <span>BrandHub OS (brandhub.id.vn)</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://biensovip.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#1D1510] hover:text-[#b83700] transition-colors"
                >
                  <span>BienSoVip (biensovip.com)</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </li>
              <li>
                <a href="/san-pham/the-mc-hub" className="text-[#524336] hover:text-[#b83700] transition-colors">
                  The MC Hub Academy
                </a>
              </li>
              <li>
                <a href="/san-pham/threadlearn" className="text-[#524336] hover:text-[#b83700] transition-colors">
                  ThreadLearn (ICTA 2026)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#b83700] mb-3">
              {lang === "vi" ? "Điều hướng & Tư vấn" : "Navigation & Contact"}
            </div>
            <div className="grid grid-cols-2 gap-2 text-[12.5px] font-mono">
              <a href="/san-pham" className="text-[#1D1510] hover:text-[#b83700] transition-colors">
                {t(lang, "nav_ventures")}
              </a>
              <a href="/#estimator" className="text-[#1D1510] hover:text-[#b83700] transition-colors">
                {lang === "vi" ? "Dự toán chi phí" : "Estimator"}
              </a>
              <a href="/bai-viet" className="text-[#1D1510] hover:text-[#b83700] transition-colors">
                {lang === "vi" ? "Kiến thức" : "Insights"}
              </a>
              <a href="/#team" className="text-[#1D1510] hover:text-[#b83700] transition-colors">
                {t(lang, "nav_team")}
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#b83700] font-bold hover:underline"
              >
                <span>Zalo 24/7</span>
                <ArrowUpRight className="w-3 h-3 shrink-0" />
              </a>
              <a href="/#top" className="text-[#524336] hover:text-[#1D1510] transition-colors">
                ↑ Top
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-[#524336]">
          <span>© 2026 SynapForge Venture Studio &amp; Software Factory</span>
          <span>{t(lang, "footer_addr")}</span>
        </div>
      </div>
    </footer>
  );
}
