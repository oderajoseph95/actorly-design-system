# Motion kit

Actorly's motion engine: `motion/motion-kit.js` (no dependencies; uses Lenis if loaded). Exact timings for every Actorly scene are in `guidelines/motion.md`; this brief explains the markup and helpers.

## Load it
In a Design Component, add to `<helmet>`:
```html
<script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js" integrity="sha384-B2WBjDzEjJpYvhmi2UyEn7rektqkf5suS6sNoyyrf0EBAwBHdkiXxIlU0V5Ru2ed" crossorigin="anonymous"></script>
<script src="motion-kit.js"></script>
```
Then call `MotionKit.init()` in `componentDidMount`, and call `MotionKit.prep(); MotionKit.scan();` in `componentDidUpdate`.

In a production build, import the file once in the layout. If the site uses GSAP + ScrollTrigger , see "Same motion in GSAP" below.

## The motion language
1. **Each section has its own motion.** Two sections on a page never share their main animation.
2. **One big scroll moment per page,** usually the hero. Everything else answers something the visitor did or saw.
3. **Headlines rise line by line from a mask.** This is the signature move, so use it on every H1 and H2.
4. **Only transform and opacity.** Nothing that changes layout. Demos keep a fixed height.
5. **Loops pause off screen and stop when the visitor clicks.**
6. **Reduced motion shows the finished state.** The kit does this for you.

## Easings (use only these)
| Name | Curve | Duration | For |
|---|---|---|---|
| Settle | cubic-bezier(.16,1,.3,1) | 0.9–1.2s | Reveals, menus, anything arriving |
| Travel | cubic-bezier(.65,0,.35,1) | 0.7s | Things moving from A to B |
| Spring | cubic-bezier(.34,1.56,.64,1) | 0.6s | Snapping or dropping into place |
| Gravity | cubic-bezier(.55,0,.85,.35) | 0.62s | Falling, lifting off |
| Fast | ease | 0.2–0.3s | Hover and colour |
| Scrub | easeInOutCubic | follows scroll | Pinned scenes |

## Patterns and markup
### 1. Headline line reveal
```html
<h1 data-mk-reveal>
  <span data-mk-mask><span data-mk-line>Every change to your store,</span></span>
  <span data-mk-mask><span data-mk-line>on the record.</span></span>
</h1>
```
Lines rise from 110% to 0 over 1.15s with Settle, 90ms apart. They start when the headline reaches 90% of the viewport height.

### 2. Fade up and stagger
```html
<p data-mk-fade data-mk-delay="0.3">Lede text…</p>
<div data-mk-stagger="0.08"> <div>Card</div> <div>Card</div> <div>Card</div> </div>
```
The element rises 16px (20px for cards) and fades in over 0.9s. The lede waits 0.3s after the headline.

### 3. Count up
```html
<span data-mk-count="8412" style="font-variant-numeric:tabular-nums">0</span>
```
Counts from 0 over 1.4s with an ease-out. Always use tabular figures so the number doesn't shake.

### 4. Typing
```html
<span data-mk-type="restore the old price" data-mk-speed="45"></span>
```
For searches, prompts and AI answers. Stream answers word by word every 42ms. Type questions at 34–70ms per letter.

### 5. In-view trigger, for starting a demo
```html
<section data-mk-io="ledger" data-mk-at="0.62">…</section>
```
```js
document.addEventListener('mk:inview', e => { if (e.detail.name === 'ledger') startLedgerDemo(); });
```

