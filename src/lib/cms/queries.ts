import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { ExportMarket } from "@/types/market";
import { Certification } from "@/types/certification";
import { BlogPost } from "@/types/blog";

const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat-spices",
    name: "Spices",
    slug: "spices",
    shortDescription: "Premium Indian whole and ground spices sourced directly from fertile cultivation belts.",
    description: "Export-quality Indian spices with guaranteed purity, high volatile oil content, and international food safety certifications.",
    image: "/images/products/spices-cat.jpg",
    featured: true,
    itemCount: 12,
    seo: {
      title: "Indian Spices Exporters & Wholesale Bulk Suppliers",
      description: "Source premium whole and ground Indian spices including Red Chilli, Turmeric, Cumin, Coriander and Black Pepper in bulk.",
    },
  },
  {
    id: "cat-oilseeds",
    name: "Oil Seeds",
    slug: "oil-seeds",
    shortDescription: "High-purity natural and hulled sesame seeds, mustard seeds, and groundnuts.",
    description: "Export-compliant oilseeds processed under automated cleaning, destoning, and optical sorting systems.",
    image: "/images/products/oilseeds-cat.jpg",
    featured: true,
    itemCount: 6,
    seo: {
      title: "Indian Oil Seeds Exporter - Sesame Seeds & Mustard Bulk",
      description: "Buy export-grade natural and hulled sesame seeds, groundnuts, and mustard seeds directly from Indian processing mills.",
    },
  },
  {
    id: "cat-pulses",
    name: "Grains & Pulses",
    slug: "pulses",
    shortDescription: "Premium agro-grains, chickpeas, lentils, and premium basmati rice for international trade.",
    description: "Graded and machine-cleaned pulses and grains adhering to strict phytosanitary and aflatoxin compliance.",
    image: "/images/products/pulses-cat.jpg",
    featured: true,
    itemCount: 8,
    seo: {
      title: "Indian Pulses & Grains Exporters - Bulk Chickpeas & Rice",
      description: "Wholesale suppliers of Indian chickpeas (Kabuli & Desi), lentils, and rice for international importers and distributors.",
    },
  },
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-red-chilli",
    name: "Indian S4 Sananam Red Chilli",
    slug: "red-chilli",
    botanicalName: "Capsicum annuum",
    hsCode: "09042110",
    category: { id: "cat-spices", name: "Spices", slug: "spices" },
    shortDescription: "World-renowned Indian red chilli with vivid red color and balanced SHU pungency, sourced from Guntur.",
    description: "Sheesh Exports supplies premium Indian S4 Sananam, Teja, and Byadgi red chilli varieties in whole with stem, stemless, crushed flakes, and fine powder forms. Rigorously analyzed for aflatoxin and pesticide residue.",
    origin: "Guntur, Andhra Pradesh, India",
    harvestSeason: "January to April",
    images: [
      { url: "/images/products/red-chilli-1.jpg", alt: "Whole Dry S4 Red Chilli Stemless", isFeatured: true },
      { url: "/images/products/red-chilli-2.jpg", alt: "Bulk Red Chilli Packaging in PP Bags", isFeatured: false },
    ],
    specifications: [
      { label: "Moisture", value: "Max 10% - 11%" },
      { label: "Pungency / Heat", value: "20,000 - 25,000 SHU (Sananam S4)" },
      { label: "Color Value", value: "50 - 70 ASTA" },
      { label: "Foreign Matter", value: "Max 1%" },
      { label: "Loose Seeds", value: "Max 2% - 3%" },
    ],
    grades: [
      { gradeName: "Stemless Whole", description: "Machine and hand-destemmed premium whole dry chillies." },
      { gradeName: "With Stem", description: "Intact whole chillies sun-dried to optimal moisture levels." },
      { gradeName: "Crushed Flakes (Pizza Cut)", description: "Coarse flakes with uniform seed distribution." },
      { gradeName: "Chilli Powder", description: "Fine pulverized chilli powder customized to client color/SHU specs." },
    ],
    packaging: [
      { type: "PP Bags", sizes: ["10 kg", "25 kg", "50 kg"] },
      { type: "Jute Gunny Bags", sizes: ["25 kg", "50 kg"] },
      { type: "Carton Boxes", sizes: ["10 kg", "15 kg"] },
    ],
    minimumOrderQuantity: "1 x 20ft FCL (Approx 7 - 14 MT depending on packaging)",
    shelfLife: "24 Months in dry cool storage",
    applications: ["Food Seasoning & Blends", "Oleoresin Extraction", "Retail Consumer Packs", "Catering & Restaurants"],
    availableMarkets: ["uae", "saudi-arabia", "usa", "uk"],
    certifications: ["apeda", "spices-board", "fssai", "iso-22000", "halal"],
    featured: true,
    status: "published",
    seo: {
      title: "Indian Red Chilli Exporter | S4 Sananam, Teja & Byadgi Wholesale",
      description: "Leading Indian red chilli exporter and bulk supplier from Guntur. Whole stemless, with stem, crushed flakes, and powder. APEDA and Spices Board certified.",
    },
  },
  {
    id: "prod-turmeric",
    name: "Indian Turmeric Finger & Powder",
    slug: "turmeric",
    botanicalName: "Curcuma longa",
    hsCode: "09103020",
    category: { id: "cat-spices", name: "Spices", slug: "spices" },
    shortDescription: "High-curcumin Nizamabad and Salem polished turmeric fingers and micro-pulverized powder.",
    description: "Export-grade turmeric fingers characterized by deep golden-yellow color, high natural curcumin percentage, and zero adulteration.",
    origin: "Nizamabad (Telangana) & Salem (Tamil Nadu), India",
    harvestSeason: "February to May",
    images: [
      { url: "/images/products/turmeric-1.jpg", alt: "Polished Turmeric Fingers", isFeatured: true },
    ],
    specifications: [
      { label: "Curcumin Content", value: "2.5% to 5.0% (grade dependent)" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Total Ash", value: "Max 7%" },
    ],
    grades: [
      { gradeName: "Double Polished Finger", description: "Mechanically polished smooth fingers." },
      { gradeName: "Unpolished Finger", description: "Raw natural fingers with high essential oil." },
      { gradeName: "Turmeric Powder", description: "Ultra-fine aroma-sealed ground turmeric." },
    ],
    packaging: [
      { type: "PP Bags", sizes: ["25 kg", "50 kg"] },
      { type: "Multiwall Paper Bags", sizes: ["25 kg"] },
    ],
    minimumOrderQuantity: "1 x 20ft FCL (18 MT)",
    shelfLife: "24 Months",
    applications: ["Nutraceuticals & Dietary Supplements", "Food Coloring & Curry Mixes", "Cosmetics"],
    availableMarkets: ["uae", "usa", "germany", "uk"],
    certifications: ["apeda", "spices-board", "fssai", "halal"],
    featured: true,
    status: "published",
    seo: {
      title: "Turmeric Exporter from India | High Curcumin Fingers & Powder",
      description: "Wholesale turmeric finger and powder exporters from India. Salem & Nizamabad double polished varieties with certified curcumin levels.",
    },
  },
  {
    id: "prod-cumin",
    name: "Indian Cumin Seeds (Jeera)",
    slug: "cumin",
    botanicalName: "Cuminum cyminum",
    hsCode: "09093129",
    category: { id: "cat-spices", name: "Spices", slug: "spices" },
    shortDescription: "Sortex-cleaned Indian cumin seeds with high essential oil content and distinct aroma.",
    description: "Cleaned through optical sortex machinery up to 99.5% purity. Available in Singapore and European machine-cleaned grades.",
    origin: "Gujarat & Rajasthan, India",
    harvestSeason: "February to April",
    images: [
      { url: "/images/products/cumin-1.jpg", alt: "Sortex Cleaned Indian Cumin Seeds", isFeatured: true },
    ],
    specifications: [
      { label: "Purity", value: "99% / 99.5% Sortex Cleaned" },
      { label: "Volatile Oil", value: "Min 2.5% - 3.0%" },
      { label: "Moisture", value: "Max 8% - 9%" },
    ],
    grades: [
      { gradeName: "Singapore Quality (99%)", description: "Standard commercial purity grade." },
      { gradeName: "Europe Quality (99.5% Sortex)", description: "High-spec destoned and metal-detected grade." },
    ],
    packaging: [
      { type: "PP Bags", sizes: ["25 kg", "50 kg"] },
      { type: "Paper Bags with PE Liner", sizes: ["25 kg"] },
    ],
    minimumOrderQuantity: "1 x 20ft FCL (13 MT)",
    shelfLife: "24 Months",
    applications: ["Bakery & Spice Mixes", "Essential Oil Distillation", "Meat Seasonings"],
    availableMarkets: ["uae", "saudi-arabia", "usa", "germany"],
    certifications: ["apeda", "spices-board", "fssai", "iso-22000"],
    featured: true,
    status: "published",
    seo: {
      title: "Indian Cumin Seeds Exporter | 99.5% Sortex Cleaned Jeera Wholesale",
      description: "Buy bulk Indian cumin seeds directly from Gujarat processing units. Singapore and Europe export quality certified.",
    },
  },
];

