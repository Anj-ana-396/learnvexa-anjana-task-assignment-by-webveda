# Skillpath — Submission Note & Candidate Reflection

### 📝 Short Note (< 200 Words)
> **What I'd fix with two more days:**
> I would introduce client-side caching with SWR or React Query to avoid refetching on transient route changes and add an exponential backoff retry interceptor for flaky API bursts. I would also add interactive course preview modals with enrollment checkout simulations.
>
> **Where I got stuck:**
> Handling the decoupled endpoints when `/assignment/country-code` failed (HTTP 500) while `/assignment/course-data` succeeded. Deciding whether to block the whole UI or render with fallback USD/INR was crucial. I implemented `Promise.allSettled` to isolate endpoint lifecycles and added a manual currency switch pill if geo-detection fails.
>
> **What I'm not happy with:**
> The API returns dynamic array sizes (5 to 10 cards). When it returns 5 or 7 items, the last row on a 3-column desktop grid has orphan cards. I added CSS flex-grow alignment to mitigate this, but a CSS subgrid or masonry layout would look even more balanced.

---

### 🤖 AI Usage Disclosure Statement
* **AI Tools Used:** Antigravity / Gemini & Claude.
* **How AI Was Used:**
  1. Generated the initial boilerplate for the parallel `fetch` calls.
  2. I completely restructured the error boundary and decoupling logic using `Promise.allSettled` because standard `Promise.all` rejected both requests whenever either endpoint threw a 404/500 error.
  3. Ensured exact unit conversion (`pricePaise / 100` for INR and `priceUsdCents / 100` for USD).
  4. Engineered the interactive Three.js 3D glowing cube and GSAP animations styled with the custom Mountbatten Pink palette.
* **Explanation Readiness:** Every line of React, TypeScript, Three.js, CSS grid clamping, and Framer property controls is thoroughly understood and can be modified live on the call.
