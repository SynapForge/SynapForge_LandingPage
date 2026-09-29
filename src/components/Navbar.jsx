import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Globe,
  ChevronRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import SynapForgeLogo from "./SynapForgeLogo";

export default function Navbar({ theme, toggleTheme, lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#model", label: t.nav.flywheel },
    { href: "#ventures", label: t.nav.ventures },
    { href: "#services", label: t.nav.services },
    { href: "#saas-modules", label: t.nav.saas },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#estimator", label: t.nav.estimator },
    { href: "#team", label: t.nav.team },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 dark:bg-[#0B0F17]/90 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/30"
          : "py-4 bg-transparent border-b border-black/5 dark:border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Official Brand Logo from Brand Board */}
        <a href="#" className="group">
          <SynapForgeLogo variant="full" className="w-9 h-8" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6 text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-[#FF5500] dark:hover:text-[#FF5500] transition-colors py-1 font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls: Theme Switcher, Language Switcher & CTA */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button */}
          <div className="flex items-center p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono">
            <button
              onClick={() => setLang("vi")}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold ${
                lang === "vi"
                  ? "bg-[#FF5500] text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-lg transition-all font-bold ${
                lang === "en"
                  ? "bg-[#FF5500] text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-[#FF5500] transition-colors"
            title={
              theme === "dark"
                ? "Chuyển sang Giao diện Sáng (Light Mode)"
                : "Chuyển sang Giao diện Tối (Dark Mode)"
            }
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>

          {/* Action CTA Button */}
          <a
            href="#estimator"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md shadow-[#FF5500]/25"
          >
            <span>{t.nav.cta}</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-6 pt-4 pb-6 bg-white/95 dark:bg-[#0B0F17]/95 border-b border-black/10 dark:border-white/10 backdrop-blur-2xl space-y-3 font-mono text-xs shadow-xl">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-slate-800 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#FF5500] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-black/10 dark:border-white/10">
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-[#FF5500] text-white font-bold flex items-center justify-center gap-2 uppercase"
            >
              <span>{t.nav.cta}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
