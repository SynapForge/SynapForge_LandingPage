# Design System: Tối Nay (Film Streaming Landing Page)

> Working brand name: **Tối Nay** (EN: *Tonight*). It comes from the everyday question "Tối nay xem gì?" ("What are we watching tonight?"). Rename freely; the system does not depend on it.
>
> Product: freemium film streaming (Free with ads + Premium). Audience: Vietnamese viewers, bilingual VI / EN interface.
> Dials: `DESIGN_VARIANCE: 7` / `MOTION_INTENSITY: 6` / `VISUAL_DENSITY: 4`

---

## 1. Visual Theme & Atmosphere

A dark screening room right before the film starts. The page is a deep, near-black space where the **films supply the colour**: posters and stills are the only saturated things on screen, and everything else (type, borders, surfaces) stays quiet. A single warm accent, the tungsten amber of a projector beam, marks the actions that matter.

- **Density (4, Daily App Balanced):** Poster rails bring breadth, but each section keeps one focused message with plenty of dark negative space around it.
- **Variance (7, Offset Asymmetric):** Split hero, asymmetric bento, horizontal rails. No centered hero, no row of three equal cards.
- **Motion (6, Fluid CSS + springs):** Slow, weighty motion that feels like a projector warming up. Stills fade in, posters lift on hover, and trailers preview after a short pause. Nothing bounces or flashes.
- **Theme lock: dark only.** This is a deliberate brand decision (a cinema is a dark room), so there is no light mode. Every section stays in the same dark family. No light section is inserted mid-page.

---

## 2. Color Palette & Roles

One neutral family (cool Zinc) plus one accent. No warm/cool grey mixing.

| Token | Name | Value | Role |
|---|---|---|---|
| `--canvas` | **Screening Room Black** | `#0C0C0E` | Page background. Never pure `#000000` |
| `--surface` | **Velvet Charcoal** | `#141417` | Section tints, plan cards, FAQ panels |
| `--surface-raised` | **Lobby Graphite** | `#1C1C21` | Hover surfaces, inputs, open accordion |
| `--border` | **Aisle Line** | `rgba(255,255,255,0.08)` | 1px structural lines, card edges |
| `--border-strong` | **Seat Edge** | `rgba(255,255,255,0.16)` | Ghost button stroke, focused borders |
| `--text-primary` | **Silver Screen** | `#EDEDEF` | Headlines, body text. Never pure `#FFFFFF` |
| `--text-secondary` | **Usher Grey** | `#A1A1AA` | Descriptions, film metadata, helper text |
| `--text-tertiary` | **Credits Grey** | `#71717A` | Footer links, legal text, timestamps |
| `--accent` | **Projector Tungsten** | `#E3A44A` | The only accent: primary CTA, active states, focus rings, Premium marks |
| `--accent-ink` | **Accent Ink** | `#1A1206` | Text placed on top of the accent fill |
| `--error` | **Signal Red** | `#E5484D` | Form error text and input borders only. Never decorative |

**Rules**
- Accent saturation is about 73%, which stays under the 80% cap. Why amber: it is the colour of projector light, so it is tied to the brand story and is not an arbitrary pick. It also avoids Netflix red and the AI purple/blue look.
- **Color Consistency Lock:** amber is used identically in nav, hero, rails, pricing and footer. No second accent anywhere.
- Image scrims: `linear-gradient(to top, rgba(12,12,14,0.92), rgba(12,12,14,0) 60%)`. Scrims are tinted with Screening Room Black, not pure black.
- Shadows (rare): `0 24px 60px -20px rgba(0,0,0,0.6)`, used only on the hero key-art and the open trailer preview.
- **Contrast:** Silver Screen on Canvas is about 16:1. Usher Grey on Canvas is about 7.6:1. Accent Ink on Tungsten is about 9:1. All pass WCAG AA, and body text passes AAA.

---

## 3. Typography Rules

Vietnamese diacritics are a hard requirement, so every font must ship a `vietnamese` subset (stacked marks such as ễ, ổ, ự).

- **Display: `Bricolage Grotesque`** (600-700). A grotesque with character, close to a film-poster feel without being a gimmick. Track-tight (`-0.02em`). Hierarchy comes from weight and colour, not shouting size.
- **Body: `Be Vietnam Pro`** (400 / 500). Designed for Vietnamese and it handles diacritics cleanly. Relaxed leading (`1.65`), max `65ch` per line.
- **Mono: `JetBrains Mono`** (400). Only for runtime, year, resolution and episode counts (for example `2h 14m`, `2024`, `4K`).
- **Scale (clamp-based):**
  - H1 hero: `clamp(2.5rem, 5vw, 4rem)`, max 2 lines on desktop
  - H2 section: `clamp(1.875rem, 3.2vw, 2.75rem)`
  - H3 card/film title: `1.25rem` / 600
  - Body: `1rem` (min), large body `1.125rem`
  - Meta: `0.8125rem` mono, Usher Grey
