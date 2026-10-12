import React from 'react';
export function Stamp({ title, meta, tilt = 0 }) {
  return <span style={{ display: 'inline-block', background: 'var(--ember)', color: 'var(--ink)', borderRadius: 'var(--radius-stamp)', padding: '9px 13px', fontSize: 14, fontWeight: 700, lineHeight: 1.3, boxShadow: 'var(--shadow-stamp)', transform: 'rotate(' + tilt + 'deg)', whiteSpace: 'nowrap' }}>{title}<span style={{ display: 'block', fontWeight: 500 }}>{meta}</span></span>;
}
