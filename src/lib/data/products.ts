/**
 * ============================================================================
 * PRODUCT IMAGE FOLDER CONVENTION (read this before adding image files)
 * ============================================================================
 * Every image referenced below lives under:
 *
 *   /public/images/products/{categorySlug}/{productSlug}/{fileName}
 *
 * File naming rules used throughout this file:
 *   - Each VARIANT's main photo is named exactly after its own `slug`:
 *       {variantSlug}.jpg           e.g. teja-s17-stemless.jpg
 *   - Each PRODUCT's origin-story gallery uses 3 fixed file names, shared by
 *     all variants of that product (since they come from the same farm/region):
 *       origin-1.jpg, origin-2.jpg, origin-3.jpg
 *
 * Example — Whole Red Chilli lives at categorySlug "whole-spices" and
 * productSlug "red-chilli-guntur-whole", so its files are:
 *   /public/images/products/whole-spices/red-chilli-guntur-whole/teja-s17-stemless.jpg
 *   /public/images/products/whole-spices/red-chilli-guntur-whole/byadgi-with-stem.jpg
 *   /public/images/products/whole-spices/red-chilli-guntur-whole/origin-1.jpg
 *   /public/images/products/whole-spices/red-chilli-guntur-whole/origin-2.jpg
 *   /public/images/products/whole-spices/red-chilli-guntur-whole/origin-3.jpg
 *
 * Just drop your photos into the matching folder with the matching file name
 * and every variant/origin-story image will resolve automatically — no code
 * changes needed. Every image also now carries a real `alt` attribute for
 * accessibility and SEO instead of a bare file path.
 * ============================================================================
 */
import { CategorySlug } from "./categories";

export interface FAQ {
  question: string;
  answer: string;
}

export interface PackagingOption {
  id: string;
  name: string;
  description: string;
  moq: string;
  leadTime: string;
  bestFor: string;
}

export interface VariantAttribute {
  label: string;
  value: string;
}

export interface VariantSpecification {
  parameter: string;
  value: string;
}

/** A single image reference: where the file lives + its accessibility/SEO text. */
export interface ProductImage {
  src: string;
  alt: string;
}

export interface Variant {
  id: string;
  slug: string;
  name: string;
  shortDescription?: string;
  images: ProductImage[];
  attributes: VariantAttribute[];
  specifications: VariantSpecification[];
  originStory?: { location: string; story: string; images?: ProductImage[] };
}

export interface ShippingDetails {
  capacity20ft: string;
  capacity40ft: string;
  transitTime: string;
  exportPorts: string[];
  shippingModes: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: CategorySlug;
  botanicalName: string;
  description: string;
  seoMetaData?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  variants: Variant[];
  shipping: ShippingDetails;
  certifications: string[];
  exportMarkets: string[];
  packagingOptions: PackagingOption[];
  faqs: FAQ[];
}

/** Helper: builds the standard 3-image origin-story gallery path for a product. */
function originImages(categorySlug: string, productSlug: string, altPrefix: string): ProductImage[] {
  const base = `/images/products/${categorySlug}/${productSlug}`;
  return [
    { src: `${base}/origin-1.jpg`, alt: `${altPrefix} — farm and harvest` },
    { src: `${base}/origin-2.jpg`, alt: `${altPrefix} — traditional processing` },
    { src: `${base}/origin-3.jpg`, alt: `${altPrefix} — sorted and ready for export` },
  ];
}

