import React from 'react';
export function TrackTile({ title, was, now, changed = false }) {
  return <div style={{ background: 'var(--white)', borderRadius: 22, padding: 22, boxShadow: changed ? 'var(--ring-active)' : 'var(--ring)', display: 'flex', flexDirection: 'column', gap: 14, transition: 'box-shadow .3s ease' }}>
    <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.015em' }}>{title}</span>
    <span style={{ fontSize: 15, lineHeight: 1.45 }}><span style={{ color: changed ? 'var(--ember-text)' : 'var(--muted)', textDecoration: changed ? 'line-through' : 'none', transition: 'color .4s' }}>{was}</span><br /><span style={{ fontWeight: 600, opacity: changed ? 1 : 0, transition: 'opacity .4s' }}>→ {now}</span></span></div>;
}
