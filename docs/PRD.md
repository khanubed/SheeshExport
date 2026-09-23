# Sheesh Exports — Product Requirements Document (PRD)

Companion documents: `Architecture.md` (technical implementation), `FrontendRoutes.md` (full sitemap), `Design.md` (theme, UI, components), `Phase.md` (timeline), `Rules.md` (workflow & standards).

---

## Executive Summary & Product Vision

Sheesh Exports is a **B2B-first, SEO-driven export platform** for Indian spices, agro-commodities, grains, oil seeds, and allied food products. Unlike a B2C storefront, the commercial unit is not "cart checkout" but **Request For Quote (RFQ)** — although the platform will also support **direct paid sample orders and small-batch B2B purchases via Razorpay**, so the architecture supports both:

1. **Lead-generation commerce** — buyer browses product, requests a quote, admin negotiates offline/via dashboard, quote converted to invoice.
2. **Direct commerce** — buyer purchases samples / smaller MOQ-compliant quantities directly online, paying via Razorpay.

The platform must simultaneously:

- Rank on Google for high-intent commercial B2B search terms (see the SEO Guide in Architecture.md SEO Guide).
- Present trust signals (certifications, lab reports, export process) prominently — B2B buyers vet suppliers hard before contacting them.
- Give the internal team (admin/staff) a dashboard to manage the entire lifecycle: catalog → leads → quotes → orders → shipments → content.
- Support **dark and light mode** across every screen, storefront and admin alike.

---

## Confirmed Technology Stack (at a glance)

| Layer | Technology |
|---|---|
| Frontend Framework | Next.js (App Router) + React |
| Styling / UI Kit | Tailwind CSS + shadcn/ui |
| State Management | Redux Toolkit (RTK) |
| Server-State / Data Fetching | RTK Query |
| Backend Framework | Node.js + Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Payment Gateway | Razorpay |
| Authentication | JWT (access + refresh) + httpOnly cookies |
| Hosting (suggested) | Vercel (frontend) + Railway/Render/AWS (backend + DB) |

Full rationale and detailed architecture live in `Architecture.md`.

---

## Target Users & Roles

| Role | Description |
|---|---|
| `guest` | Anonymous visitor — can browse and submit an RFQ |
| `buyer` | Registered B2B buyer — full account portal access to their own data |
| `sales_agent` | Staff — manages RFQs, Orders, Customers |
| `catalog_manager` | Staff — manages Products, Categories, Certifications, Export Markets, Media |
| `content_editor` | Staff — manages Blog and Services content, Media |
| `finance` | Staff — manages Payments, Invoices, read-only Orders |
| `ops` | Staff — manages order fulfillment/shipment status |
| `super_admin` | Full access, including Users & Settings |

Full permission matrix and route-protection strategy live in `Architecture.md`.

---

## Core Product Requirements

1. **SEO-first public storefront** — every commercial and informational page must be crawlable and rank-optimized (see the SEO Guide in `Architecture.md`).
2. **Trust-first catalog** — every product must surface certifications, lab specs, MOQ, packaging, and applications, since B2B buyers vet suppliers before ever contacting them.
3. **Dual commercial model** — the platform must support both:
   - **Lead-generation commerce**: buyer submits an RFQ → admin negotiates and issues a quote → buyer accepts → order created.
   - **Direct commerce**: buyer adds a sample/small-batch-eligible product to cart and pays immediately via Razorpay.
4. **Full admin operations dashboard** — catalog, leads/RFQs, orders, customers, payments, invoices, content, and settings must all be manageable without engineering involvement.
5. **Dark and light mode** — required across every screen, storefront and admin alike, with no flash-of-unstyled-theme on load.

---

## Forms Structure (Every Form, Field-by-Field)

**Standard for all forms:** `react-hook-form` + `zod` resolver, shared `zod` schema between client validation and Express backend validation (schema lives in a shared `validators/` package or duplicated intentionally with identical rules if frontend/backend are separate repos). All forms use `<FormField />` wrapper for consistent label/error/help-text layout, and show inline validation on blur + on submit.

### Contact Form (`/contact`)
| Field | Type | Validation |
|---|---|---|
| Full Name | text | required, min 2 |
| Business Email | email | required, valid email |
| Phone (with country code) | tel | required |
| Subject | select (General / Partnership / Media / Support) | required |
| Message | textarea | required, min 10 / max 1000 |

