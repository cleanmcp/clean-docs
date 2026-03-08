import React from 'react';
import Link from '@docusaurus/Link';

export default function Card({ title, href, children, horizontal }) {
  const style = {
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: '8px',
    padding: '16px 20px',
    marginBottom: '12px',
    display: horizontal ? 'flex' : 'block',
    alignItems: horizontal ? 'flex-start' : undefined,
    gap: horizontal ? '16px' : undefined,
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    background: 'var(--ifm-card-background-color, var(--ifm-background-surface-color))',
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: '0.95rem',
    marginBottom: children ? '6px' : 0,
    color: href ? 'var(--ifm-color-primary)' : 'inherit',
  };

  const inner = (
    <>
      <div style={titleStyle}>{title}</div>
      {children && <div style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-700)' }}>{children}</div>}
    </>
  );

  if (href) {
    return (
      <Link to={href} style={style} className="card-link">
        {inner}
      </Link>
    );
  }

  return <div style={style}>{inner}</div>;
}
