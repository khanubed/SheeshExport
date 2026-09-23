# Sheesh Exports — Architecture Document

Companion documents: `PRD.md` (product requirements), `FrontendRoutes.md` (full sitemap), `Design.md` (theme, UI, components), `Phase.md` (timeline), `Rules.md` (workflow & standards).

This document is the technical single source of truth: tech stack rationale, frontend/backend architecture, state management, API structure, database schema, payment integration, authentication, and SEO implementation.

---

## Confirmed Technology Stack

| Layer | Technology |
|---|---|
| Frontend Framework | Next.js (App Router) + React |
| Styling / UI Kit | Tailwind CSS + shadcn/ui |
| State Management | Redux Toolkit (RTK) |
| Server-State / Data Fetching | RTK Query |
| Backend Framework | Node.js + Express.js |
| Database | PostgreSQL |
| ORM | Prisma (recommended — type-safe schema, migrations, excellent DX with PostgreSQL) |
| Payment Gateway | Razorpay |
| Authentication | JWT (access + refresh token rotation) + httpOnly cookies |
| Hosting (suggested) | Vercel (frontend) + Railway/Render/AWS (backend + DB) |

Routing/page inventory lives in `FrontendRoutes.md`. Visual design tokens and component inventory live in `Design.md`.

---

## Frontend Architecture: Folder Structure, Components, Libraries

### Root Frontend Folder Structure (Next.js App Router)

