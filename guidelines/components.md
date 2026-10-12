# Components

Colours and shadows are defined in design-system.md.

## Nav (ui_kits/website/SiteNav.dc.html)
- **Bar:** fixed at `top:14px`, centred, max 1080px wide, 58px tall, 999px radius, with the nav shadow and blur.
- **Left to right:**
  1. The logo: mark at 22px and wordmark at 20px/650, 9px apart.
  2. The links: How it works, What it tracks, Pricing, Docs, Blog. 15px/500, 8px 12px padding, pill-shaped. Hover adds a #F2EFE9 background, and the current page has it too.
  3. **Install button:** ink fill, paper text, 42px tall, 15px/600, with the white Shopify glyph. Hover: ember fill, ink text.
- **Under 820px:**
  - The links hide and a 42px round menu button shows, with two bars that turn into a cross (±45°, 0.3s Settle).
  - The sheet has a 26px radius and 19px/600 links. It opens from −8px and opacity 0 to 0 and 1 (0.5s Settle).
  - Esc closes it, and so does tapping a link to a section on the same page.

## Footer (ui_kits/website/SiteFooter.dc.html)
1. **Badge row:** an ink badge (54px, 16px radius). Once the app is listed, it holds the store badge; until then it reads "Actorly for Shopify". Beside it, the line "The change history Shopify doesn't keep."
2. **Four columns** (14px/700 muted labels, 16px links):
   - Product: How it works, What it tracks, Pricing, Questions.
   - Help: Docs, Changelog, Contact support.
   - Company: Blog, Security.
   - Legal: Terms, Privacy, DPA.
3. **Sign-off:** the mark at clamp(64px, 11vw, 150px) and the wordmark at clamp(72px, 15vw, 210px), weight 650. Each letter sits in its own mask with 0.25em bottom padding. A 76ch description below.
4. **Legal lines:**
   - © 2026 ONDUTYOPS LLC.
   - The company address, as the company states it.
   - The support address.
   - The trademark notice at 13px.

## Buttons
| Type | Height | Fill / text | Hover |
|---|---|---|---|
| Primary | 52–56px hero, 42–50px elsewhere | ink / paper, 16px/600 | ember fill, ink text |
| Primary on ink | 54–56px | ember / ink, 700 | paper fill |
| Secondary | same | inset ring 1px #CFC6B7 | ring 1.5px ink |
| Secondary on ink | same | ring 1px #4A433C | text #FF6A3D |
| Filter / toggle pill | 40–42px | white, or ink when active | 0.25s colour change |

- Labels start with a verb.
- Install buttons carry the Shopify glyph (white on ink, black on ember; get it from Shopify, see assets.md). Do not show an install button until the app can be installed from its Shopify listing.

## Change stamp
- **Box:** ember fill, ink text, 12px radius, 9px 13px padding, stamp shadow.
- **Text:** a 14px/700 title, then a 14px/500 line for "time · who".
- **Who wording:**
  - Product changes: "Name, staff, likely" or "App name, likely".
  - Anything else: "who: unknown".

## History row
- **Grid:** `minmax(0,1.5fr) minmax(0,1fr) 84px`, 48–52px tall, 0 22px padding, 15px text.
- **Columns:**
  - **Change:** the name in bold, then "· field old → new".
  - **Who:** "Unknown" renders at full strength, never muted.
  - **Time:** right-aligned.
- **New row:** flashes ember at 0.14 alpha, fading over about 1.4s.

## Who chips
- Pills, 13px/600, 4px 10–12px padding.
- A name always sits next to a chip; never show one without it.

## Admin mock-up frame
- **Frame:** 22px radius, #F1F1F1 ground, a #1A1A1A top bar with a #303030 search field, and the demo-frame shadow.
- **Inside:** system UI font, white cards at 12px radius, #F7F7F7 header rows. Was and now are 6px-radius chips.
- **Branding:** only the Actorly mark may appear inside.

## Cards
- **Standard:** white, 22–26px radius, ring, 22–34px padding. Link cards hover to a 1.5px ink ring.
- **Tracks tile:** an 18px/700 title, then the old value (muted) over the new value (600, revealed when the change runs).
- **Pricing:**
  - Watch is white with a ring; Restore is ink with a featured shadow.
  - Inside: a 22px/700 name, the price at 72px/700 tabular, the CTA, a divider, then groups.
  - Each group has a 13px/700 uppercase label and items with an 18px check circle (ink on Watch, ember on Restore).
- **Compare table:** grid `1.6fr 1fr 1fr`. "Included" in #0C5132/600.

## Coverage table
- **Header:** #F7F4EE at 14px/700.
- **Grid:** `1.3fr 1.3fr repeat(4,1fr)`, rows 14px 24px.
- **Cells:** `inline-block` chips at 13px/600, line-height 1.3, 12px radius.
- **Under 760px:** the header hides, rows become 2 columns, and the name and "when" span both.

## FAQ
- `<details>` with a 1px top rule; the last one also gets a bottom rule.
- **Summary:** 18–20px/600, with a + that rotates 45° when open (0.3s).
- **Answer:** 16–17px at 1.6 line height, max 64ch.

## Forms
- **Newsletter:** a paper pill with a ring and 6px padding.
  - Input: 48px.
  - Submit: an ink pill reading "Subscribe", which changes to "Subscribed".
- **Copy buttons:** "Copy" changes to "Copied" for 1.6s.
