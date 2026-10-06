import React from "react";
import { pick, t, TEAM, TEAM_CV } from "../data/i18n";

const tx = (lang, v) => (typeof v === "string" ? v : pick(lang, v.vi, v.en));

export default function MemberPage({ id, lang, setLang }) {
  const i = Math.max(
    0,
    TEAM.findIndex((m) => m.id === id),
  );
  const m = TEAM[i];
  const cv = TEAM_CV[m.id];
  const prev = TEAM[(i - 1 + TEAM.length) % TEAM.length];
  const next = TEAM[(i + 1) % TEAM.length];
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#/" className="brand">
            <img
              src="/brand/logo_primary.jpg"
              alt="SynapForge"
              className="brand-logo"
            />
          </a>
          <div className="flex items-center gap-3">
            <a className="pp-back" href="#team">
              {t(lang, "cv_back")}
            </a>
            <div
              className="lang-pill"
              onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            >
              <span className={lang === "vi" ? "on" : ""}>VI</span>
              <span className={lang === "en" ? "on" : ""}>EN</span>
            </div>
          </div>
        </div>
      </header>

      <section className="gridbg pp-sec">
        <div className="wrap">
          <div className="sec-label cv-label">
            <span className="sq"></span>
            <span className="mono">
              // TEAM — {pad(i + 1)}/{pad(TEAM.length)}
            </span>
          </div>

          <div className="cv-grid" key={m.id}>
            <figure className="fig cv-fig" style={{ margin: 0 }}>
              <span className="tk">+</span>
              <span className="tk2">+</span>
              <img src={m.photo} alt={m.name} />
              <figcaption className="figcap">
                <span>{m.name}</span>
                <span>{pad(i + 1)}</span>
              </figcaption>
            </figure>

            <div className="cv-body">
              <h1 className="cv-name">{m.name}</h1>
              <div className="cv-role">{m.role}</div>
              <div className="case-tag">{cv.title}</div>

              <h2 className="cv-h">{t(lang, "cv_about")}</h2>
              <p className="case-desc">{tx(lang, cv.about)}</p>

              <h2 className="cv-h">{t(lang, "cv_edu")}</h2>
              <p className="case-desc">{tx(lang, cv.edu)}</p>

              <h2 className="cv-h">{t(lang, "cv_exp")}</h2>
              <div className="case-feats">
                {cv.exp.map((e, k) => (
                  <div key={k}>
                    <span className="sq"></span>
                    <span>{tx(lang, e)}</span>
                  </div>
                ))}
              </div>

              <h2 className="cv-h">{t(lang, "cv_skills")}</h2>
              <div className="chips">
                {cv.skills.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <nav className="cv-nav">
            <a className="btn-spec btn-ghost" href={`#/doi-ngu/${prev.id}`}>
              {t(lang, "cv_prev")}{" "}
              <span className="cv-nav-name">{prev.name}</span>
            </a>
            <a className="btn-spec btn-solid" href={`#/doi-ngu/${next.id}`}>
              <span className="cv-nav-name">{next.name}</span>{" "}
              {t(lang, "cv_next")}
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
