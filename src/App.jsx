import React, { useState } from 'react';
import { COMPANY_INFO, CORE_TEAM, IN_HOUSE_VENTURES, OUTSOURCE_SERVICES } from './data/companyData';
import { 
  Cpu, Rocket, ShieldCheck, Terminal, Layers, ArrowUpRight, 
  CheckCircle2, Users, Code2, Globe2, Sparkles, Send, ChevronRight, Mail, Phone, MapPin 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F3F4F6] selection:bg-[#FF5500] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Minimalist SF Monogram in Orange */}
            <div className="w-10 h-10 rounded-xl bg-[#FF5500] flex items-center justify-center font-bold text-white tracking-wider text-xl shadow-lg shadow-[#FF5500]/20">
              SF
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">Synap<span className="text-[#FF5500]">forge</span></span>
              <span className="hidden sm:inline-block ml-3 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded bg-white/10 text-gray-300">
                Venture Studio
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#model" className="hover:text-[#FF5500] transition-colors">Mô Hình Kép</a>
            <a href="#ventures" className="hover:text-[#FF5500] transition-colors">Sản Phẩm Lõi</a>
            <a href="#services" className="hover:text-[#FF5500] transition-colors">Dịch Vụ Kỹ Nghệ</a>
            <a href="#team" className="hover:text-[#FF5500] transition-colors">Đội Ngũ</a>
            <a href="#contact" className="hover:text-[#FF5500] transition-colors">Tư Vấn Dự Án</a>
          </div>

          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E04B00] text-white font-medium text-sm transition-all shadow-md shadow-[#FF5500]/25 flex items-center gap-2"
          >
            <span>Khởi Động Dự Án</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-28 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FF5500]/15 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span>VENTURE STUDIO & HIGH-END ENGINEERING FACTORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Architect. Code. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-orange-400 to-amber-300">
              Forge & Scale
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-12 font-normal leading-relaxed">
            {COMPANY_INFO.shortDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#ventures" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white font-semibold text-base transition-all shadow-lg shadow-[#FF5500]/30 flex items-center justify-center gap-3"
            >
              <Rocket className="w-5 h-5" />
              <span>Khám Phá Sản Phẩm Lõi</span>
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-base transition-all flex items-center justify-center gap-3"
            >
              <Code2 className="w-5 h-5 text-[#FF5500]" />
              <span>Bảng Dịch Vụ Gia Công</span>
            </a>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-white/10">
            {COMPANY_INFO.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-mono">
                  <span className="text-[#FF5500]">{m.value}</span>
                </div>
                <div className="text-sm font-semibold text-gray-200">{m.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

            {/* Name Etymology Section */}
      <section className="py-20 px-6 border-b border-white/5 bg-[#0e1420]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-2">{COMPANY_INFO.nameEtymology.title}</h2>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight">Khi Trí Tuệ Kết Nối Gặp Kỹ Nghệ Bền Bỉ</p>
            <p className="text-sm font-mono text-gray-400 mt-1">Phiên âm: {COMPANY_INFO.nameEtymology.pronunciation}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-[#FF5500]">
              <div className="text-xs font-mono text-[#FF5500] font-semibold mb-1">TIỀN TỐ (PREFIX)</div>
              <h3 className="text-xl font-bold text-white mb-2">{COMPANY_INFO.nameEtymology.synap.root}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{COMPANY_INFO.nameEtymology.synap.desc}</p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-orange-400">
              <div className="text-xs font-mono text-orange-400 font-semibold mb-1">HẬU TỐ (SUFFIX)</div>
              <h3 className="text-xl font-bold text-white mb-2">{COMPANY_INFO.nameEtymology.forge.root}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{COMPANY_INFO.nameEtymology.forge.desc}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/25 text-center">
            <p className="text-sm sm:text-base font-medium text-orange-200 italic">
              "{COMPANY_INFO.nameEtymology.synthesis}"
            </p>
          </div>
        </div>
      </section>

      {/* Dual Engine Model */}
      <section id="model" className="py-24 px-6 border-b border-white/5 bg-[#0e1420]/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-2">Triết Lý Vận Hành</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight">Mô Hình Bánh Đà Kép: Produce & Outsource</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-[#FF5500]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 flex items-center justify-center mb-6 text-[#FF5500]">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Engine 1: In-House Ventures (Sản phẩm)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Đội ngũ trực tiếp ươm mầm, đầu tư R&D và xây dựng các nền tảng SaaS/AI độc quyền. Chúng tôi thấu hiểu bài toán thị trường, tối ưu trải nghiệm và quản trị chi phí máy chủ thực tế.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Làm chủ 100% công nghệ cao (GraphRAG, LLM Tuning)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Phát sinh doanh thu thực tiễn từ ngày đầu (Day One Monetization)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Tạo ra các bộ khung mã nguồn (reusable libraries) vững chắc</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-[#FF5500]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FF5500]/10 flex items-center justify-center mb-6 text-[#FF5500]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Engine 2: High-End Engineering (Gia công)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Đem toàn bộ các chuẩn mực và thư viện đã được tôi luyện từ sản phẩm lõi để phục vụ các khách hàng doanh nghiệp và đối tác quốc tế. Cam kết chất lượng chuẩn FPT Software và Clean Architecture.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Bàn giao MVP chất lượng cao chỉ trong 30–60 ngày</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> 0% rủi ro mất mát giao dịch nhờ kiến trúc RabbitMQ DLQ</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF5500]" /> Minh bạch tiến độ từng Task Jira và từng Commit Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Showcase */}
      <section id="ventures" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-2">Hệ Sinh Thái R&D</h2>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight">Sản Phẩm Lõi Đã Tôi Luyện</p>
            </div>
            <p className="text-gray-400 max-w-md text-sm">
              Mỗi sản phẩm là một minh chứng sống động cho năng lực kiến trúc hệ thống, nghiên cứu AI và kỹ năng lập trình thực tế.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* BrandHub Card */}
            <div className="p-8 rounded-2xl glass-panel border border-[#FF5500]/30 hover:border-[#FF5500]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20">
                    AI MarTech & Distributed Publisher
                  </span>
                  <span className="text-xs font-mono text-gray-400">7 Microservices • 0% Lost</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-2">BrandHub</h3>
                <p className="text-sm text-orange-200/90 mb-4 font-medium">Nền tảng trí tuệ thương hiệu & xuất bản nội dung tự động đa kênh phân tán</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Cụm phân tán 7 Microservices (Spring Cloud Gateway, Java 21, FastAPI, RabbitMQ DLQ) giúp nhãn hàng học giọng điệu Brand Voice, phân tích quan hệ KOLs/Trends với Neo4j GraphRAG và xuất bản song song 5 nền tảng mạng xã hội với 0% tỷ lệ rớt tin nhắn.
                </p>

                {/* Sub features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]"></span>
                    <span>Spring Cloud Gateway 8080: WebFlux, JWT phân tán & Redis Token Bucket</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]"></span>
                    <span>RabbitMQ DLQ 8083: Retry lũy thừa 5s, 15s, 45s bảo đảm 100% không mất bài đăng</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]"></span>
                    <span>Neo4j GraphRAG + Groq Llama 3: Tối ưu chi phí và chống ảo giác tuyệt đối</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {['Java 21', 'Spring Cloud Gateway', 'RabbitMQ DLQ', 'Neo4j GraphRAG', 'Python FastAPI', 'React 18'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-gray-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BienSoVip Card */}
            <div className="p-8 rounded-2xl glass-panel border border-orange-500/30 hover:border-orange-500/60 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Luxury Marketplace & High-Load Web
                  </span>
                  <span className="text-xs font-mono text-gray-400">61 Entities • Query &lt; 8ms</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-2">BienSoVip</h3>
                <p className="text-sm text-orange-200/90 mb-4 font-medium">Sàn giao dịch, đấu giá & phân tích biển số xe định danh cao cấp tốc độ cao</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Hệ thống thương mại điện tử chuyên biệt do Founder Lê Trí Trung tự tay thiết kế và lập trình bằng .NET 8 Clean Architecture. Quản lý 61 bảng thực thể, tối ưu lọc đa tiêu chí dưới 8ms trên hàng chục ngàn biển số và khớp cọc VietQR dưới 0.5s với 0đ chi phí cổng trung gian.
                </p>

                {/* Sub features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>PostgreSQL GIN/BTREE Index: Lọc biển ngũ quý, sảnh tiến phản hồi dưới 8ms</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Redis Distributed Lock: Khóa phân tán 15 phút triệt tiêu 100% rủi ro bán trùng cọc</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>VietQR Webhook & DeepSeek AI: Khớp cọc &lt; 0.5s và tư vấn phong thủy 4 trụ 24/7</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {['.NET 8 Clean Arch', 'PostgreSQL GIN', 'Redis Lock', 'React 19', 'VietQR Webhook', 'DeepSeek AI'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-gray-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-24 px-6 border-b border-white/5 bg-[#0e1420]/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-2">Dịch Vụ Kỹ Nghệ May Đo</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight">Dịch Vụ Gia Công Phần Mềm Đẳng Cấp</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {OUTSOURCE_SERVICES.map(s => (
              <div key={s.id} className="p-8 rounded-2xl glass-panel hover:border-[#FF5500]/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <span className="px-2.5 py-1 rounded bg-[#FF5500]/10 text-[#FF5500] text-xs font-mono font-semibold">
                      {s.timeline}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">{s.subtitle}</p>

                  <div className="space-y-2.5 mb-6">
                    {s.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-xs text-gray-400">
                  <span className="text-gray-200 font-semibold">Phù hợp nhất: </span>
                  {s.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section id="team" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#FF5500] mb-2">Đội Ngũ Sáng Lập & Kỹ Sư Cốt Lõi</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight">Kỹ Sư Ưu Tú Từ FPT University & FPT Software</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_TEAM.map((member) => (
              <div key={member.id} className="p-6 rounded-2xl glass-panel flex flex-col justify-between hover:border-white/20 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF5500] to-amber-500 flex items-center justify-center font-bold text-white text-lg">
                      {member.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">{member.name}</h4>
                      <p className="text-xs text-[#FF5500] font-mono">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-3">{member.title}</p>
                  <p className="text-xs text-gray-300 line-clamp-3 mb-4 leading-relaxed">{member.bio}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {member.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-8 sm:p-12 border border-[#FF5500]/30 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF5500]/20 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF5500] text-white mb-6 shadow-lg shadow-[#FF5500]/30">
              <Send className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Sẵn Sàng Tôi Luyện Ý Tưởng Cùng SynapForge?</h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
              Dù bạn cần một đối tác tư vấn kiến trúc chịu tải, tích hợp AI chuyên sâu hay bàn giao một ứng dụng trọn gói trong 30–60 ngày, chúng tôi luôn sẵn sàng lắng nghe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E04B00] text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF5500]/25"
              >
                <Mail className="w-4 h-4" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-white flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-[#FF5500]" />
              <span>{COMPANY_INFO.headquarters}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#FF5500] flex items-center justify-center text-white font-bold text-xs">SF</div>
            <span className="font-semibold text-white">Synapforge Studio</span>
            <span>— {COMPANY_INFO.tagline}</span>
          </div>
          <div>
            © {COMPANY_INFO.establishedYear} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