```
sheesh-exports-web/
├── app/
│   ├── (storefront)/
│   │   ├── layout.tsx  # PublicLayout: Header+Footer+ThemeProvider
│   │   ├── page.tsx  # Homepage
│   │   ├── about/page.tsx
│   │   ├── quality/page.tsx
│   │   ├── certifications/page.tsx
│   │   ├── certifications/[slug]/page.tsx
│   │   ├── export-process/page.tsx
│   │   ├── products/page.tsx
│   │   ├── products/[slug]/page.tsx
│   │   ├── products/category/[slug]/page.tsx
│   │   ├── categories/[slug]/page.tsx
│   │   ├── services/page.tsx
│   │   ├── services/[slug]/page.tsx
│   │   ├── export-markets/page.tsx
│   │   ├── export-markets/[slug]/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── blog/category/[slug]/page.tsx
│   │   ├── request-quote/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── checkout/page.tsx
│   │   ├── checkout/success/page.tsx
│   │   ├── contact/page.tsx
│   │   └── search/page.tsx
│   ├── (account)/
│   │   ├── layout.tsx  # AccountLayout: sidebar nav + auth guard
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── account/
│   │       ├── page.tsx
│   │       ├── rfqs/page.tsx
│   │       ├── rfqs/[id]/page.tsx
│   │       ├── orders/page.tsx
│   │       ├── orders/[id]/page.tsx
│   │       ├── saved-products/page.tsx
│   │       ├── addresses/page.tsx
│   │       ├── company-profile/page.tsx
│   │       └── settings/page.tsx
│   ├── (admin)/
│   │   ├── layout.tsx  # AdminLayout: sidebar+topbar+role guard
│   │   ├── admin/login/page.tsx
│   │   └── admin/
│   │       ├── page.tsx
│   │       ├── products/page.tsx
│   │       ├── products/new/page.tsx
│   │       ├── products/[id]/edit/page.tsx
│   │       ├── categories/page.tsx
│   │       ├── certifications/page.tsx
│   │       ├── export-markets/page.tsx
│   │       ├── services/page.tsx
│   │       ├── blog/page.tsx
│   │       ├── blog/new/page.tsx
│   │       ├── blog/[id]/edit/page.tsx
│   │       ├── rfqs/page.tsx
│   │       ├── rfqs/[id]/page.tsx
│   │       ├── orders/page.tsx
│   │       ├── orders/[id]/page.tsx
│   │       ├── customers/page.tsx
│   │       ├── customers/[id]/page.tsx
│   │       ├── payments/page.tsx
│   │       ├── invoices/page.tsx
│   │       ├── media/page.tsx
│   │       ├── users/page.tsx
│   │       ├── settings/page.tsx
│   │       ├── settings/seo/page.tsx
│   │       ├── analytics/page.tsx
│   │       └── activity-log/page.tsx
│   ├── api/  # route handlers (webhooks, revalidate)
│   │   ├── webhooks/razorpay/route.ts
│   │   └── revalidate/route.ts
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── globals.css
│   └── layout.tsx  # Root layout: <html>, fonts, ThemeProvider
├── components/
│   ├── ui/  # shadcn/ui primitives (button, input, dialog…)
│   ├── layout/  # Header, Footer, MegaMenu, AdminSidebar/Topbar
│   ├── product/  # ProductCard, ProductGallery, SpecsTable…
│   ├── forms/  # RFQForm, ContactForm, CheckoutForm…
│   ├── admin/  # KPIStatCard, RFQKanbanBoard, DataTable…
│   ├── marketing/  # Hero, TrustStatsBar, CategoryGrid…
│   ├── shared/  # ThemeToggle, Breadcrumbs, EmptyState…
│   └── providers/  # ReduxProvider, ThemeProvider, ToastProvider
├── lib/
│   ├── redux/
│   │   ├── store.ts
│   │   ├── hooks.ts  # typed useAppDispatch / useAppSelector
│   │   ├── api/  # RTK Query API slices (see State Management in Architecture.md)
│   │   │   ├── baseApi.ts
│   │   │   ├── productsApi.ts
│   │   │   ├── categoriesApi.ts
│   │   │   ├── rfqApi.ts
│   │   │   ├── ordersApi.ts
│   │   │   ├── authApi.ts
│   │   │   ├── blogApi.ts
│   │   │   ├── customersApi.ts
│   │   │   ├── adminApi.ts
│   │   │   └── uploadApi.ts
│   │   └── slices/  # local UI-state slices (see State Management in Architecture.md)
│   │       ├── authSlice.ts
│   │       ├── cartSlice.ts
│   │       ├── uiSlice.ts
│   │       ├── filterSlice.ts
│   │       ├── rfqFormSlice.ts
│   │       └── adminUiSlice.ts
│   ├── validators/  # zod schemas per form
│   ├── seo/  # JSON-LD builders, metadata helpers
│   ├── utils.ts  # cn(), formatCurrency, formatDate…
│   ├── constants.ts
│   └── types/  # shared TypeScript types/interfaces
├── hooks/  # useDebounce, useMediaQuery, useInView…
├── styles/
├── public/
├── middleware.ts  # auth/role route protection
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Core Libraries & What Each Is Used For

| Library | Purpose |
|---|---|
| `next` (App Router) | Framework, SSR/SSG/ISR, routing, image optimization, metadata API |
| `react`, `react-dom` | UI runtime |
| `typescript` | Type safety across entire codebase |
| `tailwindcss` | Utility-first styling |
| `shadcn/ui` (+ `radix-ui` primitives underneath) | Accessible component primitives (Dialog, Dropdown, Tabs, Accordion, Sheet, Select, Popover, Command, Toast…) |
| `class-variance-authority` (cva) + `clsx` + `tailwind-merge` | Variant-driven component styling (shadcn standard) |
| `lucide-react` | Icon set |
| `next-themes` | Dark/light/system theme switching, no-flash |
| `@reduxjs/toolkit` + `react-redux` | Global state + RTK Query data layer |
| `react-hook-form` | All form state/validation handling |
| `zod` + `@hookform/resolvers` | Schema validation for every form, shared client+server |
| `framer-motion` | Animations, page/step transitions, scroll reveals |
| `embla-carousel-react` | Product image galleries, carousels |
| `@tanstack/react-table` | Admin data tables (sort/filter/pagination) |
| `recharts` | Admin analytics charts |
| `@dnd-kit/core` | Admin Kanban drag-and-drop (RFQ pipeline) |
| `date-fns` | Date formatting/manipulation |
| `react-countup` | Animated stat counters |
| `nuqs` | Type-safe URL search-param state (catalog filters, admin table filters) |
| `sonner` (shadcn-recommended) | Toast notifications |
| `next/image` | Optimized images throughout |
| `react-dropzone` | Admin media/image upload UI |
| `tiptap` (or `@uiw/react-md-editor`) | Rich text editor for blog + long-form product descriptions |
| `react-simple-maps` (optional) | Export markets world map visualization |
| `react-zoom-pan-pinch` | Product image zoom on PDP |
| `razorpay` (checkout.js loaded via script tag) | Payment modal on frontend |
| `js-cookie` | Lightweight cookie helpers where needed client-side |
| `sharp` | (build-time, via Next.js) image optimization |
| `next-seo` (optional) or custom `lib/seo` | Structured metadata + JSON-LD helpers |
| `vitest` / `@testing-library/react` | Unit/component testing |
| `playwright` | E2E testing (RFQ flow, checkout flow) |
| `eslint`, `prettier`, `husky`, `lint-staged` | Code quality gates |

## State Management — Redux Toolkit + RTK Query

### Principle: Server State vs Client State
- **Server state** (anything that comes from the database — products, RFQs, orders, users) is **never** duplicated into a manual slice. It lives exclusively in **RTK Query's cache**, accessed via generated hooks (`useGetProductsQuery`, etc.). This avoids sync bugs.
- **Client/UI state** (theme, cart contents pre-checkout, form-in-progress data, sidebar collapsed state, filter selections not yet in URL, modal open/closed) lives in **regular Redux slices**.

### Store Configuration (`lib/redux/store.ts`)

```ts
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
    filters: filtersReducer,
    rfqForm: rfqFormReducer,
    adminUi: adminUiReducer,
  },
  middleware: (getDefault) => getDefault().concat(baseApi.middleware),
});
setupListeners(store.dispatch);
// enables refetchOnFocus / refetchOnReconnect
```

### Slice-by-Slice Breakdown

#### `authSlice`
**Holds:** `user: { id, name, email, role, companyName } | null`, `isAuthenticated: boolean`, `accessTokenExpiresAt`. **Does NOT hold** the raw JWT (kept in httpOnly cookie, inaccessible to JS — see Authentication & Authorization in Architecture.md). **Reducers:** `setCredentials`, `logout`, `updateUserProfile`. Populated by `authApi`'s `login`/`getMe` `onQueryStarted` → `dispatch(setCredentials(...))`.

#### `cartSlice`
**Holds:** `items: CartItem[]` (`{ productId, grade, packagingType, packagingSize, quantity, unitPrice }[]`), `promoCode`, `isCartOpen`. **Reducers:** `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `applyPromoCode`, `toggleCartDrawer`. **Persistence:** persisted to `localStorage` via a small custom middleware (or `redux-persist` scoped to only this slice) so cart survives refresh for guest browsing pre-login.

