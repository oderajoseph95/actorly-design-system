# Motion

Engine: `motion/motion-kit.js` (see motion/MOTION-BRIEF.md). The homepage scenes are in the logic class of `ui_kits/website/Actorly Home.dc.html`.

## Principles
1. **Own motion:** each section has its own main motion.
2. **One big scroll moment:** the homepage hero. The homepage has one more pinned scene (How it works). Inner pages have no pinned scenes.
3. **Transform and opacity only.** The exceptions are the search demo's row heights and the timeline scan's `left`.
4. **Constant heights:** looping demos never change their outer size.
5. **Pause off screen:** a loop runs its next cycle only when its section is within 0.5 viewport heights above to 1.5 below the screen.
6. **Hand over control:** a pointerdown inside a looping demo stops its loop.
7. **Reduced motion:** no smooth scroll, pinned scenes at p = 1, and every reveal shown at once.
8. **Real HTML:** all copy is real HTML; motion only moves it.

## Easings
| Name | Curve | Duration | Use |
|---|---|---|---|
| Settle | cubic-bezier(.16,1,.3,1) | 0.9–1.2s | reveals, arrivals |
| Travel | cubic-bezier(.65,0,.35,1) | 0.7–1.8s | A to B, the scan line |
| Spring | cubic-bezier(.34,1.56,.64,1) | 0.5–0.6s | stamps, ticks landing |
| Gravity | cubic-bezier(.55,0,.85,.35) | 0.62s | reserved |
| Fast | ease | 0.2–0.3s | hover, colour |
| Scrub | t<.5 ? 4t³ : 1−(−2t+2)³/2 | scroll | pinned scenes |

## Global (every page)
- **Smooth scroll:** Lenis, lerp 0.09. Anchors scroll with an offset of 0 on home and −100 on inner pages, over 1.2s.
- **Line reveal (`data-mk-reveal` > `data-mk-mask` > `data-mk-line`):**
  - Each line rises from 110% to 0 over 1.15s with Settle, 90ms apart.
  - Triggers when the block reaches 90% of the viewport.
  - The mask has 0.22em bottom padding and a −0.22em margin. Keep it, so Archivo's descenders aren't clipped.
- **Fade up (`data-mk-fade`):**
  - From +16px (cards +20px) and opacity 0. Opacity eases over 0.9s; movement uses Settle.
  - Triggers at 93% of the viewport.
  - Ledes wait 0.3s, and buttons 0.4–0.5s.
- **Stagger (`data-mk-stagger`):** 60–100ms between children.
- **In view (`data-mk-io`):** fires once at 62% of the viewport.
- **Magnet (mouse only):** within 140px the element moves toward the pointer by (1 − d/140) × 0.35, with 0.25s Settle. Used on the hero CTA, the closing CTA and the Coverage CTA.
- **Footer sign-off:** the letters rise from 115% to 0 over 1.2s with Settle, delayed 80ms + 60ms × i. Plays once, at 85% of the viewport.
- **Hover:** 0.2–0.25s colour and ring changes. Nothing lifts.

## Homepage
`p` is the progress through a pinned scene (0–1).

### 01 Hero (pinned, 370vh)
- **Tiles:** 8 tiles, 4×2 from 760px wide and 2×4 below. Width at most 320px, fitted to the height, minimum 120px. Image height 0.62 × width, plus a 66px caption.
- **Before scrolling:**
  - The tiles sit low and tilted: rot [−6, 4, −3, 5, −4, 3, −5, 4]°, dy [18, −8, 24, 10, −6, 16, 4, 20]px.
  - The pointer pushes tiles within 260px away by up to 40px (14% easing per frame). The push fades out by p 0.08.
- **Copy:** fades out, rises 90px and shrinks 4% over p 0–0.14.
- **Tiles straighten and rise:** p 0.02–0.16.
- **Clock:**
  - Fades in over p 0.08–0.14.
  - Runs from 7:30 AM to 2:40 PM over p 0.14–0.40.
  - Fades out over 0.42–0.48.
- **Eight changes:** they hit at 8:00, 9:12, 10:40, 11:05, 12:00, 12:45, 1:15 and 2:32.
  - Each hit is at p = 0.14 + (minute − 450)/430 × 0.26.
  - The tile's value cross-fades.
  - The stamp springs from scale 1.6 to 1.
- **Tiles leave:** p 0.44–0.56. They drop 30% of the viewport height, shrink 15% and fade.
- **Panel:**
  - Fades in over p 0.46–0.53 and rises 40px.
  - Width min(1180px, viewport − 32px). Rows fitted between 32px and 54px tall.
- **Stamp flights:** stamp i flies to its row over p 0.48 + 0.02i to 0.58 + 0.02i. Then the row's text appears, and its flash fades by p 0.84.
- **Title:** "Eight changes, all on the record." Fades in over p 0.66–0.74.

