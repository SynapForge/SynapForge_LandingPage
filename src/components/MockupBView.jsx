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
} from "lucide-react";
import SynapseCanvas from "./SynapseCanvas";
import SideStreams from "./SideStreams";
import HeaderNav from "./HeaderNav";
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
// Random-glyph reveal; replays whenever the mouse enters the text
function Scramble({ text }) {
  const [out, setOut] = useState(" ".repeat(text.length));
  const [run, setRun] = useState(0);
  useEffect(() => {
    const glyphs = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const reveal = Math.floor((frame / 28) * text.length);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (i < reveal) s += c;
        else if (c === " ") s += " ";
        else s += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      setOut(s);
      if (reveal >= text.length) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, [text, run]);
  return <span onMouseEnter={() => setRun((n) => n + 1)}>{out}</span>;
}

// Counts the leading number up when it scrolls into view ("05+" → 00+ … 05+)
function CountUp({ v }) {
  const m = v.match(/^(\d+)(.*)$/);
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!m || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const end = +m[1],
        t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / 1200);
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

const COLLAGE = [
  {
    src: "/stream/brandhub.jpg",
    title: "BrandHub",
    meta: "SaaS · AI MarTech",
    cls: "c1",
    href: "#/san-pham/brandhub",
  },
  {
    src: "/stream/pkg-mvp.jpg",
    title: "E-commerce",
    meta: "Web · Mobile",
    cls: "c2",
    href: "#/san-pham",
  },
  {
    src: "/stream/pkg-fast.jpg",
    title: "BienSoVip",
    meta: "Admin · Dashboard",
    cls: "c3",
    href: "#/san-pham/biensovip",
  },
];

// Hero: main figure + polaroids scattered on top (photo-collage look)
function HeroCollage() {
  return (
    <div className="collage">
      <a
        href="#/san-pham/biensovip"
        className="fig main"
        style={{ margin: 0 }}
        aria-label="Xem dự án BienSoVip Marketplace"
      >
        <span className="tk">+</span>
        <span className="tk2">+</span>
        <img
          src="/products/hero-marketplace.jpg"
          alt="BienSoVip marketplace"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="figcap">
          <span>FIG. 01 — BienSoVip Marketplace</span>
          <span className="flex items-center gap-1">
            <span>Production</span>
            <ArrowRight className="w-3 h-3 inline-block" />
          </span>
        </figcaption>
      </a>
      {COLLAGE.map((c) => (
        <a
          href={c.href}
          className={`pol ${c.cls}`}
          key={c.cls}
          aria-label={`Xem dự án ${c.title}`}
        >
          <img src={c.src} alt={c.title} loading="lazy" decoding="async" />
          <figcaption>
            <b>{c.title}</b>
            <span>{c.meta}</span>
          </figcaption>
        </a>
      ))}
    </div>
  );
}

// Tekmium-style scroll reveal: activates/deactivates smoothly on scroll down AND up
export function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
          } else {
            // Re-trigger animation when scrolled back up above the element
            const rect = en.boundingClientRect;
            if (rect.top > window.innerHeight) {
              en.target.classList.remove("is-in");
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

export default function MockupBView({ lang, setLang }) {
  const [activeSection, setActiveSection] = useState("top");

  // Track active section for rail navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "model", "ventures", "services", "team", "contact"];
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

  // Smooth scroll (Lenis) + anchor handling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
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
      if (!href || href === "#" || href.startsWith("#/")) return; // #/... = page route, let hashchange handle it
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    // Scroll progress bar (--sp) + gentle parallax on case images
    const figs = document.querySelectorAll(".case-img .fig");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    lenis.on("scroll", (l) => {
      document.documentElement.style.setProperty("--sp", l.progress);
      if (still) return;
      const vh = window.innerHeight;
      figs.forEach((f) => {
        const r = f.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        f.style.transform = `translateY(${((r.top + r.height / 2 - vh / 2) / vh) * -40}px)`;
      });
    });

    // Arrived with a section anchor (e.g. back from a CV page → #team): jump there
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
      {/* Side Streams HUD for Ultra-Wide Displays */}
      <SideStreams lang={lang} />

      {/* ===== TOP BAR ===== */}
      <HeaderNav lang={lang} setLang={setLang} activeRoute="home" />

      {/* ===== RAIL NAVIGATOR ===== */}
      <nav className="rail">
        <a className={activeSection === "top" ? "on" : ""} href="#top">
          <span className="l">{t(lang, "rail_intro")}</span>
          <span className="n">01</span>
        </a>
        <a className={activeSection === "model" ? "on" : ""} href="#model">
          <span className="l">{t(lang, "rail_model")}</span>
          <span className="n">02</span>
        </a>
        <a
          className={activeSection === "ventures" ? "on" : ""}
          href="#ventures"
        >
          <span className="l">{t(lang, "nav_ventures")}</span>
          <span className="n">03</span>
        </a>
        <a
          className={activeSection === "services" ? "on" : ""}
          href="#services"
        >
          <span className="l">{t(lang, "rail_services")}</span>
          <span className="n">04</span>
        </a>
        <a className={activeSection === "team" ? "on" : ""} href="#team">
          <span className="l">{t(lang, "rail_team")}</span>
          <span className="n">05</span>
        </a>
        <a className={activeSection === "contact" ? "on" : ""} href="#contact">
          <span className="l">{t(lang, "rail_contact")}</span>
          <span className="n">06</span>
        </a>
      </nav>

      {/* ===== HERO A/01 ===== */}
      <section className="hero-spec gridbg" id="top">
        {/* Effect 1: Synapse Canvas Interactive Background (Light Theme Optimized) */}
        <SynapseCanvas theme="light" opacity="0.22" className="z-40" />

        <div className="wrap hero-in">
          <div className="hero-eyebrow">
            <span className="sq"></span>
            <span className="mono">{t(lang, "hero_eyebrow")}</span>
          </div>

          <div className="hero-grid">
            <div>
              <h1>
                <span className="blk">
                  <Scramble text={t(lang, "h1_a")} />
                </span>
                <span className="blk">
                  <Scramble text={t(lang, "h1_b")} />
                  <span className="curs">
                    {" "}
                    <Scramble text="24/7" />
                  </span>
                </span>
              </h1>
              <p className="hero-sub">
                <b>{t(lang, "sub_b")}</b> {t(lang, "sub_r")}
              </p>
              <div className="hero-ctas">
                <a className="btn-spec btn-solid" href="#ventures">
                  {t(lang, "cta_ventures")}
                </a>
                <a className="btn-spec btn-ghost flex items-center gap-1.5" href="#contact">
                  <span>{t(lang, "cta_contact")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="hero-dual">
                <span>
                  <b>{t(lang, "dual_label")}</b>
                </span>
                <span>{t(lang, "dual_1")}</span>
                <span>{t(lang, "dual_2")}</span>
              </div>
            </div>

            <div>
              <HeroCollage />
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

      {/* ===== TICKER BANNER ===== */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((s, i) => (
            <span key={i}>{pick(lang, s.vi, s.en)}</span>
          ))}
        </div>
      </div>

      {/* ===== ETYMOLOGY ===== */}
      <section className="ety">
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
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--ink)",
                lineHeight: 1.5,
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
                <span className="flywheel-badge">
                  {t(lang, "engine1_badge")}
                </span>
                <h3>{t(lang, "engine1_title")}</h3>
                <div className="flywheel-sub-label">
                  {t(lang, "engine1_sub")}
                </div>
                <p className="flywheel-desc">{t(lang, "engine1_desc")}</p>
              </div>

              <div className="flywheel-list">
                <div className="flywheel-item flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>{t(lang, "engine1_item1")}</span>
                </div>
                <div className="flywheel-item flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>{t(lang, "engine1_item2")}</span>
                </div>
                <div className="flywheel-item flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>{t(lang, "engine1_item3")}</span>
                </div>
              </div>
            </div>

            {/* Engine 2 */}
            <div className="flywheel-card">
              <div>
                <span className="flywheel-badge client">
                  {t(lang, "engine2_badge")}
                </span>
                <h3>{t(lang, "engine2_title")}</h3>
                <div className="flywheel-sub-label">
                  {t(lang, "engine2_sub")}
                </div>
                <p className="flywheel-desc">{t(lang, "engine2_desc")}</p>
              </div>

              <div className="flywheel-list">
                <div className="flywheel-item flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>{t(lang, "engine2_item1")}</span>
                </div>
                <div className="flywheel-item flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>{t(lang, "engine2_item2")}</span>
                </div>
                <div className="flywheel-item flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                  <span>{t(lang, "engine2_item3")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Loop Cycle Bar */}
          <div className="flywheel-loop">
            <div className="flywheel-loop-head">
              <b>{t(lang, "loop_title")}</b>
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
                <div className="case-kicker">{c.kicker}</div>
                <h3>{c.title}</h3>
                <div className="case-tag">{pick(lang, c.tag.vi, c.tag.en)}</div>
                <p className="case-desc">{pick(lang, c.desc.vi, c.desc.en)}</p>
                <div className="case-feats">
                  {c.feats.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
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
                  <a className="pd-more flex items-center gap-1.5" href={`#/san-pham/${c.id}`}>
                    <span>{t(lang, "pd_detail")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  {c.url && (
                    <a
                      className="pd-live-btn flex items-center gap-1.5"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Truy cập website ${c.title}`}
                    >
                      <span className="live-pulse"></span>
                      <span>Website: {c.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
              <div className="case-img">
                <a
                  href={c.url || `#/san-pham/${c.id}`}
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
                      <span className="flex items-center gap-1">
                        {c.url ? (
                          <>
                            <span>{c.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
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
            <a className="btn-spec btn-ghost flex items-center gap-1.5" href="#/san-pham">
              <span>{t(lang, "ven_more")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES D/04 ===== */}
      <section className="section sec-paper" id="services">
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
              <div className="svc-num">{s.num}</div>
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
                <div className="svc-tech">
                  {pick(lang, s.tech.vi, s.tech.en)}
                </div>
              </div>
              <div className="svc-time">{pick(lang, s.time.vi, s.time.en)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TEAM E/05 ===== */}
      <section className="section sec-paper" id="team">
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
              <div className="member" key={m.name}>
                <a
                  className="ph-link"
                  href={`#/doi-ngu/${m.id}`}
                  aria-label={`${t(lang, "cv_open")} — ${m.name}`}
                >
                  <img
                    className="ph"
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="ph-cta flex items-center justify-center gap-1">
                    <span>{t(lang, "cv_open")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
                <div className="name">{m.name}</div>
                <div className="role">{m.role}</div>
                <p className="bio">{pick(lang, m.bio.vi, m.bio.en)}</p>
                <div className="skills">
                  {m.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
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
      <section className="section sec-paper" id="insights">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// F/06 — INSIGHTS &amp; CASE STUDIES</span>
            </div>
            <h2>
              <Scramble text={lang === "vi" ? "Góc Nhìn Kỹ Thuật & Case Studies" : "Engineering Insights & Case Studies"} />
            </h2>
            <div className="sec-note">
              {lang === "vi"
                ? "Kinh nghiệm thực chiến về .NET 8 Clean Architecture, thanh toán VietQR và AI RAG từ các dự án chạy thật"
                : "Real-world production case studies on .NET 8 Clean Architecture, automated payments, and AI RAG"}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ARTICLES.slice(0, 3).map((art) => (
              <a
                key={art.slug}
                href={`#/bai-viet/${art.slug}`}
                className="rounded-2xl border border-[#E4DAC6] bg-white p-6 hover:border-[#FF5500] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF5500] uppercase block mb-2">
                    {pick(lang, art.category, art.categoryEn)}
                  </span>
                  <h3 className="text-base font-bold text-[#1D1510] group-hover:text-[#FF5500] transition-colors leading-snug mb-3">
                    {pick(lang, art.title.vi, art.title.en)}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {pick(lang, art.excerpt.vi, art.excerpt.en)}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>{art.publishedDate}</span>
                  <span className="text-[#FF5500] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{lang === "vi" ? "Xem chi tiết" : "Read"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="ven-more">
            <a className="btn-spec btn-ghost flex items-center gap-1.5" href="#/bai-viet">
              <span>{lang === "vi" ? "Xem toàn bộ bài viết & case studies" : "Browse all insights & case studies"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
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

          <div className="contact-grid">
            <div className="contact-info">
              <div className="row">
                <span className="k flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span>Email</span>
                </span>
                <a className="v" href="mailto:solutions@synapforge.id.vn">
                  solutions@synapforge.id.vn
                </a>
              </div>
              <div className="row">
                <span className="k flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span>{t(lang, "contact_phone")}</span>
                </span>
                <a className="v" href="tel:+84912158715">
                  (+84) 912 158 715
                </a>
              </div>
              <div className="row">
                <span className="k flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                  <span>{t(lang, "contact_hq")}</span>
                </span>
                <span className="v">{t(lang, "contact_addr")}</span>
              </div>
            </div>

            <a
              className="btn-spec btn-solid flex items-center justify-center gap-2"
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

      {/* ===== FOOTER ===== */}
      <footer className="footer-spec">
        <div className="wrap foot-in">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-3">
              <span className="brand-name">
                Synap<em style={{ color: "var(--orange)" }}>Forge</em>
              </span>
              <span>© 2026 — Venture Studio &amp; Software Factory</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <a href="#/san-pham" className="hover:text-[#FF5500] transition-colors">{t(lang, "nav_ventures")}</a>
              <a href="#/bai-viet" className="hover:text-[#FF5500] transition-colors">{lang === "vi" ? "Kiến thức & Case Studies" : "Insights"}</a>
              <a href="#top" className="hover:text-[#FF5500] transition-colors">↑ Top</a>
            </div>
            <span>{t(lang, "footer_addr")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
