# 03. Keyword & SEO Architecture

## Executive Strategy
For Sheesh Exports, B2B search engine optimization does not mean keyword-stuffing thin pages. We prioritize commercial and transactional search intent matching international trade buyers, procurement managers, and food commodity importers.

---

## 1. Intent Mapping Matrix

| Page Type | Target Audience Intent | Primary Keyword Theme | Secondary / LSI Keywords | Structured Data (JSON-LD) |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | Brand & Manufacturer Trust | "Indian spices exporter", "agro commodity exporter India" | "bulk spice suppliers India", "APEDA registered exporter", "FSSAI certified spice exporter" | `Organization`, `WebSite` |
| **Category (`/categories/spices`)** | Wholesale Sourcing | "Indian spices wholesale supplier", "buy Indian spices in bulk" | "whole spices supplier India", "ground spices exporter", "mixed container spice shipment" | `CollectionPage`, `BreadcrumbList` |
| **Product (`/products/red-chilli`)** | High Commercial Transaction | "Indian red chilli exporter", "Sananam S4 red chilli wholesale" | "Teja red chilli supplier", "Byadgi chilli exporter India", "red chilli stemless price per ton", "HS Code 09042110" | `Product`, `BreadcrumbList`, `FAQPage` |
| **Market (`/export-markets/uae`)** | Geo-Specific Compliance | "import Indian spices into UAE", "spice suppliers to Dubai" | "Jebel Ali spice customs clearance", "halal certified spices Dubai", "container shipping time India to UAE" | `ItemPage`, `BreadcrumbList` |
| **Service (`/services/private-label`)** | OEM / Retail Packaging | "private label spices exporter India", "custom OEM spice packaging" | "contract packing spices", "consumer spice packaging manufacturer India", "custom barcode retail spices" | `Service`, `BreadcrumbList` |
| **Blog (`/blog/how-to-import...`)** | Informational Education | "how to import spices from India to UK", "import duty on Indian cumin" | "documents needed for spice export from India", "phytosanitary certificate spice export" | `Article`, `BreadcrumbList` |

---

## 2. On-Page SEO Standard Checklist (Per Page)

Every page generated in Next.js App Router must fulfill the following architectural requirements:
1. **Title Tag Formulation**:
   - Products: `{Product Name} Exporter & Wholesale Supplier from India | Sheesh Exports`
   - Categories: `{Category Name} Suppliers & Bulk Exporters India | Sheesh Exports`
   - Markets: `Exporting Indian Agro Commodities to {Country} | Sheesh Exports`
2. **Meta Description**: 155-160 characters highlighting origin (India), quality certifications (APEDA/FSSAI/ISO), minimum order quantities, and custom packaging capabilities.
3. **Canonical Link**: Absolute canonical URL pointing to the definitive version (`https://sheeshexports.in/...`).
4. **Single `<h1>`**: Exact primary search intent topic.
5. **OpenGraph & Twitter Cards**: High-resolution 1200x630px OG images with title, brand watermark, and commodity preview.
6. **JSON-LD Schema**:
   - Embedded via `<script type="application/ld+json">` generated via type-safe builders in `src/lib/seo/`.
7. **Breadcrumb Hierarchy**:
   - Visual breadcrumb navigation for user orientation.
   - Corresponding `BreadcrumbList` schema for Google search rich snippets.

---

## 3. Product Schema Specification (`Product`)

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Indian S4 Sananam Red Chilli",
  "image": ["https://sheeshexports.in/images/products/s4-red-chilli.jpg"],
  "description": "Premium grade Indian S4 Sananam Red Chilli whole and stemless, exported directly from Guntur, Andhra Pradesh with guaranteed ASTA color and SHU heat values.",
  "sku": "SE-RC-S4",
  "mpn": "09042110",
  "brand": {
    "@type": "Brand",
    "name": "Sheesh Exports"
  },
  "countryOfOrigin": {
    "@type": "Country",
    "name": "India"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
```
