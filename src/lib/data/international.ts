import { FAQ } from "./types";

export type BuyerProfile = {
  id: string;
  title: string;
  description: string;
};

export type MarketResource = {
  id: string;
  icon: 'FileText' | 'ShieldCheck' | 'CheckCircle2' | 'Anchor';
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type CountryMarket = {
  slug: string;
  name: string;
  
  // Core SEO
  seoTitle: string;
  seoDescription: string;
  
  // Hero Section
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  
  // Market Dossier Section
  dossierDemandHeading: string;
  dossierDemandText: string;
  dossierRegulationsHeading: string;
  dossierRegulationsText: string;
  marketInsights: string[];
  
  // Products Section
  popularProducts: string[];
  
  // Logistics Section
  logisticsHeading: string;
  logisticsText: string;
  logisticsImages: string[];
  transitTime: string;
  ports: string[];
  containerFormats: string[];
  
  // Buyer Profiles Section
  buyerProfilesHeading: string;
  buyerProfiles: BuyerProfile[];
  
  // Resources Section
  resourcesHeading: string;
  resources: MarketResource[];
  compliance: string[]; // Used in floating dossier snapshot
  
  // Gallery Section
  galleryHeading: string;
  galleryImages: GalleryImage[];

  // FAQs
  faqs: FAQ[];
};

export type CityMarket = {
  slug: string;
  city: string;
  country: string; // The slug of the country
  nearbyPort: string;
  intro: string;
  industries: string[];
};

export const COUNTRY_MARKETS: CountryMarket[] = [
  {
    slug: "usa",
    name: "United States",
    seoTitle: "Indian Spice Exporter to USA | FDA & FSMA Compliant Bulk Sourcing",
    seoDescription: "Direct origin exporter of ASTA-certified Indian spices, pulses, & oilseeds to the USA. FSVP compliant, low moisture, laboratory tested bulk supply.",
    heroTitle: "Bulk Indian Agricultural Commodities Exported Direct to the USA",
    heroDescription: "FDA-registered, FSMA-compliant supply chain delivering premium spices, oilseeds, and grains to US food manufacturers, private labels, and wholesale distributors.",
    heroImage: "/images/international/intl_port_ny_1790683487543.jpg",
    dossierDemandHeading: "US Market Demand Analysis",
    dossierDemandText: "The US import market for Indian agricultural commodities exceeds $2.5B annually, driven by surging ethnic food retail, plant-based processing, and private-label growth. US buyers prioritize high-curcumin turmeric, ASTA-graded red chillies, steam-sterilized cumin seeds, and non-GMO oilseeds with guaranteed low moisture and micro-clearance.",
    dossierRegulationsHeading: "FDA, FSMA & ASTA Regulatory Standards",
    dossierRegulationsText: "US import clearance under the FDA and USDA requires strict adherence to the Food Safety Modernization Act (FSMA), Foreign Supplier Verification Programs (FSVP), and ASTA (American Spice Trade Association) cleanliness specifications. Heavy metals, pesticide residues (Pesticide Data Program), and micro-contaminants must strictly adhere to EPA/FDA action levels.",
    marketInsights: [
      "Over 65% of US food processors require ASTA-quality clean, steam-sterilized spices with guaranteed volatile oil and color values (ASTA units).",
      "Strict enforcement of FSVP means US importers demand verified supplier audits (BRCGS/FSSC 22000) directly from Indian origin processing plants.",
      "Port congestion management favors direct ocean contracts routed into East, Gulf, and West Coast gateway ports with pre-cleared Prior Notice filings."
    ],
    popularProducts: [
      "red-chilli-guntur-whole",
      "turmeric-finger-guntur-whole",
      "psyllium-seed-husk",
      "peanuts-groundnuts"
    ],
    logisticsHeading: "Direct Ocean Freight & US Customs Routing",
    logisticsText: "We streamline transatlantic and transpacific shipping routes with pre-cleared FDA Prior Notice filings and ISF 10+2 compliance, delivering direct ocean container shipments from Indian export hubs to major US gateways.",
    logisticsImages: [
      "/images/international/intl_port_ny_1790683487543.jpg",
      "/images/international/intl_route_vis_1790683449601.jpg",
      "/images/placeholder.jpg"
    ],
    transitTime: "25-40 Days",
    ports: [
      "Port of New York and New Jersey",
      "Port of Houston",
      "Port of Los Angeles",
      "Port of Savannah",
      "Port of Seattle"
    ],
    containerFormats: ["20ft FCL", "40ft FCL High Cube", "Mixed Container (LCL)"],
    buyerProfilesHeading: "Who Imports From Us in the USA?",
    buyerProfiles: [
      {
        id: "usa-food-mfg",
        title: "Industrial Food Manufacturers",
        description: "Sourcing bulk 25kg/50kg totes with guaranteed mesh size, moisture under 10%, high volatile oil, and batch-wise Certificate of Analysis (CoA) for mass manufacturing."
      },
      {
        id: "usa-retail",
        title: "Private Label Brands & Supermarkets",
        description: "Procuring shelf-ready, consumer-packaged spices in nitrogen-purged stand-up pouches compliant with FDA 21 CFR Part 101 nutrition labeling and UPC barcoding."
      },
      {
        id: "usa-dist",
        title: "Wholesale Ingredient Distributors",
        description: "Purchasing mixed-SKU Full Container Loads (FCL) to service regional restaurant groups, ethnic food markets, and commercial kitchens across North America."
      },
      {
        id: "usa-trade",
        title: "Commodity Brokers & Traders",
        description: "Contracting high-volume FOB/CIF shipments locked on ASTA specifications with Eurofins or SGS third-party pre-shipment quality certifications."
      }
    ],
    resourcesHeading: "USA Sourcing & Compliance Resources",
    resources: [
      {
        id: "usa-res-1",
        icon: "FileText",
        title: "FDA Import & Prior Notice Guide",
        description: "Step-by-step documentation workflow for filing FDA Prior Notice and avoiding US Customs (CBP) detention."
      },
      {
        id: "usa-res-2",
        icon: "ShieldCheck",
        title: "FSVP & FSMA Safety Compliance",
        description: "Detailed hazard analysis, preventive controls, and BRCGS/FSSC audit protocol documentation for US importers."
      },
      {
        id: "usa-res-3",
        icon: "CheckCircle2",
        title: "ASTA Cleanliness & Lab Testing Specs",
        description: "Industry benchmarks for micro-parameters, heavy metals, pesticide screening, and ASTA extractable color units."
      },
      {
        id: "usa-res-4",
        icon: "Anchor",
        title: "US Customs (CBP) Clearance Kit",
        description: "Templates and checklists for Bill of Lading, ISF 10+2 filings, Phytosanitary certificates, and US Harmonized Tariff (HTS) codes."
      }
    ],
    compliance: [
      "FDA Facility Registration",
      "FDA Prior Notice Confirmation",
      "FSMA / FSVP Compliant Documentation",
      "ASTA Cleanliness Standards",
      "USDA Phytosanitary Certificate",
      "Heavy Metal & Pesticide CoA (SGS/Eurofins)"
    ],
    galleryHeading: "US Export Operations & Quality Control",
    galleryImages: [
      { src: "/images/about/infra-sourcing.png", alt: "Direct Farm Sourcing in India", caption: "Farm-Direct Sourcing" },
      { src: "/images/about/infra-cleaning.jpeg", alt: "Sortex Cleaning Facility", caption: "Sortex Cleaning" },
      { src: "/images/about/factory-processing.jpg", alt: "Steam Sterilization Processing Plant", caption: "Micro-Sterilization" },
      { src: "/images/international/intl_route_vis_1790683449601.jpg", alt: "Maritime Container Shipping to US Ports", caption: "Ocean Logistics" }
    ],
    faqs: [
      {
        question: "How do you ensure FSMA compliance for US spice imports?",
        answer: "We operate under FSSC 22000 and BRCGS certified processing systems. Every batch exported to the US is steam-sterilized and accompanied by comprehensive lab testing (SGS/Eurofins) covering pesticide residues, heavy metals, and micro-biology required for your FSVP plan."
      },
      {
        question: "What are the typical transit times from India to US ports?",
        answer: "Transit times vary by coastline: East Coast ports (NY/NJ, Savannah) take 24–30 days via direct Suez/Atlantic routing; West Coast ports (Los Angeles, Seattle) take 30–38 days; Gulf Coast (Houston) averages 28–34 days."
      },
      {
        question: "Do you supply ASTA-graded spices?",
        answer: "Yes, our spices—including Red Chilli, Turmeric, Cumin, and Coriander—are processed to meet or exceed American Spice Trade Association (ASTA) cleanliness, volatile oil, and color intensity benchmarks."
      },
      {
        question: "Can you handle private label packaging for US retail chains?",
        answer: "Absolutely. We supply retail-ready stand-up pouches, shaker bottles, and PET jars fully compliant with FDA nutrition labeling regulations (21 CFR 101), complete with US UPC barcoding."
      }
    ]
  },
  {
    slug: "germany",
    name: "Germany",
    seoTitle: "EU MRL Compliant Spice Exporter to Germany | Sheesh Exports",
    seoDescription: "Leading exporter of EU MRL-tested Indian spices, organic turmeric, & oilseeds to Germany. IFS & Eurofins certified bulk agricultural supply.",
    heroTitle: "EU-Compliant Indian Spices & Agricultural Exports to Germany",
    heroDescription: "Laboratory-tested, low-pesticide-residue, and organic-certified bulk ingredients direct to German food processors, spice mills, and European distributors.",
    heroImage: "/images/international/intl_port_hamburg_1790683504127.jpg",
    dossierDemandHeading: "German & Central European Market Demand",
    dossierDemandText: "Germany represents the largest market for spices, extractives, and organic agricultural products in the European Union. German spice millers, extractors, and retail brands enforce stringent quality controls, prioritizing ultra-low pesticide residues, organic certification, and complete farm-to-fork traceability.",
    dossierRegulationsHeading: "EU MRLs, Contaminants & TRACES NT Standards",
    dossierRegulationsText: "Importing into Germany requires strict compliance with Regulation (EC) No 396/2005 on Maximum Residue Levels (MRLs) for pesticides, strict Aflatoxin and Ochratoxin A limits under Regulation (EU) 2023/915, Ethylene Oxide (ETO) zero-tolerance policies, and EU Deforestation Regulation (EUDR) transparency. TRACES NT digital certificate clearance is mandatory.",
    marketInsights: [
      "German spice processors require multi-residue pesticide screening covering over 500 active substances tested via LC-MS/MS and GC-MS/MS.",
      "Surging demand for BIO (Organic) certified lines requires raw materials certified under EU Regulation (EU) 2018/848.",
      "Hamburg and Bremerhaven serve as key entry portals, requiring pre-cleared TRACES NT Phytosanitary documentation before port berthing."
    ],
    popularProducts: [
      "turmeric-finger-guntur-whole",
      "black-pepper-malabar-garbled",
      "coriander-powder-ground-dhania",
      "tea-assam-darjeeling"
    ],
    logisticsHeading: "Direct Logistics Routing to North Sea Ports",
    logisticsText: "We operate dedicated shipping lanes from Nhava Sheva (JNPT) and Mundra directly to Hamburg and Bremerhaven, providing complete EU TRACES NT documentation for fast customs release.",
    logisticsImages: [
      "/images/international/intl_port_hamburg_1790683504127.jpg",
      "/images/international/intl_route_vis_1790683449601.jpg",
      "/images/placeholder.jpg"
    ],
    transitTime: "18-25 Days",
    ports: [
      "Port of Hamburg",
      "Port of Bremerhaven",
      "Port of Wilhelmshaven"
    ],
    containerFormats: ["20ft FCL", "40ft FCL", "Mixed Container (LCL)"],
    buyerProfilesHeading: "Who Imports From Us in Germany?",
    buyerProfiles: [
      {
        id: "ger-food-mfg",
        title: "Industrial Spice Millers & Extractors",
        description: "Procure bulk raw materials in 25kg PP/craft paper bags with guaranteed low MRLs, steam sterilization, and customized particle mesh sizes."
      },
      {
        id: "ger-organic",
        title: "BIO / Organic Food Brands",
        description: "Demand 100% organic certified commodities with full farm geolocation mapping and NOP/EU equivalent certification."
      },
      {
        id: "ger-retail",
        title: "European Supermarket Chains",
        description: "Require IFS Food certified retail packaging, bilingual German/English labeling, and IFS/BRCGS retail audit compliance."
      },
      {
        id: "ger-dist",
        title: "EU-Wide Wholesale Distributors",
        description: "Consolidate multi-commodity container loads in Hamburg for distribution across DACH and Central/Eastern Europe."
      }
    ],
    resourcesHeading: "Germany & EU Compliance Resources",
    resources: [
      {
        id: "ger-res-1",
        icon: "FileText",
        title: "EU MRL & Contaminant Compliance Standard",
        description: "Guide to EU Regulation 396/2005 MRL thresholds, ethylene oxide (ETO) testing, and heavy metal caps."
      },
      {
        id: "ger-res-2",
        icon: "ShieldCheck",
        title: "TRACES NT & EU Customs Guide",
        description: "Instructions for Phytosanitary processing through the European TRACES NT system for German customs."
      },
      {
        id: "ger-res-3",
        icon: "CheckCircle2",
        title: "Aflatoxin & Mycotoxin Testing Protocols",
        description: "Overview of mandatory LC-MS lab certifications for Aflatoxin B1/G1 and Ochratoxin A in spices."
      },
      {
        id: "ger-res-4",
        icon: "Anchor",
        title: "EUR.1 & GSP Certification Guidance",
        description: "Customs valuation and duty reduction documentation for Indian commodity imports into Germany."
      }
    ],
    compliance: [
      "EU Pesticide MRL Compliance (EC 396/2005)",
      "Mycotoxin & Aflatoxin Certification (EU 2023/915)",
      "TRACES NT Digital Clearance",
      "EU Bio / Organic Certification",
      "Ethylene Oxide (ETO) Free Testing",
      "Phytosanitary Certificate"
    ],
    galleryHeading: "German Export Processing & Standards",
    galleryImages: [
      { src: "/images/about/infra-sourcing.png", alt: "Farm Sourcing in India", caption: "Farm Traceability" },
      { src: "/images/about/infra-cleaning.jpeg", alt: "Cleaning Facility", caption: "Sorting & Gravity Cleaning" },
      { src: "/images/about/factory-processing.jpg", alt: "German Standard Processing Plant", caption: "Lab Processing" },
      { src: "/images/international/intl_route_vis_1790683449601.jpg", alt: "Maritime Shipping to Hamburg", caption: "Port Logistics" }
    ],
    faqs: [
      {
        question: "How do you ensure spice shipments pass German EU MRL pesticide checks?",
        answer: "We perform rigorous pre-shipment multi-residue pesticide screens using ISO 17025 accredited laboratories (Eurofins/SGS) covering over 500 pesticides. We guarantee compliance with strict European Commission MRL limits prior to container loading."
      },
      {
        question: "Are your exports tested for Ethylene Oxide (ETO)?",
        answer: "Yes. All Germany-bound agricultural shipments undergo certified testing to confirm ETO levels are strictly below the EU analytical limit of quantification (LOQ 0.02 mg/kg)."
      },
      {
        question: "What is the ocean transit time from India to Port of Hamburg?",
        answer: "Direct ocean transit from Nhava Sheva (JNPT) or Mundra Port to Hamburg or Bremerhaven takes approximately 22 to 28 days."
      },
      {
        question: "Can you provide EU Bio (Organic) certified commodities?",
        answer: "Yes, we offer EU Bio certified organic spices, herbs, and oilseeds compliant with Regulation (EU) 2018/848, complete with Control Union inspection certificates."
      }
    ]
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    seoTitle: "Bulk Agricultural Exporter to UAE & GCC | Sheesh Exports Dubai",
    seoDescription: "Leading bulk supplier of Indian spices, Basmati rice, & pulses to UAE. Halal certified, Dubai Municipality FoodWATCH pre-cleared Jebel Ali shipments.",
    heroTitle: "Bulk Indian Commodity Sourcing Partner for UAE & GCC Markets",
    heroDescription: "Express ocean freight, Halal-certified quality, and seamless Dubai Municipality customs clearance for re-exporters, food service, and retail leaders.",
    heroImage: "/images/international/intl_port_dubai_1790683516299.jpg",
    dossierDemandHeading: "UAE & Middle East Hub Market Demand",
    dossierDemandText: "The UAE, anchored by Jebel Ali Port, serves as the primary trading and re-export nexus for the GCC, North Africa, and South Asia. Demand is defined by rapid turnover, high-volume staple commodities like 1121 Basmati Rice, Cumin, Green Cardamom, and premium-grade spice blends.",
    dossierRegulationsHeading: "Dubai Municipality, ESMA & MoIAT Compliance",
    dossierRegulationsText: "Imports into the UAE are governed by the Ministry of Industry and Advanced Technology (MoIAT), Emirates Authority for Standardization and Metrology (ESMA), and local municipality portals like Dubai's FoodWATCH. Strict Halal compliance, Arabic/English bilingual labeling, and batch shelf-life declarations are mandatory.",
    marketInsights: [
      "Dubai acts as a re-export bridge; over 40% of imported food commodities in Jebel Ali Free Zone (JAFZA) are re-bound for wider MENA and African markets.",
      "HORECA and catering suppliers in Dubai and Abu Dhabi demand rapid multi-SKU container consolidation with 3 to 5-day port delivery from India.",
      "Products must comply with GSO (GCC Standardization Organization) rules regarding production/expiry date stamping and barcode tracking."
    ],
    popularProducts: [
      "basmati-rice-1121",
      "red-chilli-guntur-whole",
      "wheat-flour-chakki-atta",
      "soya-chunks-tvp"
    ],
    logisticsHeading: "Express West Coast India to Jebel Ali Routing",
    logisticsText: "We offer market-leading ocean transit times of 3 to 5 days from India's western ports (Mundra / Nhava Sheva) directly to Jebel Ali and Khalifa Port, enabling lean inventory cycles.",
    logisticsImages: [
      "/images/international/intl_port_dubai_1790683516299.jpg",
      "/images/international/intl_route_vis_1790683449601.jpg",
      "/images/placeholder.jpg"
    ],
    transitTime: "3-5 Days",
    ports: [
      "Jebel Ali Port (Dubai)",
      "Khalifa Port (Abu Dhabi)",
      "Port Khalid (Sharjah)"
    ],
    containerFormats: ["20ft FCL", "40ft FCL", "Mixed Container (LCL)"],
    buyerProfilesHeading: "Who Imports From Us in the UAE?",
    buyerProfiles: [
      {
        id: "uae-horeca",
        title: "GCC Catering & Hotel Groups",
        description: "Require reliable, bulk-packaged staple grains, pulses, and ground spices in 10kg/25kg bags delivered on fixed short-lead contracts."
      },
      {
        id: "uae-reexport",
        title: "JAFZA Re-Exporters & Traders",
        description: "Procure high-volume FCL shipments for immediate re-export into Saudi Arabia, Oman, Qatar, and East African coastal ports."
      },
      {
        id: "uae-retail",
        title: "Supermarket & Hypermarket Chains",
        description: "Source private-label packed spices and rice with MoIAT-compliant Arabic labeling, consumer barcodes, and shelf-life guarantees."
      },
      {
        id: "uae-trade",
        title: "Al Ras Wholesale Merchants",
        description: "Require rapid spot-market deliveries with flexible LC terms and fast vessel bookings from Indian west coast ports."
      }
    ],
    resourcesHeading: "UAE Market Sourcing Resources",
    resources: [
      {
        id: "uae-res-1",
        icon: "FileText",
        title: "Dubai Municipality FoodWATCH Portal",
        description: "Step-by-step guidance on registering food labels and obtaining pre-clearance on the Dubai FoodWATCH system."
      },
      {
        id: "uae-res-2",
        icon: "ShieldCheck",
        title: "ESMA & MoIAT Halal Standards",
        description: "Detailed requirements for GCC Halal certification and accredited laboratory verification."
      },
      {
        id: "uae-res-3",
        icon: "CheckCircle2",
        title: "GCC Standardization (GSO) Labeling Laws",
        description: "Manual for Arabic translation requirements, production date formatting, and origin markings."
      },
      {
        id: "uae-res-4",
        icon: "Anchor",
        title: "Express Jebel Ali Clearance Kit",
        description: "Checklist for Chamber-attested COO, Commercial Invoice, Health Certificate, and Phytosanitary filings."
      }
    ],
    compliance: [
      "MoIAT / ESMA UAE Standards",
      "Dubai Municipality FoodWATCH Registration",
      "GCC Halal Certification",
      "GSO Bilingual Labeling (Arabic/English)",
      "Phytosanitary & Health Certificates",
      "Chamber of Commerce Legalized COO"
    ],
    galleryHeading: "UAE Supply Chain Operations",
    galleryImages: [
      { src: "/images/about/infra-sourcing.png", alt: "Sourcing Raw Produce", caption: "Raw Sourcing" },
      { src: "/images/about/infra-cleaning.jpeg", alt: "Processing and Sorting", caption: "High-Speed Sortex" },
      { src: "/images/about/factory-processing.jpg", alt: "Hygienic Packaging Plant", caption: "Bulk Packaging" },
      { src: "/images/international/intl_route_vis_1790683449601.jpg", alt: "Shipping to Jebel Ali Port", caption: "Jebel Ali Express" }
    ],
    faqs: [
      {
        question: "How long does shipping take from West Coast India to Jebel Ali Port?",
        answer: "Direct sea shipping from Mundra or Nhava Sheva to Jebel Ali, Dubai takes just 3 to 5 days, making express cargo replenishment seamless."
      },
      {
        question: "Are all your products Halal certified for the UAE and GCC?",
        answer: "Yes, all our processed spices, grains, and oilseeds are certified Halal by accredited bodies recognized by UAE's MoIAT and GCC authorities."
      },
      {
        question: "Do you help with Dubai Municipality FoodWATCH registration?",
        answer: "We provide complete documentation—including ingredient specifications, lab reports, and artwork previews—necessary for instant clearance on the Dubai Municipality FoodWATCH portal."
      },
      {
        question: "Can we order consolidated containers with multiple products?",
        answer: "Yes, we specialize in multi-SKU Full Container Loads (FCLs), allowing UAE buyers to combine spices, rice, pulses, and oilseeds into a single shipment."
      }
    ]
  }
];

export const CITY_MARKETS: CityMarket[] = [
  {
    slug: "new-york",
    city: "New York",
    country: "usa",
    nearbyPort: "Port of New York and New Jersey",
    intro: "Supplying FDA-registered Indian Spices & Commodities to Buyers across the US East Coast",
    industries: ["Food Processing", "Ethnic Retail Chains", "Spice Wholesalers", "Food Service Distributors"]
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    country: "usa",
    nearbyPort: "Port of Los Angeles / Port of Long Beach",
    intro: "Supplying Organic & ASTA-Graded Indian Agricultural Products to West Coast Food Leaders",
    industries: ["Health & Wellness Brands", "Private Label Retail", "Asian Market Distributors", "Extractors"]
  },
  {
    slug: "houston",
    city: "Houston",
    country: "usa",
    nearbyPort: "Port of Houston",
    intro: "Direct Vessel Sourcing of Indian Grains & Spices for Southern US & Gulf Coast Distributors",
    industries: ["Commercial Spice Blenders", "Bulk Commodity Importers", "Food Packaging"]
  },
  {
    slug: "hamburg",
    city: "Hamburg",
    country: "germany",
    nearbyPort: "Port of Hamburg",
    intro: "EU MRL-Compliant Agricultural Ingredient Exports to Hamburg Spice Mills & Processing Hubs",
    industries: ["Industrial Spice Processing", "Organic BIO Brands", "European Traders"]
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "uae",
    nearbyPort: "Jebel Ali Port",
    intro: "Express 3-Day Sourcing Hub for Bulk Indian Spices, Basmati Rice & Oilseeds in Dubai & MENA",
    industries: ["Re-Export Trade", "HORECA & Catering Suppliers", "Al Ras Wholesale Merchants", "Hypermarkets"]
  }
];