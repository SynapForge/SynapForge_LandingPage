import React from 'react';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { useReveal } from './MockupBView';
import Breadcrumb from './Breadcrumb';
import { pick, t, ALL_PRODUCTS, ROADMAP, ZALO_URL } from '../data/i18n';

export default function ProductsPage({ lang, setLang }) {
  useReveal('.sec-head, .prod');

  const built = ALL_PRODUCTS;

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#top" className="brand" title="SynapForge Home">
            <img src="/brand/logo_primary.jpg" alt="SynapForge" className="brand-logo" />
          </a>

          <nav className="top-nav">
            <a href="#model">{t(lang, "nav_model")}</a>
            <a href="#/san-pham" style={{ color: "var(--orange-deep)", fontWeight: 700 }}>
              {t(lang, "nav_ventures")}
            </a>
            <a href="#services">{t(lang, "nav_services")}</a>
            <a href="#team">{t(lang, "nav_team")}</a>
            <a href="#/bai-viet">{lang === "vi" ? "Kiến thức" : "Insights"}</a>
            <a href="#contact">{t(lang, "nav_contact")}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="lang-pill"
              role="button"
              tabIndex={0}
              aria-label={lang === "vi" ? "Chuyển sang tiếng Anh (EN)" : "Switch to Vietnamese (VI)"}
              onClick={() => setLang(lang === "vi" ? "en" : "vi")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLang(lang === "vi" ? "en" : "vi");
                }
              }}
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

      <section className="section gridbg pp-sec">
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: t(lang, 'nav_home'), href: '#top' },
              { label: t(lang, 'nav_products') },
            ]}
          />
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// PRODUCTS</span>
            </div>
            <h2>{t(lang, 'pp_title')}</h2>
            <div className="sec-note">{t(lang, 'pp_note')}</div>
          </div>

          <h3 className="pp-sub">{t(lang, 'pp_built')} — {String(built.length).padStart(2, '0')}</h3>
          <div className="prod-grid">
            {built.map((p) => (
              <a className="prod prod-link" href={`#/san-pham/${p.id}`} key={p.id}>
                {p.img && (
                  <figure className="fig" style={{ margin: 0 }}>
                    <span className="tk">+</span>
                    <span className="tk2">+</span>
                    <img src={p.img} alt={p.alt || p.title} loading="lazy" />
                  </figure>
                )}
                <div className="case-kicker">{p.kicker}</div>
                <h3>{p.title}</h3>
                <div className="case-tag">{pick(lang, p.tag.vi, p.tag.en)}</div>
                {p.desc && <p className="case-desc">{pick(lang, p.desc.vi, p.desc.en)}</p>}
                {p.stat && <div className="pp-stat">{pick(lang, p.stat.vi, p.stat.en)}</div>}
                {p.stats.length > 0 && (
                  <div className="case-stats">
                    {p.stats.map((s, i) => (
                      <div key={i}><div className="v">{s.v}</div><div className="l">{pick(lang, s.l.vi, s.l.en)}</div></div>
                    ))}
                  </div>
                )}
                <div className="chips">
                  {p.chips.map((ch) => <span className="chip" key={ch}>{ch}</span>)}
                </div>
                <span className="pd-more flex items-center gap-1">
                  <span>{t(lang, 'pd_detail')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>

          <h3 className="pp-sub">{t(lang, 'pp_next')}</h3>
          <div className="prod-grid">
            {ROADMAP.length === 0 ? (
              <div className="prod prod-next">{t(lang, 'pp_next_empty')}</div>
            ) : ROADMAP.map((p) => (
              <article className="prod prod-next" key={p.id}>
                {p.eta && <div className="case-kicker">{p.eta}</div>}
                <h3>{p.title}</h3>
                <div className="case-tag">{pick(lang, p.tag.vi, p.tag.en)}</div>
              </article>
            ))}
          </div>

          <div className="ven-more">
            <a className="btn-spec btn-solid flex items-center justify-center gap-2" href={ZALO_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{t(lang, 'pp_cta')}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-spec">
        <div className="wrap foot-in">
          <span className="brand-name">
            Synap<em style={{ color: 'var(--orange)' }}>Forge</em>
          </span>
          <span>© 2026 — Venture Studio &amp; Software Factory</span>
          <span>{t(lang, 'footer_addr')}</span>
        </div>
      </footer>
    </div>
  );
}
