import React from 'react';
export function HistoryRow({ item, change, who, sure, when, fresh = false }) {
  return <div style={{ height: 52, display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr) 84px', gap: 14, alignItems: 'center', padding: '0 22px', borderTop: '1px solid var(--line-soft)', fontSize: 15, background: fresh ? 'var(--ember-tint)' : 'transparent', transition: 'background 1.4s ease' }}>
    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><b style={{ fontWeight: 600 }}>{item}</b> · {change}</span>
    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{who}{sure ? ' · ' + sure : ''}</span>
    <span style={{ color: 'var(--muted)', textAlign: 'right' }}>{when}</span></div>;
}
