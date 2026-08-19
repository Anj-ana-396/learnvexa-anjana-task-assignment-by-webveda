# 🔮 Skillpath — Next-Gen Learning Platform

An ultra-modern, resilient landing page and Framer code component built for **Skillpath**. Designed with live data streaming, resilient error handling for simulated flaky network environments, dynamic automatic geo-location detection with real-time UI adaptation, GSAP scroll triggers, an interactive Three.js 3D hologram cube, and dark glassmorphism tailored with the **Mountbatten Pink** design palette.

---


## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18 & TypeScript** | Component-driven architecture with strict type-safety |
| **Vite 6** | Lightning-fast development server & production bundler |
| **Three.js** | Interactive 3D holographic wireframe and glowing core cube |
| **GSAP (GreenSock) & ScrollTrigger** | Staggered timeline animations and smooth scroll interactions |
| **Lucide Icons** | Crisp, lightweight icons for badges, indicators, and controls |
| **Framer API (`framer`)** | Native Framer property controls (`addPropertyControls`, `ControlType`) |
| **Vanilla CSS & Glassmorphism** | Custom design system using Mountbatten Pink CSS variables |

---

## 🏗 Architecture & System Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       Skillpath App                         │
├─────────────────────────────────────────────────────────────┤
│  1. Navbar            (Sticky Glass Header & Nav)           │
│  2. Hero Section      (Headline, Subline, CTA, 3D Cube)     │
│  3. Courses Section   (Live API Stream, Controls, Grid)     │
│  4. Footer            (3 Links + Copyright Line)            │
└─────────────────────────────────────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
       GET /assignment/course-data    GET /assignment/country-code
       (5 to 10 courses array)        (IN or US geo-locale)
               │                               │
               └───────────────┬───────────────┘
                               ▼
                    Promise.allSettled()
                               │
            ┌──────────────────┴──────────────────┐
            │                                     │
      Course API Success                   Course API Failure
            │                                     │
   ┌────────┴────────┐                            ▼
   ▼                 ▼                     [ ERROR STATE ]
Country OK      Browser Geo             • Diagnostic Error Box
   │                 │                  • "Retry Request" Button
   ▼                 ▼                  • Retry Attempt Counter
[ WORKING STATE ]   [ AUTO-DETECTED ]
• Real-time Grid    • Dynamic UI Sync
• Discount Tags     • Segmented Switcher
```

---

## 🛡 How the Flaky API & Errors Were Tackled

The assignment simulates a real-world unreliable network where **~1 in 3 requests fail with HTTP 404 or 500** across both GET endpoints.

### 1. Isolated Endpoint Settlement (`Promise.allSettled`)
A common pitfall is using `Promise.all()`, which aborts the entire execution if the country code endpoint fails—even when the course list fetched successfully.
* We use `Promise.allSettled([coursePromise, countryPromise])` to decouple failure domains.
* **If Course API Fails (404 / 500)**: Renders a styled Error State with a **Retry** button and attempt tracker.
* **If Country API Fails**: Automatically detects the user's browser location via native timezone and locale (`Intl.DateTimeFormat`) and updates the UI and currency dynamically without showing raw errors.

### 2. Strict HTTP Method (`GET` Only)
The endpoints return HTTP 405 for non-GET verbs. The fetch calls explicitly define `{ method: 'GET' }`.

---

## 💰 Pricing & Discount Presentation

* **Automatic Location Adaptation**: The website automatically detects your region (`📍 India (IN)` or `📍 United States (US)`) and syncs the entire UI and pricing structure accordingly.
* **Discount Tag on All Cards**:
  - Displays a clean, highlighted badge: `✦ Discounted price after X% discount`.
  - Displays original crossed-out price with high-contrast current price.
* **Paise & Cents Handling**:
  - **India (`IN`)**: $\text{Rupees} = \frac{\text{pricePaise}}{100}$ (e.g. `199900` paise $\rightarrow$ `₹1,999` with `~~₹3,499~~`).
  - **US (`US`)**: $\text{Dollars} = \frac{\text{priceUsdCents}}{100}$ (e.g. `3999` cents $\rightarrow$ `$39.99` with `~~$69.99~~`).

---

## 🌟 Key Features & Bonus Requirements

- [x] **Hero Section**: Futuristic headline, subline, "Explore Courses" button, and interactive 3D cube model.
- [x] **Live Course Data**: Consumes `/assignment/course-data` (5–10 items dynamically).
- [x] **Auto-Location Detection**: Automatically identifies region and updates UI.
- [x] **Discount Tags on Cards**: `✦ Discounted price after X% discount` with strikethrough original prices.
- [x] **Strict 2-Line Description Clamp**: Uses `-webkit-line-clamp: 2`.
- [x] **Learner Fields**: Displays `mainCategory` badge and `courseType` track.
- [x] **Refundable Badge**: Rendered **only** when `refundable === true`.
- [x] **Search Box**: Instant real-time search across course title, description, and categories.
- [x] **Sort By Price**: Sort by *Price: Lowest First*, *Price: Highest First*, or *Alphabetical (A-Z)*.
- [x] **Category Filter Pills**: Interactive filter pills extracted from unique categories.
- [x] **Skeleton Shimmer Loaders**: Glass-pulsing placeholders during loading.
- [x] **Retry Button**: Resilient one-click reload on API failure.
- [x] **Responsive Grid**: 3 columns (Desktop), 2 columns (Tablet), 1 column (Mobile).
- [x] **Footer**: 3 links + dynamic copyright line.

---


## 💻 Local Setup & Development

```bash
# 1. Clone or open the repository directory
cd LearnVexa-anjana-task-assignment-by-webveda

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```
