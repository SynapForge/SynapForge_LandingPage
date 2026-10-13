import React from 'react';
import {
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cog,
} from 'lucide-react';
import Breadcrumb from './Breadcrumb';
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

      <section className="gridbg pp-sec">
        <div className="wrap" key={p.id}>
          <Breadcrumb
            items={[
              { label: t(lang, 'nav_home'), href: '#top' },
              { label: t(lang, 'nav_products'), href: '#/san-pham' },
              { label: p.title },
            ]}
          />
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
                <a className="btn-spec btn-solid flex items-center gap-1.5" href={p.url} target="_blank" rel="noopener noreferrer">
                  <span>{t(lang, 'pd_visit')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a className="btn-spec btn-solid flex items-center gap-1.5" href={ZALO_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  <span>{t(lang, 'pd_demo')}</span>
                </a>
              )}
            </div>
          </div>

          {p.problem && (
            <div className="pd-section">
              <h2 className="cv-h flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{t(lang, 'pd_problem')}</span>
              </h2>
              <div className="case-feats">
                {(Array.isArray(p.problem) ? p.problem : [p.problem]).map((prob, k) => (
                  <div key={k} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>{tx(prob)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {p.solution && (
            <div className="pd-section">
              <h2 className="cv-h flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>{t(lang, 'pd_solution')}</span>
              </h2>
              <div className="case-feats">
                {(Array.isArray(p.solution) ? p.solution : [p.solution]).map((sol, k) => (
                  <div key={k} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>{tx(sol)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(p.feats || (p.stats && p.stats.length > 0)) && (
            <div className="pd-info">
              {p.feats && (
                <div>
                  <h2 className="cv-h flex items-center gap-2" style={{ marginTop: 0 }}>
                    <Cog className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{t(lang, 'pd_feats_title')}</span>
                  </h2>
                  <div className="case-feats" style={{ marginTop: 14 }}>
                    {p.feats.map((f, k) => (
                      <div key={k} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{tx(f)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {p.stats && p.stats.length > 0 && (
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
                    <img
                      src={src}
                      alt={`${p.title} ${k + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="figcap">
                      <span>FIG. {pad(k + 1)} — {p.title}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          )}

          <nav className="cv-nav">
            <a className="btn-spec btn-ghost flex items-center gap-1.5" href={`#/san-pham/${prev.id}`}>
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>{t(lang, 'cv_prev')}</span> <span className="cv-nav-name">{prev.title}</span>
            </a>
            <a className="btn-spec btn-solid flex items-center gap-1.5" href={`#/san-pham/${next.id}`}>
              <span className="cv-nav-name">{next.title}</span> <span>{t(lang, 'cv_next')}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
