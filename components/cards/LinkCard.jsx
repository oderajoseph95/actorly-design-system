import React from 'react';
export function LinkCard({ href, kicker, title, body }) {
  const [h, setH] = React.useState(false);
  return <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: 'var(--white)', borderRadius: 22, padding: 24, boxShadow: h ? 'var(--ring-hover)' : 'var(--ring)', display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--ink)', transition: 'box-shadow .25s ease' }}>
    {kicker && <span style={{ fontSize: 14, fontWeight: 650, color: 'var(--ember-text)' }}>{kicker}</span>}<span style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.25 }}>{title}</span>{body && <span style={{ fontSize: 15, color: 'var(--body)', lineHeight: 1.5 }}>{body}</span>}</a>;
}
