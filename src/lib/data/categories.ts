export interface CategoryOverview {
  industry: string;
  production: string;
  supplyNetwork: string;
  quickStats: {
    productsAvailable: number;
    countriesServed: number;
    moq: string;
    leadTime: string;
  };
}

export interface CategoryOrigin {
  region: string;
  description: string;
  climate: string;
  harvestPeriod: string;
}

export interface CategoryApplication {
  industry: string;
  description: string;
}

export interface MarketIntelligence {
  harvestSeason: string;
  exportSeason: string;
  demandTrends: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  label: string;
  description: string;
  heroImage: string;
  overview: CategoryOverview;
  origins: CategoryOrigin[];
  applications: CategoryApplication[];
  marketIntelligence: MarketIntelligence;
  certifications: string[];
  exportMarkets: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: "cat-whole-spices",
    slug: "whole-spices",
    name: "Whole Spices",
    label: "Premium Indian Whole Spice Exports",
    description: "Farm-sourced, export-grade whole spices trusted by importers in 50+ countries. Direct from the agrarian heartlands of India.",
    heroImage: "/images/product-categories/whole-spices.jpg",
    overview: {
      industry: "India is the undisputed global leader in spice production, accounting for over 70% of the world's spice trade. The whole spice sector forms the backbone of global culinary, extraction, and medicinal industries.",
      production: "Sourced directly from GAP-certified agricultural belts across Guntur, Unjha, and Malabar, ensuring absolute traceability and uncompromised purity from farm to port.",
      supplyNetwork: "Our integrated supply chain eliminates middlemen, providing wholesale buyers with competitive pricing, rigorous quality control, and seamless global logistics.",
      quickStats: {
        productsAvailable: 12,
        countriesServed: 54,
        moq: "14 MT (1x20FT)",
        leadTime: "14-21 Days",
      },
    },
    origins: [
      {
        region: "Guntur, Andhra Pradesh",
        description: "The chilli capital of the world, producing the most sought-after fiery red chillies like Teja S17 and Sannam.",
        climate: "Hot, dry climate with mineral-rich black soils.",
        harvestPeriod: "January to April",
      },
      {
        region: "Unjha, Gujarat",
        description: "The undisputed hub for Cumin (Jeera) and Coriander, known for seeds with exceptionally high volatile oil content.",
        climate: "Arid, sun-drenched plains.",
        harvestPeriod: "February to March",
      },
      {
        region: "Malabar Coast, Kerala",
        description: "The historical epicenter of the global spice trade, producing the world's finest Black Pepper (Tellicherry & Malabar Garbled).",
        climate: "Tropical monsoon climate with high humidity.",
        harvestPeriod: "December to February",
      },
      {
        region: "Erode, Tamil Nadu",
        description: "Renowned globally for high-curcumin Turmeric fingers, distinguished by its intense yellow color and earthy aroma.",
        climate: "Tropical savanna, well-irrigated.",
        harvestPeriod: "January to March",
      },
    ],
    applications: [
      {
        industry: "Spice Blenders & Grinders",
        description: "Raw material for manufacturing premium retail spice powders, curry powders, and customized seasoning blends.",
      },
      {
        industry: "Oleoresin & Extraction",
        description: "High-yield commodities for extracting capsaicin, curcumin, and volatile oils used in pharma, cosmetics, and food coloring.",
      },
      {
        industry: "Food Manufacturing (FMCG)",
        description: "Essential flavoring agents for sauces, marinades, ready-to-eat meals, and savory snacks globally.",
      },
      {
        industry: "HoReCa & Foodservice",
        description: "Bulk supply for restaurant chains, catering services, and industrial kitchens requiring consistent flavor profiles.",
      },
    ],
    marketIntelligence: {
      harvestSeason: "Q1 to early Q2 (January - April) marks the primary harvest for major spices like Chilli, Cumin, and Turmeric in India.",
      exportSeason: "Peak export contracting occurs from March to June to secure fresh crop at optimal pricing before monsoon moisture affects storage.",
      demandTrends: "Rising global demand for clean-label, traceable, and pesticide-compliant (IPM) spices in the EU and US markets is driving a premium on GAP-certified Indian whole spices.",
    },
    certifications: [
      "ISO 22000",
      "US FDA",
      "APEDA",
      "Spices Board India",
      "FSSAI",
      "SGS / Geo-Chem Assayed",
    ],
    exportMarkets: [
      "United States",
      "European Union",
      "Saudi Arabia",
      "UAE",
      "Vietnam",
      "Malaysia",
    ],
    faqs: [
      {
        question: "What are the major whole spices exported from India?",
        answer: "The primary exports include Red Chilli, Cumin, Turmeric, Black Pepper, Coriander, and Cardamom. These form the core of India's spice export dominance.",
      },
      {
        question: "How do you ensure spice purity and compliance with EU/US FDA standards?",
        answer: "We source from monitored IPM (Integrated Pest Management) farms. Every lot undergoes rigorous HPLC and LC-MS-MS testing for aflatoxins, ochratoxins, and pesticide residues prior to shipment.",
      },
      {
        question: "What packaging formats do you support for bulk whole spices?",
        answer: "We offer breathable Jute bags (25kg/50kg), PP woven bags, and high-density hydraulic compressed bales to maximize 40FT container payloads and reduce freight costs.",
      },
      {
        question: "Can you provide pre-shipment inspection certificates?",
        answer: "Yes, we mandate SGS or Geo-Chem pre-shipment inspections (PSI) for weight, quality, and phytosanitary compliance for all our international container shipments.",
      },
    ],
  },
];
