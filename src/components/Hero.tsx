import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { InteractiveCube } from './InteractiveCube';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cubeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          headlineRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .from(
          sublineRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          cubeContainerRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
          },
          '-=0.9'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToCourses = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const coursesEl = document.getElementById('courses-section');
      if (coursesEl) {
        coursesEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '4rem 1.5rem 2rem',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(174, 152, 179, 0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(95, 73, 100, 0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Text & CTA */}
        <div>
          {/* Futuristic Status Badge */}
          <div
            ref={badgeRef}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(95, 73, 100, 0.25)',
              border: '1px solid var(--border-glass-hover)',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Sparkles size={16} color="#ae98b3" />
            <span
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-mountbatten-pink-200)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Skillpath 2.0 • Autonomous Learning
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-mountbatten-pink-50)',
              marginBottom: '1.25rem',
            }}
          >
            Master The Skills That{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #fafafa 0%, #dad0dc 40%, #ae98b3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                textShadow: '0 0 30px rgba(174, 152, 179, 0.3)',
              }}
            >
              Shape Tomorrow
            </span>
          </h1>

          {/* Subline */}
          <p
            ref={sublineRef}
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--color-mountbatten-pink-300)',
              lineHeight: 1.6,
              maxWidth: '540px',
              marginBottom: '2.25rem',
              fontWeight: 400,
            }}
          >
            Hyper-curated execution pathways engineered for creators, engineers, and visionaries.
          </p>

          {/* CTA Button */}
          <div ref={ctaRef} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleScrollToCourses}
              className="btn-futuristic"
              id="hero-explore-btn"
            >
              <span>Explore Courses</span>
              <ArrowRight size={18} />
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.85rem',
                color: 'var(--color-mountbatten-pink-400)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#34d399' }}>
                <ShieldCheck size={16} />
                <span>100% Refundable Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 3D Holographic Cube Showcase */}
        <div
          ref={cubeContainerRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '440px',
              height: '420px',
              borderRadius: '24px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <InteractiveCube />

            {/* Floating Glass Stats Badge */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                padding: '0.75rem 1.1rem',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.85rem',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#34d399',
                  boxShadow: '0 0 10px #34d399',
                }}
              />
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-mountbatten-pink-100)' }}>
                  Live API Engine
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-mountbatten-pink-400)', fontFamily: 'var(--font-mono)' }}>
                  Active Currency Sync
                </div>
              </div>
            </div>

            {/* Floating Tech Tag */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-mountbatten-pink-200)',
              }}
            >
              <Zap size={14} color="#ae98b3" />
              <span>Real-time Stream</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
