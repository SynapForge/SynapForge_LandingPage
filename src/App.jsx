import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { ArrowUp } from "lucide-react";
import { TRANSLATIONS } from "./i18n";

// Modular Subcomponents
import Navbar from "./components/Navbar";
import SideStreams from "./components/SideStreams";
import HeroSection from "./components/HeroSection";
import MarqueeStrip from "./components/MarqueeStrip";
import EtymologySection from "./components/EtymologySection";
import FlywheelSection from "./components/FlywheelSection";
import FlagshipVenturesSection from "./components/FlagshipVenturesSection";
import EngineeringServices from "./components/EngineeringServices";
import SaasModulesSection from "./components/SaasModulesSection";
import PricingSection from "./components/PricingSection";
import ProjectEstimator from "./components/ProjectEstimator";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [formSent, setFormSent] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("vi");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Framer Motion Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const t = TRANSLATIONS[lang] || TRANSLATIONS.vi;

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleSubmitContact = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div
      className={`min-h-screen font-sans antialiased relative transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0B0F17] text-[#F3F4F6] selection:bg-[#FF5500] selection:text-white"
          : "bg-[#F8FAFC] text-[#0F172A] selection:bg-[#FF5500] selection:text-white"
      }`}
    >
      {/* Top Precision Kinetic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF5500] via-orange-400 to-amber-400 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(255,85,0,0.8)]"
        style={{ scaleX }}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-2xl bg-[#FF5500] hover:bg-[#E04B00] text-white shadow-xl shadow-[#FF5500]/30 backdrop-blur-md flex items-center justify-center transition-colors"
            title="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Side Streams for Ultra-wide Desktop */}
      <SideStreams t={t} theme={theme} />

      {/* Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* / Hero Header */}
      <HeroSection t={t} theme={theme} />

      {/* / Marquee Strip */}
      <MarqueeStrip />

      {/* / Name Etymology */}
      <EtymologySection />

      {/* / 01 Dual Engine Flywheel */}
      <FlywheelSection t={t} />

      {/* / 02 Flagship Ventures */}
      <FlagshipVenturesSection t={t} />

      {/* / 03 4 Engineering Services */}
      <EngineeringServices t={t} />

      {/* / 04 13 SaaS Modules */}
      <SaasModulesSection t={t} />

      {/* / 05 3 Pricing Packages & Escrow */}
      <PricingSection t={t} />

      {/* / 06 Interactive Project Cost Estimator */}
      <ProjectEstimator t={t} />

      {/* / 07 Core Engineering Team */}
      <TeamSection t={t} />

      {/* / Contact Discovery Form */}
      <ContactSection 
        t={t} 
        formSent={formSent} 
        handleSubmitContact={handleSubmitContact} 
      />

      {/* / Enterprise Rich Mega Footer */}
      <Footer t={t} />
    </div>
  );
}
