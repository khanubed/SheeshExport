# Sheesh Exports — Design System & UI Specification

Companion documents: `PRD.md`, `Architecture.md`, `FrontendRoutes.md`, `Phase.md`, `Rules.md`.

Covers the visual design system (colors, typography, motion, dark/light mode), the section-by-section UI breakdown of every page, and the reusable component inventory. Route paths and rendering strategy live in `FrontendRoutes.md` and `Architecture.md`.

---

## Design System & Theme

### Visual Direction
A modern, premium, editorial-commercial hybrid look — think "Linear meets an export house." Clean grid, generous whitespace, confident typography, warm accent tied to the spice/agro industry (terracotta / turmeric / saffron tones) balanced against a neutral slate base so it doesn't read as a restaurant site.

### Color Tokens (Tailwind CSS variables, shadcn "New York" style)

Define all colors as **CSS variables on `:root`** and redefine under a `.dark` class (shadcn default approach — Tailwind `darkMode: 'class'`).

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | `#FAF8F5` (warm off-white) | `#0E0D0C` (near-black warm) | Page background |
| `--foreground` | `#1C1917` | `#F5F1EB` | Primary text |
| `--primary` | `#B5451B` (terracotta/paprika) | `#E06A3A` | CTAs, links, brand accent |
| `--primary-foreground` | `#FFFFFF` | `#0E0D0C` | Text on primary buttons |
| `--secondary` | `#D9A441` (turmeric gold) | `#C99A3E` | Secondary accents, badges |
| `--muted` | `#EFEAE3` | `#1C1917` | Card backgrounds, subtle panels |
| `--muted-foreground` | `#6B655D` | `#A69C8E` | Secondary text |
| `--border` | `#E4DED4` | `#2A2622` | Borders, dividers |
| `--card` | `#FFFFFF` | `#161412` | Card surface |
| `--destructive` | `#C1352B` | `#E5534B` | Errors, delete actions |
| `--success` | `#2E7D4F` | `#4CAF74` | Success states, "In Stock" |
| `--ring` | `#B5451B` | `#E06A3A` | Focus rings |

### Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headings | "Fraunces" or "Söhne Breit" (serif/display) | Editorial premium feel for hero + section titles |
| Body / UI | "Inter" or "Geist Sans" | High legibility for dense B2B data (specs tables, forms) |
| Monospace | "Geist Mono" | HS codes, SKUs, order IDs, lab spec values |

Type scale (Tailwind): `text-xs` (12px, meta/labels) → `text-sm` (14px, body-secondary) → `text-base` (16px, body) → `text-lg/xl` (product titles) → `text-3xl/5xl/7xl` (hero/section headers).

### Theme Switching Mechanism
- Implement with `next-themes` package (`class` attribute strategy) — avoids flash of unstyled theme (FOUC) via inline script injection, works cleanly with Next.js App Router + Tailwind `darkMode: 'class'`.
- Theme toggle component: 3-state (Light / Dark / System) using shadcn `DropdownMenu` + `lucide-react` icons (`Sun`, `Moon`, `Laptop`).
- Persist preference in `localStorage` (`next-themes` handles automatically); respect `prefers-color-scheme` on first visit.
- Theme toggle present in: Header (storefront), Admin Topbar (dashboard) — both use the same shared `<ThemeToggle />` component.
- Every custom component must be authored with dark-mode variants (`dark:` Tailwind prefix) or, preferably, entirely via the semantic CSS variable tokens above so no `dark:` prefixing is needed at all (best practice — style against tokens, not literal colors).

### Motion & Micro-interaction Guidelines
- Library: **Framer Motion** (`framer-motion`) for page transitions, hero reveals, staggered card entrances, and the RFQ multi-step form transitions.
- Scroll-triggered reveals: `framer-motion`'s `whileInView` or GSAP + `ScrollTrigger` if more complex pinned/parallax sequences are desired on marketing pages (Homepage, Export Market pages).
- Keep admin dashboard motion minimal/functional (150–200ms ease transitions only) — B2B ops tools should feel fast, not decorative.
- Respect `prefers-reduced-motion` — wrap all decorative animation in a check and fall back to instant/no animation.

