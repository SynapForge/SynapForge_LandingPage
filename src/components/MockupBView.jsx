import React, { useState, useEffect, useRef } from "react";
import SynapseCanvas from "./SynapseCanvas";
import SideStreams from "./SideStreams";
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
  },
  {
    src: "/stream/pkg-mvp.jpg",
    title: "E-commerce",
    meta: "Web · Mobile",
    cls: "c2",
  },
  {
    src: "/stream/pkg-fast.jpg",
    title: "BienSoVip",
    meta: "Admin · Dashboard",
    cls: "c3",
  },
];

// Hero: main figure + polaroids scattered on top (photo-collage look)
function HeroCollage() {
  return (
    <div className="collage">
      <figure className="fig main" style={{ margin: 0 }}>
        <span className="tk">+</span>
        <span className="tk2">+</span>
        <img src="/products/hero-marketplace.jpg" alt="BienSoVip marketplace" />
        <figcaption className="figcap">
          <span>FIG. 01 — BienSoVip Marketplace</span>
          <span>Production</span>
        </figcaption>
      </figure>
      {COLLAGE.map((c) => (
        <figure className={`pol ${c.cls}`} key={c.cls}>
          <img src={c.src} alt={c.title} />
          <figcaption>
            <b>{c.title}</b>
            <span>{c.meta}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

// Tekmium-style scroll reveal: activates/deactivates smoothly on scroll down AND up
export function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
          } else {
            // Re-trigger animation when scrolled back into view from above or below
            const rect = en.boundingClientRect;
            // Only remove if scrolled sufficiently out of view to avoid flickering
            if (rect.top > window.innerHeight * 0.95 || rect.bottom < 0) {
              en.target.classList.remove("is-in");
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
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
      const sections = ["top", "ventures", "services", "team", "contact"];
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
    ".case, .sec-head, .svc-row, .member, .faq-item, .process-step, .pkg, .hero-stat, .contact-grid, .fig, .pol, .ph",
  );

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      {/* Side Streams HUD for Ultra-Wide Displays */}
      <SideStreams lang={lang} />

      {/* ===== TOP BAR ===== */}
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#top" className="brand">
            <img
              src="/brand/logo_primary.jpg"
              alt="SynapForge"
              className="brand-logo"
            />
          </a>

          <nav className="top-nav">
            <a href="#ventures">{t(lang, "nav_ventures")}</a>
            <a href="#services">{t(lang, "nav_services")}</a>
            <a href="#team">{t(lang, "nav_team")}</a>
            <a href="#contact">{t(lang, "nav_contact")}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="lang-pill"
              onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            >
              <span className={lang === "vi" ? "on" : ""}>VI</span>
              <span className={lang === "en" ? "on" : ""}>EN</span>
            </div>
            <a className="top-cta" href="#contact">
              {t(lang, "nav_cta")}
            </a>
          </div>
        </div>
      </header>

      {/* ===== RAIL NAVIGATOR ===== */}
      <nav className="rail">
        <a className={activeSection === "top" ? "on" : ""} href="#top">
          <span className="l">{t(lang, "rail_intro")}</span>
          <span className="n">01</span>
        </a>
        <a
          className={activeSection === "ventures" ? "on" : ""}
          href="#ventures"
        >
          <span className="l">{t(lang, "nav_ventures")}</span>
          <span className="n">02</span>
        </a>
        <a
          className={activeSection === "services" ? "on" : ""}
          href="#services"
        >
          <span className="l">{t(lang, "rail_services")}</span>
          <span className="n">03</span>
        </a>
        <a className={activeSection === "team" ? "on" : ""} href="#team">
          <span className="l">{t(lang, "rail_team")}</span>
          <span className="n">04</span>
        </a>
        <a className={activeSection === "contact" ? "on" : ""} href="#contact">
          <span className="l">{t(lang, "rail_contact")}</span>
          <span className="n">05</span>
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
                <a className="btn-spec btn-ghost" href="#contact">
                  {t(lang, "cta_contact")}
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

      {/* ===== VENTURES B/02 ===== */}
      <section className="section" id="ventures">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// B/02 — VENTURES</span>
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
                    <div key={i}>
                      <span className="sq"></span>
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
                <a className="pd-more" href={`#/san-pham/${c.id}`}>
                  {t(lang, "pd_detail")}
                </a>
              </div>
              <div className="case-img">
                <figure className="fig" style={{ margin: 0 }}>
                  <span className="tk">+</span>
                  <span className="tk2">+</span>
                  <img src={c.img} alt={c.alt} />
                  <figcaption className="figcap">
                    <span>{c.fig[0]}</span>
                    <span>{c.fig[1]}</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}

          <div className="ven-more">
            <a className="btn-spec btn-ghost" href="#/san-pham">
              {t(lang, "ven_more")}
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES C/03 ===== */}
      <section className="section sec-paper" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// C/03 — SERVICES</span>
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

      {/* ===== TEAM D/04 ===== */}
      <section className="section sec-paper" id="team">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// D/04 — TEAM</span>
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
                  />
                  <span className="ph-cta">{t(lang, "cv_open")} →</span>
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

      {/* ===== CONTACT E/05 ===== */}
      <section className="contact-spec gridbg" id="contact">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// E/05 — CONTACT</span>
            </div>
            <h2>
              <Scramble text={t(lang, "contact_title")} />
            </h2>
            <div className="sec-note">{t(lang, "contact_note")}</div>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="row">
                <span className="k">Email</span>
                <span className="v">contact@synapforge.dev</span>
              </div>
              <div className="row">
                <span className="k">{t(lang, "contact_phone")}</span>
                <a className="v" href="tel:+84912158715">
                  (+84) 912 158 715
                </a>
              </div>
              <div className="row">
                <span className="k">{t(lang, "contact_hq")}</span>
                <span className="v">{t(lang, "contact_addr")}</span>
              </div>
            </div>

            <a
              className="btn-spec btn-solid"
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(lang, "contact_cta")}
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-spec">
        <div className="wrap foot-in">
          <span className="brand-name">
            Synap<em style={{ color: "var(--orange)" }}>Forge</em>
          </span>
          <span>© 2026 — Venture Studio &amp; Software Factory</span>
          <span>{t(lang, "footer_addr")}</span>
        </div>
      </footer>
    </div>
  );
}
