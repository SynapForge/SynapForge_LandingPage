import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cog,
  ArrowUpRight,
  X,
} from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { pick, t, ALL_PRODUCTS, ZALO_URL } from "../data/i18n";

export default function ProductDetail({ id, lang, setLang }) {
  const i = Math.max(0, ALL_PRODUCTS.findIndex((p) => p.id === id));
  const p = ALL_PRODUCTS[i];
  const prev = ALL_PRODUCTS[(i - 1 + ALL_PRODUCTS.length) % ALL_PRODUCTS.length];
  const next = ALL_PRODUCTS[(i + 1) % ALL_PRODUCTS.length];
  const tx = (o) => pick(lang, o.vi, o.en);
  const pad = (n) => String(n).padStart(2, "0");

  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => {
    setLightboxIdx(null);
  }, [id]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIdx(null);
      else if (e.key === "ArrowRight" && p.gallery) {
        setLightboxIdx((cur) => (cur + 1) % p.gallery.length);
      } else if (e.key === "ArrowLeft" && p.gallery) {
        setLightboxIdx((cur) => (cur - 1 + p.gallery.length) % p.gallery.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, p.gallery]);

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <HeaderNav lang={lang} setLang={setLang} activeRoute="products" />

      <main className="gridbg pp-sec">
        <div className="wrap" key={p.id}>
          <Breadcrumb
            items={[
              { label: t(lang, "nav_home"), href: "/" },
              { label: t(lang, "nav_products"), href: "/san-pham" },
              { label: p.title },
            ]}
          />
          <div className="sec-label cv-label">
            <span className="sq"></span>
            <span className="mono">
              // PRODUCT — {pad(i + 1)}/{pad(ALL_PRODUCTS.length)}
            </span>
          </div>

          <div className="pd-head">
            <h1 className="cv-name">{p.title}</h1>
            <div className="case-kicker mt-2">{p.kicker}</div>
            <div className="case-tag">{tx(p.tag)}</div>
            {p.desc && <p className="case-desc pd-desc">{tx(p.desc)}</p>}
            {p.stat && <div className="pp-stat">{tx(p.stat)}</div>}

            <div className="hero-ctas">
              {p.url ? (
                <a
                  className="btn-spec btn-solid"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t(lang, "pd_visit")} ({p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")})</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              ) : (
                <a
                  className="btn-spec btn-solid"
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{t(lang, "pd_demo")}</span>
                </a>
              )}

              {p.subLinks &&
                p.subLinks.map((sub) => (
                  <a
                    key={sub.href}
                    href={sub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-spec btn-ghost"
                  >
                    <span>{tx(sub.label)}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                ))}
            </div>
          </div>

          {p.problem && (
            <div className="pd-section">
              <h2 className="cv-h flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#c83e00] shrink-0" />
                <span>{t(lang, "pd_problem")}</span>
              </h2>
              <div className="case-feats">
                {(Array.isArray(p.problem) ? p.problem : [p.problem]).map((prob, k) => (
                  <div key={k}>
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                    <span>{tx(prob)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {p.solution && (
            <div className="pd-section">
              <h2 className="cv-h flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#c83e00] shrink-0" />
                <span>{t(lang, "pd_solution")}</span>
              </h2>
              <div className="case-feats">
                {(Array.isArray(p.solution) ? p.solution : [p.solution]).map((sol, k) => (
                  <div key={k}>
                    <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
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
                    <Cog className="w-4 h-4 text-[#c83e00] shrink-0" />
                    <span>{t(lang, "pd_feats_title")}</span>
                  </h2>
                  <div className="case-feats" style={{ marginTop: 14 }}>
                    {p.feats.map((f, k) => (
                      <div key={k}>
                        <CheckCircle2 className="w-4 h-4 text-[#c83e00] shrink-0 mt-0.5" />
                        <span>{tx(f)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {p.stats && p.stats.length > 0 && (
                <div className="case-stats">
                  {p.stats.map((s, k) => (
                    <div key={k}>
                      <div className="v">{s.v}</div>
                      <div className="l">{tx(s.l)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="chips">
            {p.chips.map((ch) => (
              <span className="chip" key={ch}>
                {ch}
              </span>
            ))}
          </div>

          {p.gallery && (
            <>
              <h2 className="cv-h pd-gal-h">{t(lang, "pd_gallery")}</h2>
              <div className="pd-gallery">
                {p.gallery.map((src, k) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightboxIdx(k)}
                    className="text-left bg-transparent border-0 p-0 cursor-pointer group"
                    aria-label={`${lang === "vi" ? "Phóng to ảnh" : "Zoom screenshot"} ${p.title} ${k + 1}`}
                  >
                    <figure className="fig" style={{ margin: 0 }}>
                      <span className="tk">+</span>
                      <span className="tk2">+</span>
                      <img
                        src={src}
                        alt={`${p.title} ${k + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="figcap">
                        <span>
                          FIG. {pad(k + 1)} — {p.title}
                        </span>
                        <span className="text-[#b83700] group-hover:underline">
                          {lang === "vi" ? "Phóng to" : "Zoom"}
                        </span>
                      </figcaption>
                    </figure>
                  </button>
                ))}
              </div>
            </>
          )}

          <nav className="cv-nav" aria-label="Product pagination">
            <a className="btn-spec btn-ghost" href={`/san-pham/${prev.id}`}>
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>{t(lang, "cv_prev")}</span> <span className="cv-nav-name">{prev.title}</span>
            </a>
            <a className="btn-spec btn-solid" href={`/san-pham/${next.id}`}>
              <span className="cv-nav-name">{next.title}</span> <span>{t(lang, "cv_next")}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </nav>
        </div>
      </main>

      {/* Accessible Lightbox Modal */}
      {lightboxIdx !== null && p.gallery && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${p.title} screenshot ${lightboxIdx + 1}`}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white border-2 border-[#1d1510] p-3 rounded-[2px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#dfd4be] font-mono text-xs">
              <span className="font-bold text-[#1d1510]">
                FIG. {pad(lightboxIdx + 1)} / {pad(p.gallery.length)} — {p.title}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx - 1 + p.gallery.length) % p.gallery.length)}
                  aria-label={lang === "vi" ? "Ảnh trước" : "Previous"}
                  className="min-w-[36px] min-h-[36px] border border-[#dfd4be] hover:border-[#1d1510] inline-flex items-center justify-center rounded-[2px]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % p.gallery.length)}
                  aria-label={lang === "vi" ? "Ảnh kế" : "Next"}
                  className="min-w-[36px] min-h-[36px] border border-[#dfd4be] hover:border-[#1d1510] inline-flex items-center justify-center rounded-[2px]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(null)}
                  aria-label={lang === "vi" ? "Đóng" : "Close"}
                  className="min-w-[36px] min-h-[36px] bg-[#1d1510] text-white inline-flex items-center justify-center rounded-[2px]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <img
              src={p.gallery[lightboxIdx]}
              alt={`${p.title} ${lightboxIdx + 1}`}
              className="w-full max-h-[78dvh] object-contain bg-[#fbf8f2]"
            />
          </div>
        </div>
      )}

      <Footer lang={lang} />
    </div>
  );
}