### 6. Pinned scroll scene, the "one big moment"
```html
<div data-mk-scene style="height:350vh;position:relative">
  <div style="position:sticky;top:0;height:100vh;overflow:hidden">
    <div style="opacity:var(--pe);transform:translateY(calc((1 - var(--pe)) * 60px))">…</div>
  </div>
</div>
```
`--p` is the linear progress (0–1) and `--pe` is the eased progress. For a multi-step scene, listen for `mk:progress` and set up stages in JS. For example:
```js
scene.addEventListener('mk:progress', ({ detail: { p } }) => {
  const k = v => Math.max(0, Math.min(1, v));
  title.style.opacity = 1 - k(p / 0.18);         // hero copy leaves in the first 18%
  const sort = k((p - 0.05) / 0.36);              // main move: 5% to 41%
  const chips = k((p - 0.52) / 0.06);             // stamp details on at 52%
  const stats = k((p - 0.70) / 0.18);             // numbers count at 70% to 88%
});
```
Pinned heights used on Actorly: hero 370vh, How it works 380vh. Use no more than three per page. For three beats, use `beat = floor(p × 3)` and switch panels with a 24px slide plus a fade.

### 7. Looping demo that pauses off screen
```js
const stop = MotionKit.loop(sectionEl, done => {
  // one cycle: type, show the result, reset…
  MotionKit.later(done, 4000);
}, 1800);
sectionEl.addEventListener('pointerdown', stop, { once: true });
```

### 8. Magnetic button
Add `data-mk-magnet` to the main call to action. Within 140px the button leans toward the pointer by up to 35% of the distance. It only works on devices with a mouse.

### 9. Menus (copy these numbers)
- Hover menus open 90ms after the pointer enters and close 350ms after it leaves.
- Put an invisible bridge over the gap between the button and the panel.
- Esc and clicking outside close the menu at once.
- The panel fades in and drops 8px over 0.3s with Settle.
- On phones, the sheet fades in and drops 12px, and the two menu bars turn into a cross.

### 10. Footer sign-off
Give the big wordmark one mask per letter, rising 80ms + 60ms × i over 1.2s with Settle. It plays once, when the footer top reaches 60% of the viewport.

## Section recipes to borrow
Pick a different one for each section.
- **Sort the pile (scroll):** scattered items fly into groups as you scroll, and counters climb.
- **Search types itself (loop):** a field types a query, the results filter and re-flow, then it moves to the next word.
- **Three beats (scroll):** one pinned panel tells a story in three steps, with a progress rail of three bars.
- **Lines draw to targets:** SVG paths draw using stroke-dashoffset, 0.8s with Settle, staggered, and labels slide in after them.
- **Drop and match (in view):** items drop in with Spring, a scan bar sweeps, then rows light up 420ms apart.
- **Zoom to full bleed (scroll):** a thumbnail grows to full size with clip-path inset (radius 18px down to 0), the image inside scales from 1.25 to 1, a scan line passes, and labels pop on.
- **Before and after slider:** it sweeps once (88% → 36%, 1.8s), then the visitor drags it.
- **Hold to confirm:** a ring fills over 1.1s while held, then the items tick off 300ms apart.
- **Chat streams:** a panel slides in, the question types, the answer streams word by word, then a review sheet rises.
- **Orbit and collapse (closing CTA):** photos orbit, collapse into the logo over 1.1s, and the logo's last piece drops in.

## Same motion in GSAP
- **Line reveal:**
  ```js
  gsap.from(lines, { yPercent: 110, duration: 1.15, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: h, start: 'top 90%', once: true } })
  ```
  `expo.out` is close to Settle. For an exact match, use `CustomEase.create('settle', '.16,1,.3,1')`.
- **Fade up:**
  ```js
  gsap.from(el, { y: 16, opacity: 0, duration: 0.9, ease: 'settle', scrollTrigger: { start: 'top 93%', once: true } })
  ```
- **Pinned scene:** a timeline with `scrollTrigger: { trigger, start: 'top top', end: '+=300%', pin: true, scrub: true }`. Place each stage at the same progress points as above (0.05, 0.18, 0.52, 0.70).
- **Demo start:** use `ScrollTrigger.create({ trigger, start: 'top 62%', once: true, onEnter: start })`.
- **Reduced motion:** wrap everything in `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)`.

## Adapting to another brand
Keep the timings, easings and patterns. Change only:
- Colours: the reveal masks need no colour, and highlights use that brand's accent.
- Display font: line masks work with any font. Keep the 0.1em bottom padding so descenders aren't clipped.
- How much motion: a dark technical brand can drop Spring and use Settle for everything.
