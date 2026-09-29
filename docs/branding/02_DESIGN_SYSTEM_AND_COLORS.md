# HỆ THỐNG TIÊU CHUẨN THIẾT KẾ & BẢNG MÀU (DESIGN SYSTEM & TOKENS)
> **Brand Design System, Visual Guidelines & Component Tokens**  
> **Áp dụng cho:** Website chính thức, slide dự án, ấn phẩm marketing, logo, biểu tượng & UI components  
> **Phong cách cốt lõi:** Chủ nghĩa Tối giản Thụy Sĩ (Swiss Minimalist Grid), Tương phản Cao & Kỹ nghệ Chính xác  

---

## 1. BẢNG MÀU CHUẨN HÓA (OFFICIAL BRAND PALETTE)

```
[#FF5500: FORGE ORANGE] ─────────── Màu điểm nhấn chủ đạo (Primary Accent)
[#0B0F17: FORGE DARK DEEP] ──────── Không gian nền tổng thể (Main Canvas)
[#111827: FORGE CARD DARK] ──────── Thẻ nội dung phủ kính (Glass Surface)
[#1F2937: FORGE BORDER LINE] ────── Đường viền khung lưới (Grid Border)
[#FFFFFF: CRISP WHITE] ──────────── Tiêu đề chính & Điểm nhấn sáng (Primary Text)
[#9CA3AF: TEXT SECONDARY] ───────── Nội dung mô tả & Chú thích (Muted Text)
```

| Tên mã màu | Mã HEX | Giá trị RGB / RGBA | Vai trò & Ứng dụng trong giao diện |
| :--- | :--- | :--- | :--- |
| **Forge Orange** | `#FF5500` | `255, 85, 0` | **Màu thương hiệu chính:** Monogram SF, nút CTA chính, viền active, icon đại diện |
| **Forge Orange Dark** | `#E04B00` | `224, 75, 0` | **Trạng thái tương tác:** Hover, click, focus state của các nút bấm |
| **Forge Orange Glow** | `rgba(255, 85, 0, 0.25)` | `255, 85, 0, 0.25` | **Hiệu ứng phát quang:** Bóng đổ phát sáng (Glow shadow), đường viền hoạt ảnh |
| **Forge Dark Deep** | `#0B0F17` | `11, 15, 23` | **Nền tổng thể (Canvas):** Không gian đen than chì siêu tối, loại bỏ ánh sáng chói |
| **Forge Card Dark** | `#111827` | `17, 24, 39` | **Hộp nội dung (Surface):** Bề mặt thẻ card, panel, dropdown menu |
| **Forge Border Line**| `#1F2937` | `31, 41, 55` | **Đường phân cách (Dividers):** Giữ khung lưới ngăn nắp, viền thẻ mặc định |
| **Crisp Pure White** | `#FFFFFF` | `255, 255, 255` | **Typography chính:** Tiêu đề (Headings), số liệu đo lường, chữ Monogram |
| **Text Secondary** | `#9CA3AF` | `156, 163, 175` | **Typography phụ:** Đoạn văn bản mô tả, thông số kỹ thuật phụ trợ |

---

## 2. HỆ THỐNG KHOẢNG CÁCH & KHUNG LƯỚI (8PT SPACING & SWISS GRID)
SynapForge áp dụng nguyên tắc khoảng cách chuẩn **8-Point Grid** để đảm bảo tính nhịp điệu và tỷ lệ toán học chuẩn xác:

| Token Spacing | Kích thước | Ứng dụng tiêu chuẩn |
| :--- | :--- | :--- |
| `space-1` | `4px` | Khoảng cách vi mô (Khoảng cách giữa icon và nhãn nhỏ, padding badge) |
| `space-2` | `8px` | Khoảng cách giữa các phần tử nội bộ (Input padding, khoảng cách dòng trong tag) |
| `space-3` | `12px` | Padding trong của các nút bấm nhỏ, khoảng cách avatar |
| `space-4` | `16px` | Padding tiêu chuẩn của Button, khoảng cách giữa các trường form |
| `space-6` | `24px` | Padding bên trong các thẻ Card nội dung, khoảng cách giữa các cột |
| `space-8` | `32px` | Khoảng cách giữa các nhóm tính năng, lề trên dưới của panel |
| `space-12`| `48px` | Khoảng cách phân đoạn lớn (Section spacing trên di động) |
| `space-16`| `64px` | Khoảng cách phân đoạn tiêu chuẩn trên màn hình máy tính (Section padding) |
| `space-24`| `96px` | Khoảng cách giữa các khối Hero Section và Footer |