#### `uiSlice`
**Holds:** `isMobileMenuOpen`, `isSearchOpen`, `activeModal: string | null`, `toastQueue` (if not fully delegated to `sonner`), `theme` mirror flag (source of truth remains `next-themes`, this is just for components that need Redux-driven reads). **Reducers:** `openModal`, `closeModal`, `toggleMobileMenu`, `toggleSearch`.

#### `filtersSlice`
**Holds:** transient catalog filter draft state before it's committed to the URL (`selectedCategories[]`, `selectedCertifications[]`, `selectedMarkets[]`, `sortBy`, `searchTerm`) — mirrors URL (via `nuqs`) but gives non-URL components (e.g., filter count badge in header) a synchronous read. **Reducers:** `setFilter`, `resetFilters`, `hydrateFromUrl`.

#### `rfqFormSlice`
**Holds:** in-progress multi-step RFQ form draft (`currentStep`, `productSelections[]`, `packagingPreference`, `destinationPort`, `incoterm`, `targetDeliveryDate`, `companyDetails`) so the user doesn't lose progress navigating between PDP-triggered RFQ and the standalone `/request-quote` page. **Reducers:** `setStepData`, `nextStep`, `prevStep`, `resetRfqForm`, `prefillFromProduct`.

#### `adminUiSlice`
**Holds:** `isSidebarCollapsed`, `activeRfqView: 'table' | 'kanban'`, `selectedTableRows[]` (for bulk actions), `dateRangeFilter` (dashboard analytics). **Reducers:** `toggleSidebar`, `setRfqView`, `setSelectedRows`, `setDateRange`.

### RTK Query API Slices — Structure & Endpoints

#### `baseApi.ts` — the single `createApi` root
```ts
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL, // Express backend
    credentials: 'include', // sends httpOnly cookies
    prepareHeaders: (headers) => headers,
  }),
  tagTypes: ['Product','Category','RFQ','Order','User','Blog',
             'Certification','ExportMarket','Customer','Invoice'],
  endpoints: () => ({}),
});
```
Every feature API below uses `baseApi.injectEndpoints({...})` — this keeps the store lean and code-split per feature.

| API Slice | Endpoints (query/mutation) | Cache Tags |
|---|---|---|
| `productsApi` | `getProducts(filters)`, `getProductBySlug(slug)`, `getFeaturedProducts`, `getRelatedProducts(id)`, `createProduct` (admin), `updateProduct` (admin), `deleteProduct` (admin), `reorderProductImages` (admin) | `Product` |
| `categoriesApi` | `getCategories`, `getCategoryBySlug`, `createCategory`, `updateCategory`, `deleteCategory` | `Category` |
| `certificationsApi` | `getCertifications`, `getCertificationBySlug`, CRUD (admin) | `Certification` |
| `exportMarketsApi` | `getExportMarkets`, `getExportMarketBySlug`, CRUD (admin) | `ExportMarket` |
| `blogApi` | `getPosts(filters)`, `getPostBySlug`, `getLatestPosts`, CRUD (admin) | `Blog` |
| `rfqApi` | `submitRfq`, `getMyRfqs` (buyer), `getRfqById`, `getAdminRfqs(filters)` (admin), `updateRfqStatus` (admin), `assignRfq` (admin), `addRfqNote` (admin), `generateQuote` (admin), `acceptQuote` (buyer) | `RFQ` |
| `ordersApi` | `createOrder` (checkout init), `getMyOrders`, `getOrderById`, `getAdminOrders(filters)` (admin), `updateOrderStatus` (admin) | `Order` |
| `paymentApi` | `createRazorpayOrder`, `verifyRazorpayPayment` | `Order` |
| `authApi` | `login`, `registerBusiness`, `logout`, `getMe`, `forgotPassword`, `resetPassword`, `refreshToken` | `User` |
| `customersApi` (admin) | `getCustomers(filters)`, `getCustomerById`, `updateCustomerNotes` | `Customer` |
| `uploadApi` (admin) | `uploadImage`, `deleteImage` | — |
| `invoiceApi` (admin) | `getInvoices`, `generateInvoicePdf`, `getInvoiceById` | `Invoice` |
| `analyticsApi` (admin) | `getDashboardKpis`, `getRevenueTimeseries`, `getRfqFunnel`, `getTopProducts` | — |
| `usersApi` (admin) | `getStaffUsers`, `createStaffUser`, `updateStaffUser`, `deactivateStaffUser` | `User` |

**Cache invalidation pattern example:** `updateProduct` mutation declares `invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }, { type: 'Product', id: 'LIST' }]`; `getProducts` query declares `providesTags: (result) => [...result.map(p => ({type:'Product', id:p.id})), {type:'Product', id:'LIST'}]` — standard RTK Query list/detail invalidation pattern used **consistently across every API slice above**.


---

## Authentication & Authorization

