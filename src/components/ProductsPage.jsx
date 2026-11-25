import React from "react";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { useReveal } from "./MockupBView";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { pick, t, ALL_PRODUCTS, ZALO_URL } from "../data/i18n";

export default function ProductsPage({ lang, setLang }) {
  useReveal(".sec-head, .prod");

  const built = ALL_PRODUCTS;

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <HeaderNav lang={lang} setLang={setLang} activeRoute="products" />

      <main className="section gridbg pp-sec">
        <div className="pp-wide">
          <Breadcrumb
            items={[
              { label: t(lang, "nav_home"), href: "/" },
              { label: t(lang, "nav_products") },
            ]}
          />
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// PRODUCTS</span>
            </div>
            <h1 className="font-extrabold text-[clamp(26px,3.6vw,42px)] tracking-tight m-0 text-[#1D1510]" style={{ textWrap: "balance" }}>
              {t(lang, "pp_title")}
            </h1>
            <div className="sec-note">{t(lang, "pp_note")}</div>
          </div>

          <h2 className="pp-sub tabular-nums">
            {t(lang, "pp_built")} — {String(built.length).padStart(2, "0")}
          </h2>
          <div className="prod-grid">
            {built.map((p) => {
              const domain = p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
              return (
                <article className="prod" key={p.id}>
                  <a href={`/san-pham/${p.id}`} className="block text-inherit no-underline">
                    {p.img && (
                      <figure className="fig" style={{ margin: 0 }}>
                        <span className="tk">+</span>
                        <span className="tk2">+</span>
                        <img
                          src={p.img}
                          alt={p.alt || p.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    )}
                    <h3 style={{ marginTop: 10 }}>{p.title}</h3>
                    <div className="flex items-center justify-between gap-2 mt-2 flex-wrap">
                      <span className="case-kicker">{p.kicker}</span>
                      {domain && (
                        <span className="font-mono text-[11.5px] font-bold px-2 py-0.5 bg-[#f4efe4] border border-[#1d1510] text-[#1d1510] rounded-[2px]">
                          {domain}
                        </span>
                      )}
                    </div>
                    <div className="case-tag">{pick(lang, p.tag.vi, p.tag.en)}</div>
                    {p.desc && <p className="case-desc">{pick(lang, p.desc.vi, p.desc.en)}</p>}
                  </a>

                  {p.stat && <div className="pp-stat">{pick(lang, p.stat.vi, p.stat.en)}</div>}
                  {p.stats.length > 0 && (
                    <div className="case-stats">
                      {p.stats.map((s, i) => (
                        <div key={i}>
                          <div className="v">{s.v}</div>
                          <div className="l">{pick(lang, s.l.vi, s.l.en)}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="chips">
                    {p.chips.slice(0, 6).map((ch) => (
                      <span className="chip" key={ch}>
                        {ch}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-dashed border-[#dfd4be] flex items-center justify-between gap-3 flex-wrap">
                    <a
                      href={`/san-pham/${p.id}`}
                      className="inline-flex items-center gap-1.5 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[#b83700] hover:text-[#1D1510]"
                    >
                      <span>{t(lang, "pd_detail")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#1d1510] hover:text-[#b83700]"
                      >
                        <span>{domain}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="ven-more">
            <a
              className="btn-spec btn-solid"
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{t(lang, "pp_cta")}</span>
            </a>
          </div>
        </div>
      </main>

      <Footer lang={lang} wide />
    </div>
  );
}
