import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check,
  Layers,
  Cpu,
  TrendingUp,
} from "lucide-react";
import SynapseCanvas from "./SynapseCanvas";
import SideStreams from "./SideStreams";
import HeaderNav from "./HeaderNav";
import SpecEstimatorSection from "./SpecEstimatorSection";
import Footer from "./Footer";
import Lenis from "lenis";
import {
  pick,
  t,
  HERO_STATS,
  TICKER,
  CASES,
  SERVICES,
  TEAM,
  FAQ,
  ZALO_URL,
} from "../data/i18n";
import { ARTICLES } from "../data/articlesData";

// Zero-blank-frame scramble: renders real text immediately on SSR/LCP frame 0,
// optional subtle decode effect only on pointer hover when motion is allowed.
function Scramble({ text }) {
  const [out, setOut] = useState(text);
  const timerRef = useRef(null);

  useEffect(() => {
    setOut(text);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text]);

  const triggerHover = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (timerRef.current) clearInterval(timerRef.current);
    const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+-";
    let frame = 0;
    timerRef.current = setInterval(() => {
      frame++;
      const reveal = Math.floor((frame / 10) * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (i < reveal || c === " ") s += c;
        else s += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      setOut(s);
      if (reveal >= text.length) {
        clearInterval(timerRef.current);
        setOut(text);
      }
    }, 20);
  };

  return <span onMouseEnter={triggerHover}>{out}</span>;
}

// Counts the leading number up when it scrolls into view ("05+" -> 00+ ... 05+)
function CountUp({ v }) {
  const m = v.match(/^(\d+)(.*)$/);
  const [n, setN] = useState(() => (m ? +m[1] : 0));
  const ref = useRef(null);
  const animatedOnce = useRef(false);

  useEffect(() => {
    if (!m || !ref.current || animatedOnce.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const end = +m[1];
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      animatedOnce.current = true;
      const t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / 900);
        setN(Math.round(end * (1 - (1 - k) ** 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [v]);

  if (!m) return v;
  return (
    <span ref={ref}>
      {String(n).padStart(m[1].length, "0")}
      {m[2]}
    </span>
  );
}

// Interactive Hero Live Production Stage showcasing BrandHub & BienSoVip
function HeroVentureStage({ lang }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CASES[activeIdx] || CASES[0];
  const domain = active.url ? active.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";

  return (
    <div className="venture-stage">
      <div className="venture-stage-tabs" role="tablist" aria-label={lang === "vi" ? "Chọn sản phẩm tiêu biểu" : "Select flagship venture"}>
        {CASES.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeIdx === idx}
            onClick={() => setActiveIdx(idx)}
            className={`venture-tab ${activeIdx === idx ? "is-active" : ""}`}
          >
            <span className="tabular-nums">0{idx + 1}</span>
            <span>{item.title}</span>
          </button>
        ))}
        <a
          href="/san-pham"
          className="venture-tab ml-auto"
          aria-label={lang === "vi" ? "Xem tất cả 4 sản phẩm" : "View all 4 ventures"}
        >
          <span>{lang === "vi" ? "04 Sản phẩm" : "04 Ventures"}</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <a
        href={`/san-pham/${active.id}`}
        className="fig fig-link"
        style={{ margin: 0 }}
        aria-label={`${lang === "vi" ? "Xem kiến trúc" : "Inspect"} ${active.title}`}
      >
        <span className="tk">+</span>
        <span className="tk2">+</span>
        <img
          src={active.img}
          alt={active.alt}
          fetchPriority="high"
          decoding="async"
          className="w-full aspect-[16/10] object-cover object-top"
        />
        <figcaption className="figcap">
          <span>{active.fig ? active.fig[0] : active.title}</span>
          <span className="inline-flex items-center gap-1.5 text-[#15803d] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" aria-hidden="true"></span>
            <span>LIVE · {domain}</span>
          </span>
        </figcaption>
      </a>

      <div className="venture-stage-metrics">
        {active.stats.slice(0, 3).map((st, idx) => (
          <div key={idx} className="min-w-0">
            <div className="v">{st.v}</div>
            <div className="l truncate">{pick(lang, st.l.vi, st.l.en)}</div>
          </div>
        ))}
      </div>

      <div className="venture-stage-actions">
        <a
          href={`/san-pham/${active.id}`}
          className="font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#b83700] hover:text-[#1D1510] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>{lang === "vi" ? "Phân tích kiến trúc" : "Architecture study"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        {active.url && (
          <a
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pd-live-btn"
          >
            <span className="live-pulse" aria-hidden="true"></span>
            <span>{domain}</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        )}
      </div>
    </div>
  );
}

