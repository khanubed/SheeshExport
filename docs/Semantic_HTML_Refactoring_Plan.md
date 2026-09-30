# Semantic HTML Refactoring Plan for Sheesh Exports

## 1. Objectives
The goal of this refactoring process is to replace generic `<div>` and `<span>` elements with appropriate HTML5 semantic tags across the entire `src/app` directory and all reusable components in `src/components`.

**Why are we doing this?**
- **SEO (Search Engine Optimization):** Search engines (like Google) prioritize well-structured semantic HTML. Tags like `<article>`, `<section>`, and `<nav>` provide meaning to the crawler, ensuring higher rankings for high-intent B2B search terms.
- **Accessibility (a11y):** Screen readers rely on semantic tags to navigate a page logically. Proper use of `<main>`, `<header>`, and ARIA landmarks ensures compliance with web accessibility standards (WCAG).
- **Maintainability:** Semantic code is easier for developers to read, understand, and maintain.

---

## 2. Semantic Mapping Guide (What changes to what)

Whenever we encounter a `<div>`, we will evaluate its purpose and map it to one of the following:

| Generic Tag | Semantic Tag | Usage Scenario |
| :--- | :--- | :--- |
| `<div id="root">` | `<main>` | The primary content area of a page (e.g., inside `page.tsx`). |
| `<div class="header">` | `<header>` | Page or section headers (e.g., `TopNav`, `PageHero`). |
| `<div class="footer">` | `<footer>` | Page or section footers. |
| `<div class="nav-links">` | `<nav>` | Primary, secondary, or breadcrumb navigation links. |
| `<div class="section">` | `<section>` | A thematic grouping of content, typically with a heading (`<h1>` - `<h6>`). |
| `<div class="card">` | `<article>` | Independent, self-contained content like a Product Card, Blog Post, or Testimonial. |
| `<div class="sidebar">` | `<aside>` | Content tangentially related to the main content (e.g., filters sidebar, related products). |
| `<div class="image-wrap">` | `<figure>` | Self-contained media (image/chart) often paired with a `<figcaption>`. |
| `<div class="form-group">` | `<fieldset>` | Grouping related elements in a form (e.g., Address details). |
| `<div class="label">` | `<label>` / `<legend>` | Defining captions for form controls or fieldsets. |
| `<b / i>` | `<strong> / <em>` | For text that requires semantic emphasis, not just visual styling. |

---

## 3. Execution Strategy (Phase-by-Phase)

To ensure we don't break existing layouts (Tailwind styles typically map cleanly to any block-level element, but flex/grid contexts need slight care), we will execute the plan in the following phases:

### Phase 1: Core Layouts & Structural Wrappers
**Target:** `src/app/**/layout.tsx` and `src/app/**/page.tsx`
- Refactor the root layout and page wrappers.
- Ensure every `page.tsx` returns a `<main>` as its top-level element (or wraps its content in `<main>`).
- Example: Convert Homepage `<div className="flex flex-col min-h-screen">` into `<main>`.

### Phase 2: Global Layout Components
**Target:** `src/components/layout`, `src/components/navigation`, `src/components/shared`
- `Header.tsx` -> `<header>`, `<nav>`
- `Footer.tsx` -> `<footer>`, `<nav>`
- `MegaMenu.tsx` -> `<nav>`
- `Breadcrumbs.tsx` -> `<nav aria-label="breadcrumb">`

### Phase 3: Marketing & Homepage Blocks
**Target:** `src/components/home`, `src/components/about`, `src/components/contact`
- Refactor landing page sections.
- `AboutHeroSwiper.tsx` -> `<section aria-labelledby="hero-heading">`
- `ContactSection.tsx` -> `<section>` containing `<address>` and `<form>`.
- Use `<section>` for distinct horizontal bands of content (e.g., "Why India?", "Our Industries").

### Phase 4: E-Commerce Catalog (PDP & CDP)
**Target:** `src/components/products`, `src/components/categories`
- `CategoryCard.tsx` / `ProductCard.tsx` -> `<article>`
- `CategoryOverview.tsx` -> `<section>`
- `CategoryQuality.tsx` -> `<section>`
- `CategoryPackaging.tsx` -> `<section>`
- Ensure proper heading hierarchy (`<h1>` for Product Title, `<h2>` for sections like Specifications).

### Phase 5: Forms, UI Primitives, & Admin
**Target:** `src/components/form`, `src/components/ui`, `src/components/admin`
- Ensure custom form components use correct `<label htmlFor="...">` and `<input id="...">` mapping.
- Add `aria-invalid` and `aria-describedby` for error states.
- Wrap admin sidebars in `<aside>` and admin main content in `<main>`.

---

## 4. Next Steps & How to Proceed

We can start immediately. To maintain stability, I recommend proceeding phase-by-phase and verifying the UI remains visually identical after each phase (since Tailwind classes will apply the same way to `<section>` as they do to `<div>`).

**If you approve this plan, we will begin executing Phase 1 (Core Layouts & Pages) right now.**