### Spacing, Radius, Elevation
- Border radius token: `--radius: 0.75rem` (cards), `0.5rem` (buttons/inputs), `1.25rem` (hero panels/images).
- Shadows: soft, low-opacity, warm-tinted (`shadow-[0_4px_20px_-4px_rgba(28,25,23,0.08)]`) rather than default gray Tailwind shadows — keeps the warm premium tone in both modes (use a lighter/near-transparent shadow in dark mode, rely more on `border` + subtle `bg` elevation there).
- Container: max-width `1440px` desktop, standard Tailwind breakpoints (`sm/md/lg/xl/2xl`), admin dashboard uses a fluid layout with fixed sidebar (`280px` expanded / `72px` collapsed).


---

## Page-by-Page View Breakdown (Section-Level Detail)

This section defines, for every major page, **what sections it contains, top-to-bottom, and what each section renders, plus which library/technique powers it.** Use this as the literal build checklist per page.

### Homepage (`/`)

| # | Section | Contents | Library / Technique |
|---|---|---|---|
| 1 | `AnnouncementBar` | Optional dismissible top strip (e.g. "APEDA Registered · Serving 40+ Countries") | Local component state, `localStorage` dismiss flag |
| 2 | `Header` | Logo, mega-menu nav (Products / Services / Export Markets / About / Blog), search icon, theme toggle, "Request a Quote" primary CTA button, account/login icon | shadcn `NavigationMenu`, `Sheet` (mobile drawer) |
| 3 | `Hero` | Full-bleed hero with rotating product/commodity imagery, headline, sub-headline, dual CTA ("Browse Products" / "Get a Quote"), trust strip (APEDA/FSSAI/ISO logos) | Framer Motion entrance, Next `Image` w/ priority |
| 4 | `TrustStatsBar` | Animated counters: "40+ Countries", "500+ Containers Shipped", "15+ Years", "ISO 22000 Certified" | Framer Motion `useInView` + count-up (`react-countup` or custom hook) |
| 5 | `CategoryGrid` | Visual grid of top-level categories (Spices, Pulses, Grains, Oilseeds) linking to `/categories/[slug]` | RTK Query `useGetCategoriesQuery`, CSS grid |
| 6 | `FeaturedProducts` | Carousel/grid of `featured: true` products with quick RFQ button per card | RTK Query, `embla-carousel-react` |
| 7 | `WhyUs` / `Process Teaser` | 4–6 step icon+text export process teaser linking to `/export-process` | Static content, `lucide-react` icons |
| 8 | `ExportMarketsTeaser` | World-map or flag-grid teaser linking to `/export-markets` | Static/CMS data, optionally `react-simple-maps` |
| 9 | `CertificationsStrip` | Logo strip of certification badges | Static/CMS, marquee optional |
| 10 | `BlogTeaser` | Latest 3 blog posts | RTK Query `useGetLatestPostsQuery` |
| 11 | `CTASection` | Full-width closing CTA banner → `/request-quote` | Static |
| 12 | `Footer` | Sitemap columns, newsletter signup, social, certifications mini-strip, WhatsApp/contact, legal links | shadcn `Input` + `Button`, form via RHF |

### Product Catalog (`/products`)

| # | Section | Contents | Library |
|---|---|---|---|
| 1 | `CatalogHeader` | Title, result count, sort dropdown (Relevance/Newest/Name) | shadcn `Select` |
| 2 | `FilterSidebar` (desktop) / `FilterSheet` (mobile) | Category checkboxes, certification filter, export-market filter, packaging type filter, search-within-catalog input | shadcn `Accordion` + `Checkbox`, URL search-params sync via `nuqs` or native `useSearchParams` |
| 3 | `ActiveFiltersBar` | Removable filter chips | shadcn `Badge` |
| 4 | `ProductGrid` | Responsive grid of `ProductCard` (image, name, short desc, cert icons, MOQ, "View Details" + "Quick RFQ") | RTK Query `useGetProductsQuery` (paginated, filter params), `react-window`/virtualization optional for very large catalogs |
| 5 | `Pagination` | Numbered pagination or "Load more" | shadcn-style custom pagination component |
| 6 | `EmptyState` | No results illustration + reset filters CTA | Static |

