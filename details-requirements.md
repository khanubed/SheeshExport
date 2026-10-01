# Client Data & Asset Requirements Specification
## Project: Sheesh Exports — Global B2B Export Intelligence Platform
**Document Version:** 1.0  
**Generated Date:** October 2026  
**Audience:** Client Leadership (Sheesh Exports), Project Managers, Design & Development Teams  

---

## Executive Summary

To transition the Sheesh Exports website from development stage to a world-class, fully authenticated, production-grade international trade portal, specific proprietary information, legal identifiers, high-resolution original media, facility photography, and operational data must be obtained directly from the client.

This document systematically details **every single page, section, component, and legal node** across the entire web application, specifying:
1. **The exact location (Page & Section)**
2. **What information, parameters, or data are needed**
3. **What photos, diagrams, certificates, or document files are required**
4. **Why it is needed and how it impacts buyer trust, international trade compliance, or lead conversion**

---

## Priority Action Matrix for Client

| Priority Level | Category | Key Items Needed | Impact |
| :--- | :--- | :--- | :--- |
| **P0 — Urgent** | **Corporate Identity & Legal** | Official CIN, GSTIN, IEC, APEDA, Spices Board, FSSAI numbers, official registered address, and valid director details. | Legal compliance, avoiding misrepresentation, buyer due diligence. |
| **P0 — Urgent** | **Communications & Routing** | Official departmental email addresses, WhatsApp Business number, phone numbers, and operational working hours. | Lead delivery, zero missed RFQs, instant buyer contact. |
| **P1 — High** | **Accreditations & Certificates** | High-resolution scans / official PDFs of APEDA, Spices Board, FSSAI, ISO 22000, HACCP, US FDA registration, Halal/Kosher certificates. | Trust badge verification; international customs requirements. |
| **P1 — High** | **Real Industrial Photography** | Real photos of processing units, optical sortex machines, warehouse storage, container stuffing, laboratory testing, and founders/executives. | Eliminates reliance on stock imagery; establishes physical trade authenticity. |
| **P2 — Medium** | **Product & Packaging Specs** | Final active export SKU list, lab test parameter limits (moisture %, curcumin %, piperine %, SHU heat), bag types, and pallet payloads. | Accuracy of commercial quotes, contract specifications. |
| **P2 — Medium** | **Investor & Governance PDFs** | Official signed company policies, Annual Reports, Auditor Statements, and Registrar & Transfer Agent (RTA) details. | Statutory regulatory compliance for public/corporate transparency. |

---

## Global Sitewide Elements

These items appear on every page of the website (Header, Footer, Floating Modals, Meta tags).

### 1. Global Header & Top Navigation Bar
* **Location:** [`src/components/navigation/Header.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/navigation/Header.tsx) & [`src/config/navigation.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/config/navigation.ts)
* **Text / Data Details Needed:**
  * Confirmation of primary company brand name display: `"Sheesh Exports"` vs `"Sheesh Exports Private Limited"`.
  * Top announcement bar message: Current text reads `"APEDA Registered · Serving 40+ Countries Worldwide"`. Confirm if country count is 40+, 50+, or specific figure.
* **Images / Assets Needed:**
  * **Vector Master Logo:** High-resolution SVG / transparent PNG of the official Sheesh Exports logo.
  * **Dark Mode Variant:** White/inverted version of the logo for dark backgrounds.
  * **Favicon / Web App Icon:** 512x512 PNG master icon for browser tabs and mobile home screens.