- **Diacritic clearance (mandatory):** display `line-height` is never below `1.15`, because `leading-none` clips Vietnamese stacked marks. Italic display words with descenders (y, g, p, q) get `1.2` plus `padding-bottom: 0.1em`.
- **Bilingual length:** VI strings run about 15-25% longer than EN. Buttons get `min-width` and `white-space: nowrap`, and layouts are always tested with the VI copy first.
- **Emphasis:** use the italic or bold of the same family. Never inject a serif word into a sans headline.
- **Self-host** with `@font-face` + `font-display: swap`, subsets `latin` + `vietnamese`. No Google Fonts `<link>` in production.
- **Banned:** Inter, Times/Georgia/Garamond, Fraunces, Instrument Serif, any font without full Vietnamese support.

> Verify before shipping: confirm each chosen font's `vietnamese` subset on its source (Google Fonts / Fontsource) and test the sample string "Phim hay cho mọi tối trong tuần. Nguyễn Thị Hường xem ở Huế."

---

## 4. Component Stylings

**Shape Consistency Lock (one documented rule, applied everywhere):**
- Interactive controls (buttons, language toggle, chips): **full pill** (`999px`)
- Media (posters, stills, bento tiles, key-art): **12px**
- Containers (plan cards, FAQ, inputs): **16px** for cards, **12px** for inputs

**Buttons**
- **Primary** ("Xem miễn phí" / "Watch free"): Projector Tungsten fill, Accent Ink text, 48px tall, `padding: 0 28px`, weight 600. Hover: background lightens 6% with a spring lift of `translateY(-1px)`. Active: `scale(0.98)`. No outer glow ever.
- **Secondary / ghost** ("Nâng cấp Premium" / "Go Premium"): transparent with a 1px Seat Edge stroke and Silver Screen text. Hover: Lobby Graphite fill.
- **Play button (on hover over a film):** 56px circle with a Silver Screen fill and a Canvas play glyph. It appears only on hover/focus, not as a permanent overlay.
- Max 3 words per CTA. Labels never wrap at desktop.

**Poster Card (core unit)**
- 2:3 ratio, 12px radius, no border, no shadow at rest.
- **Metadata sits BELOW the image, never on it:** title (H3), then one meta line in mono, e.g. `2024 · 1h 52m · T16`. Max one middle-dot per line pair. If more fields are needed, use a line break.
- Hover (desktop): poster lifts `translateY(-6px) scale(1.03)` with a spring. After **600ms** of continuous hover, a muted 16:9 trailer preview fades in above the poster. On leave, it fades out and stops.
- Focus-visible: 2px Projector Tungsten ring with a 3px offset (keyboard / TV remote users).
- No genre pills, rating badges or "NEW" tags on top of the artwork.

**Language Toggle**
- Segmented pill `VI | EN` in the nav. Active segment uses a Lobby Graphite fill with Silver Screen text, and the inactive one uses Usher Grey. Switching swaps copy in place with a 200ms crossfade and causes no layout jump (reserve width for the VI strings).

**Plan Cards (Free vs Premium)**
- Two cards only, Velvet Charcoal, 16px radius, 1px Aisle Line border.
- Premium card: 1px Projector Tungsten border plus a small amber "Premium" wordmark in the heading. No glow and no "MOST POPULAR" ribbon.
- Feature list: icon plus a short line each. No hairline under every row; use spacing.

**Inputs (email capture, final CTA)**
- Label above (`Email`), 48px input in Lobby Graphite, 12px radius, 1px Aisle Line. Focus: 2px Tungsten ring. Error text in Signal Red below the input, e.g. "Email chưa đúng định dạng" / "That email doesn't look right". No placeholder-as-label.

**FAQ Accordion**
- Each question row is a 64px min-height button. Opening it changes the row to Lobby Graphite and the chevron rotates 180deg. Content height animates via `grid-template-rows: 0fr → 1fr` (never animate `height`).