### Strategy
- JWT **access token** (short-lived, 15 min) + **refresh token** (7–30 days, rotating) issued on login/register.
- Both tokens set as **httpOnly, Secure, SameSite=Lax cookies** by the Express backend — never exposed to client JS (mitigates XSS token theft). `authApi` uses `credentials: 'include'` so RTK Query automatically sends cookies.
- `authSlice` holds only the decoded non-sensitive user payload (id, name, email, role, companyName), set after a successful `login`/`getMe` call — **not** the token itself.
- Access token silently refreshed via a `refreshToken` mutation triggered from an RTK Query `baseQuery` wrapper (`baseQueryWithReauth`) that intercepts `401` responses, attempts refresh once, then retries the original request or logs the user out.

### Roles & Permission Matrix

| Role | Storefront | Account Portal | Admin Access |
|---|---|---|---|
| `guest` | Full browse, RFQ submit (as guest, converts to account on submit) | — | — |
| `buyer` | Full browse | Full (own data only) | — |
| `sales_agent` | — | — | RFQs, Orders (assigned/all), Customers (read/write notes) |
| `catalog_manager` | — | — | Products, Categories, Certifications, Export Markets, Media |
| `content_editor` | — | — | Blog, Services content, Media |
| `finance` | — | — | Payments, Invoices, Orders (read) |
| `super_admin` | — | — | Everything, incl. Users & Settings |

