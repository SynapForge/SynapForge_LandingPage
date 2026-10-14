import React from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mail,
  Linkedin,
  Globe,
  Code2,
  GraduationCap,
  Trophy,
  Briefcase,
  History,
  Cpu,
  UserCheck,
  ShieldCheck,
  Sparkles,
  FileText,
  Medal,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import { pick, t, TEAM, TEAM_CV } from "../data/i18n";

const tx = (lang, v) => (typeof v === "string" ? v : pick(lang, v.vi, v.en));

function renderAwardItem(rawText) {
  let icon = <Trophy className="w-4 h-4 text-[#FF5500] shrink-0" />;
  let clean = rawText;

  if (rawText.includes("🏆")) {
    icon = <Trophy className="w-4 h-4 text-amber-500 shrink-0" />;
    clean = rawText.replace(/🏆\s*/g, "");
  } else if (rawText.includes("📄")) {
    icon = <FileText className="w-4 h-4 text-sky-500 shrink-0" />;
    clean = rawText.replace(/📄\s*/g, "");
  } else if (rawText.includes("🎖️") || rawText.includes("🎖")) {
    icon = <Medal className="w-4 h-4 text-[#FF5500] shrink-0" />;
    clean = rawText.replace(/🎖️?\s*/g, "");
  } else {
    icon = <Sparkles className="w-4 h-4 text-[#FF5500] shrink-0" />;
  }

  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5">{icon}</span>
      <span>{clean}</span>
    </div>
  );
}

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
      <HeaderNav lang={lang} setLang={setLang} />

      <section className="gridbg pp-sec">
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: t(lang, "nav_home"), href: "#top" },
              { label: t(lang, "team_title"), href: "#team" },
              { label: m.name },
            ]}
          />
          <div className="sec-label cv-label">
            <span className="sq"></span>
            <span className="mono">
              // TEAM — {pad(i + 1)}/{pad(TEAM.length)}
            </span>
          </div>

          <div className="cv-grid" key={m.id}>
            {/* Left Sticky Sidebar: Photo + Fast Contact + Core Skills */}
            <aside className="cv-sidebar">
              <figure className="fig cv-fig" style={{ margin: 0 }}>
                <span className="tk">+</span>
                <span className="tk2">+</span>
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="figcap">
                  <span>{m.name}</span>
                  <span>{pad(i + 1)}/{pad(TEAM.length)}</span>
                </figcaption>
              </figure>

              {cv.links && (
                <div className="cv-sidebar-block">
                  <div className="cv-sidebar-title">
                    <span>{lang === "vi" ? "HỒ SƠ & LIÊN HỆ" : "LINKS & CONTACT"}</span>
                  </div>
                  <div className="cv-links">
                    {cv.links.portfolio && (
                      <a
                        className="cv-link-btn flex items-center gap-2"
                        href={cv.links.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                        <span>Portfolio</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-60 shrink-0" />
                      </a>
                    )}
                    {cv.links.github && (
                      <a
                        className="cv-link-btn flex items-center gap-2"
                        href={cv.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-60 shrink-0" />
                      </a>
                    )}
                    {cv.links.linkedin && (
                      <a
                        className="cv-link-btn flex items-center gap-2"
                        href={cv.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-60 shrink-0" />
                      </a>
                    )}
                    {cv.links.email && (
                      <a className="cv-link-btn flex items-center gap-2" href={`mailto:${cv.links.email}`}>
                        <Mail className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                        <span className="truncate">{cv.links.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {m.skills && m.skills.length > 0 && (
                <div className="cv-sidebar-block">
                  <div className="cv-sidebar-title">
                    <span>{lang === "vi" ? "THẾ MẠNH TRỌNG TÂM" : "CORE FOCUS"}</span>
                  </div>
                  <div className="chips">
                    {m.skills.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            {/* Right Content Body */}
            <div className="cv-body">
              <div className="cv-hero-card">
                <h1 className="cv-name">{m.name}</h1>
                <div className="cv-role">{m.role}</div>
                <div className="case-tag">{cv.title}</div>
              </div>

              <div className="cv-section-box">
                <h2 className="cv-h flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>{t(lang, "cv_about")}</span>
                </h2>
                <p className="case-desc">{tx(lang, cv.about)}</p>
              </div>

              {/* Duo Grid: Education & Certifications side-by-side */}
              <div className="cv-duo-grid">
                <div className="cv-section-box">
                  <h2 className="cv-h flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{t(lang, "cv_edu")}</span>
                  </h2>
                  <p className="case-desc">{tx(lang, cv.edu)}</p>
                </div>
                {cv.certs && (
                  <div className="cv-section-box">
                    <h2 className="cv-h flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#FF5500] shrink-0" />
                      <span>{t(lang, "cv_certs")}</span>
                    </h2>
                    <p className="case-desc">{tx(lang, cv.certs)}</p>
                  </div>
                )}
              </div>

              {cv.awards && cv.awards.length > 0 && (
                <div className="cv-section-box">
                  <h2 className="cv-h flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{t(lang, "cv_awards")}</span>
                  </h2>
                  <div className="case-feats">
                    {cv.awards.map((a, k) => (
                      <div key={k}>{renderAwardItem(tx(lang, a))}</div>
                    ))}
                  </div>
                </div>
              )}

              {cv.projects && cv.projects.length > 0 && (
                <div className="cv-section-box">
                  <h2 className="cv-h flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{t(lang, "cv_projects")}</span>
                  </h2>
                  <div className="cv-projects-list">
                    {cv.projects.map((p, k) => (
                      <div className="cv-proj-card" key={k}>
                        <div className="cv-proj-head">
                          <span className="cv-proj-name">{p.name}</span>
                          {p.time && <span className="cv-proj-time">{p.time}</span>}
                        </div>
                        {p.role && <div className="cv-proj-role">{tx(lang, p.role)}</div>}
                        {p.desc && <p className="cv-proj-desc">{tx(lang, p.desc)}</p>}
                        {p.tech && p.tech.length > 0 && (
                          <div className="chips cv-proj-chips">
                            {p.tech.map((tc) => (
                              <span className="chip" key={tc}>
                                {tc}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="cv-section-box">
                <h2 className="cv-h flex items-center gap-2">
                  <History className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>{t(lang, "cv_exp")}</span>
                </h2>
                <div className="case-feats">
                  {cv.exp.map((e, k) => (
                    <div key={k} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-1" />
                      <span>{tx(lang, e)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cv-section-box">
                <h2 className="cv-h flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>{t(lang, "cv_skills")}</span>
                </h2>
                <div className="chips">
                  {cv.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <nav className="cv-nav">
            <a className="btn-spec btn-ghost flex items-center gap-1.5" href={`#/doi-ngu/${prev.id}`}>
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span>{t(lang, "cv_prev")}</span>{" "}
              <span className="cv-nav-name">{prev.name}</span>
            </a>
            <div className="cv-nav-counter mono">
              {pad(i + 1)} / {pad(TEAM.length)}
            </div>
            <a className="btn-spec btn-solid flex items-center gap-1.5" href={`#/doi-ngu/${next.id}`}>
              <span className="cv-nav-name">{next.name}</span>{" "}
              <span>{t(lang, "cv_next")}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
