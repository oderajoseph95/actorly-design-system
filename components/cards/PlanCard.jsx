import React from 'react';
import { Button } from '../actions/Button.jsx';
export function PlanCard({ name, description, price, unit, featured = false, cta, href = '#install', groups = [] }) {
  const fg = featured ? 'var(--paper)' : 'var(--ink)', sub = featured ? 'var(--body-on-ink)' : 'var(--body)', dot = featured ? 'var(--ember)' : 'var(--ink)';
  return <div style={{ background: featured ? 'var(--ink)' : 'var(--white)', color: fg, borderRadius: 26, padding: 'clamp(26px,3vw,40px)', boxShadow: featured ? '0 30px 60px -30px rgba(18,16,14,.6)' : 'var(--ring)', display: 'flex', flexDirection: 'column', gap: 26 }}>
    <div><div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em' }}>{name}</div><div style={{ fontSize: 16, color: sub, marginTop: 6 }}>{description}</div></div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}><span style={{ fontVariationSettings: "'wdth' 100", fontWeight: 700, fontSize: 72, letterSpacing: '-.05em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{price}</span><span style={{ fontSize: 16, color: sub }}>{unit}</span></div>
    <Button variant={featured ? 'inverse' : 'secondary'} href={href}>{cta}</Button>
    <div style={{ height: 1, background: featured ? 'var(--ink-line)' : 'var(--line-soft)' }} />
    {groups.map(g => <div key={g.label} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.02em', color: sub }}>{g.label}</span>
      {g.items.map(it => { const t = typeof it === 'string' ? { t: it } : it; return <span key={t.t} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.4 }}><svg width="18" height="18" viewBox="0 0 24 24" style={{ flex: 'none', marginTop: 1 }}><circle cx="12" cy="12" r="11" fill={dot} /><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke={featured ? 'var(--ink)' : '#FFF'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg><span>{t.t}{t.sub && <span style={{ display: 'block', fontSize: 13, opacity: .7, marginTop: 2 }}>{t.sub}</span>}</span></span>; })}</div>)}
  </div>;
}