### 02 Shopify saves over it (in view, loop)
- **Each step:**
  1. The old price becomes a red ghost that rises 46px and fades over 0.9s.
  2. The new price types in at 70ms per character.
  3. A row drops into the Actorly price history: 12px over 0.7s, with a 1.4s tint. The newest row gets "Now"; older rows get "Restore".
- **Prices in order:** $139, $119, $129, $89.
- Steps are 1.7s apart, with a 2.6s hold at the end.

### 03 Not just products (in view, loop)
- **First run:** the tiles fade up 70ms apart, and the source chips spring in 140ms apart from +1.1s.
- **Each cycle:** tiles flash in the order [0, 5, 2, 8, 4, 10, 1, 6, 3, 11, 7, 9], 380ms apart. The ring turns ember for 900ms, the old value is struck through and the new value fades in.

### 04 Find any change (in view, loop)
- Types "headphones", "shipping" and "status" at 70ms per letter.
- Rows that don't match collapse to 0 height over 0.45s with Settle; matches get a #FFF6F2 tint.
- Holds 2.2s, deletes at 28ms per letter, then 0.6s between words.

### 05 How it works (pinned, 380vh, ink)
- **Beats:** beat = floor(p × 3). Panels and headings cross-fade with 24px of movement (0.5s and 0.9s).
- **Rail:** 3 bars. Finished bars are full; the current one runs from 0.3 to 1.
- **Beat 1:**
  - +450ms: the was chip turns red and struck through.
  - +900ms: the now chip turns green.
- **Beat 2:**
  - Two steps light up 420ms apart, from +350ms.
  - +1250ms: the name card springs in, and the name scrambles over 10 × 50ms before settling.
  - +2400ms: the "Unknown" card rises.
- **Beat 3:**
  - 600ms: the button presses (scale 0.95) and reads "Restoring…".
  - 900ms: step 1 lights up.
  - 1400ms: step 2 lights up, and the price counts from $89 to $129 over 700ms.
  - 2200ms: step 3 lights up, and the button reads "Checking Shopify…".
  - 3000ms: "Restored" on green, plus the "Verified" line.
- Each beat replays when re-entered.

### 06 Install before you need it (in view, once)
- Ticks drop 16px with Spring, 35ms apart.
- At +1.7s an ember scan sweeps from 38% to 100% over 1.8s (Travel), and the kept squares pop in as it passes.
- The counters count up to 13 and 22.

### 07 Pricing
- The cards rise 40px, 100ms apart.
- The monthly/yearly toggle rolls the price: out to −100%, then in from +100% (0.6s Settle).

### 08 FAQ
A stagger; the + rotates.

### 09 Closing (in view)
- Eight chips orbit an ellipse: rx = min(42% of width, 520px), ry = 150px, angle = t × 0.00011.
- **On trigger:**
  - The chips collapse to the centre over 1.1s on the Scrub curve, shrinking 60% and fading.
  - +800ms: the logo's back card fades in from scale 0.6.
  - +1250ms: the ember front card drops in from −14px and −7° on a back ease over 0.5s.

## Inner pages
- **Heads:** H1 line reveal, then the lede at +0.3s and controls at +0.4s.
- **Coverage:** the filters re-render the rows; the glossary staggers 80ms; the confidence ladder fades up.
- **Docs:** the index cards stagger; each H2 reveals; the restore steps stagger 70ms; the sidebar is sticky at 110px.
- **Changelog and Blog:** pill filters re-render the list. The newsletter button changes to "Subscribed".
- **Article:** the sidebar is sticky at 110px; "Copy link" changes to "Link copied" for 1.8s.
- **Contact:** "Copy" changes to "Copied" for 1.6s.

## Performance
- One requestAnimationFrame loop drives the hero and the orbit, each only while near the screen.
- Scroll values are written straight to styles.
- The hero layout recalculates on resize, when fonts load and through a ResizeObserver.
- Timers are cleared on unmount.

## GSAP mapping
- **Pinned scenes:**
  ```js
  ScrollTrigger.create({ trigger, start: 'top top', end: '+=270%', pin: true, scrub: true })
  ```
  Use end +=270% for the hero and +=280% for How it works. Feed `self.progress` into the same p functions.
- **In view:**
  ```js
  ScrollTrigger.create({ trigger, start: 'top 62%', once: true, onEnter })
  ```
- **Line reveal:**
  ```js
  gsap.from(lines, { yPercent: 110, duration: 1.15, ease: CustomEase.create('settle', '.16,1,.3,1'), stagger: 0.09 })
  ```
- **Reduced motion:** wrap everything in `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)`.
