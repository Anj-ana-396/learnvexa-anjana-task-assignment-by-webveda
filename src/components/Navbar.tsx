import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(12, 7, 13, 0.75)',
        borderBottom: '1px solid rgba(218, 208, 220, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #dad0dc 0%, #ae98b3 50%, #5f4964 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(174, 152, 179, 0.4)',
            }}
          >
            <Compass size={20} color="#0c070d" />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.35rem',
              color: 'var(--color-mountbatten-pink-50)',
              letterSpacing: '-0.02em',
            }}
          >
            Skillpath
          </span>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#courses-section"
            className="btn-outline-glass"
            style={{
              fontSize: '0.85rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            <Sparkles size={14} color="#ae98b3" />
            <span>Browse Tracks</span>
          </a>
        </div>
      </div>
    </header>
  );
};