const MOCK_MARKETS: ExportMarket[] = [
  {
    id: "mkt-uae",
    country: "United Arab Emirates",
    slug: "uae",
    region: "Middle East",
    flagIcon: "/images/markets/uae-flag.svg",
    heroImage: "/images/markets/dubai-port.jpg",
    overview: "UAE is one of our largest trade corridors, serving as both a domestic consumption hub and an international re-export gateway via Jebel Ali Port.",
    keyImportRequirements: [
      "ESMA / Dubai Municipality Halal Certification",
      "Arabic and English bilingual packaging labels",
      "Phytosanitary & Fumigation Certificates",
      "Certificate of Origin endorsed by Chamber of Commerce",
    ],
    topExportedProducts: ["red-chilli", "turmeric", "cumin"],
    majorPortsServed: ["Jebel Ali Port (Dubai)", "Port Rashid", "Sharjah Port"],
    transitTimeEstimate: "3 - 5 Days from Nhava Sheva / Mundra",
    featured: true,
    seo: {
      title: "Exporting Indian Spices & Agro Commodities to UAE & Dubai | Sheesh Exports",
      description: "Fast container transit and Halal-compliant export of Indian spices to UAE and GCC. Jebel Ali direct container shipments.",
    },
  },
  {
    id: "mkt-usa",
    country: "United States",
    slug: "usa",
    region: "North America",
    flagIcon: "/images/markets/usa-flag.svg",
    heroImage: "/images/markets/usa-port.jpg",
    overview: "We supply US food processors, spice grinders, and ethnic retail distributors with FDA-registered, ASTA-compliant agricultural consignments.",
    keyImportRequirements: [
      "US FDA Prior Notice & Facility Registration",
      "Strict ASTA microbial & cleanliness standards",
      "Third-party lab certificates (SGS / Eurofins)",
      "Low moisture & zero pesticide residues below EPA tolerances",
    ],
    topExportedProducts: ["turmeric", "cumin", "red-chilli"],
    majorPortsServed: ["New York / New Jersey", "Los Angeles / Long Beach", "Houston", "Savannah"],
    transitTimeEstimate: "22 - 28 Days",
    featured: true,
    seo: {
      title: "US FDA Registered Indian Spice Exporter to USA | Sheesh Exports",
      description: "Supplying bulk whole spices and commodities to US importers and processors with full FDA compliance and ASTA certification.",
    },
  },
];

