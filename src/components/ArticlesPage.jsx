import React, { useState, useMemo } from "react";
import { ArrowRight, BookOpen, Clock, Calendar, Search, ShieldCheck } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { ARTICLES } from "../data/articlesData";
import { pick } from "../data/i18n";

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
    { id: "process", labelVi: "Quy trình & Khởi nghiệp", labelEn: "Process & Startups" },
  ];

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <HeaderNav lang={lang} setLang={setLang} activeRoute="articles" />

      <main className="gridbg pp-sec">
        <div className="pp-wide">
          <Breadcrumb
            items={[
              { label: lang === "vi" ? "Trang chủ" : "Home", href: "/" },
              { label: lang === "vi" ? "Kiến thức & Case Studies" : "Insights & Case Studies" },
            ]}
          />

          <div className="sec-label cv-label">
            <span className="sq"></span>
            <span className="mono">// KNOWLEDGE GRAPH — E-E-A-T INSIGHTS &amp; CASE STUDIES</span>
          </div>

          <div className="mb-10">
            <h1
              className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#1D1510]"
              style={{ textWrap: "balance" }}
            >
              {lang === "vi"
                ? "Góc Nhìn Kỹ Thuật & Case Study Thực Chiến"
                : "Engineering Insights & Real-World Case Studies"}
            </h1>
            <p className="max-w-[52ch] text-[#524336] text-sm sm:text-base leading-relaxed" style={{ textWrap: "pretty" }}>
              {lang === "vi"
                ? "Tổng hợp kinh nghiệm thực chiến từ đội ngũ sáng lập SynapForge: kiến trúc .NET 8 Clean Architecture, tự động hóa thanh toán VietQR, giải pháp AI GraphRAG và bài học phát triển MVP cho doanh nghiệp."
                : "Real-world engineering insights from SynapForge founders: .NET 8 Clean Architecture, automated payments, AI GraphRAG integrations, and lessons on building scalable MVPs."}
            </p>
          </div>

          {/* Search & Topic Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#dfd4be]">
            <div className="flex flex-wrap gap-2">
              {topics.map((tp) => {
                const count = tp.id === "all" ? ARTICLES.length : ARTICLES.filter((a) => a.topic === tp.id).length;
                const active = activeTopic === tp.id;
                return (
                  <button
                    key={tp.id}
                    type="button"
                    onClick={() => setActiveTopic(tp.id)}
                    aria-pressed={active}
                    className={`min-h-[36px] px-3.5 py-1.5 rounded-[2px] border text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${
                      active
                        ? "bg-[#c83e00] border-[#1D1510] text-white"
                        : "bg-[#fbf8f2] border-[#dfd4be] text-[#1D1510] hover:border-[#1D1510]"
                    }`}
                  >
                    <span>{lang === "vi" ? tp.labelVi : tp.labelEn}</span>
                    <span
                      className={`text-[11.5px] px-1.5 py-0.5 rounded-[2px] tabular-nums ${
                        active ? "bg-[#1D1510] text-white" : "bg-[#f4efe4] text-[#524336]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-[#524336] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                aria-label={lang === "vi" ? "Tìm kiếm bài viết" : "Search insights"}
                placeholder={lang === "vi" ? "Tìm kiếm bài viết..." : "Search insights..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full min-h-[40px] pl-9 pr-3 py-1.5 rounded-[2px] border border-[#1D1510] bg-white text-xs text-[#1D1510] placeholder:text-[#524336] focus:outline-none focus:border-[#c83e00]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-[#fbf8f2] rounded-[2px] border border-[#1D1510] mb-12">
              <BookOpen className="w-8 h-8 text-[#524336] mx-auto mb-2" />
              <h2 className="text-base font-bold text-[#1D1510] mb-1">
                {lang === "vi" ? "Không tìm thấy bài viết phù hợp" : "No matching insights found"}
              </h2>
              <p className="text-xs text-[#524336] font-mono mb-4">
                {lang === "vi" ? "Thử xóa bộ lọc hoặc tìm từ khóa khác." : "Try resetting filters or searching another keyword."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTopic("all");
                  setSearchTerm("");
                }}
                className="btn-spec btn-ghost"
              >
                {lang === "vi" ? "Xem tất cả bài viết" : "Reset filters"}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
              {filteredArticles.map((art) => {
                const title = pick(lang, art.title.vi, art.title.en);
                const excerpt = pick(lang, art.excerpt.vi, art.excerpt.en);
                const category = pick(lang, art.category, art.categoryEn);
                const readingTime = pick(lang, art.readingTime, art.readingTimeEn);

                return (
                  <article
                    key={art.slug}
                    className="flex flex-col rounded-[2px] border border-[#1D1510] bg-white overflow-hidden shadow-[3px_3px_0_#1d1510] hover:shadow-[5px_5px_0_#1d1510] hover:border-[#c83e00] transition-all group"
                  >
                    <a href={`/bai-viet/${art.slug}`} className="block relative overflow-hidden aspect-[16/9] bg-[#f4efe4] border-b border-[#dfd4be]">
                      <img
                        src={art.coverImage}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=75";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#1D1510] text-white border border-white/20">
                          {category}
                        </span>
                      </div>
                    </a>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-[#524336] font-mono mb-3 tabular-nums">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {art.publishedDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {readingTime}
                          </span>
                        </div>

                        <h2
                          className="text-xl font-extrabold tracking-tight mb-3 text-[#1D1510] group-hover:text-[#b83700] transition-colors leading-snug"
                          style={{ textWrap: "balance" }}
                        >
                          <a href={`/bai-viet/${art.slug}`}>{title}</a>
                        </h2>

                        <p className="text-[#524336] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                          {excerpt}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {art.tags.slice(0, 3).map((tg) => (
                            <span
                              key={tg}
                              className="text-xs font-mono px-2 py-0.5 rounded-[2px] border border-[#dfd4be] bg-[#fbf8f2] text-[#524336]"
                            >
                              #{tg}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-[#dfd4be] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={art.author.avatar}
                              alt={art.author.name}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/team/trunglc-white-polo-glasses.png";
                              }}
                              className="w-7 h-7 rounded-full object-cover border border-[#dfd4be]"
                            />
                            <div>
                              <div className="text-xs font-bold text-[#1D1510]">{art.author.name}</div>
                              <div className="text-xs text-[#524336]">{art.author.role}</div>
                            </div>
                          </div>

                          <a
                            href={`/bai-viet/${art.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#b83700] hover:translate-x-0.5 transition-transform"
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
          <div className="rounded-[2px] bg-[#fbf8f2] border border-[#1D1510] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 shadow-[3px_3px_0_#1d1510]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[2px] bg-[#f4efe4] border border-[#1D1510] flex items-center justify-center text-[#c83e00] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#1D1510] mb-1">
                  {lang === "vi"
                    ? "Cam Kết Nội Dung 'Người Làm Thực' (E-E-A-T 2026)"
                    : "Real-World Experience Guarantee (E-E-A-T 2026)"}
                </h2>
                <p className="text-xs sm:text-sm text-[#524336] max-w-2xl leading-relaxed">
                  {lang === "vi"
                    ? "Mọi bài viết và case study tại SynapForge đều do các kỹ sư và nhà sáng lập trực tiếp đúc kết từ các dự án đang chạy thật trong thực tế."
                    : "All insights and case studies at SynapForge are written and verified by practicing engineering leads based on production systems."}
                </p>
              </div>
            </div>
            <a href="/#estimator" className="btn-spec btn-solid whitespace-nowrap">
              {lang === "vi" ? "Dự toán chi phí dự án" : "Estimate Project Cost"}
            </a>
          </div>
        </div>
      </main>

      <Footer lang={lang} wide />
    </div>
  );
}
