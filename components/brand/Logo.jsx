import React from 'react';
export function Logo({ size = 22, onDark = false, wordmark = true, href }) {
  const back = onDark ? 'var(--paper)' : 'var(--ink)', Tag = href ? 'a' : 'span';
  return <Tag href={href} aria-label="Actorly" style={{ display: 'inline-flex', alignItems: 'center', gap: size * .42, color: onDark ? 'var(--paper)' : 'var(--ink)' }}>
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true"><rect x="15" y="5" width="28" height="28" rx="7" fill={back} opacity=".32" /><rect x="5" y="15" width="28" height="28" rx="7" fill="var(--ember)" /><path d="M26.5 31 H13.5 M18 26.5 L13.5 31 L18 35.5" fill="none" stroke="var(--ink)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    {wordmark && <span style={{ fontWeight: 650, fontSize: size * .92, letterSpacing: '-.045em' }}>actorly</span>}
  </Tag>;
}