### Route Protection
- **Frontend:** `middleware.ts` inspects the session cookie (presence + a lightweight signed role claim) to gate `(account)` and `(admin)` route groups before render, redirecting to `/login` or `/admin/login` with a `?redirect=` param. Fine-grained role checks (e.g., `finance` shouldn't see `/admin/products`) are enforced again in each `AdminLayout` server component via a `getMe` server-side call, and mirrored by conditionally hiding nav items.
- **Backend:** every Express route behind auth passes through `authenticate` middleware (verifies JWT) then `authorize(['role1','role2'])` middleware per route (see the Database section in Architecture.md).


---

## Backend Architecture (Node.js + Express)

### Folder Structure

```
sheesh-exports-api/
├── src/
│   ├── config/
│   │   ├── env.ts  # validated env vars (zod)
│   │   ├── db.ts  # Prisma client instance
│   │   └── razorpay.ts  # Razorpay SDK instance
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.validator.ts
│   │   ├── products/   (routes/controller/service/validator)
│   │   ├── categories/
│   │   ├── certifications/
│   │   ├── export-markets/
│   │   ├── services-content/
│   │   ├── blog/
│   │   ├── rfq/
│   │   ├── orders/
│   │   ├── payments/
│   │   ├── customers/
│   │   ├── users/
│   │   ├── media/
│   │   ├── invoices/
│   │   ├── analytics/
│   │   └── settings/
│   ├── middlewares/
│   │   ├── authenticate.ts
│   │   ├── authorize.ts
│   │   ├── validateRequest.ts  # zod middleware
│   │   ├── errorHandler.ts  # centralized error formatting
│   │   ├── rateLimiter.ts
│   │   └── auditLogger.ts
│   ├── lib/
│   │   ├── jwt.ts
│   │   ├── email.ts  # transactional email (Resend/SES)
│   │   ├── pdf.ts  # invoice/quote PDF gen (pdf-lib/puppeteer)
│   │   ├── slugify.ts
│   │   └── logger.ts  # pino/winston
│   ├── jobs/  # background jobs (BullMQ + Redis)
│   │   ├── sendEmailJob.ts
│   │   ├── generateInvoiceJob.ts
│   │   └── abandonedCartReminder.ts
│   ├── app.ts  # express app, middleware wiring
│   └── server.ts  # entrypoint
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
└── package.json
```

### Core Backend Libraries

| Library | Purpose |
|---|---|
| `express` | HTTP server/routing |
| `prisma` + `@prisma/client` | Type-safe PostgreSQL ORM, migrations |
| `zod` | Request validation (shared shape with frontend) |
| `jsonwebtoken` | JWT sign/verify |
| `bcrypt` | Password hashing |
| `cookie-parser` | Parse httpOnly auth cookies |
| `cors` | CORS config (scoped to frontend origin, `credentials: true`) |
| `helmet` | Security headers |
| `express-rate-limit` | Brute-force/abuse protection on auth & RFQ endpoints |
| `multer` + cloud SDK (`@aws-sdk/client-s3` or Cloudinary SDK) | Media upload handling → object storage |
| `razorpay` (Node SDK) | Order creation, signature verification |
| `pino` (+ `pino-http`) | Structured logging |
| `bullmq` + `ioredis` | Background jobs/queues (emails, invoice generation, reminders) |
| `nodemailer` / Resend SDK | Transactional email |
| `puppeteer` or `pdf-lib` | Invoice & Quote PDF generation |
| `zod-express-middleware` (or custom) | Wires zod schemas directly into route validation |
| `jest` + `supertest` | Backend unit/integration tests |
| `dotenv` | Local env loading (production uses platform env vars) |

### API Route Structure & Sample Endpoint Table

Base URL: `/api/v1`. All list endpoints support `?page&limit&sort&...filters`. All mutating admin endpoints require `authenticate` + `authorize([...])`.

| Method | Endpoint | Purpose | Auth |
|---|---|---|---|
| POST | `/auth/register` | Business buyer signup | Public |
| POST | `/auth/login` | Login (sets cookies) | Public |
| POST | `/auth/logout` | Clear cookies | Authenticated |
| POST | `/auth/refresh` | Rotate access token | Refresh cookie |
| GET | `/auth/me` | Current user payload | Authenticated |
| POST | `/auth/forgot-password` / `/auth/reset-password` | Recovery flow | Public |
| GET | `/products` | List/filter products | Public |
| GET | `/products/:slug` | Product detail | Public |
| POST | `/products` | Create product | catalog_manager+ |
| PUT | `/products/:id` | Update product | catalog_manager+ |
| DELETE | `/products/:id` | Archive/delete product | catalog_manager+ |
| GET/POST/PUT/DELETE | `/categories`, `/certifications`, `/export-markets`, `/blog` | CRUD, same pattern as products | Public GET, role-gated writes |
| POST | `/rfq` | Submit new RFQ | Public/Authenticated |
| GET | `/rfq/mine` | Buyer's own RFQs | buyer |
| GET | `/rfq/:id` | RFQ detail (owner or staff) | buyer(own)/sales_agent+ |
| GET | `/admin/rfq` | All RFQs, filterable | sales_agent+ |
| PATCH | `/admin/rfq/:id/status` | Update status | sales_agent+ |
| PATCH | `/admin/rfq/:id/assign` | Assign to agent | sales_agent+ |
| POST | `/admin/rfq/:id/notes` | Add internal/buyer note | sales_agent+ |
| POST | `/admin/rfq/:id/quote` | Generate & send quote | sales_agent+ |
| POST | `/rfq/:id/accept-quote` | Buyer accepts quote → creates Order | buyer(own) |
| POST | `/orders` | Create order (checkout init) | buyer |
| GET | `/orders/mine` | Buyer's orders | buyer |
| GET | `/orders/:id` | Order detail | buyer(own)/staff |
| GET | `/admin/orders` | All orders | ops+ |
| PATCH | `/admin/orders/:id/status` | Update fulfillment/shipment status | ops+ |
| POST | `/payments/razorpay/order` | Create Razorpay order for a given `orders.id` | buyer |
| POST | `/payments/razorpay/verify` | Verify signature after checkout success | buyer |
| POST | `/webhooks/razorpay` | Razorpay server-to-server webhook | Signed (no user auth) |
| GET | `/admin/customers` | List B2B customers | sales_agent+ |
| GET | `/admin/customers/:id` | Customer 360 | sales_agent+ |
| GET | `/admin/invoices`, `/admin/invoices/:id/pdf` | Invoices | finance+ |
| GET | `/admin/analytics/kpis`, `/revenue`, `/rfq-funnel`, `/top-products` | Dashboard data | sales_agent+/super_admin |
| GET/POST/PATCH | `/admin/users` | Staff management | super_admin |
| POST | `/media/upload` | Upload image → returns URL | catalog_manager+/content_editor |

### Error Response Contract (consistent across every endpoint)
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "...",
    "fields": [ { "field": "email", "message": "Invalid email" } ]
  }
}
```
Success contract: `{ "success": true, "data": {...}, "meta": { "page": 1, "totalPages": 4, "total": 78 } }` for list endpoints.


---

## Database Structure (PostgreSQL via Prisma)

### Core Table List

`users`, `companies`, `addresses`, `categories`, `products`, `product_images`, `product_specifications`, `product_grades`, `product_packaging_options`, `certifications`, `product_certifications` (join), `export_markets`, `product_export_markets` (join), `product_faqs`, `blog_posts`, `blog_categories`, `rfqs`, `rfq_line_items`, `rfq_notes`, `quotes`, `quote_line_items`, `orders`, `order_line_items`, `payments`, `invoices`, `carts`, `cart_items`, `wishlists`, `media_assets`, `audit_logs`, `site_settings`.

### Key Table Schemas (Prisma model sketch)

```prisma
model User {
  id            String   @id @default(uuid())
  fullName      String
  email         String   @unique
  passwordHash  String
  phone         String?
  role          Role     @default(BUYER)
  companyId     String?
  company Company? @relation(fields: [companyId], references: [id])
  isActive      Boolean  @default(true)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  addresses     Address[]
  rfqs          Rfq[]
  orders        Order[]
}
enum Role {
  BUYER SALES_AGENT CATALOG_MANAGER CONTENT_EDITOR FINANCE OPS SUPER_ADMIN
}

model Company {
  id          String   @id @default(uuid())
  name        String
  country     String
  iecCode     String?
  gstOrVat    String?
  users       User[]
  createdAt   DateTime @default(now())
}

model Category {
  id          String   @id @default(uuid())
  name        String
  slug        String   @unique
  description String?
  image       String?
  featured    Boolean  @default(false)
  products    Product[]
  seoMetaTitle String?
  seoMetaDesc  String?
}