**Loading / Empty / Error**
- **Loading:** skeleton posters at the exact 2:3 size in Velvet Charcoal, with a slow diagonal shimmer (1.6s loop). No circular spinners.
- **Empty (e.g. no results in a genre):** one composed still image, the line "Thể loại này đang được cập nhật" / "New titles are on the way", and a ghost link back to all films.
- **Error (rail failed to load):** an inline row message in Usher Grey with a "Thử lại" / "Retry" text button. No toast.

**Icons:** `@phosphor-icons/react`, weight `regular`, one family only. No hand-drawn SVG icons and no emojis.

---

## 5. Layout Principles

- Container: `max-width: 1400px`, side padding `clamp(1rem, 4vw, 3rem)`. CSS Grid for every multi-column layout, with no `calc()` percentage math.
- Section spacing: `padding-block: clamp(4rem, 9vw, 7.5rem)`.
- Full-height hero: `min-height: 100dvh` (never `100vh` / `h-screen`), top padding max 6rem.
- **No overlapping elements.** Text never sits on top of a busy image area. Where text must live on a still (bento tiles, final CTA), it sits inside the scrimmed lower 40% only.
- Nav: 68px tall, one line on desktop, sticky with `backdrop-filter: blur(16px)` over `rgba(12,12,14,0.72)`. A solid fill is used under `prefers-reduced-transparency`.

### Page Map (12 blocks incl. nav and footer, 11 distinct layout families)

| # | Section | Layout family | Content |
|---|---|---|---|
| 1 | **Nav** | Single-line bar | Wordmark "tối nay." / Phim, Thể loại, Premium, Câu hỏi / `VI \| EN` / primary CTA |
| 2 | **Hero** | Asymmetric split 5/7 | Left: H1 with inline stills, subtext, 1 primary CTA. Right: tall 4:5 key-art of a featured film |
| 3 | **Devices** | Logo strip | Real device/platform marks (Simple Icons: apple, android, samsung, lg, googlechrome). Logos only, no labels |
| 4 | **Tuần này / This week** | Horizontal scroll-snap rail | 10-14 posters, rail scrolls inside its own container |
| 5 | **Thể loại / Genres** | Asymmetric bento, exactly 5 cells | Phim Việt (large 2x2), Tâm lý, Hành động, Anime, Tài liệu. Each tile is a still + scrim + genre name |
| 6 | **Phụ đề song ngữ / Dual subtitles** | Split: image left, text right | TV still showing VI + EN subtitles stacked |
| 7 | **Xem offline / Offline** | Split: text left, image right | Phone in hand with a downloaded film (last zig-zag, max 2 in a row) |
| 8 | **Free vs Premium** | 2-column plan cards | Comparison. Premium CTA lives here only |
| 9 | **Người xem nói gì / Viewers** | Single-quote carousel | 1 large quote visible, 4 total, swipe/arrow |
| 10 | **Câu hỏi / FAQ** | Accordion, narrow 760px column | 5-6 questions |
| 11 | **Final CTA** | Full-bleed still + email form | Same "Xem miễn phí" CTA intent as hero |
| 12 | **Footer** | 4-column link grid, Credits Grey | Links, legal, language toggle repeat |

**Eyebrow budget:** max 2 across the page, used only above the Genres and Pricing headlines. The hero has no eyebrow. All other sections run headline only.

### Hero Spec (signature moment)

- **Inline image typography:** small rounded film stills (about `0.9em` tall, 12px radius, 16:9) sit inside the headline as visual punctuation:
  - VI: "Phim hay `[still]` cho mọi tối `[still]` trong tuần."
  - EN: "A good film `[still]` for every night `[still]` of the week."
- Subtext (≤ 20 words):
  - VI: "Phim Việt, phim châu Á và kinh điển thế giới, có phụ đề song ngữ. Xem miễn phí, nâng cấp khi muốn."
  - EN: "Vietnamese, Asian and world cinema with dual subtitles. Watch free, upgrade whenever you like."
- One primary CTA: **Xem miễn phí / Watch free**. No secondary link in the hero.
- Right side: a key-art still with a slow Ken Burns drift. No title text burned over it; the film title sits in a caption line **below** the image (`Đang nổi bật: <tên phim>` / `Featured: <title>`).
- Banned in hero: scroll cues, trust strips, pricing teasers, version labels, avatar rows.

### Responsive Rules

