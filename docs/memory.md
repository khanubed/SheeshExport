# Project Context & Memory

## Current Phase: Front-end Infrastructure & Pages Implementation
- Completed homepage restructuring (Hero, Swiper continuous carousels, Process section, Testimonials, Map embed).
- Built comprehensive `/products` catalog page using `shadcn` components (Sheet, Accordion, Select) and mock data filtering logic.
- Fully scaffolded Redux Toolkit + RTK Query architecture across `src/lib/redux` (store, hooks, slices, and 14 feature API slices with caching rules).
- We must strictly follow the visual direction and token system outlined in `docs/Design.md`.
- Colors must use CSS variables (e.g., `--background`, `--primary`, `--card`) without relying on hardcoded Tailwind colors.
- The sitemap and architecture from `docs/architecture` must guide internal link routing and component structures (e.g. `Breadcrumbs`, `ProductCard` routes).
- Components must support responsive behavior and light/dark modes (relying on `next-themes` and variable tokens, avoiding explicit `dark:` classes where possible).

## Completed Tasks
- Installed all essential libraries (`@reduxjs/toolkit`, `react-hook-form`, `zod`, `embla-carousel-react`, `@tanstack/react-table`, `nuqs`, etc.).
- `shadcn` base primitives (`accordion`, `checkbox`, `sheet`, `select`, `badge`, `input`) installed.
- Product Catalog filtering logic (Client-side mock logic ready to be replaced by RTK Query).
- Client UI Slices (`auth`, `cart`, `ui`, `filters`, `rfqForm`, `adminUi`) implemented.
- RTK Query `baseApi` and 14 injected feature slices implemented.
- Implemented comprehensive SEO architecture across pages (schemas, meta tags) per `03-keyword-seo-architecture.md`.
- Revamped layout sections (Competitive Advantage, Boxed Video Journey Section) and improved accessibility contrast on Service/About pages.

## Active / Next Tasks
- Implement `FloatingWidget.tsx` (Chatbot & Calling UI simulation) across the application layout to capture leads.
- Connect mock data/UI to backend API once the backend is ready (RTK hooks already generated).
- Develop Admin Dashboard UI (`/admin`).
- Develop Request for Quote (RFQ) multi-step flow using `rfqFormSlice`.
- Develop detailed Product Description Pages (PDP).
