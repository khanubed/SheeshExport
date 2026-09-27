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

export interface WhyIndiaReason {
  title: string;
  description: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  label: string;
  description: string;
  heroImage: string;
  
  seoTitle?: string;
  seoDescription?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  
  overviewText?: string;
  
  whyIndia?: WhyIndiaReason[];

  overview: {
    industry: string;
    production: string;
    supplyNetwork: string;
    quickStats: {
      productsAvailable: number;
      countriesServed: number;
      moq: string;
      leadTime: string;
    };
  };
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
    seoTitle: "Indian Spices Exporter & Global Bulk Spices Supplier",
    seoDescription: "Leading Indian spices exporter supplying bulk whole spices, cumin, chilli, and turmeric to global food manufacturers and retail brands.",
    heroTitle: "Indian Spices Exporter & Global Supply Partner",
    heroSubtitle: "Source export-quality whole spices directly from India's leading growing regions.",
    overviewText: "India is the undisputed global leader in spice production, accounting for over 70% of the world's spice trade. The whole spice sector forms the backbone of global culinary, extraction, and medicinal industries. Sourced directly from GAP-certified agricultural belts across Guntur, Unjha, and Malabar, we ensure absolute traceability and uncompromised purity from farm to port. Our integrated supply chain eliminates middlemen, providing wholesale buyers with competitive pricing, rigorous quality control, and seamless global logistics.",
    whyIndia: [
      { title: "Largest Producer", description: "India commands the global spice trade with unmatched cultivation volume and variety." },
      { title: "Diverse Climate", description: "Agro-climatic zones support the growth of highly potent, distinct spice profiles." },
      { title: "Multiple Harvest Cycles", description: "Ensuring year-round supply continuity for global industrial buyers." },
      { title: "Global Acceptance", description: "Indian spices meet stringent ASTA, EU, and FDA compliance standards." }
    ],
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
  {
    id: "cat-oil-seeds",
    slug: "oil-seeds",
    name: "Oil Seeds",
    label: "Premium Indian Oil Seeds",
    description: "High-quality, sortex-cleaned oil seeds directly sourced from the finest cultivation belts.",
    heroImage: "/images/product-categories/OIL-SEEDS.jpg",
    seoTitle: "Bulk Oil Seeds Exporter India | Sesame & Peanut Supplier",
    seoDescription: "Premium exporter of Indian oil seeds including peanuts, sesame seeds, and mustard seeds. Quality assured and globally compliant.",
    heroTitle: "Indian Oil Seeds Export Solutions",
    heroSubtitle: "Source premium sesame, peanut, and mustard seeds for oil extraction and culinary uses.",
    overviewText: "India is a major global hub for oil seeds. Our sortex-cleaned oil seeds are sourced from verified growers, ensuring high oil content, superior flavor, and strict adherence to international safety standards.",
    whyIndia: [
      { title: "High Oil Content", description: "Indian seeds are prized globally for their rich oil yield." },
      { title: "Sortex Cleaned", description: "Advanced mechanical processing ensures 99.9% purity." },
      { title: "Year-Round Supply", description: "Multiple growing regions provide steady availability." },
      { title: "Aflatoxin Controlled", description: "Strict monitoring guarantees compliance with global safety thresholds." }
    ],
    overview: {
      industry: "India is a leading producer of premium agricultural commodities, playing a pivotal role in global food supply chains.",
      production: "Sourced directly from verified farms across India, ensuring traceability and quality.",
      supplyNetwork: "Our integrated network provides competitive pricing, strict quality control, and efficient logistics.",
      quickStats: { productsAvailable: 15, countriesServed: 50, moq: "1x20FT FCL", leadTime: "14-21 Days" },
    },
    origins: [
      { region: "Gujarat", description: "Top producer of peanuts and sesame.", climate: "Dry, semi-arid.", harvestPeriod: "October to November" }
    ],
    applications: [
      { industry: "Oil Extraction", description: "Raw material for cold-pressed and refined edible oils." },
      { industry: "Bakery & Confectionery", description: "Used as toppings and core ingredients in snacks." }
    ],
    marketIntelligence: {
      harvestSeason: "Varies by crop.",
      exportSeason: "Year-round availability with peak seasons.",
      demandTrends: "Increasing global demand for traceable and clean-label ingredients.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia"],
    faqs: [
      { question: "What quality checks are performed?", answer: "Every lot undergoes rigorous testing for moisture, purity, and safety before shipment." }
    ],
  },
  {
    id: "cat-pulses",
    slug: "pulses",
    name: "Pulses",
    label: "Export Grade Indian Pulses",
    description: "A wide variety of premium Indian pulses processed and packaged for global markets.",
    heroImage: "/images/product-categories/PULSES.webp",
    seoTitle: "Indian Pulses Exporter | Bulk Lentils & Beans Supplier",
    seoDescription: "Export-grade Indian pulses, lentils, and chickpeas. Directly sourced, machine-cleaned, and packed for global B2B buyers.",
    heroTitle: "Indian Pulses & Lentils Global Supply",
    heroSubtitle: "High-protein, sortex-cleaned pulses sourced directly from India's agricultural heartlands.",
    overviewText: "India is the world's largest producer and consumer of pulses. We export premium chickpeas, lentils, and beans, ensuring uniform size, optimal moisture levels, and flawless sortex cleaning for international markets.",
    whyIndia: [
      { title: "Protein Rich", description: "Indian pulses are globally recognized for high nutritional value." },
      { title: "Consistent Quality", description: "Machine-cleaned and sortex-sorted for perfect uniformity." },
      { title: "Export Infrastructure", description: "State-of-the-art milling and packaging facilities." },
      { title: "Traceable Supply Chain", description: "Direct farm linkages ensure transparency." }
    ],
    overview: {
      industry: "India is a leading producer of premium agricultural commodities.",
      production: "Sourced directly from verified farms across India, ensuring traceability.",
      supplyNetwork: "Our integrated network provides competitive pricing and strict quality control.",
      quickStats: { productsAvailable: 10, countriesServed: 40, moq: "24 MT (1x20FT)", leadTime: "15-20 Days" },
    },
    origins: [
      { region: "Madhya Pradesh", description: "The heartland of pulses in India.", climate: "Sub-tropical.", harvestPeriod: "March to May" }
    ],
    applications: [
      { industry: "Canned Foods", description: "High-quality raw material for canning." },
      { industry: "Retail Packaging", description: "Ready for private label packaging." }
    ],
    marketIntelligence: {
      harvestSeason: "Varies by crop.",
      exportSeason: "Year-round availability with peak seasons.",
      demandTrends: "Increasing demand for plant-based proteins.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia"],
    faqs: [
      { question: "Are your pulses sortex cleaned?", answer: "Yes, all our pulses are 100% sortex cleaned to ensure zero foreign matter." }
    ],
  },
  {
    id: "cat-grains",
    slug: "grains",
    name: "Grains",
    label: "Premium Indian Grains",
    description: "Export quality grains including Basmati and Non-Basmati rice, wheat, and millets.",
    heroImage: "/images/product-categories/grains.webp",
    seoTitle: "Bulk Indian Grains Exporter | Basmati Rice & Millets",
    seoDescription: "Exporting premium Basmati rice, wheat, and nutrient-dense millets from India to the world. Quality certified.",
    heroTitle: "Indian Grains & Rice Global Export",
    heroSubtitle: "Source authentic Basmati rice and premium grains directly from India.",
    overviewText: "India's agricultural heritage provides some of the finest grains in the world, including the legendary aromatic Basmati rice. We supply perfectly aged rice, robust wheat, and health-focused millets to global distributors.",
    whyIndia: [
      { title: "Authentic Basmati", description: "Sourced from the GI-tagged Himalayan foothills." },
      { title: "Millet Powerhouse", description: "Leading the global shift towards ancient, healthy grains." },
      { title: "Volume Capacity", description: "Ability to fulfill massive bulk orders consistently." },
      { title: "Strict Milling Standards", description: "Ensuring exact grain length and minimal breakage." }
    ],
    overview: {
      industry: "India is a leading producer of premium grains.",
      production: "Sourced directly from verified farms across India.",
      supplyNetwork: "Our integrated network provides competitive pricing.",
      quickStats: { productsAvailable: 8, countriesServed: 60, moq: "24 MT", leadTime: "14-25 Days" },
    },
    origins: [
      { region: "Punjab & Haryana", description: "The Basmati bowl of India.", climate: "Sub-tropical.", harvestPeriod: "October to November" }
    ],
    applications: [
      { industry: "Foodservice & Catering", description: "Bulk rice and flour for massive kitchens." },
      { industry: "Retail & Supermarkets", description: "Consumer-ready packaged grains." }
    ],
    marketIntelligence: {
      harvestSeason: "Varies by crop.",
      exportSeason: "Year-round availability.",
      demandTrends: "Massive growth in global demand for Indian millets and aged Basmati.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia"],
    faqs: [
      { question: "What is the average grain length of your Basmati?", answer: "Our premium 1121 Basmati has an average grain length of 8.35mm." }
    ],
  },
  {
    id: "cat-dry-fruits",
    slug: "dry-fruits",
    name: "Dry Fruits",
    label: "Premium Dry Fruits & Nuts",
    description: "Select dry fruits sourced from the best orchards, offering unmatched taste and quality.",
    heroImage: "/images/product-categories/dry-fruits.jpg",
    seoTitle: "Indian Dry Fruits Exporter | Premium Cashews & Raisins",
    seoDescription: "Exporting premium Indian dry fruits, cashews, and raisins. Rigorous quality control and custom packaging for global buyers.",
    heroTitle: "Premium Indian Dry Fruits Export",
    heroSubtitle: "High-grade cashews, raisins, and nuts for the global market.",
    overviewText: "We export carefully selected, premium dry fruits and nuts from India, including world-renowned Indian cashews and golden raisins. Our strict sorting mechanisms ensure uniform size and exceptional taste.",
    whyIndia: [
      { title: "Premium Cashews", description: "Indian cashews are globally recognized for their buttery taste." },
      { title: "Hand-Sorted Quality", description: "Meticulous grading ensures only the best nuts are exported." },
      { title: "Hygienic Processing", description: "Processed in state-of-the-art GFSI recognized facilities." },
      { title: "Custom Packaging", description: "Vacuum packing to ensure long shelf life and freshness." }
    ],
    overview: {
      industry: "India is a leading producer of premium dry fruits.",
      production: "Sourced directly from verified orchards.",
      supplyNetwork: "Integrated network providing strict quality control.",
      quickStats: { productsAvailable: 5, countriesServed: 30, moq: "5 MT", leadTime: "15-20 Days" },
    },
    origins: [
      { region: "Goa & Kerala", description: "Famous for high-quality cashews.", climate: "Tropical.", harvestPeriod: "March to May" }
    ],
    applications: [
      { industry: "Snack Manufacturing", description: "Premium ingredients for trail mixes and roasted snacks." },
      { industry: "Confectionery", description: "Used in chocolates and premium sweets." }
    ],
    marketIntelligence: {
      harvestSeason: "Varies by crop.",
      exportSeason: "Year-round availability.",
      demandTrends: "Increasing demand for healthy, plant-based snacking options.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia"],
    faqs: [
      { question: "Do you offer vacuum packaging?", answer: "Yes, we provide vacuum packaging in tins and flexi-pouches to maintain freshness." }
    ],
  }
];
