# 02. Existing URL → New URL Migration Map

## Migration Rationale & Strategy
When migrating from an existing WordPress platform to Next.js App Router, retaining existing link equity, domain authority, and existing rankings on Google Search Console is paramount. Any legacy URL must resolve either to its identical path or to a definitive 301 Permanent Redirect.

---

## 1. 301 Permanent Redirect Matrix

| Legacy WordPress URL | New Next.js App Router URL | HTTP Status | Notes / Canonical Intent |
| :--- | :--- | :--- | :--- |
| `/` | `/` | 200 OK | Direct replacement |
| `/about-us/` | `/about` | 301 Permanent | URL normalization (trim trailing slash & canonicalize) |
| `/about-sheesh-exports/` | `/about` | 301 Permanent | Legacy alias consolidation |
| `/our-products/` | `/products` | 301 Permanent | Canonical product directory hub |
| `/product-category/spices/` | `/categories/spices` | 301 Permanent | Streamlined category taxonomy |
| `/product-category/oil-seeds/` | `/categories/oil-seeds` | 301 Permanent | Streamlined category taxonomy |
| `/product-category/pulses-grains/` | `/categories/pulses` | 301 Permanent | Split into distinct target hubs |
| `/product/red-chilli/` | `/products/red-chilli` | 301 Permanent | Primary commercial product page |
| `/product/turmeric-finger/` | `/products/turmeric` | 301 Permanent | High-volume spice query |
| `/product/cumin-seeds/` | `/products/cumin` | 301 Permanent | Primary commercial product page |
| `/product/coriander-seeds/` | `/products/coriander` | 301 Permanent | Primary commercial product page |
| `/product/sesame-seeds/` | `/products/sesame-seeds` | 301 Permanent | Primary commercial product page |
| `/certifications-awards/` | `/certifications` | 301 Permanent | Streamlined compliance hub |
| `/apeda-spices-board/` | `/certifications/apeda` | 301 Permanent | Deep certification authority page |
| `/quality-assurance/` | `/quality` | 301 Permanent | Laboratory & quality testing hub |
| `/export-procedure/` | `/export-process` | 301 Permanent | Operations and logistics walkthrough |
| `/private-label-packaging/`| `/services/private-label` | 301 Permanent | High-intent B2B packaging service |
| `/mixed-container-service/`| `/services/mixed-container` | 301 Permanent | Consolidation service landing page |
| `/inquiry/` | `/request-quote` | 301 Permanent | Primary RFQ commercial funnel |
| `/rfq/` | `/request-quote` | 301 Permanent | High-intent quote page consolidation |
| `/get-in-touch/` | `/contact` | 301 Permanent | Direct contact channel |
| `/news/` | `/blog` | 301 Permanent | Content hub restructuring |
| `/articles/` | `/blog` | 301 Permanent | Legacy feed consolidation |
| `/tag/*` | `/blog` | 301 Permanent | Eliminate thin WordPress tag archives |
| `/author/*` | `/about` | 301 Permanent | Consolidate author archives to team/about |

---

## 2. Implementation in Next.js

Next.js manages redirects natively via `next.config.ts` or a dedicated redirect configuration in `src/lib/seo/redirects.ts`.

### `next.config.ts` Snippet
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-products", destination: "/products", permanent: true },
      { source: "/product/:slug", destination: "/products/:slug", permanent: true },
      { source: "/product-category/:slug", destination: "/categories/:slug", permanent: true },
      { source: "/inquiry", destination: "/request-quote", permanent: true },
      { source: "/rfq", destination: "/request-quote", permanent: true },
    ];
  },
};

export default nextConfig;
```

---

## 3. Pre-Launch Verification Checklist
1. **Screaming Frog / Site Crawl**: Run full crawl on old WordPress export site to dump 100% of historical URLs.
2. **GSC URL Inspection**: Audit top 50 revenue/traffic pages from Google Search Console and confirm 1:1 mapping in the redirect table.
3. **Trailing Slash Standardization**: Enforce uniform trailing slash handling via Next.js standard routing.
4. **Header Check**: Confirm HTTP 301 (not 302 temporary) response headers on all legacy endpoints.
