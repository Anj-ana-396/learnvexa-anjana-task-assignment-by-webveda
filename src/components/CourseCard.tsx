import React from 'react';
import { Course, CountryCode } from '../types';
import { ShieldCheck, ArrowUpRight, Tag, BookOpen, Sparkles } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  countryCode: CountryCode;
  onSelect?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  countryCode,
  onSelect,
}) => {
  // 1. Raw Prices
  const inrPrice = course.pricePaise / 100; // e.g. 199900 paise -> ₹1,999
  const usdPrice = course.priceUsdCents / 100; // e.g. 3999 cents -> $39.99

  // 2. Computed Original Price (showing high-value original price before platform discount)
  // Standard 40% - 45% platform discount tier
  const discountPercent = course.pricePaise > 150000 ? 43 : 35;
  const originalInr = Math.round(inrPrice / (1 - discountPercent / 100));
  const originalUsd = (usdPrice / (1 - discountPercent / 100)).toFixed(2);

  // 3. Formatted Localized Currency
  const formattedCurrentPrice =
    countryCode === 'IN'
      ? new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: inrPrice % 1 === 0 ? 0 : 2,
        }).format(inrPrice)
      : new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        }).format(usdPrice);

  const formattedOriginalPrice =
    countryCode === 'IN'
      ? new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0,
        }).format(originalInr)
      : `$${originalUsd}`;

  return (
    <div
      className="glass-panel-interactive"
      style={{
        borderRadius: '18px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '310px',
      }}
    >
      {/* Top Header & Badges */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '0.85rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Chosen Learner Field 1: Category Tag */}
          <span className="badge-tag" title={`Category: ${course.mainCategory}`}>
            <Tag size={12} style={{ marginRight: '4px' }} />
            {course.mainCategory || 'Skill Track'}
          </span>

          {/* Conditional Refundable Badge - ONLY when refundable is true */}
          {course.refundable && (
            <span className="badge-refundable" title="100% Money-Back Guarantee">
              <ShieldCheck size={13} />
              <span>Refundable</span>
            </span>
          )}
        </div>

        {/* Course Title */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-mountbatten-pink-50)',
            marginBottom: '0.6rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}
        >
          {course.courseName}
        </h3>

        {/* Course Description - Strict 2-line Clean Clamp */}
        <p
          className="line-clamp-2"
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-mountbatten-pink-300)',
            lineHeight: 1.5,
            marginBottom: '1.25rem',
          }}
          title={course.description}
        >
          {course.description}
        </p>
      </div>

      {/* Card Footer: Metadata, Discount Tag, Original & Discounted Price */}
      <div
        style={{
          borderTop: '1px solid rgba(218, 208, 220, 0.08)',
          paddingTop: '1rem',
          marginTop: 'auto',
        }}
      >
        {/* Discount Tag Requested by User */}
        <div style={{ marginBottom: '0.65rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: '#34d399',
              padding: '0.25rem 0.65rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Sparkles size={12} />
            <span>Discounted price after {discountPercent}% discount</span>
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '0.85rem',
          }}
        >
          {/* Chosen Learner Field 2: Course Type Track */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              color: 'var(--color-mountbatten-pink-400)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <BookOpen size={13} />
            <span>{course.courseType || 'Certified Track'}</span>
          </div>

          {/* Pricing Display with Strikethrough Original Price */}
          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-mountbatten-pink-400)',
                textDecoration: 'line-through',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1,
                marginBottom: '2px',
              }}
            >
              {formattedOriginalPrice}
            </div>

            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--color-mountbatten-pink-50)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                display: 'block',
              }}
            >
              {formattedCurrentPrice}
            </span>
          </div>
        </div>

        {/* Enroll Button */}
        <button
          onClick={() => onSelect && onSelect(course)}
          className="btn-outline-glass"
          style={{
            width: '100%',
            justifyContent: 'center',
            padding: '0.65rem',
            fontSize: '0.9rem',
            borderRadius: '10px',
          }}
          aria-label={`Enroll in ${course.courseName} for ${formattedCurrentPrice}`}
        >
          <span>Start Learning</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};
