import React from 'react';
export function Pill({ active = false, onClick, children }) {
  return <button type="button" onClick={onClick} style={{ height: 40, padding: '0 16px', border: 0, borderRadius: 999, font: 'inherit', fontSize: 15, fontWeight: 600, cursor: 'pointer', background: active ? 'var(--ink)' : 'var(--white)', color: active ? 'var(--paper)' : 'var(--ink)', boxShadow: 'var(--ring)', transition: 'background .25s, color .25s' }}>{children}</button>;
}
