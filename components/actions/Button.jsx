import React from 'react';
export function Button({ variant = 'primary', size = 'md', shopify = false, href, onClick, children }) {
  const [h, setH] = React.useState(false), H = { lg: 54, md: 48, sm: 42 }[size];
  const v = { primary: [h ? 'var(--ember)' : 'var(--ink)', h ? 'var(--ink)' : 'var(--paper)', 'none'], inverse: [h ? 'var(--paper)' : 'var(--ember)', 'var(--ink)', 'none'],
    secondary: ['transparent', 'var(--ink)', h ? 'inset 0 0 0 1.5px var(--ink)' : 'inset 0 0 0 1px var(--outline)'], 'secondary-inverse': ['transparent', h ? 'var(--ember-hover-on-ink)' : 'var(--paper)', 'inset 0 0 0 1px var(--ink-outline)'] }[variant];
  const glyph = variant === 'inverse' ? 'black' : variant === 'primary' ? 'white' : 'color', Tag = href ? 'a' : 'button';
  return <Tag href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ height: H, padding: '0 ' + (H * .5) + 'px', border: 0, borderRadius: 999, background: v[0], color: v[1], boxShadow: v[2], font: 'inherit', fontSize: size === 'sm' ? 15 : 16, fontWeight: variant === 'inverse' ? 700 : 600, display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .2s ease, color .2s ease, box-shadow .2s ease' }}>
    {shopify && <span className={'actorly-glyph actorly-glyph--' + glyph} />}{children}</Tag>;
}
