# Assets

## Logos: `assets/logos/`
The mark is two versions of a thing: the older one behind (32% opacity) and the current one in front, in ember, with a back arrow. The wordmark is lowercase "actorly" in Archivo 650.

**SVG (`assets/logos/svg/`, scales to any size):**
- `actorly-mark-color.svg`: for light grounds.
- `actorly-mark-color-on-dark.svg`: for ink.
- `actorly-mark-black.svg` and `actorly-mark-white.svg`: one colour.
- `actorly-app-icon-ink.svg` and `actorly-app-icon-paper.svg`.
- `actorly-lockup-horizontal-light.svg` and `-dark.svg`.
- `actorly-lockup-vertical-light.svg` and `-dark.svg`.
- `actorly-favicon.svg`.

**PNG (`assets/logos/png/`):**
- `actorly-mark-color / color-on-dark / black / white-1200.png`: 1200×1200, transparent.
- `actorly-app-icon-ink / paper-1200.png`: 1200×1200. Use these where an app icon is asked for, for example a store listing or a partner dashboard.
- `actorly-avatar-paper / ink-1200.png`: 1200×1200 social avatars, safe inside a circle crop.
- `actorly-lockup-horizontal-light / dark / on-paper / on-ink-2000.png`: 2000×600.
- `actorly-lockup-vertical-light / on-ink-1200.png`: 1200×1200.
- `actorly-wordmark-black / white-1800.png`: 1800×520.

**Favicons (`assets/logos/favicon/`):**
- `favicon.svg`;
- `favicon-16.png`, `-32.png`, `-48.png`;
- `apple-touch-icon-180.png`;
- `android-chrome-192.png` and `-512.png`.

**Source:** `assets/logos/Actorly Brand Assets.dc.html` shows every variant; edit it there and re-export.

**Usage rules:**
- Lockup SVGs use live Archivo text. Outline the text before using them in print, or use the PNGs.
- Clear space is one third of the mark's width on every side. Minimum size is 16px.
- Don't rotate it, recolour the front card, stretch it, or place it on a busy photo.
- Every logo file carries embedded content-credentials metadata from the design tool that made it. Leave it in place; it only records where the file came from.

## OG images: `assets/og/` (and `ui_kits/website/og/`)
1200×630 PNGs: blog, article, privacy and terms.

Seven share images are withdrawn pending re-export: Home, What it tracks (coverage), Docs, Changelog, Contact, Security and DPA. The Security and DPA images made statements about customer data and subprocessors that were not true. The Home and coverage images carried the label "who: not reported" (the product's word is "Unknown") and the Home image a headline the product cannot prove. The Changelog, Contact and Docs images carried promises the product cannot prove (a same-day coverage change, every message read, a restore checked "a second later"). Re-export all seven from `ui_kits/website/Actorly OG Cards.dc.html` (its text is corrected) once the product team has confirmed the wording. The privacy image is kept, but it reads "After Shopify's waiting period" where the corrected source says 48 hours after Shopify asks; re-export it when the privacy wording is final.

## Site assets: `ui_kits/website/assets/`
- `actorly-icon.svg`, `actorly-icon-on-dark.svg`, `actorly-app-icon.svg`.
- `apple-touch-icon-180.png`, `favicon-32.png`.

## The Shopify glyph (not included)
The Shopify glyph is Shopify's trademark, so it is not in this repository. The design puts it on install buttons (white on ink, black on ember, colour on white or outline). Use the glyph under Shopify's brand guidelines and get it from Shopify's brand assets page: https://www.shopify.com/brand-assets. Never recolour, crop or rotate it. In `tokens/assets.css` the `.actorly-glyph--white|black|color` classes read `--shopify-glyph-white|black|color`; set those to your copy. In the page specimens each glyph position is an empty slot of the same size (`data-shopify-glyph-slot`).

## Product photos
There are no photographs in this repository. The home page specimen had four stock photos hot-linked from a stock-photo site; they were replaced with neutral grey placeholder blocks. Use your own shots on plain backgrounds, cropped about 1.6:1. Warm and neutral; no people at laptops, device mock-ups or 3D blobs.

## Fonts
Archivo (Google Fonts, SIL OFL), variable: wdth 62–125, wght 100–900. Self-host a subset with Latin characters, tabular figures, → and ←. Inter (SIL OFL) is used only in Shopify admin mock-ups. The shipped files are Latin subsets in `fonts/`; each licence text is beside its font (`fonts/OFL-Archivo.txt`, `fonts/OFL-Inter.txt`) and `NOTICE.md` lists the sources.