const MOCK_CERTS: Certification[] = [
  {
    id: "cert-apeda",
    name: "APEDA Registration",
    slug: "apeda",
    issuingBody: "Agricultural and Processed Food Products Export Development Authority (Govt of India)",
    badgeImage: "/images/certifications/apeda.png",
    certificateNumber: "APEDA/REG/19842/2022",
    validity: "Active & Renewed",
    description: "Official registration enabling export of scheduled agricultural products adhering to Government of India export quality benchmarks.",
    complianceDetails: "Mandatory compliance with phytosanitary inspection, farm traceability, and packaging norms for agro exports.",
    featured: true,
    seo: {
      title: "APEDA Certified Agro Exporter India | Sheesh Exports",
      description: "Sheesh Exports is an APEDA-registered export company complying with Indian agricultural trade standards.",
    },
  },
  {
    id: "cert-spices-board",
    name: "Spices Board of India",
    slug: "spices-board",
    issuingBody: "Spices Board, Ministry of Commerce and Industry, India",
    badgeImage: "/images/certifications/spices-board.png",
    certificateNumber: "SB/EXP/CERT/8841",
    validity: "Active",
    description: "Certificate of Registration as an Exporter of Spices (CRES) certifying quality and testing standards.",
    complianceDetails: "Mandatory testing of aflatoxin, pesticide residues, and moisture at Spices Board accredited laboratories before vessel loading.",
    featured: true,
    seo: {
      title: "Spices Board of India Certified Exporter | Sheesh Exports",
      description: "Certified by the Spices Board of India for international export of chillies, turmeric, cumin, and whole spices.",
    },
  },
];

