import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Course, CountryCode, CountryResponse, SortOption } from '../types';
import { CourseCard } from './CourseCard';
import { SkeletonCard } from './SkeletonCard';
import {
  Search,
  RefreshCw,
  AlertTriangle,
  SlidersHorizontal,
  Inbox,
  X,
  Check,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface CoursesSectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  defaultCurrencyFallback?: CountryCode;
}

const COURSES_ENDPOINT = 'https://syncsphere-hiv6.onrender.com/assignment/course-data';
const COUNTRY_ENDPOINT = 'https://syncsphere-hiv6.onrender.com/assignment/country-code';

// Smart dynamic browser-based geo-detection
const detectBrowserCountry = (): CountryCode => {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const language = navigator.language || '';
    if (
      timeZone.includes('Calcutta') ||
      timeZone.includes('Kolkata') ||
      timeZone.includes('Asia/Colombo') ||
      language.toLowerCase().includes('in')
    ) {
      return 'IN';
    }
    return 'US';
  } catch {
    return 'IN';
  }
};

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  sectionTitle = 'Autonomous Learning Pathways',
  sectionSubtitle = 'Direct API-streamed masterclasses engineered to accelerate real-world execution. Smart regional pricing automatically synced with your location.',
  defaultCurrencyFallback = 'IN',
}) => {
  // State variables
  const [courses, setCourses] = useState<Course[]>([]);
  const [detectedLocationName, setDetectedLocationName] = useState<string>('Syncing Geo-Location...');
  const [selectedCurrency, setSelectedCurrency] = useState<CountryCode>(defaultCurrencyFallback);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Fetch logic with smart location detection
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. Fetch Courses Data (GET only)
      const coursePromise = fetch(COURSES_ENDPOINT, { method: 'GET' }).then(async (res) => {
        if (!res.ok) {
          throw new Error(`Course service returned HTTP ${res.status}`);
        }
        return (await res.json()) as Course[];
      });

      // 2. Fetch Country Code (GET only)
      const countryPromise = fetch(COUNTRY_ENDPOINT, { method: 'GET' }).then(async (res) => {
        if (!res.ok) {
          throw new Error(`Country endpoint returned HTTP ${res.status}`);
        }
        return (await res.json()) as CountryResponse;
      });

      // Execute in parallel with individual settlement
      const [courseResult, countryResult] = await Promise.allSettled([
        coursePromise,
        countryPromise,
      ]);

      // Check Course Data Result
      if (courseResult.status === 'fulfilled') {
        const fetchedData = courseResult.value;
        if (Array.isArray(fetchedData)) {
          setCourses(fetchedData);
        } else {
          throw new Error('Invalid course data payload received from server.');
        }
      } else {
        throw new Error(
          courseResult.reason?.message || 'Failed to retrieve course data from server.'
        );
      }

      // Geolocation Detection: API first, Native browser fallback second
      if (countryResult.status === 'fulfilled' && countryResult.value?.country_code) {
        const geoCode = countryResult.value.country_code;
        setSelectedCurrency(geoCode);
        setDetectedLocationName(geoCode === 'IN' ? '🇮🇳 India (IN)' : '🇺🇸 United States (US)');
      } else {
        // Dynamic client-side timezone/browser geolocation detection
        const browserGeo = detectBrowserCountry();
        setSelectedCurrency(browserGeo);
        setDetectedLocationName(
          browserGeo === 'IN' ? '🇮🇳 India (Asia/Kolkata)' : '🇺🇸 United States (US)'
        );
      }
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError(
        err.message || 'Unable to connect to Skillpath API. The server returned a simulated error.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Retry handler
  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    fetchData();
  };

  // Extract unique categories for filter pills
  const categories = useMemo(() => {
    const cats = new Set<string>();
    courses.forEach((c) => {
      if (c.mainCategory) cats.add(c.mainCategory);
    });
    return ['All', ...Array.from(cats)];
  }, [courses]);

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // 1. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.courseName.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.mainCategory?.toLowerCase().includes(q) ||
          c.shortCourse?.toLowerCase().includes(q)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter((c) => c.mainCategory === selectedCategory);
    }

    // 3. Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => {
        const priceA = selectedCurrency === 'IN' ? a.pricePaise : a.priceUsdCents;
        const priceB = selectedCurrency === 'IN' ? b.pricePaise : b.priceUsdCents;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => {
        const priceA = selectedCurrency === 'IN' ? a.pricePaise : a.priceUsdCents;
        const priceB = selectedCurrency === 'IN' ? b.pricePaise : b.priceUsdCents;
        return priceB - priceA;
      });
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.courseName.localeCompare(b.courseName));
    }

    return result;
  }, [courses, searchQuery, selectedCategory, sortBy, selectedCurrency]);

  return (
    <section
      id="courses-section"
      style={{
        padding: '4.5rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '2.75rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(95, 73, 100, 0.25)',
            border: '1px solid var(--border-glass)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-mountbatten-pink-200)',
            marginBottom: '1rem',
          }}
        >
          <Sparkles size={13} color="#ae98b3" />
          <span>LIVE CURRICULUM STREAM</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 800,
            color: 'var(--color-mountbatten-pink-50)',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          {sectionTitle}
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-mountbatten-pink-300)',
            maxWidth: '650px',
            lineHeight: 1.6,
            marginBottom: '1.75rem',
          }}
        >
          {sectionSubtitle}
        </p>

        {/* Ultra-Polished Futuristic Location & Currency Capsule */}
        <div
          className="glass-panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.6rem 1rem',
            borderRadius: '9999px',
            border: '1px solid rgba(174, 152, 179, 0.35)',
            background: 'rgba(28, 21, 30, 0.85)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px rgba(146, 123, 151, 0.15)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Live Location Beacon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(12, 7, 13, 0.7)',
              border: '1px solid rgba(218, 208, 220, 0.1)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#34d399',
                boxShadow: '0 0 8px #34d399',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-mountbatten-pink-300)' }}>
              Location:
            </span>
            <strong
              style={{
                fontSize: '0.85rem',
                color: '#fafafa',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em',
              }}
            >
              {detectedLocationName}
            </strong>
          </div>

          {/* Glowing Currency Switcher */}
          <div
            style={{
              display: 'flex',
              background: 'rgba(12, 7, 13, 0.95)',
              padding: '3px',
              borderRadius: '9999px',
              border: '1px solid rgba(218, 208, 220, 0.12)',
            }}
          >
            <button
              onClick={() => setSelectedCurrency('IN')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                background:
                  selectedCurrency === 'IN'
                    ? 'linear-gradient(135deg, #ffffff 0%, #dad0dc 50%, #ae98b3 100%)'
                    : 'transparent',
                color: selectedCurrency === 'IN' ? '#0c070d' : 'var(--color-mountbatten-pink-300)',
                fontWeight: selectedCurrency === 'IN' ? 700 : 500,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: selectedCurrency === 'IN' ? '0 0 12px rgba(218, 208, 220, 0.4)' : 'none',
              }}
              title="Switch to Indian Rupee (INR ₹) view"
            >
              {selectedCurrency === 'IN' && <Check size={13} strokeWidth={3} />}
              <span>🇮🇳 ₹ INR</span>
            </button>

            <button
              onClick={() => setSelectedCurrency('US')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                background:
                  selectedCurrency === 'US'
                    ? 'linear-gradient(135deg, #ffffff 0%, #dad0dc 50%, #ae98b3 100%)'
                    : 'transparent',
                color: selectedCurrency === 'US' ? '#0c070d' : 'var(--color-mountbatten-pink-300)',
                fontWeight: selectedCurrency === 'US' ? 700 : 500,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: selectedCurrency === 'US' ? '0 0 12px rgba(218, 208, 220, 0.4)' : 'none',
              }}
              title="Switch to US Dollar (USD $) view"
            >
              {selectedCurrency === 'US' && <Check size={13} strokeWidth={3} />}
              <span>🇺🇸 $ USD</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar: Search, Category Filter, Sort */}
      {!error && (
        <div
          className="glass-panel"
          style={{
            borderRadius: '16px',
            padding: '1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 260px',
                maxWidth: '450px',
              }}
            >
              <Search
                size={18}
                color="var(--color-mountbatten-pink-400)"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              <input
                type="text"
                placeholder="Search by keyword, topic, or system..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 2.25rem 0.65rem 2.4rem',
                  borderRadius: '10px',
                  background: 'rgba(12, 7, 13, 0.7)',
                  border: '1px solid var(--border-glass)',
                  color: '#fafafa',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-mountbatten-pink-400)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-glass)')}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-mountbatten-pink-400)',
                    cursor: 'pointer',
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Refresh Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SlidersHorizontal size={16} color="var(--color-mountbatten-pink-400)" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  style={{
                    background: 'rgba(12, 7, 13, 0.7)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--color-mountbatten-pink-200)',
                    padding: '0.65rem 1rem',
                    borderRadius: '10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <option value="default">Default API Order</option>
                  <option value="price-low">Price: Lowest First</option>
                  <option value="price-high">Price: Highest First</option>
                  <option value="name">Course Name (A-Z)</option>
                </select>
              </div>

              {/* Refresh Feed */}
              <button
                onClick={handleRetry}
                disabled={isLoading}
                className="btn-outline-glass"
                style={{
                  padding: '0.6rem 0.9rem',
                  fontSize: '0.85rem',
                }}
                title="Fetch fresh real-time sample"
              >
                <RefreshCw
                  size={15}
                  style={{
                    animation: isLoading ? 'spin 1s linear infinite' : 'none',
                  }}
                />
                <span>Sync</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                borderTop: '1px solid rgba(218, 208, 220, 0.08)',
                paddingTop: '0.85rem',
              }}
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #dad0dc, #ae98b3)'
                        : 'rgba(43, 36, 45, 0.5)',
                      color: isActive ? '#0c070d' : 'var(--color-mountbatten-pink-200)',
                      border: isActive
                        ? '1px solid #fafafa'
                        : '1px solid var(--border-glass)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* STATE 1: ERROR STATE (Flaky API Simulation) */}
      {error && (
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '3rem 2rem',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            background: 'rgba(28, 21, 30, 0.85)',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              border: '1px solid rgba(239, 68, 68, 0.4)',
            }}
          >
            <AlertTriangle size={28} color="#f87171" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: '#fafafa',
              marginBottom: '0.5rem',
            }}
          >
            Network Stream Interrupted
          </h3>

          <p
            style={{
              color: 'var(--color-mountbatten-pink-300)',
              fontSize: '0.95rem',
              lineHeight: 1.5,
              marginBottom: '1.75rem',
            }}
          >
            {error}
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <button
              onClick={handleRetry}
              className="btn-futuristic"
              style={{
                padding: '0.75rem 2rem',
                fontSize: '0.95rem',
              }}
            >
              <RefreshCw size={16} />
              <span>Retry Request</span>
            </button>
            {retryCount > 0 && (
              <span
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-mountbatten-pink-400)',
                }}
              >
                Retry attempts: {retryCount}
              </span>
            )}
          </div>
        </div>
      )}

      {/* STATE 2: LOADING SKELETONS */}
      {isLoading && (
        <div className="courses-grid-layout">
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      )}

      {/* STATE 3: ZERO RESULTS STATE */}
      {!isLoading && !error && filteredCourses.length === 0 && (
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '3.5rem 2rem',
            textAlign: 'center',
            maxWidth: '550px',
            margin: '0 auto',
          }}
        >
          <Inbox
            size={42}
            color="var(--color-mountbatten-pink-400)"
            style={{ margin: '0 auto 1rem' }}
          />
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.3rem',
              color: '#fafafa',
              marginBottom: '0.5rem',
            }}
          >
            No Courses Found
          </h3>
          <p
            style={{
              color: 'var(--color-mountbatten-pink-300)',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
            }}
          >
            No pathways matched &ldquo;{searchQuery || selectedCategory}&rdquo;. Try clearing your search query or selecting another category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSortBy('default');
            }}
            className="btn-outline-glass"
          >
            <span>Reset Search & Filters</span>
          </button>
        </div>
      )}

      {/* STATE 4: WORKING STATE (Responsive 3-col / 2-col / 1-col Grid) */}
      {!isLoading && !error && filteredCourses.length > 0 && (
        <>
          <div className="courses-grid-layout">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.mangoId || course.courseCode}
                course={course}
                countryCode={selectedCurrency}
              />
            ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '2.5rem',
              fontSize: '0.85rem',
              color: 'var(--color-mountbatten-pink-400)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Showing {filteredCourses.length} live skill paths • Real-Time Pricing Engine
          </div>
        </>
      )}
    </section>
  );
};
