# Skillpath Technical Deep-Dive & 20-Minute Call Cheat Sheet

This guide prepares you for the live 20-minute screen-share interview where the interviewer will point at random lines or ask you to make live edits.

---

## 🎯 1. Key Logic & Architectural Choices

### A. Currency Math & Unit Conversion
* **Problem**:
  * `pricePaise` is in Indian Paise ($1 \text{ Rupee} = 100 \text{ Paise}$). E.g., `199900` paise = `₹1,999`.
  * `priceUsdCents` is in US Cents ($1 \text{ USD} = 100 \text{ Cents}$). E.g., `3999` cents = `$39.99`.
* **Code Implementation**:
  ```typescript
  if (countryCode === 'IN') {
    const rupees = course.pricePaise / 100;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: rupees % 1 === 0 ? 0 : 2,
    }).format(rupees);
  } else {
    const dollars = course.priceUsdCents / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(dollars);
  }
  ```

---

### B. Flaky API & Endpoint Decoupling (`Promise.allSettled`)
* **Problem**: The API fails $\sim 1$ in 3 requests intentionally with 404 or 500. If we used standard `Promise.all()`, a failure in the country code endpoint would crash the entire course catalog even if courses loaded fine!
* **Solution**:
  * We use `Promise.allSettled([coursePromise, countryPromise])`.
  * If `coursePromise` fails $\rightarrow$ Show full Error State with **Retry Button**.
  * If `countryPromise` fails but `coursePromise` succeeds $\rightarrow$ Render courses with a fallback currency (`USD` or `INR`) and display a subtle badge + currency toggle without breaking the user experience.

---

### C. The 4 UI States Handled
1. **Loading State**: Animated Skeleton cards (`<SkeletonCard />` / `.sp-skeleton`) with shimmer effect.
2. **Error State**: Glassmorphic error container with specific error message, attempt counter, and **"Retry Request"** button.
3. **Zero Results State**: Rendered when search query or category filters return 0 matching items with a **"Reset Filters"** button.
4. **Working State**: Responsive 3-col (desktop) $\rightarrow$ 2-col (tablet) $\rightarrow$ 1-col (mobile) grid.

---

### D. Fields Displayed on Each Card
1. **Course Name**: Bold, responsive heading.
2. **Description**: Strictly clamped to two lines (`line-clamp-2` / `-webkit-line-clamp: 2`).
3. **Price**: Localized currency based on `IN` vs `US`.
4. **Selected Learner Fields**:
   - `mainCategory` tag (e.g. "Content Creation")
   - `courseType` (e.g. "Original", "Certified Track")
5. **Refundable Badge**: Rendered **only** when `course.refundable === true`.

---

## 🛠️ 2. Anticipated Live Code Requests & Quick Answers

### Q1: "Add another field from the data to the card (e.g. `shortCourse` or `mangoId`)."
* **How to do it in 30 seconds**:
  Open `src/components/CourseCard.tsx` (or `SkillpathCourses.tsx`). In the card JSX, add:
  ```tsx
  <span style={{ fontSize: '11px', color: '#ae98b3', fontFamily: 'monospace' }}>
    ID: {course.mangoId.slice(0, 8)}...
  </span>
  ```
  or
  ```tsx
  <span className="badge-tag">{course.shortCourse}</span>
  ```

### Q2: "Change or add a Framer Property Control."
* **How to do it**:
  In `SkillpathCourses.tsx`, add an entry to `addPropertyControls`:
  ```tsx
  addPropertyControls(SkillpathCourses, {
    cardTheme: {
      type: ControlType.Enum,
      title: 'Card Theme',
      options: ['dark', 'glass'],
      defaultValue: 'glass',
    },
    // ...
  });
  ```

### Q3: "Why did you use `line-clamp-2` instead of JavaScript substring cutting?"
* **Answer**:
  * CSS `-webkit-line-clamp: 2` accurately computes font rendering, line wraps, and responsiveness across all screen widths, adding clean native ellipsis (`...`) without chopping words in half or causing visual layout shifts.

### Q4: "Why use `GET` only?"
* **Answer**:
  * The backend returns HTTP 405 (Method Not Allowed) for POST/PUT/DELETE. We explicitly pass `{ method: 'GET' }` to ensure zero redundant headers or disallowed HTTP verbs are dispatched.

---

## 🎨 3. Mountbatten Pink Palette Reference
```css
--color-mountbatten-pink-50: #fafafa;
--color-mountbatten-pink-100: #f5f3f6;
--color-mountbatten-pink-200: #e8e1ea;
--color-mountbatten-pink-300: #dad0dc;
--color-mountbatten-pink-400: #ae98b3;
--color-mountbatten-pink-500: #927b97;
--color-mountbatten-pink-600: #5f4964;
--color-mountbatten-pink-700: #49384d;
--color-mountbatten-pink-800: #2b242d;
--color-mountbatten-pink-900: #1c151e;
--color-mountbatten-pink-950: #0c070d;
```