const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "post-import-guide",
    title: "How to Import Indian Spices: Complete B2B Buyer Guide",
    slug: "how-to-import-spices-from-india",
    excerpt: "Essential documentation, Incoterms, quality inspection steps, and customs clearance procedures for sourcing bulk spices from India.",
    content: `
Importing agricultural commodities and spices from India is a straightforward and highly lucrative process when done in partnership with an experienced exporter.

### Key Export Documents Required
1. **Commercial Invoice & Packing List**: Itemized container manifest with gross/net weights.
2. **Bill of Lading (B/L)**: Ocean carrier document proving consignment dispatch.
3. **Certificate of Origin**: Endorsed by the Chamber of Commerce / Export Promotion Council.
4. **Phytosanitary Certificate**: Issued by the Directorate of Plant Protection, Quarantine & Storage.
5. **Spices Board / Lab Analysis Certificate**: Testing for aflatoxin, moisture, and chemical purity.

### Choosing the Right Incoterm
For most international ocean shipments, **FOB (Free on Board)** or **CIF (Cost, Insurance, and Freight)** are standard. We provide complete CIF quotes directly to your destination discharge port.
    `,
    publishedAt: "2024-03-15T10:00:00Z",
    author: {
      id: "auth-director",
      name: "Exports Directorate",
      role: "Head of International Trade",
      avatar: "/images/about/director.jpg",
    },
    category: {
      id: "bcat-guides",
      name: "Import Guides",
      slug: "import-guides",
    },
    featuredImage: {
      url: "/images/blog/spice-import-guide.jpg",
      alt: "Shipping container loading of Indian spices at port",
    },
    relatedProducts: ["red-chilli", "turmeric", "cumin"],
    readingTimeMinutes: 6,
    featured: true,
    seo: {
      title: "How to Import Indian Spices: Step-by-Step B2B Procurement Guide",
      description: "Learn how to import spices from India. Detailed guide covering documents, Phytosanitary certification, Incoterms, and customs procedures.",
    },
  },
];

export async function getProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return MOCK_PRODUCTS.find((p) => p.slug === slug) || null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.featured);
}

export async function getCategories(): Promise<Category[]> {
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return MOCK_CATEGORIES.find((c) => c.slug === slug) || null;
}

export async function getMarkets(): Promise<ExportMarket[]> {
  return MOCK_MARKETS;
}

export async function getMarketBySlug(slug: string): Promise<ExportMarket | null> {
  return MOCK_MARKETS.find((m) => m.slug === slug) || null;
}

export async function getCertifications(): Promise<Certification[]> {
  return MOCK_CERTS;
}

export async function getCertificationBySlug(slug: string): Promise<Certification | null> {
  return MOCK_CERTS.find((c) => c.slug === slug) || null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return MOCK_BLOG_POSTS;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return MOCK_BLOG_POSTS.find((b) => b.slug === slug) || null;
}
