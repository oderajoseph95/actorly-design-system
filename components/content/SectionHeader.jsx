import React from 'react';
export function SectionHeader({ lines = [], lede, as = 'h2', align = 'center', onInk = false }) {
  const H = as, size = as === 'h1' ? 'var(--h1)' : 'var(--h2)';
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, gap: 'var(--gap-headline-lede)', color: onInk ? 'var(--paper)' : 'var(--ink)' }}>
    <H data-mk-reveal="" style={{ margin: 0, fontSize: size, lineHeight: as === 'h1' ? .92 : .94, letterSpacing: as === 'h1' ? '-.058em' : '-.055em' }}>{lines.map(l => <span key={l} data-mk-mask="" style={{ display: 'block' }}><span data-mk-line="" style={{ display: 'block' }}>{l}</span></span>)}</H>
    {lede && <p data-mk-fade="" data-mk-delay="0.3" style={{ margin: 0, fontSize: 'var(--lede)', lineHeight: 1.55, color: onInk ? 'var(--body-on-ink)' : 'var(--body)', maxWidth: 660 }}>{lede}</p>}</div>;
}
