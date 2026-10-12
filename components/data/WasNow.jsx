import React from 'react';
export function WasNow({ field, was, now }) {
  const c = (bg, fg, x) => ({ padding: '2px 8px', borderRadius: 6, background: 'var(' + bg + ')', color: 'var(' + fg + ')', fontWeight: x ? 400 : 650, textDecoration: x ? 'line-through' : 'none' });
  return <span style={{ display: 'inline-flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-admin)', fontSize: 15 }}>{field && <b style={{ fontWeight: 600, minWidth: 100 }}>{field}</b>}<span style={c('--was-bg', '--was-fg', true)}>{was}</span><span style={c('--now-bg', '--now-fg', false)}>{now}</span></span>;
}
