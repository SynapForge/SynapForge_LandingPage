import React, { useState, useEffect } from "react";
import MockupBView from "./components/MockupBView";
import ProductsPage from "./components/ProductsPage";
import MemberPage from "./components/MemberPage";
import ProductDetail from "./components/ProductDetail";
import ArticlesPage from "./components/ArticlesPage";
import ArticleDetail from "./components/ArticleDetail";
import { t, pick, TEAM, TEAM_CV, ALL_PRODUCTS } from "./data/i18n";
import { ARTICLES } from "./data/articlesData";

const SITE = "https://synapforge.id.vn";

// Old links used hash routes (/#/doi-ngu/x); move them to real paths.
function currentPath() {
  const { hash, pathname } = window.location;
  if (hash.startsWith("#/")) {
    window.history.replaceState(null, "", hash.slice(1));
    return hash.slice(1).split(/[?#]/)[0];
  }
  return pathname.replace(/\/+$/, "") || "/";
}

function detectLang() {
  try {
    const saved = localStorage.getItem("sf-lang");
    if (saved === "vi" || saved === "en") return saved;
  } catch {}
  return "vi";
}

export default function App() {
  const [lang, setLang] = useState(detectLang);
  const [path, setPath] = useState(currentPath);

  // Dynamic SEO: Persist lang + sync <html lang>, title, meta description & OG tags per route
  useEffect(() => {
    try {
      localStorage.setItem("sf-lang", lang);
    } catch {}
    document.documentElement.lang = lang;

    let pageTitle = t(lang, "meta_title");
    let pageDesc = t(lang, "meta_desc");

    const memberMatch = path.match(/^\/doi-ngu\/([\w-]+)/);
    const prodMatch = path.match(/^\/san-pham\/([\w-]+)/);
    const articleMatch = path.match(/^\/bai-viet\/([\w-]+)/);

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
    } else if (path.startsWith("/bai-viet")) {
      pageTitle = lang === "vi" ? "Kiến Thức & Case Studies Thực Chiến | SynapForge Studio" : "Engineering Insights & Real-World Case Studies | SynapForge";
      pageDesc = lang === "vi" ? "Góc nhìn kỹ thuật chuyên sâu về .NET 8 Clean Architecture, tự động hóa VietQR, giải pháp AI RAG và bài học phát triển MVP từ SynapForge." : "Deep-dive engineering insights on .NET 8 Clean Architecture, automated payments, AI RAG, and startup MVP development by SynapForge.";
    } else if (path.startsWith("/san-pham")) {
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
    const url = path === "/" ? `${SITE}/` : `${SITE}${path}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[name="twitter:url"]')?.setAttribute("content", url);
  }, [lang, path]);

  // Path routes: /san-pham, /doi-ngu/<id>, /bai-viet; plain #id = section anchor on the landing.
  useEffect(() => {
    const sync = () => setPath(currentPath());
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      const onLanding = window.location.pathname === "/";
      let to;
      if (href.startsWith("/") && !href.startsWith("//") && !/\.[a-z0-9]+($|[?#])/i.test(href)) to = href;
      else if (href.startsWith("#") && href.length > 1 && !onLanding) to = "/" + href;
      if (!to) return;
      e.preventDefault();
      window.history.pushState(null, "", to);
      if (!to.includes("#")) window.scrollTo(0, 0);
      sync();
    };
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const article = path.match(/^\/bai-viet\/([\w-]+)/);
  if (article)
    return <ArticleDetail slug={article[1]} lang={lang} setLang={setLang} />;
  if (path.startsWith("/bai-viet"))
    return <ArticlesPage lang={lang} setLang={setLang} />;

  const member = path.match(/^\/doi-ngu\/([\w-]+)/);
  if (member)
    return <MemberPage id={member[1]} lang={lang} setLang={setLang} />;
  const product = path.match(/^\/san-pham\/([\w-]+)/);
  if (product)
    return <ProductDetail id={product[1]} lang={lang} setLang={setLang} />;
  if (path.startsWith("/san-pham"))
    return <ProductsPage lang={lang} setLang={setLang} />;
  return <MockupBView lang={lang} setLang={setLang} />;
}
