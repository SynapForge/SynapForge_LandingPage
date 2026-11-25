import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Share2,
  Sparkles,
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { marked } from "marked";
import Breadcrumb from "./Breadcrumb";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { ARTICLES } from "../data/articlesData";
import { pick } from "../data/i18n";

export default function ArticleDetail({ slug, lang, setLang }) {
  const [sharedCopied, setSharedCopied] = useState(false);

  const article = ARTICLES.find((a) => a.slug === slug) || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const title = pick(lang, article.title.vi, article.title.en);
  const excerpt = pick(lang, article.excerpt.vi, article.excerpt.en);
  const quote = pick(lang, article.citabilityQuote.vi, article.citabilityQuote.en);
  const category = pick(lang, article.category, article.categoryEn);
  const readingTime = pick(lang, article.readingTime, article.readingTimeEn);
  const rawContent = pick(lang, article.content.vi, article.content.en);

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
      headline: title,
      description: excerpt,
      image: `https://synapforge.id.vn${article.coverImage}`,
      datePublished: article.publishedDate,
      dateModified: article.modifiedDate,
      author: {
        "@type": "Person",
        name: article.author.name,
        jobTitle: article.author.role,
        url: article.author.profileUrl,
        sameAs: [article.author.github],
      },
      publisher: {
        "@type": "Organization",
        name: "SynapForge Venture Studio",
        logo: {
          "@type": "ImageObject",
          url: "https://synapforge.id.vn/brand/logo_primary.jpg",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://synapforge.id.vn/bai-viet/${article.slug}`,
      },
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [article, title, excerpt]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url: window.location.href,
        });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      setSharedCopied(true);
      setTimeout(() => setSharedCopied(false), 2200);
    } catch {}
  };

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      <HeaderNav lang={lang} setLang={setLang} activeRoute="articles" />

      <main className="gridbg pp-sec">
        <article className="wrap max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: lang === "vi" ? "Trang chủ" : "Home", href: "/" },
              { label: lang === "vi" ? "Kiến thức & Case Studies" : "Insights", href: "/bai-viet" },
              { label: title },
            ]}
          />

          <header className="mb-8 pt-4">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#fbf8f2] text-[#b83700] border border-[#dfd4be]">
                {category}
              </span>
              <div className="flex items-center gap-4 text-xs font-mono text-[#524336] tabular-nums">
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

            <h1
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1510] leading-[1.2] mb-6"
              style={{ textWrap: "balance" }}
            >
              {title}
            </h1>

            <p className="text-base sm:text-lg text-[#524336] leading-relaxed mb-6 font-normal max-w-[52ch]" style={{ textWrap: "pretty" }}>
              {excerpt}
            </p>

            {/* Author Byline (E-E-A-T) */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#dfd4be] flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/team/trunglc-white-polo-glasses.png";
                  }}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#dfd4be] shadow-sm"
                />
                <div>
                  <div className="text-sm font-bold text-[#1D1510] flex items-center gap-1.5 flex-wrap">
                    <span>{article.author.name}</span>
                    <span className="text-[11.5px] bg-emerald-100 text-emerald-900 font-mono px-1.5 py-0.5 rounded-[2px] font-bold">
                      Verified Author
                    </span>
                  </div>
                  <div className="text-xs text-[#524336] font-mono">
                    {article.author.role} • SynapForge Studio
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="btn-spec btn-ghost text-xs py-2 px-3"
                title={lang === "vi" ? "Chia sẻ bài viết" : "Share this article"}
              >
                {sharedCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#15803d]" />
                    <span>{lang === "vi" ? "Đã sao chép!" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#c83e00]" />
                    <span>{lang === "vi" ? "Chia sẻ" : "Share"}</span>
                  </>
                )}
              </button>
            </div>
          </header>

          {/* Key Takeaway Block */}
          <section
            aria-label="Key Takeaways for AI & Readers"
            className="rounded-[2px] p-6 sm:p-7 bg-[#fbf8f2] border border-[#1D1510] mb-10 shadow-[3px_3px_0_#1d1510]"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#c83e00]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#b83700] uppercase">
                {lang === "vi" ? "Tóm tắt trích dẫn cốt lõi" : "Key Takeaways"}
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#1D1510] font-medium italic max-w-[52ch]">
              "{quote}"
            </p>
          </section>

          {/* Cover Image */}
          <figure className="fig mb-10 overflow-hidden" style={{ margin: "0 0 2.5rem 0" }}>
            <span className="tk">+</span>
            <span className="tk2">+</span>
            <img
              src={article.coverImage}
              alt={title}
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=75";
              }}
              className="w-full max-h-[460px] object-cover"
            />
            <figcaption className="figcap">
              <span>FIG. INSIGHT — {category}</span>
              <span>SYNAPFORGE ENGINEERING</span>
            </figcaption>
          </figure>

          {/* Body Content */}
          <div className="mb-12">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{
                __html: marked.parse(rawContent || "", { gfm: true, breaks: true }),
              }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 pb-8 border-t border-[#dfd4be] mb-10">
            <span className="text-xs font-mono text-[#524336] mr-2">
              {lang === "vi" ? "Từ khóa chủ đề:" : "Topics:"}
            </span>
            {article.tags.map((tg) => (
              <span
                key={tg}
                className="text-xs font-mono px-3 py-1 rounded-[2px] bg-[#fbf8f2] border border-[#dfd4be] text-[#1D1510]"
              >
                #{tg}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <section className="rounded-[2px] p-6 sm:p-8 bg-[#fbf8f2] border border-[#1D1510] mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-20 h-20 rounded-[2px] object-cover border border-[#1D1510] shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-base font-bold text-[#1D1510]">{article.author.name}</span>
                <span className="text-xs font-mono text-[#b83700] font-bold">({article.author.role})</span>
              </div>
              <p className="text-sm text-[#524336] leading-relaxed mb-4 max-w-[52ch]" style={{ textWrap: "pretty" }}>
                {lang === "vi"
                  ? "Tốt nghiệp Đại học FPT Đà Nẵng, chuyên sâu Kiến trúc phần mềm .NET 8 Clean Architecture, Domain-Driven Design (DDD), tối ưu hệ thống chịu tải cao và tích hợp AI. Trực tiếp dẫn dắt kỹ thuật cho các dự án flagship BienSoVip và BrandHub."
                  : "Graduate of FPT University Da Nang, specializing in .NET 8 Clean Architecture, Domain-Driven Design (DDD), high-load distributed systems, and enterprise AI integrations."}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={article.author.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#b83700] hover:underline"
                >
                  letritrung.id.vn →
                </a>
                <span className="text-[#dfd4be]">•</span>
                <a
                  href={article.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#524336] hover:text-[#1D1510]"
                >
                  GitHub @trung2605
                </a>
              </div>
            </div>
          </section>

          {/* Conversion CTA Box */}
          <section className="rounded-[2px] p-8 bg-[#1D1510] text-[#FBF8F2] border border-[#1D1510] mb-16 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 rounded-[2px] text-xs font-mono font-bold bg-[#c83e00] text-white mb-4">
                {lang === "vi" ? "TƯ VẤN KỸ THUẬT MIỄN PHÍ" : "FREE TECHNICAL CONSULTATION"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight" style={{ textWrap: "balance" }}>
                {lang === "vi"
                  ? "Bạn muốn xây dựng hệ thống phần mềm tương tự?"
                  : "Planning to build a similar software solution?"}
              </h2>
              <p className="text-xs sm:text-sm text-[#e4dac6] mb-6 leading-relaxed">
                {lang === "vi"
                  ? "Nhận tư vấn kiến trúc trực tiếp từ đội ngũ kỹ sư SynapForge, ước tính chi phí chuẩn xác và nhận báo giá trong vòng 24 giờ."
                  : "Get direct architectural consulting from SynapForge tech leads with precise estimates within 24 hours."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/#estimator"
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] inline-flex items-center justify-center rounded-[2px] bg-[#c83e00] hover:bg-[#a63300] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  {lang === "vi" ? "Dự toán chi phí dự án" : "Calculate Project Cost"}
                </a>
                <a
                  href="https://zalo.me/0912158715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] inline-flex items-center justify-center rounded-[2px] bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors border border-white/25"
                >
                  {lang === "vi" ? "Nhắn Zalo: 0912 158 715" : "Chat on Zalo"}
                </a>
              </div>
              <div className="mt-6 pt-5 border-t border-white/15 text-xs font-mono text-[#e4dac6] flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ffb24d]" />
                  <span>Hải Châu, Đà Nẵng</span>
                </span>
                <span className="inline-flex items-center gap-1.5 tabular-nums">
                  <Phone className="w-3.5 h-3.5 text-[#ffb24d]" />
                  <span>(+84) 912 158 715</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#ffb24d]" />
                  <span>Báo giá &amp; SLA trong 24 giờ</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffb24d]" />
                  <span>Bàn giao 100% Source Code</span>
                </span>
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
                    href={`/bai-viet/${rel.slug}`}
                    className="insight-card group"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#b83700] font-bold block mb-1.5 uppercase">
                        {pick(lang, rel.category, rel.categoryEn)}
                      </span>
                      <h3 className="text-base font-bold text-[#1D1510] line-clamp-2 mb-2">
                        {pick(lang, rel.title.vi, rel.title.en)}
                      </h3>
                      <p className="text-[13px] text-[#524336] line-clamp-2 mb-3 max-w-[46ch]">
                        {pick(lang, rel.excerpt.vi, rel.excerpt.en)}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#b83700] inline-flex items-center gap-1 pt-2 border-t border-[#dfd4be]">
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

      <Footer lang={lang} />
    </div>
  );
}