model Product {
  id              String   @id @default(uuid())
  name            String
  slug            String   @unique
  botanicalName   String?
  hsCode          String
  categoryId      String
  category Category @relation(fields: [categoryId], references: [id])
  shortDescription String
  description     String   @db.Text
  origin          String
  harvestSeason   String?
  minimumOrderQuantity String
  shelfLife       String
  applications    String[]
  status          ProductStatus @default(DRAFT)
  featured        Boolean  @default(false)
  images          ProductImage[]
  specifications  ProductSpecification[]
  grades          ProductGrade[]
  packagingOptions ProductPackagingOption[]
  faqs            ProductFaq[]
  certifications  ProductCertification[]
  exportMarkets   ProductExportMarket[]
  rfqLineItems    RfqLineItem[]
  orderLineItems  OrderLineItem[]
  seoMetaTitle    String?
  seoMetaDesc     String?
  canonicalUrl    String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  @@index([categoryId])
  @@index([status])
}
enum ProductStatus { DRAFT PUBLISHED ARCHIVED }

model ProductImage {
  id          String  @id @default(uuid())
  productId   String
  product Product @relation(fields: [productId], references: [id])
  url         String
  alt         String
  isFeatured  Boolean @default(false)
  sortOrder   Int     @default(0)
}
model ProductSpecification {
  id         String  @id @default(uuid())
  productId  String
  product Product @relation(fields: [productId], references: [id])
  label      String
  value      String
  sortOrder  Int     @default(0)
}
model ProductGrade {
  id           String  @id @default(uuid())
  productId    String
  product Product @relation(fields: [productId], references: [id])
  gradeName    String
  description  String
}
model ProductPackagingOption {
  id         String   @id @default(uuid())
  productId  String
  product Product @relation(fields: [productId], references: [id])
  type       String
  sizes      String[]
}
model ProductFaq {
  id         String  @id @default(uuid())
  productId  String
  product Product @relation(fields: [productId], references: [id])
  question   String
  answer     String  @db.Text
}

model Certification {
  id           String  @id @default(uuid())
  name         String
  slug         String  @unique
  issuingBody  String
  badgeImage   String
  description  String  @db.Text
  products     ProductCertification[]
}
model ProductCertification {
  productId        String
  certificationId  String
  product Product @relation(fields: [productId], references: [id])
  certification Certification @relation(
    fields: [certificationId], references: [id])
  @@id([productId, certificationId])
}

model ExportMarket {
  id                     String   @id @default(uuid())
  country                String
  slug                   String   @unique
  region                 String
  overview               String   @db.Text
  keyImportRequirements  String[]
  majorPortsServed       String[]
  transitTimeEstimate    String
  products               ProductExportMarket[]
}
model ProductExportMarket {
  productId       String
  exportMarketId  String
  product Product @relation(fields: [productId], references: [id])
  exportMarket ExportMarket @relation(
    fields: [exportMarketId], references: [id])
  @@id([productId, exportMarketId])
}

model Rfq {
  id                  String     @id @default(uuid())
  userId              String?
  user User? @relation(fields: [userId], references: [id])
  fullName            String
  companyName         String
  businessEmail       String
  phone               String
  country             String
  destinationPort     String
  incoterm            Incoterm
  targetDeliveryDate  DateTime?
  message             String?
  status              RfqStatus  @default(NEW)
  assignedToId        String?
  lineItems           RfqLineItem[]
  notes               RfqNote[]
  quotes              Quote[]
  createdAt           DateTime   @default(now())
  updatedAt           DateTime   @updatedAt
}
enum RfqStatus { NEW REVIEWING QUOTED NEGOTIATING WON LOST }
enum Incoterm { FOB CIF CFR EXW }
model RfqLineItem {
  id             String  @id @default(uuid())
  rfqId          String
  rfq Rfq @relation(fields: [rfqId], references: [id])
  productId      String
  product Product @relation(fields: [productId], references: [id])
  grade          String
  packagingType  String
  packagingSize  String
  quantity       Decimal
  unit           String
}
model RfqNote {
  id                String   @id @default(uuid())
  rfqId             String
  rfq Rfq @relation(fields: [rfqId], references: [id])
  authorId          String
  isVisibleToBuyer  Boolean  @default(false)
  body              String   @db.Text
  createdAt         DateTime @default(now())
}

model Quote {
  id            String       @id @default(uuid())
  rfqId         String
  rfq Rfq @relation(fields: [rfqId], references: [id])
  lineItems     QuoteLineItem[]
  validUntil    DateTime
  paymentTerms  String
  pdfUrl        String?
  status        QuoteStatus  @default(SENT)
  createdAt     DateTime     @default(now())
}
enum QuoteStatus { SENT ACCEPTED REJECTED EXPIRED }
model QuoteLineItem {
  id         String  @id @default(uuid())
  quoteId    String
  quote Quote @relation(fields: [quoteId], references: [id])
  productId  String
  unitPrice  Decimal
  quantity   Decimal
  lineTotal  Decimal
}