- **< 768px:** every multi-column layout collapses to a single column. Hero: headline, then subtext, then CTA, then key-art. The inline stills in the headline move into a small row of 2 thumbnails **below** the headline.
- Bento collapses to a 1-column stack (Phim Việt first), with tiles at a 16:9 ratio.
- Rails keep horizontal scroll **inside the rail only** (`overflow-x: auto; scroll-snap-type: x mandatory`), with posters at 42vw width. The page itself never scrolls horizontally.
- Plan cards stack, with Premium first on mobile.
- Nav collapses to wordmark + `VI|EN` + menu button that opens a full-height sheet.
- Touch targets ≥ 44px. Body text never below 1rem.

---

## 6. Motion & Interaction

Every animation has a reason. No motion is added just because it looks cool.

| Moment | Motion | Why |
|---|---|---|
| Hero load | Headline words + inline stills reveal in a 60ms stagger (`opacity` + `translateY(16px)`), then key-art fades in | Storytelling: the "lights dim" moment |
| Hero key-art | Ken Burns `scale(1) → scale(1.06)` over 24s, alternate, infinite | The single perpetual loop on the page. It makes the hero feel alive like a projected image |
| Poster hover | Spring lift (`stiffness: 100, damping: 20`), trailer preview after 600ms | Feedback plus a preview of the product itself |
| Rails / bento enter | `whileInView` fade-up, 50ms cascade, once | Hierarchy: guides the eye along the rail |
| Language switch | 200ms crossfade on text nodes | State transition |
| Accordion | `grid-template-rows` transition, 280ms `cubic-bezier(0.16,1,0.3,1)` | State transition |
| Skeleton | Diagonal shimmer, 1.6s loop | Loading feedback |

- Animate only `transform` and `opacity`. Never animate `top`, `left`, `width` or `height`.
- Spring defaults: `stiffness: 100, damping: 20`. No linear easing on UI motion.
- No marquee on this page (the rail already covers breadth).
- Scroll-linked effects use `IntersectionObserver` / Motion `whileInView`. Never `window.addEventListener('scroll')`.
- **`prefers-reduced-motion: reduce`:** Ken Burns is disabled, trailer previews never autoplay (a tap-to-play button is shown instead), staggers become instant, and shimmer becomes a static tint.
- Optional film grain: a static noise PNG at 3% opacity on a `position: fixed; pointer-events: none` pseudo-element only. Never on scrolling containers.

---

## 7. Content & Copy Rules

- One CTA label per intent across the whole page:
  - Signup intent: **"Xem miễn phí" / "Watch free"** (nav, hero, final CTA)
  - Upgrade intent: **"Nâng cấp Premium" / "Go Premium"** (pricing only)
- Section copy: headline ≤ 8 words, sub-paragraph ≤ 25 words.
- Quotes: max 3 lines with realistic, locale-appropriate attribution, e.g. *"Trần Bảo Ngọc, giáo viên, Huế"* / *"Lê Hoàng Phúc, kỹ sư, Đà Nẵng"*. Use typographic quotes (" ").
- Prices are **mock until business confirms** (e.g. Premium `79.000đ / tháng`) and should be marked `<!-- mock -->` in code.
- Film titles / posters: use generated key-art or licensed assets only. During design, use generated stills (via the image tool) or `https://picsum.photos/seed/toinay-<section>/<w>/<h>`. Never use real copyrighted posters without rights.
- Plain, warm copy. No "Trải nghiệm đỉnh cao", "Elevate", "Seamless", "Unleash", "Next-gen", "Cách mạng".

---

## 8. Anti-Patterns (Banned)

- No em-dashes or en-dashes in any visible text. Use a hyphen, comma, period or colon.
- No emojis anywhere.
- No `Inter`, no generic serifs, no Fraunces / Instrument Serif, no fonts without Vietnamese support.
- No pure `#000000` or `#FFFFFF`.
- No neon or outer glows, no purple/blue AI gradients, no gradient text on headlines.
- No Netflix-red clone. Projector Tungsten is the only accent.
- No centered hero. No row of 3 equal feature cards.
- No pills, badges, ratings or "NEW / HOT" tags overlaid on posters or stills.
- No text overlapping images outside the scrimmed lower zone.
- No scroll cues ("Cuộn xuống", "Scroll to explore", bouncing chevrons).
- No version labels, section numbers ("01 / Thể loại") or decorative status dots.
- No fake-precise stats ("99.9% hài lòng", "10.000+ phim") unless backed by real data.
- No generic names (Nguyễn Văn A, John Doe) and no startup-slop brand names.
- No circular spinners. Use skeletons.
- No custom cursors.
- No light-mode section anywhere on the page.
- No `h-screen` / `100vh` for full-height sections. Use `100dvh`.
