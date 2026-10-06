import React from 'react';
import { useReveal } from './MockupBView';
import { pick, t, ALL_PRODUCTS, ROADMAP, ZALO_URL } from '../data/i18n';

export default function ProductsPage({ lang, setLang }) {
  useReveal('.sec-head, .prod');

  const built = ALL_PRODUCTS;

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#/" className="brand">
            <img src="/brand/logo_primary.jpg" alt="SynapForge" className="brand-logo" />
          </a>
          <div className="flex items-center gap-3">
            <a className="pp-back" href="#/">{t(lang, 'pp_back')}</a>
            <div className="lang-pill" onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}>
              <span className={lang === 'vi' ? 'on' : ''}>VI</span>
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section gridbg pp-sec">
        <div className="wrap">
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
                <span className="pd-more">{t(lang, 'pd_detail')}</span>
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
            <a className="btn-spec btn-solid" href={ZALO_URL} target="_blank" rel="noopener noreferrer">{t(lang, 'pp_cta')}</a>
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
