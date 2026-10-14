import React, { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, Search, Tag, UserCheck, ShieldCheck } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import { ARTICLES } from "../data/articlesData";
import { t, pick } from "../data/i18n";

export default function ArticlesPage({ lang, setLang }) {
  const [activeTopic, setActiveTopic] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchTopic = activeTopic === "all" || a.topic === activeTopic;
      const titleStr = pick(lang, a.title.vi, a.title.en).toLowerCase();
      const excerptStr = pick(lang, a.excerpt.vi, a.excerpt.en).toLowerCase();
      const search = searchTerm.toLowerCase().trim();
      const matchSearch = !search || titleStr.includes(search) || excerptStr.includes(search);
      return matchTopic && matchSearch;
    });
  }, [activeTopic, searchTerm, lang]);

  const topics = [
    { id: "all", labelVi: "Tất cả bài viết", labelEn: "All Insights" },
    { id: "architecture", labelVi: "Case Study & Kiến trúc", labelEn: "Architecture & Case Studies" },
    { id: "pricing", labelVi: "Báo giá & Tư vấn SME", labelEn: "Pricing & Consulting" },
    { id: "ai", labelVi: "AI & Tự động hóa", labelEn: "AI & Automation" },
    { id: "process", labelVi: "Quy trình & Khởi nghiệp", labelEn: "Process & Startups" }
  ];

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      {/* Top Navigation */}
      <HeaderNav lang={lang} setLang={setLang} activeRoute="articles" />

      {/* Main Content */}
      <section className="gridbg pp-sec">
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: lang === "vi" ? "Trang chủ" : "Home", href: "#top" },
              { label: lang === "vi" ? "Kiến thức & Case Studies" : "Insights & Case Studies" }
            ]}
          />

          <div className="sec-label cv-label">
            <span className="sq"></span>
            <span className="mono">// KNOWLEDGE GRAPH — E-E-A-T INSIGHTS &amp; CASE STUDIES</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#1D1510]">
              {lang === "vi" ? "Góc Nhìn Kỹ Thuật & Case Study Thực Chiến" : "Engineering Insights & Real-World Case Studies"}
            </h1>
            <p className="max-w-3xl text-gray-600 text-sm sm:text-base leading-relaxed">
              {lang === "vi"
                ? "Tổng hợp kinh nghiệm thực chiến từ đội ngũ sáng lập SynapForge: kiến trúc .NET 8 Clean Architecture, tự động hóa thanh toán VietQR, giải pháp AI RAG và bài học phát triển MVP cho doanh nghiệp."
                : "Real-world engineering insights from SynapForge founders: .NET 8 Clean Architecture, automated payments, AI RAG integrations, and lessons on building scalable MVPs."}
            </p>
          </div>

          {/* Search & Topic Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E4DAC6]">
            {/* Topic pills */}
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => {
                const count = t.id === "all" ? ARTICLES.length : ARTICLES.filter((a) => a.topic === t.id).length;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTopic(t.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
                      activeTopic === t.id
                        ? "bg-[#FF5500] text-white shadow-sm"
                        : "bg-[#F4ECE1] text-[#1D1510] hover:bg-[#EAE0D3]"
                    }`}
                  >
                    <span>{lang === "vi" ? t.labelVi : t.labelEn}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeTopic === t.id ? "bg-white/20 text-white" : "bg-black/10 text-gray-700"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === "vi" ? "Tìm kiếm bài viết..." : "Search insights..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#E4DAC6] bg-white text-xs text-[#1D1510] focus:outline-none focus:border-[#FF5500]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-[#FAF7F2] rounded-2xl border border-[#E4DAC6]">
              <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 font-mono">
                {lang === "vi" ? "Không tìm thấy bài viết phù hợp." : "No articles found matching your criteria."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {filteredArticles.map((art) => {
                const title = pick(lang, art.title.vi, art.title.en);
                const excerpt = pick(lang, art.excerpt.vi, art.excerpt.en);
                const category = pick(lang, art.category, art.categoryEn);
                const readingTime = pick(lang, art.readingTime, art.readingTimeEn);

                return (
                  <article
                    key={art.slug}
                    className="flex flex-col rounded-2xl border border-[#E4DAC6] bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-[#FF5500]/60 transition-all group"
                  >
                    <a href={`#/bai-viet/${art.slug}`} className="block relative overflow-hidden aspect-[16/9] bg-[#F4ECE1]">
                      <img
                        src={art.coverImage}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=75";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#1D1510]/80 text-[#FF5500] backdrop-blur-sm border border-white/10">
                          {category}
                        </span>
                      </div>
                    </a>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 font-mono mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {art.publishedDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {readingTime}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-[#1D1510] group-hover:text-[#FF5500] transition-colors leading-snug">
                          <a href={`#/bai-viet/${art.slug}`}>{title}</a>
                        </h2>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                          {excerpt}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {art.tags.slice(0, 3).map((tg) => (
                            <span
                              key={tg}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4ECE1] text-gray-700"
                            >
                              #{tg}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-[#F0E8DC] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={art.author.avatar}
                              alt={art.author.name}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/team/trunglc-white-polo-glasses.png";
                              }}
                              className="w-7 h-7 rounded-full object-cover border border-[#E4DAC6]"
                            />
                            <div>
                              <div className="text-xs font-bold text-[#1D1510]">{art.author.name}</div>
                              <div className="text-[10px] text-gray-500">{art.author.role}</div>
                            </div>
                          </div>

                          <a
                            href={`#/bai-viet/${art.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#FF5500] hover:translate-x-0.5 transition-transform"
                          >
                            <span>{lang === "vi" ? "Đọc tiếp" : "Read more"}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* E-E-A-T Transparency Banner */}
          <div className="rounded-2xl bg-[#FAF7F2] border border-[#E4DAC6] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center text-[#FF5500] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1D1510] mb-1">
                  {lang === "vi" ? "Cam Kết Nội Dung 'Người Làm Thực' (E-E-A-T 2026)" : "Real-World Experience Guarantee (E-E-A-T 2026)"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                  {lang === "vi"
                    ? "Mọi bài viết và case study tại SynapForge đều do các kỹ sư và nhà sáng lập trực tiếp đúc kết từ các dự án đang chạy thật trong thực tế. Chúng tôi nói không với nội dung AI rỗng và lý thuyết suông."
                    : "All insights and case studies at SynapForge are written and verified by practicing engineering leads based on production systems. Zero thin AI spam."}
                </p>
              </div>
            </div>
            <a
              href="#estimator"
              className="btn-spec btn-solid whitespace-nowrap text-xs font-mono py-2.5 px-5"
            >
              {lang === "vi" ? "Tư Vấn Dự Án Của Bạn" : "Consult Your Project"}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
