# Sheesh Exports — Development Phases, Timeline & QA

Companion documents: `PRD.md`, `Architecture.md`, `FrontendRoutes.md`, `Design.md`, `Rules.md`.

---

## Development Phases & Timeline

Assumes a small team (1–2 frontend, 1 backend, 1 designer/part-time, working iteratively) — adjust durations to actual team size, but **keep the phase order**, since later phases depend on earlier foundations.

| Phase | Scope | Suggested Duration |
|---|---|---|
| **0. Discovery & Design** | Finalize IA (already largely done, FrontendRoutes.md), design system tokens (Design.md), high-fidelity mockups for Homepage/PDP/Catalog/Admin Dashboard (light+dark), content model sign-off (the Database Structure in Architecture.md) | 1.5–2 weeks |
| **1. Foundation** | Repo setup (both repos), CI/CD pipelines, Tailwind+shadcn theme config w/ dark mode, Prisma schema + migrations, Express skeleton with auth module, Redux store + baseApi scaffold, design tokens implemented as a working Storybook or component playground | 1.5 weeks |
| **2. Core Catalog & Content** | Categories/Products/Certifications/Export Markets CRUD (backend + admin UI) → public Catalog, PDP, Category, Market, Certification, Services pages built against real API, SEO metadata/JSON-LD wired | 2.5–3 weeks |
| **3. RFQ Engine** | RFQ multi-step form, RFQ backend module, Admin RFQ inbox (table+kanban), Quote builder + PDF generation, buyer-side RFQ tracking portal | 2 weeks |
| **4. Commerce & Payments** | Cart/Checkout flows, Orders module, Razorpay integration (order/verify/webhook), Invoices, Order tracking (buyer + admin) | 2 weeks |
| **5. Blog, Marketing Pages & Homepage Polish** | Blog CMS + public blog, homepage animation/motion pass, marketing page content, final SEO pass (sitemap, structured data audit) | 1.5 weeks |
| **6. Admin Depth & Ops** | Customers 360, Analytics dashboard, Users/Roles management, Audit log, Settings (site/SEO/shipping) | 1.5–2 weeks |
| **7. QA, Accessibility, Performance** | Cross-browser + dark/light QA, Core Web Vitals pass, a11y audit (axe), Playwright E2E for RFQ/checkout critical paths, load testing on catalog/search endpoints | 1.5 weeks |
| **8. Launch Prep & Go-Live** | Content population (real product data, images, certifications), production environment hardening, DNS/SSL, GSC/Bing submission, staged rollout | 1 week |
| **9. Post-Launch Iteration** | Monitor analytics/CWV, backlog grooming from real usage, ongoing content (blog cadence per the Content & Off-Page Strategy section in Architecture.md) | Ongoing |

**Total to launch:** roughly **13–16 weeks** at this scope with a small team; compress by parallelizing Phase 2 (frontend) against Phase 1's backend tail, and Phase 6 admin-depth work against Phase 4/5 if team size allows a frontend/backend split working concurrently.

---

## Testing, QA & Deployment

### Testing Strategy
| Layer | Tooling | Coverage Target |
|---|---|---|
| Unit (frontend components/hooks, backend services/utils) | Vitest / Jest | Business-logic-heavy units (pricing calc, RFQ status transitions, form validators) |
| Integration (API routes) | Supertest + a test PostgreSQL DB (Dockerized) | Every mutating endpoint, especially payments/RFQ/orders |
| E2E | Playwright | Critical paths: RFQ submission, admin quote-to-order, full checkout w/ Razorpay test mode, theme toggle persistence, admin CRUD happy paths |
| Accessibility | `axe-core` via Playwright, manual keyboard-nav pass | WCAG 2.1 AA on all public pages |
| Visual regression (optional) | Chromatic/Percy against Storybook | Core reusable components (the Component Inventory in Design.md) across both themes |

### Environments
`local` (Docker Compose: Postgres + Redis) → `preview` (per-PR, ephemeral) → `staging` (mirrors prod, seeded with anonymized realistic data) → `production`.

### CI/CD Pipeline (GitHub Actions, mirrors the Deployment Mapping in Rules.md)
`lint` → `typecheck` → `test` → `build` (frontend + backend as separate jobs, can run in parallel) → on `develop` merge: deploy to staging + run Prisma migrations against staging DB → on `main` merge/tag: manual-approval gate → deploy backend → run production migrations (`prisma migrate deploy`, never `migrate dev` in prod) → deploy frontend → smoke test (health-check endpoints + a scripted homepage/PDP fetch).

### Monitoring & Observability Post-Launch
Error tracking: Sentry (frontend + backend). Uptime: health-check endpoint (`/api/v1/health`) pinged by an uptime monitor. Logs: structured `pino` logs shipped to the hosting platform's log drain. Performance: Vercel Analytics/`web-vitals` (frontend), APM on the Express service (e.g., basic `pino-http` timing logs at minimum, or a dedicated APM if scale warrants).

---

