# 🎨 SynapForge Studio — Brand Logo Kit & Directory Structure

> **Phiên bản:** v2.0 (High-Resolution Anti-Aliased & Color-Decontaminated)  
> **Chất lượng:** Đã khử sạch 100% hiện tượng viền trắng lem luốc (Zero White Halos), tương thích hoàn hảo trên cả nền tối (#0F172A / #000000) và nền sáng (#FFFFFF).

---

## 📁 Cấu Trúc Thư Mục & Phân Loại Assets

```
logo/
├── 00_master-source/       # File thiết kế gốc tổng quan của Studio
│   └── synapforge-master-board.jpg
│
├── 01_full-logo/           # Logo đầy đủ (Icon SF + Chữ Synapforge + Tagline Slogan)
│   ├── synapforge-full-logo-light.png     (1426x288 px - Nền sáng: Synap Navy + SF & forge Cam)
│   ├── synapforge-full-logo-dark.png      (1426x288 px - Nền tối: Synap Trắng + SF & forge Cam)
│   ├── synapforge-full-logo-sm-light.png  (Bản size nhỏ cho ấn phẩm vừa)
│   └── synapforge-full-logo-sm-dark.png   (Bản size nhỏ cho nền tối)
│
├── 02_wordmark/            # Logo ngang lược bỏ Slogan (Dùng cho Navbar / Header / Footer)
│   ├── synapforge-wordmark-light.png      (1420x216 px - Cho Header nền sáng)
│   └── synapforge-wordmark-dark.png       (1420x216 px - Cho Header nền tối / Glassmorphism)
│
├── 03_monogram-icon/       # Biểu tượng SF Monogram độc lập (Favicon, Avatar, Watermark, Button)
│   ├── synapforge-icon-orange.png         (320x280 px - SF Cam nguyên bản #F9510D)
│   ├── synapforge-icon-white.png          (320x280 px - SF Trắng tinh khôi #FFFFFF)
│   └── synapforge-icon-md.png             (Size medium cho widget nhỏ)
│
├── 04_app-icon/            # Biểu tượng ứng dụng (App Icon / PWA / Mobile / Extension)
│   └── synapforge-app-icon-512.png        (512x512 px - Khung Squircle bo góc chuẩn Apple/Retina)
│
├── 05_monochrome/          # Đơn sắc 1 màu (Dùng cho in ấn tài liệu, hóa đơn, hợp đồng pháp lý)
│   ├── synapforge-monochrome-black.png    (100% Đen #111827)
│   └── synapforge-monochrome-white.png    (100% Trắng #FFFFFF)
│
└── 06_previews/            # Bảng ảnh kiểm tra đối chiếu thực tế độ sắc nét trên nền tối & sáng
    ├── preview-dark-mode-test.png         (Test trên nền đen #0F1117)
    └── preview-light-mode-test.png        (Test trên nền sáng #F8FAFC)
```

---

## 🎨 Bảng Mã Màu Quy Chuẩn Thương Hiệu (Brand Palette)

| Thành phần | Màu sắc | Mã HEX | Giá trị RGB | Mục đích |
| :--- | :--- | :--- | :--- | :--- |
| **Forge Orange** | Cam Lửa Rực Rỡ | `#F9510D` | `rgb(249, 81, 13)` | Màu chủ đạo Icon SF & chữ 'forge' |
| **Deep Navy Black** | Xanh Đen Navy | `#0B1221` | `rgb(11, 18, 33)` | Chữ 'Synap' & Slogan trên nền sáng |
| **Pure Crisp White** | Trắng Tinh Khiết | `#FFFFFF` | `rgb(255, 255, 255)` | Chữ 'Synap' & Slogan trên nền tối |
| **Monochrome Black** | Đen Đơn Sắc | `#111827` | `rgb(17, 24, 39)` | In ấn hóa đơn, dấu mộc, văn bản pháp quy |

---

## 📌 Hướng Dẫn Sử Dụng Nhanh

1. **Gắn vào thanh Navbar Website:**
   - Dùng file trong `02_wordmark/synapforge-wordmark-dark.png` (nếu navbar nền tối) hoặc `synapforge-wordmark-light.png` (nếu navbar nền sáng).
2. **Làm Favicon hoặc Icon App điện thoại:**
   - Dùng `04_app-icon/synapforge-app-icon-512.png` hoặc `03_monogram-icon/synapforge-icon-orange.png`.
3. **Làm Bìa Proposal / Slide thuyết trình / Profile công ty:**
   - Dùng `01_full-logo/synapforge-full-logo-dark.png` (cho trang bìa tối sang trọng) hoặc `synapforge-full-logo-light.png`.