model Order {
  id                 String       @id @default(uuid())
  orderNumber        String       @unique
  userId             String
  user User @relation(fields: [userId], references: [id])
  sourceRfqId        String?
  status             OrderStatus  @default(PENDING_PAYMENT)
  shippingAddressId  String
  billingAddressId   String
  subtotal           Decimal
  shipping           Decimal      @default(0)
  tax                Decimal      @default(0)
  total              Decimal
  lineItems          OrderLineItem[]
  payments           Payment[]
  invoice            Invoice?
  createdAt          DateTime     @default(now())
  updatedAt          DateTime     @updatedAt
}
enum OrderStatus {
  PENDING_PAYMENT PAID PROCESSING SHIPPED DELIVERED CANCELLED REFUNDED
}
model OrderLineItem {
  id             String  @id @default(uuid())
  orderId        String
  order Order @relation(fields: [orderId], references: [id])
  productId      String
  product Product @relation(fields: [productId], references: [id])
  grade          String
  packagingType  String
  packagingSize  String
  quantity       Decimal
  unitPrice      Decimal
  lineTotal      Decimal
}

model Payment {
  id                 String        @id @default(uuid())
  orderId            String
  order Order @relation(fields: [orderId], references: [id])
  razorpayOrderId    String
  razorpayPaymentId  String?
  razorpaySignature  String?
  amount             Decimal
  currency           String        @default("INR")
  status             PaymentStatus @default(CREATED)
  method             String?
  createdAt          DateTime      @default(now())
}
enum PaymentStatus { CREATED AUTHORIZED CAPTURED FAILED REFUNDED }

model Invoice {
  id             String   @id @default(uuid())
  orderId        String   @unique
  order Order @relation(fields: [orderId], references: [id])
  invoiceNumber  String   @unique
  pdfUrl         String
  issuedAt       DateTime @default(now())
}

model Address {
  id          String  @id @default(uuid())
  userId      String
  user User @relation(fields: [userId], references: [id])
  line1       String
  line2       String?
  city        String
  state       String
  postalCode  String
  country     String
  isDefault   Boolean @default(false)
}

model BlogPost {
  id                 String        @id @default(uuid())
  title              String
  slug               String        @unique
  excerpt            String
  content            String        @db.Text
  authorName         String
  categoryId         String
  featuredImage      String
  relatedProductIds  String[]
  status             ProductStatus @default(DRAFT)
  publishedAt        DateTime?
  seoMetaTitle       String?
  seoMetaDesc        String?
}
model BlogCategory {
  id    String @id @default(uuid())
  name  String
  slug  String @unique
}

model AuditLog {
  id          String   @id @default(uuid())
  actorId     String
  action      String
  entityType  String
  entityId    String
  metadata    Json?
  createdAt   DateTime @default(now())
}
model SiteSetting {
  key    String @id
  value  Json
}
model MediaAsset {
  id            String   @id @default(uuid())
  url           String
  type          String
  altText       String?
  uploadedById  String
  createdAt     DateTime @default(now())
}
```

### Indexing & Performance Notes
- Index all foreign keys (Prisma does this by default for relations) plus explicit composite indexes on `products(status, categoryId)`, `rfqs(status, assignedToId)`, `orders(status, userId)` for admin filtered lists.
- Full-text search: use PostgreSQL `tsvector`/`GIN` index on `products.name || products.description` (and `blog_posts`) for the `/search` route, rather than pulling in Elasticsearch for v1 — revisit only if catalog scale demands it.
- `Decimal` type used for all money/quantity fields — never `Float` — to avoid rounding errors in pricing.

---

## Payment Gateway — Razorpay Integration

### Flow (Order → Pay → Verify → Fulfill)

1. Buyer completes Checkout review step → frontend calls `POST /orders` → backend creates an `Order` row with status `PENDING_PAYMENT` and computed totals.
2. Frontend calls `POST /payments/razorpay/order` with the internal `orderId` → backend calls Razorpay's `orders.create({ amount, currency: 'INR', receipt: order.orderNumber })` via the Node SDK, stores a `Payment` row (`status: CREATED`, `razorpayOrderId`), and returns `{ razorpayOrderId, amount, currency, keyId }` to the client.
3. Frontend loads Razorpay's `checkout.js` and opens the **Razorpay Checkout modal** with those params (`order_id`, `key`, `prefill: { name, email, contact }`, `theme.color` matched to `--primary` token so the modal doesn't clash with dark/light theme).
4. On success, Razorpay returns `razorpay_payment_id`, `razorpay_order_id`, `razorpay_signature` to the frontend `handler` callback.
5. Frontend calls `POST /payments/razorpay/verify` with those three values → backend **re-verifies the HMAC SHA256 signature server-side** using the Razorpay secret (`crypto.createHmac('sha256', secret).update(order_id + "|" + payment_id).digest('hex')` must equal the signature) — **never trust client-side success alone**.
6. On verified success: `Payment.status = CAPTURED`, `Order.status = PAID`, an `Invoice` is generated (background job via BullMQ, the Backend Folder Structure in Architecture.md), and a confirmation email is queued. Frontend redirects to `/checkout/success`.
7. **Webhook (`POST /webhooks/razorpay`)** is configured in the Razorpay dashboard as the source of truth backstop — handles `payment.captured`, `payment.failed`, `refund.processed` events independently of the client-side verify call (covers cases where the user closes the tab mid-flow). Webhook signature verified via the `x-razorpay-signature` header against the raw request body.

### Failure & Edge Cases
- Payment failure → `Payment.status = FAILED`, `Order` remains `PENDING_PAYMENT`, buyer shown a retry CTA (re-triggers step 2 with the same order).
- Idempotency: `orderNumber`/`receipt` uniqueness prevents duplicate Razorpay orders for the same cart on retry.
- Refunds initiated from `/admin/orders/[id]` call Razorpay's Refunds API; webhook `refund.processed` updates `Order.status = REFUNDED`.
- Test mode: Razorpay test keys used in `.env.development`; live keys injected only via the hosting platform's secret manager in production, never committed.

### Environment Variables Required
`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, exposed to frontend only as `NEXT_PUBLIC_RAZORPAY_KEY_ID` (public key is safe client-side; secret never leaves the backend).


