import React from 'react';

export default function Steps({ children }) {
  const items = React.Children.toArray(children);
  return (
    <div style={{ marginBottom: '24px' }}>
      {items.map((child, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '20px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--ifm-color-primary)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '13px',
              marginTop: '2px',
            }}
          >
            {index + 1}
          </div>
          <div style={{ flex: 1 }}>{child}</div>
        </div>
      ))}
    </div>
  );
}
