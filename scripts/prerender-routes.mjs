// Post-build: write dist/<route>/index.html for every path route so crawlers get
// the right title, description and canonical without running JS, and rebuild
// dist/sitemap.xml from the same route list.
import fs from "node:fs";
import path from "node:path";
import { TEAM, TEAM_CV, ALL_PRODUCTS, pick } from "../src/data/i18n.js";
import { ARTICLES } from "../src/data/articlesData.js";

const SITE = "https://synapforge.id.vn";
const dist = path.resolve(import.meta.dirname, "../dist");
const base = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const today = new Date().toISOString().slice(0, 10);
const vi = (v) => (typeof v === "string" ? v : pick("vi", v.vi, v.en));
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const routes = [
  {
    path: "/san-pham",
    title: "Toàn Bộ Sản Phẩm & Giải Pháp Phần Mềm | SynapForge Studio",
    desc: "Danh mục các sản phẩm in-house và giải pháp chuyển đổi số của SynapForge: BienSoVip, BrandHub AI, STEMGO.",
  },
  ...ALL_PRODUCTS.map((p) => ({
    path: `/san-pham/${p.id}`,
    title: `${p.title} — ${vi(p.tag)} | SynapForge`,
    desc: vi(p.desc),
  })),
  ...TEAM.filter((m) => TEAM_CV[m.id]).map((m) => ({
    path: `/doi-ngu/${m.id}`,
    title: `${m.name} — ${TEAM_CV[m.id].title} | SynapForge`,
    desc: vi(TEAM_CV[m.id].about),
  })),
  {
    path: "/bai-viet",
    title: "Kiến Thức & Case Studies Thực Chiến | SynapForge Studio",
    desc: "Góc nhìn kỹ thuật chuyên sâu về .NET 8 Clean Architecture, tự động hóa VietQR, giải pháp AI RAG và bài học phát triển MVP từ SynapForge.",
  },
  ...ARTICLES.map((a) => ({
    path: `/bai-viet/${a.slug}`,
    title: `${vi(a.title)} | SynapForge Insights`,
    desc: vi(a.excerpt),
    lastmod: a.modifiedDate || a.publishedDate,
  })),
];

const setMeta = (html, attr, key, value) =>
  html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), `$1${esc(value)}$2`);

for (const r of routes) {
  const url = `${SITE}${r.path}`;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setMeta(html, "name", "title", r.title);
  html = setMeta(html, "name", "description", r.desc);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", r.title);
  html = setMeta(html, "property", "og:description", r.desc);
  html = setMeta(html, "name", "twitter:url", url);
  html = setMeta(html, "name", "twitter:title", r.title);
  html = setMeta(html, "name", "twitter:description", r.desc);
  // /doi-ngu/x -> doi-ngu/x.html, served at /doi-ngu/x by Vercel cleanUrls.
  const file = path.join(dist, `${r.path}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, "utf8");
}

const urls = [{ path: "/", lastmod: today }, ...routes].map(
  (r) => `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${r.lastmod || today}</lastmod>\n  </url>`,
);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
  "utf8",
);
console.log(`[prerender-routes] ${routes.length} routes + sitemap.xml (${urls.length} URLs)`);
