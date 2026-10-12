/* @ds-bundle: {"format":4,"namespace":"ActorlyDesignSystem_b707b4","components":[{"name":"BillingToggle","sourcePath":"components/actions/BillingToggle.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Pill","sourcePath":"components/actions/Pill.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"LinkCard","sourcePath":"components/cards/LinkCard.jsx"},{"name":"PlanCard","sourcePath":"components/cards/PlanCard.jsx"},{"name":"TrackTile","sourcePath":"components/cards/TrackTile.jsx"},{"name":"ChangelogEntry","sourcePath":"components/content/ChangelogEntry.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Step","sourcePath":"components/content/Step.jsx"},{"name":"AdminFrame","sourcePath":"components/data/AdminFrame.jsx"},{"name":"HistoryRow","sourcePath":"components/data/HistoryRow.jsx"},{"name":"WasNow","sourcePath":"components/data/WasNow.jsx"},{"name":"Stamp","sourcePath":"components/labels/Stamp.jsx"},{"name":"StatusChip","sourcePath":"components/labels/StatusChip.jsx"}],"sourceHashes":{"components/actions/BillingToggle.jsx":"b24785fb75b5","components/actions/Button.jsx":"5cf9caede646","components/actions/Pill.jsx":"0392f977ccd4","components/brand/Logo.jsx":"c23e93170c7d","components/cards/LinkCard.jsx":"1e1476d32421","components/cards/PlanCard.jsx":"d5fcdc959dc8","components/cards/TrackTile.jsx":"7f96e7c7ed17","components/content/ChangelogEntry.jsx":"379f90d40bf8","components/content/FaqItem.jsx":"94f1fc0541fd","components/content/SectionHeader.jsx":"23462a327354","components/content/Step.jsx":"89fae70ee642","components/data/AdminFrame.jsx":"e4c872b0c0fb","components/data/HistoryRow.jsx":"5275c441fcdd","components/data/WasNow.jsx":"230c9814626e","components/labels/Stamp.jsx":"b5712aa4caf4","components/labels/StatusChip.jsx":"edc7836948e7","motion/motion-kit.js":"00c78f383a32","ui_kits/website/motion-kit.js":"00c78f383a32"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ActorlyDesignSystem_b707b4 = window.ActorlyDesignSystem_b707b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/BillingToggle.jsx
try { (() => {
function BillingToggle({
  value = 'monthly',
  onChange
}) {
  const b = (k, l) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChange && onChange(k),
    style: {
      height: 40,
      padding: '0 18px',
      border: 0,
      borderRadius: 999,
      font: 'inherit',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      background: value === k ? 'var(--ink)' : 'transparent',
      color: value === k ? 'var(--paper)' : 'var(--ink)',
      transition: 'background .25s, color .25s'
    }
  }, l);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: 'var(--white)',
      boxShadow: 'var(--ring)'
    }
  }, b('monthly', 'Monthly'), b('yearly', 'Yearly · save 31%'));
}
Object.assign(__ds_scope, { BillingToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/BillingToggle.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  shopify = false,
  href,
  onClick,
  children
}) {
  const [h, setH] = React.useState(false),
    H = {
      lg: 54,
      md: 48,
      sm: 42
    }[size];
  const v = {
    primary: [h ? 'var(--ember)' : 'var(--ink)', h ? 'var(--ink)' : 'var(--paper)', 'none'],
    inverse: [h ? 'var(--paper)' : 'var(--ember)', 'var(--ink)', 'none'],
    secondary: ['transparent', 'var(--ink)', h ? 'inset 0 0 0 1.5px var(--ink)' : 'inset 0 0 0 1px var(--outline)'],
    'secondary-inverse': ['transparent', h ? 'var(--ember-hover-on-ink)' : 'var(--paper)', 'inset 0 0 0 1px var(--ink-outline)']
  }[variant];
  const glyph = variant === 'inverse' ? 'black' : variant === 'primary' ? 'white' : 'color',
    Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      height: H,
      padding: '0 ' + H * .5 + 'px',
      border: 0,
      borderRadius: 999,
      background: v[0],
      color: v[1],
      boxShadow: v[2],
      font: 'inherit',
      fontSize: size === 'sm' ? 15 : 16,
      fontWeight: variant === 'inverse' ? 700 : 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background .2s ease, color .2s ease, box-shadow .2s ease'
    }
  }, shopify && /*#__PURE__*/React.createElement("span", {
    className: 'actorly-glyph actorly-glyph--' + glyph
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Pill.jsx
try { (() => {
function Pill({
  active = false,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      height: 40,
      padding: '0 16px',
      border: 0,
      borderRadius: 999,
      font: 'inherit',
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer',
      background: active ? 'var(--ink)' : 'var(--white)',
      color: active ? 'var(--paper)' : 'var(--ink)',
      boxShadow: 'var(--ring)',
      transition: 'background .25s, color .25s'
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Pill.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  size = 22,
  onDark = false,
  wordmark = true,
  href
}) {
  const back = onDark ? 'var(--paper)' : 'var(--ink)',
    Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    "aria-label": "Actorly",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * .42,
      color: onDark ? 'var(--paper)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "5",
    width: "28",
    height: "28",
    rx: "7",
    fill: back,
    opacity: ".32"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "15",
    width: "28",
    height: "28",
    rx: "7",
    fill: "var(--ember)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.5 31 H13.5 M18 26.5 L13.5 31 L18 35.5",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "3.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 650,
      fontSize: size * .92,
      letterSpacing: '-.045em'
    }
  }, "actorly"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/cards/LinkCard.jsx
try { (() => {
function LinkCard({
  href,
  kicker,
  title,
  body
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--white)',
      borderRadius: 22,
      padding: 24,
      boxShadow: h ? 'var(--ring-hover)' : 'var(--ring)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      color: 'var(--ink)',
      transition: 'box-shadow .25s ease'
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 650,
      color: 'var(--ember-text)'
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, title), body && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--body)',
      lineHeight: 1.5
    }
  }, body));
}
Object.assign(__ds_scope, { LinkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/LinkCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PlanCard.jsx
try { (() => {
function PlanCard({
  name,
  description,
  price,
  unit,
  featured = false,
  cta,
  href = '#install',
  groups = []
}) {
  const fg = featured ? 'var(--paper)' : 'var(--ink)',
    sub = featured ? 'var(--body-on-ink)' : 'var(--body)',
    dot = featured ? 'var(--ember)' : 'var(--ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: featured ? 'var(--ink)' : 'var(--white)',
      color: fg,
      borderRadius: 26,
      padding: 'clamp(26px,3vw,40px)',
      boxShadow: featured ? '0 30px 60px -30px rgba(18,16,14,.6)' : 'var(--ring)',
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: sub,
      marginTop: 6
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariationSettings: "'wdth' 100",
      fontWeight: 700,
      fontSize: 72,
      letterSpacing: '-.05em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: sub
    }
  }, unit)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'inverse' : 'secondary',
    href: href
  }, cta), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: featured ? 'var(--ink-line)' : 'var(--line-soft)'
    }
  }), groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '.02em',
      color: sub
    }
  }, g.label), g.items.map(it => {
    const t = typeof it === 'string' ? {
      t: it
    } : it;
    return /*#__PURE__*/React.createElement("span", {
      key: t.t,
      style: {
        display: 'flex',
        gap: 10,
        fontSize: 15,
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      style: {
        flex: 'none',
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "11",
      fill: dot
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 12.5l3.2 3.2L17 9",
      fill: "none",
      stroke: featured ? 'var(--ink)' : '#FFF',
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), /*#__PURE__*/React.createElement("span", null, t.t, t.sub && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        opacity: .7,
        marginTop: 2
      }
    }, t.sub)));
  }))));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TrackTile.jsx