### 2. Global Footer
* **Location:** [`src/components/navigation/Footer.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/navigation/Footer.tsx)
* **Text / Data Details Needed:**
  * **Official Registered Corporate Address:** Confirm exact registered address text: Currently set to `507, B-Block, The One Building, 5 RNT Marg, Indore, Madhya Pradesh - 452001, India`.
  * **Official Social Media Links:**
    * Official LinkedIn Company Page URL (currently `#`)
    * Official Twitter / X Handle URL (currently `#`)
    * Official Facebook / Instagram / YouTube URLs (if applicable)
  * **Newsletter / Inquiry Handling:** What backend email or CRM should receive newsletter subscriptions entered in the footer?
  * **Copyright Legal Entity Name:** Confirm exact entity: `Sheesh Exports Private Limited` vs `Sheesh Exports`.

### 3. Floating Contact & Live Support Widget
* **Location:** [`src/components/ui/FloatingWidget.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/ui/FloatingWidget.tsx)
* **Text / Data Details Needed:**
  * **Direct Phone Call Number:** Currently set to `+91 9826270888`. Confirm if this is the 24/7 dedicated line for international callers.
  * **WhatsApp Business Number:** Currently configured to `+91 90399 20069`. Confirm exact WhatsApp account number and designated responder.
  * **Support Desk Availability Timings:** Specific office hours (e.g., `09:30 AM – 06:30 PM IST, Monday through Saturday`) or 24/7 on-call dispatch for international time zones (EST, CET, GST).
  * **Automated Callback SLA:** Guaranteed callback timeframe for missed inquiries (e.g., within 30 minutes, 2 hours).

### 4. Search Engine Optimization (SEO) & OpenGraph Branding
* **Location:** [`src/config/site.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/config/site.ts) & [`src/app/manifest.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/manifest.ts)
* **Text / Data Details Needed:**
  * Primary domain name confirmation: `https://sheeshexports.in` vs `https://sheeshexports.com`.
  * Primary Google Search Console & Bing Webmaster verification codes.
* **Images / Assets Needed:**
  * **OpenGraph Image (`og-default.jpg`):** 1200x630px branded banner image displayed when links are shared on LinkedIn, WhatsApp, Twitter, and Facebook.

---

## Detailed Page-by-Page & Section-by-Section Requirements

---

### Page 01: Homepage (`/`)
**Route:** [`src/app/(website)/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/page.tsx)

#### Section 1: Hero Section
* **Location:** Lines 166–235
* **Text / Data Details Needed:**
  * **Years of Excellence / Establishment Year:** Stat currently displays `25+ Years of Excellence`. Provide actual year of founding or trading establishment.
  * **Total Countries Served:** Stat displays `50+ Countries`. Provide exact count or confirmed range.
  * **Global Partners:** Stat displays `100+ Global Partners`. Confirm accuracy.
  * **Hero Sub-Tagline:** Confirm whether `"Indian Origin. Global Reach."` aligns with brand messaging.
* **Media & Files Needed:**
  * **"Download Catalog" Button Asset:** Actual comprehensive Product Catalog in PDF format (2026/2027 edition) for buyers to download.
  * **Hero Background Video:** The site currently plays `/hero-video.webm`. Confirm if client wants their own raw drone/factory footage incorporated.

#### Section 2: Certifications Bar & Marquee
* **Location:** Lines 237–266 & [`src/components/home/DynamicCarousels.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/home/DynamicCarousels.tsx)
* **Text / Data Details Needed:**
  * Exact list of valid active accreditations: (APEDA, Spices Board, FSSAI, FIEO, IEC, MSME, GST, Star Export House, ISO 22000, US FDA, HALAL, KOSHER).
* **Media & Files Needed:**
  * Official vector/transparent high-resolution logos of all registered regulatory and standards bodies.

#### Section 3: Product Range Showcase
* **Location:** Lines 268–300 & [`src/components/home/ProductCarousel.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/home/ProductCarousel.tsx)
* **Text / Data Details Needed:**
  * Confirmation of primary flagship products to highlight on the front page (e.g., Guntur Teja Chilli, Alleppey Turmeric, Malabar Black Pepper, Basmati Rice, Cumin Seeds).
* **Media & Files Needed:**
  * Studio quality or natural macro photography of raw spices and agro commodities.

#### Section 4: Why Choose Us / Competitive Advantage & Metrics Strip
* **Location:** Lines 302–390
* **Text / Data Details Needed:**
  * **Export Markets Metric:** Stat displays `50+ Export Markets`. Confirm actual count.
  * **Commercial SKUs Metric:** Stat displays `100+ Commercial SKUs`. Confirm active SKU count.
  * **Product Categories Metric:** Stat displays `20+ Product Categories`. Confirm count.
  * **Farm Network:** Details on direct farmer procurement networks (number of partner farmers or mandis affiliated in AP, Gujarat, MP, Kerala, Tamil Nadu).

#### Section 5: Farm to Global Market Video Journey Section
* **Location:** Lines 392–412
* **Media & Files Needed:**
  * The section currently renders `/Sheesh_Journey.webm`. Request real video footage of client's actual sourcing fields, sorting facilities, cleaning plants, and container stuffing.

#### Section 6: Export Supply Chain 4-Step Process
* **Location:** Lines 414–416 & [`src/components/home/ProcessSection.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/home/ProcessSection.tsx)
* **Text / Data Details Needed:**
  * Verification of 4-step workflow: Direct Sourcing → Processing & QC → Custom Packaging → Global Logistics.
* **Media & Files Needed:**
  * Authentic photos for each step: (1) Farm harvest/auction yard, (2) Sortex & processing line, (3) Bagging/packing floor, (4) Sea container loading at port/CFS.

#### Section 7: Global Reach Section
* **Location:** Lines 418–450
* **Text / Data Details Needed:**
  * List of primary export destinations (continents & top countries) where Sheesh Exports actively ships.

#### Section 8: Industry Solutions Grid
* **Location:** Lines 452–508
* **Text / Data Details Needed:**
  * Confirmation of customer sectors served: Food Manufacturers, Retail Brands, HoReCa Hospitality, Importers & Distributors.
* **Media & Files Needed:**
  * Real facility photograph replacing `/images/about/factory-processing.webp`.

#### Section 9: Customer Testimonials & Google Reviews
* **Location:** Lines 510–512 & [`src/components/home/TestimonialsSection.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/home/TestimonialsSection.tsx)
* **Text / Data Details Needed:**
  * **Official Google Business Profile URL:** Needed for the `"Write a review"` link (currently `#`).
  * **Actual Google Review Rating & Count:** Currently hardcoded to `5.0 stars` and `61 Google reviews`. Provide live profile details.
  * **Verified Client Testimonials:** Quotes, client company names, buyer titles, and countries of actual corporate customers (with permission or anonymized by country/industry).

#### Section 10: Insights, Guides & Market Updates
* **Location:** Lines 514–571
* **Text / Data Details Needed:**
  * Preferred trade publications, harvest forecasts, or market intelligence topics client wishes to promote.

#### Section 11: Sourcing & Export Queries FAQ
* **Location:** Lines 573–575
* **Text / Data Details Needed:**
  * Review and sign-off on the 5 homepage answers covering: Export commodities, Private labeling, MOQs (1x20FT FCL / mixed containers), US FDA & EU MRL compliance, and Incoterms (CIF, FOB, CFR).

#### Section 12: Contact Headquarters & Inquiry Form
* **Location:** Lines 577–595 & [`src/components/contact/ContactSection.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/contact/ContactSection.tsx)
* **Text / Data Details Needed:**
  * **Official Legal GST Number:** Current placeholder is `GST: 27ABCDE1234F1Z5`. Client MUST provide official 15-digit GSTIN.
  * **Official IEC (Import Export Code):** Current placeholder is `IEC: 0312345678`. Client MUST provide official 10-digit IEC.
  * **Departmental Inboxes:** Currently all set to `info@sheeshexports.in`. Provide dedicated inboxes for:
    * Sales & Quotations (e.g. `sales@sheeshexports.in`)
    * Export Documentation (e.g. `docs@sheeshexports.in`)
    * Quality & Compliance (e.g. `quality@sheeshexports.in`)
    * Logistics & Shipping (e.g. `logistics@sheeshexports.in`)

---

### Page 02: About Us (`/about`)
**Route:** [`src/app/(website)/about/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/about/page.tsx)

#### Section 1: Hero Section
* **Location:** Lines 73–90 & [`src/components/about/AboutHeroSwiper.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/about/AboutHeroSwiper.tsx)
* **Text / Data Details Needed:**
  * Tagline and positioning statement approval.
* **Media & Files Needed:**
  * Background video or high-resolution panoramic slides of spice aggregation / export packing.

#### Section 2: Who We Are / Corporate Profile
* **Location:** Lines 92–136
* **Text / Data Details Needed:**
  * Founding story, corporate milestone dates, and core corporate mission.
* **Media & Files Needed:**
  * Photo of company processing facility / corporate headquarters.

#### Section 3: Farm to Global Market Supply Chain (8 Stages)
* **Location:** Lines 180–224
* **Text / Data Details Needed:**
  * Sign-off on the 8 stages: Farm Sourcing → Cleaning → Sorting → Processing → Testing → Packaging → Container Loading → Global Distribution.

#### Section 4: India Origins & Terroirs
* **Location:** Lines 226–297
* **Text / Data Details Needed:**
  * Specific aggregation points and mandis used by Sheesh Exports:
    * Guntur (Andhra Pradesh) — Red Chilli varieties sourced
    * Erode & Nizamabad (Tamil Nadu & Telangana) — Turmeric fingers
    * Unjha (Gujarat) — Cumin, fennel, coriander, sesame
    * Malabar Coast (Kerala) — Black pepper, cardamom
    * Madhya Pradesh / Indore — Soya, wheat, pulses, grains
* **Media & Files Needed:**
  * Sourcing map graphic or photos of procurement at origin mandis.

#### Section 5: Quality Assurance Framework & Certifications
* **Location:** Lines 332–388
* **Text / Data Details Needed:**
  * Mandatory testing limits used (Aflatoxin ppb limits, pesticide MRLs, Salmonella 0% tolerance).
  * Names of third-party inspection agency tie-ups (e.g. SGS, Eurofins, Geo-Chem, Spices Board Lab).

#### Section 6: Industrial Infrastructure Showcase
* **Location:** Lines 390–482
* **Media & Files Needed (5 Real Operational Photos Required):**
  * `infra-processing`: Real photo of optical sortex cleaning & grinding plant.
  * `infra-warehouse`: Real photo of palletized warehousing / cold storage.
  * `infra-packaging`: Real photo of automated form-fill-seal or bulk bag sewing line.
  * `infra-testing`: Real photo of in-house quality control testing bench / laboratory.
  * `infra-loading`: Real photo of sea container stuffing and fumigation operations.

#### Section 7: Leadership Note / Executive Message
* **Location:** Lines 505–530
* **Text / Data Details Needed:**
  * **Executive Name & Title:** E.g., `Mr. Shabbar Sheikh, Founder & Managing Director`.
  * **Director's Personal Message:** Approved 2-paragraph statement regarding international trade integrity and customer commitment.
* **Media & Files Needed:**
  * Professional portrait photograph of the Managing Director / Founders.
  * Digital vector signature graphic for official stamp/endorsement aesthetic.

---

### Page 03: Quality Assurance & Laboratory Standards (`/quality`)
**Route:** [`src/app/(website)/quality/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/quality/page.tsx)

#### Section 1: Hero & Quality Approach
* **Location:** Lines 40–98
* **Text / Data Details Needed:**
  * Quality policy statement and standard operating procedures (SOP) sign-off.
* **Media & Files Needed:**
  * High-res imagery of laboratory inspection equipment (HPLC, Gas Chromatography, moisture analyzers).

#### Section 2: 9-Step QA Standard Operating Procedure
* **Location:** Lines 100–126
* **Text / Data Details Needed:**
  * Verification of the 9 QA milestones: Farm Sourcing → Incoming Inspection → Cleaning → Sorting → Lab Testing → Quality Approval → Packaging → Container Loading → Export Clearance.

#### Section 3: Laboratory Testing Parameters & Threshold Table
* **Location:** Lines 127–215
* **Text / Data Details Needed:**
  * Confirmation of standard export specification limits:
    * Moisture percentage limits (standard 10-12% across spices)
    * Total Aflatoxin (B1+B2+G1+G2) limit in ppb (e.g. <10 ppb for EU/USA)
    * Foreign matter tolerance percentage (e.g. <0.5% - 1%)
    * Heavy metals screening (Lead, Cadmium, Arsenic)
    * Microbiological tolerances (Salmonella absent in 25g, E. Coli <10 cfu/g)
* **Media & Files Needed:**
  * **Sample Certificate of Analysis (COA):** Sanitized/redacted PDF copy of an actual laboratory Certificate of Analysis issued for an export consignment, available for buyers to preview.

#### Section 4: Testing Partners & Accredited Surveyors
* **Location:** Lines 220–290
* **Text / Data Details Needed:**
  * Confirmation of accredited inspection bodies client works with (SGS, Eurofins, Bureau Veritas, Geo-Chem, Spices Board of India).

---

### Page 04: Export Process & Supply Chain Lifecycle (`/export-process`)
**Route:** [`src/app/(website)/export-process/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/export-process/page.tsx)

#### Section 1: 9-Stage Export Journey
* **Location:** Lines 16–80 & 137–260
* **Text / Data Details Needed:**
  * Validation of the 9 stages: Sourcing → Cleaning & Sorting → Lab Testing → Product Approval → Packaging → Container Planning → Documentation → Port Clearance → Global Delivery.
  * Turnaround timelines: Confirmed typical timeline from purchase order confirmation to vessel departure (e.g., 7 to 21 business days).

#### Section 2: Complete Export Documentation Checklist
* **Location:** Lines 82–91 & 262–320
* **Text / Data Details Needed:**
  * Confirmation of documentation provided with every shipment:
    1. Commercial Invoice
    2. Packing List (Net/Gross weights, dimensions, container seal numbers)
    3. Certificate of Origin (Chamber of Commerce / Spices Board)
    4. Phytosanitary Certificate (Plant Quarantine Department of India)
    5. Certificate of Analysis (CoA)
    6. Fumigation Certificate (Methyl Bromide / Phosphine treatment)
    7. Bill of Lading (Ocean B/L or Multimodal)
    8. Health Certificate / Non-GMO Certificate (where applicable)

#### Section 3: Port Operations & Shipping Lines
* **Location:** Lines 322–370
* **Text / Data Details Needed:**
  * **Primary Indian Outbound Ports Used:** Confirm primary dispatch terminals:
    * Nhava Sheva (JNPT, Mumbai)
    * Mundra Port (Gujarat)
    * Chennai Port / Krishnapatnam Port (Andhra Pradesh)
    * Inland Container Depots (ICD Indore / Pithampur, MP)
  * **Container Stuffing Guidelines:** Maximum payload per 20FT container (e.g., 14–18 MT depending on spice density) and 40FT HC container (e.g., 26–28 MT).

---

### Page 05: Certifications & Regulatory Compliance (`/certifications`)
**Route:** [`src/app/(website)/certifications/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/certifications/page.tsx)

#### Section 1: Regulatory Directory (8 Certifications)
* **Location:** Lines 16–57 & 152–240
* **Text / Data Details Needed:**
  * Official certificate numbers, registration IDs, and validity expiration dates for each of the following:
    1. **APEDA:** RCMC Registration Number & Expiration Date
    2. **Spices Board of India:** CRES / Exporter Registration Number
    3. **FSSAI:** 14-digit Central Manufacturing & Export License Number
    4. **FIEO:** Federation of Indian Export Organisations Membership ID
    5. **IEC:** Directorate General of Foreign Trade (DGFT) 10-digit Code
    6. **MSME / Udyam:** Ministry of MSME Registration ID
    7. **GST:** 15-digit GSTIN Registration ID
    8. **Star Export House:** Directorate General of Foreign Trade status recognition certificate level (if awarded)
    9. **ISO 22000 / HACCP:** Accredited Registrar name & Certificate Validity
    10. **US FDA:** US FDA Food Facility Registration Number (FFRN) & DUNS Number
    11. **Halal / Kosher:** Certifying agency name & Certificate ID
* **Media & Files Needed:**
  * High-resolution PDF copies or official high-res scans of each certificate for verification and buyer download.

#### Section 2: Global Market Compliance Matrix
* **Location:** Lines 59–65 & 242–300
* **Text / Data Details Needed:**
  * Verification of market compliance requirements for USA (FDA, ASTA), European Union (EC Regulations, ESA, MRLs), UAE / Saudi Arabia (SFDA, ESMA, Halal), and United Kingdom (FSA).

---

### Page 06: Individual Certification Detail Pages (`/certifications/[slug]`)
**Route:** [`src/app/(website)/certifications/[slug]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/certifications/%5Bslug%5D/page.tsx)
*(Dynamic template rendering APEDA, FSSAI, Spices Board, ISO, FDA, etc.)*

* **Text / Data Details Needed (Per Certificate):**
  * Exact Certificate Number (currently placeholder `SHEX-99842-2024`).
  * Exact Issuing Body & Accreditation Agency.
  * Valid From date & Valid Until / Renewal date.
  * Registered facility address stated on the official certificate.
  * Exact scope of commodities covered under each registration.
* **Media & Files Needed:**
  * Downloadable authenticated PDF certificate file for each slug (`/pdfs/certificates/apeda.pdf`, etc.).

---

### Page 07: Product Categories Hub (`/categories`)
**Route:** [`src/app/(website)/categories/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/categories/page.tsx)

#### Section 1: Hero & Category Index
* **Location:** Lines 20–49
* **Text / Data Details Needed:**
  * Confirmation of 12 active commercial categories:
    1. Whole Spices
    2. Powdered Spices
    3. Grains & Millets
    4. Tea & Coffee
    5. Soya Products
    6. Rice (Basmati & Non-Basmati)
    7. Dry Fruits & Nuts
    8. Pulses & Beans
    9. Herbs & Botanicals
    10. Flours & Starches
    11. Oil Seeds
    12. Other Agro Commodities

#### Section 2: "Why Source From India" Macro-Economic Editorial
* **Location:** Lines 51–84
* **Text / Data Details Needed:**
  * Review of agricultural data and FOB supply benefits.

---

### Page 08: Category Detail Pages (`/categories/[slug]`)
**Route:** [`src/app/(website)/categories/[slug]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/categories/%5Bslug%5D/page.tsx) & [`src/lib/data/categories.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/lib/data/categories.ts)

*Each of the 12 Category pages contains 12 structured sections. The following details are required for each category:*

* **Text / Data Details Needed (Per Category):**
  1. **Quick Stats:**
     * Active commercial products available count
     * Export countries served for this category
     * Minimum Order Quantity (MOQ) (e.g. 5 MT, 1x20FT FCL, LCL)
     * Lead time from order to dispatch (e.g. 10–14 days)
  2. **Regional Origins & Harvest Calendars:**
     * Harvesting period (months) & Peak export window
     * Key growing regions & mandis
  3. **Packaging Formats Offered:**
     * Specific bag types (Jute bags, Multi-wall paper, PP woven bags, Vacuum pouches, Food-grade poly-liners)
     * Available net weights (10kg, 25kg, 50kg, 1 MT Jumbo FIBC)
  4. **Key Destination Markets:** Top importing countries for this commodity group.
  5. **Target Industry Applications:** Major commercial use cases (e.g., Oleoresin extraction, Seasoning blending, Industrial sauce production, Retail packaging).
* **Media & Files Needed (Per Category):**
  * High-resolution, cinematic 16:9 banner image for each category header.

---

### Page 09: Products Catalog Directory (`/products`)
**Route:** [`src/app/(website)/products/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/products/page.tsx) & [`src/components/products/ProductCatalogClient.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/products/ProductCatalogClient.tsx)

* **Text / Data Details Needed:**
  * **Master Product Index Approval:** Confirm which of the 81 configured commodities in [`src/lib/data/products.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/lib/data/products.ts) are actively stocked, procured, and exported.
  * **Filter Attributes:** Confirmation of commercial filtering tags:
    * Forms: Whole, Ground / Powder, Crushed, Flakes, Seeds, Polished, Unpolished.
    * Certifications applicable per product.
    * Packaging availability (Bulk, Private Label, Retail).
* **Media & Files Needed:**
  * **Master Wholesale Catalog PDF:** Digital product catalog for international buyers.

---

### Page 10: Product Detail Specification Pages (`/products/[category]/[slug]`)
**Route:** [`src/app/(website)/products/[category]/[slug]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/products/%5Bcategory%5D/%5Bslug%5D/page.tsx) & [`src/components/products/pdp/*`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/products/pdp/)

*Applies to all core products (e.g., Red Chilli, Turmeric, Black Pepper, Cumin, Basmati Rice, Coriander, Sesame Seeds, Soya, Psyllium Husk).*

* **Text / Data Details Needed (Per Product):**
  1. **Nomenclature & Identifiers:**
     * English Trade Name
     * Botanical / Scientific Name
     * Harmonized System (HS) Code (6-digit / 8-digit tariff code)
  2. **Technical Laboratory Specifications (Guaranteed Parameters):**
     * Moisture % Max
     * Purity % Min
     * Extraneous / Foreign Matter % Max
     * Total Ash & Acid Insoluble Ash % Max
     * Volatile Oil content % Min (for cumin, coriander, pepper)
     * Curcumin % (Turmeric grades: Nizamabad 2.5-3.5%, Alleppey 5-6.5%)
     * Piperine % (Black Pepper: 4-6%)
     * Scoville Heat Units (SHU) & ASTA Color value (Red Chilli: Teja 75k-100k SHU, Byadgi 120-160 ASTA)
     * Grain Length & Elongation Ratio (Basmati Rice: 1121 8.35mm+)
  3. **Commercial Varieties & Grades:**
     * Distinct marketable grades exported (e.g., Teja S17 Stemless, S4 Sannam Stemless, Wrinkled 273, Bold 550 GL, FAQ vs Sortex Cleaned).
  4. **Packaging Options & Palletization:**
     * Standard bulk bag net weights (25kg / 50kg)
     * Bag material (PP, Jute, Paper, Vacuum-packed foil)
  5. **Shipping & Container Stuffing Data:**
     * 20FT FCL capacity (metric tons)
     * 40FT FCL capacity (metric tons)
     * Storage temperature & shelf life duration (e.g., 24 months in cool, dry conditions).
* **Media & Files Needed (Per Product):**
  * **Original High-Definition Product Photos:**
    * Clean macro shot on neutral background
    * Real packaging photo (in jute or printed poly bag)
    * Varietal comparison photo (e.g. Stem vs Stemless)

---

### Page 11: Industries Hub (`/industries`)
**Route:** [`src/app/(website)/industries/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/industries/page.tsx)

* **Text / Data Details Needed:**
  * Approval of the 7 commercial buyer segments:
    1. Food Manufacturing & Industrial Processing
    2. Retail & Supermarket Private Label Brands
    3. Importers, Wholesalers & Master Distributors
    4. HoReCa (Hotels, Restaurants, Catering) & Institutional Foodservice
    5. Nutraceutical, Dietary Supplements & Functional Foods
    6. Industrial Spice Blenders & Seasoning Houses
    7. Oleoresin, Essential Oil & Botanical Extractors

---

### Page 12: Industry Detail Pages (`/industries/[slug]`)
**Route:** [`src/app/(website)/industries/[slug]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/industries/%5Bslug%5D/page.tsx) & [`src/lib/data/industries.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/lib/data/industries.ts)

* **Text / Data Details Needed (Per Industry):**
  * Specific commodities most frequently procured by this sector.
  * Standard technical parameters demanded (e.g., low microbial loads, steam sterilization, custom mesh size grinding).
  * **Real Client Case Studies / Commercial Examples:**
    * Can client provide anonymized trade stories? (e.g., *"Supplying 300 MT/year of high-color chilli to a European seasoning manufacturer with 0% container rejection over 3 years"*).
* **Media & Files Needed:**
  * Real photography representing the sector (factory floor, packaging, commercial kitchens).

---

### Page 13: Export Services Overview (`/services`)
**Route:** [`src/app/(website)/services/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/services/page.tsx)

* **Text / Data Details Needed:**
  * Confirmation of 3 primary core services: Bulk Export, Private Labeling, and Mixed Container Consolidation.

---

### Page 14: Bulk Export Service (`/services/bulk-export`)
**Route:** [`src/app/(website)/services/bulk-export/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/services/bulk-export/page.tsx)

* **Text / Data Details Needed:**
  * **Container Moisture Protection Protocol:** Details on desiccants used (e.g., calcium chloride hanging poles, kraft container liners).
  * **Minimum Order Quantities:** Standard FCL requirements.
  * **Fumigation Methods:** Aluminum Phosphide or Methyl Bromide protocols used prior to ocean transit.
* **Media & Files Needed:**
  * Real photo of full container stuffing with desiccant poles installed.

---

### Page 15: Mixed Container Consolidation Service (`/services/mixed-container`)
**Route:** [`src/app/(website)/services/mixed-container/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/services/mixed-container/page.tsx)

* **Text / Data Details Needed:**
  * **Minimum Volume per SKU:** Current minimum stated is 1 to 2 MT per item in a mixed load. Confirm if accurate.
  * **Consolidation Hub Location:** Where mixed containers are physically assembled and stuffed (e.g., CFS Nhava Sheva or Indore warehouse).
  * **Single Invoicing & Documentation Workflow:** How customs clearance for multi-commodity shipments is handled.
* **Media & Files Needed:**
  * Photo showing a palletized mixed container load (e.g. spices stacked alongside pulses/rice).

---

### Page 16: Private Label & OEM Manufacturing (`/services/private-label`)
**Route:** [`src/app/(website)/services/private-label/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/services/private-label/page.tsx)

* **Text / Data Details Needed:**
  * **Packaging Formats Supported:**
    * Stand-up Pouches (Doypack, ziplock, kraft paper, metallic foil, nitrogen flushed)
    * Glass Jars (with dual-flip spice shaker caps or grinder mills)
    * PET Containers & Shakers
    * Metal / Composite Composite Cans
    * Outer cartons and shelf-ready retail display packaging
  * **Private Label Minimum Order Quantities (MOQ):** Minimum run per packaging type (e.g. 5,000 pouches, 2,500 jars).
  * **OEM Lead Time:** Timeline from buyer artwork approval to final container dispatch.
  * **Labeling & Regulatory Support:** Does client's team assist with destination FDA/EU compliant nutritional facts, ingredients declaration, and EAN/UPC barcode positioning?
* **Media & Files Needed:**
  * High-resolution photos of actual private label packaging produced by the factory (or sample showroom mockups).

---

### Page 17, 18 & 19: International Trade Hubs (`/international`, `/international/[country]`, `/international/[country]/[city]`)
**Routes:**
- [`src/app/(website)/international/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/international/page.tsx)
- [`src/app/(website)/international/[country]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/international/%5Bcountry%5D/page.tsx)
- [`src/app/(website)/international/[country]/[city]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/international/%5Bcountry%5D/%5Bcity%5D/page.tsx)
- [`src/lib/data/international.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/lib/data/international.ts)

* **Text / Data Details Needed:**
  * **Primary Active Export Corridors:**
    * **United States:** Ports: New York / New Jersey, Los Angeles / Long Beach, Houston. Confirm average ocean transit days (e.g. 30–42 days).
    * **Germany / Europe:** Port: Hamburg, Rotterdam. Confirm transit days (e.g. 25–32 days).
    * **United Arab Emirates / Middle East:** Ports: Jebel Ali (Dubai), Dammam, Jeddah. Confirm transit days (e.g. 5–9 days).
    * Additional export corridors to add: United Kingdom (Felixstowe/London Gateway), Saudi Arabia, Australia (Melbourne/Sydney), Canada (Vancouver/Montreal), Vietnam/Southeast Asia.
  * **Incoterms Supported:** Confirm acceptance of FOB, CIF, CFR, EXW.
  * **Payment Methods Accepted:** Confirm accepted terms: Irrevocable Letter of Credit (L/C at sight), Telegraphic Transfer (T/T advance + against B/L copy), Documents Against Payment (DP).

---

### Page 20 & 21: Authority Landing Pages (`/exporters-in-india`, `/indian-exporter`)
**Routes:**
- [`src/app/(website)/exporters-in-india/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/exporters-in-india/page.tsx)
- [`src/app/(website)/indian-exporter/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/indian-exporter/page.tsx)

* **Text / Data Details Needed:**
  * Verification of company credentials and direct mandi integration facts to ensure 100% truthful representation for international corporate buyers conducting vendor audits.

---

### Page 22, 23 & 24: B2B Export Intelligence Platform (`/blog`, `/blog/category/[slug]`, `/blog/[slug]`)
**Routes:**
- [`src/app/(website)/blog/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/blog/page.tsx)
- [`src/app/(website)/blog/category/[slug]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/blog/category/%5Bslug%5D/page.tsx)
- [`src/app/(website)/blog/[slug]/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/blog/%5Bslug%5D/page.tsx)
- [`src/lib/data/blog.ts`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/lib/data/blog.ts)

* **Text / Data Details Needed:**
  * **Author Names & Bio Details:** Name of company spokespersons, founders, or trade analysts to attribute intelligence articles to (e.g., Managing Director, Head of Quality, Head of Export Logistics).
  * **Proprietary Market Data:** Any proprietary monthly crop reports, spice harvest season forecasts, or mandi pricing insights client produces.
* **Media & Files Needed:**
  * Author portrait photos for author cards.
  * Real market photos (Guntur chilli yard, Erode turmeric mandi, container stuffing) to replace external Unsplash URLs.

---

### Page 25: Contact Us (`/contact`)
**Route:** [`src/app/(website)/contact/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/contact/page.tsx) & [`src/components/contact/ContactSection.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/components/contact/ContactSection.tsx)

* **Text / Data Details Needed:**
  * **Headquarters Physical Address:** Confirm full street address, landmark, city, state, postal PIN code.
  * **Factory / Processing Unit Address:** Address of the cleaning/sorting/packaging facility if separate from the corporate office.
  * **Central Telephone & Mobile Numbers:** Primary export desk telephone with country code (`+91`).
  * **WhatsApp Business Helpline:** Active number and handling hours.
  * **Working Hours & Days:**
    * Monday to Saturday: e.g., 09:30 AM – 06:30 PM (IST)
    * Sunday / Public Holidays: On-call emergency dispatch for active shipments?
  * **Sample Dispatch Policy:**
    * Are commercial samples free of cost (FOC) for verified buyers?
    * Courier accounts used (DHL, FedEx, Aramex) and international dispatch transit times (usually 3–5 days).

---

### Page 26: Request For Quotation (RFQ) System (`/request-quote`)
**Route:** [`src/app/(website)/request-quote/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/request-quote/page.tsx)

* **Text / Data Details Needed:**
  * **Internal RFQ Routing Email:** Specific mailbox where multi-step RFQ submissions should be delivered (e.g. `rfq@sheeshexports.in` or `sales@sheeshexports.in`).
  * **CRM or Webhook Integration:** Does client use a CRM (Zoho, HubSpot, Salesforce) or want direct WhatsApp notifications for new inquiries?
  * **Quotation Turnaround Guarantee:** Confirmed SLA for delivering formal Proforma Invoices (e.g. within 12 hours / 24 hours).
* **Media & Files Needed:**
  * Sample photos for Cumin, Coriander, Sesame Seeds in the RFQ product selector to replace placeholder icons.

---

### Page 27: Investor Relations & Corporate Disclosures (`/investor`)
**Route:** [`src/app/(website)/investor/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/investor/page.tsx)

*This page contains extensive statutory corporate governance, board committee, and IPO/shareholder data.*

#### 1. Corporate Identifiers & Listing Status
* **Location:** Lines 37–56
* **Text / Data Details Needed:**
  * **Corporate Identification Number (CIN):** Currently placeholder `U01100KA2021PTC147820`. Provide official 21-digit CIN issued by MCA/ROC.
  * **Date of Incorporation & ROC Jurisdiction:** (e.g., Registrar of Companies, Gwalior/Indore, Madhya Pradesh).
  * **Exchange Listing Status:** Confirm listing status (Private Limited, Unlisted Public, IPO-bound on NSE/BSE).

#### 2. Board of Directors & Key Managerial Personnel (KMP)
* **Location:** Lines 217–289
* **Text / Data Details Needed (For every Director & Officer):**
  * Full Legal Name
  * Exact Designation: (Managing Director, Whole-Time Director, Independent Director, CFO, Company Secretary)
  * Director Identification Number (DIN)
  * Official corporate email address
  * Professional biography summary
* **Media & Files Needed:**
  * Professional executive headshots / photos for each Director and KMP.

#### 3. Board Committees
* **Location:** Lines 292–350
* **Text / Data Details Needed:**
  * Membership rosters and designated Chairpersons for:
    * Audit Committee
    * Nomination & Remuneration Committee
    * Stakeholders Relationship Committee
    * Corporate Social Responsibility (CSR) Committee

#### 4. Statutory PDF Documents & Policies (File Uploads Required)
* **Location:** Lines 97–212, 355–412, 415–482, 485–525
* **Files Needed (Official Signed PDF Documents):**
  * **Offer Documents:** DRHP, RHP, Prospectus, Abridged Prospectus (if applicable).
  * **Annual Reports & Returns:** Audited Annual Reports for FY 2021-22, FY 2022-23, FY 2023-24, FY 2024-25, FY 2025-26.
  * **Financial Statements:** Independent Auditor's Reports, Balance Sheets, Profit & Loss Statements, Restated Financials, AGM Notices.
  * **12 Mandatory Corporate Policies (PDFs):**
    1. CSR Policy
    2. Archival Policy
    3. Code for Independent Directors
    4. Code of Conduct for Directors & Senior Management
    5. Familiarization Programmes for Independent Directors
    6. Nomination & Remuneration Policy
    7. Code of Conduct for Prevention of Insider Trading
    8. Related Party Transactions (RPT) Policy
    9. Whistle Blower / Vigil Mechanism Policy
    10. Risk Management Policy
    11. Policy on Determination of Materiality of Events
    12. Dividend Distribution Policy
  * **Material Legal Documents & Contracts (PDFs):**
    * Memorandum of Association (MOA)
    * Articles of Association (AOA)
    * Certificate of Incorporation (COI)
    * Statutory Auditor Consent Letter
    * Relevant Issue & Banker Agreements

#### 5. Investor Contact & Registrar and Share Transfer Agent (RTA)
* **Location:** Lines 530–600
* **Text / Data Details Needed:**
  * **Company Secretary & Compliance Officer:** Official Name, Phone, Email.
  * **Registrar and Share Transfer Agent (RTA):** Confirm official RTA name, SEBI registration number, registered office address, contact person, telephone, and email (currently set to Purva Sharegistry).

---

### Page 28: Privacy Policy (`/privacy-policy`)
**Route:** [`src/app/(website)/privacy-policy/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/privacy-policy/page.tsx)

* **Text / Data Details Needed:**
  * Comprehensive legal Privacy Policy approved by client's legal counsel, specifying commercial inquiry data storage, GDPR compliance for European importers, cookie policies, and non-disclosure of buyer proprietary formulations/pricing.

---

### Page 29: Terms of International Trade (`/terms`)
**Route:** [`src/app/(website)/terms/page.tsx`](file:///d:/CODING/NavigoTech%20Innovation/SheeshExports/shees-exports-v1/src/app/%28website%29/terms/page.tsx)

* **Text / Data Details Needed:**
  * Formal commercial sales terms and conditions governed by Incoterms 2020:
    * Standard payment milestones (e.g. 30% advance, 70% against BL or 100% L/C at sight)
    * Sampling and tolerance policies (weight variation, moisture gain during voyage)
    * Demurrage, detention, and force majeure clauses
    * Dispute resolution mechanism and arbitration seat (e.g. Arbitration Council of India / High Court of Madhya Pradesh / ICC).

---

## Master Checklist for Client Handover

Please review and provide the required assets according to the checklist below:

### 1. Corporate Identity & Legal Identifiers
- [ ] 15-digit GSTIN Certificate & Number
- [ ] 10-digit Import Export Code (IEC) Certificate & Number
- [ ] APEDA RCMC Registration Certificate & Number
- [ ] Spices Board of India CRES Registration Certificate & Number
- [ ] FSSAI Central Manufacturing & Export License Number
- [ ] US FDA Food Facility Registration Number & DUNS Number
- [ ] ISO 22000 / HACCP / Halal / Kosher Certificates
- [ ] Corporate CIN Number (for Investor section)
- [ ] Exact registered office address & facility/warehouse address

### 2. Operational Communications & Routing
- [ ] Designated central phone number with international calling capability
- [ ] Designated WhatsApp Business phone number
- [ ] Primary sales inbox for receiving RFQs & customer leads
- [ ] Departmental email addresses (Documentation, Quality, Logistics)
- [ ] Operational office timings, time zone, and weekly working days

### 3. Media & Digital Assets
- [ ] Official vector logo (SVG and high-resolution transparent PNG)
- [ ] White/inverted logo variant for dark backgrounds
- [ ] Product Catalog 2026/2027 in PDF format
- [ ] Real photos of cleaning, sortex, warehouse, and packaging facilities
- [ ] Real photos of raw spices and packaged products
- [ ] Professional portrait photo and bio of Founder / Managing Director
- [ ] Live Google Business Profile URL for client reviews

### 4. Commercial & Product Data
- [ ] Sign-off on active export SKU list (from the 81 products)
- [ ] Minimum Order Quantities (MOQ) per commodity group
- [ ] Sample Certificate of Analysis (COA) PDF for buyer preview
- [ ] Standard Incoterms (FOB/CIF/CFR) and accepted payment terms (L/C, T/T)
- [ ] Standard container stuffing payload limits (20FT / 40FT)

### 5. Corporate Governance & Statutory Files (For Investor Portal)
- [ ] Official Board of Directors & KMP names, DINs, and photos
- [ ] Annual Reports (FY 2021-22 to FY 2025-26) in PDF
- [ ] 12 Statutory Policy PDFs
- [ ] Registrar and Share Transfer Agent (RTA) appointment details
