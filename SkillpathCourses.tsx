import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

// Types
interface Course {
  courseName: string;
  courseCode: string;
  description: string;
  mainCategory: string;
  shortCourse: string;
  courseType: string;
  pricePaise: number;
  priceUsdCents: number;
  mangoId: string;
  refundable: boolean;
}

type CountryCode = 'IN' | 'US';

interface CountryResponse {
  country_code: CountryCode;
}

type SortOption = 'default' | 'price-low' | 'price-high' | 'name';

interface SkillpathCoursesProps {
  sectionTitle: string;
  sectionSubtitle: string;
  defaultCurrencyFallback: CountryCode;
  showSearchBar: boolean;
  accentColor: string;
  cardColumnsDesktop: number;
}

const COURSES_ENDPOINT = 'https://syncsphere-hiv6.onrender.com/assignment/course-data';
const COUNTRY_ENDPOINT = 'https://syncsphere-hiv6.onrender.com/assignment/country-code';

// Dynamic browser-based geo-detection
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

/**
 * Skillpath Courses Grid — Framer Code Component
 * Compatible with Framer Studio and React 18+
 */
export default function SkillpathCourses(props: SkillpathCoursesProps) {
  const {
    sectionTitle = 'Cutting-Edge Skill Paths',
    sectionSubtitle = 'Live curricula streaming directly from the network. Smart regional pricing automatically synced with your location.',
    defaultCurrencyFallback = 'IN',
    showSearchBar = true,
    accentColor = '#ae98b3',
    cardColumnsDesktop = 3,
  } = props;

  // Component States
  const [courses, setCourses] = React.useState<Course[]>([]);
  const [detectedLocationName, setDetectedLocationName] = React.useState<string>('Syncing Geo-Location...');
  const [selectedCurrency, setSelectedCurrency] = React.useState<CountryCode>(defaultCurrencyFallback);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [retryAttempts, setRetryAttempts] = React.useState<number>(0);

  // Bonus Features: Search, Filter & Sort
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [sortBy, setSortBy] = React.useState<SortOption>('default');

  // Resilient Fetch with Smart Location Detection
  const fetchLiveData = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. Fetch Course Data (GET only)
      const coursesFetch = fetch(COURSES_ENDPOINT, { method: 'GET' }).then(async (res) => {
        if (!res.ok) {
          throw new Error(`Course endpoint returned HTTP ${res.status}`);
        }
        return (await res.json()) as Course[];
      });

      // 2. Fetch Country Code (GET only)
      const countryFetch = fetch(COUNTRY_ENDPOINT, { method: 'GET' }).then(async (res) => {
        if (!res.ok) {
          throw new Error(`Country endpoint returned HTTP ${res.status}`);
        }
        return (await res.json()) as CountryResponse;
      });

      // Parallel fetching with isolated failure handling
      const [coursesResult, countryResult] = await Promise.allSettled([coursesFetch, countryFetch]);

      // Handle Course Data
      if (coursesResult.status === 'fulfilled' && Array.isArray(coursesResult.value)) {
        setCourses(coursesResult.value);
      } else {
        const errorReason =
          coursesResult.status === 'rejected'
            ? coursesResult.reason?.message
            : 'Invalid course response payload';
        throw new Error(errorReason || 'Failed to fetch course data');
      }

      // Handle Geo-Location Detection (API first, client browser geo second)
      if (countryResult.status === 'fulfilled' && countryResult.value?.country_code) {
        const geo = countryResult.value.country_code;
        setSelectedCurrency(geo);
        setDetectedLocationName(geo === 'IN' ? '🇮🇳 India (IN)' : '🇺🇸 United States (US)');
      } else {
        const browserGeo = detectBrowserCountry();
        setSelectedCurrency(browserGeo);
        setDetectedLocationName(
          browserGeo === 'IN' ? '🇮🇳 India (Geo-Detected)' : '🇺🇸 United States (Geo-Detected)'
        );
      }
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError(
        err.message || 'Simulated network test failure: unable to retrieve live course payload.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchLiveData();
  }, [fetchLiveData]);

  // Handle retry
  const handleRetry = () => {
    setRetryAttempts((prev) => prev + 1);
    fetchLiveData();
  };

  // Extract unique categories
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => {
      if (c.mainCategory) set.add(c.mainCategory);
    });
    return ['All', ...Array.from(set)];
  }, [courses]);

  // Filter & Sort Logic
  const filteredCourses = React.useMemo(() => {
    let list = [...courses];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.courseName?.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.mainCategory?.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      list = list.filter((c) => c.mainCategory === selectedCategory);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => {
        const priceA = selectedCurrency === 'IN' ? a.pricePaise : a.priceUsdCents;
        const priceB = selectedCurrency === 'IN' ? b.pricePaise : b.priceUsdCents;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => {
        const priceA = selectedCurrency === 'IN' ? a.pricePaise : a.priceUsdCents;
        const priceB = selectedCurrency === 'IN' ? b.pricePaise : b.priceUsdCents;
        return priceB - priceA;
      });
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.courseName.localeCompare(b.courseName));
    }

    return list;
  }, [courses, searchQuery, selectedCategory, sortBy, selectedCurrency]);

  return (
    <div style={styles.container}>
      {/* Self-contained CSS injection for Framer */}
      <style>{`
        .skillpath-grid {
          display: grid;
          grid-template-columns: repeat(${cardColumnsDesktop}, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .skillpath-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .skillpath-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        .skillpath-card-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 2.8em;
          line-height: 1.4;
        }
        @keyframes spShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .sp-skeleton {
          background: linear-gradient(90deg, rgba(43, 36, 45, 0.6) 0%, rgba(95, 73, 100, 0.35) 50%, rgba(43, 36, 45, 0.6) 100%);
          background-size: 200% 100%;
          animation: spShimmer 1.8s infinite ease-in-out;
          border-radius: 6px;
        }
        .sp-card {
          background: rgba(28, 21, 30, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(218, 208, 220, 0.12);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sp-card:hover {
          transform: translateY(-4px);
          background: rgba(43, 36, 45, 0.85);
          border-color: ${accentColor};
          box-shadow: 0 16px 40px -10px rgba(174, 152, 179, 0.3);
        }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.badge}>
          <span>LIVE CURRICULUM FEED</span>
        </div>
        <h2 style={styles.title}>{sectionTitle}</h2>
        <p style={styles.subtitle}>{sectionSubtitle}</p>

        {/* Polished Location & Currency Capsule */}
        <div style={styles.currencyControlWrapper}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#dad0dc' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399', boxShadow: '0 0 8px #34d399', display: 'inline-block' }} />
            <span>Location:</span>
            <strong style={{ color: '#fafafa', fontFamily: 'sans-serif' }}>
              {detectedLocationName}
            </strong>
          </div>

          <div style={styles.segmentedControl}>
            <button
              onClick={() => setSelectedCurrency('IN')}
              style={{
                ...styles.segmentBtn,
                background: selectedCurrency === 'IN' ? 'linear-gradient(135deg, #ffffff 0%, #dad0dc 50%, #ae98b3 100%)' : 'transparent',
                color: selectedCurrency === 'IN' ? '#0c070d' : '#dad0dc',
                fontWeight: selectedCurrency === 'IN' ? 700 : 500,
              }}
            >
              {selectedCurrency === 'IN' ? '✓ ' : ''}🇮🇳 ₹ INR
            </button>

            <button
              onClick={() => setSelectedCurrency('US')}
              style={{
                ...styles.segmentBtn,
                background: selectedCurrency === 'US' ? 'linear-gradient(135deg, #ffffff 0%, #dad0dc 50%, #ae98b3 100%)' : 'transparent',
                color: selectedCurrency === 'US' ? '#0c070d' : '#dad0dc',
                fontWeight: selectedCurrency === 'US' ? 700 : 500,
              }}
            >
              {selectedCurrency === 'US' ? '✓ ' : ''}🇺🇸 $ USD
            </button>
          </div>
        </div>
      </div>

      {/* Controls Bar: Search, Category Pills, Sort */}
      {!error && (
        <div style={styles.controlsBar}>
          <div style={styles.searchAndSortRow}>
            {showSearchBar && (
              <input
                type="text"
                placeholder="Search courses or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            )}

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                style={styles.select}
              >
                <option value="default">Default Order</option>
                <option value="price-low">Price: Lowest First</option>
                <option value="price-high">Price: Highest First</option>
                <option value="name">Name (A-Z)</option>
              </select>

              <button onClick={handleRetry} disabled={isLoading} style={styles.syncBtn}>
                ↻ Sync
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          {categories.length > 2 && (
            <div style={styles.categoryPills}>
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      ...styles.categoryBtn,
                      background: active ? '#dad0dc' : 'rgba(43, 36, 45, 0.5)',
                      color: active ? '#0c070d' : '#dad0dc',
                      fontWeight: active ? 'bold' : 'normal',
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
        <div style={styles.errorBox}>
          <div style={styles.errorIcon}>⚠️</div>
          <h3 style={{ color: '#fafafa', margin: '0 0 8px 0', fontSize: '20px' }}>
            Data Retrieval Interrupted
          </h3>
          <p style={{ color: '#dad0dc', fontSize: '14px', margin: '0 0 20px 0' }}>{error}</p>
          <button onClick={handleRetry} style={styles.retryBtn}>
            Retry Request {retryAttempts > 0 ? `(${retryAttempts})` : ''}
          </button>
        </div>
      )}

      {/* STATE 2: ENHANCED SKELETON LOADERS */}
      {isLoading && (
        <div className="skillpath-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={styles.skeletonCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div className="sp-skeleton" style={{ width: '85px', height: '22px' }} />
                <div className="sp-skeleton" style={{ width: '80px', height: '22px', borderRadius: '9999px' }} />
              </div>
              <div className="sp-skeleton" style={{ width: '80%', height: '24px', marginBottom: '12px' }} />
              <div className="sp-skeleton" style={{ width: '100%', height: '14px', marginBottom: '6px' }} />
              <div className="sp-skeleton" style={{ width: '65%', height: '14px', marginBottom: '20px' }} />

              <div style={{ borderTop: '1px solid rgba(218, 208, 220, 0.08)', paddingTop: '14px', marginTop: 'auto' }}>
                <div className="sp-skeleton" style={{ width: '160px', height: '18px', marginBottom: '10px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                  <div className="sp-skeleton" style={{ width: '70px', height: '14px' }} />
                  <div className="sp-skeleton" style={{ width: '85px', height: '24px' }} />
                </div>
                <div className="sp-skeleton" style={{ width: '100%', height: '38px', borderRadius: '8px' }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* STATE 3: ZERO RESULTS */}
      {!isLoading && !error && filteredCourses.length === 0 && (
        <div style={styles.emptyBox}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>📂</div>
          <h3 style={{ color: '#fafafa', margin: '0 0 8px 0' }}>No Courses Found</h3>
          <p style={{ color: '#dad0dc', fontSize: '14px', margin: '0 0 16px 0' }}>
            No courses matched your active filter criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSortBy('default');
            }}
            style={styles.switchBtn}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* STATE 4: WORKING COURSE GRID */}
      {!isLoading && !error && filteredCourses.length > 0 && (
        <div className="skillpath-grid">
          {filteredCourses.map((course) => {
            const rawRupees = course.pricePaise / 100;
            const rawDollars = course.priceUsdCents / 100;
            const discountPercent = course.pricePaise > 150000 ? 43 : 35;
            const origRupees = Math.round(rawRupees / (1 - discountPercent / 100));
            const origDollars = (rawDollars / (1 - discountPercent / 100)).toFixed(2);

            return (
              <div key={course.mangoId || course.courseCode} className="sp-card">
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '12px',
                      gap: '6px',
                    }}
                  >
                    {/* Selected Field: Category */}
                    <span style={styles.tag}>{course.mainCategory || 'Course Track'}</span>

                    {/* Bonus Field: Refundable Badge */}
                    {course.refundable && (
                      <span style={styles.refundableBadge}>✓ Refundable</span>
                    )}
                  </div>

                  {/* Course Name */}
                  <h3
                    style={{
                      color: '#fafafa',
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: '0 0 8px 0',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    {course.courseName}
                  </h3>

                  {/* Course Description: Clean 2-line clamp */}
                  <p className="skillpath-card-clamp" style={styles.cardDescription}>
                    {course.description}
                  </p>
                </div>

                {/* Card Footer: Discount Tag & Strikethrough Pricing */}
                <div style={styles.cardFooter}>
                  {/* Requested Discount Tag */}
                  <div style={{ marginBottom: '10px' }}>
                    <span style={styles.discountTag}>
                      ✦ Discounted price after {discountPercent}% discount
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      marginBottom: '12px',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#ae98b3', fontFamily: 'monospace' }}>
                      {course.courseType || 'Certified Track'}
                    </span>

                    <div style={{ textAlign: 'right' }}>
                      <div style={styles.originalPrice}>
                        {selectedCurrency === 'IN'
                          ? `₹${origRupees.toLocaleString('en-IN')}`
                          : `$${origDollars}`}
                      </div>
                      <span
                        style={{
                          fontSize: '20px',
                          fontWeight: 800,
                          color: '#fafafa',
                          letterSpacing: '-0.02em',
                          display: 'block',
                          lineHeight: 1,
                        }}
                      >
                        {selectedCurrency === 'IN'
                          ? `₹${rawRupees.toLocaleString('en-IN')}`
                          : `$${rawDollars.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <button style={styles.enrollBtn}>
                    Start Learning ↗
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Framer Property Controls
addPropertyControls(SkillpathCourses, {
  sectionTitle: {
    type: ControlType.String,
    title: 'Section Title',
    defaultValue: 'Cutting-Edge Skill Paths',
  },
  sectionSubtitle: {
    type: ControlType.String,
    title: 'Subtitle',
    defaultValue:
      'Live curricula streaming directly from the network. Smart regional pricing automatically synced with your location.',
  },
  defaultCurrencyFallback: {
    type: ControlType.Enum,
    title: 'Fallback Currency',
    options: ['IN', 'US'],
    optionTitles: ['INR (₹)', 'USD ($)'],
    defaultValue: 'IN',
  },
  showSearchBar: {
    type: ControlType.Boolean,
    title: 'Show Search Bar',
    defaultValue: true,
  },
  cardColumnsDesktop: {
    type: ControlType.Number,
    title: 'Desktop Columns',
    defaultValue: 3,
    min: 1,
    max: 4,
    step: 1,
  },
  accentColor: {
    type: ControlType.Color,
    title: 'Accent Hover Glow',
    defaultValue: '#ae98b3',
  },
});

// Inline styles for Framer encapsulation
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '48px 24px',
    boxSizing: 'border-box',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#fafafa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badge: {
    background: 'rgba(95, 73, 100, 0.25)',
    border: '1px solid rgba(174, 152, 179, 0.3)',
    color: '#dad0dc',
    padding: '6px 14px',
    borderRadius: '9999px',
    fontSize: '12px',
    letterSpacing: '0.05em',
    marginBottom: '12px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    margin: '0 0 10px 0',
    color: '#fafafa',
  },
  subtitle: {
    fontSize: '16px',
    color: '#dad0dc',
    maxWidth: '640px',
    margin: '0 0 16px 0',
    lineHeight: 1.5,
  },
  currencyControlWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '14px',
    background: 'rgba(28, 21, 30, 0.85)',
    border: '1px solid rgba(218, 208, 220, 0.15)',
    padding: '8px 16px',
    borderRadius: '9999px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4), 0 0 15px rgba(146, 123, 151, 0.15)',
  },
  segmentedControl: {
    display: 'flex',
    background: 'rgba(12, 7, 13, 0.95)',
    padding: '3px',
    borderRadius: '9999px',
    border: '1px solid rgba(218, 208, 220, 0.12)',
  },
  segmentBtn: {
    padding: '6px 16px',
    borderRadius: '9999px',
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  discountTag: {
    display: 'inline-flex',
    background: 'rgba(16, 185, 129, 0.12)',
    border: '1px solid rgba(16, 185, 129, 0.35)',
    color: '#34d399',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: 600,
    fontFamily: 'monospace',
  },
  originalPrice: {
    fontSize: '12px',
    color: '#ae98b3',
    textDecoration: 'line-through',
    fontFamily: 'monospace',
    lineHeight: 1,
    marginBottom: '2px',
  },
  switchBtn: {
    background: 'rgba(95, 73, 100, 0.4)',
    border: '1px solid rgba(174, 152, 179, 0.3)',
    color: '#fafafa',
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  controlsBar: {
    background: 'rgba(28, 21, 30, 0.7)',
    border: '1px solid rgba(218, 208, 220, 0.12)',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '32px',
  },
  searchAndSortRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap',
  },
  searchInput: {
    flex: '1 1 240px',
    background: 'rgba(12, 7, 13, 0.8)',
    border: '1px solid rgba(218, 208, 220, 0.15)',
    borderRadius: '8px',
    padding: '10px 14px',
    color: '#fafafa',
    fontSize: '14px',
    outline: 'none',
  },
  select: {
    background: 'rgba(12, 7, 13, 0.8)',
    border: '1px solid rgba(218, 208, 220, 0.15)',
    borderRadius: '8px',
    padding: '10px 12px',
    color: '#dad0dc',
    fontSize: '13px',
    outline: 'none',
    cursor: 'pointer',
  },
  syncBtn: {
    background: 'rgba(95, 73, 100, 0.4)',
    border: '1px solid rgba(174, 152, 179, 0.3)',
    color: '#fafafa',
    padding: '10px 14px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  categoryPills: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid rgba(218, 208, 220, 0.08)',
  },
  categoryBtn: {
    border: '1px solid rgba(218, 208, 220, 0.15)',
    padding: '5px 12px',
    borderRadius: '9999px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  tag: {
    background: 'rgba(95, 73, 100, 0.3)',
    border: '1px solid rgba(174, 152, 179, 0.25)',
    color: '#dad0dc',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '11px',
    fontFamily: 'monospace',
  },
  refundableBadge: {
    background: 'rgba(16, 185, 129, 0.15)',
    border: '1px solid rgba(16, 185, 129, 0.4)',
    color: '#34d399',
    padding: '3px 8px',
    borderRadius: '9999px',
    fontSize: '11px',
    fontWeight: 600,
  },
  cardDescription: {
    fontSize: '13px',
    color: '#dad0dc',
    marginBottom: '16px',
  },
  cardFooter: {
    borderTop: '1px solid rgba(218, 208, 220, 0.08)',
    paddingTop: '14px',
    marginTop: 'auto',
  },
  enrollBtn: {
    width: '100%',
    padding: '10px',
    background: 'rgba(95, 73, 100, 0.25)',
    border: '1px solid rgba(174, 152, 179, 0.3)',
    borderRadius: '8px',
    color: '#fafafa',
    fontWeight: 600,
    fontSize: '13px',
    cursor: 'pointer',
  },
  errorBox: {
    background: 'rgba(28, 21, 30, 0.9)',
    border: '1px solid rgba(239, 68, 68, 0.4)',
    borderRadius: '18px',
    padding: '36px 20px',
    textAlign: 'center',
    maxWidth: '520px',
    margin: '0 auto',
  },
  errorIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  retryBtn: {
    background: 'linear-gradient(135deg, #fafafa 0%, #dad0dc 100%)',
    color: '#0c070d',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '9999px',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
  },
  skeletonCard: {
    background: 'rgba(28, 21, 30, 0.7)',
    border: '1px solid rgba(218, 208, 220, 0.08)',
    borderRadius: '18px',
    padding: '24px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  emptyBox: {
    background: 'rgba(28, 21, 30, 0.7)',
    border: '1px solid rgba(218, 208, 220, 0.1)',
    borderRadius: '18px',
    padding: '40px 20px',
    textAlign: 'center',
    maxWidth: '480px',
    margin: '0 auto',
  },
};
