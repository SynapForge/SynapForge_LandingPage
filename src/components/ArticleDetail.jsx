import React, { useEffect, useMemo } from "react";
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, UserCheck, CheckCircle2, ArrowRight, Bookmark } from "lucide-react";
import { marked } from "marked";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import { ARTICLES } from "../data/articlesData";
import { t, pick } from "../data/i18n";

export default function ArticleDetail({ slug, lang, setLang }) {
  const article = ARTICLES.find((a) => a.slug === slug) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const title = pick(lang, article.title.vi, article.title.en);
  const excerpt = pick(lang, article.excerpt.vi, article.excerpt.en);
  const quote = pick(lang, article.citabilityQuote.vi, article.citabilityQuote.en);
  const category = pick(lang, article.category, article.categoryEn);
  const readingTime = pick(lang, article.readingTime, article.readingTimeEn);
  const rawContent = pick(lang, article.content.vi, article.content.en);

  // Dynamic Schema.org JSON-LD for Article / TechArticle
  useEffect(() => {
    const schemaId = "article-jsonld-schema";
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": title,
      "description": excerpt,
      "image": `https://synapforge.id.vn${article.coverImage}`,
      "datePublished": article.publishedDate,
      "dateModified": article.modifiedDate,
      "author": {
        "@type": "Person",
        "name": article.author.name,
        "jobTitle": article.author.role,
        "url": article.author.profileUrl,
        "sameAs": [article.author.github]
      },
      "publisher": {
        "@type": "Organization",
        "name": "SynapForge Venture Studio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://synapforge.id.vn/brand/logo_primary.jpg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://synapforge.id.vn/#/bai-viet/${article.slug}`
      }
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [article, title, excerpt]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(lang === "vi" ? "Đã sao chép liên kết bài viết!" : "Article link copied to clipboard!");
    }
  };

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      {/* Top Header */}
      <HeaderNav lang={lang} setLang={setLang} activeRoute="articles" />

      {/* Main Container */}
      <main className="gridbg pp-sec">
        <article className="wrap max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: lang === "vi" ? "Trang chủ" : "Home", href: "#top" },
              { label: lang === "vi" ? "Kiến thức & Case Studies" : "Insights", href: "#/bai-viet" },
              { label: title }
            ]}
          />

          {/* Article Header Meta */}
          <header className="mb-8 pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                {category}
              </span>
              <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1510] leading-[1.2] mb-6">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-normal">
              {excerpt}
            </p>

            {/* Author Byline (E-E-A-T) */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E4DAC6]">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/team/trunglc-white-polo-glasses.png";
                  }}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FF5500]/30 shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-[#1D1510] flex items-center gap-1.5">
                    <span>{article.author.name}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono px-1.5 py-0.2 rounded font-normal">
                      Verified Author
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    {article.author.role} • SynapForge Studio
                  </div>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="btn-spec btn-ghost text-xs font-mono py-2 px-3 flex items-center gap-1.5"
                title={lang === "vi" ? "Chia sẻ bài viết" : "Share this article"}
              >
                <Share2 className="w-3.5 h-3.5 text-[#FF5500]" />
                <span className="hidden sm:inline">{lang === "vi" ? "Chia sẻ" : "Share"}</span>
              </button>
            </div>
          </header>

          {/* Passage Citability Block (GEO / AEO Highlight) */}
          <section
            aria-label="Key Takeaways for AI & Readers"
            className="rounded-2xl p-6 sm:p-7 bg-[#FFF8F2] border-2 border-[#FF5500]/40 mb-10 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#FF5500]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#FF5500] uppercase">
                {lang === "vi" ? "Key Takeaway (Tóm Tắt Trích Dẫn Chuẩn GEO 2026)" : "Key Takeaways (GEO Citability)"}
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#1D1510] font-medium italic">
              "{quote}"
            </p>
          </section>

          {/* Cover Image */}
          <figure className="fig mb-10 overflow-hidden rounded-2xl" style={{ margin: 0 }}>
            <span className="tk">+</span>
            <span className="tk2">+</span>
            <img
              src={article.coverImage}
              alt={title}
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=75";
              }}
              className="w-full max-h-[460px] object-cover"
            />
            <figcaption className="figcap">
              <span>FIG. INSIGHT — {title}</span>
              <span>SYNAPFORGE ENGINEERING</span>
            </figcaption>
          </figure>

          {/* Body Content */}
          <div className="mb-12">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{
                __html: marked.parse(rawContent || "", { gfm: true, breaks: true })
              }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 pb-8 border-t border-[#E4DAC6] mb-10">
            <span className="text-xs font-mono text-gray-500 mr-2">
              {lang === "vi" ? "Từ khóa chủ đề:" : "Topics:"}
            </span>
            {article.tags.map((tg) => (
              <span
                key={tg}
                className="text-xs font-mono px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E4DAC6] text-gray-700"
              >
                #{tg}
              </span>
            ))}
          </div>

          {/* Author Bio Box (E-E-A-T Guarantee) */}
          <section className="rounded-2xl p-6 sm:p-8 bg-[#FAF7F2] border border-[#E4DAC6] mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#E4DAC6] shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-bold text-[#1D1510]">{article.author.name}</span>
                <span className="text-xs font-mono text-[#FF5500] font-bold">({article.author.role})</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                {lang === "vi"
                  ? "Tốt nghiệp Đại học FPT Đà Nẵng, chuyên sâu Kiến trúc phần mềm .NET 8 Clean Architecture, Domain-Driven Design (DDD), tối ưu hệ thống chịu tải cao và tích hợp AI. Người trực tiếp dẫn dắt kỹ thuật cho các dự án flagship BienSoVip và BrandHub AI."
                  : "Graduate of FPT University Da Nang, specializing in .NET 8 Clean Architecture, Domain-Driven Design (DDD), high-load distributed systems, and enterprise AI integrations."}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={article.author.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#FF5500] hover:underline"
                >
                  letritrung.id.vn →
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href={article.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-600 hover:text-black"
                >
                  GitHub @trung2605
                </a>
              </div>
            </div>
          </section>

          {/* Conversion CTA Box */}
          <section className="rounded-2xl p-8 bg-[#1D1510] text-[#E4DAC6] mb-16 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40 mb-4">
                {lang === "vi" ? "TƯ VẤN KỸ THUẬT MIỄN PHÍ" : "FREE TECHNICAL CONSULTATION"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === "vi"
                  ? "Bạn muốn xây dựng hệ thống phần mềm tương tự?"
                  : "Planning to build a similar software solution?"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                {lang === "vi"
                  ? "Nhận tư vấn kiến trúc trực tiếp từ đội ngũ kỹ sư SynapForge, ước tính chi phí chuẩn xác và nhận báo giá trong vòng 24 giờ."
                  : "Get direct architectural consulting from SynapForge tech leads with precise estimates within 24 hours."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#estimator"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs font-mono transition-colors"
                >
                  {lang === "vi" ? "Dự toán chi phí dự án" : "Calculate Project Cost"}
                </a>
                <a
                  href="https://zalo.me/0912158715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-mono transition-colors border border-white/20"
                >
                  {lang === "vi" ? "Nhắn Zalo: 0912 158 715" : "Chat on Zalo"}
                </a>
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 text-xs font-mono text-gray-400 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <span>📍 Trụ sở: Hải Châu, Đà Nẵng</span>
                <span>📞 Hotline: (+84) 912 158 715</span>
                <span>⚡ Báo giá &amp; SLA trong 24 giờ</span>
                <span>🛡️ Bàn giao 100% Source Code</span>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mb-12">
              <div className="sec-label cv-label mb-6">
                <span className="sq"></span>
                <span className="mono">// RELATED INSIGHTS — BÀI VIẾT LIÊN QUAN</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`#/bai-viet/${rel.slug}`}
                    className="p-5 rounded-2xl border border-[#E4DAC6] bg-white hover:border-[#FF5500] transition-colors block group"
                  >
                    <span className="text-[10px] font-mono text-[#FF5500] font-bold block mb-1">
                      {pick(lang, rel.category, rel.categoryEn)}
                    </span>
                    <h3 className="text-base font-bold text-[#1D1510] group-hover:text-[#FF5500] transition-colors line-clamp-2 mb-2">
                      {pick(lang, rel.title.vi, rel.title.en)}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                      {pick(lang, rel.excerpt.vi, rel.excerpt.en)}
                    </p>
                    <span className="text-xs font-mono font-bold text-[#FF5500] inline-flex items-center gap-1">
                      <span>{lang === "vi" ? "Đọc ngay" : "Read"}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

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
