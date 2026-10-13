import React, { useState, useEffect } from "react";
import MockupBView from "./components/MockupBView";
import ProductsPage from "./components/ProductsPage";
import MemberPage from "./components/MemberPage";
import ProductDetail from "./components/ProductDetail";
import ArticlesPage from "./components/ArticlesPage";
import ArticleDetail from "./components/ArticleDetail";
import { t, pick, TEAM, TEAM_CV, ALL_PRODUCTS } from "./data/i18n";
import { ARTICLES } from "./data/articlesData";

function detectLang() {
  try {
    const saved = localStorage.getItem("sf-lang");
    if (saved === "vi" || saved === "en") return saved;
  } catch {}
  return "vi";
}

export default function App() {
  const [lang, setLang] = useState(detectLang);
  const [hash, setHash] = useState(() => window.location.hash);

  // Dynamic SEO: Persist lang + sync <html lang>, title, meta description & OG tags per route
  useEffect(() => {
    try {
      localStorage.setItem("sf-lang", lang);
    } catch {}
    document.documentElement.lang = lang;

    let pageTitle = t(lang, "meta_title");
    let pageDesc = t(lang, "meta_desc");

    const memberMatch = hash.match(/^#\/doi-ngu\/([\w-]+)/);
    const prodMatch = hash.match(/^#\/san-pham\/([\w-]+)/);
    const articleMatch = hash.match(/^#\/bai-viet\/([\w-]+)/);

    if (memberMatch) {
      const m = TEAM.find((item) => item.id === memberMatch[1]);
      const cv = TEAM_CV[memberMatch[1]];
      if (m && cv) {
        pageTitle = `${m.name} — ${cv.title} | SynapForge`;
        pageDesc = typeof cv.about === "string" ? cv.about : pick(lang, cv.about.vi, cv.about.en);
      }
    } else if (prodMatch) {
      const p = ALL_PRODUCTS.find((item) => item.id === prodMatch[1]);
      if (p) {
        pageTitle = `${p.title} — ${pick(lang, p.tag.vi, p.tag.en)} | SynapForge`;
        pageDesc = typeof p.desc === "string" ? p.desc : pick(lang, p.desc.vi, p.desc.en);
      }
    } else if (articleMatch) {
      const a = ARTICLES.find((item) => item.slug === articleMatch[1]);
      if (a) {
        pageTitle = `${pick(lang, a.title.vi, a.title.en)} | SynapForge Insights`;
        pageDesc = pick(lang, a.excerpt.vi, a.excerpt.en);
      }
    } else if (hash.startsWith("#/bai-viet")) {
      pageTitle = lang === "vi" ? "Kiến Thức & Case Studies Thực Chiến | SynapForge Studio" : "Engineering Insights & Real-World Case Studies | SynapForge";
      pageDesc = lang === "vi" ? "Góc nhìn kỹ thuật chuyên sâu về .NET 8 Clean Architecture, tự động hóa VietQR, giải pháp AI RAG và bài học phát triển MVP từ SynapForge." : "Deep-dive engineering insights on .NET 8 Clean Architecture, automated payments, AI RAG, and startup MVP development by SynapForge.";
    } else if (hash.startsWith("#/san-pham")) {
      pageTitle = lang === "vi" ? "Toàn Bộ Sản Phẩm & Giải Pháp Phần Mềm | SynapForge Studio" : "All Products & Software Ventures | SynapForge Studio";
      pageDesc = lang === "vi" ? "Danh mục các sản phẩm in-house và giải pháp chuyển đổi số của SynapForge: BienSoVip, BrandHub AI, STEMGO." : "Catalog of in-house ventures and digital transformation platforms built by SynapForge.";
    }

    document.title = pageTitle;
    const mDesc = document.querySelector('meta[name="description"]');
    if (mDesc) mDesc.setAttribute("content", pageDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDesc);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", pageTitle);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", pageDesc);
  }, [lang, hash]);

  // Hash routes: #/san-pham, #/doi-ngu/<id>, #/bai-viet; anything else → landing (plain #id = section anchor)
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h.startsWith("#/")) window.scrollTo(0, 0);
      setHash(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const article = hash.match(/^#\/bai-viet\/([\w-]+)/);
  if (article)
    return <ArticleDetail slug={article[1]} lang={lang} setLang={setLang} />;
  if (hash.startsWith("#/bai-viet"))
    return <ArticlesPage lang={lang} setLang={setLang} />;

  const member = hash.match(/^#\/doi-ngu\/([\w-]+)/);
  if (member)
    return <MemberPage id={member[1]} lang={lang} setLang={setLang} />;
  const product = hash.match(/^#\/san-pham\/([\w-]+)/);
  if (product)
    return <ProductDetail id={product[1]} lang={lang} setLang={setLang} />;
  if (hash.startsWith("#/san-pham"))
    return <ProductsPage lang={lang} setLang={setLang} />;
  return <MockupBView lang={lang} setLang={setLang} />;
}
