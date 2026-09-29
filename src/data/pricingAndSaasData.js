/**
 * Dữ liệu cấu trúc Bảng giá 3 Gói Dịch vụ & 13 Module Tự Động Hóa SaaS
 * Trích xuất chuẩn xác từ PricingSection.jsx & servicesData.js
 */

export const PRICING_PACKAGES = [
  {
    id: "starter_mvp",
    tag: "GÓI 1 DEV",
    title: "Gói MVP Khởi Nghiệp",
    titleEn: "Starter MVP",
    priceNum: "11.500.000₫",
    priceValue: 11500000,
    timeline: "~1.5 - 2 tháng (1 Dev)",
    warranty: "6 tháng miễn phí",
    discountBadge: "-50% Trợ giá Dev",
    desc: "Phù hợp cho cá nhân, shop mới mở, cần ra mắt web nhanh để bán hàng và thử nghiệm thị trường với chi phí tiết kiệm nhất.",
    features: [
      "Giao diện thiết kế theo yêu cầu, chuẩn nhận diện thương hiệu",
      "Tương thích 100% điện thoại, iPad, máy tính (Responsive)",
      "Danh mục sản phẩm/dịch vụ, trang giới thiệu, form liên hệ",
      "Nút gọi Hotline, chat Zalo, Messenger nổi tiện lợi",
      "Chuẩn SEO Google cơ bản, chứng chỉ bảo mật SSL trọn đời",
      "Hỗ trợ kết nối tên miền & cấu hình hosting/VPS tối ưu chi phí",
      "Bảo hành kỹ thuật & sửa lỗi miễn phí 6 tháng"
    ]
  },
  {
    id: "fast_mvp",
    tag: "GÓI 2 DEVS",
    isFeatured: true,
    highlightChip: "ĐỀ XUẤT • 2 KỸ SƯ",
    title: "Gói MVP Tốc Hành (2 Devs)",
    titleEn: "Fast MVP (2 Devs)",
    priceNum: "18.500.000₫",
    priceValue: 18500000,
    timeline: "~1.5 - 2 tháng (2 Kỹ sư)",
    warranty: "8 tháng hỗ trợ vận hành",
    discountBadge: "-50% Trợ giá Dev",
    desc: "Dành cho shop cần ra mắt chuyên nghiệp với quy trình chuẩn. Hai kỹ sư phụ trách song song Frontend & Backend, tối ưu chất lượng và tiến độ!",
    features: [
      "Toàn bộ tính năng của Gói Khởi Nghiệp",
      "2 Kỹ sư code song song Frontend & Backend tăng tốc tiến độ",
      "Tích hợp cổng thanh toán VietQR động tự điền số tiền & đối soát tự động",
      "Quản lý đơn hàng tinh gọn, thông báo qua Telegram/Zalo Webhook trong <30s",
      "Cổng quản trị nội dung Admin CMS dễ dùng (sản phẩm, giá, đơn hàng)",
      "Miễn phí cài đặt Cloud VPS & chứng chỉ SSL trọn đời",
      "Bảo hành kỹ thuật & hỗ trợ vận hành 8 tháng"
    ]
  },
  {
    id: "enterprise_full",
    tag: "FULL SCOPE (5 DEVS)",
    title: "Gói Chuyên Nghiệp Toàn Diện",
    titleEn: "Full Enterprise E-Commerce",
    priceNum: "33.000.000₫",
    priceValue: 33000000,
    timeline: "~2 - 2.5 tháng (Team 5 kỹ sư)",
    warranty: "12 tháng ưu tiên + 24/7",
    discountBadge: "-50% Trợ giá Dev",
    desc: "Dành cho thương hiệu, sàn giao dịch, cửa hàng lớn cần tính năng thanh toán tự động, quản lý kho và trợ lý AI thông minh.",
    features: [
      "Đầy đủ nền tảng Sàn TMĐT / Marketplace: Giỏ hàng, đơn hàng, tồn kho real-time",
      "Tích hợp đa phương thức: VietQR Webhook tự động khớp lệnh 0.5s, VNPay/MoMo",
      "Tích hợp Trợ lý AI (DeepSeek API) tư vấn sản phẩm & phong thủy 24/7",
      "Bảng điều khiển quản trị chuyên sâu (Dashboard phân tích doanh thu & phễu lead)",
      "Bàn giao toàn bộ mã nguồn (Full Source Code) & tài liệu kỹ thuật",
      "Tối ưu SEO Google chuyên sâu, CDN tăng tốc độ tải trang <1s",
      "Bảo hành kỹ thuật ưu tiên 12 tháng + Hỗ trợ trực tiếp 24/7"
    ]
  }
];

