import React from 'react';
export function StatusChip({ status = 'unknown', children }) {
  const S = { likely: ['--likely', 'Likely'], possible: ['--likely', 'Possible'], unknown: ['--unknown', 'Unknown'], yes: ['--confirmed', 'Yes'], some: ['--likely', 'Some fields'], 'not-yet': ['--notyet', 'Not yet'], 'not-possible': ['--notpossible', 'Not possible'] }[status];
  return <span style={{ display: 'inline-block', lineHeight: 1.3, padding: '4px 11px', borderRadius: 12, fontSize: 13, fontWeight: 600, background: 'var(' + S[0] + '-bg)', color: 'var(' + S[0] + '-fg)' }}>{children || S[1]}</span>;
}