export const PRODUCTS_DATA: Product[] = [
  // ==========================================================================
  // CATEGORY: Whole Spices (3 products)
  // ==========================================================================
  {
    id: "p-red-chilli-whole",
    slug: "red-chilli-guntur-whole",
    name: "Whole Red Chilli (Capsicum annuum)",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    botanicalName: "Capsicum annuum",
    seoMetaData: {
      metaTitle: "Whole Red Chilli Bulk Exporter | Guntur Red Chilli Wholesale | Sheesh Exports",
      metaDescription:
        "Leading Guntur red chilli exporter supplying premium Teja S17, Byadgi, S4 Sannam, 273 & Indo-5 varieties. GAP-certified, ASTA color tested, aflatoxin controlled for global food processors.",
      keywords: [
        "Whole Red Chilli Exporter",
        "Guntur Red Chilli Wholesale",
        "Teja S17 Stemless Bulk",
        "Byadgi Red Chilli ASTA Color",
        "S4 Sannam Red Chilli",
        "Wrinkled 273 Chilli Exporter",
        "Indian Spice Bulk Supplier",
        "Oleoresin Grade Red Chilli",
      ],
    },
    description:
      "Sheesh Exports is a premier cultivator, processor, and bulk B2B exporter of export-grade Whole Red Chillies (Capsicum annuum), operating directly out of Guntur, Andhra Pradesh—the world's largest hub for red chilli trading and export. India accounts for the largest share of global chilli production and exports, and Sheesh Exports bridges farm-level agronomy directly with international industrial buyers, oleoresin extraction plants, spice grinders, and retail packing brands across North America, Europe, the Middle East, Southeast Asia, and Africa.\n\nWe specialize in all major export-grade commercial varieties including fiery Teja S17, color-rich Byadgi, versatile S4 / Sannam (334), Wrinkled 273, and Indo-5. Sourced from GAP-certified farms, our whole chillies undergo meticulous sun-curing, mechanical destoning, cleaning, and electronic color sorting into Stemless, With Stem, and Cut pod formats.\n\nWe enforce strict compliance controls to maintain moisture below 11–12%, broken/discolored pods under 2%, and total aflatoxin/ochratoxin levels compliant with stringent EU Commission and US FDA threshold standards. Every consignment is pre-inspected by SGS/Geo-Chem, fumigated, palletized, and delivered with full APEDA traceability and Phytosanitary documentation.",
    variants: [
      {
        id: "v-teja-s17-stemless",
        slug: "teja-s17-stemless",
        name: "Teja S17 (Stemless)",
        shortDescription: "Fiery, extra-hot variety widely favored for industrial capsaicin extraction, hot sauces, and spice grinding.",
        images: [{ src: "/images/products/whole-spices/red-chilli-guntur-whole/stemless.webp", alt: "Teja S17 stemless whole red chilli pods, fiery red, ready for bulk export" }],
        attributes: [
          { label: "Color", value: "Fiery Red" },
          { label: "Heat (SHU)", value: "75,000 - 100,000" },
          { label: "ASTA Color", value: "50 - 70" },
          { label: "Format", value: "Stemless (98%+ destemmed)" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "10% - 11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Aflatoxin (B1)", value: "< 5 PPB" },
          { parameter: "Loose/Broken Pods", value: "2% Max" },
        ],
        originStory: {
          location: "Guntur, Andhra Pradesh, India",
          story:
            "Cultivated in the mineral-rich black soils of the Guntur belt under hot, dry climatic conditions, Guntur chillies are globally renowned for their unmatched heat (capsaicin) and natural color pigments. The Whole Red Chilli grade is specifically prized because it is fiery, extra-hot variety widely favored for industrial capsaicin extraction, hot sauces, and spice grinding. By pairing age-old sun-curing techniques with modern GAP-compliant farming, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: [
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-whole.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-1.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-2.webp", alt: "Guntur red chilli farms and sun-curing yards" },
          ],
        },
      },
      {
        id: "v-byadgi-with-stem",
        slug: "byadgi-with-stem",
        name: "Byadgi KDL (With Stem / Stemless)",
        shortDescription: "Deep crimson, low-heat chilli valued for high ASTA color extraction, food coloring, and oleoresin production.",
        images: [{ src: "/images/products/whole-spices/red-chilli-guntur-whole/byadgi.webp", alt: "Byadgi KDL deep crimson wrinkled whole red chillies with stem" }],
        attributes: [
          { label: "Color", value: "Deep Wrinkled Crimson" },
          { label: "Heat (SHU)", value: "8,000 - 15,000" },
          { label: "ASTA Color", value: "120 - 160+" },
          { label: "Format", value: "With Stem / Stemless available" },
        ],
        specifications: [
          { parameter: "Purity", value: "98.5% Min" },
          { parameter: "Moisture", value: "11% - 12% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Total Aflatoxin", value: "< 10 PPB" },
          { parameter: "Pod Length", value: "10 - 12 cm" },
        ],
        originStory: {
          location: "Guntur, Andhra Pradesh, India",
          story:
            "Cultivated in the mineral-rich black soils of the Guntur belt under hot, dry climatic conditions, Guntur chillies are globally renowned for their unmatched heat (capsaicin) and natural color pigments. The Byadgi KDL grade is specifically prized because it is deep crimson, low-heat chilli valued for high asta color extraction, food coloring, and oleoresin production. By pairing age-old sun-curing techniques with modern GAP-compliant farming, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: [
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-whole.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-1.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-2.webp", alt: "Guntur red chilli farms and sun-curing yards" },
          ],
        },
      },
      {
        id: "v-s4-sannam-334",
        slug: "s4-sannam-stemless",
        name: "S4 / Sannam (334) (Stemless & With Stem)",
        shortDescription: "The world's largest volume export chilli variety, known for balanced heat, medium color, and consistent quality.",
        images: [{ src: "/images/products/whole-spices/red-chilli-guntur-whole/Sannam-Stemless.webp", alt: "S4 Sannam 334 bright red whole chillies, stemless export grade" }],
        attributes: [
          { label: "Color", value: "Bright Red" },
          { label: "Heat (SHU)", value: "25,000 - 35,000" },
          { label: "ASTA Color", value: "40 - 60" },
          { label: "Format", value: "Stemless / With Stem" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Total Aflatoxin", value: "< 10 PPB" },
          { parameter: "Skin Thickness", value: "Thin to Medium" },
        ],
        originStory: {
          location: "Guntur, Andhra Pradesh, India",
          story:
            "Cultivated in the mineral-rich black soils of the Guntur belt under hot, dry climatic conditions, Guntur chillies are globally renowned for their unmatched heat (capsaicin) and natural color pigments. The S4 / Sannam grade is specifically prized because it is the world's largest volume export chilli variety, known for balanced heat, medium color, and consistent quality. By pairing age-old sun-curing techniques with modern GAP-compliant farming, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: [
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-whole.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-1.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-2.webp", alt: "Guntur red chilli farms and sun-curing yards" },
          ],
        },
      },
      {
        id: "v-wrinkled-273",
        slug: "wrinkled-273-stemless",
        name: "Wrinkled 273 (Stemless)",
        shortDescription: "Popular medium-heat variety with distinct wrinkled pericarp, excellent for blended curry powders and oleoresin.",
        images: [{ src: "/images/products/whole-spices/red-chilli-guntur-whole/wrinkled.webp", alt: "Wrinkled 273 dark red stemless whole chillies" }],
        attributes: [
          { label: "Color", value: "Dark Red" },
          { label: "Heat (SHU)", value: "15,000 - 25,000" },
          { label: "ASTA Color", value: "60 - 90" },
          { label: "Format", value: "Stemless" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" },
        ],
        originStory: {
          location: "Guntur, Andhra Pradesh, India",
          story:
            "Cultivated in the mineral-rich black soils of the Guntur belt under hot, dry climatic conditions, Guntur chillies are globally renowned for their unmatched heat (capsaicin) and natural color pigments. The Wrinkled 273 grade is specifically prized because it is popular medium-heat variety with distinct wrinkled pericarp, excellent for blended curry powders and oleoresin. By pairing age-old sun-curing techniques with modern GAP-compliant farming, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: [
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-whole.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-1.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-2.webp", alt: "Guntur red chilli farms and sun-curing yards" },
          ],
        },
      },
      {
        id: "v-indo-5",
        slug: "indo-5-with-stem",
        name: "Indo-5 / ENDO 5 (With Stem)",
        shortDescription: "Long-pod, thick-skinned variety delivering sharp pungency and ideal durability for long ocean transportation.",
        images: [{ src: "/images/products/whole-spices/red-chilli-guntur-whole/indo-5-chilli.webp", alt: "Indo-5 long-pod whole red chillies with stem, vibrant red" }],
        attributes: [
          { label: "Color", value: "Light to Vibrant Red" },
          { label: "Heat (SHU)", value: "50,000 - 65,000" },
          { label: "ASTA Color", value: "50 - 70" },
          { label: "Format", value: "With Stem" },
        ],
        specifications: [
          { parameter: "Purity", value: "98% Min" },
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Pod Length", value: "11 - 14 cm" },
        ],
        originStory: {
          location: "Guntur, Andhra Pradesh, India",
          story:
            "Cultivated in the mineral-rich black soils of the Guntur belt under hot, dry climatic conditions, Guntur chillies are globally renowned for their unmatched heat (capsaicin) and natural color pigments. The Indo-5 / ENDO 5 grade is specifically prized because it is long-pod, thick-skinned variety delivering sharp pungency and ideal durability for long ocean transportation. By pairing age-old sun-curing techniques with modern GAP-compliant farming, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: [
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-whole.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-1.webp", alt: "Guntur red chilli farms and sun-curing yards" },
            { src: "/images/products/whole-spices/red-chilli-guntur-whole/red-chilli-2.webp", alt: "Guntur red chilli farms and sun-curing yards" },
          ],
        },
      },
    ],
    shipping: {
      capacity20ft: "7 to 7.5 MT (Uncompressed Jute/PP Bags) / Up to 11 MT (Compressed Bales)",
      capacity40ft: "14 to 15 MT (Jute/PP Bags) / Up to 24 MT (High Cube Compressed Bales)",
      transitTime: "12 - 35 Days depending on port of destination",
      exportPorts: ["Krishnapatnam Port", "Chennai Port", "Visakhapatnam Port", "Nhava Sheva (JNPT)"],
      shippingModes: ["FCL (Full Container Load)", "LCL (Less Than Container Load)", "Break Bulk"],
    },
    certifications: [
      "FSSAI Certified",
      "APEDA (Ministry of Commerce India)",
      "Spices Board of India Registered Exporter",
      "ISO 22000:2018 Food Safety",
      "US FDA Registered Facility",
      "GMP & HACCP Compliant",
      "SGS / Geo-Chem Quality Certified",
    ],
    exportMarkets: [
      "United States & Canada",
      "European Union (Germany, Netherlands, UK, Spain)",
      "Middle East (UAE, Saudi Arabia, Qatar, Oman)",
      "Southeast Asia (China, Vietnam, Malaysia, Indonesia, Thailand)",
      "North & East Africa",
    ],
    packagingOptions: [
      {
        id: "pkg-raw",
        name: "Bulk Commodity Packaging (B2B Grinders & Extractors)",
        description: "Heavy-duty breathable Jute sacks, PP woven bags, or high-density hydraulic compressed bales (to maximize payload).",
        moq: "14 MT (1 x 40FT HC Container)",
        leadTime: "7 - 10 Days from order confirmation",
        bestFor: "Spice Grinders, Capsaicin Extractors, Oleoresin Manufacturers, Wholesale Importers",
      },
      {
        id: "pkg-private",
        name: "Private Label Retail & Foodservice Packaging",
        description: "Customized pouch packing, pillow bags, zip-lock stand-up pouches, or retail master cartons with customer logo and compliance labeling.",
        moq: "5 MT per variant/brand design",
        leadTime: "18 - 25 Days",
        bestFor: "Retail Brands, Supermarket Chains, Foodservice Distributors",
      },
      {
        id: "pkg-sheesh",
        name: "Sheesh Exports Branded Packaging",
        description: "Standard high-barrier export-grade 10kg/25kg branded poly-laminated multi-wall bags ready for distribution.",
        moq: "5 MT",
        leadTime: "10 Days",
        bestFor: "Regional Spice Distributors, Re-exporters, Food Processing Units",
      },
    ],
    faqs: [
      {
        question: "Which commercial red chilli varieties does Sheesh Exports export?",
        answer:
          "We export Teja S17, Byadgi KDL, S4 / Sannam (334), Wrinkled 273, and Indo-5 varieties in Stemless, With Stem, or Crush/Flake forms depending on client requirements.",
      },
      {
        question: "What is the difference between Stemless and With-Stem chillies?",
        answer:
          "Stemless chillies have the natural stem manually or mechanically removed, reducing container shipping weight, lowering waste for spice grinders, and eliminating processing steps. With-Stem chillies retain their original stem and are often preferred for whole-spice distribution.",
      },
      {
        question: "How do you ensure aflatoxin and pesticide residue limits comply with US FDA and EU standards?",
        answer:
          "Chillies are sun-dried on food-grade raised poly-tarpaulins to eliminate soil contact and fungal growth. Every lot is tested via HPLC/LC-MS-MS for aflatoxin B1/total and pesticide residues prior to dispatch.",
      },
      {
        question: "Can you increase the container loading capacity for whole chillies?",
        answer:
          "Yes. While standard loose-bagged chillies yield ~14-15 MT per 40ft HC container, we offer hydraulically compressed paper/jute bales that allow loading up to 22-24 MT per 40ft HC container, significantly reducing freight cost per metric ton.",
      },
    ],
  },

  {
    id: "p-turmeric-whole",
    slug: "turmeric-finger-guntur-whole",
    name: "Whole Turmeric Finger (Curcuma longa)",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    botanicalName: "Curcuma longa",
    seoMetaData: {
      metaTitle: "Whole Turmeric Bulk Exporter | Nizamabad & Alleppey Turmeric Wholesale | Sheesh Exports",
      metaDescription:
        "Leading Indian whole turmeric finger exporter supplying premium Nizamabad, Salem, Alleppey & Rajapore varieties. High curcumin content, GAP-certified, lead-free & ETO/Gamma sterilized for global food processors.",
      keywords: [
        "Whole Turmeric Exporter",
        "Turmeric Finger Wholesale",
        "Nizamabad Turmeric Bulk",
        "High Curcumin Alleppey Turmeric",
        "Salem Finger Turmeric",
        "Rajapore Turmeric Exporter",
        "Indian Spice Bulk Supplier",
        "Curcumin Extraction Grade Turmeric",
      ],
    },
    description:
      "Sheesh Exports is a premier cultivator, processor, and bulk B2B exporter of export-grade Whole Turmeric Fingers (Curcuma longa), sourcing directly from prime growing belts in India—the world's foremost producer, consumer, and exporter of high-grade turmeric. Sheesh Exports bridges farm-level agronomy directly with international industrial buyers, pharmaceutical extractors, spice grinders, nutraceutical manufacturers, and retail packing brands across North America, Europe, the Middle East, Southeast Asia, and Africa.\n\nWe specialize in all major export-grade commercial varieties including high-curcumin Alleppey, double-polished Nizamabad, vibrant Salem, thick-pod Rajapore, and versatile Erode turmeric. Sourced from GAP-certified farms, our turmeric fingers undergo traditional boiling, natural sun-curing, mechanical polishing, and electronic grading into Single Polished, Double Polished, and Unpolished formats.\n\nWe enforce strict compliance controls to maintain moisture below 10–12%, extraneous matter under 1%, and non-detectable levels of heavy metals (lead chromate) and Sudan dyes, fully complying with stringent EU Commission and US FDA threshold standards. Every consignment is pre-inspected by SGS/Geo-Chem, steam/ETO sterilized upon request, palletized, and delivered with full APEDA traceability and Phytosanitary documentation.",
    variants: [
      {
        id: "v-nizamabad-double-polished",
        slug: "nizamabad-double-polished",
        name: "Nizamabad Finger (Double Polished)",
        shortDescription: "Smooth, clean-surfaced golden finger widely preferred by commercial grinders and spice blending brands.",
        images: [{ src: "/images/products/whole-spices/turmeric-finger-guntur-whole/nizamabad-double-polished.webp", alt: "Nizamabad double polished golden turmeric fingers" }],
        attributes: [
          { label: "Color", value: "Bright Golden Yellow" },
          { label: "Curcumin Content", value: "2.5% - 3.5%" },
          { label: "Flavor Profile", value: "Mildly Aromatic & Earthy" },
          { label: "Format", value: "Double Polished (Smooth finish)" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "10% - 11% Max" },
          { parameter: "Foreign Matter", value: "0.5% - 1% Max" },
          { parameter: "Lead & Heavy Metals", value: "Compliant with US FDA/EU limits" },
          { parameter: "Defective/Broken Fingers", value: "2% Max" },
        ],
        originStory: {
          location: "Nizamabad & Salem Belts, India",
          story:
            "Cultivated in the fertile, well-drained loamy soils of Telangana, Tamil Nadu, and Kerala under optimal tropical climate conditions, Indian turmeric fingers are globally renowned for their rich deep-orange color, potent aroma, and superior curcuminoid bioactive profiles. The Bulk Commodity Packaging grade is specifically prized because it is smooth, clean-surfaced golden finger widely preferred by commercial grinders and spice blending brands. By pairing time-tested curing practices with modern GAP-compliant farming and processing, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: originImages("whole-spices", "turmeric-finger-guntur-whole", "Nizamabad turmeric farms, boiling and polishing units"),
        },
      },
      {
        id: "v-alleppey-high-curcumin",
        slug: "alleppey-high-curcumin",
        name: "Alleppey Finger (High Curcumin)",
        shortDescription: "Premium dark-orange turmeric with exceptional natural oil and curcumin content, ideal for extractors and nutraceuticals.",
        images: [{ src: "/images/products/whole-spices/turmeric-finger-guntur-whole/alleppey-high-curcumin.webp", alt: "Alleppey high curcumin deep orange turmeric fingers" }],
        attributes: [
          { label: "Color", value: "Deep Orange-Yellow" },
          { label: "Curcumin Content", value: "5.0% - 6.5%+" },
          { label: "Flavor Profile", value: "Pungent, Rich & Woody" },
          { label: "Format", value: "Single / Double Polished" },
        ],
        specifications: [
          { parameter: "Purity", value: "98.5% Min" },
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Total Ash", value: "7% Max" },
          { parameter: "Curcumin (HPLC)", value: "5.0% Min Guaranteed" },
        ],
        originStory: {
          location: "Nizamabad & Salem Belts, India",
          story:
            "Cultivated in the fertile, well-drained loamy soils of Telangana, Tamil Nadu, and Kerala under optimal tropical climate conditions, Indian turmeric fingers are globally renowned for their rich deep-orange color, potent aroma, and superior curcuminoid bioactive profiles. The Alleppey Finger grade is specifically prized because it is premium dark-orange turmeric with exceptional natural oil and curcumin content, ideal for extractors and nutraceuticals. By pairing time-tested curing practices with modern GAP-compliant farming and processing, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: originImages("whole-spices", "turmeric-finger-guntur-whole", "Nizamabad turmeric farms, boiling and polishing units"),
        },
      },
      {
        id: "v-salem-finger",
        slug: "salem-finger-polished",
        name: "Salem Finger (Double Polished)",
        shortDescription: "Renowned for its bright yellow hue and long finger shape, ideal for high-end retail packaging and spice mixes.",
        images: [{ src: "/images/products/whole-spices/turmeric-finger-guntur-whole/salem-finger-polished.webp", alt: "Salem double polished canary yellow turmeric fingers" }],
        attributes: [
          { label: "Color", value: "Vibrant Canary Yellow" },
          { label: "Curcumin Content", value: "3.0% - 4.0%" },
          { label: "Flavor Profile", value: "Warm & Musky" },
          { label: "Format", value: "Double Polished" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Foreign Matter", value: "0.5% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" },
          { parameter: "Finger Length", value: "5 - 8 cm" },
        ],
        originStory: {
          location: "Nizamabad & Salem Belts, India",
          story:
            "Cultivated in the fertile, well-drained loamy soils of Telangana, Tamil Nadu, and Kerala under optimal tropical climate conditions, Indian turmeric fingers are globally renowned for their rich deep-orange color, potent aroma, and superior curcuminoid bioactive profiles. The Salem Finger grade is specifically prized because it is renowned for its bright yellow hue and long finger shape, ideal for high-end retail packaging and spice mixes. By pairing time-tested curing practices with modern GAP-compliant farming and processing, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: originImages("whole-spices", "turmeric-finger-guntur-whole", "Nizamabad turmeric farms, boiling and polishing units"),
        },
      },
      {
        id: "v-rajapore-finger",
        slug: "rajapore-finger-unpolished",
        name: "Rajapore Finger (Unpolished / Polished)",
        shortDescription: "Thick, bold-sized turmeric fingers preferred for whole-spice distribution, traditional grinding, and culinary blends.",
        images: [{ src: "/images/products/whole-spices/turmeric-finger-guntur-whole/rajapore-finger-unpolished.webp", alt: "Rajapore thick unpolished turmeric fingers, deep yellow-red" }],
        attributes: [
          { label: "Color", value: "Deep Yellow-Reddish" },
          { label: "Curcumin Content", value: "3.5% - 4.5%" },
          { label: "Flavor Profile", value: "Strong Aromatic" },
          { label: "Format", value: "Unpolished & Single Polished" },
        ],
        specifications: [
          { parameter: "Purity", value: "98% Min" },
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Chalky/Under-cured Pods", value: "2% Max" },
        ],
        originStory: {
          location: "Nizamabad & Salem Belts, India",
          story:
            "Cultivated in the fertile, well-drained loamy soils of Telangana, Tamil Nadu, and Kerala under optimal tropical climate conditions, Indian turmeric fingers are globally renowned for their rich deep-orange color, potent aroma, and superior curcuminoid bioactive profiles. The Rajapore Finger grade is specifically prized because it is thick, bold-sized turmeric fingers preferred for whole-spice distribution, traditional grinding, and culinary blends. By pairing time-tested curing practices with modern GAP-compliant farming and processing, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: originImages("whole-spices", "turmeric-finger-guntur-whole", "Nizamabad turmeric farms, boiling and polishing units"),
        },
      },
      {
        id: "v-erode-finger",
        slug: "erode-finger-single-polished",
        name: "Erode Finger (Single & Double Polished)",
        shortDescription: "Globally commercialized medium-sized variety valued for standard quality consistency and industrial utility.",
        images: [{ src: "/images/products/whole-spices/turmeric-finger-guntur-whole/erode-finger-single-polished.webp", alt: "Erode bright yellow turmeric fingers, single and double polished" }],
        attributes: [
          { label: "Color", value: "Bright Yellow" },
          { label: "Curcumin Content", value: "2.5% - 3.5%" },
          { label: "Flavor Profile", value: "Mild Earthy" },
          { label: "Format", value: "Single & Double Polished" },
        ],
        specifications: [
          { parameter: "Purity", value: "98.5% Min" },
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Pod Length", value: "4 - 7 cm" },
        ],
        originStory: {
          location: "Nizamabad & Salem Belts, India",
          story:
            "Cultivated in the fertile, well-drained loamy soils of Telangana, Tamil Nadu, and Kerala under optimal tropical climate conditions, Indian turmeric fingers are globally renowned for their rich deep-orange color, potent aroma, and superior curcuminoid bioactive profiles. The Erode Finger grade is specifically prized because it is globally commercialized medium-sized variety valued for standard quality consistency and industrial utility. By pairing time-tested curing practices with modern GAP-compliant farming and processing, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
          images: originImages("whole-spices", "turmeric-finger-guntur-whole", "Nizamabad turmeric farms, boiling and polishing units"),
        },
      },
    ],
    shipping: {
      capacity20ft: "17 to 18 MT (PP/Jute Bags)",
      capacity40ft: "26 to 27 MT (High Cube - PP/Jute Bags or Palletized)",
      transitTime: "12 - 35 Days depending on port of destination",
      exportPorts: ["Chennai Port", "Tuticorin Port", "Visakhapatnam Port", "Nhava Sheva (JNPT)"],
      shippingModes: ["FCL (Full Container Load)", "LCL (Less Than Container Load)", "Break Bulk"],
    },
    certifications: [
      "FSSAI Certified",
      "APEDA (Ministry of Commerce India)",
      "Spices Board of India Registered Exporter",
      "ISO 22000:2018 Food Safety",
      "US FDA Registered Facility",
      "GMP & HACCP Compliant",
      "SGS / Geo-Chem Quality Certified",
    ],
    exportMarkets: [
      "United States & Canada",
      "European Union (Germany, Netherlands, UK, France)",
      "Middle East (UAE, Saudi Arabia, Iran, Oman)",
      "Southeast Asia (Japan, Malaysia, Indonesia, Vietnam)",
      "North & East Africa",
    ],
    packagingOptions: [
      {
        id: "pkg-raw",
        name: "Bulk Commodity Packaging (B2B Grinders & Extractors)",
        description: "Heavy-duty multi-wall Jute sacks or PP woven bags with inner liner (25kg/50kg) or 500kg Jumbo FIBC bags.",
        moq: "18 MT (1 x 20FT FCL Container)",
        leadTime: "7 - 10 Days from order confirmation",
        bestFor: "Spice Grinders, Curcumin Extractors, Nutraceutical Manufacturers, Wholesale Importers",
      },
      {
        id: "pkg-private",
        name: "Private Label Retail & Foodservice Packaging",
        description: "Customized pouch packing, pillow bags, zip-lock stand-up pouches, or retail master cartons with customer logo and compliance labeling.",
        moq: "5 MT per variant/brand design",
        leadTime: "18 - 25 Days",
        bestFor: "Retail Brands, Supermarket Chains, Foodservice Distributors",
      },
      {
        id: "pkg-sheesh",
        name: "Sheesh Exports Branded Packaging",
        description: "Standard export-grade 25kg branded poly-laminated multi-wall bags ready for distribution.",
        moq: "5 MT",
        leadTime: "10 Days",
        bestFor: "Regional Spice Distributors, Re-exporters, Processing Units",
      },
    ],
    faqs: [
      {
        question: "Which commercial turmeric varieties does Sheesh Exports export?",
        answer:
          "We export Nizamabad, Alleppey, Salem, Rajapore, and Erode turmeric fingers in Single Polished, Double Polished, or Unpolished forms depending on client requirements.",
      },
      {
        question: "What is the difference between Single Polished, Double Polished, and Unpolished turmeric?",
        answer:
          "Unpolished turmeric retains its natural outer rough skin, ideal for long storage or further processing. Single Polished turmeric removes outer soil and rough skin. Double Polished turmeric undergoes thorough mechanical buffing for a smooth, bright golden finish preferred in retail and spice markets.",
      },
      {
        question: "How do you guarantee that turmeric is free from artificial colors or heavy metals?",
        answer:
          "We perform rigorous laboratory testing using HPLC and ICP-MS for every lot to ensure zero adulteration (such as lead chromate or Sudan dyes) and compliance with strict FDA and EU heavy metal thresholds.",
      },
      {
        question: "Can Sheesh Exports deliver high-curcumin turmeric for extraction purposes?",
        answer:
          "Yes, our Alleppey variety guarantees a high curcumin content ranging from 5.0% to 6.5%+, specifically sourced for pharmaceutical, supplement, and oleoresin extraction industries.",
      },
    ],
  },

  {
    id: "p-black-pepper-whole",
    slug: "black-pepper-malabar-garbled",
    name: "Whole Black Pepper (Piper nigrum)",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    botanicalName: "Piper nigrum",
    seoMetaData: {
      metaTitle: "Whole Black Pepper Bulk Exporter | Malabar Garbled Pepper Wholesale | Sheesh Exports",
      metaDescription:
        "Sheesh Exports supplies premium Malabar Garbled black pepper, bold 550 GL pepper & Malabar white pepper in bulk. High piperine, low moisture, ASTA-clean for global spice buyers.",
      keywords: [
        "Whole Black Pepper Exporter",
        "Malabar Garbled Pepper",
        "550 GL Black Pepper Bulk",
        "White Pepper Malabar",
        "Kerala Pepper Wholesale",
        "Indian Spice Bulk Supplier",
        "Piperine Rich Black Pepper",
      ],
    },
    description:
      "Sheesh Exports is a leading cultivator, processor, and bulk B2B exporter of export-grade Whole Black Pepper (Piper nigrum), the 'King of Spices', sourced directly from the perennial pepper vines of Wayanad and Idukki in the Western Ghats of Kerala—India's traditional Malabar Coast pepper belt. We supply global spice houses, seasoning manufacturers, foodservice distributors, and oleoresin extractors across North America, Europe, the Middle East, and Southeast Asia.\n\nOur portfolio includes Malabar Garbled black pepper (MG-1), Bold 550 GL heavy-density pepper prized for its high piperine content and pungency, and steam-sterilized Malabar White Pepper produced through traditional water-retting. Berries are hand-picked at optimal maturity, sun-dried on raised platforms, and mechanically garbled to remove stalks, light berries, and foreign matter.\n\nWe maintain strict quality control on bulk density (grams per litre), moisture, and piperine content, with every consignment tested for Salmonella, E. coli, and pesticide residues to meet US FDA, EU, and Codex Alimentarius standards. Shipments are steam-sterilized on request, palletized, and accompanied by full APEDA and Spices Board traceability documentation.",
    variants: [
      {
        id: "v-malabar-garbled-mg1",
        slug: "malabar-garbled-mg1",
        name: "Malabar Garbled Black Pepper (MG-1)",
        shortDescription: "The benchmark export grade — clean, uniform, heavy berries with strong natural pungency and aroma.",
        images: [{ src: "/images/products/whole-spices/black-pepper-malabar-garbled/malabar-garbled-mg1.webp", alt: "Malabar Garbled MG-1 whole black peppercorns, dark and uniform" }],
        attributes: [
          { label: "Color", value: "Dark Brown / Black" },
          { label: "Density", value: "500 - 520 g/l" },
          { label: "Piperine Content", value: "5% - 6%" },
          { label: "Format", value: "Garbled, Sun-Dried Whole Berries" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "10% - 12% Max" },
          { parameter: "Light Berries", value: "2% Max" },
          { parameter: "Extraneous Matter", value: "1% Max" },
        ],
        originStory: {
          location: "Wayanad & Idukki, Kerala, India",
          story:
            "High in the misty, monsoon-fed hills of the Western Ghats, black pepper vines climb alongside coffee and areca palms in a shaded, biodiverse ecosystem cultivated by smallholder growers for generations. The Bulk Commodity Packaging grade is specifically prized because it is the benchmark export grade — clean, uniform, heavy berries with strong natural pungency and aroma. Sheesh Exports partners directly with these Malabar Coast growers, ensuring farm-to-port traceability and consistent, chemical-free quality on every lot.",
          images: originImages("whole-spices", "black-pepper-malabar-garbled", "Wayanad pepper vine farms and sun-drying yards"),
        },
      },
      {
        id: "v-bold-550gl",
        slug: "bold-black-pepper-550gl",
        name: "Bold Black Pepper (550 GL)",
        shortDescription: "Extra-heavy, high-density berries favored by premium spice blenders and oleoresin extractors for maximum yield.",
        images: [{ src: "/images/products/whole-spices/black-pepper-malabar-garbled/bold-black-pepper-550gl.webp", alt: "Bold 550 GL heavy density black pepper berries" }],
        attributes: [
          { label: "Color", value: "Deep Black" },
          { label: "Density", value: "550 g/l Min" },
          { label: "Piperine Content", value: "6%+" },
          { label: "Format", value: "Garbled Whole Berries, Bold Size" },
        ],
        specifications: [
          { parameter: "Purity", value: "99.5% Min" },
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Light Berries", value: "1% Max" },
          { parameter: "Extraneous Matter", value: "0.5% Max" },
        ],
        originStory: {
          location: "Wayanad & Idukki, Kerala, India",
          story:
            "High in the misty, monsoon-fed hills of the Western Ghats, black pepper vines climb alongside coffee and areca palms in a shaded, biodiverse ecosystem cultivated by smallholder growers for generations. The Bold Black Pepper grade is specifically prized because it is extra-heavy, high-density berries favored by premium spice blenders and oleoresin extractors for maximum yield. Sheesh Exports partners directly with these Malabar Coast growers, ensuring farm-to-port traceability and consistent, chemical-free quality on every lot.",
          images: originImages("whole-spices", "black-pepper-malabar-garbled", "Wayanad pepper vine farms and sun-drying yards"),
        },
      },
      {
        id: "v-malabar-white-pepper",
        slug: "malabar-white-pepper",
        name: "Malabar White Pepper",
        shortDescription: "De-husked, water-retted pepper with a milder, cleaner heat — a staple for light-colored sauces and refined seasoning blends.",
        images: [{ src: "/images/products/whole-spices/black-pepper-malabar-garbled/malabar-white-pepper.webp", alt: "Malabar white pepper whole berries, cream colored" }],
        attributes: [
          { label: "Color", value: "Creamy White" },
          { label: "Density", value: "600 g/l Min" },
          { label: "Piperine Content", value: "5% - 6%" },
          { label: "Format", value: "Whole, Water-Retted & Sun-Dried" },
        ],
        specifications: [
          { parameter: "Purity", value: "99.5% Min" },
          { parameter: "Moisture", value: "13% Max" },
          { parameter: "Black Specks", value: "0.5% Max" },
          { parameter: "Extraneous Matter", value: "0.5% Max" },
        ],
        originStory: {
          location: "Wayanad & Idukki, Kerala, India",
          story:
            "High in the misty, monsoon-fed hills of the Western Ghats, black pepper vines climb alongside coffee and areca palms in a shaded, biodiverse ecosystem cultivated by smallholder growers for generations. The Malabar White Pepper grade is specifically prized because it is de-husked, water-retted pepper with a milder, cleaner heat — a staple for light-colored sauces and refined seasoning blends. Sheesh Exports partners directly with these Malabar Coast growers, ensuring farm-to-port traceability and consistent, chemical-free quality on every lot.",
          images: originImages("whole-spices", "black-pepper-malabar-garbled", "Wayanad pepper vine farms and sun-drying yards"),
        },
      },
    ],
    shipping: {
      capacity20ft: "16 - 17 MT (PP Bags) / Up to 19 MT (Jumbo FIBC)",
      capacity40ft: "27 - 28 MT (High Cube)",
      transitTime: "15 - 35 Days depending on port of destination",
      exportPorts: ["Cochin Port", "Tuticorin Port", "Chennai Port"],
      shippingModes: ["FCL (Full Container Load)", "LCL (Less Than Container Load)"],
    },
    certifications: [
      "FSSAI Certified",
      "APEDA (Ministry of Commerce India)",
      "Spices Board of India Registered Exporter",
      "ISO 22000:2018 Food Safety",
      "US FDA Registered Facility",
      "GMP & HACCP Compliant",
    ],
    exportMarkets: [
      "United States & Canada",
      "European Union (Germany, Netherlands, France)",
      "Middle East (UAE, Saudi Arabia)",
      "Southeast Asia (Vietnam, Malaysia, Singapore)",
    ],
    packagingOptions: [
      {
        id: "pkg-raw",
        name: "Bulk Commodity Packaging",
        description: "50kg new PP woven bags with inner liner, or 500kg/1000kg jumbo FIBC bags for large industrial buyers.",
        moq: "16 MT (1 x 20FT FCL Container)",
        leadTime: "10 - 14 Days from order confirmation",
        bestFor: "Spice Blenders, Oleoresin Extractors, Wholesale Importers",
      },
      {
        id: "pkg-private",
        name: "Private Label Retail Packaging",
        description: "Grinder jars, pouches, and printed retail cartons with customer branding and compliance labeling.",
        moq: "3 MT per variant/brand design",
        leadTime: "20 - 25 Days",
        bestFor: "Retail Brands, Specialty Food Stores",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Malabar Garbled and Bold (550 GL) pepper?",
        answer:
          "Garbled MG-1 is the standard clean export grade, while Bold 550 GL refers to higher bulk density (heavier, denser berries) preferred by buyers who want maximum piperine yield and premium visual size.",
      },
      {
        question: "Do you supply steam-sterilized pepper?",
        answer:
          "Yes, steam sterilization to reduce microbial load (Salmonella/E. coli) is available on request at no significant delay to standard lead times.",
      },
      {
        question: "Can you supply pepper in smaller MOQs for trial orders?",
        answer: "Yes, trial quantities from 1 MT are available in FIBC or drum packaging before committing to a full container order.",
      },
    ],
  },

  // ==========================================================================
  // CATEGORY: Powdered Spices (1 product)
  // ==========================================================================
  {
    id: "p-coriander-powder",
    slug: "coriander-powder-ground-dhania",
    name: "Coriander Powder (Ground Dhania)",
    category: "Powdered Spices",
    categorySlug: "powdered-spices",
    botanicalName: "Coriandrum sativum",
    seoMetaData: {
      metaTitle: "Coriander Powder Bulk Exporter | Ground Dhania Wholesale | Sheesh Exports",
      metaDescription:
        "Sheesh Exports supplies bulk coriander powder ground from Rajasthan & Madhya Pradesh coriander seed — fine and coarse grades, high volatile oil, aflatoxin-tested for global food manufacturers.",
      keywords: [
        "Coriander Powder Exporter",
        "Ground Dhania Bulk",
        "Coriander Powder Wholesale India",
        "Indian Spice Powder Supplier",
        "Roasted Coriander Powder",
      ],
    },
    description:
      "Sheesh Exports is a bulk B2B exporter of premium Coriander Powder (ground Dhania), milled from sun-dried coriander seed sourced from the coriander belts of Rajasthan, Madhya Pradesh, and Gujarat—together the source of the vast majority of India's coriander crop. Our powder is a staple ingredient for curry powder blends, sausage and meat seasoning, snack manufacturing, and sauce production across global food processing industries.\n\nWe process whole coriander seed through cleaning, destoning, and controlled-temperature grinding in hygienic, dust-free milling facilities to preserve the seed's natural citrus-floral aroma and volatile oil content. Fine, coarse, and lightly roasted grades are available to match specific culinary and industrial applications.\n\nEvery batch is tested for volatile oil content, microbial load, and pesticide residues, and processed with steam sterilization or ETO treatment on request to meet US FDA and EU microbiological standards. Shipments are vacuum or nitrogen-flushed where required to preserve aroma during long transit, with full APEDA and Spices Board traceability documentation.",
    variants: [
      {
        id: "v-coriander-powder-fine",
        slug: "coriander-powder-fine",
        name: "Coriander Powder (Fine Ground)",
        shortDescription: "Finely milled, free-flowing powder ideal for spice blends, seasoning mixes, and packaged retail sachets.",
        images: [{ src: "/images/products/powdered-spices/coriander-powder-ground-dhania/coriander-powder-fine.webp", alt: "Fine ground coriander powder, light green-brown, in bulk" }],
        attributes: [
          { label: "Color", value: "Light Greenish Brown" },
          { label: "Mesh Size", value: "60 - 80 Mesh" },
          { label: "Volatile Oil", value: "0.3% - 0.5%" },
          { label: "Aroma", value: "Fresh, Citrusy, Mild" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "9% - 10% Max" },
          { parameter: "Total Ash", value: "6.5% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" },
        ],
        originStory: {
          location: "Kota & Baran, Rajasthan, India",
          story:
            "Coriander thrives as a winter Rabi crop across the sandy loam plains of Rajasthan and Madhya Pradesh, where cool nights and dry harvest-time weather develop the seed's characteristic sweet, citrus aroma. The Bulk Commodity Packaging grade is specifically prized because it is finely milled, free-flowing powder ideal for spice blends, seasoning mixes, and packaged retail sachets. After harvest, seeds are sun-dried in open yards before being routed to our grinding units, where controlled low-temperature milling protects the delicate volatile oils that give coriander powder its signature fragrance.",
          images: originImages("powdered-spices", "coriander-powder-ground-dhania", "Rajasthan coriander fields and seed drying yards"),
        },
      },
      {
        id: "v-coriander-powder-coarse",
        slug: "coriander-powder-coarse",
        name: "Coriander Powder (Coarse Ground)",
        shortDescription: "Coarser texture with a more pronounced bite, favored by curry powder blenders and traditional masala manufacturers.",
        images: [{ src: "/images/products/powdered-spices/coriander-powder-ground-dhania/coriander-powder-coarse.webp", alt: "Coarse ground coriander powder, textured granules" }],
        attributes: [
          { label: "Color", value: "Greenish Brown" },
          { label: "Mesh Size", value: "20 - 30 Mesh" },
          { label: "Volatile Oil", value: "0.35% - 0.55%" },
          { label: "Aroma", value: "Strong, Earthy" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "9% - 10% Max" },
          { parameter: "Total Ash", value: "6.5% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" },
        ],
        originStory: {
          location: "Kota & Baran, Rajasthan, India",
          story:
            "Coriander thrives as a winter Rabi crop across the sandy loam plains of Rajasthan and Madhya Pradesh, where cool nights and dry harvest-time weather develop the seed's characteristic sweet, citrus aroma. The Coriander Powder grade is specifically prized because it is coarser texture with a more pronounced bite, favored by curry powder blenders and traditional masala manufacturers. After harvest, seeds are sun-dried in open yards before being routed to our grinding units, where controlled low-temperature milling protects the delicate volatile oils that give coriander powder its signature fragrance.",
          images: originImages("powdered-spices", "coriander-powder-ground-dhania", "Rajasthan coriander fields and seed drying yards"),
        },
      },
      {
        id: "v-coriander-powder-roasted",
        slug: "coriander-powder-roasted",
        name: "Roasted Coriander Powder",
        shortDescription: "Lightly dry-roasted before grinding for a deeper, nutty aroma — popular for chutneys, dry rubs, and snack seasoning.",
        images: [{ src: "/images/products/powdered-spices/coriander-powder-ground-dhania/coriander-powder-roasted.webp", alt: "Roasted coriander powder, deep brown, aromatic" }],
        attributes: [
          { label: "Color", value: "Deep Brown" },
          { label: "Mesh Size", value: "40 - 60 Mesh" },
          { label: "Volatile Oil", value: "0.25% - 0.4%" },
          { label: "Aroma", value: "Nutty, Toasted" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "8% - 9% Max" },
          { parameter: "Total Ash", value: "6% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" },
        ],
        originStory: {
          location: "Kota & Baran, Rajasthan, India",
          story:
            "Coriander thrives as a winter Rabi crop across the sandy loam plains of Rajasthan and Madhya Pradesh, where cool nights and dry harvest-time weather develop the seed's characteristic sweet, citrus aroma. The Roasted Coriander Powder grade is specifically prized because it is lightly dry-roasted before grinding for a deeper, nutty aroma — popular for chutneys, dry rubs, and snack seasoning. After harvest, seeds are sun-dried in open yards before being routed to our grinding units, where controlled low-temperature milling protects the delicate volatile oils that give coriander powder its signature fragrance.",
          images: originImages("powdered-spices", "coriander-powder-ground-dhania", "Rajasthan coriander fields and seed drying yards"),
        },
      },
    ],
    shipping: {
      capacity20ft: "14 - 15 MT (25kg PP/paper bags)",
      capacity40ft: "24 - 26 MT (High Cube)",
      transitTime: "12 - 30 Days depending on port of destination",
      exportPorts: ["Mundra Port", "Nhava Sheva (JNPT)", "Kandla Port"],
      shippingModes: ["FCL (Full Container Load)", "LCL (Less Than Container Load)"],
    },
    certifications: [
      "FSSAI Certified",
      "APEDA (Ministry of Commerce India)",
      "Spices Board of India Registered Exporter",
      "ISO 22000:2018 Food Safety",
      "GMP & HACCP Compliant",
      "Halal",
    ],
    exportMarkets: [
      "United States & Canada",
      "European Union (Germany, Netherlands, UK)",
      "Middle East (UAE, Saudi Arabia, Qatar)",
      "Southeast Asia (Malaysia, Indonesia)",
    ],
    packagingOptions: [
      {
        id: "pkg-bulk-powder",
        name: "Bulk Multi-Wall Bags",
        description: "25kg kraft paper bags with inner poly liner, or 500kg jumbo FIBC bags for industrial buyers.",
        moq: "10 MT",
        leadTime: "10 - 14 Days",
        bestFor: "Food Manufacturers, Curry Powder Blenders",
      },
      {
        id: "pkg-retail-powder",
        name: "Retail Pouches & Jars",
        description: "50g to 500g printed pouches or jars packed in export master cartons, private label available.",
        moq: "3 MT per design",
        leadTime: "20 - 25 Days",
        bestFor: "Retail Brands, Supermarket Chains",
      },
    ],
    faqs: [
      {
        question: "What is the shelf life of your coriander powder?",
        answer:
          "Under proper storage away from moisture and direct sunlight, shelf life is 12 months from the date of milling; vacuum or nitrogen-flushed packaging can extend aroma retention further.",
      },
      {
        question: "Can you supply organic coriander powder?",
        answer: "Yes, NPOP/NOP/EU certified organic coriander powder is available on request with a minimum order quantity of 5 MT.",
      },
      {
        question: "Do you test for Salmonella and microbial contamination?",
        answer:
          "Yes, every batch is tested at NABL-accredited labs, and steam sterilization or ETO treatment is available to meet strict US and EU microbiological import requirements.",
      },
    ],
  },

  // ==========================================================================
  // CATEGORY: Grains & Millets
  // ==========================================================================
  {
    id: "p1",
    slug: "maize-white-yellow",
    name: "Maize (White/Yellow)",
    category: "Grains & Millets",
    categorySlug: "grains-millets",
    botanicalName: "Zea mays",
    description:
      "Sheesh Exports is a premier Indian manufacturer, processor, and bulk exporter of high-grade Yellow and White Maize (Zea mays), catering to global feed mills, food processing corporations, starch manufacturers, and brewery industries worldwide. Sourced directly from fertile agrarian belts across Madhya Pradesh, Karnataka, Maharashtra, and Bihar, our export-quality corn is harvested under optimal agro-climatic conditions and processed in advanced sortex cleaning facilities.\n\nWe offer both Food Grade Yellow/White Maize suitable for human consumption, corn meal, grits, and tortilla manufacturing, as well as high-energy Feed Grade Maize customized for poultry, cattle, and aquafeed rations. Our stringent processing protocols guarantee foreign matter below 1%, maximum moisture controlled at 14%, low broken kernels, and strict compliance with global aflatoxin standards.",
    variants: [
      {
        id: "v-yellow-maize-food",
        slug: "yellow-maize-food-grade",
        name: "Yellow Maize (Food Grade)",
        shortDescription: "Premium grade Yellow Maize (Food Grade) specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/grains-millets/maize-white-yellow/yellow-maize-food-grade.webp", alt: "Yellow food-grade maize kernels, sortex cleaned" }],
        attributes: [
          { label: "Color", value: "Bright Yellow" },
          { label: "Grade", value: "Food Grade (Sortex Cleaned)" },
          { label: "Protein", value: "8-9% Min" },
          { label: "Use Case", value: "Human Consumption, Starch" },
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "14% Max" },
          { parameter: "Broken Kernels", value: "2% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" },
        ],
        originStory: {
          location: "Madhya Pradesh, Karnataka & Bihar, India",
          story:
            "Maize is grown as a resilient Kharif crop across the black cotton soils of Madhya Pradesh and the red loamy soils of Karnataka, benefiting from the monsoon rains that support its rapid growth cycle. The Bulk Multi-Wall Bags grade is specifically prized because it is premium grade yellow maize (food grade) specifically processed and sorted for bulk b2b export. After mechanical harvesting, cobs are dried to safe moisture levels and shelled before entering our sortex facilities, where electronic color sorting removes discolored and foreign kernels to deliver a clean, export-ready grain.",
          images: originImages("grains-millets", "maize-white-yellow", "Madhya Pradesh maize fields and sortex processing"),
        },
      },
      {
        id: "v-yellow-maize-feed",
        slug: "yellow-maize-feed-grade",
        name: "Yellow Maize (Feed Grade)",
        images: [{ src: "/images/products/grains-millets/maize-white-yellow/yellow-maize-feed-grade.webp", alt: "Yellow feed-grade maize kernels for poultry and cattle feed" }],
        attributes: [
          { label: "Color", value: "Yellow" },
          { label: "Grade", value: "Feed Grade" },
          { label: "Energy", value: "High Caloric Value" },
          { label: "Use Case", value: "Poultry, Cattle Feed" },
        ],
        specifications: [
          { parameter: "Purity", value: "98% Min" },
          { parameter: "Moisture", value: "14% Max" },
          { parameter: "Broken Kernels", value: "3% Max" },
          { parameter: "Aflatoxin", value: "< 20 PPB" },
        ],
        originStory: {
          location: "Madhya Pradesh, Karnataka & Bihar, India",
          story:
            "Maize is grown as a resilient Kharif crop across the black cotton soils of Madhya Pradesh and the red loamy soils of Karnataka, benefiting from the monsoon rains that support its rapid growth cycle. After mechanical harvesting, cobs are dried to safe moisture levels and shelled before entering our sortex facilities, where electronic color sorting removes discolored and foreign kernels to deliver a clean, export-ready grain.",
          images: originImages("grains-millets", "maize-white-yellow", "Madhya Pradesh maize fields and sortex processing"),
        },
      },
    ],
    shipping: {
      capacity20ft: "24 - 26 MT (Packed in 50kg bags)",
      capacity40ft: "N/A (Weight restrictions usually apply)",
      transitTime: "10 - 30 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL", "Break Bulk Vessel"],
    },
    certifications: ["FSSAI", "ISO 22000", "APEDA", "SGS Inspected"],
    exportMarkets: ["Middle East", "Asia", "Africa"],
    packagingOptions: [
      {
        id: "pkg-bulk-bags",
        name: "Bulk Commodity Bags",
        description: "50kg PP Woven Bags or 1000kg Jumbo Tote bags.",
        moq: "100 MT",
        leadTime: "14-21 Days",
        bestFor: "Feed Mills, Starch Manufacturers",
      },
      {
        id: "pkg-bulk-vessel",
        name: "Break Bulk",
        description: "Loose bulk loading into vessel holds.",
        moq: "5,000 MT",
        leadTime: "30-45 Days",
        bestFor: "Large Scale Procurement",
      },
    ],
    faqs: [
      { question: "What is your MOQ for Maize?", answer: "Our standard MOQ is 100 Metric Tons (approx 4x20ft FCL) for containerized shipments." },
      { question: "Do you supply Non-GMO Maize?", answer: "Yes, Indian maize is strictly Non-GMO, and we provide Non-GMO certification with every shipment." },
    ],
  },

  // ==========================================================================
  // CATEGORY: Tea & Coffee
  // ==========================================================================
  {
    id: "p16",
    slug: "coffee-arabica-robusta",
    name: "Coffee (Arabica & Robusta)",
    category: "Tea & Coffee",
    categorySlug: "tea-coffee",
    botanicalName: "Coffea arabica / canephora",
    description:
      "Sheesh Exports is a premier exporter of Indian green coffee beans, sourcing directly from the lush, high-altitude estates of Coorg, Chikmagalur, and Wayanad. Indian coffee is globally celebrated for its shade-grown cultivation, intricate flavor profiles, and low acidity, making it a highly sought-after commodity for specialty roasters, commercial blenders, and instant coffee manufacturers across Europe, the Middle East, and North America.\n\nOur portfolio encompasses top-tier washed Arabica (Plantation A, B, PB) known for its sweet, aromatic, and balanced cup, as well as robust, full-bodied unwashed Robusta (Cherry AB, PB) which provides the perfect crema and strength for espresso blends. Every bean undergoes meticulous processing, including selective hand-picking, eco-friendly pulping, sun-drying on raised African beds, and rigorous optical sortexing to guarantee zero defects and consistent screen sizes.",
    variants: [
      {
        id: "v-arabica-plantation-a",
        slug: "arabica-plantation-a",
        name: "Arabica Plantation A",
        shortDescription: "Premium grade Arabica Plantation A specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/tea-coffee/coffee-arabica-robusta/arabica-plantation-a.webp", alt: "Green Arabica Plantation A coffee beans, washed grade" }],
        attributes: [
          { label: "Type", value: "Washed Arabica" },
          { label: "Screen Size", value: "17" },
          { label: "Cup Profile", value: "Sweet, Balanced, Mild Acidity" },
          { label: "Defects", value: "Zero" },
        ],
        specifications: [
          { parameter: "Moisture", value: "10-11% Max" },
          { parameter: "Triage", value: "2% Max" },
          { parameter: "Black Beans", value: "Nil" },
          { parameter: "Packaging", value: "60kg Jute Bags with GrainPro" },
        ],
        originStory: {
          location: "Coorg & Chikmagalur, Karnataka, India",
          story:
            "Cultivated under a dense canopy of shade trees alongside spices like pepper and cardamom, Indian coffee boasts a unique terroir. The Yellow Maize grade is specifically prized because it is premium grade arabica plantation a specifically processed and sorted for bulk b2b export. Our partner estates adhere to sustainable farming practices, preserving the delicate ecosystem while yielding beans of exceptional quality.",
          images: originImages("tea-coffee", "coffee-arabica-robusta", "Coorg shade-grown coffee estates and drying beds"),
        },
      },
      {
        id: "v-robusta-cherry-ab",
        slug: "robusta-cherry-ab",
        name: "Robusta Cherry AB",
        images: [{ src: "/images/products/tea-coffee/coffee-arabica-robusta/robusta-cherry-ab.webp", alt: "Green Robusta Cherry AB coffee beans, unwashed grade" }],
        attributes: [
          { label: "Type", value: "Unwashed Robusta" },
          { label: "Screen Size", value: "15-16" },
          { label: "Cup Profile", value: "Strong, Earthy, Excellent Crema" },
          { label: "Defects", value: "Minimal" },
        ],
        specifications: [
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Triage", value: "3% Max" },
          { parameter: "Black Beans", value: "1% Max" },
          { parameter: "Packaging", value: "60kg Jute Bags" },
        ],
        originStory: {
          location: "Coorg & Chikmagalur, Karnataka, India",
          story:
            "Cultivated under a dense canopy of shade trees alongside spices like pepper and cardamom, Indian coffee boasts a unique terroir. The high-altitude estates of the Western Ghats benefit from copious monsoon rains and rich organic soils. This biodiversity-friendly, shade-grown approach allows the cherries to mature slowly, developing complex sugars and nuanced flavor notes. Our partner estates adhere to sustainable farming practices, preserving the delicate ecosystem while yielding beans of exceptional quality.",
          images: originImages("tea-coffee", "coffee-arabica-robusta", "Coorg shade-grown coffee estates and drying beds"),
        },
      },
    ],
    shipping: {
      capacity20ft: "19.2 MT (320 bags of 60kg)",
      capacity40ft: "24 MT (approx)",
      transitTime: "15 - 35 Days",
      exportPorts: ["Mangalore Port", "Chennai Port", "Cochin Port"],
      shippingModes: ["FCL", "LCL"],
    },
    certifications: ["Coffee Board of India", "APEDA", "FSSAI", "ISO 22000"],
    exportMarkets: ["EU", "USA", "Middle East", "Australia"],
    packagingOptions: [
      {
        id: "pkg-jute",
        name: "Traditional Jute Bags",
        description: "60kg natural jute bags, standard for green coffee export.",
        moq: "19.2 MT (1x20ft FCL)",
        leadTime: "15-21 Days",
        bestFor: "Commercial Roasters",
      },
      {
        id: "pkg-grainpro",
        name: "GrainPro / Ecotact Bags",
        description: "Hermetically sealed liners inside jute bags to preserve freshness and moisture.",
        moq: "5 MT",
        leadTime: "15-21 Days",
        bestFor: "Specialty Coffee Roasters",
      },
    ],
    faqs: [
      { question: "Do you supply specialty grade Indian coffee?", answer: "Yes, we supply specialty graded Arabica and Robusta, including Monsooned Malabar upon request." },
      { question: "What is the standard packaging for export?", answer: "Green coffee is typically exported in 60kg jute bags, with optional GrainPro liners for enhanced quality preservation." },
    ],
  },

  {
    id: "p17",
    slug: "tea-assam-darjeeling",
    name: "Indian Tea (Assam & Darjeeling)",
    category: "Tea & Coffee",
    categorySlug: "tea-coffee",
    botanicalName: "Camellia sinensis",
    description:
      "As a leading bulk exporter of premium Indian teas, Sheesh Exports bridges the gap between historic tea estates and global beverage brands. India produces some of the most distinguished teas in the world, and our catalog encompasses the full spectrum of this rich heritage. We specialize in robust, malty Assam CTC (Crush, Tear, Curl) black teas, renowned for their strength and color, making them the preferred choice for morning blends, Karak chai, and breakfast teas globally.\n\nIn addition, we export the 'Champagne of Teas'—Darjeeling Orthodox. Grown in the misty Himalayan foothills, these teas offer delicate muscatel flavors and exquisite floral aromas. Our sourcing team rigorously evaluates cup quality, liquor, and leaf appearance, ensuring that every consignment meets strict international standards for moisture content, purity, and pesticide residues. Whether you require bulk supply for large-scale blending or premium single-estate lots for specialty retail, Sheesh Exports delivers unparalleled quality and consistency.",
    variants: [
      {
        id: "v-assam-ctc",
        slug: "assam-ctc-bopl",
        name: "Assam CTC (BOPL/BP)",
        shortDescription: "Premium grade Assam CTC (BOPL/BP) specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/tea-coffee/tea-assam-darjeeling/assam-ctc-bopl.webp", alt: "Assam CTC black tea granules, BOPL/BP grade" }],
        attributes: [
          { label: "Type", value: "Black Tea (CTC)" },
          { label: "Grade", value: "BOPL / BP" },
          { label: "Liquor", value: "Bright Red, Strong" },
          { label: "Flush", value: "Second Flush / Autumn" },
        ],
        specifications: [
          { parameter: "Moisture", value: "5% Max" },
          { parameter: "Total Ash", value: "8% Max" },
          { parameter: "Water Extract", value: "32% Min" },
          { parameter: "Packaging", value: "Paper Sacks (25-30kg)" },
        ],
        originStory: {
          location: "Assam & Darjeeling, India",
          story:
            "The tropical Brahmaputra Valley of Assam yields strong, malty leaf under intense heat and heavy monsoon rainfall, while the steep, cool slopes of Darjeeling in the Himalayan foothills foster the slow growth behind its famous muscatel character. The Robusta Cherry AB grade is specifically prized because it is premium grade assam ctc (bopl/bp) specifically processed and sorted for bulk b2b export. Sheesh Exports partners with estates that combine this tradition with modern hygiene and pesticide-controlled cultivation, ensuring consistent liquor quality in every lot.",
          images: originImages("tea-coffee", "tea-assam-darjeeling", "Assam tea gardens and Darjeeling hillside estates"),
        },
      },
      {
        id: "v-darjeeling-orthodox",
        slug: "darjeeling-orthodox",
        name: "Darjeeling Orthodox",
        images: [{ src: "/images/products/tea-coffee/tea-assam-darjeeling/darjeeling-orthodox.webp", alt: "Darjeeling Orthodox whole-leaf black tea, FTGFOP1 grade" }],
        attributes: [
          { label: "Type", value: "Black Tea (Orthodox)" },
          { label: "Grade", value: "FTGFOP1" },
          { label: "Liquor", value: "Light Amber, Muscatel" },
          { label: "Flush", value: "First / Second Flush" },
        ],
        specifications: [
          { parameter: "Moisture", value: "5% Max" },
          { parameter: "Total Ash", value: "8% Max" },
          { parameter: "Water Extract", value: "32% Min" },
          { parameter: "Packaging", value: "Vacuum Packed Cartons" },
        ],
        originStory: {
          location: "Assam & Darjeeling, India",
          story:
            "The tropical Brahmaputra Valley of Assam yields strong, malty leaf under intense heat and heavy monsoon rainfall, while the steep, cool slopes of Darjeeling in the Himalayan foothills foster the slow growth behind its famous muscatel character. Pluckers follow the time-honored 'two leaves and a bud' standard across estates with over a century of tea-growing heritage. Sheesh Exports partners with estates that combine this tradition with modern hygiene and pesticide-controlled cultivation, ensuring consistent liquor quality in every lot.",
          images: originImages("tea-coffee", "tea-assam-darjeeling", "Assam tea gardens and Darjeeling hillside estates"),
        },
      },
    ],
    shipping: {
      capacity20ft: "9-11 MT (approx)",
      capacity40ft: "20-22 MT (approx)",
      transitTime: "15 - 30 Days",
      exportPorts: ["Kolkata Port", "Haldia Port"],
      shippingModes: ["FCL", "LCL"],
    },
    certifications: ["Tea Board of India", "FSSAI", "ISO 22000", "Rainforest Alliance (on request)"],
    exportMarkets: ["Middle East", "UK", "EU", "Russia", "USA"],
    packagingOptions: [
      {
        id: "pkg-paper-sack",
        name: "Multi-wall Paper Sacks",
        description: "25kg to 35kg paper sacks with inner aluminium/poly liner, standard for CTC.",
        moq: "5 MT",
        leadTime: "14-21 Days",
        bestFor: "Tea Packers, Blenders",
      },
      {
        id: "pkg-carton",
        name: "Corrugated Cartons",
        description: "Vacuum sealed foil bags inside strong corrugated cartons for delicate orthodox teas.",
        moq: "1 MT",
        leadTime: "14-21 Days",
        bestFor: "Specialty Tea Buyers",
      },
    ],
    faqs: [
      { question: "Can you supply bespoke tea blends?", answer: "Yes, our expert tea tasters can match specific flavor profiles and create custom blends for your brand." },
      { question: "Are your teas tested for heavy metals and pesticides?", answer: "Absolutely. All export consignments are tested by NABL accredited labs to ensure compliance with EU MRLs and global safety standards." },
    ],
  },

  // ==========================================================================
  // CATEGORY: Soya Products
  // ==========================================================================
  {
    id: "p23",
    slug: "soya-chunks-tvp",
    name: "Soya Chunks (TVP)",
    category: "Soya Products",
    categorySlug: "soya-products",
    botanicalName: "Glycine max (Processed)",
    description:
      "Sheesh Exports is a prominent supplier and exporter of high-protein Soya Chunks, also known as Textured Vegetable Protein (TVP). Manufactured from defatted soy flour using advanced extrusion technology, our soya chunks are a highly versatile, nutrient-dense meat substitute gaining immense popularity in vegetarian, vegan, and health-conscious diets globally.\n\nWith a protein content exceeding 52%, low fat, and zero cholesterol, our soya chunks offer excellent water absorption, expanding significantly upon hydration while maintaining a satisfying, meat-like fibrous texture. We supply various sizes including large chunks, mini chunks, and granules, catering to diverse culinary applications from curries and stews to ready-to-eat meals and institutional feeding programs. Produced in state-of-the-art, ISO-certified facilities, our TVP guarantees strict hygiene, long shelf life, and superior nutritional integrity.",
    variants: [
      {
        id: "v-soya-chunks-large",
        slug: "soya-chunks-large",
        name: "Large Soya Chunks",
        shortDescription: "Premium grade Large Soya Chunks specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/soya-products/soya-chunks-tvp/soya-chunks-large.webp", alt: "Large textured soya protein chunks, dry, meat-substitute" }],
        attributes: [
          { label: "Size", value: "Large (20-25mm)" },
          { label: "Protein", value: "52% Min" },
          { label: "Fat", value: "1% Max" },
          { label: "Texture", value: "Fibrous, Spongy" },
        ],
        specifications: [
          { parameter: "Moisture", value: "8% Max" },
          { parameter: "Ash", value: "6% Max" },
          { parameter: "Crude Fiber", value: "3.5% Max" },
          { parameter: "Water Absorption", value: "300% Min" },
        ],
        originStory: {
          location: "Madhya Pradesh, India",
          story:
            "Known as the 'Soya Bowl of India', Madhya Pradesh produces the country's highest quality non-GMO soybeans across its fertile black cotton soils. The Darjeeling Orthodox grade is specifically prized because it is premium grade large soya chunks specifically processed and sorted for bulk b2b export. This neutralizes anti-nutritional factors while preserving high-quality plant protein, yielding a clean-tasting, highly functional ingredient ready for global export.",
          images: originImages("soya-products", "soya-chunks-tvp", "Madhya Pradesh soybean crushing and extrusion facility"),
        },
      },
      {
        id: "v-soya-granules",
        slug: "soya-granules",
        name: "Soya Granules / Mince",
        images: [{ src: "/images/products/soya-products/soya-chunks-tvp/soya-granules.webp", alt: "Fine soya granules, mince-like texture" }],
        attributes: [
          { label: "Size", value: "Fine Granules (2-4mm)" },
          { label: "Protein", value: "52% Min" },
          { label: "Fat", value: "1% Max" },
          { label: "Texture", value: "Mince-like" },
        ],
        specifications: [
          { parameter: "Moisture", value: "8% Max" },
          { parameter: "Ash", value: "6% Max" },
          { parameter: "Crude Fiber", value: "3.5% Max" },
          { parameter: "Water Absorption", value: "250% Min" },
        ],
        originStory: {
          location: "Madhya Pradesh, India",
          story:
            "Known as the 'Soya Bowl of India', Madhya Pradesh produces the country's highest quality non-GMO soybeans across its fertile black cotton soils. We source premium defatted soy flour directly from integrated crushing plants in this region, then process it through tightly temperature- and pressure-controlled extrusion. This neutralizes anti-nutritional factors while preserving high-quality plant protein, yielding a clean-tasting, highly functional ingredient ready for global export.",
          images: originImages("soya-products", "soya-chunks-tvp", "Madhya Pradesh soybean crushing and extrusion facility"),
        },
      },
    ],
    shipping: {
      capacity20ft: "7 - 8 MT (Due to low bulk density)",
      capacity40ft: "16 - 18 MT (approx)",
      transitTime: "15 - 35 Days",
      exportPorts: ["Nhava Sheva", "Mundra Port"],
      shippingModes: ["FCL"],
    },
    certifications: ["FSSAI", "ISO 22000", "Halal", "Kosher"],
    exportMarkets: ["Middle East", "Africa", "Asia"],
    packagingOptions: [
      {
        id: "pkg-bulk-soya",
        name: "Bulk PP Bags",
        description: "20kg or 25kg PP woven bags with inner PE liner to prevent moisture ingress.",
        moq: "7 MT (1x20ft)",
        leadTime: "14 Days",
        bestFor: "Food Manufacturers, Institutions",
      },
      {
        id: "pkg-retail-soya",
        name: "Retail Pouches",
        description: "200g, 500g, or 1kg printed pouches packed in master cartons (Private Label available).",
        moq: "1x20ft Container",
        leadTime: "21-28 Days",
        bestFor: "Supermarkets, FMCG Brands",
      },
    ],
    faqs: [
      { question: "Is your TVP made from Non-GMO soybeans?", answer: "Yes, all our soya products are manufactured exclusively from Non-GMO Indian soybeans." },
      { question: "What is the shelf life of soya chunks?", answer: "When stored in a cool, dry place away from direct sunlight, the shelf life is 12 months from the date of manufacture." },
    ],
  },

  // ==========================================================================
  // CATEGORY: Rice
  // ==========================================================================
  {
    id: "p27",
    slug: "basmati-rice-1121",
    name: "1121 Basmati Rice",
    category: "Rice",
    categorySlug: "rice",
    botanicalName: "Oryza sativa",
    description:
      "Sheesh Exports is a premier exporter of 1121 Basmati Rice, globally recognized as the world's longest grain rice. Cultivated in the fertile plains of Punjab and Haryana fed by Himalayan rivers, our 1121 Basmati is celebrated for its extraordinary grain length (averaging 8.35mm+ before cooking), delicate aroma, and exceptional elongation ratio, expanding up to 2.5 times its original size when cooked.\n\nWe supply all major variations including White Sella (Parboiled), Golden/Cream Sella, and Steam Basmati. Our rice undergoes rigorous processing in ultra-modern milling facilities equipped with Satake sortex machines, ensuring 100% purity, zero admixture, and absolute uniformity. Ideal for premium culinary applications such as Arabic Mandi, Kabsa, and Royal Biryani, our 1121 Basmati Rice is the first choice for fine-dining restaurants, royal caterers, and premium retail brands across the Middle East, Europe, and North America.",
    variants: [
      {
        id: "v-1121-creamy-sella",
        slug: "1121-creamy-sella",
        name: "1121 Creamy Sella",
        shortDescription: "Premium grade 1121 Creamy Sella specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/rice/basmati-rice-1121/1121-creamy-sella.webp", alt: "1121 Creamy Sella parboiled basmati rice grains" }],
        attributes: [
          { label: "Type", value: "Parboiled (Sella)" },
          { label: "Average Length", value: "8.35mm+" },
          { label: "Color", value: "Creamy / Light Yellow" },
          { label: "Elongation", value: "Excellent" },
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Broken", value: "1% Max" },
          { parameter: "Sortex", value: "100% Cleaned" },
          { parameter: "Discolor", value: "1% Max" },
        ],
        originStory: {
          location: "Punjab & Haryana, India",
          story:
            "True Basmati can only be grown in the specific geographic footprint at the foothills of the Himalayas. The Soya Granules / Mince grade is specifically prized because it is premium grade 1121 creamy sella specifically processed and sorted for bulk b2b export. Our paddy is carefully aged for a minimum of 12 months before milling, a crucial step that reduces moisture, enhances aroma, and ensures the grains remain separate and fluffy upon cooking.",
          images: originImages("rice", "basmati-rice-1121", "Punjab basmati paddy fields and aging warehouse"),
        },
      },
      {
        id: "v-1121-steam",
        slug: "1121-steam",
        name: "1121 Steam Basmati",
        images: [{ src: "/images/products/rice/basmati-rice-1121/1121-steam.webp", alt: "1121 Steam Basmati pearl white rice grains" }],
        attributes: [
          { label: "Type", value: "Steamed White" },
          { label: "Average Length", value: "8.35mm+" },
          { label: "Color", value: "Pearl White" },
          { label: "Aroma", value: "Highly Aromatic" },
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Broken", value: "1% Max" },
          { parameter: "Sortex", value: "100% Cleaned" },
          { parameter: "Discolor", value: "0.5% Max" },
        ],
        originStory: {
          location: "Punjab & Haryana, India",
          story:
            "True Basmati can only be grown in the specific geographic footprint at the foothills of the Himalayas. The combination of mineral-rich glacial waters, specific soil composition, and the unique diurnal temperature variations of Punjab and Haryana impart the distinct aroma and elongation characteristics to the 1121 variety. Our paddy is carefully aged for a minimum of 12 months before milling, a crucial step that reduces moisture, enhances aroma, and ensures the grains remain separate and fluffy upon cooking.",
          images: originImages("rice", "basmati-rice-1121", "Punjab basmati paddy fields and aging warehouse"),
        },
      },
    ],
    shipping: {
      capacity20ft: "24 - 25 MT",
      capacity40ft: "N/A (Weight limits)",
      transitTime: "15 - 30 Days",
      exportPorts: ["Mundra Port", "Kandla Port"],
      shippingModes: ["FCL"],
    },
    certifications: ["APEDA", "FSSAI", "Halal", "ISO 22000", "SGS Inspected"],
    exportMarkets: ["Saudi Arabia", "UAE", "Iran", "EU", "USA"],
    packagingOptions: [
      {
        id: "pkg-jute-rice",
        name: "Premium Jute Bags",
        description: "10kg, 20kg, or 40kg printed jute bags, traditional for premium Basmati.",
        moq: "25 MT",
        leadTime: "14-21 Days",
        bestFor: "Wholesale & Premium Retail",
      },
      {
        id: "pkg-non-woven",
        name: "Non-Woven Bags",
        description: "High-quality non-woven bags (5kg, 10kg, 20kg) with handle and zipper.",
        moq: "25 MT",
        leadTime: "21-28 Days",
        bestFor: "Supermarkets, Consumer Retail",
      },
      {
        id: "pkg-pp-rice",
        name: "BOPP / PP Bags",
        description: "Laminated BOPP bags for excellent moisture barrier and vibrant printing.",
        moq: "25 MT",
        leadTime: "21-28 Days",
        bestFor: "Mass Retail Brands",
      },
    ],
    faqs: [
      { question: "Is the rice aged?", answer: "Yes, our premium 1121 Basmati is aged for a minimum of 12 to 18 months to ensure optimum cooking results and non-sticky texture." },
      { question: "Can you pack under our private label?", answer: "Absolutely. We specialize in OEM / private label packing and can manufacture custom bags (Jute, Non-woven, BOPP) with your brand design." },
    ],
  },

  // ==========================================================================
  // CATEGORY: Dry Fruits & Nuts
  // ==========================================================================
  {
    id: "p40",
    slug: "almond-kernels",
    name: "Almond Kernels",
    category: "Dry Fruits & Nuts",
    categorySlug: "dry-fruits-nuts",
    botanicalName: "Prunus dulcis",
    description:
      "Sheesh Exports provides premium quality Almond kernels sourced from the best global orchards and processed to exacting standards. Almonds are a nutritional powerhouse, rich in healthy fats, antioxidants, vitamins, and minerals. We cater to wholesale buyers, snack manufacturers, bakeries, and cosmetic oil extractors worldwide, delivering consistent quality, crunch, and flavor.\n\nOur rigorous processing involves advanced mechanical shelling, electronic color sorting, and manual inspection to ensure uniform size, minimal scratches, and absence of bitter kernels. We offer various grades including Nonpareil Supreme, Carmel, and standard processing grades, available in different count sizes per ounce (e.g., 23-25, 27-30). Stringent moisture control and hygienic vacuum or carton packaging guarantee extended shelf life and prevent lipid oxidation during oceanic transit.",
    variants: [
      {
        id: "v-almond-nonpareil",
        slug: "almond-nonpareil",
        name: "Nonpareil Supreme",
        shortDescription: "Premium grade Nonpareil Supreme specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/dry-fruits-nuts/almond-kernels/almond-nonpareil.webp", alt: "Nonpareil Supreme almond kernels, flat, light colored" }],
        attributes: [
          { label: "Type", value: "Flat, Light Colored" },
          { label: "Size", value: "23/25, 27/30 count/oz" },
          { label: "Appearance", value: "Smooth surface, high visual appeal" },
          { label: "Use Case", value: "Premium snacking, gifting" },
        ],
        specifications: [
          { parameter: "Moisture", value: "6% Max" },
          { parameter: "Scratched/Split", value: "5% Max" },
          { parameter: "Foreign Material", value: "0.1% Max" },
          { parameter: "Purity", value: "99.9%" },
        ],
        originStory: {
          location: "Processed in India (Global Sourcing)",
          story:
            "While we source raw inshell almonds from top-tier global origins like California and Australia, the meticulous processing, grading, and sorting are conducted in our state-of-the-art facilities in India. The 1121 Steam Basmati grade is specifically prized because it is premium grade nonpareil supreme specifically processed and sorted for bulk b2b export. This dual approach allows us to leverage global crop quality while applying highly cost-effective, precise Indian processing capabilities, delivering unmatched value and customized grading to our international B2B clients.",
          images: originImages("dry-fruits-nuts", "almond-kernels", "Almond shelling and electronic sorting facility in India"),
        },
      },
      {
        id: "v-almond-carmel",
        slug: "almond-carmel",
        name: "Carmel Type",
        images: [{ src: "/images/products/dry-fruits-nuts/almond-kernels/almond-carmel.webp", alt: "Carmel type almond kernels, slightly wrinkled, darker" }],
        attributes: [
          { label: "Type", value: "Slightly wrinkled, darker" },
          { label: "Size", value: "27/30, 30/32 count/oz" },
          { label: "Flavor", value: "Rich, nutty" },
          { label: "Use Case", value: "Roasting, baking, processing" },
        ],
        specifications: [
          { parameter: "Moisture", value: "6% Max" },
          { parameter: "Scratched/Split", value: "10% Max" },
          { parameter: "Foreign Material", value: "0.1% Max" },
          { parameter: "Purity", value: "99.9%" },
        ],
        originStory: {
          location: "Processed in India (Global Sourcing)",
          story:
            "While we source raw inshell almonds from top-tier global origins like California and Australia, the meticulous processing, grading, and sorting are conducted in our state-of-the-art facilities in India. This dual approach allows us to leverage global crop quality while applying highly cost-effective, precise Indian processing capabilities, delivering unmatched value and customized grading to our international B2B clients.",
          images: originImages("dry-fruits-nuts", "almond-kernels", "Almond shelling and electronic sorting facility in India"),
        },
      },
    ],
    shipping: {
      capacity20ft: "15 - 17 MT",
      capacity40ft: "25 MT",
      transitTime: "15 - 30 Days",
      exportPorts: ["Nhava Sheva"],
      shippingModes: ["FCL"],
    },
    certifications: ["FSSAI", "ISO 22000"],
    exportMarkets: ["Middle East", "Asia", "Europe"],
    packagingOptions: [
      {
        id: "pkg-carton-almond",
        name: "Export Cartons",
        description: "22.68 kg (50 lbs) corrugated cartons with inner food-grade poly liner.",
        moq: "5 MT",
        leadTime: "14 Days",
        bestFor: "Wholesale, Processing",
      },
    ],
    faqs: [
      { question: "Do you supply blanched or sliced almonds?", answer: "Yes, we can supply value-added almond products such as blanched, sliced, and diced almonds upon specific request." },
    ],
  },

  {
    id: "p46",
    slug: "peanuts-groundnuts",
    name: "Indian Peanuts (Groundnuts)",
    category: "Dry Fruits & Nuts",
    categorySlug: "dry-fruits-nuts",
    botanicalName: "Arachis hypogaea",
    description:
      "Sheesh Exports is a significant exporter of premium Indian Peanuts (Groundnuts), sourcing predominantly from the fertile Saurashtra region of Gujarat. Indian peanuts are favored globally for their rich, nutty flavor, high oil content, and crunchy texture, making them ideal for direct snacking, peanut butter manufacturing, oil extraction, and confectionery use.\n\nWe supply both major Indian varieties: the larger, elongated 'Bold' peanuts and the smaller, rounder 'Java' peanuts. Quality and food safety are paramount in our peanut export operations. Every batch undergoes rigorous mechanized destoning, decortication, and electronic color sorting to ensure uniform size and eliminate damaged kernels. Most critically, we employ strict moisture control and comprehensive laboratory testing to guarantee our peanuts are free from Aflatoxin, fully complying with stringent European and international safety regulations.",
    variants: [
      {
        id: "v-peanut-bold",
        slug: "peanut-bold",
        name: "Bold Peanuts",
        shortDescription: "Premium grade Bold Peanuts specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/dry-fruits-nuts/peanuts-groundnuts/peanut-bold.webp", alt: "Bold long elongated peanuts, reddish brown skin" }],
        attributes: [
          { label: "Shape", value: "Long, Elongated" },
          { label: "Skin Color", value: "Reddish Brown" },
          { label: "Counts per Ounce", value: "38/42, 40/50, 50/60" },
          { label: "Use Case", value: "Roasting, Snacking" },
        ],
        specifications: [
          { parameter: "Moisture", value: "7% Max" },
          { parameter: "Admixture", value: "1% Max" },
          { parameter: "Imperfect Grains", value: "1% Max" },
          { parameter: "Aflatoxin", value: "< 5 PPB (or as required)" },
        ],
        originStory: {
          location: "Saurashtra, Gujarat, India",
          story:
            "Gujarat accounts for the lion's share of India's peanut production, and the Saurashtra region's well-drained sandy loam soils and favorable monsoon cycles create the perfect environment for robust pod development. The Carmel Type grade is specifically prized because it is premium grade bold peanuts specifically processed and sorted for bulk b2b export. Our integrated processing units near the major ports minimize transit time from factory to vessel.",
          images: originImages("dry-fruits-nuts", "peanuts-groundnuts", "Gujarat peanut farms and decortication units"),
        },
      },
      {
        id: "v-peanut-java",
        slug: "peanut-java",
        name: "Java Peanuts",
        images: [{ src: "/images/products/dry-fruits-nuts/peanuts-groundnuts/peanut-java.webp", alt: "Java round peanuts, light pink skin" }],
        attributes: [
          { label: "Shape", value: "Round" },
          { label: "Skin Color", value: "Light Pink" },
          { label: "Counts per Ounce", value: "50/60, 60/70, 70/80" },
          { label: "Use Case", value: "Peanut Butter, Confectionery" },
        ],
        specifications: [
          { parameter: "Moisture", value: "7% Max" },
          { parameter: "Admixture", value: "1% Max" },
          { parameter: "Imperfect Grains", value: "1% Max" },
          { parameter: "Aflatoxin", value: "< 5 PPB (or as required)" },
        ],
        originStory: {
          location: "Saurashtra, Gujarat, India",
          story:
            "Gujarat accounts for the lion's share of India's peanut production, and the Saurashtra region's well-drained sandy loam soils and favorable monsoon cycles create the perfect environment for robust pod development. We work closely with farming cooperatives to ensure timely harvesting and proper sun-drying, which is critical to preventing mold growth and ensuring aflatoxin-free kernels. Our integrated processing units near the major ports minimize transit time from factory to vessel.",
          images: originImages("dry-fruits-nuts", "peanuts-groundnuts", "Gujarat peanut farms and decortication units"),
        },
      },
    ],
    shipping: {
      capacity20ft: "19 MT",
      capacity40ft: "N/A",
      transitTime: "15 - 30 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL"],
    },
    certifications: ["APEDA", "FSSAI", "ISO 22000", "SGS Inspected"],
    exportMarkets: ["Indonesia", "Malaysia", "Vietnam", "Middle East", "EU"],
    packagingOptions: [
      {
        id: "pkg-jute-peanut",
        name: "Jute Bags",
        description: "50kg traditional new jute bags, highly breathable, ideal for preventing moisture buildup.",
        moq: "19 MT",
        leadTime: "15 Days",
        bestFor: "Standard Wholesale Export",
      },
      {
        id: "pkg-vacuum-peanut",
        name: "Vacuum Pack",
        description: "25kg vacuum-packed poly bags inside cartons to guarantee zero aflatoxin development.",
        moq: "19 MT",
        leadTime: "21 Days",
        bestFor: "EU Markets, Premium Buyers",
      },
    ],
    faqs: [
      {
        question: "How do you guarantee Aflatoxin limits?",
        answer: "We conduct pre-shipment tests through independent NABL/SGS labs using HPLC methods. We also offer vacuum packing to ensure conditions remain stable during transit.",
      },
    ],
  },

  // ==========================================================================
  // CATEGORY: Pulses & Beans
  // ==========================================================================
  {
    id: "p49",
    slug: "green-peas-dry",
    name: "Green Peas (Dry)",
    category: "Pulses & Beans",
    categorySlug: "pulses-beans",
    botanicalName: "Pisum sativum",
    description:
      "Sheesh Exports supplies premium quality whole dried Green Peas, a staple pulse valued globally for its high protein content, dietary fiber, and versatility. Sourced from the robust agricultural zones of Uttar Pradesh and Madhya Pradesh, our green peas are uniformly sized, vibrant in color, and free from weevil damage or fungal infection.\n\nIdeal for canning, freezing, snack roasting (like wasabi peas), and traditional curries, our green peas undergo comprehensive machine cleaning, destoning, and sortex processing. We ensure strict adherence to international grading standards, guaranteeing minimal foreign matter, split peas, or discoloration. With a long shelf life and excellent nutritional profile, our bulk green peas are a dependable commodity for global food manufacturers, distributors, and relief agencies.",
    variants: [
      {
        id: "v-whole-green-peas",
        slug: "whole-green-peas",
        name: "Whole Green Peas",
        shortDescription: "Premium grade Whole Green Peas specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/pulses-beans/green-peas-dry/whole-green-peas.webp", alt: "Whole dried green peas, vibrant green, sortex cleaned" }],
        attributes: [
          { label: "Type", value: "Whole, Unsplit" },
          { label: "Color", value: "Vibrant Green" },
          { label: "Processing", value: "Machine Cleaned & Sortexed" },
          { label: "Use Case", value: "Canning, Snacking, Curries" },
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Broken/Split", value: "2% Max" },
          { parameter: "Damage/Weevil", value: "Max 1%" },
        ],
        originStory: {
          location: "Uttar Pradesh & Madhya Pradesh, India",
          story:
            "Cultivated as a winter (Rabi) crop, Indian green peas benefit from the cool climate and fertile alluvial soils of the Gangetic plains. The Java Peanuts grade is specifically prized because it is premium grade whole green peas specifically processed and sorted for bulk b2b export. Our meticulous sorting process removes any bleached or shriveled peas, ensuring our clients receive a product that cooks evenly and presents beautifully in end-consumer products.",
          images: originImages("pulses-beans", "green-peas-dry", "Uttar Pradesh green pea fields and sorting units"),
        },
      },
    ],
    shipping: {
      capacity20ft: "24 MT",
      capacity40ft: "N/A",
      transitTime: "15 - 30 Days",
      exportPorts: ["Nhava Sheva", "Mundra Port"],
      shippingModes: ["FCL"],
    },
    certifications: ["APEDA", "FSSAI", "SGS Inspected"],
    exportMarkets: ["Middle East", "Asia", "Africa"],
    packagingOptions: [
      {
        id: "pkg-pp-peas",
        name: "PP Woven Bags",
        description: "25kg or 50kg PP woven bags, durable and cost-effective.",
        moq: "24 MT (1x20ft)",
        leadTime: "14 Days",
        bestFor: "Wholesale, Canning Industry",
      },
    ],
    faqs: [{ question: "Are these peas suitable for sprouting?", answer: "Yes, our whole green peas have high germination rates and are suitable for sprouting." }],
  },

  // ==========================================================================
  // CATEGORY: Herbs & Botanicals
  // ==========================================================================
  {
    id: "p57",
    slug: "psyllium-seed-husk",
    name: "Psyllium Seed & Husk",
    category: "Herbs & Botanicals",
    categorySlug: "herbs-botanicals",
    botanicalName: "Plantago ovata",
    description:
      "Sheesh Exports is a premier supplier of high-purity Psyllium Seeds and Psyllium Husk (Isabgol), sourced directly from the arid, sandy soils of Gujarat and Rajasthan—the global epicenter for Psyllium cultivation. Psyllium is a natural, soluble dietary fiber widely utilized in the pharmaceutical, nutraceutical, and food industries as a gentle bulk-forming laxative, cholesterol-lowering agent, and gluten-free baking binder.\n\nWe offer an array of purities ranging from 85% to 99% for both whole seeds and milled husk powder. Our state-of-the-art processing facility employs mechanical sieving, gravity separation, and sterilization techniques to eliminate sand, dust, and heavy metals, ensuring a pristine, pharmaceutical-grade product. We proudly supply both conventional and certified organic Psyllium to global pharmaceutical giants, dietary supplement brands, and health food manufacturers.",
    variants: [
      {
        id: "v-psyllium-husk-99",
        slug: "psyllium-husk-99",
        name: "Psyllium Husk 99%",
        shortDescription: "Premium grade Psyllium Husk 99% specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/herbs-botanicals/psyllium-seed-husk/psyllium-husk-99.webp", alt: "Psyllium husk 99% purity, light off-white fiber" }],
        attributes: [
          { label: "Purity", value: "99%" },
          { label: "Format", value: "Whole Husk or Powder" },
          { label: "Color", value: "Light Off-White" },
          { label: "Swell Volume", value: "50 ml/g Min" },
        ],
        specifications: [
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Total Ash", value: "4% Max" },
          { parameter: "Acid Insoluble Ash", value: "1% Max" },
          { parameter: "Heavy Metals", value: "Within USP/Ph. Eur. Limits" },
        ],
        originStory: {
          location: "Gujarat & Rajasthan, India",
          story:
            "India produces over 80% of the world's Psyllium, driven by the unique agro-climatic conditions of Gujarat and Rajasthan. The PP Woven Bags grade is specifically prized because it is premium grade psyllium husk 99% specifically processed and sorted for bulk b2b export. We partner with specialized farmer networks in Unjha and surrounding districts, ensuring sustainable harvesting and immediate post-harvest processing to preserve the crucial mucilage content of the seeds.",
          images: originImages("herbs-botanicals", "psyllium-seed-husk", "Unjha, Gujarat psyllium farms and husking mills"),
        },
      },
      {
        id: "v-psyllium-seed",
        slug: "psyllium-seed-whole",
        name: "Psyllium Seeds",
        images: [{ src: "/images/products/herbs-botanicals/psyllium-seed-husk/psyllium-seed-whole.webp", alt: "Whole psyllium seeds, pinkish brown" }],
        attributes: [
          { label: "Purity", value: "99%" },
          { label: "Format", value: "Whole Seed" },
          { label: "Color", value: "Pinkish Brown" },
          { label: "Use Case", value: "Husk Extraction, Direct Consumption" },
        ],
        specifications: [
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Extraneous Matter", value: "1% Max" },
          { parameter: "Weevil Damage", value: "Nil" },
          { parameter: "Packaging", value: "25kg Paper Bags" },
        ],
        originStory: {
          location: "Gujarat & Rajasthan, India",
          story:
            "India produces over 80% of the world's Psyllium, driven by the unique agro-climatic conditions of Gujarat and Rajasthan. The crop requires dry, cool weather during maturation and zero rainfall during harvest to prevent seed drop and spoilage. We partner with specialized farmer networks in Unjha and surrounding districts, ensuring sustainable harvesting and immediate post-harvest processing to preserve the crucial mucilage content of the seeds.",
          images: originImages("herbs-botanicals", "psyllium-seed-husk", "Unjha, Gujarat psyllium farms and husking mills"),
        },
      },
    ],
    shipping: {
      capacity20ft: "9 - 10 MT (Husk) / 19 MT (Seed)",
      capacity40ft: "19 - 21 MT (Husk)",
      transitTime: "15 - 35 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL"],
    },
    certifications: ["Organic", "FSSAI", "ISO 22000", "Halal", "Kosher"],
    exportMarkets: ["USA", "EU", "UK", "Australia"],
    packagingOptions: [
      {
        id: "pkg-paper-psyllium",
        name: "Paper Bags",
        description: "15kg or 25kg multi-wall paper bags with inner poly liner.",
        moq: "5 MT",
        leadTime: "15-20 Days",
        bestFor: "Pharmaceutical & Nutraceutical Brands",
      },
      {
        id: "pkg-jumbo-psyllium",
        name: "Jumbo Bags",
        description: "1000kg FIBC bags for bulk buyers.",
        moq: "10 MT",
        leadTime: "15-20 Days",
        bestFor: "Large Scale Extractors/Processors",
      },
    ],
    faqs: [
      {
        question: "Is your Psyllium treated for microbial loads?",
        answer: "Yes, we offer steam-sterilized (ETO-free) Psyllium husk and powder to meet strict microbiological limits for the US and EU markets.",
      },
      { question: "Can you provide Certified Organic Psyllium?", answer: "Yes, we supply NPOP/NOP/EU certified organic Psyllium." },
    ],
  },

  // ==========================================================================
  // CATEGORY: Flours & Starches
  // ==========================================================================
  {
    id: "p76",
    slug: "wheat-flour-chakki-atta",
    name: "Wheat Flour (Chakki Atta)",
    category: "Flours & Starches",
    categorySlug: "flours-starches",
    botanicalName: "Triticum aestivum (Milled)",
    description:
      "Sheesh Exports supplies premium 100% Whole Wheat Flour, traditionally known as Chakki Atta. Milled from the finest high-protein wheat grains sourced from Madhya Pradesh and Gujarat (including the renowned Sharbati wheat varieties), our Atta delivers superior taste, nutrition, and dough extensibility. Our flour is stone-ground (Chakki milled) using modern, hygienic milling technology that retains the bran and germ, ensuring the flour remains rich in dietary fiber, vitamins, and minerals.\n\nIdeal for baking soft, fluffy chapatis, rotis, parathas, and artisanal flatbreads, our Chakki Atta is a staple for the South Asian diaspora and Middle Eastern bakeries. We strictly avoid any chemical bleaching or artificial additives. Packaged under highly controlled conditions to prevent moisture ingress and pest infestation, our flour guarantees long shelf life and consistent baking performance for wholesale distributors and retail brands alike.",
    variants: [
      {
        id: "v-chakki-atta-standard",
        slug: "chakki-atta-standard",
        name: "100% Whole Wheat Atta",
        shortDescription: "Premium grade 100% Whole Wheat Atta specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/flours-starches/wheat-flour-chakki-atta/chakki-atta-standard.webp", alt: "100% whole wheat Chakki Atta flour, creamy brownish" }],
        attributes: [
          { label: "Type", value: "Stone Ground" },
          { label: "Color", value: "Creamy Brownish" },
          { label: "Protein", value: "11-12% Min" },
          { label: "Gluten", value: "8% Min" },
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Total Ash", value: "1.5% Max" },
          { parameter: "Acid Insoluble Ash", value: "0.1% Max" },
          { parameter: "Alcoholic Acidity", value: "0.1% Max" },
        ],
        originStory: {
          location: "Madhya Pradesh & Gujarat, India",
          story:
            "The 'Sharbati' wheat of Madhya Pradesh is famously known as the golden grain of India. The Psyllium Seeds grade is specifically prized because it is premium grade 100% whole wheat atta specifically processed and sorted for bulk b2b export. By combining this superior raw material with traditional slow stone-grinding principles — which prevents overheating and nutrient loss — scaled in modern hygienic facilities, we produce an Atta that honors tradition while meeting global food safety standards.",
          images: originImages("flours-starches", "wheat-flour-chakki-atta", "Madhya Pradesh Sharbati wheat fields and stone mills"),
        },
      },
    ],
    shipping: {
      capacity20ft: "24 MT",
      capacity40ft: "N/A",
      transitTime: "15 - 30 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL"],
    },
    certifications: ["FSSAI", "ISO 22000", "Halal"],
    exportMarkets: ["Middle East", "USA", "UK", "Canada", "Australia"],
    packagingOptions: [
      {
        id: "pkg-retail-atta",
        name: "Retail Pouches",
        description: "5kg and 10kg printed BOPP/PE pouches for direct retail.",
        moq: "24 MT (1x20ft)",
        leadTime: "21 Days",
        bestFor: "Supermarkets, Ethnic Grocers",
      },
      {
        id: "pkg-bulk-atta",
        name: "Bulk Sacks",
        description: "25kg or 50kg PP woven bags.",
        moq: "24 MT",
        leadTime: "14 Days",
        bestFor: "Bakeries, HORECA, Repackers",
      },
    ],
    faqs: [
      { question: "Is the flour fortified?", answer: "Our standard Chakki Atta is 100% natural without additives. However, we can provide iron and vitamin fortification upon buyer request." },
      { question: "Do you offer private labeling for flour?", answer: "Yes, we specialize in OEM packing for retail flour brands in 5kg and 10kg formats." },
    ],
  },

  // ==========================================================================
  // CATEGORY: Other
  // ==========================================================================
  {
    id: "p87",
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    category: "Other",
    categorySlug: "other",
    botanicalName: "Cocos nucifera",
    description:
      "Sheesh Exports offers premium High Fat Desiccated Coconut Powder, sourced from the lush, tropical coastlines of Kerala and Tamil Nadu. Processed from freshly selected, mature coconuts, our desiccated coconut retains its natural sweetness, rich aroma, and high nutritional value. It is a highly sought-after ingredient in the bakery, confectionery, and culinary industries worldwide, used extensively in biscuits, cakes, chocolates, and traditional curries.\n\nOur manufacturing process involves meticulous de-husking, paring, washing, and hot air drying to ensure crispness and pristine white color without the use of harsh bleaches. We guarantee a High Fat content (minimum 65%), which is critical for flavor retention and mouthfeel in baking. Available in Fine and Medium grades, our desiccated coconut is packed in moisture-proof multi-ply kraft paper bags to ensure absolute freshness and extended shelf life upon reaching international destinations.",
    variants: [
      {
        id: "v-coconut-fine",
        slug: "coconut-fine",
        name: "Fine Grade",
        shortDescription: "Premium grade Fine Grade specifically processed and sorted for bulk B2B export.",
        images: [{ src: "/images/products/other/desiccated-coconut/coconut-fine.jpg", alt: "Fine grade desiccated coconut, pure white shreds" }],
        attributes: [
          { label: "Grade", value: "Fine Shred" },
          { label: "Fat Content", value: "High Fat (65% Min)" },
          { label: "Color", value: "Pure White" },
          { label: "Flavor", value: "Sweet, Nutty, Fresh" },
        ],
        specifications: [
          { parameter: "Moisture", value: "3% Max" },
          { parameter: "Free Fatty Acid (FFA)", value: "0.3% Max" },
          { parameter: "SO2", value: "Max 50 PPM (or as per buyer)" },
          { parameter: "Coliforms", value: "Absent" },
        ],
        originStory: {
          location: "Kerala & Tamil Nadu, India",
          story:
            "Along India's lush southwestern coastline, coconut palms thrive in the humid tropical climate and sandy coastal soils of Kerala and Tamil Nadu, regions that have cultivated coconuts for generations as a cornerstone crop. The Retail Pouches grade is specifically prized because it is premium grade fine grade specifically processed and sorted for bulk b2b export. Sheesh Exports works directly with coastal processing units to guarantee freshness from grove to export container.",
          images: originImages("other", "desiccated-coconut", "Kerala coconut groves and desiccation processing plant"),
        },
      },
      {
        id: "v-coconut-medium",
        slug: "coconut-medium",
        name: "Medium Grade",
        images: [{ src: "/images/products/other/desiccated-coconut/coconut-medium.jpg", alt: "Medium grade desiccated coconut, pure white shreds" }],
        attributes: [
          { label: "Grade", value: "Medium Shred" },
          { label: "Fat Content", value: "High Fat (65% Min)" },
          { label: "Color", value: "Pure White" },
          { label: "Flavor", value: "Sweet, Nutty, Fresh" },
        ],
        specifications: [
          { parameter: "Moisture", value: "3% Max" },
          { parameter: "Free Fatty Acid (FFA)", value: "0.3% Max" },
          { parameter: "SO2", value: "Max 50 PPM" },
          { parameter: "Coliforms", value: "Absent" },
        ],
        originStory: {
          location: "Kerala & Tamil Nadu, India",
          story:
            "Along India's lush southwestern coastline, coconut palms thrive in the humid tropical climate and sandy coastal soils of Kerala and Tamil Nadu, regions that have cultivated coconuts for generations as a cornerstone crop. Mature nuts are hand-harvested, de-husked, and pared before being hot-air dried in hygienic facilities to lock in natural sweetness without any chemical bleaching. Sheesh Exports works directly with coastal processing units to guarantee freshness from grove to export container.",
          images: originImages("other", "desiccated-coconut", "Kerala coconut groves and desiccation processing plant"),
        },
      },
    ],
    shipping: {
      capacity20ft: "12 - 13 MT",
      capacity40ft: "25 - 26 MT",
      transitTime: "15 - 35 Days",
      exportPorts: ["Cochin Port", "Tuticorin Port", "Chennai Port"],
      shippingModes: ["FCL"],
    },
    certifications: ["FSSAI", "ISO 22000", "Halal", "Kosher"],
    exportMarkets: ["Middle East", "EU", "UK", "North America"],
    packagingOptions: [
      {
        id: "pkg-paper-coconut",
        name: "Kraft Paper Bags",
        description: "25kg multi-wall kraft paper bags with an inner high-density polyethylene (HDPE) liner.",
        moq: "12 MT (1x20ft)",
        leadTime: "15 Days",
        bestFor: "Bakeries, Confectionery Manufacturers",
      },
    ],
    faqs: [
      {
        question: "Is your desiccated coconut High Fat or Low Fat?",
        answer: "We primarily export High Fat desiccated coconut (min 65% fat) as it is preferred for premium baking and confectionery. Low fat can be provided on request.",
      },
      {
        question: "How do you ensure the product stays fresh?",
        answer: "The inner HDPE liner prevents moisture absorption and lipid oxidation, ensuring the product retains its flavor and crispness for up to 12 months.",
      },
    ],
  },
];

export const FILTER_OPTIONS = {
  categories: [
    "Whole Spices",
    "Powdered Spices",
    "Grains & Millets",
    "Rice",
    "Pulses & Beans",
    "Dry Fruits & Nuts",
    "Tea & Coffee",
    "Soya Products",
    "Herbs & Botanicals",
    "Flours & Starches",
    "Other",
  ],
  certifications: ["APEDA", "FSSAI", "ISO 22000", "Organic", "Halal", "Kosher", "US FDA", "Spices Board India"],
  exportMarkets: ["USA", "EU", "Middle East", "Asia", "Africa", "Australia", "UK"],
  packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches", "Jute Bags", "Custom", "Paper Bags"],
};  