export const CONTRACT_POLICIES = {
  paymentTerms: "40% khi ký Hợp đồng Dân sự — 60% chỉ thanh toán khi đã nghiệm thu môi trường thật",
  legalRepresentative: "Lê Trí Trung (Founder & Head of Technology)",
  bonusPolicy: "Thưởng theo ngày nếu bàn giao sớm hơn thỏa thuận (sau 2 ngày ân hạn)",
  penaltyPolicy: "Phạt trừ tiền trực tiếp vào đợt thanh toán cuối nếu trễ hẹn do lỗi chủ quan của Dev",
  upgradePolicy: "Lộ trình nâng cấp linh hoạt từ MVP lên sàn lớn với hệ số phụ phí +20% (Live Upgrade)"
};

export const SAAS_AUTOMATION_MODULES = [
  { id: "lead_funnel", num: "01", group: "TĂNG DOANH SỐ", metric: "Độ trễ < 30s", title: "Phễu Thu Thập & Phân Luồng Lead Tức Thời", desc: "Phân loại khách hàng theo độ nóng và bắn thông báo Telegram/Zalo trong 30s..." },
  { id: "vietqr_reconcile", num: "02", group: "TĂNG DOANH SỐ", metric: "0% Phí • Khớp cọc 0.5s", title: "Thanh Toán & Đối Soát VietQR Động 0đ", desc: "Sinh VietQR động, webhook ngân hàng khớp cọc 0.5s với 0đ phí cổng trung gian..." },
  { id: "inventory_lock", num: "03", group: "TĂNG DOANH SỐ", metric: "Redis Concurrency Lock", title: "Quản Lý Kho & Khóa Trạng Thái Real-time", desc: "Khóa giữ chỗ 15 phút chống bán trùng cho các mặt hàng độc bản..." },
  { id: "ai_advisory", num: "04", group: "AI THỰC CHIẾN", metric: "DeepSeek / OpenAI 24/7", title: "Trợ Lý AI CSKH & Tư Vấn Phong Thủy 24/7", desc: "Tự động tư vấn sản phẩm, giải đáp thắc mắc và tính điểm hợp mệnh tức thời..." },
  { id: "mockup_gen", num: "05", group: "AI THỰC CHIẾN", metric: "1-Click Batch Render", title: "Công Cụ Sinh Ảnh Mockup Hàng Loạt", desc: "Tự động render hàng loạt ảnh mockup sản phẩm chuẩn kích thước mạng xã hội..." },
  { id: "email_builder", num: "06", group: "AI THỰC CHIẾN", metric: "SMTP Riêng 0đ Phí", title: "Email Builder Kéo Thả & Luồng Chăm Sóc Tự Động", desc: "Trình thiết kế trực quan kết nối SMTP riêng, tự gửi hóa đơn & biên lai điện tử..." },
  { id: "ctv_portal", num: "07", group: "GIỮ CHÂN", metric: "UTM Tracking & Ví Hoa Hồng", title: "Cổng Mạng Lưới Cộng Tác Viên & Hoa Hồng", desc: "Cấp link định danh riêng và ví hoa hồng tự động ghi nhận khi khách chốt cọc..." },
  { id: "audit_security", num: "08", group: "BẢO MẬT", metric: "Immutable Audit Trail", title: "Bảo Mật Chống Thất Thoát Dữ Liệu & Khách VIP", desc: "Ghi nhật ký hệ thống bất biến mọi thao tác xem số điện thoại và tải dữ liệu..." },
  { id: "social_proof", num: "09", group: "CHỐT SALES", metric: "Bát Tự Tứ Trụ 4 Trụ", title: "Tra Cứu Ý Nghĩa Phong Thủy & Kích Thích Mua Hàng", desc: "Thuật toán tính điểm phong thủy và diễn giải số học kích thích sở hữu..." },
  { id: "comparison_social", num: "10", group: "CHỐT SALES", metric: "Tăng 35% Conversion", title: "So Sánh Sản Phẩm Song Song & Nhúng Video Clip", desc: "Đối chiếu đa thuộc tính 2-3 sản phẩm và nhúng video TikTok thực tế..." },
  { id: "omnichannel_publisher", num: "11", group: "ĐA KÊNH", metric: "RabbitMQ DLQ 0% Rớt Tin", title: "Đăng Bài Tự Động Lên 5 Mạng Xã Hội Đồng Thời", desc: "Lập lịch xuất bản tự động lên FB, TikTok, Insta, Threads, Zalo qua hàng đợi..." },
  { id: "ai_brand_rag", num: "12", group: "AI THỰC CHIẾN", metric: "Brand Voice ChromaDB", title: "Trợ Lý AI Viết Bài Tự Động Theo Đúng Phong Cách Riêng", desc: "RAG học văn phong thương hiệu, sinh hàng loạt bài đăng không bao giờ trùng lặp..." },
  { id: "multitenant_rbac", num: "13", group: "VẬN HÀNH", metric: "Multi-Tenant Quota", title: "Phân Quyền Làm Việc Đa Tầng (RBAC)", desc: "Phân quyền chặt chẽ giữa Quản lý tổng, Trưởng phòng, Nhân viên và CTV..." }
];
