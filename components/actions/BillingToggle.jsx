import React from 'react';
export function BillingToggle({ value = 'monthly', onChange }) {
  const b = (k, l) => <button type="button" onClick={() => onChange && onChange(k)} style={{ height: 40, padding: '0 18px', border: 0, borderRadius: 999, font: 'inherit', fontSize: 15, fontWeight: 600, cursor: 'pointer', background: value === k ? 'var(--ink)' : 'transparent', color: value === k ? 'var(--paper)' : 'var(--ink)', transition: 'background .25s, color .25s' }}>{l}</button>;
  return <div style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 999, background: 'var(--white)', boxShadow: 'var(--ring)' }}>{b('monthly', 'Monthly')}{b('yearly', 'Yearly · save 31%')}</div>;
}