### Product Detail Page — PDP (`/products/[slug]`)

| # | Section | Contents | Library |
|---|---|---|---|
| 1 | `Breadcrumbs` | Home / Category / Product, + `BreadcrumbList` JSON-LD | shadcn `Breadcrumb` |
| 2 | `ProductGallery` | Main image + thumbnail strip, zoom on hover | `react-zoom-pan-pinch` or custom, `embla-carousel-react` for thumbnails |
| 3 | `ProductSummary` | Name, botanical name, short description, cert badges, "Origin: Guntur, AP", Add-to-RFQ + Add-to-Cart (if direct-sale enabled) buttons | RTK Query mutation trigger for RFQ drawer |
| 4 | `SpecsTable` | Specification key/value table (Moisture, ASTA Color, SHU, Purity…) | Native `<table>` styled via Tailwind, sourced from `product.specifications` |
| 5 | `GradesTabs` | Tabs for each grade (Stemless / With Stem / Crushed / Powder) with description | shadcn `Tabs` |
| 6 | `PackagingOptions` | Packaging type + size chips | shadcn `Badge`/`ToggleGroup` |
| 7 | `MOQShippingInfo` | MOQ, shelf life, available markets (flags), lead time | Static + data-driven |
| 8 | `ApplicationsList` | Bullet list of applications/use-cases | Static |
| 9 | `FAQAccordion` | Product FAQs + `FAQPage` JSON-LD | shadcn `Accordion` |
| 10 | `RFQStickyPanel` | Sticky "Request Quote for this product" panel (desktop side / mobile bottom-sheet) | shadcn `Sheet`/`Drawer`, RHF form |
| 11 | `RelatedProducts` | Same-category carousel | RTK Query |
| 12 | `RelatedGuides` | Related blog posts referencing this product | RTK Query |

### Export Market Detail (`/export-markets/[slug]`)

Hero (country flag/hero image, headline) → `OverviewSection` → `ImportRequirementsChecklist` → `TopExportedProductsGrid` (links to PDPs) → `PortsAndLogisticsTable` (major ports, transit time) → `ComplianceCertsStrip` → CTA to `/request-quote?market=slug`.

### Request Quote (`/request-quote`)

Multi-step form (see the RFQ Form spec in PRD.md for full field spec) rendered as a **stepper**: Step 1 Product & Quantity → Step 2 Packaging & Incoterm → Step 3 Destination & Timeline → Step 4 Company & Contact Details → Review → Submit. Framer Motion step transitions, progress bar at top, ability to jump back to prior steps.

### Cart & Checkout (`/cart`, `/checkout`)

`/cart`: line items (product, grade, packaging, qty, unit price, subtotal), quantity steppers, remove, promo code input, order summary panel, "Proceed to Checkout" (requires login → redirect back).

`/checkout`: 3-step — **Shipping/Billing Address** (select saved or add new) → **Review Order** (line items + incoterm/shipping method + totals) → **Payment** (Razorpay Checkout modal invoked here, see Backend Architecture in Architecture.md). On success → `/checkout/success` with order number + downloadable invoice.

### Admin Dashboard Home (`/admin`)

| # | Section | Contents | Library |
|---|---|---|---|
| 1 | `KPIStatCards` | New RFQs (7d), Revenue (30d), Active Orders, Conversion Rate | Recharts `Card` grid, RTK Query |
| 2 | `RevenueChart` | Line/area chart, date-range picker | `recharts`, shadcn `DatePickerWithRange` |
| 3 | `RFQPipelineFunnel` | Funnel: New → Quoted → Negotiating → Won/Lost | `recharts` (Funnel or custom bar) |
| 4 | `RecentRFQsTable` | Latest 5 RFQs with quick-view | `@tanstack/react-table` |
| 5 | `RecentOrdersTable` | Latest 5 orders | `@tanstack/react-table` |
| 6 | `TopProductsWidget` | Most-requested products this month | RTK Query aggregate endpoint |
| 7 | `ActivityFeed` | Recent staff actions (audit trail teaser) | Static list, `date-fns` relative time |

