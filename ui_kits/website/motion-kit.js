// motion-kit.js: Actorly scroll and reveal motion.
// No dependencies. Uses Lenis for smooth scroll if window.Lenis is loaded first.
// Load in <head> (or a DC <helmet>), then call MotionKit.init() once the DOM exists.
(function () {
  const EASE = {
    settle: 'cubic-bezier(.16,1,.3,1)',
    travel: 'cubic-bezier(.65,0,.35,1)',
    spring: 'cubic-bezier(.34,1.56,.64,1)',
    gravity: 'cubic-bezier(.55,0,.85,.35)',
    scrub: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  };
  const clamp = v => Math.max(0, Math.min(1, v));
  const rm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenis = null, started = false, raf = 0;
  const timers = new Set();

  function prep() {
    // Stagger: data-mk-stagger="0.08" on a parent; each child fades up in turn
    document.querySelectorAll('[data-mk-stagger]:not([data-mk-ok])').forEach(p => {
      p.setAttribute('data-mk-ok', '1');
      const s = +p.dataset.mkStagger || 0.08;
      [...p.children].forEach((c, i) => { if (!c.hasAttribute('data-mk-fade')) { c.setAttribute('data-mk-fade', ''); c.dataset.mkDelay = (i * s).toFixed(2); c.dataset.mkY = c.dataset.mkY || 20; } });
    });
    // Line reveal: <h1 data-mk-reveal><span data-mk-mask><span data-mk-line>Line one</span></span>…</h1>
    document.querySelectorAll('[data-mk-mask]:not([data-mk-ok])').forEach(m => {
      m.setAttribute('data-mk-ok', '1');
      Object.assign(m.style, { display: 'block', overflow: 'hidden', paddingBottom: '.1em', marginBottom: '-.1em' });
    });
    document.querySelectorAll('[data-mk-line]:not([data-mk-ok])').forEach(l => {
      l.setAttribute('data-mk-ok', '1');
      l.style.display = 'block';
      if (rm()) return;
      l.style.transform = 'translateY(110%)';
      l.style.transition = `transform ${l.dataset.mkDur || 1.15}s ${EASE.settle}`;
    });
    // Fade up: data-mk-fade (optional data-mk-delay="0.3", data-mk-y="16")
    document.querySelectorAll('[data-mk-fade]:not([data-mk-ok])').forEach(el => {
      el.setAttribute('data-mk-ok', '1');
      if (rm()) return;
      const d = el.dataset.mkDelay || 0, y = el.dataset.mkY || 16;
      el.style.opacity = 0; el.style.transform = `translateY(${y}px)`;
      el.style.transition = `opacity .9s ease ${d}s, transform .9s ${EASE.settle} ${d}s`;
    });
  }

  function countUp(el) {
    const to = +el.dataset.mkCount, dur = +(el.dataset.mkDur || 1.4) * 1000, t0 = performance.now();
    const fmt = n => Math.round(n).toLocaleString('en-US');
    if (rm()) { el.textContent = fmt(to); return; }
    const step = t => { const k = clamp((t - t0) / dur); el.textContent = fmt(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  function typeOut(el) {
    const text = el.dataset.mkType, ms = +(el.dataset.mkSpeed || 40);
    if (rm()) { el.textContent = text; return; }
    let i = 0; el.textContent = '';
    const iv = setInterval(() => { el.textContent = text.slice(0, ++i); if (i >= text.length) { clearInterval(iv); timers.delete(iv); } }, ms); timers.add(iv);
  }

  function scan() {
    const vh = window.innerHeight;
    document.querySelectorAll('[data-mk-reveal]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.setAttribute('data-mk-done', '1');
        el.querySelectorAll('[data-mk-line]').forEach((l, i) => { l.style.transitionDelay = (i * 0.09) + 's'; l.style.transform = 'translateY(0)'; });
      }
    });
    document.querySelectorAll('[data-mk-fade]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.93) { el.setAttribute('data-mk-done', '1'); el.style.opacity = 1; el.style.transform = 'translateY(0)'; }
    });
    // In view, once: data-mk-io="name" → fires 'mk:inview' (detail.name). data-mk-at="0.62" sets the line.
    document.querySelectorAll('[data-mk-io]:not([data-mk-io-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * +(el.dataset.mkAt || 0.62)) {
        el.setAttribute('data-mk-io-done', '1');
        el.dispatchEvent(new CustomEvent('mk:inview', { bubbles: true, detail: { name: el.dataset.mkIo } }));
      }
    });
    document.querySelectorAll('[data-mk-count]:not([data-mk-done])').forEach(el => { if (el.getBoundingClientRect().top < vh * 0.85) { el.setAttribute('data-mk-done', '1'); countUp(el); } });
    document.querySelectorAll('[data-mk-type]:not([data-mk-done])').forEach(el => { if (el.getBoundingClientRect().top < vh * 0.8) { el.setAttribute('data-mk-done', '1'); typeOut(el); } });
    // Pinned scroll scene: <div data-mk-scene style="height:300vh"><div style="position:sticky;top:0;height:100vh">…</div></div>
    // Writes --p (0–1, linear) and --pe (eased) on the scene. Use them in inline styles:
    //   transform: translateY(calc((1 - var(--pe)) * 60px)); opacity: var(--pe)
    // Or listen for 'mk:progress' (detail.p) to drive anything in JS.
    document.querySelectorAll('[data-mk-scene]').forEach(el => {
      const r = el.getBoundingClientRect(), tot = Math.max(1, r.height - vh);
      const p = rm() ? 1 : clamp(-r.top / tot);
      if (el._mkP === p) return; el._mkP = p;
      el.style.setProperty('--p', p.toFixed(4)); el.style.setProperty('--pe', EASE.scrub(p).toFixed(4));
      el.dispatchEvent(new CustomEvent('mk:progress', { detail: { p, pe: EASE.scrub(p) } }));
    });
  }

  function frame(t) {
    lenis && lenis.raf(t);
    if (MotionKit._mouse) {
      const { x, y } = MotionKit._mouse;
      document.querySelectorAll('[data-mk-magnet]').forEach(el => {
        const r = el.getBoundingClientRect(), dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2), d = Math.hypot(dx, dy);
        const k = d < 140 ? (1 - d / 140) * 0.35 : 0;
        el.style.transform = `translate(${dx * k}px,${dy * k}px)`; el.style.transition = `transform .25s ${EASE.settle}`;
      });
    }
    raf = requestAnimationFrame(frame);
  }

  function init(opts) {
    opts = opts || {};
    prep();
    if (started) { scan(); return; }
    started = true;
    if (window.Lenis && !rm() && opts.smooth !== false) { try { lenis = new window.Lenis({ lerp: opts.lerp || 0.09, smoothWheel: true }); } catch (e) {} }
    const offset = opts.anchorOffset == null ? -90 : opts.anchorOffset;
    window.addEventListener('scroll', () => requestAnimationFrame(scan), { passive: true });
    window.addEventListener('resize', scan);
    if (window.matchMedia('(hover: hover)').matches) window.addEventListener('pointermove', e => { MotionKit._mouse = { x: e.clientX, y: e.clientY }; }, { passive: true });
    document.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return;
      const el = document.getElementById(a.getAttribute('href').slice(1)); if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset, duration: 1.2 }); else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: rm() ? 'auto' : 'smooth' });
    });
    raf = requestAnimationFrame(frame);
    setTimeout(scan, 60); setTimeout(scan, 400);
  }

  // Loop helpers for demos that repeat. A loop only runs its next cycle while its section is near the viewport.
  function near(el) { if (!el) return false; const r = el.getBoundingClientRect(), vh = window.innerHeight; return r.bottom > -vh * 0.5 && r.top < vh * 1.5; }
  function whenNear(el, fn) { if (near(el)) fn(); else later(() => whenNear(el, fn), 700); }
  function later(fn, ms) { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; }
  // MotionKit.loop(sectionEl, cycleFn, gapMs): cycleFn(done) runs one cycle and calls done() at the end.
  // Returns stop(). Call stop() on any click or keypress inside the demo to hand control to the visitor.
  function loop(el, cycle, gap) {
    let alive = true;
    const run = () => { if (!alive) return; cycle(() => later(() => whenNear(el, run), gap || 1800)); };
    whenNear(el, run);
    return () => { alive = false; };
  }
  function destroy() { timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers.clear(); cancelAnimationFrame(raf); lenis && lenis.destroy(); started = false; }

  window.MotionKit = { init, scan, prep, near, whenNear, later, loop, destroy, EASE, reducedMotion: rm };
})();
