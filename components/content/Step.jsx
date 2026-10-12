import React from 'react';
export function Step({ n, children, done = false }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr)', gap: 12, alignItems: 'center', padding: '14px 16px', borderRadius: 16, background: 'var(--paper)' }}><span style={{ fontWeight: 700, color: done ? 'var(--confirmed-fg)' : 'var(--ember-text)' }}>{n}</span><span style={{ fontSize: 16 }}>{children}</span></div>;
}
