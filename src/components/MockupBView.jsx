import React, { useState, useEffect } from 'react';
import SynapseCanvas from './SynapseCanvas';
import SideStreams from './SideStreams';
import Lenis from 'lenis';

export default function MockupBView() {
  const [lang, setLang] = useState('vi');
  const [activeSection, setActiveSection] = useState('top');

  // Track active section for rail navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'ventures', 'services', 'team', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll (Lenis) + anchor handling
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    let rafId;
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-space bg-white text-[#1D1510] min-h-screen relative antialiased selection:bg-[#FF5500] selection:text-white">
      {/* Side Streams HUD for Ultra-Wide Displays */}
      <SideStreams theme="light" />

      {/* ===== TOP BAR ===== */}
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#top" className="brand">
            <img src="/brand/logo_primary.jpg" alt="SynapForge" className="brand-logo" />
          </a>

          <nav className="top-nav">
            <a href="#ventures">Ventures</a>
            <a href="#services">Dịch vụ</a>
            <a href="#team">Đội ngũ</a>
            <a href="#contact">Liên hệ</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="lang-pill" onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}>
              <span className={lang === 'vi' ? 'on' : ''}>VI</span>
              <span className={lang === 'en' ? 'on' : ''}>EN</span>
            </div>
            <a className="top-cta" href="#contact">
              Bắt đầu dự án
            </a>
          </div>
        </div>
      </header>

      {/* ===== RAIL NAVIGATOR ===== */}
      <nav className="rail">
        <a className={activeSection === 'top' ? 'on' : ''} href="#top">
          <span className="l">Hero</span>
          <span className="n">01</span>
        </a>
        <a className={activeSection === 'ventures' ? 'on' : ''} href="#ventures">
          <span className="l">Ventures</span>
          <span className="n">02</span>
        </a>
        <a className={activeSection === 'services' ? 'on' : ''} href="#services">
          <span className="l">Dịch vụ</span>
          <span className="n">03</span>
        </a>
        <a className={activeSection === 'team' ? 'on' : ''} href="#team">
          <span className="l">Đội ngũ</span>
          <span className="n">04</span>
        </a>
        <a className={activeSection === 'contact' ? 'on' : ''} href="#contact">
          <span className="l">Liên hệ</span>
          <span className="n">05</span>
        </a>
      </nav>

      {/* ===== HERO A/01 ===== */}
      <section className="hero-spec gridbg" id="top">
        {/* Effect 1: Synapse Canvas Interactive Background (Light Theme Optimized) */}
        <SynapseCanvas theme="light" opacity="0.22" className="z-40" />

        <div className="wrap hero-in">
          <div className="hero-eyebrow">
            <span className="sq"></span>
            <span className="mono">// A/01 — VENTURE STUDIO &amp; SOFTWARE FACTORY — ĐÀ NẴNG, VN</span>
          </div>

          <div className="hero-grid">
            <div>
              <h1>
                <span className="blk">
                  Thiết kế website bán hàng,
                </span>
                <span className="blk">
                  tự động hóa &amp; AI chăm khách<span className="curs"> 24/7</span>
                </span>
              </h1>
              <p className="hero-sub">
                <b>Website bán hàng, thanh toán tự động, AI chăm khách 24/7.</b> Chúng tôi làm trọn gói cho doanh nghiệp vừa &amp; nhỏ — bạn lo bán, công nghệ lo phần còn lại.
              </p>
              <div className="hero-ctas">
                <a className="btn-spec btn-solid" href="#ventures">
                  Xem dự án thật
                </a>
                <a className="btn-spec btn-ghost" href="#contact">
                  Báo giá trong 24h →
                </a>
              </div>
              <div className="hero-dual">
                <span><b>02 động cơ:</b></span>
                <span>■ Sản phẩm riêng — BrandHub, BienSoVip</span>
                <span>■ Gia công chuẩn doanh nghiệp</span>
              </div>
            </div>

            <div>
              <figure className="fig" style={{ margin: 0 }}>
                <span className="tk">+</span>
                <span className="tk2">+</span>
                <img src="/mockup/img/biensovip_marketplace.png" alt="BienSoVip marketplace" />
                <figcaption className="figcap">
                  <span>FIG. 01 — BienSoVip Marketplace</span>
                  <span>Production</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="v">05+</div>
              <div className="l">Kỹ sư FPT / FSoft<br />100% thực chiến</div>
            </div>
            <div className="hero-stat">
              <div className="v">02</div>
              <div className="l">Sản phẩm lõi<br />BrandHub &amp; BienSoVip</div>
            </div>
            <div className="hero-stat">
              <div className="v">0%</div>
              <div className="l">Mất tin nhắn<br />RabbitMQ DLQ</div>
            </div>
            <div className="hero-stat">
              <div className="v">30–60</div>
              <div className="l">Ngày bàn giao<br />MVP ra thị trường</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TICKER BANNER ===== */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Website bán hàng</span><span>Thanh toán tự động</span><span>AI chăm khách 24/7</span><span>Quản lý đơn hàng</span><span>Báo cáo tự động</span><span>0đ phí cổng</span><span>&lt;30s thông báo</span><span>0% mất dữ liệu</span>
          <span>Website bán hàng</span><span>Thanh toán tự động</span><span>AI chăm khách 24/7</span><span>Quản lý đơn hàng</span><span>Báo cáo tự động</span><span>0đ phí cổng</span><span>&lt;30s thông báo</span><span>0% mất dữ liệu</span>
        </div>
      </div>

      {/* ===== ETYMOLOGY ===== */}
      <section className="ety">
        <div className="wrap ety-grid">
          <div>
            <h3><em>Syn</em>apse</h3>
            <p>Khớp thần kinh — tư duy mạng nơ-ron, AI và xử lý dữ liệu thông minh.</p>
          </div>
          <div>
            <h3><em>Forge</em></h3>
            <p>Lò rèn — kỷ luật kỹ thuật, ý tưởng thành sản phẩm bền vững.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5 }}>
              // tư duy như mạng nơ-ron, kiến tạo như xưởng rèn
            </p>
          </div>
        </div>
      </section>

      {/* ===== VENTURES B/02 ===== */}
      <section className="section" id="ventures">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// B/02 — VENTURES</span>
            </div>
            <h2>Sản phẩm tự xây</h2>
            <div className="sec-note">In-house products</div>
          </div>

          {/* Case 01: BrandHub */}
          <div className="case">
            <div className="case-txt">
              <div className="case-kicker">CASE 01 — AI MARTECH &amp; PUBLISHER</div>
              <h3>BrandHub</h3>
              <div className="case-tag">Tự động viết &amp; đăng nội dung lên 5 nền tảng MXH</div>
              <p className="case-desc">
                Học giọng điệu thương hiệu từ bài cũ, tự sinh nội dung, đăng 5 MXH — một người làm việc của cả đội content.
              </p>
              <div className="case-feats">
                <div><span className="sq"></span><span>Tự học Brand Voice — nội dung sinh ra không bao giờ trùng lặp</span></div>
                <div><span className="sq"></span><span>Lập lịch đăng tự động Facebook, TikTok, Instagram, Threads, Zalo</span></div>
                <div><span className="sq"></span><span>Lỗi thì tự gửi lại — không bao giờ mất bài đăng</span></div>
              </div>
              <div className="case-stats">
                <div><div className="v">07</div><div className="l">Microservices</div></div>
                <div><div className="v">0%</div><div className="l">Mất bài</div></div>
                <div><div className="v">05</div><div className="l">Nền tảng</div></div>
              </div>
              <div className="chips">
                <span className="chip">Java 21</span>
                <span className="chip">Spring Cloud Gateway</span>
                <span className="chip">RabbitMQ DLQ</span>
                <span className="chip">Neo4j GraphRAG</span>
                <span className="chip">Python FastAPI</span>
                <span className="chip">React 18</span>
              </div>
            </div>
            <div className="case-img">
              <figure className="fig" style={{ margin: 0 }}>
                <span className="tk">+</span>
                <span className="tk2">+</span>
                <img src="/mockup/img/DA-D19-12.png" alt="BrandHub dashboard" />
                <figcaption className="figcap">
                  <span>FIG. 02 — BrandHub</span>
                  <span>Dashboard</span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Case 02: BienSoVip */}
          <div className="case rev">
            <div className="case-txt">
              <div className="case-kicker">CASE 02 — LUXURY MARKETPLACE</div>
              <h3>BienSoVip</h3>
              <div className="case-tag">Sàn giao dịch &amp; đấu giá biển số xe cao cấp</div>
              <p className="case-desc">
                Khách cọc lúc 2h sáng, máy tự khớp VietQR trong 0.5s — bạn ngủ, máy bán. AI tư vấn phong thủy trả lời 24/7.
              </p>
              <div className="case-feats">
                <div><span className="sq"></span><span>Khớp cọc tự động &lt; 0.5s — 0đ phí cổng trung gian</span></div>
                <div><span className="sq"></span><span>Khóa chống bán trùng — 2 khách không bao giờ mua cùng 1 biển</span></div>
                <div><span className="sq"></span><span>AI tư vấn phong thủy theo 4 trụ — trả lời khách 24/7</span></div>
              </div>
              <div className="case-stats">
                <div><div className="v">61</div><div className="l">Bảng dữ liệu</div></div>
                <div><div className="v">&lt;8ms</div><div className="l">Truy vấn</div></div>
                <div><div className="v">&lt;0.5s</div><div className="l">Khớp cọc</div></div>
              </div>
              <div className="chips">
                <span className="chip">.NET 8 Clean Arch</span>
                <span className="chip">PostgreSQL GIN</span>
                <span className="chip">Redis Lock</span>
                <span className="chip">React 19</span>
                <span className="chip">VietQR Webhook</span>
                <span className="chip">DeepSeek AI</span>
              </div>
            </div>
            <div className="case-img">
              <figure className="fig" style={{ margin: 0 }}>
                <span className="tk">+</span>
                <span className="tk2">+</span>
                <img src="/mockup/img/biensovip_real_dashboard.png" alt="BienSoVip dashboard" />
                <figcaption className="figcap">
                  <span>FIG. 03 — BienSoVip</span>
                  <span>Admin</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES C/03 ===== */}
      <section className="section sec-paper" id="services">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// C/03 — SERVICES</span>
            </div>
            <h2>Dịch vụ chuyển đổi số</h2>
            <div className="sec-note">Cho doanh nghiệp vừa &amp; nhỏ</div>
          </div>

          <div className="svc-row">
            <div className="svc-num">01</div>
            <div className="svc">
              <h3>Website bán hàng &amp; Marketplace</h3>
              <p className="svc-sub">Bán online chuyên nghiệp — khách tự đặt, tự thanh toán, không cần nhân viên chốt đơn.</p>
              <div className="svc-deliv">
                <span className="chip">Giỏ hàng, đơn hàng, tồn kho real-time</span>
                <span className="chip">Thanh toán VietQR tự khớp + VNPay/MoMo</span>
                <span className="chip">Tự quản lý sản phẩm, giá, đơn dễ dàng</span>
                <span className="chip">SSL, SEO, tải trang &lt; 1s</span>
              </div>
              <div className="svc-tech">TECH — thanh toán tự khớp · dữ liệu an toàn · chịu tải cao</div>
            </div>
            <div className="svc-time">4–8 tuần</div>
          </div>

          <div className="svc-row">
            <div className="svc-num">02</div>
            <div className="svc">
              <h3>Tự động hóa vận hành</h3>
              <p className="svc-sub">Đơn hàng tự đối soát, thông báo &lt; 30s, báo cáo không cần làm tay.</p>
              <div className="svc-deliv">
                <span className="chip">Thông báo Telegram/Zalo Webhook &lt; 30s</span>
                <span className="chip">Đối soát VietQR tự động 0đ phí</span>
                <span className="chip">Phễu lead tự phân luồng theo độ nóng</span>
                <span className="chip">Báo cáo doanh thu tự động</span>
              </div>
              <div className="svc-tech">TECH — thông báo &lt; 30s · tự đối soát · không mất dữ liệu</div>
            </div>
            <div className="svc-time">3–6 tuần</div>
          </div>

          <div className="svc-row">
            <div className="svc-num">03</div>
            <div className="svc">
              <h3>AI chăm sóc khách hàng 24/7</h3>
              <p className="svc-sub">AI trả lời khách 24/7 theo dữ liệu riêng của bạn — đúng, không bịa, tiết kiệm 80% chi phí.</p>
              <div className="svc-deliv">
                <span className="chip">Tư vấn sản phẩm tự động 24/7</span>
                <span className="chip">Học tài liệu nội bộ — trả lời đúng, có nguồn</span>
                <span className="chip">Dữ liệu chạy riêng, không ra ngoài</span>
                <span className="chip">API AI tốc độ cao</span>
              </div>
              <div className="svc-tech">TECH — AI học dữ liệu riêng · trả lời đúng · chạy tại máy bạn</div>
            </div>
            <div className="svc-time">2–5 tuần</div>
          </div>

          <div className="svc-row">
            <div className="svc-num">04</div>
            <div className="svc">
              <h3>Chuyển đổi số trọn gói</h3>
              <p className="svc-sub">Từ ý tưởng trên giấy đến sản phẩm ra mắt trong 30–60 ngày.</p>
              <div className="svc-deliv">
                <span className="chip">Chốt rõ yêu cầu &amp; thiết kế trước khi làm</span>
                <span className="chip">UI/UX chuẩn quốc tế</span>
                <span className="chip">Agile/Scrum — báo tiến độ từng task</span>
                <span className="chip">Deploy production + bàn giao source &amp; tài liệu</span>
              </div>
              <div className="svc-tech">TECH — làm từ đầu tới cuối · báo tiến độ · bàn giao đầy đủ</div>
            </div>
            <div className="svc-time">30–60 ngày</div>
          </div>
        </div>
      </section>

      {/* ===== TEAM D/04 ===== */}
      <section className="section sec-paper" id="team">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// D/04 — TEAM</span>
            </div>
            <h2>Đội ngũ thực chiến</h2>
            <div className="sec-note">05 kỹ sư FPT / FSoft</div>
          </div>

          <div className="team-grid">
            <div className="member">
              <div className="av">T</div>
              <div className="name">Lê Trí Trung</div>
              <div className="role">Founder &amp; Tech Lead</div>
              <p className="bio">Tổng đạo diễn kiến trúc hệ thống — tự tay thiết kế các sàn giao dịch lớn và EdTech hàng chục ngàn người dùng.</p>
              <div className="skills">
                <span className="chip">Java Spring Boot</span>
                <span className="chip">.NET 8</span>
                <span className="chip">System Design</span>
              </div>
            </div>

            <div className="member">
              <div className="av">A</div>
              <div className="name">Hà Văn Ân</div>
              <div className="role">Full-Stack &amp; AI Integrator</div>
              <p className="bio">Xây web nhanh + AI trả lời chính xác, không bịa.</p>
              <div className="skills">
                <span className="chip">Next.js 16</span>
                <span className="chip">RAG</span>
                <span className="chip">Gemini API</span>
              </div>
            </div>

            <div className="member">
              <div className="av">L</div>
              <div className="name">Nguyễn Thành Lộc</div>
              <div className="role">Backend Architect &amp; AI Lead</div>
              <p className="bio">Kiến trúc sạch, nâng cấp hệ thống cũ, AI hiểu dữ liệu lớn.</p>
              <div className="skills">
                <span className="chip">.NET 8</span>
                <span className="chip">Neo4j</span>
                <span className="chip">FastAPI</span>
              </div>
            </div>

            <div className="member">
              <div className="av">P</div>
              <div className="name">Nguyễn Chơn Phước</div>
              <div className="role">Java Core &amp; Cloud DevOps</div>
              <p className="bio">Hạ tầng chịu tải, Docker, vận hành 24/7 độ trễ tối thiểu.</p>
              <div className="skills">
                <span className="chip">Java 21</span>
                <span className="chip">Docker</span>
                <span className="chip">Nginx</span>
              </div>
            </div>

            <div className="member">
              <div className="av">T</div>
              <div className="name">Nguyễn Minh Tuấn</div>
              <div className="role">Enterprise .NET Backend</div>
              <p className="bio">Giải pháp chuẩn Microsoft, tích hợp dịch vụ công, tự động hóa kiểm duyệt.</p>
              <div className="skills">
                <span className="chip">.NET 8</span>
                <span className="chip">SQL Server</span>
                <span className="chip">Gov APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// FAQ</span>
            </div>
            <h2>Câu hỏi thường gặp</h2>
            <div className="sec-note">4 câu phổ biến nhất</div>
          </div>

          <details className="faq-item" open>
            <summary>Bàn giao trong bao lâu?</summary>
            <p>Website bán hàng 4–8 tuần, tự động hóa vận hành 3–6 tuần, AI 2–5 tuần. Gói trọn gói: ra mắt trong 30–60 ngày. Tiến độ được cập nhật từng task — bạn luôn biết đang làm tới đâu.</p>
          </details>

          <details className="faq-item">
            <summary>Bảo hành thế nào?</summary>
            <p>Sửa lỗi miễn phí 6–12 tháng tùy gói (ghi rõ trong hợp đồng). Gói Chuyên Nghiệp hỗ trợ ưu tiên 12 tháng + trực 24/7.</p>
          </details>

          <details className="faq-item">
            <summary>Source code thuộc về ai?</summary>
            <p>Thuộc về bạn. Bàn giao toàn bộ mã nguồn + tài liệu kỹ thuật sau khi nghiệm thu, quy định rõ trong hợp đồng.</p>
          </details>

          <details className="faq-item">
            <summary>Sau này muốn nâng cấp được không?</summary>
            <p>Được. Có lộ trình nâng cấp từ MVP lên sàn lớn (phụ phí +20% Live Upgrade) — không phải làm lại từ đầu.</p>
          </details>
        </div>
      </section>

      {/* ===== CONTACT E/05 ===== */}
      <section className="contact-spec gridbg" id="contact">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label">
              <span className="sq"></span>
              <span className="mono">// E/05 — CONTACT</span>
            </div>
            <h2>Bắt đầu dự án</h2>
            <div className="sec-note">Phản hồi trong 24h</div>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="row">
                <span className="k">Email</span>
                <span className="v">contact@synapforge.dev</span>
              </div>
              <div className="row">
                <span className="k">Điện thoại</span>
                <span className="v">(+84) 912 158 715</span>
              </div>
              <div className="row">
                <span className="k">Trụ sở</span>
                <span className="v">Hải Châu, TP. Đà Nẵng, Việt Nam</span>
              </div>
            </div>

            <a className="btn-spec btn-solid" href="mailto:contact@synapforge.dev">
              Gửi mô tả ý tưởng →
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-spec">
        <div className="wrap foot-in">
          <span className="brand-name">
            Synap<em style={{ color: 'var(--orange)' }}>Forge</em>
          </span>
          <span>© 2026 — Venture Studio &amp; Software Factory</span>
          <span>Đà Nẵng, Việt Nam</span>
        </div>
      </footer>
    </div>
  );
}
