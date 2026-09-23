# Sheesh Exports — Frontend Routes & Sitemap

Companion documents: `PRD.md`, `Architecture.md`, `Design.md`, `Phase.md`, `Rules.md`.

Complete route inventory across the public storefront, authenticated buyer portal, and admin dashboard. UI section-by-section breakdown for each page lives in `Design.md`; folder structure and rendering technique details live in `Architecture.md`.

---

## Complete Sitemap, Routing & Information Architecture

### Route Philosophy
Next.js **App Router** with route groups to separate the public storefront, authenticated buyer account area, and the admin dashboard into distinct layouts while sharing the same codebase and design tokens.

```
app/
  (storefront)/           -> public storefront, uses PublicLayout
  (account)/              -> buyer portal, uses AccountLayout
  (admin)/                -> internal staff dashboard, AdminLayout
  api/                    -> route handlers ONLY (webhooks, ISR
                               revalidation); real logic lives in the
                               separate Express backend.
```

### Full Route Table — Storefront (Public)

| Route | Page | Rendering | Auth | Notes |
|---|---|---|---|---|
| `/` | Homepage | SSG + ISR (revalidate 1h) | Public | Hero, categories, featured products, trust bar, markets, blog teaser |
| `/about` | About / Company | SSG | Public | History, infra, leadership |
| `/quality` | Quality & Testing | SSG | Public | Labs, QA parameters |
| `/certifications` | Certifications Hub | SSG | Public | Grid of cert badges |
| `/certifications/[slug]` | Certification Detail | SSG (generateStaticParams) | Public | Per-cert deep page |
| `/export-process` | Export Process | SSG | Public | Step timeline |
| `/products` | Product Catalog | SSR/ISR + client filters | Public | Filter/sort/search, faceted nav |
| `/products/[slug]` | Product Detail (PDP) | SSG + ISR (revalidate 30m) | Public | Full spec, RFQ trigger, related |
| `/products/category/[slug]` | Product Sub-Catalog | SSR/ISR | Public | Filtered listing |
| `/categories/[slug]` | Category Landing | SSG | Public | SEO pillar page |
| `/services` | Services Hub | SSG | Public | |
| `/services/[slug]` | Service Landing (private-label / bulk-export / mixed-container) | SSG | Public | dynamic on 3 known slugs |
| `/export-markets` | Markets Hub | SSG | Public | World map / grid of countries |
| `/export-markets/[slug]` | Market Detail | SSG | Public | Country-specific compliance/logistics |
| `/blog` | Blog Index | ISR | Public | Paginated, category filter |
| `/blog/[slug]` | Blog Article | SSG + ISR | Public | MDX/Rich text render |
| `/blog/category/[slug]` | Blog Category Archive | ISR | Public | |
| `/request-quote` | RFQ Form (standalone entry) | CSR (client form) | Public (optional login) | Also embedded as modal/drawer from PDP |
| `/cart` | Cart (for direct/sample orders) | CSR | Public → forces login at checkout | Razorpay-eligible items only |
| `/checkout` | Checkout | CSR | Required (buyer account) | Address → Shipping → Razorpay |
| `/checkout/success` | Order Confirmation | CSR | Required | |
| `/contact` | Contact | SSG | Public | Form + map + WhatsApp CTA |
| `/search` | Global Search Results | SSR | Public | Products + blog + markets |
| `/privacy-policy` | Legal | SSG | Public | |
| `/terms` | Legal | SSG | Public | |
| `/sitemap.xml` | XML sitemap (generated) | Next.js `sitemap.ts` | Public | See the SEO Guide in Architecture.md |
| `/robots.txt` | Robots | Next.js `robots.ts` | Public | |
| `/404` `/500` | Error pages | SSG | Public | Branded, with search + nav back |

### Full Route Table — Buyer Account Portal (Authenticated)

| Route | Page | Purpose |
|---|---|---|
| `/login` | Login | Email/password + OTP option |
| `/register` | Register (Business signup) | Captures company details |
| `/forgot-password` / `/reset-password` | Password recovery | Token-based |
| `/account` | Account Dashboard | Overview: recent RFQs, orders, saved products |
| `/account/rfqs` | My RFQs | List + status tracker |
| `/account/rfqs/[id]` | RFQ Detail / Thread | Chat-like thread with admin, quote acceptance |
| `/account/orders` | My Orders | List of paid direct orders |
| `/account/orders/[id]` | Order Detail | Status, invoice download, tracking |
| `/account/saved-products` | Wishlist / Saved | Bookmarked products |
| `/account/addresses` | Address Book | Shipping/billing addresses |
| `/account/company-profile` | Company Profile | Business docs, IEC code, GST/VAT, etc. |
| `/account/settings` | Account Settings | Password, notifications, theme |

### Full Route Table — Admin Dashboard (Internal Staff, Role-Gated)

| Route | Page | Roles |
|---|---|---|
| `/admin/login` | Admin Login | staff |
| `/admin` | Dashboard Home (KPIs) | all staff |
| `/admin/products` | Product List | catalog_manager, super_admin |
| `/admin/products/new` | Create Product | catalog_manager, super_admin |
| `/admin/products/[id]/edit` | Edit Product | catalog_manager, super_admin |
| `/admin/categories` | Category Manager | catalog_manager, super_admin |
| `/admin/certifications` | Certifications Manager | catalog_manager, super_admin |
| `/admin/export-markets` | Export Markets Manager | catalog_manager, super_admin |
| `/admin/services` | Services Content Manager | content_editor, super_admin |
| `/admin/blog` | Blog Post List | content_editor, super_admin |
| `/admin/blog/new` / `/admin/blog/[id]/edit` | Blog Editor (rich text) | content_editor, super_admin |
| `/admin/rfqs` | RFQ / Lead Inbox (kanban + table view) | sales_agent, super_admin |
| `/admin/rfqs/[id]` | RFQ Detail — quote builder, thread, status | sales_agent, super_admin |
| `/admin/orders` | Orders List | sales_agent, ops, super_admin |
| `/admin/orders/[id]` | Order Detail — payment status, shipment, invoice | sales_agent, ops, super_admin |
| `/admin/customers` | B2B Customer / Company directory | sales_agent, super_admin |
| `/admin/customers/[id]` | Customer 360 view | sales_agent, super_admin |
| `/admin/payments` | Payments / Razorpay transaction log | finance, super_admin |
| `/admin/invoices` | Invoice generator/list | finance, super_admin |
| `/admin/media` | Media Library | content_editor, catalog_manager, super_admin |
| `/admin/users` | Staff/User & Role Management | super_admin |
| `/admin/settings` | Site settings (SEO defaults, homepage config, shipping rules, payment keys) | super_admin |
| `/admin/settings/seo` | Global SEO defaults, redirects manager | super_admin |
| `/admin/analytics` | Traffic + conversion analytics embed | super_admin, sales_agent |
| `/admin/activity-log` | Audit trail | super_admin |


---

