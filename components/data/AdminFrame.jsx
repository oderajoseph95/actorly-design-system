import React from 'react';
export function AdminFrame({ children, maxWidth = 1180 }) {
  return <div style={{ width: '100%', maxWidth, borderRadius: 22, overflow: 'hidden', background: 'var(--admin-ground)', boxShadow: 'var(--shadow-demo)', fontFamily: 'var(--font-admin)', color: 'var(--admin-ink)' }}>
    <div style={{ height: 48, background: 'var(--admin-bar)', display: 'flex', alignItems: 'center', padding: '0 18px', gap: 14 }}><span className="actorly-glyph actorly-glyph--white" /><div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}><div style={{ width: 'min(420px,60%)', height: 30, background: 'var(--admin-search)', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 13, color: '#B5B5B5' }}>Search</div></div></div>
    <div style={{ padding: 24 }}>{children}</div></div>;
}