try { (() => {
function TrackTile({
  title,
  was,
  now,
  changed = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 22,
      padding: 22,
      boxShadow: changed ? 'var(--ring-active)' : 'var(--ring)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      transition: 'box-shadow .3s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.015em'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: changed ? 'var(--ember-text)' : 'var(--muted)',
      textDecoration: changed ? 'line-through' : 'none',
      transition: 'color .4s'
    }
  }, was), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      opacity: changed ? 1 : 0,
      transition: 'opacity .4s'
    }
  }, "\u2192 ", now)));
}
Object.assign(__ds_scope, { TrackTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TrackTile.jsx", error: String((e && e.message) || e) }); }

// components/content/ChangelogEntry.jsx
try { (() => {
function ChangelogEntry({
  date,
  type = 'Feature',
  title,
  body,
  plan
}) {
  const c = {
    Feature: ['var(--ember-soft)', 'var(--ember-text)'],
    Improvement: ['var(--likely-bg)', 'var(--likely-fg)'],
    Coverage: ['var(--confirmed-bg)', 'var(--confirmed-fg)'],
    Fix: ['var(--notyet-bg)', 'var(--notyet-fg)']
  }[type];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: 'var(--white)',
      borderRadius: 24,
      boxShadow: 'var(--ring)',
      padding: 'clamp(22px,3vw,34px)',
      display: 'grid',
      gridTemplateColumns: '150px minmax(0,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 650
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      padding: '4px 11px',
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      background: c[0],
      color: c[1]
    }
  }, type)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 22,
      letterSpacing: '-.02em',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--body)'
    }
  }, body), plan && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--muted)'
    }
  }, plan)));
}
Object.assign(__ds_scope, { ChangelogEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChangelogEntry.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
function FaqItem({
  q,
  a,
  last = false,
  open = false
}) {
  const [o, setO] = React.useState(open);
  return /*#__PURE__*/React.createElement("details", {
    open: o,
    onToggle: e => setO(e.currentTarget.open),
    style: {
      borderTop: '1px solid var(--line)',
      borderBottom: last ? '1px solid var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: 'pointer',
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      padding: '24px 0',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.015em'
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 400,
      transition: 'transform .3s var(--ease-settle)',
      transform: o ? 'rotate(45deg)' : 'none'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 24px',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--body)',
      maxWidth: '64ch'
    }
  }, a));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  lines = [],
  lede,
  as = 'h2',
  align = 'center',
  onInk = false
}) {
  const H = as,
    size = as === 'h1' ? 'var(--h1)' : 'var(--h2)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 'var(--gap-headline-lede)',
      color: onInk ? 'var(--paper)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    "data-mk-reveal": "",
    style: {
      margin: 0,
      fontSize: size,
      lineHeight: as === 'h1' ? .92 : .94,
      letterSpacing: as === 'h1' ? '-.058em' : '-.055em'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    "data-mk-mask": "",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-mk-line": "",
    style: {
      display: 'block'
    }
  }, l)))), lede && /*#__PURE__*/React.createElement("p", {
    "data-mk-fade": "",
    "data-mk-delay": "0.3",
    style: {
      margin: 0,
      fontSize: 'var(--lede)',
      lineHeight: 1.55,
      color: onInk ? 'var(--body-on-ink)' : 'var(--body)',
      maxWidth: 660
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Step.jsx
try { (() => {
function Step({
  n,
  children,
  done = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '40px minmax(0,1fr)',
      gap: 12,
      alignItems: 'center',
      padding: '14px 16px',
      borderRadius: 16,
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: done ? 'var(--confirmed-fg)' : 'var(--ember-text)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, children));
}
Object.assign(__ds_scope, { Step });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Step.jsx", error: String((e && e.message) || e) }); }

// components/data/AdminFrame.jsx
try { (() => {
function AdminFrame({
  children,
  maxWidth = 1180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth,
      borderRadius: 22,
      overflow: 'hidden',
      background: 'var(--admin-ground)',
      boxShadow: 'var(--shadow-demo)',
      fontFamily: 'var(--font-admin)',
      color: 'var(--admin-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48,
      background: 'var(--admin-bar)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 18px',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "actorly-glyph actorly-glyph--white"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(420px,60%)',
      height: 30,
      background: 'var(--admin-search)',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      fontSize: 13,
      color: '#B5B5B5'
    }
  }, "Search"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, children));
}
Object.assign(__ds_scope, { AdminFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AdminFrame.jsx", error: String((e && e.message) || e) }); }

// components/data/HistoryRow.jsx
try { (() => {
function HistoryRow({
  item,
  change,
  who,
  sure,
  when,
  fresh = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr) 84px',
      gap: 14,
      alignItems: 'center',
      padding: '0 22px',
      borderTop: '1px solid var(--line-soft)',
      fontSize: 15,
      background: fresh ? 'var(--ember-tint)' : 'transparent',
      transition: 'background 1.4s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600
    }
  }, item), " \xB7 ", change), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, who, sure ? ' · ' + sure : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      textAlign: 'right'
    }
  }, when));
}
Object.assign(__ds_scope, { HistoryRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/HistoryRow.jsx", error: String((e && e.message) || e) }); }

// components/data/WasNow.jsx
try { (() => {
function WasNow({
  field,
  was,
  now
}) {
  const c = (bg, fg, x) => ({
    padding: '2px 8px',
    borderRadius: 6,
    background: 'var(' + bg + ')',
    color: 'var(' + fg + ')',
    fontWeight: x ? 400 : 650,
    textDecoration: x ? 'line-through' : 'none'
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center',
      fontFamily: 'var(--font-admin)',
      fontSize: 15
    }
  }, field && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      minWidth: 100
    }
  }, field), /*#__PURE__*/React.createElement("span", {
    style: c('--was-bg', '--was-fg', true)
  }, was), /*#__PURE__*/React.createElement("span", {
    style: c('--now-bg', '--now-fg', false)
  }, now));
}
Object.assign(__ds_scope, { WasNow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/WasNow.jsx", error: String((e && e.message) || e) }); }

// components/labels/Stamp.jsx
try { (() => {
function Stamp({
  title,
  meta,
  tilt = 0
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: 'var(--ember)',
      color: 'var(--ink)',
      borderRadius: 'var(--radius-stamp)',
      padding: '9px 13px',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.3,
      boxShadow: 'var(--shadow-stamp)',
      transform: 'rotate(' + tilt + 'deg)',
      whiteSpace: 'nowrap'
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 500
    }
  }, meta));
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/labels/StatusChip.jsx
try { (() => {
function StatusChip({
  status = 'unknown',
  children
}) {
  const S = {
    likely: ['--likely', 'Likely'],
    possible: ['--likely', 'Possible'],
    unknown: ['--unknown', 'Unknown'],
    yes: ['--confirmed', 'Yes'],
    some: ['--likely', 'Some fields'],
    'not-yet': ['--notyet', 'Not yet'],
    'not-possible': ['--notpossible', 'Not possible']
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      lineHeight: 1.3,
      padding: '4px 11px',
      borderRadius: 12,
      fontSize: 13,
      fontWeight: 600,
      background: 'var(' + S[0] + '-bg)',
      color: 'var(' + S[0] + '-fg)'
    }
  }, children || S[1]);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/StatusChip.jsx", error: String((e && e.message) || e) }); }

// motion/motion-kit.js
try { (() => {
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
  let lenis = null,
    started = false,
    raf = 0;
  const timers = new Set();
  function prep() {
    // Stagger: data-mk-stagger="0.08" on a parent; each child fades up in turn
    document.querySelectorAll('[data-mk-stagger]:not([data-mk-ok])').forEach(p => {
      p.setAttribute('data-mk-ok', '1');
      const s = +p.dataset.mkStagger || 0.08;
      [...p.children].forEach((c, i) => {
        if (!c.hasAttribute('data-mk-fade')) {
          c.setAttribute('data-mk-fade', '');
          c.dataset.mkDelay = (i * s).toFixed(2);
          c.dataset.mkY = c.dataset.mkY || 20;
        }
      });
    });
    // Line reveal: <h1 data-mk-reveal><span data-mk-mask><span data-mk-line>Line one</span></span>…</h1>
    document.querySelectorAll('[data-mk-mask]:not([data-mk-ok])').forEach(m => {
      m.setAttribute('data-mk-ok', '1');
      Object.assign(m.style, {
        display: 'block',
        overflow: 'hidden',
        paddingBottom: '.1em',
        marginBottom: '-.1em'
      });
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
      const d = el.dataset.mkDelay || 0,
        y = el.dataset.mkY || 16;
      el.style.opacity = 0;
      el.style.transform = `translateY(${y}px)`;
      el.style.transition = `opacity .9s ease ${d}s, transform .9s ${EASE.settle} ${d}s`;
    });
  }
  function countUp(el) {
    const to = +el.dataset.mkCount,
      dur = +(el.dataset.mkDur || 1.4) * 1000,
      t0 = performance.now();
    const fmt = n => Math.round(n).toLocaleString('en-US');
    if (rm()) {
      el.textContent = fmt(to);
      return;
    }
    const step = t => {
      const k = clamp((t - t0) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function typeOut(el) {
    const text = el.dataset.mkType,
      ms = +(el.dataset.mkSpeed || 40);
    if (rm()) {
      el.textContent = text;
      return;
    }
    let i = 0;
    el.textContent = '';
    const iv = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(iv);
        timers.delete(iv);
      }
    }, ms);
    timers.add(iv);
  }
  function scan() {
    const vh = window.innerHeight;
    document.querySelectorAll('[data-mk-reveal]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.setAttribute('data-mk-done', '1');
        el.querySelectorAll('[data-mk-line]').forEach((l, i) => {
          l.style.transitionDelay = i * 0.09 + 's';
          l.style.transform = 'translateY(0)';
        });
      }
    });
    document.querySelectorAll('[data-mk-fade]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.93) {
        el.setAttribute('data-mk-done', '1');
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
    // In view, once: data-mk-io="name" → fires 'mk:inview' (detail.name). data-mk-at="0.62" sets the line.
    document.querySelectorAll('[data-mk-io]:not([data-mk-io-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * +(el.dataset.mkAt || 0.62)) {
        el.setAttribute('data-mk-io-done', '1');
        el.dispatchEvent(new CustomEvent('mk:inview', {
          bubbles: true,
          detail: {
            name: el.dataset.mkIo
          }
        }));
      }
    });
    document.querySelectorAll('[data-mk-count]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.85) {
        el.setAttribute('data-mk-done', '1');
        countUp(el);
      }
    });
    document.querySelectorAll('[data-mk-type]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.8) {
        el.setAttribute('data-mk-done', '1');
        typeOut(el);
      }
    });
    // Pinned scroll scene: <div data-mk-scene style="height:300vh"><div style="position:sticky;top:0;height:100vh">…</div></div>
    // Writes --p (0–1, linear) and --pe (eased) on the scene. Use them in inline styles:
    //   transform: translateY(calc((1 - var(--pe)) * 60px)); opacity: var(--pe)
    // Or listen for 'mk:progress' (detail.p) to drive anything in JS.
    document.querySelectorAll('[data-mk-scene]').forEach(el => {
      const r = el.getBoundingClientRect(),
        tot = Math.max(1, r.height - vh);
      const p = rm() ? 1 : clamp(-r.top / tot);
      if (el._mkP === p) return;
      el._mkP = p;
      el.style.setProperty('--p', p.toFixed(4));
      el.style.setProperty('--pe', EASE.scrub(p).toFixed(4));
      el.dispatchEvent(new CustomEvent('mk:progress', {
        detail: {
          p,
          pe: EASE.scrub(p)
        }
      }));
    });
  }
  function frame(t) {
    lenis && lenis.raf(t);
    if (MotionKit._mouse) {
      const {
        x,
        y
      } = MotionKit._mouse;
      document.querySelectorAll('[data-mk-magnet]').forEach(el => {
        const r = el.getBoundingClientRect(),
          dx = x - (r.left + r.width / 2),
          dy = y - (r.top + r.height / 2),
          d = Math.hypot(dx, dy);
        const k = d < 140 ? (1 - d / 140) * 0.35 : 0;
        el.style.transform = `translate(${dx * k}px,${dy * k}px)`;
        el.style.transition = `transform .25s ${EASE.settle}`;
      });
    }
    raf = requestAnimationFrame(frame);
  }
  function init(opts) {
    opts = opts || {};
    prep();
    if (started) {
      scan();
      return;
    }
    started = true;
    if (window.Lenis && !rm() && opts.smooth !== false) {
      try {
        lenis = new window.Lenis({
          lerp: opts.lerp || 0.09,
          smoothWheel: true
        });
      } catch (e) {}
    }
    const offset = opts.anchorOffset == null ? -90 : opts.anchorOffset;
    window.addEventListener('scroll', () => requestAnimationFrame(scan), {
      passive: true
    });
    window.addEventListener('resize', scan);
    if (window.matchMedia('(hover: hover)').matches) window.addEventListener('pointermove', e => {
      MotionKit._mouse = {
        x: e.clientX,
        y: e.clientY
      };
    }, {
      passive: true
    });
    document.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, {
        offset,
        duration: 1.2
      });else window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY + offset,
        behavior: rm() ? 'auto' : 'smooth'
      });
    });
    raf = requestAnimationFrame(frame);
    setTimeout(scan, 60);
    setTimeout(scan, 400);
  }

  // Loop helpers for demos that repeat. A loop only runs its next cycle while its section is near the viewport.
  function near(el) {
    if (!el) return false;
    const r = el.getBoundingClientRect(),
      vh = window.innerHeight;
    return r.bottom > -vh * 0.5 && r.top < vh * 1.5;
  }
  function whenNear(el, fn) {
    if (near(el)) fn();else later(() => whenNear(el, fn), 700);
  }
  function later(fn, ms) {
    const t = setTimeout(() => {
      timers.delete(t);
      fn();
    }, ms);
    timers.add(t);
    return t;
  }
  // MotionKit.loop(sectionEl, cycleFn, gapMs): cycleFn(done) runs one cycle and calls done() at the end.
  // Returns stop(). Call stop() on any click or keypress inside the demo to hand control to the visitor.
  function loop(el, cycle, gap) {
    let alive = true;
    const run = () => {
      if (!alive) return;
      cycle(() => later(() => whenNear(el, run), gap || 1800));
    };
    whenNear(el, run);
    return () => {
      alive = false;
    };
  }
  function destroy() {
    timers.forEach(t => {
      clearTimeout(t);
      clearInterval(t);
    });
    timers.clear();
    cancelAnimationFrame(raf);
    lenis && lenis.destroy();
    started = false;
  }
  window.MotionKit = {
    init,
    scan,
    prep,
    near,
    whenNear,
    later,
    loop,
    destroy,
    EASE,
    reducedMotion: rm
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "motion/motion-kit.js", error: String((e && e.message) || e) }); }