---

## SEO Guide — Ranking Strategy

*(Builds directly on the keyword/intent architecture already defined for the project — extended into an execution guide.)*

### Technical SEO Foundation
- **Rendering:** SSG/ISR for every crawlable page (the Storefront route table in FrontendRoutes.md table specifies rendering mode per route) — never CSR-only for anything that needs to rank.
- **Core Web Vitals:** `next/image` everywhere (auto AVIF/WebP, responsive `sizes`), font subsetting via `next/font` (self-hosted, zero layout shift), route-level code splitting (App Router default), target LCP < 2.5s, CLS < 0.1, INP < 200ms.
- **`sitemap.ts` / `robots.ts`:** dynamically generated including all products, categories, blog posts, export markets (paginated sitemap index if >50k URLs). `robots.ts` disallows `/admin`, `/account`, `/api`, `/checkout`, `/cart`.
- **Canonicalization:** every page sets `alternates.canonical` via the Next.js Metadata API pointing to the definitive absolute URL (prevents duplicate content from filter/query-param variants on `/products`).
- **Structured Data (JSON-LD)** — built via `lib/seo/` type-safe builders, injected per the Structured Data table in Architecture.md table below.
- **hreflang:** if multi-region storefronts are ever split by market, add `hreflang` alternates on export-market and product pages — noted here for future-proofing even though v1 is single-locale.

### Structured Data Per Page Type

| Page | Schema Types |
|---|---|
| Homepage | `Organization`, `WebSite` (with `SearchAction` for sitelinks search box) |
| Category | `CollectionPage`, `BreadcrumbList` |
| Product | `Product`, `AggregateOffer` (or `Offer` if single price shown), `BreadcrumbList`, `FAQPage` (from product FAQs) |
| Export Market | `ItemPage`/`Place`, `BreadcrumbList` |
| Service | `Service`, `BreadcrumbList` |
| Blog Article | `Article` (`BlogPosting`), `BreadcrumbList`, `Person`/`Organization` author |
| Certification | `BreadcrumbList`, optionally `Certification`-style custom schema if applicable |
| Contact | `Organization` w/ `ContactPoint` |

### On-Page Checklist (enforced per page via the Admin SEO tab, the Product Editor spec in Design.md)
Title tag formula, meta description 155–160 chars, single `<h1>` matching primary intent, descriptive `alt` text on every image (never blank on product images — include product name + attribute), keyword-relevant slugs (no stop-word stuffing), internal links from every blog article to at least 1–2 relevant product/category pages (mirrors the "SEO Internal Linking Flow" already mapped for this project), external outbound links on cited stats use `rel="nofollow noopener"` where appropriate.

### Content & Off-Page Strategy
- **Pillar-cluster model:** each `/categories/[slug]` is a pillar page; individual `/products/[slug]` and relevant `/blog/[slug]` posts are cluster content linking back up to the pillar and across to each other.
- **Blog cadence:** minimum 2–4 posts/month targeting long-tail informational queries feeding the funnel shown in the linking-flow diagram (informational blog → product recommendation → RFQ).
- **Export-market pages** double as programmatic-SEO surface area — one well-templated page per target country captures "[commodity] import to [country]" search demand at scale.
- **Backlinks:** target trade directories (APEDA partner listings, Alibaba/IndiaMART cross-links back to the domain), industry press releases on new certifications, guest posts on import/export logistics blogs.
- **Local/Entity SEO:** `Organization` schema + Google Business Profile + consistent NAP (Name/Address/Phone) across trade directories builds entity trust signals Google uses for B2B queries.

### Monitoring
Google Search Console + Bing Webmaster Tools verified at launch; `sitemap.xml` submitted; rank tracking on the primary keyword/intent matrix reviewed monthly; Core Web Vitals monitored via Vercel Analytics / `web-vitals` reporting to an analytics endpoint.

---

### Environment Variables Reference

**Frontend (`.env.local`):** `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_RAZORPAY_KEY_ID`, `NEXT_PUBLIC_SITE_URL`.

**Backend (`.env`):** `DATABASE_URL`, `PORT`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `COOKIE_DOMAIN`, `CORS_ORIGIN`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, `REDIS_URL`, `S3_BUCKET` / `CLOUDINARY_URL`, `SMTP_*` or `RESEND_API_KEY`, `SENTRY_DSN`.

---

## Open Technical Decisions (Confirm Before Building)

- Final hosting provider choice for backend/DB (Railway vs Render vs AWS) — the architecture above is portable to any.
- Object storage provider (S3 vs Cloudinary) — the media module is written provider-agnostic behind `uploadApi`.

Product-level open decisions (trade finance workflow, multi-currency) are tracked in `PRD.md`.
