import React from 'react';

export default function Columns({ cols = 2, children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '12px',
        marginBottom: '16px',
      }}
    >
      {children}
    </div>
  );
}
