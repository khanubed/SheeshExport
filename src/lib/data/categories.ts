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

export type CategorySlug = 
  | "whole-spices"
  | "powdered-spices"
  | "grains-millets"
  | "tea-coffee"
  | "soya-products"
  | "rice"
  | "dry-fruits-nuts"
  | "pulses-beans"
  | "herbs-botanicals"
  | "flours-starches"
  | "oil-seeds"
  | "other";

export interface Category {
  id: string;
  slug: CategorySlug;
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

/**
 * CONTENT CONVENTION: every category has full SEO fields, hero copy,
 * overview text, 4 "Why India" reasons, 3-4 origins, 4 applications,
 * market intelligence, 5+ certifications, 6+ export markets and 5 FAQs.
 */
export const CATEGORIES_DATA: Category[] = [
  // ==========================================================================
  // WHOLE SPICES
  // ==========================================================================
  {
    id: "cat-whole-spices",
    slug: "whole-spices",
    name: "Whole Spices",
    label: "Premium Indian Whole Spice Exports",
    description: "Farm-sourced, export-grade whole spices trusted by importers in 50+ countries. Direct from the agrarian heartlands of India.",
    heroImage: "/images/product-categories/whole-spices.webp",
    seoTitle: "Indian Spices Exporter & Global Bulk Spices Supplier",
    seoDescription: "Leading Indian spices exporter supplying bulk whole spices, cumin, chilli, and turmeric to global food manufacturers and retail brands.",
    heroTitle: "Indian Spices Exporter & Global Supply Partner",
    heroSubtitle: "Source export-quality whole spices directly from India's leading growing regions.",
    overviewText: "India is the undisputed global leader in spice production, accounting for over 70% of the world's spice trade. The whole spice sector forms the backbone of global culinary, extraction, and medicinal industries. Sourced directly from GAP-certified agricultural belts across Guntur, Unjha, and Malabar, we ensure absolute traceability and uncompromised purity from farm to port. Our integrated supply chain eliminates middlemen, providing wholesale buyers with competitive pricing, rigorous quality control, and seamless global logistics.",
    whyIndia: [
      { title: "Largest Producer", description: "India commands the global spice trade with unmatched cultivation volume and variety, growing more than 60 of the 109 spices listed by the ISO." },
      { title: "Diverse Climate", description: "Agro-climatic zones from the Himalayan foothills to the tropical Malabar Coast support the growth of highly potent, distinct spice profiles." },
      { title: "Multiple Harvest Cycles", description: "Staggered harvests across regions ensure year-round supply continuity for global industrial buyers." },
      { title: "Global Acceptance", description: "Indian spices meet stringent ASTA, EU, and FDA compliance standards, supported by Spices Board of India quality programs." }
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
      "HACCP & GMP",
    ],
    exportMarkets: [
      "United States",
      "European Union",
      "Saudi Arabia",
      "UAE",
      "Vietnam",
      "Malaysia",
      "United Kingdom",
      "Bangladesh",
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
      {
        question: "Do you offer steam-sterilized or ETO-free spices?",
        answer: "Yes. Steam sterilization is available on request to bring down the microbial load and meet Salmonella-negative requirements in the US, EU and Japan, without chemical residues.",
      },
    ],
  },

  // ==========================================================================
  // OIL SEEDS
  // ==========================================================================
  {
    id: "cat-oil-seeds",
    slug: "oil-seeds",
    name: "Oil Seeds",
    label: "Premium Indian Oil Seeds",
    description: "High-quality, sortex-cleaned oil seeds directly sourced from the finest cultivation belts.",
    heroImage: "/images/product-categories/oil-seeds.webp",
    seoTitle: "Bulk Oil Seeds Exporter India | Sesame & Peanut Supplier",
    seoDescription: "Premium exporter of Indian oil seeds including peanuts, sesame seeds, and mustard seeds. Quality assured and globally compliant.",
    heroTitle: "Indian Oil Seeds Export Solutions",
    heroSubtitle: "Source premium sesame, peanut, and mustard seeds for oil extraction and culinary uses.",
    overviewText: "India is a major global hub for oil seeds. Our sortex-cleaned oil seeds are sourced from verified growers, ensuring high oil content, superior flavor, and strict adherence to international safety standards. From hulled and natural sesame to bold and java peanuts, mustard, flaxseed and niger seed, we supply crushers, bakers, tahini makers and snack brands with consistent, traceable lots backed by independent lab reports.",
    whyIndia: [
      { title: "High Oil Content", description: "Indian seeds are prized globally for their rich oil yield, with sesame at 50-55% and groundnut at 48-52% oil." },
      { title: "Sortex Cleaned", description: "Advanced mechanical processing and electronic color sorting ensure up to 99.9% purity." },
      { title: "Year-Round Supply", description: "Kharif, Rabi and summer crops across multiple growing regions provide steady availability." },
      { title: "Aflatoxin Controlled", description: "Strict monitoring and pre-shipment testing guarantee compliance with global safety thresholds." }
    ],
    overview: {
      industry: "India is one of the largest oilseed producers and among the top exporters of sesame and groundnut, supplying crushers, bakeries and snack manufacturers on every continent.",
      production: "Sourced directly from verified farms across Gujarat, Rajasthan, Madhya Pradesh and West Bengal, ensuring traceability, sun-drying at harvest and low moisture before processing.",
      supplyNetwork: "Our integrated network of collection centers, cleaning plants and port-side warehouses provides competitive pricing, strict quality control, and efficient logistics.",
      quickStats: { productsAvailable: 15, countriesServed: 50, moq: "1x20FT FCL", leadTime: "14-21 Days" },
    },
    origins: [
      { region: "Saurashtra, Gujarat", description: "Top producer of groundnuts and sesame, with well-drained sandy loam soils ideal for pod and seed development.", climate: "Dry, semi-arid.", harvestPeriod: "October to November (Kharif); February to April (Summer)" },
      { region: "Rajasthan", description: "A major source of mustard, rapeseed and sesame, grown on light soils with low rainfall that produces high pungency and oil percentage.", climate: "Arid to semi-arid with cool winters.", harvestPeriod: "February to April (Mustard); October to November (Sesame)" },
      { region: "West Bengal & Odisha", description: "Leading regions for white and black sesame with a nutty flavor and low free fatty acid, often sold as hulled sesame.", climate: "Humid sub-tropical.", harvestPeriod: "March to June (Summer Sesame)" },
      { region: "Madhya Pradesh", description: "Produces large volumes of soybean, sesame and niger seed, supplying crushing plants and specialty buyers.", climate: "Sub-tropical monsoon.", harvestPeriod: "October to December" },
    ],
    applications: [
      { industry: "Oil Extraction", description: "Raw material for cold-pressed and refined edible oils, including sesame, groundnut and mustard oil." },
      { industry: "Bakery & Confectionery", description: "Used as toppings, fillings and core ingredients in buns, bars, halva, brittle and snacks." },
      { industry: "Tahini, Paste & Butter Makers", description: "Hulled sesame and java peanuts are ground into tahini, halva and peanut butter for retail and foodservice." },
      { industry: "Animal Feed & Bio-Industry", description: "Oil cakes and meals left after extraction serve as protein-rich feed and organic fertilizer inputs." }
    ],
    marketIntelligence: {
      harvestSeason: "Kharif oil seeds (groundnut, sesame, soybean) are harvested between September and December, while Rabi crops like mustard are harvested from February to April.",
      exportSeason: "Peak export contracting for sesame runs from November to March, and for groundnut from October to April, with steady off-season supply from stocks.",
      demandTrends: "Demand for traceable, clean-label and low-aflatoxin seeds is increasing in the EU, Japan and the Middle East, while plant-based and tahini-based foods are expanding the sesame market.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed", "HACCP", "Halal"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia", "Japan", "China", "Turkey"],
    faqs: [
      { question: "What quality checks are performed?", answer: "Every lot undergoes rigorous testing for moisture, purity, oil content, free fatty acid and safety parameters, including aflatoxin and pesticide residues, before shipment." },
      { question: "Which sesame varieties do you supply?", answer: "We supply natural and hulled white sesame, black sesame, brown sesame and mixed sesame at purities of 99.9% and 99.95%, sortex cleaned to buyer specifications." },
      { question: "What is the typical moisture and oil content?", answer: "Sesame is shipped at 6% maximum moisture with 50-52% oil content, while groundnut kernels ship at 7% moisture and 48-50% oil, depending on variety and season." },
      { question: "Can you supply steam-sterilized sesame for the EU and Japan?", answer: "Yes. Steam sterilization achieves a validated microbial reduction and can meet Salmonella-negative requirements. Ethylene oxide is not used." },
      { question: "What are the packaging and loading options?", answer: "We pack in 25kg or 50kg new PP or jute bags with liners, 500kg jumbo bags, or bulk-in-container liners. A 20ft container carries roughly 18-19 MT and a 40ft about 26 MT." }
    ],
  },

  // ==========================================================================
  // PULSES & BEANS
  // ==========================================================================
  {
    id: "cat-pulses",
    slug: "pulses-beans",
    name: "Pulses",
    label: "Export Grade Indian Pulses",
    description: "A wide variety of premium Indian pulses processed and packaged for global markets.",
    heroImage: "/images/product-categories/pulses-beans.webp",
    seoTitle: "Indian Pulses Exporter | Bulk Lentils & Beans Supplier",
    seoDescription: "Export-grade Indian pulses, lentils, and chickpeas. Directly sourced, machine-cleaned, and packed for global B2B buyers.",
    heroTitle: "Indian Pulses & Lentils Global Supply",
    heroSubtitle: "High-protein, sortex-cleaned pulses sourced directly from India's agricultural heartlands.",
    overviewText: "India is the world's largest producer and consumer of pulses. We export premium chickpeas, lentils, green peas, pigeon peas and beans, ensuring uniform size, optimal moisture levels, and flawless sortex cleaning for international markets. Each lot is graded, fumigated and inspected before loading, and can be supplied whole, split or polished depending on buyer requirements.",
    whyIndia: [
      { title: "Protein Rich", description: "Indian pulses are globally recognized for high nutritional value, offering 20-25% protein along with fiber and minerals." },
      { title: "Consistent Quality", description: "Machine-cleaned and sortex-sorted for perfect uniformity of size, color and moisture." },
      { title: "Export Infrastructure", description: "State-of-the-art milling, polishing and packaging facilities located close to major ports." },
      { title: "Traceable Supply Chain", description: "Direct farm linkages and lot-wise records ensure transparency from field to container." }
    ],
    overview: {
      industry: "India is the world's largest producer of pulses, growing chickpea, pigeon pea, lentil, green gram, black gram and peas on over 28 million hectares.",
      production: "Sourced directly from verified farms across Madhya Pradesh, Uttar Pradesh, Rajasthan and Maharashtra, cleaned, graded and sortexed in modern mills.",
      supplyNetwork: "Our integrated network of mandi buying agents, processing mills and port warehouses provides competitive pricing and strict quality control.",
      quickStats: { productsAvailable: 10, countriesServed: 40, moq: "24 MT (1x20FT)", leadTime: "15-20 Days" },
    },
    origins: [
      { region: "Madhya Pradesh", description: "The heartland of pulses in India and the largest producer of chickpeas, lentils and pigeon peas.", climate: "Sub-tropical.", harvestPeriod: "March to May" },
      { region: "Uttar Pradesh", description: "A major source of green peas, lentils (masoor) and pigeon peas grown on fertile Gangetic alluvial soils.", climate: "Sub-tropical with cool winters.", harvestPeriod: "February to April" },
      { region: "Rajasthan", description: "Leading producer of moth beans, green gram (moong) and chickpeas, known for clean, hard grains.", climate: "Arid to semi-arid.", harvestPeriod: "October to November (Kharif); March to April (Rabi)" },
      { region: "Maharashtra & Karnataka", description: "Key growing regions for pigeon peas (toor/tur), black gram (urad) and chickpeas, with strong milling clusters.", climate: "Semi-arid tropical.", harvestPeriod: "December to March" },
    ],
    applications: [
      { industry: "Canned Foods", description: "High-quality raw material for canning chickpeas, peas and beans in brine or sauces." },
      { industry: "Retail Packaging", description: "Ready for private label packaging in 500g to 5kg consumer packs." },
      { industry: "Snack & Flour Manufacturing", description: "Roasted chana, wasabi peas, besan and pulse flours for snack and bakery industries." },
      { industry: "Institutional & Relief Feeding", description: "Bulk supply for government tenders, UN agencies and relief programs seeking affordable, high-protein food." }
    ],
    marketIntelligence: {
      harvestSeason: "Rabi pulses (chickpea, lentil, peas) are harvested from February to May, while Kharif pulses (tur, moong, urad) are harvested from October to January.",
      exportSeason: "Peak shipping of chickpeas and lentils runs from April to September, while pigeon pea, moong and urad ship from January onward.",
      demandTrends: "Rising demand for plant-based proteins, along with government-to-government pulse trade and import tenders, is expanding volumes to the Middle East, South Asia and Africa.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed", "Phytosanitary Certified"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia", "Bangladesh", "Egypt", "Turkey"],
    faqs: [
      { question: "Are your pulses sortex cleaned?", answer: "Yes, all our pulses are 100% sortex cleaned to ensure zero foreign matter." },
      { question: "Which pulses can you supply?", answer: "We supply green peas, yellow peas, chickpeas (desi and kabuli), red and green lentils, pigeon peas, black gram, green gram, kidney beans and moth beans, whole or split." },
      { question: "What is the standard moisture and foreign matter limit?", answer: "Moisture is kept at 12% maximum and foreign matter at 1% maximum or less, with damaged or weevilled grains under 1-2% depending on the pulse." },
      { question: "How do you protect pulses from insects during shipping?", answer: "Containers are fumigated with aluminium phosphide as per importing country rules, and pulses are packed in new PP or jute bags at low moisture. A fumigation certificate accompanies each shipment." },
      { question: "Do you take part in government tenders?", answer: "Yes. We supply against tenders from government agencies and institutional buyers with bank guarantees, third-party inspection and fixed delivery schedules." }
    ],
  },

  // ==========================================================================
  // GRAINS & MILLETS
  // ==========================================================================
  {
    id: "cat-grains",
    slug: "grains-millets",
    name: "Grains",
    label: "Premium Indian Grains",
    description: "Export quality grains including maize, wheat, sorghum and nutrient-rich millets sourced from India's farming belts.",
    heroImage: "/images/product-categories/grains-millets.webp",
    seoTitle: "Bulk Indian Grains Exporter | Maize, Wheat & Millets Supplier",
    seoDescription: "Exporting premium Indian maize, wheat, sorghum and nutrient-dense millets to the world. Non-GMO, sortex cleaned and quality certified.",
    heroTitle: "Indian Grains & Millets Global Export",
    heroSubtitle: "Source Non-GMO maize, wheat and ancient millets directly from India's farming belts.",
    overviewText: "India's agricultural heritage provides some of the finest grains in the world. We supply Non-GMO yellow and white maize, milling wheat, sorghum (jowar), pearl millet (bajra), finger millet (ragi) and other ancient grains to feed mills, food processors and global distributors. Grains are cleaned, dried, graded and inspected to buyer specifications, and can be shipped in containers or as break bulk vessel parcels. For Basmati and non-Basmati rice, see our dedicated Rice category.",
    whyIndia: [
      { title: "Non-GMO Origin", description: "Indian maize and cereals are grown from non-GMO seed, a key advantage for markets that restrict genetically modified grain." },
      { title: "Millet Powerhouse", description: "India leads the global shift towards ancient, healthy grains, producing more than 40% of the world's millets." },
      { title: "Volume Capacity", description: "Large production base and port-side storage let us fulfill massive bulk orders consistently." },
      { title: "Strict Quality Standards", description: "Sortex cleaning, moisture control and independent inspection ensure clean, uniform grain with low broken kernels." }
    ],
    overview: {
      industry: "India is one of the world's largest producers of maize, wheat and millets, serving feed, food, starch and brewing industries in over 60 countries.",
      production: "Sourced directly from verified farms across Madhya Pradesh, Karnataka, Maharashtra, Bihar and Rajasthan, and processed in sortex cleaning and drying facilities.",
      supplyNetwork: "Our integrated network provides competitive pricing, lot-wise testing and port-side logistics for both containerized and break bulk shipments.",
      quickStats: { productsAvailable: 8, countriesServed: 60, moq: "24 MT", leadTime: "14-25 Days" },
    },
    origins: [
      { region: "Madhya Pradesh", description: "A leading source of maize, wheat and soybean, with deep black cotton soils suited to rain-fed cereals.", climate: "Sub-tropical monsoon.", harvestPeriod: "October to November (Maize); March to April (Wheat)" },
      { region: "Karnataka", description: "Major producer of yellow maize, sorghum and finger millet (ragi) on red loamy soils.", climate: "Semi-arid tropical.", harvestPeriod: "September to December" },
      { region: "Rajasthan", description: "The largest producer of pearl millet (bajra) and a strong source of sorghum and wheat.", climate: "Arid to semi-arid.", harvestPeriod: "October to November (Bajra); March to April (Wheat)" },
      { region: "Bihar & Maharashtra", description: "Important maize belts, with Bihar producing rabi maize and Maharashtra supplying sorghum and maize for feed and starch.", climate: "Humid sub-tropical to semi-arid.", harvestPeriod: "October to December; March to May (Rabi maize)" },
    ],
    applications: [
      { industry: "Feed Mills & Livestock", description: "High-energy maize and sorghum for poultry, cattle, swine and aquafeed rations." },
      { industry: "Starch, Ethanol & Brewing", description: "Yellow maize and sorghum are used by starch, sweetener, ethanol and brewery industries." },
      { industry: "Foodservice & Milling", description: "Bulk grain for flour mills, maize meal, grits, tortillas and traditional staple foods." },
      { industry: "Retail & Health Foods", description: "Consumer-ready millets, flours and cereals for supermarkets and health-food brands." }
    ],
    marketIntelligence: {
      harvestSeason: "Kharif cereals (maize, sorghum, pearl millet) are harvested from September to December, while wheat and rabi maize are harvested from March to May.",
      exportSeason: "Maize exports peak from December to June, with millets shipping mostly between November and April.",
      demandTrends: "Strong growth in global demand for Indian millets, aided by the UN International Year of Millets, alongside steady demand for non-GMO maize from Asia, the Middle East and Africa.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed", "Non-GMO Declaration"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia", "Bangladesh", "Kenya", "Vietnam"],
    faqs: [
      { question: "Is your maize Non-GMO?", answer: "Yes, Indian maize is grown from non-GMO seed, and we provide a Non-GMO declaration and third-party certificate with every shipment." },
      { question: "Which millets do you supply?", answer: "We supply pearl millet (bajra), sorghum (jowar), finger millet (ragi), foxtail, little, kodo and barnyard millets, as whole grain or flour." },
      { question: "What is the maximum moisture and aflatoxin level?", answer: "Moisture is held at 14% maximum for maize and 12% for millets, while aflatoxin is under 10-20 ppb depending on food or feed grade." },
      { question: "Can you ship in bulk vessels?", answer: "Yes. For orders of 5,000 MT and above we arrange break bulk shipments from ports such as Kakinada, Kandla and Mundra with independent loading supervision." },
      { question: "Do you supply rice and wheat flour as well?", answer: "Yes. We supply premium Basmati rice under our Rice category and whole wheat Chakki Atta under our Flours & Starches category." }
    ],
  },

  // ==========================================================================
  // DRY FRUITS & NUTS
  // ==========================================================================
  {
    id: "cat-dry-fruits",
    slug: "dry-fruits-nuts",
    name: "Dry Fruits",
    label: "Premium Dry Fruits & Nuts",
    description: "Select dry fruits and nuts sourced from the best orchards and processed in India, offering unmatched taste and quality.",
    heroImage: "/images/product-categories/dry-fruits-nuts.webp",
    seoTitle: "Indian Dry Fruits & Nuts Exporter | Almonds, Peanuts, Cashews & Raisins",
    seoDescription: "Exporting premium almonds, peanuts, cashews and raisins from India. Rigorous quality control and custom packaging for global buyers.",
    heroTitle: "Premium Indian Dry Fruits Export",
    heroSubtitle: "High-grade almonds, peanuts, cashews, and raisins for the global market.",
    overviewText: "We export carefully selected, premium dry fruits and nuts from India, including processed almond kernels, Indian bold and java peanuts, world-renowned Indian cashews and golden raisins. India combines domestic crops with imported raw material processed in modern, cost-efficient facilities, and our strict electronic sorting and hand inspection ensure uniform size, clean appearance and exceptional taste. Products are packed in vacuum, nitrogen-flushed or carton packaging for extended shelf life.",
    whyIndia: [
      { title: "Premium Cashews", description: "Indian cashews are globally recognized for their buttery taste, white color and consistent kernel size." },
      { title: "Hand-Sorted Quality", description: "Meticulous grading, electronic color sorting and manual inspection ensure only the best nuts are exported." },
      { title: "Hygienic Processing", description: "Processed in state-of-the-art HACCP, GFSI-recognized facilities with metal detection and X-ray checks." },
      { title: "Custom Packaging", description: "Vacuum packing and nitrogen flushing to ensure long shelf life and freshness on long sea voyages." }
    ],
    overview: {
      industry: "India is a leading processor and exporter of dry fruits and nuts, and the world's largest processor of cashews and a major exporter of groundnuts.",
      production: "Sourced from verified orchards and farms in India and select global origins, then shelled, graded, sorted and packed in modern plants.",
      supplyNetwork: "Integrated network of shelling units, sorting lines and port-side warehouses provides strict quality control and reliable delivery.",
      quickStats: { productsAvailable: 5, countriesServed: 30, moq: "5 MT", leadTime: "15-20 Days" },
    },
    origins: [
      { region: "Goa, Kerala & Karnataka", description: "Famous for high-quality cashews, grown along the tropical west coast and processed in nearby factories.", climate: "Tropical.", harvestPeriod: "March to May" },
      { region: "Saurashtra, Gujarat", description: "The largest peanut belt in India, producing bold and java kernels for snacking, butter and oil.", climate: "Dry, semi-arid.", harvestPeriod: "October to November; February to April" },
      { region: "Maharashtra & Karnataka (Sangli, Vijayapura)", description: "The main raisin and grape drying region in India, producing golden and green raisins.", climate: "Semi-arid, dry winters.", harvestPeriod: "February to April" },
      { region: "Processing Hubs, Mumbai & Mundra", description: "Almond and other nuts are imported inshell and shelled, sorted and graded here, taking advantage of skilled labor and port access.", climate: "Coastal, humid.", harvestPeriod: "Year-round processing" },
    ],
    applications: [
      { industry: "Snack Manufacturing", description: "Premium ingredients for trail mixes, roasted and coated nuts, and snack bars." },
      { industry: "Confectionery", description: "Used in chocolates, marzipan, halva, brittle and premium sweets." },
      { industry: "Bakery & Dairy", description: "Blanched, sliced and diced nuts for breads, cakes, ice cream and yogurt inclusions." },
      { industry: "Retail & Gifting", description: "Consumer packs and gift boxes for supermarkets, e-commerce and festive gifting." }
    ],
    marketIntelligence: {
      harvestSeason: "Cashews are harvested from February to May, peanuts from September to November and February to April, and raisins from February to April.",
      exportSeason: "Most exports take place from April to December for cashews and raisins, and October to April for peanuts, with almond processing continuous throughout the year.",
      demandTrends: "Increasing demand for healthy, plant-based snacking options, along with festive and gifting demand in the Middle East and Asia, is driving steady growth.",
    },
    certifications: ["ISO 22000", "US FDA", "APEDA", "FSSAI", "SGS Assayed", "HACCP", "Halal"],
    exportMarkets: ["United States", "European Union", "Middle East", "South East Asia", "United Kingdom", "Australia", "Africa"],
    faqs: [
      { question: "Do you offer vacuum packaging?", answer: "Yes, we provide vacuum packaging in tins and flexi-pouches to maintain freshness." },
      { question: "Which dry fruits and nuts do you export?", answer: "We export almonds (Nonpareil, Carmel, blanched), Indian peanuts (bold, java, blanched), cashew kernels (W180 to W320, splits and pieces), raisins and other nuts on request." },
      { question: "How do you control aflatoxin in nuts?", answer: "We buy dry, clean raw material, use electronic sorting to remove discolored kernels, and test every lot at independent labs. Vacuum packing keeps the product stable in transit." },
      { question: "Can you pasteurize almonds?", answer: "Yes, steam pasteurization is available for almonds on request, with a validated 5-log reduction in Salmonella, to comply with US and EU regulations." },
      { question: "Do you accept private label orders?", answer: "Yes. We pack in retail pouches, tubs and gift boxes from 100g to 1kg with your brand design, with a minimum of 2 MT per design." }
    ],
  },

  // ==========================================================================
  // POWDERED SPICES
  // ==========================================================================
  {
    id: "cat-powdered-spices",
    slug: "powdered-spices",
    name: "Powdered Spices",
    label: "Export Grade Powdered Spices",
    description: "Finely ground, pure Indian spices with high volatile oil content and vibrant natural colors.",
    heroImage: "/images/product-categories/powdered-spices.webp",
    seoTitle: "Bulk Powdered Spices Exporter India | Turmeric, Chilli & Coriander Powder",
    seoDescription: "Exporting premium powdered spices like turmeric, chilli, coriander and cumin powder globally. Steam-sterilized, lab-tested and private label ready.",
    heroTitle: "Premium Powdered Spices",
    heroSubtitle: "Source export-quality ground spices with rich aroma, color and consistent particle size.",
    overviewText: "Finely ground from export-grade whole spices, our powders retain maximum volatile oils, color and pungency. Whole spices are cleaned, destoned and, where required, steam-sterilized before being milled in cooled grinders to prevent heat loss of aroma. We supply single-origin and blended powders in a range of mesh sizes to spice brands, food manufacturers and foodservice buyers, with lot-wise certificates of analysis and full traceability to the farm.",
    whyIndia: [
      { title: "Freshly Milled from Source", description: "Powders are ground close to the growing belts, shortening the time between harvest and packing and preserving flavor." },
      { title: "Low-Temperature Grinding", description: "Cryogenic and cooled milling retain volatile oils and natural color, giving higher ASTA and aroma values." },
      { title: "Microbiological Safety", description: "Steam sterilization and validated processes deliver Salmonella-negative, low plate count powders." },
      { title: "Customization", description: "Mesh size, blends, moisture, and packaging can be tailored to your recipe and market." }
    ],
    overview: {
      industry: "India produces world-class powdered spices used globally in curry powders, seasonings, meat processing, sauces and ready meals.",
      production: "Machine-ground at low temperatures from cleaned whole spices to retain volatile oils, with metal detection, sifting and magnets in the line.",
      supplyNetwork: "Direct from state-of-the-art GFSI recognized milling facilities near spice growing belts and export ports.",
      quickStats: { productsAvailable: 8, countriesServed: 40, moq: "10 MT", leadTime: "14 Days" },
    },
    origins: [
      { region: "Guntur, Andhra Pradesh", description: "Chilli powder, made from Teja, Byadgi and Sannam pods, is milled here in a range of heat and color levels.", climate: "Hot, dry climate.", harvestPeriod: "January to April" },
      { region: "Erode & Nizamabad", description: "The turmeric heartlands of Tamil Nadu and Telangana supply turmeric powder with high curcumin and vivid color.", climate: "Tropical savanna, well-irrigated.", harvestPeriod: "January to April" },
      { region: "Kota, Rajasthan & Unjha, Gujarat", description: "Coriander and cumin seed from these belts are ground into powders with high volatile oil and fresh aroma.", climate: "Arid to semi-arid with cool winters.", harvestPeriod: "February to April" },
      { region: "Mundra & Nhava Sheva Milling Clusters", description: "Port-side grinding and packing hubs enable quick export loading and blending of multi-origin powders.", climate: "Coastal.", harvestPeriod: "Year-round milling" },
    ],
    applications: [
      { industry: "Food Manufacturing", description: "Ingredient for sauces, soups, snacks, ready meals and meat seasonings." },
      { industry: "Spice Brands & Repackers", description: "Bulk powders to be repacked under retail brands in pouches, jars and sachets." },
      { industry: "Meat & Poultry Processing", description: "Steam-sterilized, standardized powders for marinades, sausages and rubs." },
      { industry: "Foodservice & Catering", description: "Consistent, ready-to-use spice powders for restaurants and central kitchens." }
    ],
    marketIntelligence: {
      harvestSeason: "Powders are milled year-round from stocks, with fresh-crop grinding from February to July after spice harvests.",
      exportSeason: "Year-round shipping, with contracts often placed from April to September to take advantage of new-crop pricing.",
      demandTrends: "Demand is rising for sterilized, pesticide-compliant and clean-label powders, and for organic and private-label offerings in North America and Europe.",
    },
    certifications: ["ISO 22000", "US FDA", "FSSAI", "APEDA", "Spices Board India", "HACCP & GMP", "Halal"],
    exportMarkets: ["United States", "European Union", "United Kingdom", "Middle East", "Malaysia", "South Africa", "Australia"],
    faqs: [
      { question: "Which powdered spices do you supply?", answer: "We supply chilli powder, turmeric powder, coriander powder, cumin powder, black pepper powder, garam masala and custom blends in bulk and retail packs." },
      { question: "Can you customize mesh size?", answer: "Yes. We grind from 20 to 100 mesh depending on the application, and provide particle size reports on request." },
      { question: "How do you ensure microbial safety?", answer: "We use steam sterilization, and every batch is tested at NABL-accredited labs for Salmonella, E. coli, yeast and mold, and plate count." },
      { question: "What is the shelf life?", answer: "Around 12 months from milling under proper storage. Barrier packaging or nitrogen flushing can extend aroma and color retention." },
      { question: "Do you offer organic powders?", answer: "Yes, NPOP/NOP/EU certified organic powders are available with a minimum order of 5 MT." }
    ]
  },

  // ==========================================================================
  // TEA & COFFEE
  // ==========================================================================
  {
    id: "cat-tea-coffee",
    slug: "tea-coffee",
    name: "Tea & Coffee",
    label: "Premium Indian Tea & Coffee",
    description: "Authentic Assam, Darjeeling teas and robust Arabica and Robusta Indian coffees.",
    heroImage: "/images/product-categories/tea-coffee.webp",
    seoTitle: "Indian Tea & Coffee Exporter | Assam CTC, Darjeeling & Green Coffee Bulk",
    seoDescription: "Bulk exporter of Assam CTC, Darjeeling orthodox tea and Indian Arabica and Robusta green coffee. Cup-tested, EU-compliant and available in private label.",
    heroTitle: "Indian Tea & Coffee Export Partner",
    heroSubtitle: "From Himalayan tea gardens to shade-grown coffee estates, sourced at origin.",
    overviewText: "India produces some of the world's most distinguished teas and coffees. We export robust Assam CTC, delicate Darjeeling orthodox and Nilgiri teas, along with washed Arabica, natural Robusta and Monsooned Malabar green coffee. Products are sourced from estates and auctions, cup-tested by our tasters and Q-graders, and shipped with lab reports for moisture, pesticide residue and defects. Custom blends, private label packing and tea bag conversion are available for brands worldwide.",
    whyIndia: [
      { title: "Diverse Origins", description: "Assam, Darjeeling, Nilgiri, Coorg, Chikmagalur and Wayanad each produce a distinct cup." },
      { title: "Shade-Grown Sustainability", description: "Much of India's coffee is grown under shade canopy in biodiverse landscapes, with many estates following sustainable practices." },
      { title: "Geographical Indications", description: "Darjeeling tea and Monsooned Malabar coffee are GI-protected, guaranteeing authenticity." },
      { title: "Century-Old Expertise", description: "Well-established estate systems, auction houses and quality boards ensure reliable grading and traceability." }
    ],
    overview: {
      industry: "India is the second-largest producer of tea and a leading producer of premium coffees, with a heritage that goes back more than 150 years.",
      production: "Sourced from high-altitude estates, tea gardens and cooperative processors, and sorted, graded and packed under strict hygiene.",
      supplyNetwork: "Integrated supply chain linking estates, Kolkata and Guwahati auctions, coffee curing works and export ports for dependable delivery.",
      quickStats: { productsAvailable: 6, countriesServed: 30, moq: "5 MT", leadTime: "21 Days" },
    },
    origins: [
      { region: "Assam", description: "The largest tea-growing region in the world, known for strong, malty CTC teas.", climate: "Tropical, with heavy monsoon rains.", harvestPeriod: "March to November (main flush May to June)" },
      { region: "Darjeeling, West Bengal", description: "The 'Champagne of Teas', with muscatel notes from Himalayan slopes at 600 to 2,000 meters.", climate: "Cool, misty, high altitude.", harvestPeriod: "March to November (First flush March to April)" },
      { region: "Coorg & Chikmagalur, Karnataka", description: "India's main Arabica and Robusta zones, with shade-grown estates in the Western Ghats.", climate: "Tropical highland with monsoon rains.", harvestPeriod: "November to February" },
      { region: "Nilgiris, Tamil Nadu & Wayanad, Kerala", description: "Produce bright, fragrant Nilgiri teas and Robusta and Arabica coffees at mid to high altitudes.", climate: "Cool, humid highland.", harvestPeriod: "Year-round for tea; November to February for coffee" },
    ],
    applications: [
      { industry: "Tea Packers & Blenders", description: "Bulk CTC and orthodox teas for tea bags, loose blends and breakfast teas." },
      { industry: "Specialty Coffee Roasters", description: "Washed Arabica, peaberry and Monsooned Malabar lots for single-origin and espresso blends." },
      { industry: "Instant Coffee & RTD Beverage", description: "Robusta and CTC dust grades for instant coffee, iced tea, and ready-to-drink beverages." },
      { industry: "HoReCa & Retail Brands", description: "Private label tea and coffee for hotels, cafes, supermarkets and e-commerce brands." }
    ],
    marketIntelligence: {
      harvestSeason: "Tea is harvested from March to November, with Darjeeling first flush in March-April. Arabica is harvested from November to January and Robusta from December to February.",
      exportSeason: "Tea ships year-round with peak volumes from July to December, while coffee ships mainly from February to October after new-crop curing.",
      demandTrends: "Growing appetite for specialty, single-estate and organic teas and coffees in Europe, North America and the Gulf, alongside steady demand for CTC in the Middle East and CIS.",
    },
    certifications: ["Tea Board of India", "Coffee Board of India", "ISO 22000", "FSSAI", "APEDA", "Rainforest Alliance (on request)", "Organic (on request)"],
    exportMarkets: ["United Kingdom", "Russia & CIS", "United Arab Emirates", "Iran & Iraq", "European Union", "United States", "Italy"],
    faqs: [
      { question: "What is the difference between CTC and orthodox tea?", answer: "CTC (crush, tear, curl) tea is machine-processed into small granules that brew strong and fast, while orthodox tea keeps the leaf whole or in large pieces for a lighter, more complex cup." },
      { question: "Which coffee grades do you offer?", answer: "We offer washed Arabica Plantation A, B and PB, natural Robusta Cherry AB and PB, and Monsooned Malabar AA, with cupping reports and certificates of analysis." },
      { question: "Can you supply organic or certified tea and coffee?", answer: "Yes. Organic, Rainforest Alliance and Fairtrade lots are available from certified estates on request, subject to seasonal availability." },
      { question: "Do you offer custom tea blends and private label packing?", answer: "Yes. Our tasters can create blends to match your profile and we pack in tea bags, boxes, pouches and tins with your branding." },
      { question: "How is tea and coffee packed for export?", answer: "CTC tea ships in 25-30kg paper sacks with liners, orthodox tea in foil-lined cartons, and green coffee in 60kg jute bags, optionally with GrainPro liners." }
    ]
  },

  // ==========================================================================
  // SOYA PRODUCTS
  // ==========================================================================
  {
    id: "cat-soya-products",
    slug: "soya-products",
    name: "Soya Products",
    label: "High-Protein Soya Products",
    description: "Non-GMO Soya chunks, granules, and meal sourced from Central India.",
    heroImage: "/images/product-categories/soya-products.webp",
    seoTitle: "Soya Products Exporter India | Non-GMO Soya Chunks, Granules & Meal",
    seoDescription: "Bulk exporter of Non-GMO soya chunks (TVP), soya granules, soya flour and soya meal from Madhya Pradesh. High protein, Halal and Kosher certified.",
    heroTitle: "Non-GMO Soya Products from India",
    heroSubtitle: "High-protein textured soya and soya meal made from India's Non-GMO soybeans.",
    overviewText: "Soya is a staple plant-based protein, and India, particularly Madhya Pradesh, is a leading source of Non-GMO soybeans. We export textured soya chunks (TVP), mini chunks, granules, defatted soya flour and soya meal for food, feed and nutrition industries. Products are made in ISO-certified facilities using controlled extrusion, tested for protein, moisture and hexane residue, and can be supplied with Halal, Kosher and Non-GMO documentation.",
    whyIndia: [
      { title: "Non-GMO Soybeans", description: "India grows soy from non-GMO seed, a major advantage for markets with strict labeling laws." },
      { title: "High Protein Content", description: "Textured soya contains 52% or more protein with low fat and zero cholesterol." },
      { title: "Integrated Crushing & Extrusion", description: "Soybean crushing plants supply defatted flour directly to extrusion lines, giving cost and freshness advantages." },
      { title: "Flexible Sizes & Specs", description: "Chunks, minis, granules and flours can be produced in custom size, protein level and flavor." }
    ],
    overview: {
      industry: "Soya is a staple plant-based protein and India is among the leading producers of soybeans and soya meal, supplying food and feed industries globally.",
      production: "Produced from Non-GMO Indian soybeans that are cleaned, dehulled, defatted, extruded and dried in hygienic, ISO-certified plants.",
      supplyNetwork: "Exported directly from Madhya Pradesh via Nhava Sheva and Mundra with lot-wise testing and documentation.",
      quickStats: { productsAvailable: 4, countriesServed: 25, moq: "1x20FT", leadTime: "15 Days" },
    },
    origins: [
      { region: "Madhya Pradesh", description: "Known as the 'Soya Bowl of India', it grows more than half of the country's soybeans on fertile black cotton soils.", climate: "Sub-tropical monsoon.", harvestPeriod: "October to November" },
      { region: "Maharashtra", description: "The second-largest soybean producer, with major crushing and solvent extraction plants around Latur and Nagpur.", climate: "Semi-arid tropical.", harvestPeriod: "October to November" },
      { region: "Rajasthan", description: "Growing soybean belt in the Hadoti region, supplying beans to central crushing hubs.", climate: "Semi-arid.", harvestPeriod: "October to November" },
    ],
    applications: [
      { industry: "Vegetarian & Vegan Foods", description: "Meat alternatives such as nuggets, patties, curries and ready meals made from TVP." },
      { industry: "Meat Blending", description: "Soya granules used to extend ground meat, lower cost and reduce fat in sausages and burgers." },
      { industry: "Sports & Clinical Nutrition", description: "Soya protein flour and concentrates for protein bars, shakes and nutrition products." },
      { industry: "Animal Feed", description: "Soya meal is a primary protein source for poultry, cattle, swine and aquafeed rations." }
    ],
    marketIntelligence: {
      harvestSeason: "Soybeans are harvested in October and November, with crushing and TVP production continuing throughout the year.",
      exportSeason: "Year-round shipment, with peak soya meal exports between December and June and TVP orders spread evenly through the year.",
      demandTrends: "Fast-growing demand for plant-based proteins in Europe, the Middle East and Africa is driving strong interest in Non-GMO textured soya.",
    },
    certifications: ["Non-GMO", "FSSAI", "ISO 22000", "Halal", "Kosher", "HACCP", "APEDA"],
    exportMarkets: ["Middle East", "United Kingdom", "European Union", "Nigeria & West Africa", "Malaysia", "Singapore", "Sri Lanka"],
    faqs: [
      { question: "Is your soya Non-GMO?", answer: "Yes, all products are made from Non-GMO Indian soybeans, and Non-GMO certification is provided with each shipment." },
      { question: "What products do you offer?", answer: "We offer soya chunks in large and mini sizes, soya granules and mince, defatted soya flour, and soya meal for feed." },
      { question: "What is the protein content of your textured soya?", answer: "The standard is 52% minimum protein, and grades of 55% and above can be produced on request." },
      { question: "What is the shelf life and storage?", answer: "12 months from manufacture in a cool, dry place, in sealed PP bags with inner liners to prevent moisture pickup." },
      { question: "Can you provide flavored or colored TVP?", answer: "Yes, natural, chicken, and beef-flavored TVP can be produced, subject to a trial batch minimum." }
    ]
  },

  // ==========================================================================
  // RICE
  // ==========================================================================
  {
    id: "cat-rice",
    slug: "rice",
    name: "Rice Varieties",
    label: "Premium Basmati & Non-Basmati Rice",
    description: "Aged 1121 Basmati, Sharbati, and Sona Masoori rice varieties.",
    heroImage: "/images/product-categories/rice.webp",
    seoTitle: "Indian Rice Exporter | 1121 Basmati, Sella & Non-Basmati Rice Bulk",
    seoDescription: "Bulk exporter of aged 1121 Basmati, Sharbati, Sona Masoori and other Indian rice varieties. Sortexed, DNA-tested and available in private label packing.",
    heroTitle: "Indian Basmati & Non-Basmati Rice Exporter",
    heroSubtitle: "Aged, sortexed rice from the Himalayan foothills and India's rice bowls.",
    overviewText: "India is the world's largest exporter of rice and the sole source of authentic Basmati. We supply aged 1121 Basmati in creamy sella, golden sella and steam forms, along with Pusa, Sharbati, Sona Masoori, IR64 and other non-Basmati types. Paddy is aged for 12 to 18 months, milled in modern facilities with Satake color sorters and packed to buyer specifications in jute, non-woven or BOPP bags. All lots are tested for pesticide residue and authenticity, with DNA test reports available.",
    whyIndia: [
      { title: "Authentic Basmati", description: "True Basmati is grown only in the GI-tagged region at the foothills of the Himalayas in India and Pakistan." },
      { title: "Aged for Quality", description: "Paddy is aged for 12 to 18 months to reduce moisture, increase aroma and ensure separate, fluffy grains." },
      { title: "World-Class Milling", description: "Modern mills with optical sorters ensure uniform grain length, low broken percentage and no admixture." },
      { title: "Wide Variety", description: "From long-grain aromatic Basmati to medium-grain Sona Masoori and parboiled rice, we serve every market segment." }
    ],
    overview: {
      industry: "India is the largest exporter of rice globally, shipping more than 20 million tons annually to over 150 countries.",
      production: "Aged to perfection for optimal cooking characteristics, then milled, sortexed and polished in modern mills.",
      supplyNetwork: "Extensive network of rice mills and parboiling units in Punjab, Haryana and other states, close to Mundra and Kandla ports.",
      quickStats: { productsAvailable: 10, countriesServed: 60, moq: "24 MT", leadTime: "14 Days" },
    },
    origins: [
      { region: "Punjab & Haryana", description: "The heart of Basmati country, producing 1121, 1509 and Pusa Basmati in fertile, canal-irrigated plains.", climate: "Sub-tropical with hot summers and cool winters.", harvestPeriod: "October to November" },
      { region: "Uttar Pradesh & Uttarakhand", description: "Western UP and the Terai belt of Uttarakhand grow high-quality Basmati and Sharbati rice.", climate: "Sub-tropical.", harvestPeriod: "October to November" },
      { region: "Andhra Pradesh & Telangana", description: "The source of Sona Masoori and other medium-grain varieties, along with parboiled rice.", climate: "Tropical.", harvestPeriod: "November to December; April to May" },
      { region: "West Bengal & Odisha", description: "Major producers of non-Basmati long-grain white and parboiled rice such as IR64 and Swarna.", climate: "Humid tropical.", harvestPeriod: "November to January" },
    ],
    applications: [
      { industry: "Fine Dining & Catering", description: "Long-grain 1121 sella for Mandi, Kabsa, Biryani and Pulao in restaurants and catering companies." },
      { industry: "Retail & Supermarkets", description: "Consumer packs in 1kg to 20kg bags under private label or our own brand." },
      { industry: "Wholesale & Distribution", description: "Bulk jute bags to importers and distributors serving local grocery stores." },
      { industry: "Food Processing & Ready Meals", description: "Steam and parboiled rice for ready-to-eat meals, frozen foods and canned rice." }
    ],
    marketIntelligence: {
      harvestSeason: "Kharif paddy, including Basmati, is harvested in October and November, followed by drying and aging before milling.",
      exportSeason: "New-crop Basmati is contracted from December, with aged stock shipped year-round to the Middle East, Europe and the US.",
      demandTrends: "Stable demand from the Gulf, rising interest in aged, premium Basmati in the US and Europe, and growing private label sales in supermarkets.",
    },
    certifications: ["APEDA", "ISO 22000", "FSSAI", "Halal", "SGS Inspected", "HACCP", "BRC (on request)"],
    exportMarkets: ["Saudi Arabia", "United Arab Emirates", "Iran", "European Union", "United States", "Kuwait", "United Kingdom"],
    faqs: [
      { question: "What Basmati varieties do you supply?", answer: "We supply 1121, 1509, Pusa and traditional Basmati in creamy sella, golden sella, steam and raw forms, plus non-Basmati varieties such as Sharbati, Sona Masoori and IR64." },
      { question: "Is the rice aged?", answer: "Yes, our premium Basmati is aged 12 to 18 months for better cooking, elongation and aroma." },
      { question: "Can you provide DNA test reports?", answer: "Yes, we can provide DNA test reports from a recognized lab to confirm Basmati authenticity and variety." },
      { question: "How do you meet EU pesticide limits?", answer: "We source from monitored farms, avoid banned chemicals such as tricyclazole, and test each lot for a broad range of residues before shipment." },
      { question: "What packaging options are available?", answer: "Jute, non-woven and BOPP bags from 1kg to 40kg, with private label printing and MOQ of one 20ft container." }
    ]
  },

  // ==========================================================================
  // HERBS & BOTANICALS
  // ==========================================================================
  {
    id: "cat-herbs-botanicals",
    slug: "herbs-botanicals",
    name: "Herbs & Botanicals",
    label: "Indian Herbs & Botanicals",
    description: "Senna leaves, Ashwagandha, and Psyllium Husk for pharmaceutical and nutraceutical use.",
    heroImage: "/images/product-categories/herbs-botanicals.webp",
    seoTitle: "Herbs & Botanicals Exporter India | Psyllium Husk, Ashwagandha & Senna",
    seoDescription: "Bulk supplier of psyllium husk, ashwagandha root, senna leaves and other Ayurvedic botanicals. GMP-compliant, lab-tested and available in organic.",
    heroTitle: "Indian Herbs & Botanicals for Pharma & Nutraceuticals",
    heroSubtitle: "Ethically sourced, lab-tested botanicals from India's traditional growing regions.",
    overviewText: "India supplies critical botanicals for global pharma, nutraceutical and herbal industries, drawing on centuries of Ayurvedic knowledge. We export psyllium husk and seed, ashwagandha root, senna leaves and pods, moringa, turmeric extract raw material and other botanicals. Each lot is cleaned, sterilized where needed and tested for heavy metals, pesticides, microbes and marker compounds, with organic and GMP-compliant supply available.",
    whyIndia: [
      { title: "Ayurvedic Heritage", description: "Centuries of knowledge in cultivating and processing medicinal plants such as ashwagandha and senna." },
      { title: "Dominant Psyllium Supply", description: "India produces over 80% of the world's psyllium, from the arid soils of Gujarat and Rajasthan." },
      { title: "Quality Testing", description: "Testing for heavy metals, pesticides, microbial limits and active markers meets USP, Ph. Eur. and BP standards." },
      { title: "Organic & Sustainable Sourcing", description: "Partnerships with farmer groups provide certified organic and sustainably wild-harvested raw materials." }
    ],
    overview: {
      industry: "India supplies critical botanicals for global pharma, nutraceutical, cosmetic and herbal industries.",
      production: "Ethically harvested, cleaned, dried and processed in GMP-aligned facilities, with sterilization and milling as needed.",
      supplyNetwork: "Direct from specialized botanical farms and farmer producer organizations in Gujarat, Rajasthan, Madhya Pradesh and Tamil Nadu.",
      quickStats: { productsAvailable: 5, countriesServed: 20, moq: "2 MT", leadTime: "20 Days" },
    },
    origins: [
      { region: "Unjha & North Gujarat", description: "The global trading center for psyllium (isabgol), with extensive husking and cleaning mills.", climate: "Arid, sandy soils, cool dry winters.", harvestPeriod: "February to April" },
      { region: "Neemuch & Mandsaur, Madhya Pradesh", description: "Leading region for ashwagandha and other medicinal plants grown in dry, sandy loam soils.", climate: "Semi-arid.", harvestPeriod: "December to March" },
      { region: "Tirunelveli & Tuticorin, Tamil Nadu", description: "The main source of Indian senna leaves and pods, sun-dried and graded for laxative use.", climate: "Hot, dry.", harvestPeriod: "Year-round, peak October to March" },
      { region: "Rajasthan", description: "Grows psyllium, fenugreek and other seed botanicals under low rainfall conditions.", climate: "Arid to semi-arid.", harvestPeriod: "February to April" },
    ],
    applications: [
      { industry: "Pharmaceutical Manufacturing", description: "Bulk fiber and plant material for laxatives, digestive products and Ayurvedic formulations." },
      { industry: "Dietary Supplements", description: "Capsules, powders and gummies with psyllium, ashwagandha and moringa." },
      { industry: "Functional Food & Bakery", description: "Psyllium husk as a gluten-free binder and fiber source in breads, cereals and beverages." },
      { industry: "Cosmetics & Personal Care", description: "Herbal powders and extracts used in skin and hair-care products." }
    ],
    marketIntelligence: {
      harvestSeason: "Psyllium and other Rabi botanicals are harvested from February to April, while ashwagandha is harvested from December to March.",
      exportSeason: "Year-round shipping from processed stock, with contracts placed from April to July when new-crop prices are established.",
      demandTrends: "Strong growth in demand for fiber and adaptogen supplements, particularly in the US and Europe, with buyers seeking organic, sterilized and traceable raw material.",
    },
    certifications: ["GMP", "ISO 22000", "US FDA", "Organic (NPOP/NOP/EU)", "Halal", "Kosher", "FSSAI"],
    exportMarkets: ["United States", "European Union", "United Kingdom", "Australia", "Canada", "Japan", "Middle East"],
    faqs: [
      { question: "Which botanicals do you supply?", answer: "We supply psyllium husk and seed, ashwagandha root and powder, senna leaves and pods, moringa leaf powder, fenugreek and other Ayurvedic raw materials on request." },
      { question: "Are the botanicals tested for heavy metals and pesticides?", answer: "Yes, every lot is tested for heavy metals, pesticide residues, microbiological limits and, where required, marker compounds such as withanolides." },
      { question: "Do you offer organic botanicals?", answer: "Yes, certified organic (NPOP/NOP/EU) botanicals are available from certified farmer groups, subject to crop and season." },
      { question: "Can you supply sterilized material?", answer: "Yes, steam sterilization (ETO-free) is available to meet strict microbiological limits for the US and EU." },
      { question: "What are the minimum order quantities?", answer: "MOQ starts from 2 MT for most botanicals, with trial quantities of 100 kg to 500 kg available for new buyers." }
    ]
  },

  // ==========================================================================
  // FLOURS & STARCHES
  // ==========================================================================
  {
    id: "cat-flours-starches",
    slug: "flours-starches",
    name: "Flours & Starches",
    label: "Industrial Flours & Starches",
    description: "Maize starch, wheat flour, and gram flour for food and industrial applications.",
    heroImage: "/images/product-categories/flours-starches.webp",
    seoTitle: "Flours & Starches Exporter India | Chakki Atta, Maize Starch & Besan",
    seoDescription: "Bulk exporter of Chakki Atta, wheat flour, maize starch, besan and other flours from India. Stone-ground, no bleach, private label and fortified options available.",
    heroTitle: "Indian Flours & Starches for Food & Industry",
    heroSubtitle: "Stone-ground atta, gram flour, maize starch and more, milled under strict hygiene.",
    overviewText: "Flours and starches are essential ingredients for food manufacturing, and India's milling sector offers wide variety at competitive cost. We export whole wheat Chakki Atta, Sharbati atta, maida, sooji, besan (gram flour), maize starch and other flours to bakeries, snack makers, retail brands and industrial users. Grain is cleaned through multiple stages, milled in hygienic facilities, tested for moisture, ash and gluten, and packed in retail pouches or bulk sacks.",
    whyIndia: [
      { title: "Quality Raw Material", description: "Access to Sharbati wheat, high-protein chickpeas and non-GMO maize from India's best farming belts." },
      { title: "Traditional & Modern Milling", description: "Stone-ground chakki milling combined with modern hygienic plants." },
      { title: "Custom Specifications", description: "Granularity, extraction rate, fortification and packaging tailored to your product." },
      { title: "Cost Competitive", description: "Efficient milling and logistics deliver competitive landed prices." }
    ],
    overview: {
      industry: "India's flour and starch industry supplies food manufacturers, bakeries, ethnic grocery chains and industrial users worldwide.",
      production: "Milled under strict hygienic conditions, with multi-stage cleaning, magnetic separation and metal detection.",
      supplyNetwork: "Sourced from high-capacity mills in Madhya Pradesh, Gujarat, Maharashtra and Rajasthan, shipping through Mundra and Nhava Sheva.",
      quickStats: { productsAvailable: 5, countriesServed: 30, moq: "1x20FT", leadTime: "14 Days" },
    },
    origins: [
      { region: "Madhya Pradesh", description: "Home of Sharbati wheat and a major flour milling base, producing soft, golden atta.", climate: "Sub-tropical.", harvestPeriod: "March to April" },
      { region: "Gujarat", description: "Produces high-quality wheat, groundnut and chickpea, with modern flour mills near Mundra and Kandla ports.", climate: "Semi-arid.", harvestPeriod: "March to April" },
      { region: "Maharashtra & Karnataka", description: "Major maize and chickpea belts feeding starch plants and besan mills.", climate: "Semi-arid tropical.", harvestPeriod: "October to December; February to March" },
    ],
    applications: [
      { industry: "Bakeries & Flatbread Makers", description: "Atta and wheat flour for rotis, chapatis, parathas, naan and breads." },
      { industry: "Snack & Sweet Manufacturing", description: "Besan for namkeen, pakoras and sweets, and starch for coatings and batters." },
      { industry: "Industrial & Pharma Use", description: "Maize starch for pharmaceuticals, textiles, paper and adhesives." },
      { industry: "Retail & Ethnic Grocery", description: "Consumer atta and flour packs of 1kg to 10kg under private label." }
    ],
    marketIntelligence: {
      harvestSeason: "Wheat is harvested from March to April and maize from October to December, with milling continuing year-round.",
      exportSeason: "Year-round shipping, with peak demand ahead of festivals in the Middle East, UK and North America.",
      demandTrends: "Steady growth in ethnic food demand, and rising interest in fortified, stone-ground and multigrain flours from health-conscious consumers.",
    },
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Halal", "APEDA", "Kosher (on request)"],
    exportMarkets: ["United Arab Emirates", "United Kingdom", "United States", "Canada", "Australia", "East Africa", "Kuwait"],
    faqs: [
      { question: "What flours and starches do you supply?", answer: "We supply Chakki Atta, Sharbati atta, maida, sooji, besan, multigrain flour, maize flour and maize starch." },
      { question: "What is the shelf life of atta?", answer: "Around 3 to 6 months depending on packaging, since the germ oil in whole wheat flour limits shelf life." },
      { question: "Can you fortify flours?", answer: "Yes, iron, folic acid and B vitamin fortification is available to match national guidelines or buyer requirements." },
      { question: "Do you offer private label packing?", answer: "Yes, we pack in 1kg to 10kg BOPP, non-woven and paper bags with your brand design." },
      { question: "How do you prevent insect infestation in transit?", answer: "Moisture is kept below 12%, packaging uses insect-proof liners, and containers are fumigated as required by the destination country." }
    ]
  },

  // ==========================================================================
  // OTHER
  // ==========================================================================
  {
    id: "cat-other",
    slug: "other",
    name: "Other Commodities",
    label: "Specialty Commodities",
    description: "Specialty agricultural products tailored to buyer requirements.",
    heroImage: "/images/product-categories/other.webp",
    seoTitle: "Specialty Agri Commodities Exporter India | Desiccated Coconut & More",
    seoDescription: "Exporter of desiccated coconut, jaggery, dehydrated vegetables and other specialty Indian agri commodities, sourced to buyer specifications.",
    heroTitle: "Specialty Indian Commodities on Demand",
    heroSubtitle: "Custom sourcing of agri-commodities that fit your specification and market.",
    overviewText: "Beyond our core categories, we source and export a range of specialty agricultural commodities to buyer specifications. These include high fat desiccated coconut, coconut products, jaggery, dehydrated onion and garlic, tamarind, sesame-based products and other regional specialties. Our procurement team finds reliable producers, verifies quality and handles documentation and logistics so that buyers get a single point of contact for diverse sourcing.",
    whyIndia: [
      { title: "Diverse Agriculture", description: "India's varied climate and soils support hundreds of crops and processed products." },
      { title: "Sourcing on Demand", description: "We locate and verify producers for products outside our regular catalog." },
      { title: "Quality Verification", description: "Independent inspection and lab testing on every specialty lot." },
      { title: "Single Window Service", description: "Sourcing, quality control, packing, documentation and shipping through one partner." }
    ],
    overview: {
      industry: "Diverse agricultural exports, from coconut and tropical products to dehydrated foods and jaggery, serve niche and growing global demand.",
      production: "Sourced on demand from vetted producers and processors, and inspected before shipment.",
      supplyNetwork: "Extensive procurement channels across India's regional markets, with export handling from major ports.",
      quickStats: { productsAvailable: 5, countriesServed: 10, moq: "Varies", leadTime: "Varies" },
    },
    origins: [
      { region: "Kerala & Tamil Nadu", description: "India's coconut heartland, producing desiccated coconut, coconut oil and coconut-based products.", climate: "Humid tropical coastal.", harvestPeriod: "Year-round" },
      { region: "Maharashtra & Uttar Pradesh", description: "Leading producers of jaggery and sugarcane products in cooperative and private mills.", climate: "Tropical to sub-tropical.", harvestPeriod: "October to March" },
      { region: "Gujarat (Mahuva & Bhavnagar)", description: "Home to dehydrated onion and garlic processing clusters, with abundant raw material.", climate: "Semi-arid.", harvestPeriod: "February to May" },
    ],
    applications: [
      { industry: "Bakery & Confectionery", description: "Desiccated coconut for biscuits, cakes, chocolates and bars." },
      { industry: "Food Processing", description: "Dehydrated vegetables, tamarind and jaggery as ingredients in sauces, snacks and ready meals." },
      { industry: "Retail & Private Label", description: "Consumer packs of specialty items for supermarkets and ethnic grocers." },
      { industry: "Foodservice", description: "Bulk supply for catering and institutional kitchens." }
    ],
    marketIntelligence: {
      harvestSeason: "Varies by product; coconut is harvested year-round while jaggery is produced mainly from October to March.",
      exportSeason: "Year-round shipment, with peaks that vary by commodity and destination market.",
      demandTrends: "Growing global interest in natural sweeteners, coconut-based foods and dehydrated ingredients for convenience and clean-label products.",
    },
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Halal", "Kosher", "APEDA"],
    exportMarkets: ["United States", "European Union", "Middle East", "United Kingdom", "Australia", "Singapore"],
    faqs: [
      { question: "What products fall under Other Commodities?", answer: "Desiccated coconut, jaggery, dehydrated onion and garlic, tamarind and other specialty items sourced to buyer requirements." },
      { question: "Can you source products not listed on your website?", answer: "Yes. Send us your specification and target price, and our team will locate suitable suppliers, verify quality and quote within a few working days." },
      { question: "How do you handle quality for special orders?", answer: "We agree on written specifications and samples, use independent pre-shipment inspection, and provide lab reports before dispatch." },
      { question: "What are the minimum order quantities?", answer: "MOQ varies by product, typically from one pallet to a 20ft container, and will be confirmed with your quote." },
      { question: "Do you offer private label and custom packaging?", answer: "Yes, custom packaging from retail pouches to bulk sacks is available, with your branding and labeling requirements." }
    ]
  }
];