* **Hệ thống lưới (12-Column Grid):**
  * Tối đa độ rộng nội dung: `max-w-7xl` (`1280px`).
  * Khoảng cách rãnh cột (Gutter): `24px` (Desktop) và `16px` (Mobile).

---

## 3. QUY CHUẨN HIỆU ỨNG THỦY TINH & PHÁT QUANG (GLASSMORPHISM & GLOW TOKENS)

```css
/* Chuẩn thẻ Card Kính Cường Lực (Forge Glass Panel) */
.glass-panel {
  background: rgba(17, 24, 39, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.5);
}

/* Chuẩn hiệu ứng Thẻ Hover Phát Sáng (Glow on Hover) */
.glass-panel-hover:hover {
  border-color: rgba(255, 85, 0, 0.4);
  box-shadow: 0 0 25px -5px rgba(255, 85, 0, 0.25);
  transform: translateY(-2px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 4. QUY CHUẨN TYPOGRAPHY & FONT CHỮ
* **Tiêu đề chính & Tiêu đề phụ (Display & Headings):** `Plus Jakarta Sans` (Font hình học hiện đại, nét thoáng, độ dày `font-bold` hoặc `font-extrabold`, `tracking-tight`).
* **Nội dung thân bài (Body Text):** `Inter` (Tối ưu độ đọc trên màn hình máy tính và điện thoại, độ dày `font-normal` hoặc `font-medium`, line-height `1.6`).
* **Số liệu đo lường, Mã nguồn & Terminal:** `JetBrains Mono` (Font đơn khoảng Monospace dành cho các chỉ số: `0%`, `61 entities`, `<8ms`, port mạng `8080`, commit hash).

---

## 5. BỘ QUY TẮC NHẬN DIỆN MONOGRAM "SF" & LOGO

```
                       QUY CHUẨN VÙNG AN TOÀN (CLEARSPACE)
                       
                       ┌─────────────────────────────────┐
                       │          ▲ Khoảng đệm X         │
                       │          │                      │
                       │ ◄─ X ─► ┌────┐ ◄─ X ─►          │
                       │         │ SF │                  │
                       │         └────┘                  │
                       │          │                      │
                       │          ▼ Khoảng đệm X         │
                       └─────────────────────────────────┘
                       (Trong đó X = 1/2 chiều cao khối Monogram SF)
```

### 5.1. Cấu trúc hình học của Monogram "SF"
* Biểu tượng được kết hợp tối giản tuyệt đối giữa chữ cái **S** (đại diện cho sự linh hoạt của mạng nơ-ron Synapse) và chữ cái **F** (đại diện cho cấu trúc dầm thép kiên định của xưởng rèn Forge).
* Nền khối: Hình vuông vát góc chuẩn hình học (`rounded-lg` hoặc `rounded-xl`).
* Màu nền: Màu Cam tôi thép `#FF5500`. Màu chữ: Trắng tinh khiết `#FFFFFF`.

### 5.2. Các biến thể cho phép (Permitted Variations)
1. **Primary Full-Color:** Khối vuông Cam `#FF5500` với chữ SF Trắng (Sử dụng 90% trường hợp: Website, Favicon, App icon, Card visit).
2. **Monochrome White:** Chữ SF trắng trên nền trong suốt (Dùng khi in ấn đen trắng hoặc đặt trên nền ảnh tối phức tạp).
3. **Monochrome Dark:** Chữ SF đen `#0B0F17` trên nền trắng (Dùng cho hóa đơn và văn bản hợp đồng in ra giấy).

### 5.3. Các điều cấm kỵ tuyệt đối (Strict Prohibitions)
* ❌ **CẤM HOÀN TOÀN** vẽ thêm hình ngọn lửa, tia chớp, giọt nước, búa kìm hoặc tia lửa hoạt hình xung quanh logo.
* ❌ **CẤM** đổi màu cam `#FF5500` sang các màu tím gradient, xanh lá cây hoặc đỏ rực.
* ❌ **CẤM** kéo dãn méo mó tỷ lệ logo (Không đổi tỷ lệ co dãn width/height khác 1:1).
* ❌ **CẤM** đặt logo trên các nền ảnh sặc sỡ mà không có lớp phủ tối làm đệm (Backdrop overlay).