// ui_kits/website/motion-kit.js
try { (() => {
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
  let lenis = null,
    started = false,
    raf = 0;
  const timers = new Set();
  function prep() {
    // Stagger: data-mk-stagger="0.08" on a parent; each child fades up in turn
    document.querySelectorAll('[data-mk-stagger]:not([data-mk-ok])').forEach(p => {
      p.setAttribute('data-mk-ok', '1');
      const s = +p.dataset.mkStagger || 0.08;
      [...p.children].forEach((c, i) => {
        if (!c.hasAttribute('data-mk-fade')) {
          c.setAttribute('data-mk-fade', '');
          c.dataset.mkDelay = (i * s).toFixed(2);
          c.dataset.mkY = c.dataset.mkY || 20;
        }
      });
    });
    // Line reveal: <h1 data-mk-reveal><span data-mk-mask><span data-mk-line>Line one</span></span>…</h1>
    document.querySelectorAll('[data-mk-mask]:not([data-mk-ok])').forEach(m => {
      m.setAttribute('data-mk-ok', '1');
      Object.assign(m.style, {
        display: 'block',
        overflow: 'hidden',
        paddingBottom: '.1em',
        marginBottom: '-.1em'
      });
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
      const d = el.dataset.mkDelay || 0,
        y = el.dataset.mkY || 16;
      el.style.opacity = 0;
      el.style.transform = `translateY(${y}px)`;
      el.style.transition = `opacity .9s ease ${d}s, transform .9s ${EASE.settle} ${d}s`;
    });
  }
  function countUp(el) {
    const to = +el.dataset.mkCount,
      dur = +(el.dataset.mkDur || 1.4) * 1000,
      t0 = performance.now();
    const fmt = n => Math.round(n).toLocaleString('en-US');
    if (rm()) {
      el.textContent = fmt(to);
      return;
    }
    const step = t => {
      const k = clamp((t - t0) / dur);
      el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function typeOut(el) {
    const text = el.dataset.mkType,
      ms = +(el.dataset.mkSpeed || 40);
    if (rm()) {
      el.textContent = text;
      return;
    }
    let i = 0;
    el.textContent = '';
    const iv = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(iv);
        timers.delete(iv);
      }
    }, ms);
    timers.add(iv);
  }
  function scan() {
    const vh = window.innerHeight;
    document.querySelectorAll('[data-mk-reveal]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.setAttribute('data-mk-done', '1');
        el.querySelectorAll('[data-mk-line]').forEach((l, i) => {
          l.style.transitionDelay = i * 0.09 + 's';
          l.style.transform = 'translateY(0)';
        });
      }
    });
    document.querySelectorAll('[data-mk-fade]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.93) {
        el.setAttribute('data-mk-done', '1');
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
    // In view, once: data-mk-io="name" → fires 'mk:inview' (detail.name). data-mk-at="0.62" sets the line.
    document.querySelectorAll('[data-mk-io]:not([data-mk-io-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * +(el.dataset.mkAt || 0.62)) {
        el.setAttribute('data-mk-io-done', '1');
        el.dispatchEvent(new CustomEvent('mk:inview', {
          bubbles: true,
          detail: {
            name: el.dataset.mkIo
          }
        }));
      }
    });
    document.querySelectorAll('[data-mk-count]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.85) {
        el.setAttribute('data-mk-done', '1');
        countUp(el);
      }
    });
    document.querySelectorAll('[data-mk-type]:not([data-mk-done])').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.8) {
        el.setAttribute('data-mk-done', '1');
        typeOut(el);
      }
    });
    // Pinned scroll scene: <div data-mk-scene style="height:300vh"><div style="position:sticky;top:0;height:100vh">…</div></div>
    // Writes --p (0–1, linear) and --pe (eased) on the scene. Use them in inline styles:
    //   transform: translateY(calc((1 - var(--pe)) * 60px)); opacity: var(--pe)
    // Or listen for 'mk:progress' (detail.p) to drive anything in JS.
    document.querySelectorAll('[data-mk-scene]').forEach(el => {
      const r = el.getBoundingClientRect(),
        tot = Math.max(1, r.height - vh);
      const p = rm() ? 1 : clamp(-r.top / tot);
      if (el._mkP === p) return;
      el._mkP = p;
      el.style.setProperty('--p', p.toFixed(4));
      el.style.setProperty('--pe', EASE.scrub(p).toFixed(4));
      el.dispatchEvent(new CustomEvent('mk:progress', {
        detail: {
          p,
          pe: EASE.scrub(p)
        }
      }));
    });
  }
  function frame(t) {
    lenis && lenis.raf(t);
    if (MotionKit._mouse) {
      const {
        x,
        y
      } = MotionKit._mouse;
      document.querySelectorAll('[data-mk-magnet]').forEach(el => {
        const r = el.getBoundingClientRect(),
          dx = x - (r.left + r.width / 2),
          dy = y - (r.top + r.height / 2),
          d = Math.hypot(dx, dy);
        const k = d < 140 ? (1 - d / 140) * 0.35 : 0;
        el.style.transform = `translate(${dx * k}px,${dy * k}px)`;
        el.style.transition = `transform .25s ${EASE.settle}`;
      });
    }
    raf = requestAnimationFrame(frame);
  }
  function init(opts) {
    opts = opts || {};
    prep();
    if (started) {
      scan();
      return;
    }
    started = true;
    if (window.Lenis && !rm() && opts.smooth !== false) {
      try {
        lenis = new window.Lenis({
          lerp: opts.lerp || 0.09,
          smoothWheel: true
        });
      } catch (e) {}
    }
    const offset = opts.anchorOffset == null ? -90 : opts.anchorOffset;
    window.addEventListener('scroll', () => requestAnimationFrame(scan), {
      passive: true
    });
    window.addEventListener('resize', scan);
    if (window.matchMedia('(hover: hover)').matches) window.addEventListener('pointermove', e => {
      MotionKit._mouse = {
        x: e.clientX,
        y: e.clientY
      };
    }, {
      passive: true
    });
    document.addEventListener('click', e => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, {
        offset,
        duration: 1.2
      });else window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY + offset,
        behavior: rm() ? 'auto' : 'smooth'
      });
    });
    raf = requestAnimationFrame(frame);
    setTimeout(scan, 60);
    setTimeout(scan, 400);
  }

  // Loop helpers for demos that repeat. A loop only runs its next cycle while its section is near the viewport.
  function near(el) {
    if (!el) return false;
    const r = el.getBoundingClientRect(),
      vh = window.innerHeight;
    return r.bottom > -vh * 0.5 && r.top < vh * 1.5;
  }
  function whenNear(el, fn) {
    if (near(el)) fn();else later(() => whenNear(el, fn), 700);
  }
  function later(fn, ms) {
    const t = setTimeout(() => {
      timers.delete(t);
      fn();
    }, ms);
    timers.add(t);
    return t;
  }
  // MotionKit.loop(sectionEl, cycleFn, gapMs): cycleFn(done) runs one cycle and calls done() at the end.
  // Returns stop(). Call stop() on any click or keypress inside the demo to hand control to the visitor.
  function loop(el, cycle, gap) {
    let alive = true;
    const run = () => {
      if (!alive) return;
      cycle(() => later(() => whenNear(el, run), gap || 1800));
    };
    whenNear(el, run);
    return () => {
      alive = false;
    };
  }
  function destroy() {
    timers.forEach(t => {
      clearTimeout(t);
      clearInterval(t);
    });
    timers.clear();
    cancelAnimationFrame(raf);
    lenis && lenis.destroy();
    started = false;
  }
  window.MotionKit = {
    init,
    scan,
    prep,
    near,
    whenNear,
    later,
    loop,
    destroy,
    EASE,
    reducedMotion: rm
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/motion-kit.js", error: String((e && e.message) || e) }); }

__ds_ns.BillingToggle = __ds_scope.BillingToggle;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LinkCard = __ds_scope.LinkCard;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.TrackTile = __ds_scope.TrackTile;

__ds_ns.ChangelogEntry = __ds_scope.ChangelogEntry;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Step = __ds_scope.Step;

__ds_ns.AdminFrame = __ds_scope.AdminFrame;

__ds_ns.HistoryRow = __ds_scope.HistoryRow;

__ds_ns.WasNow = __ds_scope.WasNow;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StatusChip = __ds_scope.StatusChip;

})();
