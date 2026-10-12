import React from 'react';
export function FaqItem({ q, a, last = false, open = false }) {
  const [o, setO] = React.useState(open);
  return <details open={o} onToggle={e => setO(e.currentTarget.open)} style={{ borderTop: '1px solid var(--line)', borderBottom: last ? '1px solid var(--line)' : 'none' }}>
    <summary style={{ cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: 20, padding: '24px 0', fontSize: 20, fontWeight: 600, letterSpacing: '-.015em' }}>{q}<span style={{ fontSize: 26, fontWeight: 400, transition: 'transform .3s var(--ease-settle)', transform: o ? 'rotate(45deg)' : 'none' }}>+</span></summary>
    <div style={{ margin: '0 0 24px', fontSize: 17, lineHeight: 1.6, color: 'var(--body)', maxWidth: '64ch' }}>{a}</div></details>;
}