### Request For Quote — RFQ Form (`/request-quote`, also PDP drawer)
**Step 1 — Product & Quantity** (repeatable line items if entered via standalone page; single-locked product if triggered from PDP): Product (select/autocomplete, prefilled from PDP), Grade (select, from product's grades), Quantity (number), Unit (select: MT / KG / Containers FCL).
**Step 2 — Packaging & Terms:** Packaging Type (select from product's packaging options), Packaging Size (select), Incoterm (select: FOB / CIF / CFR / EXW).
**Step 3 — Destination & Timeline:** Destination Country (searchable select w/ flag), Destination Port, Target Delivery Date (date picker, optional).
**Step 4 — Company & Contact:** Full Name*, Company Name*, Business Email*, Phone*, Country*, Additional Message (textarea, optional).
**Review step:** read-only summary of all steps with "Edit" links back, Submit button. All required fields validated per-step (cannot advance with errors); full `zod` schema validated again on final submit.

### Business Registration (`/register`)
Company Name*, Business Email*, Phone*, Country*, Password* (min 8, 1 upper, 1 number, 1 special — strength meter shown), Confirm Password* (must match), IEC Code (optional at signup, required later for direct orders), Terms & Privacy checkbox* (must be checked).

### Login (`/login`, `/admin/login`)
Email*, Password*, "Remember me" checkbox, "Forgot password?" link. Admin login additionally rate-limited (5 attempts / 15 min) and does not offer self-registration.

### Checkout — Address Step
Address Line 1*, Address Line 2, City*, State/Province*, Postal Code*, Country*, "Save as default" checkbox, toggle "Billing same as shipping."

### Admin — Product Form
As detailed in the Product Editor spec in Design.md (General / Media / Specifications / Grades / Packaging / Commercial / Markets & Certifications / FAQs / SEO tabs) — every repeatable section (Specifications, Grades, Packaging, FAQs) uses RHF's `useFieldArray` for add/remove/reorder rows.

### Admin — Quote Builder (inside RFQ Detail)
Repeatable line items: Product* (locked from RFQ), Unit Price*, Quantity* (prefilled, editable), Line Total (computed), Validity Date*, Payment Terms (select), Additional Terms (textarea). "Generate PDF" + "Send to Buyer" actions.

### Newsletter Signup (Footer)
Email* only — minimal friction, `zod` email validation, success toast, double opt-in email triggered server-side.

## End-to-End UX Flows

### Buyer Journey — Discovery to Quote
`Organic search / referral` → lands on `/blog/[slug]` or `/categories/[slug]` → clicks into `/products/[slug]` → reviews specs/certifications/FAQs → clicks "Request Quote" (opens `RFQStickyPanel` drawer, prefilled with product) → completes 4-step RFQ form → submits (guest allowed; if not logged in, an account is auto-created and a "set your password" email sent, OR they complete as guest and can claim the RFQ later by registering with the same email) → lands on confirmation screen with RFQ reference number → receives confirmation email → tracks status at `/account/rfqs/[id]` once account exists.

### Admin Journey — Lead to Cash
New RFQ lands in `/admin/rfqs` (status `NEW`, visible in both table and kanban) → sales agent opens detail, reviews, moves to `REVIEWING`, adds internal notes → builds a `Quote` (line items + pricing + terms) → sends → status auto-updates to `QUOTED`, buyer notified by email + sees it in their portal → buyer reviews the quote PDF in `/account/rfqs/[id]`, clicks "Accept Quote" → backend creates an `Order` linked to the `sourceRfqId`, status `PENDING_PAYMENT` → buyer redirected/prompted to `/checkout` to pay via Razorpay (for direct-payable orders) **or**, for large FCL/LCL export deals settled via traditional trade finance (LC/TT outside the platform), admin manually marks the order `PROCESSING` after offline payment confirmation, with a note logged in `AuditLog` → `ops` role updates shipment status through `PROCESSING → SHIPPED → DELIVERED`, each transition optionally emailing the buyer → `finance` reconciles in `/admin/payments` and `/admin/invoices`.

### Direct Sample/Small-Batch Purchase Journey
`/products/[slug]` → "Add to Cart" (for products flagged sample-eligible) → `/cart` → login/register if guest → `/checkout` (address → review → Razorpay) → `/checkout/success` → order tracked at `/account/orders/[id]`.

### Theme Toggle Flow
User clicks `<ThemeToggle />` in header → `next-themes` updates the `class` on `<html>` instantly (no flash, pre-hydration inline script already set the correct class from `localStorage`/`prefers-color-scheme`) → all components re-render against the same CSS variable tokens (the Color Tokens in Design.md) with zero component-level conditional logic needed.

---

---

## Open Product Decisions (Confirm Before Building)

- Whether trade-finance/offline-settled large export orders (LC/TT) need a dedicated "Trade Finance Orders" admin view beyond the manual status-override flow described above — flag if deal volume warrants it.
- Multi-currency support beyond INR/USD display — v1 assumes Razorpay settles in INR with USD shown as an informational conversion on quotes.

Technical/infrastructure open decisions (hosting provider, object storage) are tracked in `Architecture.md`.
