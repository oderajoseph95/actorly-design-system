import React from 'react';
export function ChangelogEntry({ date, type = 'Feature', title, body, plan }) {
  const c = { Feature: ['var(--ember-soft)', 'var(--ember-text)'], Improvement: ['var(--likely-bg)', 'var(--likely-fg)'], Coverage: ['var(--confirmed-bg)', 'var(--confirmed-fg)'], Fix: ['var(--notyet-bg)', 'var(--notyet-fg)'] }[type];
  return <article style={{ background: 'var(--white)', borderRadius: 24, boxShadow: 'var(--ring)', padding: 'clamp(22px,3vw,34px)', display: 'grid', gridTemplateColumns: '150px minmax(0,1fr)', gap: 24 }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ fontSize: 15, fontWeight: 650 }}>{date}</span><span style={{ alignSelf: 'flex-start', padding: '4px 11px', borderRadius: 999, fontSize: 13, fontWeight: 600, background: c[0], color: c[1] }}>{type}</span></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><h2 style={{ margin: 0, fontSize: 22, letterSpacing: '-.02em', lineHeight: 1.25 }}>{title}</h2><p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--body)' }}>{body}</p>{plan && <span style={{ fontSize: 14, color: 'var(--muted)' }}>{plan}</span>}</div></article>;
}