### Admin — RFQ / Lead Inbox (`/admin/rfqs`)

Two view modes toggle: **Table View** (`@tanstack/react-table` — sortable/filterable columns: Buyer, Company, Product, Qty, Destination, Status, Assigned To, Created) and **Kanban View** (columns = status stages: New / Reviewing / Quoted / Negotiating / Won / Lost; drag-and-drop via `@dnd-kit/core`). Filters: status, date range, assigned agent, market/country. Bulk actions: assign, export CSV.

### Admin — RFQ Detail (`/admin/rfqs/[id]`)

Left: **Lead Info Panel** (buyer/company/contact, all submitted RFQ fields, status dropdown, assign-to selector). Right/Center: **Thread/Notes** (internal notes + buyer-visible messages, tabbed) + **Quote Builder** (line items with unit price entry, terms, "Generate Quote PDF" and "Send to Buyer" which updates buyer's `/account/rfqs/[id]` and emails them + marks status `Quoted`).

### Admin — Product Editor (`/admin/products/new`, `/admin/products/[id]/edit`)

Tabbed form: **General** (name, slug auto-gen w/ manual override, botanical name, HS code, category, short/long description — rich text) → **Media** (drag-drop multi-image upload w/ reordering, alt text per image) → **Specifications** (repeatable key/value rows) → **Grades** (repeatable name+description) → **Packaging** (repeatable type + size-tags) → **Commercial** (MOQ, shelf life, applications tags) → **Markets & Certifications** (multi-select from existing) → **FAQs** (repeatable Q&A) → **SEO** (meta title/desc, canonical, OG image upload, live SERP preview widget) → **Status** (draft/published/archived) with autosave + "Preview on site" button.


---

### Reusable Component Inventory

| Component | Where Used | Key Props |
|---|---|---|
| `<ProductCard />` | Catalog grid, homepage featured, related products, admin quick preview | `product`, `variant: 'default' \| 'compact' \| 'admin'` |
| `<SpecsTable />` | PDP, admin product preview | `specifications[]` |
| `<StatusBadge />` | RFQ status, order status, product status (draft/published) everywhere in admin | `status`, `type: 'rfq' \| 'order' \| 'product'` |
| `<DataTable />` (wraps `@tanstack/react-table`) | Every admin list page | `columns`, `data`, `filters`, `pagination` |
| `<KanbanBoard />` | RFQ pipeline | `columns`, `items`, `onDragEnd` |
| `<Stepper />` | RFQ form, Checkout | `steps[]`, `currentStep` |
| `<FormField />` wrapper | Every form (wraps RHF Controller + shadcn Label/Input/error) | `name`, `label`, `control` |
| `<RichTextEditor />` | Blog editor, product long description | `value`, `onChange` |
| `<ImageUploader />` | Product media, blog featured image, cert badge upload | `multiple`, `maxFiles`, `onUpload` |
| `<ConfirmDialog />` | Delete confirmations across admin | `onConfirm`, `title`, `description` |
| `<EmptyState />` | Empty catalog/search/table results | `icon`, `title`, `action` |
| `<Pagination />` | Catalog, blog, admin tables | `page`, `totalPages`, `onChange` |
| `<Breadcrumbs />` | All deep public pages | `items[]` |
| `<ThemeToggle />` | Header, Admin Topbar | none |
| `<PriceSummary />` | Cart, Checkout, Admin Order Detail | `items`, `taxes`, `shipping` |
| `<SEOPreviewCard />` | Admin product/blog SEO tab | `title`, `description`, `url` |
| `<CertBadgeStrip />` | Footer, PDP, Homepage | `certifications[]` |
| `<CountryFlag />` | Export markets, RFQ destination field | `countryCode` |


---

### Accessibility Baseline
All interactive shadcn/Radix primitives are accessible by default — do not strip their ARIA behavior when customizing styles. Every image has meaningful `alt`. Color contrast checked against **both** theme token sets (the Color Tokens in Design.md) — the terracotta-on-cream and gold-on-near-black combinations must be verified at AA contrast for text use, restricted to large-text/decorative use if they fail at body-text size.

