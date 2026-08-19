import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '18px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '310px',
        border: '1px solid rgba(218, 208, 220, 0.08)',
        background: 'rgba(28, 21, 30, 0.65)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top badges skeleton */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <div className="skeleton-shimmer" style={{ width: '90px', height: '22px', borderRadius: '6px' }} />
          <div className="skeleton-shimmer" style={{ width: '80px', height: '22px', borderRadius: '9999px' }} />
        </div>

        {/* Title skeleton */}
        <div
          className="skeleton-shimmer"
          style={{ width: '85%', height: '26px', borderRadius: '8px', marginBottom: '0.85rem' }}
        />

        {/* Description line 1 & line 2 */}
        <div
          className="skeleton-shimmer"
          style={{ width: '100%', height: '14px', borderRadius: '4px', marginBottom: '0.45rem' }}
        />
        <div
          className="skeleton-shimmer"
          style={{ width: '70%', height: '14px', borderRadius: '4px', marginBottom: '1.5rem' }}
        />
      </div>

      {/* Footer skeleton */}
      <div style={{ borderTop: '1px solid rgba(218, 208, 220, 0.08)', paddingTop: '1rem' }}>
        {/* Discount badge skeleton */}
        <div
          className="skeleton-shimmer"
          style={{ width: '180px', height: '20px', borderRadius: '6px', marginBottom: '0.85rem' }}
        />

        {/* Metadata + Price row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '1rem',
          }}
        >
          <div className="skeleton-shimmer" style={{ width: '80px', height: '16px', borderRadius: '4px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            <div className="skeleton-shimmer" style={{ width: '50px', height: '12px', borderRadius: '3px' }} />
            <div className="skeleton-shimmer" style={{ width: '90px', height: '26px', borderRadius: '6px' }} />
          </div>
        </div>

        {/* Button skeleton */}
        <div
          className="skeleton-shimmer"
          style={{ width: '100%', height: '40px', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};
