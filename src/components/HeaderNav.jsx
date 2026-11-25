import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { t, ZALO_URL } from "../data/i18n";

export default function HeaderNav({ lang, setLang, activeRoute = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: t(lang, "nav_model"), href: "#model" },
    { label: t(lang, "nav_ventures"), href: "/san-pham", active: activeRoute === "products" },
    { label: t(lang, "nav_services"), href: "#services" },
    { label: lang === "vi" ? "Bảng giá" : "Pricing", href: "#estimator" },
    { label: t(lang, "nav_team"), href: "#team" },
    {
      label: lang === "vi" ? "Kiến thức" : "Insights",
      href: "/bai-viet",
      active: activeRoute === "articles",
    },
    { label: t(lang, "nav_contact"), href: "#contact" },
  ];

  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <a
          href="/"
          className="brand"
          title="SynapForge Home"
          onClick={closeMenu}
          aria-label="SynapForge Home"
        >
          <img
            src="/brand/logo_primary.jpg"
            alt="SynapForge"
            className="brand-logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="top-nav" aria-label="Primary Navigation">
          <a href="#model">{t(lang, "nav_model")}</a>
          <a
            href="/san-pham"
            style={activeRoute === "products" ? { color: "var(--orange-deep)", fontWeight: 700 } : undefined}
          >
            {t(lang, "nav_ventures")}
          </a>
          <a href="#services">{t(lang, "nav_services")}</a>
          <a href="#estimator">{lang === "vi" ? "Bảng giá" : "Pricing"}</a>
          <a href="#team">{t(lang, "nav_team")}</a>
          <a
            href="/bai-viet"
            style={activeRoute === "articles" ? { color: "var(--orange-deep)", fontWeight: 700 } : undefined}
          >
            {lang === "vi" ? "Kiến thức" : "Insights"}
          </a>
          <a href="#contact">{t(lang, "nav_contact")}</a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="lang-pill" role="group" aria-label="Language selector">
            <button
              type="button"
              className={lang === "vi" ? "on" : ""}
              onClick={() => setLang("vi")}
              aria-pressed={lang === "vi"}
            >
              VI
            </button>
            <button
              type="button"
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <a
            className="top-cta hidden md:inline-flex"
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(lang, "nav_cta")}
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu điều hướng"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`mobile-nav-drawer fixed top-[64px] left-0 right-0 z-50 bg-[#FBF8F2] border-b-2 border-[#1D1510] shadow-2xl md:hidden transition-transform duration-200 ease-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto max-h-[calc(100dvh-64px)] overflow-y-auto"
            : "-translate-y-4 opacity-0 pointer-events-none max-h-0 overflow-hidden"
        }`}
      >
        <div className="p-5 flex flex-col gap-1.5">
          <div className="text-[11px] font-mono text-[#524336] uppercase tracking-wider mb-2 pb-1.5 border-b border-[#dfd4be]">
            {lang === "vi" ? "// ĐIỀU HƯỚNG CHÍNH" : "// NAVIGATION"}
          </div>

          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={closeMenu}
              className={`flex items-center justify-between min-h-[44px] py-2.5 px-3.5 rounded-[2px] text-sm font-mono font-bold transition-colors ${
                item.active
                  ? "bg-[#c83e00] text-white"
                  : "text-[#1D1510] hover:bg-[#f4efe4] hover:text-[#b83700]"
              }`}
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          ))}

          {/* Quick Contact & Zalo in Mobile Drawer */}
          <div className="mt-4 pt-4 border-t border-[#dfd4be] flex flex-col gap-2.5">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-spec btn-solid w-full"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{t(lang, "nav_cta")} (ZALO 24/7)</span>
            </a>

            <div className="flex items-center justify-between px-3 py-2.5 bg-[#f4efe4] rounded-[2px] border border-[#dfd4be] text-xs font-mono text-[#1D1510]">
              <span className="flex items-center gap-1.5 tabular-nums">
                <Phone className="w-3.5 h-3.5 text-[#c83e00]" />
                <span>(+84) 912 158 715</span>
              </span>
              <span>Đà Nẵng, VN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
