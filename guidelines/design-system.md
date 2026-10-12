# Design system

Live reference: `ui_kits/website/Actorly Design System.dc.html`. The homepage is the reference build.

## Colour
| Token | Hex | Use |
|---|---|---|
| paper | #F2EFE9 | page ground, alternate sections |
| white | #FFFFFF | sections, cards, demo frames |
| ink | #12100E | text, primary buttons, ink sections |
| ember | #FF4A1A | the one accent: stamps, active ring, CTA on ink, logo front card |
| ember-text | #A32C00 | ember as text on light |
| ember-tint | rgba(255,74,26,.14) | new-row flash |
| body | #57514A | ledes, body |
| body-strong | #3A342E | article and legal text |
| muted | #6B645B | meta, captions |
| line | #DDD6CA | card rings, dividers |
| line-soft | #EFEBE4 | table row dividers |
| outline | #CFC6B7 | secondary button ring |
| ink-line | #2F2A25 | lines on ink |
| body-on-ink | #C9C1B5 | body text on ink |

**Status chips:** (the product never shows a "Confirmed" confidence; the green tone is the coverage "Yes")
| Status | Background | Text |
|---|---|---|
| Yes (coverage answer; also the Coverage tag and "now") | #CDFEE1 | #0C5132 |
| Likely | #E0F0FF | #00527C |
| Possible | #E0F0FF | #00527C |
| Unknown | #EBEBEB | #616161 |
| Not yet | #EBE6DD | #57514A |
| Not possible | #F7F4EE | #8A847A |

**Was and now:**
- Was: background #FEE9E8, text #8E1F0B, struck through.
- Now: background #CDFEE1, text #0C5132.

**Shopify admin mock-ups only:**
- top bar #1A1A1A, search #303030;
- ground #F1F1F1, sidebar #EBEBEB;
- cards white at a 12px radius, header rows #F7F7F7;
- text #303030 and #616161, borders #E3E3E3.

**Rules:**
- Paper, white and ink sections alternate down a page. Two ink sections never touch.
- One ember fill per area of the screen.
- No gradients, except the striped "Not recorded" area on the timeline: `repeating-linear-gradient(135deg, #E2DCD1 0 6px, #ECE7DE 6px 12px)`.

## Type
**Archivo** for everything, with `font-variation-settings: 'wdth' 100` on display sizes. No monospace on the site. Admin mock-ups use the system UI font (`Inter, -apple-system, 'Segoe UI', sans-serif`).

| Role | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Home H1 | clamp(34px, min(5.4vw, 10.5vh), 104px) | 700 | −0.058em | 0.92 |
| Page H1 | clamp(44px, 6.6vw, 108px) | 700 | −0.058em | 0.92 |
| Section H2 | clamp(40px, 6.2vw, 100px) | 700 | −0.055em | 0.94 |
| Pinned H2 | clamp(34px, min(4.8vw, 8vh), 76px) | 700 | −0.055em | 0.94 |
| Docs H2 | clamp(34px, 4vw, 60px) | 700 | −0.05em | 0.94 |
| Card title | 20–23px | 700 | −0.02em | 1.2 |
| Lede | clamp(17px, 1.4vw, 20px), max 640–660px | 400 | 0 | 1.55 |
| Body | 15–17px, max 64ch | 400 | 0 | 1.6 |
| Long form | 17–18px | 400 | 0 | 1.7 |
| Small | 13–15px | 400–650 | 0 | 1.5 |

**Writing:**
- Headlines are sentence case and end in a full stop. Break them onto two lines by hand.
- No eyebrow labels above headlines.
- Counters and prices use `tabular-nums`.
- Paragraphs use `text-wrap: pretty`; short centred lines use `balance`.
- Wordmark: lowercase "actorly", Archivo 650, −0.045em.

## Layout
- **Widths:**
  - content: max 1240px;
  - demos: 1180px;
  - legal and article: 760–860px;
  - FAQ: 820px.
- **Gutters:** 24px.
- **Section padding:**
  - home: 150–170px;
  - inner pages: 110–150px;
  - page heads: 170–180px top, to clear the fixed nav.
- **Spacing:** headline → lede 22–26px; lede → content 40–48px.
- **Grids:** `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`.
- **Breakpoints:**
  - 960px: the article sidebar stacks.
  - 900px: the docs sidebar hides.
  - 820px: the nav switches to the menu button.
  - 760px: the coverage table becomes cards, and the hero goes from 4 columns of tiles to 2.
- **Phones:** 390px baseline; tap targets at least 44px.

## Radius
| Value | Use |
|---|---|
| 999px | buttons, pills, nav, chips |
| 28px | big panels and stages |
| 24–26px | cards, demo frames, pricing |
| 20–22px | hero tiles, smaller cards |
| 12–18px | stamps, inner tiles, admin cards |
| 23% of the tile | app icon corners |

## Depth
| Element | Value |
|---|---|
| Card | `0 0 0 1px #DDD6CA` (a ring, no shadow) |
| Hover | `0 0 0 1.5px #12100E`; nothing lifts or scales |
| Active (just changed) | `0 0 0 1.5px #FF4A1A` |
| Demo frame | `0 0 0 1px #DDD6CA, 0 40px 80px -40px rgba(18,16,14,.3)` |
| Panel on ink | `0 60px 120px -40px rgba(0,0,0,.65)` |
| Stamp | `0 14px 30px -14px rgba(18,16,14,.5)` |
| Nav | `0 0 0 1px #DDD6CA, 0 20px 40px -24px rgba(18,16,14,.25)`, background `rgba(255,255,255,.88)`, blur 14px |