// Smooth scroll reveal: activates/deactivates cleanly on scroll without opacity-blocking Hero
export function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
          } else {
            const rect = en.boundingClientRect;
            if (rect.top > window.innerHeight) {
              en.target.classList.remove("is-in");
            }
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

export default function MockupBView({ lang, setLang }) {
  const [activeSection, setActiveSection] = useState("top");
  const [copiedContact, setCopiedContact] = useState("");

  const copyContactField = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(key);
      setTimeout(() => setCopiedContact(""), 2000);
    } catch {}
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "model", "ventures", "services", "estimator", "team", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#" || href.startsWith("#/")) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.1 });
    };
    document.addEventListener("click", onClick);

    lenis.on("scroll", (l) => {
      document.documentElement.style.setProperty("--sp", l.progress);
    });

    const h = window.location.hash;
    if (h.length > 1 && !h.startsWith("#/")) {
      const el = document.querySelector(h);
      if (el) lenis.scrollTo(el, { offset: -80, immediate: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      document.documentElement.style.removeProperty("--sp");
      lenis.destroy();
    };
  }, []);

  useReveal(
    ".case, .sec-head, .svc-row, .member, .faq-item, .contact-grid, .flywheel-card, .flywheel-loop, .ety-grid > div",
  );

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <SideStreams lang={lang} />
      <HeaderNav lang={lang} setLang={setLang} activeRoute="home" />

      {/* ===== RAIL NAVIGATOR ===== */}
      <nav className="rail" aria-label="Section progress">
        <a className={activeSection === "top" ? "on" : ""} href="#top">
          <span className="l">{t(lang, "rail_intro")}</span>
          <span className="n">01</span>
        </a>
        <a className={activeSection === "model" ? "on" : ""} href="#model">
          <span className="l">{t(lang, "rail_model")}</span>
          <span className="n">02</span>
        </a>
        <a className={activeSection === "ventures" ? "on" : ""} href="#ventures">
          <span className="l">{t(lang, "nav_ventures")}</span>
          <span className="n">03</span>
        </a>
        <a className={activeSection === "services" ? "on" : ""} href="#services">
          <span className="l">{t(lang, "rail_services")}</span>
          <span className="n">04</span>
        </a>
        <a className={activeSection === "estimator" ? "on" : ""} href="#estimator">
          <span className="l">{lang === "vi" ? "Dự toán" : "Pricing"}</span>
          <span className="n">05</span>
        </a>
        <a className={activeSection === "team" ? "on" : ""} href="#team">
          <span className="l">{t(lang, "rail_team")}</span>
          <span className="n">06</span>
        </a>
        <a className={activeSection === "contact" ? "on" : ""} href="#contact">
          <span className="l">{t(lang, "rail_contact")}</span>
          <span className="n">07</span>
        </a>
      </nav>

      <main>
        {/* ===== HERO A/01 ===== */}
        <section className="hero-spec gridbg" id="top">
          <SynapseCanvas theme="light" opacity="0.18" className="z-10" />

          <div className="wrap hero-in">
            <div className="hero-eyebrow">
              <span className="sq"></span>
              <span className="mono text-xs">{t(lang, "hero_eyebrow")}</span>
            </div>

            <div className="hero-grid">
              <div>
                <h1>
                  <span className="blk">
                    <Scramble text={t(lang, "h1_a")} />
                  </span>
                  <span className="blk">
                    <Scramble text={t(lang, "h1_b")} />
                    <span className="curs"> 24/7</span>
                  </span>
                </h1>
                <p className="hero-sub">
                  <b>{t(lang, "sub_b")}</b> {t(lang, "sub_r")}
                </p>
                <div className="hero-ctas">
                  <a className="btn-spec btn-solid" href="#ventures">
                    <span>{t(lang, "cta_ventures")}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                  <a className="btn-spec btn-ghost" href="#estimator">
                    <span>{t(lang, "cta_contact")}</span>
                  </a>
                </div>
                <div className="hero-dual">
                  <span>
                    <b>{t(lang, "dual_label")}</b>
                  </span>
                  <a
                    href="https://brandhub.id.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#b83700] underline decoration-[#dfd4be] underline-offset-4 transition-colors"
                  >
                    BrandHub (brandhub.id.vn)
                  </a>
                  <a
                    href="https://biensovip.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#b83700] underline decoration-[#dfd4be] underline-offset-4 transition-colors"
                  >
                    BienSoVip (biensovip.com)
                  </a>
                  <span>· {t(lang, "dual_2")}</span>
                </div>
              </div>

              <div>
                <HeroVentureStage lang={lang} />
              </div>
            </div>

            <div className="hero-stats">
              {HERO_STATS.map((s) => (
                <div className="hero-stat" key={s.v}>
                  <div className="v">
                    <CountUp v={s.v} />
                  </div>
                  <div className="l">
                    {pick(lang, s.l1.vi, s.l1.en)}
                    <br />
                    {pick(lang, s.l2.vi, s.l2.en)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CAPABILITIES STRIP ===== */}
        <div className="spec-strip">
          <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3.5">
            {TICKER.map((s, i) => (
              <span className="spec-strip-item" key={i}>
                <span>{pick(lang, s.vi, s.en)}</span>
                {i < TICKER.length - 1 && (
                  <span className="spec-strip-sep" aria-hidden="true">
                    ◆
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ===== ETYMOLOGY ===== */}
        <section className="ety">
          <h2 className="sr-only">
            {lang === "vi" ? "Ý nghĩa thương hiệu SynapForge" : "SynapForge Brand Etymology"}
          </h2>
          <div className="wrap ety-grid">
            <div>
              <h3>
                <em>Syn</em>apse
              </h3>
              <p>{t(lang, "ety_syn")}</p>
            </div>
            <div>
              <h3>
                <em>Forge</em>
              </h3>
              <p>{t(lang, "ety_forge")}</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "15.5px",
                  fontWeight: 600,
                  color: "var(--ink)",
                  lineHeight: 1.55,
                }}
              >
                {t(lang, "ety_motto")}
              </p>
            </div>
          </div>
        </section>

        {/* ===== DUAL-ENGINE FLYWHEEL B/02 ===== */}
        <section className="flywheel-section" id="model">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">{t(lang, "flywheel_label")}</span>
              </div>
              <h2>
                <Scramble text={t(lang, "flywheel_title")} />
              </h2>
              <div className="sec-note">{t(lang, "flywheel_note")}</div>
            </div>

            <p className="flywheel-intro">{t(lang, "flywheel_sub")}</p>

            <div className="flywheel-grid">
              {/* Engine 1 */}
              <div className="flywheel-card">
                <div>
                  <span className="flywheel-badge inline-flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{t(lang, "engine1_badge")}</span>
                  </span>
                  <h3>{t(lang, "engine1_title")}</h3>
                  <div className="flywheel-sub-label">{t(lang, "engine1_sub")}</div>
                  <p className="flywheel-desc">{t(lang, "engine1_desc")}</p>
                </div>

                <div className="flywheel-list">
                  <div className="flywheel-item">
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{t(lang, "engine1_item1")}</span>
                  </div>
                  <div className="flywheel-item">
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{t(lang, "engine1_item2")}</span>
                  </div>
                  <div className="flywheel-item">
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{t(lang, "engine1_item3")}</span>
                  </div>
                </div>
              </div>

              {/* Engine 2 */}
              <div className="flywheel-card">
                <div>
                  <span className="flywheel-badge client inline-flex items-center gap-1.5" style={{ background: "var(--orange-cta)" }}>
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t(lang, "engine2_badge")}</span>
                  </span>
                  <h3>{t(lang, "engine2_title")}</h3>
                  <div className="flywheel-sub-label">{t(lang, "engine2_sub")}</div>
                  <p className="flywheel-desc">{t(lang, "engine2_desc")}</p>
                </div>

                <div className="flywheel-list">
                  <div className="flywheel-item">
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{t(lang, "engine2_item1")}</span>
                  </div>
                  <div className="flywheel-item">
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{t(lang, "engine2_item2")}</span>
                  </div>
                  <div className="flywheel-item">
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{t(lang, "engine2_item3")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Loop Cycle Bar */}
            <div className="flywheel-loop">
              <div className="flywheel-loop-head">
                <b className="inline-flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#c83e00]" />
                  <span>{t(lang, "loop_title")}</span>
                </b>
                <span className="sec-note">{t(lang, "loop_badge")}</span>
              </div>
              <div className="flywheel-loop-steps">
                <div className="flywheel-step">
                  <div className="num">{t(lang, "loop_s1_num")}</div>
                  <p className="txt">{t(lang, "loop_s1_txt")}</p>
                </div>
                <div className="flywheel-step">
                  <div className="num">{t(lang, "loop_s2_num")}</div>
                  <p className="txt">{t(lang, "loop_s2_txt")}</p>
                </div>
                <div className="flywheel-step">
                  <div className="num">{t(lang, "loop_s3_num")}</div>
                  <p className="txt">{t(lang, "loop_s3_txt")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VENTURES C/03 ===== */}
        <section className="section" id="ventures">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">// C/03 — VENTURES</span>
              </div>
              <h2>
                <Scramble text={t(lang, "ven_title")} />
              </h2>
              <div className="sec-note">{t(lang, "ven_note")}</div>
            </div>

            {CASES.map((c) => (
              <div className={`case${c.rev ? " rev" : ""}`} key={c.id}>
                <div className="case-txt">
                  <h3 style={{ marginTop: 0 }}>{c.title}</h3>
                  <div className="case-kicker mt-1.5">{c.kicker}</div>
                  <div className="case-tag">{pick(lang, c.tag.vi, c.tag.en)}</div>
                  <p className="case-desc">{pick(lang, c.desc.vi, c.desc.en)}</p>
                  <div className="case-feats">
                    {c.feats.map((f, i) => (
                      <div key={i}>
                        <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                        <span>{pick(lang, f.vi, f.en)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="case-stats">
                    {c.stats.map((s, i) => (
                      <div key={i}>
                        <div className="v">{s.v}</div>
                        <div className="l">{pick(lang, s.l.vi, s.l.en)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="chips">
                    {c.chips.map((ch) => (
                      <span className="chip" key={ch}>
                        {ch}
                      </span>
                    ))}
                  </div>
                  <div className="case-actions">
                    <a className="pd-more inline-flex items-center gap-1.5" href={`/san-pham/${c.id}`}>
                      <span>{t(lang, "pd_detail")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {c.url && (
                      <a
                        className="pd-live-btn"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Truy cập website ${c.title}`}
                      >
                        <span className="live-pulse" aria-hidden="true"></span>
                        <span>{c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    )}
                    {c.subLinks &&
                      c.subLinks.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] font-semibold text-[#524336] hover:text-[#b83700] inline-flex items-center gap-1 border border-[#dfd4be] bg-[#fbf8f2] px-2.5 py-1 rounded-[2px] transition-colors"
                        >
                          <span>{pick(lang, sub.label.vi, sub.label.en)}</span>
                          <ArrowUpRight className="w-3 h-3 shrink-0" />
                        </a>
                      ))}
                  </div>
                </div>
                <div className="case-img">
                  <a
                    href={c.url || `/san-pham/${c.id}`}
                    target={c.url ? "_blank" : undefined}
                    rel={c.url ? "noopener noreferrer" : undefined}
                    className="fig-link"
                    aria-label={`Xem dự án ${c.title}`}
                  >
                    <figure className="fig" style={{ margin: 0 }}>
                      <span className="tk">+</span>
                      <span className="tk2">+</span>
                      <img
                        src={c.img}
                        alt={c.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="figcap">
                        <span>{c.fig[0]}</span>
                        <span className="inline-flex items-center gap-1">
                          {c.url ? (
                            <>
                              <span>{c.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                              <ExternalLink className="w-3 h-3 inline-block" />
                            </>
                          ) : (
                            c.fig[1]
                          )}
                        </span>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            ))}

            <div className="ven-more">
              <a className="btn-spec btn-ghost" href="/san-pham">
                <span>{t(lang, "ven_more")}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* ===== SERVICES D/04 ===== */}
        <section className="section sec-paper border-y border-[#1d1510]" id="services">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">// D/04 — SERVICES</span>
              </div>
              <h2>
                <Scramble text={t(lang, "svc_title")} />
              </h2>
              <div className="sec-note">{t(lang, "svc_note")}</div>
            </div>

            {SERVICES.map((s) => (
              <div className="svc-row" key={s.num}>
                <div className="svc-num tabular-nums">{s.num}</div>
                <div className="svc">
                  <h3>{pick(lang, s.title.vi, s.title.en)}</h3>
                  <p className="svc-sub">{pick(lang, s.sub.vi, s.sub.en)}</p>
                  <div className="svc-deliv">
                    {s.chips.map((c, i) => (
                      <span className="chip" key={i}>
                        {pick(lang, c.vi, c.en)}
                      </span>
                    ))}
                  </div>
                  <div className="svc-tech">{pick(lang, s.tech.vi, s.tech.en)}</div>
                </div>
                <div className="svc-time tabular-nums">{pick(lang, s.time.vi, s.time.en)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PACKAGES & LIVE SCOPE ESTIMATOR D2/05 ===== */}
        <SpecEstimatorSection lang={lang} />

        {/* ===== TEAM E/05 ===== */}
        <section className="section sec-paper border-t border-[#1d1510]" id="team">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">// E/05 — TEAM</span>
              </div>
              <h2>
                <Scramble text={t(lang, "team_title")} />
              </h2>
              <div className="sec-note">{t(lang, "team_note")}</div>
            </div>

            <div className="team-grid">
              {TEAM.map((m) => (
                <div
                  className={`member ${m.id === "le-tri-trung" ? "is-lead" : ""}`}
                  key={m.name}
                >
                  <a
                    className="ph-link"
                    href={`/doi-ngu/${m.id}`}
                    aria-label={`${t(lang, "cv_open")} — ${m.name}`}
                  >
                    <img
                      className="ph"
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="ph-cta inline-flex items-center justify-center gap-1" style={{ background: "var(--orange-cta)" }}>
                      <span>{t(lang, "cv_open")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                  <p className="bio">{pick(lang, m.bio.vi, m.bio.en)}</p>
                  <div className="skills">
                    {m.skills.slice(0, 4).map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <a href={`/doi-ngu/${m.id}`} className="member-foot">
                    <span>{t(lang, "cv_open")}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">// FAQ</span>
              </div>
              <h2>
                <Scramble text={t(lang, "faq_title")} />
              </h2>
              <div className="sec-note">{t(lang, "faq_note")}</div>
            </div>

            {FAQ.map((f, i) => (
              <details className="faq-item" key={i} open={i === 0}>
                <summary>{pick(lang, f.q.vi, f.q.en)}</summary>
                <p>{pick(lang, f.a.vi, f.a.en)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ===== INSIGHTS & CASE STUDIES F/06 ===== */}
        <section className="section sec-paper border-t border-[#1d1510]" id="insights">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">// F/06 — INSIGHTS &amp; CASE STUDIES</span>
              </div>
              <h2>
                <Scramble
                  text={
                    lang === "vi"
                      ? "Góc Nhìn Kỹ Thuật & Case Studies"
                      : "Engineering Insights & Case Studies"
                  }
                />
              </h2>
              <div className="sec-note">
                {lang === "vi"
                  ? "Kinh nghiệm thực chiến về .NET 8 Clean Architecture, thanh toán VietQR và AI RAG"
                  : "Real-world production case studies on .NET 8 Clean Architecture, payments, and AI RAG"}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {ARTICLES.slice(0, 3).map((art) => (
                <a
                  key={art.slug}
                  href={`/bai-viet/${art.slug}`}
                  className="insight-card group"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#b83700] uppercase tracking-wider block mb-2.5">
                      {pick(lang, art.category, art.categoryEn)}
                    </span>
                    <h3>{pick(lang, art.title.vi, art.title.en)}</h3>
                    <p className="text-[13.5px] text-[#524336] line-clamp-3 mb-4 leading-relaxed max-w-[48ch]">
                      {pick(lang, art.excerpt.vi, art.excerpt.en)}
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-[#dfd4be] flex items-center justify-between text-[11.5px] font-mono text-[#524336] tabular-nums">
                    <span>{art.publishedDate}</span>
                    <span className="text-[#b83700] font-bold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{lang === "vi" ? "Xem chi tiết" : "Read"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="ven-more" style={{ marginTop: 40 }}>
              <a className="btn-spec btn-ghost" href="/bai-viet">
                <span>
                  {lang === "vi"
                    ? "Xem toàn bộ 20 bài viết & case studies"
                    : "Browse all 20 insights & case studies"}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>

        {/* ===== CONTACT G/07 ===== */}
        <section className="contact-spec gridbg" id="contact">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-label">
                <span className="sq"></span>
                <span className="mono">// G/07 — CONTACT</span>
              </div>
              <h2>
                <Scramble text={t(lang, "contact_title")} />
              </h2>
              <div className="sec-note">{t(lang, "contact_note")}</div>
            </div>

            <div className="contact-sla-grid">
              <div className="contact-sla-step">
                <div className="font-mono text-[11px] font-bold text-[#b83700] mb-1">
                  01 / {lang === "vi" ? "GỬI BÀI TOÁN (5 PHÚT)" : "SHARE YOUR BRIEF (5 MIN)"}
                </div>
                <p className="text-[13.5px] text-[#524336] m-0 leading-relaxed">
                  {lang === "vi"
                    ? "Nhắn nhu cầu qua Zalo hoặc gửi bản dự toán bạn vừa chọn — không cần tài liệu rườm rà."
                    : "Send your goals via Zalo or paste your estimate summary — no lengthy RFP required."}
                </p>
              </div>
              <div className="contact-sla-step">
                <div className="font-mono text-[11px] font-bold text-[#b83700] mb-1">
                  02 / {lang === "vi" ? "TECH LEAD PHÂN RÃ WBS" : "TECH LEAD WBS BREAKDOWN"}
                </div>
                <p className="text-[13.5px] text-[#524336] m-0 leading-relaxed">
                  {lang === "vi"
                    ? "Kỹ sư trưởng trực tiếp rà soát kiến trúc, chọn module có sẵn phù hợp để cắt giảm chi phí."
                    : "Lead architect maps your domain to proven SynapForge modules to eliminate R&D overhead."}
                </p>
              </div>
              <div className="contact-sla-step">
                <div className="font-mono text-[11px] font-bold text-[#b83700] mb-1">
                  03 / {lang === "vi" ? "BÁO GIÁ CỐ ĐỊNH TRONG 24H" : "FIXED QUOTE WITHIN 24H"}
                </div>
                <p className="text-[13.5px] text-[#524336] m-0 leading-relaxed">
                  {lang === "vi"
                    ? "Chốt chi phí trọn gói, lộ trình Sprint 40/60 và điều khoản bàn giao 100% mã nguồn."
                    : "Receive fixed pricing, 40/60 milestone plan, and 100% source code handover terms."}
                </p>
              </div>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="row">
                  <span className="k flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c83e00] shrink-0" />
                    <span>Email</span>
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a className="v" href="mailto:solutions@synapforge.id.vn">
                      solutions@synapforge.id.vn
                    </a>
                    <button
                      type="button"
                      onClick={() => copyContactField("email", "solutions@synapforge.id.vn")}
                      aria-label={lang === "vi" ? "Sao chép Email" : "Copy Email"}
                      title={lang === "vi" ? "Sao chép Email" : "Copy Email"}
                      className="min-w-[36px] min-h-[36px] px-2 inline-flex items-center justify-center border border-[#dfd4be] bg-white hover:border-[#1D1510] rounded-[2px] text-[#524336]"
                    >
                      {copiedContact === "email" ? (
                        <Check className="w-3.5 h-3.5 text-[#15803d]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="row">
                  <span className="k flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c83e00] shrink-0" />
                    <span>{t(lang, "contact_phone")}</span>
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a className="v tabular-nums" href="tel:+84912158715">
                      (+84) 912 158 715
                    </a>
                    <button
                      type="button"
                      onClick={() => copyContactField("phone", "0912158715")}
                      aria-label={lang === "vi" ? "Sao chép số điện thoại" : "Copy phone number"}
                      title={lang === "vi" ? "Sao chép số điện thoại" : "Copy phone number"}
                      className="min-w-[36px] min-h-[36px] px-2 inline-flex items-center justify-center border border-[#dfd4be] bg-white hover:border-[#1D1510] rounded-[2px] text-[#524336]"
                    >
                      {copiedContact === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-[#15803d]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="row">
                  <span className="k flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c83e00] shrink-0" />
                    <span>{t(lang, "contact_hq")}</span>
                  </span>
                  <span className="v">{t(lang, "contact_addr")}</span>
                </div>
              </div>

              <a
                className="btn-spec btn-solid"
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{t(lang, "contact_cta")}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
