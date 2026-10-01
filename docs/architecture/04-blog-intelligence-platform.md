# B2B Export Intelligence Content Platform

## 1. Core Objective
Create a production-grade B2B export content platform for Sheesh Exports. This is **NOT a marketing blog**. It is an export intelligence platform designed to rank for commercial intent keywords like:
- *Indian spice exporter*
- *Import Indian spices*
- *Spice market reports*
- *Spice import regulations*

The goal is to capture global buyers (B2B importers, food manufacturers, distributors) at every stage of their sourcing journey.

## 2. URL Architecture
- **Hub:** `/blog`
- **Article:** `/blog/[slug]`
- **Category:** `/blog/category/[slug]`
- *(Future)*: `/blog/tag/[slug]`
- *(Future)*: `/blog/author/[slug]`

## 3. Content Silos (The 6 Pillars)
The content strategy is divided into 6 major topical clusters.

### Silo 1: Import Guides
**Keywords:** how to import spices from india, food imports from india
**High-Value Articles:**
1. How To Import Indian Spices Into UAE
2. How To Import Indian Spices Into Saudi Arabia
3. How To Import Indian Spices Into USA
4. How To Import Indian Spices Into UK
5. How To Import Indian Spices Into Canada

### Silo 2: Product Guides
**Keywords:** best turmeric for export, types of indian chilli, indian cumin grades
**High-Value Articles:**
1. Types Of Indian Red Chilli
2. Teja Vs Byadgi Chilli
3. Indian Turmeric Finger Vs Bulb
4. Guide To Indian Cumin Seeds
5. Indian Cardamom Grades Explained

### Silo 3: Market Intelligence
**Keywords:** turmeric prices, chilli prices india, spice market report
**High-Value Articles:**
1. Indian Chilli Market Report
2. Turmeric Export Outlook
3. Cumin Market Trends
4. Global Spice Trade Analysis
5. Indian Spice Export Statistics

### Silo 4: Export Compliance
**Keywords:** FDA spice requirements, EU food import regulations, MRL requirements
**High-Value Articles:**
1. FDA Requirements For Spice Imports
2. EU Regulations For Spice Importers
3. Documents Required For Food Imports
4. Understanding MRL Standards
5. HS Codes For Indian Spices

### Silo 5: Buyer Guides
**Keywords:** best spice exporter in india, private label spices india
**High-Value Articles:**
1. How To Choose A Spice Supplier
2. Indian Manufacturer Vs Trader
3. Private Label Spice Manufacturing Guide
4. Bulk Spice Procurement Checklist
5. Questions To Ask Before Importing

### Silo 6: Industry Insights
**Keywords:** spices for food manufacturing, restaurant ingredient sourcing
**High-Value Articles:**
1. Ingredient Sourcing For Food Manufacturers
2. Spices For Seasoning Brands
3. Restaurant Supply Chain Guide
4. Bulk Ingredients For Food Processing

## 4. UI/UX Architecture

### 4.1 Blog Hub (`/blog`)
A high-end editorial layout (inspired by Bloomberg, Financial Times, McKinsey).
- **Section 1: Editorial Hero.** "Global Export Intelligence". Background uses high-quality trade/industrial imagery.
- **Section 2: Featured Intelligence.** Large 70/30 split feature card.
- **Section 3: Content Categories.** Visual cards for the 6 silos.
- **Section 4: Recent Articles.** Strict editorial grid.
- **Section 5: Trade Reports.** Horizontal timeline/carousel of market intelligence.
- **Section 6: Commercial CTA.**

### 4.2 Article Page (`/blog/[slug]`)
- **Hero:** Category, Title, Author, Date, Read Time, large cover image.
- **Quick Summary:** 5-10 key takeaway bullet points at the very top for SEO.
- **Layout:** 70% content width, 30% sticky sidebar (TOC, Request Quote, Related Products, Export Markets).
- **Inline Callouts:** Distinct blocks for "Buyer Tip", "Export Insight", "Compliance Note".
- **Dynamic Blocks:** Automated injections of Product Cards and Market Cards.
- **FAQ:** Reusable Schema-enabled FAQ section at the bottom (10-15 questions).

## 5. Schema & SEO Requirements
Every page in the blog network must output strict JSON-LD schema:
- **Articles (`/blog/[slug]`):** `BlogPosting`, `BreadcrumbList`, `FAQPage`
- **Hub/Category (`/blog`, `/blog/category/*`):** `CollectionPage`
- **Global:** `Organization`

## 6. Internal Linking Rules
Every single article **MUST** enforce the following internal linking structure:
- **3+ Product Links:** (e.g., `/products/whole-spices/red-chilli-guntur-whole`)
- **2+ International Market Links:** (e.g., `/international/uae`)
- **1+ Industry Link:** (e.g., `/industries/food-manufacturing`)
- **1+ Conversion CTA:** (`/request-quote`)

## 7. Image Strategy
Avoid generic stock photos. Use documentary/industrial style imagery (farms, warehouses, processing, ports, containers, lab testing).
- **Primary:** 16:9 Editorial Cover.
- **Supporting:** Infographics for Import Process flows, Supply Chain maps, Export Statistics, Country Trade Routes.
