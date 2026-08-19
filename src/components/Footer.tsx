import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(218, 208, 220, 0.1)',
        backgroundColor: 'rgba(12, 7, 13, 0.95)',
        padding: '3rem 1.5rem 2.5rem',
        marginTop: '4rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #dad0dc, #ae98b3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#0c070d',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-heading)',
            }}
          >
            S
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: 'var(--color-mountbatten-pink-50)',
              letterSpacing: '-0.02em',
            }}
          >
            Skillpath
          </span>
        </div>

        {/* The 3 Links requested */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="#courses-section"
            style={{
              color: 'var(--color-mountbatten-pink-300)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fafafa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-mountbatten-pink-300)')}
          >
            Curriculum
          </a>
          <a
            href="#privacy"
            style={{
              color: 'var(--color-mountbatten-pink-300)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fafafa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-mountbatten-pink-300)')}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            style={{
              color: 'var(--color-mountbatten-pink-300)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fafafa')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-mountbatten-pink-300)')}
          >
            Terms of Service
          </a>
        </nav>

        {/* Copyright line */}
        <p
          style={{
            color: 'var(--color-mountbatten-pink-500)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            textAlign: 'center',
          }}
        >
          &copy; {new Date().getFullYear()} Skillpath Technologies Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
