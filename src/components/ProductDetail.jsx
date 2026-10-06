import React from 'react';
import { pick, t, ALL_PRODUCTS, ZALO_URL } from '../data/i18n';

export default function ProductDetail({ id, lang, setLang }) {
  const i = Math.max(0, ALL_PRODUCTS.findIndex((p) => p.id === id));
  const p = ALL_PRODUCTS[i];
  const prev = ALL_PRODUCTS[(i - 1 + ALL_PRODUCTS.length) % ALL_PRODUCTS.length];
  const next = ALL_PRODUCTS[(i + 1) % ALL_PRODUCTS.length];
  const tx = (o) => pick(lang, o.vi, o.en);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#/" className="brand">
            <img src="/brand/logo_primary.jpg" alt="SynapForge" className="brand-logo" />
          </a>
          <div className="flex items-center gap-3">
            <a className="pp-back" href="#/san-pham">{t(lang, 'pd_back')}</a>
            <div className="lang-pill" onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}>
              <span className={lang === 'vi' ? 'on' : ''}>VI</span>
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
            </div>
          </div>
        </div>
      </header>

      <section className="gridbg pp-sec">
        <div className="wrap" key={p.id}>
          <div className="sec-label cv-label">
            <span className="sq"></span>
            <span className="mono">// PRODUCT — {pad(i + 1)}/{pad(ALL_PRODUCTS.length)}</span>
          </div>

          <div className="pd-head">
            <div className="case-kicker">{p.kicker}</div>
            <h1 className="cv-name">{p.title}</h1>
            <div className="case-tag">{tx(p.tag)}</div>
            {p.desc && <p className="case-desc pd-desc">{tx(p.desc)}</p>}
            {p.stat && <div className="pp-stat">{tx(p.stat)}</div>}

            <div className="hero-ctas">
              {p.url ? (
                <a className="btn-spec btn-solid" href={p.url} target="_blank" rel="noopener noreferrer">{t(lang, 'pd_visit')}</a>
              ) : (
                <a className="btn-spec btn-solid" href={ZALO_URL} target="_blank" rel="noopener noreferrer">{t(lang, 'pd_demo')}</a>
              )}
            </div>
          </div>

          {(p.feats || p.stats.length > 0) && (
            <div className="pd-info">
              {p.feats && (
                <div className="case-feats">
                  {p.feats.map((f, k) => (
                    <div key={k}><span className="sq"></span><span>{tx(f)}</span></div>
                  ))}
                </div>
              )}
              {p.stats.length > 0 && (
                <div className="case-stats">
                  {p.stats.map((s, k) => (
                    <div key={k}><div className="v">{s.v}</div><div className="l">{tx(s.l)}</div></div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="chips">
            {p.chips.map((ch) => <span className="chip" key={ch}>{ch}</span>)}
          </div>

          {p.gallery && (
            <>
              <h2 className="cv-h pd-gal-h">{t(lang, 'pd_gallery')}</h2>
              <div className="pd-gallery">
                {p.gallery.map((src, k) => (
                  <figure className="fig" style={{ margin: 0 }} key={src}>
                    <span className="tk">+</span>
                    <span className="tk2">+</span>
                    <img src={src} alt={`${p.title} ${k + 1}`} loading="lazy" />
                    <figcaption className="figcap">
                      <span>FIG. {pad(k + 1)} — {p.title}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}

          <nav className="cv-nav">
            <a className="btn-spec btn-ghost" href={`#/san-pham/${prev.id}`}>
              {t(lang, 'cv_prev')} <span className="cv-nav-name">{prev.title}</span>
            </a>
            <a className="btn-spec btn-solid" href={`#/san-pham/${next.id}`}>
              <span className="cv-nav-name">{next.title}</span> {t(lang, 'cv_next')}
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
