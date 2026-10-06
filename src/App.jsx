import React, { useState, useEffect } from 'react';
import MockupBView from './components/MockupBView';
import ProductsPage from './components/ProductsPage';
import MemberPage from './components/MemberPage';
import ProductDetail from './components/ProductDetail';
import { t } from './data/i18n';

function detectLang() {
  try {
    const saved = localStorage.getItem('sf-lang');
    if (saved === 'vi' || saved === 'en') return saved;
  } catch {}
  return (navigator.language || 'vi').toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

export default function App() {
  const [lang, setLang] = useState(detectLang);
  const [hash, setHash] = useState(() => window.location.hash);

  // Persist lang + sync <html lang>, title, meta description
  useEffect(() => {
    try { localStorage.setItem('sf-lang', lang); } catch {}
    document.documentElement.lang = lang;
    document.title = t(lang, 'meta_title');
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', t(lang, 'meta_desc'));
  }, [lang]);

  // Hash routes: #/san-pham, #/doi-ngu/<id>; anything else → landing (plain #id = section anchor)
  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h.startsWith('#/')) window.scrollTo(0, 0);
      setHash(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const member = hash.match(/^#\/doi-ngu\/([\w-]+)/);
  if (member) return <MemberPage id={member[1]} lang={lang} setLang={setLang} />;
  const product = hash.match(/^#\/san-pham\/([\w-]+)/);
  if (product) return <ProductDetail id={product[1]} lang={lang} setLang={setLang} />;
  if (hash.startsWith('#/san-pham')) return <ProductsPage lang={lang} setLang={setLang} />;
  return <MockupBView lang={lang} setLang={setLang} />;
}
