import { Product as PrismaProduct } from './types';

export type RawProduct = {
  id: string;
  name: string;
  slug: string;
  category: "Spices & Powders" | "Grains & Millets" | "Rice" | "Pulses & Beans" | "Dry Fruits & Nuts" | "Tea & Coffee" | "Soya Products" | "Herbs & Botanicals" | "Flours & Starches" | "Other";
  certifications: ("APEDA" | "FSSAI" | "ISO 22000" | "Organic" | "Halal" | "Kosher")[];
  exportMarkets: ("USA" | "EU" | "Middle East" | "Asia" | "Africa")[];
  packagingTypes: ("Bulk Bags (25/50kg)" | "Retail Pouches" | "Jute Bags" | "Custom")[];
  moq: string;
  shortDesc: string;
  image: string;
  rating?: number;

  botanicalName?: string;
  specifications?: Record<string, string>;
  grades?: { name: string; description: string }[];
  applications?: string[];
  faqs?: { question: string; answer: string }[];
  origin?: string;
  shelfLife?: string;
  leadTime?: string;
};

export function adaptToPrisma(raw: RawProduct): PrismaProduct {
  const generatedId = raw.id;

  const specsObj = raw.specifications || {
    "Moisture": "12% Max",
    "Purity": "99% Min",
    "Admixture": "1% Max",
    "Foreign Matter": "0.5% Max",
    "Salmonella": "Absent / 25g"
  };

  const specsArray = Object.entries(specsObj).map(([key, value], idx) => ({
    id: `spec-${generatedId}-${idx}`,
    productId: generatedId,
    label: key,
    value: value,
    sortOrder: idx
  }));

  const gradesArray = raw.grades || [
    { name: "Grade A", description: "Premium quality, machine cleaned, sorting 100%." },
    { name: "Grade B", description: "Standard quality, suitable for general processing." }
  ];

  const faqsArray = raw.faqs || [
    { question: `What is the minimum order quantity for ${raw.name}?`, answer: `The MOQ is typically ${raw.moq}, depending on the packaging requirement.` },
    { question: "Can you provide custom packaging?", answer: "Yes, we offer custom packaging solutions including retail pouches, bulk bags, and private labeling." },
    { question: "Are your products certified?", answer: `Yes, this product holds ${raw.certifications.join(', ')} certifications.` }
  ];

  return {
    id: raw.id,
    name: raw.name,
    slug: raw.slug,
    botanicalName: raw.botanicalName || `Botanical ${raw.name}`,
    hsCode: `HS${Math.floor(Math.random() * 9000) + 1000}`,
    categoryId: raw.category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    category: {
      id: raw.category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: raw.category,
    },
    shortDescription: raw.shortDesc,
    description: `${raw.name} is one of our premium exports. ${raw.shortDesc} It undergoes stringent quality checks to ensure international compliance.`,
    origin: raw.origin || "Madhya Pradesh, India",
    harvestSeason: "Available Year Round",
    minimumOrderQuantity: raw.moq,
    shelfLife: raw.shelfLife || "12-24 Months",
    applications: raw.applications || [
      "Food manufacturing and processing",
      "Culinary applications in HORECA",
      "Retail packaging for direct consumer use"
    ],
    status: 'PUBLISHED',
    featured: false,

    images: [{
      id: `img-${generatedId}`,
      productId: generatedId,
      url: raw.image,
      alt: raw.name,
      isFeatured: true,
      sortOrder: 0
    }],

    specifications: specsArray,

    grades: gradesArray.map((g, i) => ({
      id: `grade-${generatedId}-${i}`,
      productId: generatedId,
      gradeName: g.name,
      description: g.description
    })),

    packagingOptions: raw.packagingTypes.map((pt, i) => ({
      id: `pkg-${generatedId}-${i}`,
      productId: generatedId,
      type: pt,
      sizes: ["Standard"]
    })),

    faqs: faqsArray.map((f, i) => ({
      id: `faq-${generatedId}-${i}`,
      productId: generatedId,
      question: f.question,
      answer: f.answer
    })),

    certifications: raw.certifications.map((c, i) => ({
      id: `cert-${i}`,
      name: c,
      slug: c.toLowerCase(),
      issuingBody: "International Certification Body",
      badgeImage: "/badges/cert.png",
      description: `${c} standard certification`
    })),

    exportMarkets: raw.exportMarkets.map((m, i) => ({
      id: `mkt-${i}`,
      country: m,
      slug: m.toLowerCase().replace(/ /g, '-'),
      region: m,
      overview: `Strategic export market in ${m}`,
      keyImportRequirements: ["Standard Customs"],
      majorPortsServed: ["Main Port"],
      transitTimeEstimate: "14-21 Days"
    })),

    seoMetaTitle: `${raw.name} Exporter | Premium Quality`,
    seoMetaDesc: raw.shortDesc,
    canonicalUrl: `/products/${raw.slug}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

// Extracted and mapped from the provided sitemap
export const PRODUCTS_DATA: RawProduct[] = [
  // GRAINS & MILLETS
  {
    id: "p1", slug: "maizewhite-yellow", name: "Maize (White/Yellow)", category: "Grains & Millets",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "100 MT",
    shortDesc: "Premium Indian white and yellow maize exporter. APEDA certified bulk supplier.", image: "/images/placeholder.jpg",
    botanicalName: "Zea mays", origin: "Madhya Pradesh & Karnataka, India", shelfLife: "12 Months", leadTime: "14-21 Days",
    specifications: { "Moisture": "14% Max", "Admixture": "2% Max", "Broken/Damaged": "3% Max", "Aflatoxin": "20 PPB Max" },
    grades: [{ name: "Human Consumption", description: "Machine cleaned, sound grains." }, { name: "Animal Feed", description: "Standard grade for poultry and cattle feed." }],
    applications: ["Food processing & milling", "Poultry and livestock feed", "Starch and ethanol production"],
    faqs: [{ question: "Is your maize suitable for human consumption?", answer: "Yes, we export premium machine-cleaned maize specifically graded for human consumption." }]
  },
  {
    id: "p2", slug: "yellow-millet-kangni", name: "Yellow Millet (Kangni)", category: "Grains & Millets",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Nutrient-rich Indian yellow millet exporter. High protein, gluten-free bulk grain.", image: "/images/placeholder.jpg",
    botanicalName: "Setaria italica", origin: "Rajasthan & Maharashtra, India", shelfLife: "12 Months", leadTime: "10-15 Days",
    specifications: { "Moisture": "12% Max", "Purity": "99% Min", "Foreign Matter": "1% Max" },
    grades: [{ name: "Sortex Cleaned", description: "99.9% pure, sortex cleaned for premium retail." }],
    applications: ["Gluten-free baking and cereals", "Bird seed blends", "Nutritional bars and snacks"]
  },
  {
    id: "p3", slug: "foxtail-millet", name: "Foxtail Millet", category: "Grains & Millets",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Wholesale foxtail millet supplier. Certified organic Indian millet for international markets.", image: "/images/placeholder.jpg",
    botanicalName: "Setaria italica", origin: "Andhra Pradesh, India", shelfLife: "12-18 Months", leadTime: "14 Days",
    specifications: { "Moisture": "10-12% Max", "Purity": "99.5% Min", "Protein": "12.3% Min" },
    grades: [{ name: "Organic Premium", description: "Certified organic, sortex cleaned." }],
    applications: ["Health foods and diabetic diets", "Extruded snacks", "Traditional porridge blends"]
  },
  {
    id: "p4", slug: "wheat", name: "Wheat", category: "Grains & Millets",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "100 MT",
    shortDesc: "Bulk milling wheat exporter from India. High gluten, superior quality grains.", image: "/images/placeholder.jpg",
    botanicalName: "Triticum aestivum", origin: "Madhya Pradesh & Punjab, India", shelfLife: "12 Months", leadTime: "15-20 Days",
    specifications: { "Moisture": "12% Max", "Protein": "11-13% Min", "Gluten": "26% Min", "Falling Number": "400 Sec Min" },
    grades: [{ name: "Milling Wheat Grade 1", description: "High protein wheat suitable for bread flour." }, { name: "Grade 2", description: "Standard wheat for general purpose flour." }],
    applications: ["Flour milling (Atta & Maida)", "Bakery and pasta manufacturing", "Animal feed formulations"]
  },
  {
    id: "p5", slug: "oats", name: "Oats", category: "Grains & Millets",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches"], moq: "20 MT",
    shortDesc: "Premium Indian oats exporter. High-fiber rolling oats for human consumption.", image: "/images/placeholder.jpg",
    botanicalName: "Avena sativa", origin: "North India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max", "Purity": "99% Min", "Test Weight": "50 kg/hl Min" },
    grades: [{ name: "Milling Grade", description: "Cleaned and graded for flaking and rolling." }],
    applications: ["Breakfast cereals (Rolled Oats)", "Oat milk production", "Bakery and snack bars"]
  },

  // SPICES & POWDERS
  {
    id: "p6", slug: "dehydrated-garlic-flakes", name: "Dehydrated Garlic Flakes", category: "Spices & Powders",
    certifications: ["FSSAI", "ISO 22000", "Halal"], exportMarkets: ["USA", "EU", "Middle East"], packagingTypes: ["Custom", "Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Bulk dehydrated garlic flakes exporter. High pungency Indian garlic for food manufacturing.", image: "/images/placeholder.jpg",
    botanicalName: "Allium sativum", origin: "Gujarat, India", shelfLife: "24 Months", leadTime: "14-21 Days",
    specifications: { "Moisture": "6% Max", "SO2": "50 PPM Max", "Total Ash": "4% Max" },
    grades: [{ name: "Premium Grade A", description: "Sortex cleaned, 100% pure garlic flakes without roots or skins." }],
    applications: ["Ready-to-eat meals", "Spice blends and seasonings", "Soups and sauces"],
    faqs: [{ question: "Do you offer custom milling?", answer: "Yes, we can mill flakes into minced, chopped, or powder formats upon request." }]
  },
  {
    id: "p7", slug: "saffron", name: "Saffron", category: "Spices & Powders",
    certifications: ["FSSAI", "ISO 22000", "Organic"], exportMarkets: ["USA", "EU", "Middle East"], packagingTypes: ["Retail Pouches"], moq: "10 KG",
    shortDesc: "Pure Kashmiri saffron exporter. Premium grade organic saffron threads for wholesale.", image: "/images/placeholder.jpg",
    botanicalName: "Crocus sativus", origin: "Jammu & Kashmir, India", shelfLife: "24 Months", leadTime: "7 Days",
    specifications: { "Crocin (Color)": "220+ Min", "Safranal (Aroma)": "20-50", "Picrocrocin (Flavor)": "70+ Min", "Moisture": "8% Max" },
    grades: [{ name: "Mogra (Super Negin)", description: "Longest, thickest all-red threads with maximum potency." }, { name: "Lacha", description: "Red threads with slight yellow styles." }],
    applications: ["Gourmet culinary dishes", "Pharmaceuticals and Ayurveda", "Cosmetics and perfumes"],
    faqs: [{ question: "Can you provide ISO 3632 testing?", answer: "Yes, every batch comes with an ISO 3632 test report guaranteeing Grade 1 quality." }]
  },
  {
    id: "p8", slug: "white-pepper", name: "White Pepper", category: "Spices & Powders",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["EU", "USA"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Wholesale Indian white pepper exporter. Double washed, high-piperine peppercorns.", image: "/images/placeholder.jpg",
    botanicalName: "Piper nigrum", origin: "Kerala, India", shelfLife: "24 Months", leadTime: "15-20 Days",
    specifications: { "Piperine": "5% Min", "Moisture": "12% Max", "Light Berries": "2% Max" },
    grades: [{ name: "Double Washed (DW)", description: "Premium creamy white peppercorns, fully decorticated." }],
    applications: ["Light-colored sauces and soups", "Meat processing", "Premium spice grinders"]
  },
  {
    id: "p9", slug: "white-pepper-powder", name: "White Pepper Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["EU", "USA"], packagingTypes: ["Retail Pouches"], moq: "2 MT",
    shortDesc: "Finely ground white pepper powder. Bulk supplier of unadulterated spice powders.", image: "/images/placeholder.jpg",
    botanicalName: "Piper nigrum", origin: "Kerala, India", shelfLife: "18 Months", leadTime: "14 Days",
    specifications: { "Mesh Size": "40-60 Mesh", "Moisture": "10% Max", "Piperine": "4.5% Min" },
    grades: [{ name: "Premium Ground", description: "Micro-milled powder from double-washed peppercorns." }],
    applications: ["Commercial catering", "Soup manufacturing", "Bakery and savory snacks"]
  },
  {
    id: "p10", slug: "mustard-powder", name: "Mustard Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["USA", "EU"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Pungent Indian mustard powder exporter. High-oil content, finely milled wholesale spice.", image: "/images/placeholder.jpg",
    botanicalName: "Brassica juncea", origin: "Rajasthan, India", shelfLife: "12-15 Months", leadTime: "15 Days",
    specifications: { "Moisture": "8% Max", "Volatile Oil": "0.5% Min", "Total Ash": "5% Max" },
    grades: [{ name: "Yellow Mustard Powder", description: "Milled from premium yellow mustard seeds." }, { name: "Brown Mustard Powder", description: "Higher pungency milled from brown seeds." }],
    applications: ["Condiments and mayonnaise", "Meat processing", "Pickle manufacturing"]
  },
  {
    id: "p11", slug: "nutmeg-powder", name: "Nutmeg Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "1 MT",
    shortDesc: "Bulk nutmeg powder exporter. Aromatic, pure Indian nutmeg powder.", image: "/images/placeholder.jpg",
    botanicalName: "Myristica fragrans", origin: "Kerala, India", shelfLife: "18 Months", leadTime: "10-15 Days",
    specifications: { "Moisture": "10% Max", "Volatile Oil": "5% Min", "Total Ash": "3% Max" },
    grades: [{ name: "Premium Ground", description: "Finely ground from whole nutmegs without mace." }],
    applications: ["Bakery and confectionary", "Meat seasoning blends", "Beverage flavorings"]
  },
  {
    id: "p12", slug: "tamarind-powder", name: "Tamarind Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "Halal"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Wholesale tamarind powder exporter. Tangy and natural spray-dried tamarind extract.", image: "/images/placeholder.jpg",
    botanicalName: "Tamarindus indica", origin: "Tamil Nadu, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Acidity": "12-15%", "Moisture": "5% Max", "Solubility": "100% Water Soluble" },
    grades: [{ name: "Spray Dried", description: "Free flowing spray-dried extract powder." }],
    applications: ["Ready-to-eat sauces and curries", "Beverage premixes", "Confectionery"]
  },
  {
    id: "p13", slug: "tomato-powder", name: "Tomato Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["EU", "USA"], packagingTypes: ["Custom", "Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Spray dried tomato powder bulk supplier. Intense red color and natural flavor.", image: "/images/placeholder.jpg",
    botanicalName: "Solanum lycopersicum", origin: "Maharashtra, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Moisture": "4% Max", "Lycopene": "High", "Additives": "None" },
    grades: [{ name: "Standard Spray Dried", description: "100% natural, no anti-caking agents." }],
    applications: ["Instant soups", "Snack seasonings", "Ketchup and pasta sauces"]
  },
  {
    id: "p14", slug: "turmeric-powder", name: "Turmeric Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "APEDA", "Organic"], exportMarkets: ["USA", "EU", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches"], moq: "10 MT",
    shortDesc: "High curcumin Indian turmeric powder exporter. Salem and Nizamabad varieties available.", image: "/images/placeholder.jpg",
    botanicalName: "Curcuma longa", origin: "Erode & Nizamabad, India", shelfLife: "24 Months", leadTime: "10-15 Days",
    specifications: { "Curcumin": "3-5% Min", "Moisture": "10% Max", "Lead (Pb)": "Below 2 PPM" },
    grades: [{ name: "Salem Special (3-5% Curcumin)", description: "Premium vivid yellow with high curcumin." }, { name: "Nizamabad Standard", description: "Bright color, ideal for commercial blending." }],
    applications: ["Curry powders and marinades", "Nutraceuticals (Golden Milk)", "Cosmetics and dyes"],
    faqs: [{ question: "Do you supply organic turmeric?", answer: "Yes, we export EU and NOP certified organic turmeric powder with full traceability." }]
  },
  {
    id: "p15", slug: "yellow-chilli-powder", name: "Yellow Chilli Powder", category: "Spices & Powders",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Spicy yellow chilli powder bulk exporter. Pungent Indian yellow chilli varieties.", image: "/images/placeholder.jpg",
    botanicalName: "Capsicum annuum", origin: "Punjab & Rajasthan, India", shelfLife: "12-18 Months", leadTime: "14 Days",
    specifications: { "SHU (Heat)": "30,000 - 50,000", "Moisture": "10% Max", "Sudan Dyes": "Negative" },
    grades: [{ name: "Premium Yellow Ground", description: "Stemless grinding, pure yellow color without adulteration." }],
    applications: ["Yellow curries and sauces", "Pickles and chutneys", "Snack food dusting"]
  },

  // TEA & COFFEE
  {
    id: "p16", slug: "coffee-all-varities", name: "Coffee (All Varieties)", category: "Tea & Coffee",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["EU", "USA"], packagingTypes: ["Jute Bags", "Bulk Bags (25/50kg)"], moq: "19 MT",
    shortDesc: "Premium Indian coffee exporter. Wholesale supplier of Arabica and Robusta beans.", image: "/images/placeholder.jpg",
    botanicalName: "Coffea arabica / canephora", origin: "Karnataka (Coorg & Chikmagalur), India", shelfLife: "24 Months", leadTime: "15-20 Days",
    specifications: { "Moisture": "11% Max", "Defects": "Grade specific", "Screen Size": "15 to 19" },
    grades: [{ name: "Arabica Plantation A", description: "Premium washed Arabica." }, { name: "Robusta Cherry AB", description: "Unwashed premium Robusta." }],
    applications: ["Commercial roasting", "Instant coffee manufacturing", "Specialty cafes"]
  },
  {
    id: "p17", slug: "tea-all-varieties", name: "Tea (All Varieties)", category: "Tea & Coffee",
    certifications: ["FSSAI", "APEDA", "ISO 22000"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches"], moq: "10 MT",
    shortDesc: "Bulk Indian tea exporter. Premium Assam CTC and Darjeeling orthodox black teas.", image: "/images/placeholder.jpg",
    botanicalName: "Camellia sinensis", origin: "Assam & Darjeeling, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Moisture": "5-7% Max", "Total Ash": "8% Max", "Liquor Color": "Bright Red/Amber" },
    grades: [{ name: "Assam CTC (BOPL/BP/OF)", description: "Strong, malty liquor for morning blends." }, { name: "Darjeeling Orthodox", description: "Muscatel flavor, first and second flush." }],
    applications: ["Tea blending and packing", "Karak chai manufacturing", "Ready-to-drink beverages"]
  },
  {
    id: "p18", slug: "coffee-beans", name: "Coffee Beans", category: "Tea & Coffee",
    certifications: ["FSSAI"], exportMarkets: ["EU", "USA"], packagingTypes: ["Jute Bags"], moq: "19 MT",
    shortDesc: "Wholesale roasted and green coffee beans from South India.", image: "/images/placeholder.jpg",
    botanicalName: "Coffea arabica / canephora", origin: "Kerala & Karnataka, India", shelfLife: "12-24 Months", leadTime: "14 Days",
    specifications: { "Bean Type": "Green / Roasted", "Moisture": "10-12% (Green)", "Roast Profile": "Customizable" },
    grades: [{ name: "Green Beans", description: "Raw unroasted beans for international roasters." }, { name: "Roasted Beans", description: "Medium to dark roasted beans." }],
    applications: ["Espresso blends", "Cold brew extraction", "Retail coffee brands"]
  },
  {
    id: "p19", slug: "instant-coffee-mix", name: "Instant Coffee Mix", category: "Tea & Coffee",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Retail Pouches", "Bulk Cartons"], moq: "5 MT",
    shortDesc: "Agglomerated and freeze-dried instant coffee bulk supplier.", image: "/images/placeholder.jpg",
    botanicalName: "Coffea", origin: "South India", shelfLife: "24 Months", leadTime: "20 Days",
    specifications: { "Format": "Spray Dried / Freeze Dried", "Moisture": "4% Max", "Caffeine": "2-3%" },
    grades: [{ name: "Freeze Dried", description: "Premium aroma retention." }, { name: "Agglomerated", description: "Granulated instant coffee." }],
    applications: ["Vending machines", "FMCG retail packing", "3-in-1 premixes"]
  },
  {
    id: "p20", slug: "green-tea", name: "Green Tea", category: "Tea & Coffee",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU"], packagingTypes: ["Retail Pouches", "Bulk Bags"], moq: "2 MT",
    shortDesc: "Certified organic Indian green tea exporter. Whole leaf and fannings.", image: "/images/placeholder.jpg",
    botanicalName: "Camellia sinensis", origin: "Assam & Nilgiris, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Polyphenols": "High", "Moisture": "5-6% Max", "Liquor": "Pale Green/Yellow" },
    grades: [{ name: "Whole Leaf", description: "Premium unbroken leaves for specialty retail." }, { name: "Fannings", description: "Ideal for tea bags." }],
    applications: ["Tea bags and loose leaf retail", "Iced tea extracts", "Nutraceuticals"]
  },
  {
    id: "p21", slug: "flavoured-tea", name: "Flavoured Tea", category: "Tea & Coffee",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Cartons"], moq: "2 MT",
    shortDesc: "Exotic Indian flavoured tea blends including Masala Chai and Earl Grey.", image: "/images/placeholder.jpg",
    botanicalName: "Camellia sinensis (Blended)", origin: "Assam, India", shelfLife: "18 Months", leadTime: "15 Days",
    specifications: { "Base Tea": "Assam CTC or Orthodox", "Flavorings": "100% Natural Extract/Spices" },
    grades: [{ name: "Masala Chai Blend", description: "CTC black tea blended with real Indian spices." }, { name: "Earl Grey", description: "Black tea with natural bergamot oil." }],
    applications: ["Boutique tea shops", "FMCG retail boxes", "Gourmet gifting"]
  },

  // SOYA PRODUCTS
  {
    id: "p22", slug: "soyabean", name: "Soyabean", category: "Soya Products",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Asia", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "50 MT",
    shortDesc: "Bulk non-GMO Indian soyabean exporter. High protein crop for food and feed.", image: "/images/placeholder.jpg",
    botanicalName: "Glycine max", origin: "Madhya Pradesh, India", shelfLife: "12 Months", leadTime: "15-20 Days",
    specifications: { "Protein": "38% Min", "Moisture": "10% Max", "Oil Content": "18% Min", "Foreign Matter": "1% Max" },
    grades: [{ name: "Human Consumption", description: "Machine cleaned, non-GMO." }, { name: "Feed Grade", description: "Standard grade for livestock." }],
    applications: ["Soya oil extraction", "Tofu and soy milk", "Animal feed formulations"]
  },
  {
    id: "p23", slug: "soya-chunks", name: "Soya Chunks", category: "Soya Products",
    certifications: ["FSSAI", "Halal"], exportMarkets: ["Middle East", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches"], moq: "15 MT",
    shortDesc: "Wholesale high-protein soya chunks (TVP). Meat substitute for global FMCG retail.", image: "/images/placeholder.jpg",
    botanicalName: "Glycine max (Processed)", origin: "Madhya Pradesh, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Protein": "52% Min", "Moisture": "8% Max", "Fat": "1% Max" },
    grades: [{ name: "Standard Chunks", description: "Regular size chunks." }, { name: "Mini Chunks", description: "Small granules for curries." }],
    applications: ["Vegan meat alternatives", "Ready-to-eat meals", "Nutritional feeding programs"]
  },
  {
    id: "p24", slug: "soyabean-meal", name: "Soyabean Meal", category: "Soya Products",
    certifications: ["FSSAI"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "100 MT",
    shortDesc: "Indian soyabean meal exporter. High protein animal feed ingredient.", image: "/images/placeholder.jpg",
    botanicalName: "Glycine max (Extracted)", origin: "Madhya Pradesh & Maharashtra, India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Protein": "46-48% Min", "Moisture": "12% Max", "Sand/Silica": "2% Max" },
    grades: [{ name: "Hi-Pro DOC", description: "De-oiled cake with minimum 46% protein." }],
    applications: ["Poultry feed", "Aqua feed", "Cattle nutrition"]
  },
  {
    id: "p25", slug: "soyabean-oil", name: "Soyabean Oil", category: "Soya Products",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Asia", "Africa"], packagingTypes: ["Custom"], moq: "50 MT",
    shortDesc: "Refined soyabean oil bulk supplier. Pure, transparent cooking oil.", image: "/images/placeholder.jpg",
    botanicalName: "Glycine max (Extracted)", origin: "Gujarat & Madhya Pradesh, India", shelfLife: "12 Months", leadTime: "21 Days",
    specifications: { "FFA": "0.1% Max", "Moisture": "0.1% Max", "Color": "Light Yellow/Clear" },
    grades: [{ name: "Refined Bleached Deodorized (RBD)", description: "Premium cooking grade." }],
    applications: ["Culinary frying", "Margarine production", "Commercial baking"]
  },
  {
    id: "p26", slug: "soya-tvp", name: "Soya TVP", category: "Soya Products",
    certifications: ["FSSAI", "Halal"], exportMarkets: ["EU", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Textured Vegetable Protein (TVP) exporter. Versatile vegan ingredient.", image: "/images/placeholder.jpg",
    botanicalName: "Glycine max (Processed)", origin: "Madhya Pradesh, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Protein": "50% Min", "Moisture": "9% Max", "Granulation": "Customizable" },
    grades: [{ name: "TVP Flakes", description: "Flat flakes for texturizing." }, { name: "TVP Granules", description: "Minced texture." }],
    applications: ["Meat extension", "Vegetarian sausages", "Protein bars"]
  },

  // RICE
  {
    id: "p27", slug: "1121", name: "1121 Basmati Rice", category: "Rice",
    certifications: ["FSSAI", "APEDA", "Halal"], exportMarkets: ["Middle East", "EU", "USA"], packagingTypes: ["Jute Bags", "Bulk Bags (25/50kg)", "Custom"], moq: "25 MT",
    shortDesc: "Bulk 1121 Basmati Rice exporter. Extra long grain aromatic Indian rice.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Punjab & Haryana, India", shelfLife: "24 Months", leadTime: "14-21 Days",
    specifications: { "Average Length": "8.35mm+", "Moisture": "12% Max", "Broken": "1% Max", "Sortex": "100% Cleaned" },
    grades: [{ name: "Cream Sella", description: "Parboiled light yellow." }, { name: "White Sella", description: "Parboiled white." }, { name: "Steam", description: "Steamed white basmati." }],
    applications: ["Premium Biryani", "Middle Eastern Cuisine (Mandi/Kabsa)", "Fine dining restaurants"],
    faqs: [{ question: "What is the elongation ratio?", answer: "Our 1121 Basmati expands up to 2.5 times its original length upon cooking." }]
  },
  {
    id: "p28", slug: "1509", name: "1509 Basmati Rice", category: "Rice",
    certifications: ["FSSAI", "APEDA", "Halal"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Jute Bags", "Bulk Bags (25/50kg)"], moq: "25 MT",
    shortDesc: "Wholesale 1509 Basmati Rice supplier. High quality, cost-effective long grain rice.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Punjab, India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Average Length": "8.20mm+", "Moisture": "12.5% Max", "Broken": "2% Max" },
    grades: [{ name: "Steam", description: "Steamed 1509 Basmati." }, { name: "Golden Sella", description: "Parboiled golden 1509." }],
    applications: ["Catering services", "Everyday Biryani", "Food service distribution"]
  },
  {
    id: "p29", slug: "pusa", name: "Pusa Basmati Rice", category: "Rice",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Jute Bags", "Bulk Bags (25/50kg)"], moq: "25 MT",
    shortDesc: "Indian Pusa Basmati rice exporter. Highly aromatic traditional basmati grains.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Haryana & UP, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Average Length": "7.45mm+", "Moisture": "12% Max", "Aroma": "Strong naturally fragrant" },
    grades: [{ name: "Raw (White)", description: "Traditional raw Pusa basmati." }, { name: "Cream Sella", description: "Parboiled Pusa." }],
    applications: ["Traditional Indian cuisine", "Pulao and desserts", "Retail packaging"]
  },
  {
    id: "p30", slug: "golden-sella", name: "Golden Sella Basmati", category: "Rice",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Middle East", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "25 MT",
    shortDesc: "Golden Sella Basmati rice exporter. Parboiled basmati for commercial catering.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Punjab, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Average Length": "8.35mm+", "Moisture": "12% Max", "Broken": "1% Max", "Color": "Golden Yellow" },
    grades: [{ name: "1121 Golden Sella", description: "Extra long parboiled." }, { name: "1509 Golden Sella", description: "Standard long parboiled." }],
    applications: ["Afghan and Persian cuisines", "Large scale catering", "Biryani"]
  },
  {
    id: "p31", slug: "swarna", name: "Swarna Rice", category: "Rice",
    certifications: ["FSSAI"], exportMarkets: ["Africa", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "50 MT",
    shortDesc: "Swarna Rice bulk supplier. Economical short grain Indian non-basmati rice.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "West Bengal & Andhra Pradesh, India", shelfLife: "18 Months", leadTime: "15-20 Days",
    specifications: { "Average Length": "5.0mm", "Moisture": "14% Max", "Broken": "5% Max" },
    grades: [{ name: "Raw Swarna", description: "Sortex cleaned raw." }, { name: "Boiled Swarna", description: "Parboiled for firmer texture." }],
    applications: ["Everyday consumption", "Government tenders", "Food aid programs"]
  },
  {
    id: "p32", slug: "parboiled", name: "Parboiled Rice", category: "Rice",
    certifications: ["FSSAI"], exportMarkets: ["Africa", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "50 MT",
    shortDesc: "Bulk parboiled non-basmati rice exporter. IR64 and Swarna varieties.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Chhattisgarh & Andhra Pradesh, India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Average Length": "6.0mm", "Moisture": "14% Max", "Broken": "5%, 15%, 25% Options" },
    grades: [{ name: "IR64 Parboiled", description: "Long grain non-basmati." }],
    applications: ["Staple diet", "Bulk catering", "Institutional feeding"]
  },
  {
    id: "p33", slug: "pr11", name: "PR11 Rice", category: "Rice",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "50 MT",
    shortDesc: "Indian PR11 non-basmati rice exporter. Long grain, non-sticky rice.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Punjab & Haryana, India", shelfLife: "18 Months", leadTime: "14 Days",
    specifications: { "Average Length": "6.6mm - 6.8mm", "Moisture": "13% Max", "Broken": "5% Max" },
    grades: [{ name: "Raw", description: "White PR11." }, { name: "Sella", description: "Parboiled PR11." }],
    applications: ["Fried rice and everyday meals", "Cost-effective basmati substitute"]
  },
  {
    id: "p34", slug: "sona-masoori-rice", name: "Sona Masoori Rice", category: "Rice",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["USA", "Middle East"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "25 MT",
    shortDesc: "Premium Sona Masoori rice exporter. Lightweight, aromatic medium-grain rice.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Andhra Pradesh & Karnataka, India", shelfLife: "24 Months", leadTime: "15-20 Days",
    specifications: { "Average Length": "5.0mm - 5.2mm", "Moisture": "12% Max", "Broken": "5% Max" },
    grades: [{ name: "Steam", description: "Steamed Sona Masoori." }, { name: "Raw", description: "Unsteamed white." }],
    applications: ["South Indian cuisine", "Healthy daily consumption (low glycemic index)"]
  },
  {
    id: "p35", slug: "white-rice", name: "White Rice", category: "Rice",
    certifications: ["FSSAI"], exportMarkets: ["Africa", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "100 MT",
    shortDesc: "Standard IR64 white rice (5% to 25% broken). Reliable bulk grain exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "India", shelfLife: "18 Months", leadTime: "15 Days",
    specifications: { "Broken": "5%, 15%, 25%, 100% Options", "Moisture": "14% Max", "Chalky": "6% Max" },
    grades: [{ name: "IR64 Raw 5% Broken", description: "Sortex cleaned long grain." }, { name: "100% Broken", description: "Used for flour and alcohol." }],
    applications: ["Direct consumption", "Rice flour production", "Brewing industry"]
  },
  {
    id: "p36", slug: "ponni-rice", name: "Ponni Rice", category: "Rice",
    certifications: ["FSSAI"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "25 MT",
    shortDesc: "Wholesale South Indian Ponni boiled rice exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Tamil Nadu, India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Moisture": "13% Max", "Broken": "5% Max", "Grain Type": "Medium/Short" },
    grades: [{ name: "Ponni Boiled", description: "Parboiled ponni." }, { name: "Ponni Raw", description: "Unboiled ponni." }],
    applications: ["South Indian meals", "Idli and Dosa batter"]
  },
  {
    id: "p37", slug: "matta-rice", name: "Matta Rice", category: "Rice",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches"], moq: "10 MT",
    shortDesc: "Nutritious Kerala Matta rice (Rosematta). Bold grain red rice exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa", origin: "Kerala, India", shelfLife: "18 Months", leadTime: "21 Days",
    specifications: { "Color": "Red/Brown streaks", "Moisture": "12% Max", "Broken": "5% Max" },
    grades: [{ name: "Double Roasted", description: "Premium quality, sortex cleaned." }],
    applications: ["Traditional Kerala cuisine", "Health-conscious diets"]
  },

  // DRY FRUITS & NUTS
  {
    id: "p38", slug: "pistachio", name: "Pistachio", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Custom", "Retail Pouches"], moq: "2 MT",
    shortDesc: "Premium Indian roasted and raw pistachios. Bulk nuts supplier.", image: "/images/placeholder.jpg",
    botanicalName: "Pistacia vera", origin: "India & Middle East (Processed in India)", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Size": "20-22 to 28-30 count/oz", "Moisture": "5% Max", "Aflatoxin": "Negative" },
    grades: [{ name: "Jumbo Inshell", description: "Naturally open roasted and salted." }, { name: "Kernels", description: "Green peeled kernels for sweets." }],
    applications: ["Confectionery (Baklava/Mithai)", "Ice cream manufacturing", "Gourmet snacking"]
  },
  {
    id: "p39", slug: "raisins", name: "Raisins", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["EU", "USA"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Sweet Indian golden and green raisins exporter (Kishmish).", image: "/images/placeholder.jpg",
    botanicalName: "Vitis vinifera", origin: "Maharashtra (Sangli/Nashik), India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Size": "300-400 berries/100g", "Moisture": "15% Max", "Stem/Cap Stems": "Less than 1%" },
    grades: [{ name: "Golden Raisins", description: "Sulphur treated bright golden." }, { name: "Green Raisins", description: "Shade dried natural green." }],
    applications: ["Bakery and fruit cakes", "Trail mixes", "Breakfast cereals"]
  },
  {
    id: "p40", slug: "almond", name: "Almond", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Custom"], moq: "5 MT",
    shortDesc: "High quality almonds and almond kernels. Wholesale supplier.", image: "/images/placeholder.jpg",
    botanicalName: "Prunus dulcis", origin: "Processed in India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Size": "23-25 to 27-30 count/oz", "Moisture": "6% Max", "Broken/Scratched": "5% Max" },
    grades: [{ name: "Nonpareil Supreme", description: "Premium flat, light-colored kernels." }, { name: "Carmel", description: "Wrinkled kernels for roasting." }],
    applications: ["Marzipan and almond milk", "Bakery and snacking", "Cosmetic oils"]
  },
  {
    id: "p41", slug: "apricot", name: "Apricot", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Custom"], moq: "2 MT",
    shortDesc: "Dried apricots exporter. Sweet and tart varieties.", image: "/images/placeholder.jpg",
    botanicalName: "Prunus armeniaca", origin: "Ladakh & Kashmir, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Size": "Jumbo/Large", "Moisture": "22% Max (Soft)", "SO2": "As per EU limits" },
    grades: [{ name: "Jumbo Sun Dried", description: "Natural dark apricots." }, { name: "Sulphured", description: "Bright orange soft apricots." }],
    applications: ["Energy bars", "Jam and preserves", "Trail mixes"]
  },
  {
    id: "p42", slug: "cashew", name: "Cashew", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["USA", "EU", "Middle East"], packagingTypes: ["Custom"], moq: "2 MT",
    shortDesc: "Premium Indian cashew nuts exporter (W240, W320, Splits).", image: "/images/placeholder.jpg",
    botanicalName: "Anacardium occidentale", origin: "Kerala & Goa, India", shelfLife: "12 Months", leadTime: "15-20 Days",
    specifications: { "Grades": "W180, W210, W240, W320", "Moisture": "5% Max", "Infestation": "Nil" },
    grades: [{ name: "W320", description: "Standard white whole cashews." }, { name: "Splits/Pieces", description: "Used for commercial baking." }],
    applications: ["Vegan cheese and milk", "Commercial baking", "Premium roasting"]
  },
  {
    id: "p43", slug: "figs", name: "Figs (Anjeer)", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried sweet figs (Anjeer) supplier. Natural, sun-dried rope figs.", image: "/images/placeholder.jpg",
    botanicalName: "Ficus carica", origin: "Maharashtra (Pune), India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Size": "Large/Medium", "Moisture": "24% Max", "Appearance": "Flattened on strings" },
    grades: [{ name: "Premium Crown", description: "Large, soft, and sweet." }],
    applications: ["Ayurvedic supplements", "Mithai (Indian sweets)", "Energy bars"]
  },
  {
    id: "p44", slug: "walnut", name: "Walnut", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI"], exportMarkets: ["EU", "Asia"], packagingTypes: ["Custom"], moq: "2 MT",
    shortDesc: "Premium Kashmiri walnut kernels and inshell exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Juglans regia", origin: "Kashmir, India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Color": "Light / Light Amber", "Moisture": "5% Max", "Shell Pieces": "0.05% Max" },
    grades: [{ name: "Light Halves", description: "Premium unblemished halves." }, { name: "Broken/Quarters", description: "Commercial baking grade." }],
    applications: ["Brownies and cakes", "Cereals and granolas", "Walnut oil extraction"]
  },
  {
    id: "p45", slug: "dry-dates", name: "Dry Dates", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "Halal"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "High quality hard dry dates (Chhuhara).", image: "/images/placeholder.jpg",
    botanicalName: "Phoenix dactylifera", origin: "India / Middle East", shelfLife: "18 Months", leadTime: "14 Days",
    specifications: { "Type": "Yellow / Black", "Moisture": "10% Max", "Pitted": "Available on request" },
    grades: [{ name: "Premium Yellow Dry", description: "Hard and sweet." }],
    applications: ["Religious festivals", "Mithai preparation", "Syrup extraction"]
  }
  ,
  // PEANUTS
  {
    id: "p46", slug: "peanut-whole", name: "Peanut (Whole)", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Jute Bags"], moq: "19 MT",
    shortDesc: "Indian whole peanuts in shell exporter. Bold and Java varieties.", image: "/images/placeholder.jpg",
    botanicalName: "Arachis hypogaea", origin: "Gujarat, India", shelfLife: "9 Months", leadTime: "15 Days",
    specifications: { "Counts": "18/22, 20/24 per ounce", "Moisture": "7% Max", "Aflatoxin": "Negative" },
    grades: [{ name: "Bold Inshell", description: "Large size, roasted or raw." }],
    applications: ["Direct snacking", "Roasting operations"]
  },
  {
    id: "p47", slug: "groundnut", name: "Groundnut Kernels", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Asia", "EU"], packagingTypes: ["Jute Bags", "Vacuum Packs"], moq: "19 MT",
    shortDesc: "Bold and Java groundnut kernels. Bulk supplier for oil extraction and food use.", image: "/images/placeholder.jpg",
    botanicalName: "Arachis hypogaea", origin: "Gujarat & Rajasthan, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Counts": "38/42, 40/50, 50/60, 60/70", "Moisture": "7-8% Max", "Aflatoxin": "Below 4ppb (EU Standard)" },
    grades: [{ name: "Java Kernels", description: "Round and pinkish." }, { name: "Bold Kernels", description: "Elongated and reddish." }],
    applications: ["Peanut butter manufacturing", "Oil pressing", "Confectionery"]
  },
  {
    id: "p48", slug: "peanut-blanched", name: "Peanut (Blanched)", category: "Dry Fruits & Nuts",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["EU", "USA"], packagingTypes: ["Custom", "Vacuum Packs"], moq: "19 MT",
    shortDesc: "Premium blanched peanuts exporter. Skinless white kernels.", image: "/images/placeholder.jpg",
    botanicalName: "Arachis hypogaea", origin: "Gujarat, India", shelfLife: "12 Months", leadTime: "20 Days",
    specifications: { "Splits/Broken": "5% Max", "Moisture": "5% Max", "Color": "Pure White" },
    grades: [{ name: "Whole Blanched", description: "Premium skinless whole." }, { name: "Blanched Splits", description: "Skinless half kernels." }],
    applications: ["Premium roasted snacks", "High-grade peanut butter", "Bakery inclusions"]
  },

  // PULSES & BEANS
  {
    id: "p49", slug: "green-peas", name: "Green Peas", category: "Pulses & Beans",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Bulk dried green peas exporter. Premium quality whole green peas (Matar).", image: "/images/placeholder.jpg",
    botanicalName: "Pisum sativum", origin: "Uttar Pradesh & MP, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max", "Foreign Matter": "1% Max", "Damage": "3% Max" },
    grades: [{ name: "Whole Green Peas", description: "Machine cleaned and sortexed." }],
    applications: ["Canning and freezing", "Snack roasting", "Curries"]
  },
  {
    id: "p50", slug: "yellow-peas", name: "Yellow Peas", category: "Pulses & Beans",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Asia", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Whole dried yellow peas (Vatana). Reliable bulk supplier.", image: "/images/placeholder.jpg",
    botanicalName: "Pisum sativum", origin: "India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Moisture": "14% Max", "Splits": "2% Max", "Foreign Matter": "1% Max" },
    grades: [{ name: "Whole Yellow Peas", description: "Sortex cleaned whole peas." }],
    applications: ["Pea flour milling", "Street food (Ragda)", "Soups"]
  },
  {
    id: "p51", slug: "yellow-split-peas", name: "Yellow Split Peas", category: "Pulses & Beans",
    certifications: ["FSSAI", "APEDA"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Split yellow peas (Matar Dal). Quick-cooking protein source.", image: "/images/placeholder.jpg",
    botanicalName: "Pisum sativum", origin: "India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max", "Foreign Matter": "0.5% Max", "Broken": "2% Max" },
    grades: [{ name: "Standard Split", description: "Polished and unpolished options." }],
    applications: ["Dal preparations", "Hummus substitutes", "Soups"]
  },
  {
    id: "p52", slug: "red-chawli", name: "Red Chawli (Cowpeas)", category: "Pulses & Beans",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Red cowpeas (Chawli / Lobia). High quality whole pulses.", image: "/images/placeholder.jpg",
    botanicalName: "Vigna unguiculata", origin: "Maharashtra & MP, India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Size": "Medium to Large", "Moisture": "12% Max", "Weeviled": "1% Max" },
    grades: [{ name: "Red Chawli Sortex", description: "Uniform red color, machine cleaned." }],
    applications: ["Traditional curries", "Sprouting", "Salads"]
  },
  {
    id: "p53", slug: "cowpeas", name: "Cowpeas", category: "Pulses & Beans",
    certifications: ["FSSAI"], exportMarkets: ["Africa", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "White and brown cowpeas (Lobia). Nutritious bulk legumes.", image: "/images/placeholder.jpg",
    botanicalName: "Vigna unguiculata", origin: "India / Africa", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Color": "White / Brown", "Moisture": "12% Max", "Damage": "2% Max" },
    grades: [{ name: "White Cowpeas", description: "Black-eyed peas." }, { name: "Brown Cowpeas", description: "Rich earthy flavor." }],
    applications: ["Canning", "Stews and curries", "Flour milling"]
  },
  {
    id: "p54", slug: "mosambi-chana", name: "Mosambi Chana", category: "Pulses & Beans",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Mosambi Chana exporter. Premium Indian chickpeas.", image: "/images/placeholder.jpg",
    botanicalName: "Cicer arietinum", origin: "Maharashtra, India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Size": "Large", "Moisture": "10% Max", "Foreign Matter": "1% Max" },
    grades: [{ name: "Mosambi Chana", description: "Light color, bold size." }],
    applications: ["Roasting and snacking", "Premium curries"]
  },
  {
    id: "p55", slug: "lab-lab-beans", name: "Lab Lab Beans", category: "Pulses & Beans",
    certifications: ["FSSAI"], exportMarkets: ["Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Lab lab beans (Val Dal). Distinctive Indian legume.", image: "/images/placeholder.jpg",
    botanicalName: "Lablab purpureus", origin: "Gujarat, India", shelfLife: "12 Months", leadTime: "20 Days",
    specifications: { "Type": "Whole / Split", "Moisture": "12% Max" },
    grades: [{ name: "White Val", description: "Whole white lab lab." }, { name: "Val Dal", description: "Split and skinned." }],
    applications: ["Traditional Gujarati cuisine", "Sprouted beans"]
  },
  {
    id: "p56", slug: "white-peas", name: "White Peas", category: "Pulses & Beans",
    certifications: ["FSSAI"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "24 MT",
    shortDesc: "Dried white peas (Safed Vatana).", image: "/images/placeholder.jpg",
    botanicalName: "Pisum sativum", origin: "India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max", "Size": "Medium to Large" },
    grades: [{ name: "Sortex Cleaned", description: "Machine cleaned white peas." }],
    applications: ["Street food (Misal Pav)", "Curries and stews"]
  },

  // HERBS & BOTANICALS
  {
    id: "p57", slug: "psyllium-seed", name: "Psyllium Seed", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic", "ISO 22000"], exportMarkets: ["USA", "EU"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Wholesale organic psyllium seeds. High purity natural laxative.", image: "/images/placeholder.jpg",
    botanicalName: "Plantago ovata", origin: "Gujarat & Rajasthan, India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Purity": "99% Min", "Moisture": "10% Max", "Ash": "4% Max" },
    grades: [{ name: "Organic Psyllium Seed", description: "Certified organic." }, { name: "Conventional", description: "Standard commercial grade." }],
    applications: ["Pharmaceuticals", "Dietary supplements", "Extraction of husk"]
  },
  {
    id: "p58", slug: "psyllium-husk", name: "Psyllium Husk", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic", "ISO 22000"], exportMarkets: ["USA", "EU", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches"], moq: "5 MT",
    shortDesc: "High purity psyllium husk (Sat Isabgol) exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Plantago ovata (Husk)", origin: "Gujarat, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Purity": "85%, 95%, 98%, 99%", "Swell Volume": "40ml/g Min", "Moisture": "12% Max" },
    grades: [{ name: "99% Purity", description: "Highest pharmaceutical grade." }, { name: "85% Purity", description: "Standard feed and commercial grade." }],
    applications: ["Fiber supplements", "Gluten-free baking", "Digestive health"]
  },
  {
    id: "p59", slug: "psyllium-husk-powder", name: "Psyllium Husk Powder", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic", "ISO 22000"], exportMarkets: ["USA", "EU"], packagingTypes: ["Bulk Bags (25/50kg)", "Custom"], moq: "5 MT",
    shortDesc: "Finely ground psyllium husk powder. Available in various mesh sizes.", image: "/images/placeholder.jpg",
    botanicalName: "Plantago ovata (Powder)", origin: "Gujarat, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Mesh Size": "40, 60, 80, 100", "Purity": "95%, 98%, 99%", "Swell Volume": "40ml/g Min" },
    grades: [{ name: "100 Mesh 99%", description: "Ultra fine powder." }, { name: "40 Mesh 95%", description: "Standard powder." }],
    applications: ["Capsules and tablets", "Beverage thickeners", "Nutraceuticals"]
  },
  {
    id: "p60", slug: "mulethi-powder", name: "Mulethi Powder (Licorice)", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["EU", "USA"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "1 MT",
    shortDesc: "Pure licorice root powder (Mulethi) exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Glycyrrhiza glabra", origin: "India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Glycyrrhizin": "3-5%", "Moisture": "8% Max" },
    grades: [{ name: "Premium Root Powder", description: "Finely milled for dietary and cosmetic use." }],
    applications: ["Ayurvedic medicine", "Herbal teas", "Skin care formulations"]
  },
  {
    id: "p61", slug: "asaliya", name: "Asaliya (Halim Seeds)", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Garden cress seeds (Asaliya) bulk supplier. Nutrient-dense seeds.", image: "/images/placeholder.jpg",
    botanicalName: "Lepidium sativum", origin: "India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Purity": "99% Min", "Moisture": "8% Max" },
    grades: [{ name: "Sortex Cleaned", description: "Premium, machine cleaned halim seeds." }],
    applications: ["Traditional medicine", "Postpartum nutrition", "Salads"]
  },
  {
    id: "p62", slug: "hibiscus", name: "Hibiscus", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried hibiscus flowers exporter. Bright red petals for tea blending.", image: "/images/placeholder.jpg",
    botanicalName: "Hibiscus sabdariffa", origin: "India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Moisture": "12% Max", "Color": "Deep Red", "Foreign Matter": "1% Max" },
    grades: [{ name: "Whole Flower", description: "Intact dried calyces." }, { name: "Tea Cut (TBC)", description: "Cut for tea bags." }],
    applications: ["Herbal teas and infusions", "Natural food coloring", "Cosmetics"]
  },
  {
    id: "p63", slug: "oregano", name: "Oregano", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom", "Bulk Cartons"], moq: "1 MT",
    shortDesc: "Premium dried oregano leaves. Aromatic Mediterranean herb.", image: "/images/placeholder.jpg",
    botanicalName: "Origanum vulgare", origin: "India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Volatile Oil": "1.5% Min", "Moisture": "10% Max", "Color": "Olive Green" },
    grades: [{ name: "Premium Rubbed", description: "Standard rubbed oregano." }],
    applications: ["Pizza and pasta seasoning", "Meat rubs", "Salad dressings"]
  },
  {
    id: "p64", slug: "parsley", name: "Parsley", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["EU", "Middle East"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried parsley flakes exporter. Vibrant green color and fresh flavor.", image: "/images/placeholder.jpg",
    botanicalName: "Petroselinum crispum", origin: "India", shelfLife: "18 Months", leadTime: "15 Days",
    specifications: { "Moisture": "8% Max", "Color": "Bright Green" },
    grades: [{ name: "Dried Flakes", description: "Machine dried to retain color." }],
    applications: ["Soups and stews", "Garnishes", "Herb blends"]
  },
  {
    id: "p65", slug: "gulab-patti-rose-petal", name: "Rose Petals (Gulab Patti)", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Custom"], moq: "500 KG",
    shortDesc: "Dried pink rose petals. Highly aromatic for culinary and cosmetic use.", image: "/images/placeholder.jpg",
    botanicalName: "Rosa rubiginosa / damascena", origin: "Rajasthan (Pushkar), India", shelfLife: "12 Months", leadTime: "14 Days",
    specifications: { "Color": "Pink/Red", "Moisture": "8% Max", "Aroma": "Strong natural rose" },
    grades: [{ name: "Whole Petals", description: "Sun-dried whole petals." }, { name: "Crushed/Powder", description: "For cosmetic formulations." }],
    applications: ["Mithai and sweets (Gulkand)", "Herbal teas", "Potpourri and skincare"]
  },
  {
    id: "p66", slug: "chamomile", name: "Chamomile", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom"], moq: "500 KG",
    shortDesc: "Dried chamomile flowers exporter. Calming herbal tea ingredient.", image: "/images/placeholder.jpg",
    botanicalName: "Matricaria chamomilla", origin: "India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Moisture": "10% Max", "Appearance": "Yellow center with white petals" },
    grades: [{ name: "Whole Flower", description: "Premium whole flowers." }, { name: "TBC", description: "Tea bag cut." }],
    applications: ["Herbal sleep teas", "Essential oil extraction", "Cosmetics"]
  },
  {
    id: "p67", slug: "rosemarry", name: "Rosemary", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried rosemary leaves. Pine-like aroma for culinary use.", image: "/images/placeholder.jpg",
    botanicalName: "Salvia rosmarinus", origin: "India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Volatile Oil": "1% Min", "Moisture": "9% Max" },
    grades: [{ name: "Whole Leaves", description: "Dried whole needle-like leaves." }],
    applications: ["Meat and poultry roasting", "Herbal oils", "Cosmetic extracts"]
  },
  {
    id: "p68", slug: "thyme", name: "Thyme", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried thyme leaves exporter. Essential culinary herb.", image: "/images/placeholder.jpg",
    botanicalName: "Thymus vulgaris", origin: "India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Volatile Oil": "1% Min", "Moisture": "10% Max" },
    grades: [{ name: "Premium Rubbed", description: "Dried and rubbed thyme leaves." }],
    applications: ["Za'atar blends", "Soups and stocks", "Marinades"]
  },
  {
    id: "p69", slug: "marjoram", name: "Marjoram", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried marjoram leaves. Sweet pine and citrus flavor.", image: "/images/placeholder.jpg",
    botanicalName: "Origanum majorana", origin: "India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Volatile Oil": "1% Min", "Moisture": "10% Max" },
    grades: [{ name: "Dried Flakes", description: "Standard dried marjoram." }],
    applications: ["Sausage manufacturing", "Herb blends", "Teas"]
  },
  {
    id: "p70", slug: "coriander-leaves", name: "Coriander Leaves", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried coriander (cilantro) leaves. Vibrant green color.", image: "/images/placeholder.jpg",
    botanicalName: "Coriandrum sativum", origin: "India", shelfLife: "18 Months", leadTime: "14 Days",
    specifications: { "Moisture": "8% Max", "Color": "Bright Green" },
    grades: [{ name: "Dried Flakes", description: "Machine dried." }],
    applications: ["Curry powders", "Garnishing", "Salsas"]
  },
  {
    id: "p71", slug: "basil-leaves", name: "Basil Leaves", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom"], moq: "1 MT",
    shortDesc: "Dried basil leaves exporter. Sweet and peppery aroma.", image: "/images/placeholder.jpg",
    botanicalName: "Ocimum basilicum", origin: "India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Moisture": "10% Max", "Color": "Dark Green" },
    grades: [{ name: "Rubbed Leaves", description: "Dried and rubbed." }],
    applications: ["Italian cuisine", "Pesto bases", "Tomato sauces"]
  },
  {
    id: "p72", slug: "senna-leaves", name: "Senna Leaves", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "High Sennoside Senna Leaves exporter. Natural laxative herb.", image: "/images/placeholder.jpg",
    botanicalName: "Cassia angustifolia", origin: "Rajasthan & Gujarat, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Sennosides": "2% to 3% Min", "Moisture": "10% Max", "Ash": "12% Max" },
    grades: [{ name: "Prime 5", description: "Large whole leaves." }, { name: "Prime 3", description: "Medium leaves." }],
    applications: ["Pharmaceuticals (Laxatives)", "Herbal diet teas"]
  },
  {
    id: "p73", slug: "senna-pods", name: "Senna Pods", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "5 MT",
    shortDesc: "Senna pods for medicinal extraction. High active compound.", image: "/images/placeholder.jpg",
    botanicalName: "Cassia angustifolia (Pods)", origin: "Rajasthan, India", shelfLife: "24 Months", leadTime: "14 Days",
    specifications: { "Sennosides": "1.5% to 2.5% Min", "Moisture": "10% Max" },
    grades: [{ name: "Hand Picked", description: "Premium whole pods." }],
    applications: ["Extraction of Sennosides", "Herbal infusions"]
  },
  {
    id: "p74", slug: "bor-leaf-powder", name: "Bor Leaf Powder", category: "Herbs & Botanicals",
    certifications: ["FSSAI"], exportMarkets: ["Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "2 MT",
    shortDesc: "Ziziphus mauritiana (Bor) leaf powder exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Ziziphus mauritiana", origin: "India", shelfLife: "12 Months", leadTime: "20 Days",
    specifications: { "Mesh Size": "60 to 80 Mesh", "Moisture": "10% Max" },
    grades: [{ name: "Standard Powder", description: "Fine dried leaf powder." }],
    applications: ["Ayurvedic hair care", "Traditional medicine"]
  },
  {
    id: "p75", slug: "ashwagandha", name: "Ashwagandha", category: "Herbs & Botanicals",
    certifications: ["FSSAI", "Organic"], exportMarkets: ["USA", "EU"], packagingTypes: ["Custom", "Bulk Cartons"], moq: "1 MT",
    shortDesc: "Dried Ashwagandha roots and powder. Premium adaptogen herb.", image: "/images/placeholder.jpg",
    botanicalName: "Withania somnifera", origin: "Madhya Pradesh, India", shelfLife: "24 Months", leadTime: "15 Days",
    specifications: { "Withanolides": "1.5% - 2.5%", "Moisture": "8% Max" },
    grades: [{ name: "Whole Roots", description: "Dried sorted roots." }, { name: "Root Powder", description: "Finely milled." }],
    applications: ["Stress relief supplements", "Energy boosters", "Nutraceutical extracts"]
  },

  // FLOURS & STARCHES
  {
    id: "p76", slug: "wheat-flour-chakki-atta", name: "Wheat Flour (Chakki Atta)", category: "Flours & Starches",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Whole wheat flour (Chakki Atta). Stone ground Indian wheat exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Triticum aestivum (Milled)", origin: "MP & Gujarat, India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Moisture": "12% Max", "Ash": "1.5% Max", "Gluten": "8% Min" },
    grades: [{ name: "Standard Chakki Atta", description: "100% whole wheat, traditional grind." }],
    applications: ["Roti and chapati", "Healthy baking"]
  },
  {
    id: "p77", slug: "maida", name: "Maida (Refined Wheat Flour)", category: "Flours & Starches",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Refined wheat flour (Maida) bulk supplier. Ideal for commercial baking.", image: "/images/placeholder.jpg",
    botanicalName: "Triticum aestivum (Refined)", origin: "India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Moisture": "13% Max", "Ash": "0.5% Max", "Gluten": "10% Min" },
    grades: [{ name: "Bakery Grade", description: "High gluten for bread." }, { name: "Biscuit Grade", description: "Lower gluten for crispness." }],
    applications: ["Bread making", "Biscuits and pastries", "Noodles"]
  },
  {
    id: "p78", slug: "kerala-special-porotta-maida", name: "Kerala Special Porotta Maida", category: "Flours & Starches",
    certifications: ["FSSAI"], exportMarkets: ["Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Specialty refined flour for Kerala Porotta. High elasticity.", image: "/images/placeholder.jpg",
    botanicalName: "Triticum aestivum", origin: "Tamil Nadu, India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Gluten": "11-12%", "Moisture": "13% Max" },
    grades: [{ name: "Porotta Grade", description: "Formulated for high stretchability." }],
    applications: ["Malabar Porotta", "Lacha Paratha"]
  },
  {
    id: "p79", slug: "raagi-flour", name: "Raagi Flour", category: "Flours & Starches",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Finger millet (Ragi) flour exporter. Calcium-rich superfood flour.", image: "/images/placeholder.jpg",
    botanicalName: "Eleusine coracana (Milled)", origin: "Karnataka, India", shelfLife: "6 Months", leadTime: "14 Days",
    specifications: { "Moisture": "10% Max", "Ash": "3% Max" },
    grades: [{ name: "Roasted Ragi Flour", description: "Pre-roasted for extended shelf life." }, { name: "Raw Ragi Flour", description: "Standard milled." }],
    applications: ["Infant food mixes", "Gluten-free baking", "Traditional porridge (Mudde)"]
  },
  {
    id: "p80", slug: "jowar-flour", name: "Jowar Flour", category: "Flours & Starches",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Sorghum (Jowar) flour exporter. Nutritious gluten-free alternative.", image: "/images/placeholder.jpg",
    botanicalName: "Sorghum bicolor (Milled)", origin: "Maharashtra, India", shelfLife: "6 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max" },
    grades: [{ name: "Fine Milled Jowar", description: "Machine milled clean jowar." }],
    applications: ["Gluten-free rotis", "Baking blends", "Snack extrusion"]
  },
  {
    id: "p81", slug: "bajra-flour", name: "Bajra Flour", category: "Flours & Starches",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Pearl millet (Bajra) flour. High-energy traditional flour.", image: "/images/placeholder.jpg",
    botanicalName: "Pennisetum glaucum (Milled)", origin: "Rajasthan, India", shelfLife: "4 Months", leadTime: "15 Days",
    specifications: { "Moisture": "10% Max" },
    grades: [{ name: "Fine Bajra Atta", description: "Milled from clean pearl millets." }],
    applications: ["Winter breads", "Traditional snacks"]
  },
  {
    id: "p82", slug: "besan-chickpea-flour", name: "Besan (Chickpea Flour)", category: "Flours & Starches",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Gram flour (Besan) exporter. Pure split chickpea flour.", image: "/images/placeholder.jpg",
    botanicalName: "Cicer arietinum (Milled)", origin: "India", shelfLife: "6 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max", "Fineness": "100 Mesh" },
    grades: [{ name: "Fine Grade", description: "Standard culinary besan." }, { name: "Coarse Grade", description: "For laddoos and specific sweets." }],
    applications: ["Indian sweets (Mithai)", "Batter for frying (Pakoras)", "Vegan egg substitute"]
  },
  {
    id: "p83", slug: "rice-flourpowder", name: "Rice Flour", category: "Flours & Starches",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Finely milled white rice flour exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa (Milled)", origin: "India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Moisture": "13% Max", "Color": "Pure White" },
    grades: [{ name: "Fine Powder", description: "Milled from broken IR64 rice." }],
    applications: ["Noodles and rice paper", "Gluten-free baking", "Snack extrusion"]
  },
  {
    id: "p84", slug: "corn-flour-maize-flour", name: "Corn Flour (Maize Flour)", category: "Flours & Starches",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "Africa"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Yellow and white corn (maize) flour bulk supplier.", image: "/images/placeholder.jpg",
    botanicalName: "Zea mays (Milled)", origin: "India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Moisture": "12% Max" },
    grades: [{ name: "Yellow Corn Flour", description: "Used for tortillas." }, { name: "White Corn Flour", description: "Milder flavor." }],
    applications: ["Tortillas and tacos", "Snack manufacturing"]
  },
  {
    id: "p85", slug: "corn-starch-maize-starch", name: "Corn Starch", category: "Flours & Starches",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Asia", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Food grade and industrial corn starch exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Zea mays (Extracted)", origin: "India", shelfLife: "24 Months", leadTime: "20 Days",
    specifications: { "Moisture": "13% Max", "pH": "4.5 to 7.0", "Protein": "0.4% Max" },
    grades: [{ name: "Food Grade", description: "High purity for culinary use." }, { name: "Industrial Grade", description: "Used in paper and textiles." }],
    applications: ["Soups and sauces thickening", "Confectionery", "Paper sizing"]
  },
  {
    id: "p86", slug: "corn-grits", name: "Corn Grits", category: "Flours & Starches",
    certifications: ["FSSAI"], exportMarkets: ["Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Flaking and snack grade corn grits exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Zea mays", origin: "India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Moisture": "14% Max", "Fat": "1% Max" },
    grades: [{ name: "Flaking Grits", description: "Large particles for corn flakes." }, { name: "Snack Grits", description: "Finer for extruded snacks." }],
    applications: ["Breakfast cereals", "Extruded puff snacks", "Brewing"]
  },

  // OTHER
  {
    id: "p87", slug: "desiccated-coconut-powder", name: "Desiccated Coconut Powder", category: "Other",
    certifications: ["FSSAI", "Halal", "ISO 22000"], exportMarkets: ["Middle East", "EU"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "High fat desiccated coconut powder exporter. Fresh tropical flavor.", image: "/images/placeholder.jpg",
    botanicalName: "Cocos nucifera", origin: "Kerala & Tamil Nadu, India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Fat Content": "High Fat (65% Min)", "Moisture": "3% Max", "Color": "Pure White" },
    grades: [{ name: "Fine Grade", description: "Fine granules for baking." }, { name: "Medium Grade", description: "Standard shreds." }],
    applications: ["Bakery and biscuits", "Curries and sauces", "Confectionery"]
  },
  {
    id: "p88", slug: "gehu-khichda", name: "Gehu Khichda", category: "Other",
    certifications: ["FSSAI"], exportMarkets: ["Middle East"], packagingTypes: ["Retail Pouches", "Bulk Cartons"], moq: "5 MT",
    shortDesc: "Gehu Khichda (Cracked wheat). Essential for traditional festive meals.", image: "/images/placeholder.jpg",
    botanicalName: "Triticum aestivum (Processed)", origin: "India", shelfLife: "9 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max" },
    grades: [{ name: "Standard Cut", description: "Uniform cracked wheat." }],
    applications: ["Khichda preparation", "Festive porridges"]
  },
  {
    id: "p89", slug: "daliya-thuli", name: "Daliya (Thuli)", category: "Other",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Broken wheat (Daliya / Bulgar). Nutritious and fibrous.", image: "/images/placeholder.jpg",
    botanicalName: "Triticum durum (Processed)", origin: "India", shelfLife: "9 Months", leadTime: "15 Days",
    specifications: { "Moisture": "11% Max", "Size": "Medium to Fine" },
    grades: [{ name: "Medium Daliya", description: "Ideal for porridges." }],
    applications: ["Breakfast cereals", "Upma and savory dishes"]
  },
  {
    id: "p90", slug: "semolina-sooji-rawa", name: "Semolina (Sooji/Rawa)", category: "Other",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Retail Pouches", "Bulk Bags (25/50kg)"], moq: "20 MT",
    shortDesc: "Coarse purified wheat middlings (Sooji/Rawa).", image: "/images/placeholder.jpg",
    botanicalName: "Triticum durum (Milled)", origin: "India", shelfLife: "6 Months", leadTime: "14 Days",
    specifications: { "Moisture": "12% Max", "Ash": "0.5% Max" },
    grades: [{ name: "Coarse Sooji", description: "Ideal for Halwa and Upma." }, { name: "Fine Sooji", description: "Used in batter and pasta." }],
    applications: ["Pasta and macaroni", "Indian sweets (Halwa)", "Batter mixes"]
  },
  {
    id: "p91", slug: "rice-flakes-poha", name: "Rice Flakes (Poha)", category: "Other",
    certifications: ["FSSAI"], exportMarkets: ["Middle East", "USA"], packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches"], moq: "10 MT",
    shortDesc: "Flattened rice flakes (Poha) exporter. Thick and thin varieties.", image: "/images/placeholder.jpg",
    botanicalName: "Oryza sativa (Processed)", origin: "Maharashtra & Gujarat, India", shelfLife: "6 Months", leadTime: "15 Days",
    specifications: { "Moisture": "14% Max", "Damage": "1% Max" },
    grades: [{ name: "Thick Poha", description: "Standard for cooking." }, { name: "Paper (Thin) Poha", description: "For chivda/snack mixes." }],
    applications: ["Breakfast meals", "Roasted snack mixes (Chivda)"]
  },
  {
    id: "p92", slug: "sago-seed-sabudana", name: "Sago Seed (Sabudana)", category: "Other",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["USA", "Middle East"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "10 MT",
    shortDesc: "Tapioca pearls (Sabudana) exporter. High energy starch pearls.", image: "/images/placeholder.jpg",
    botanicalName: "Manihot esculenta (Extracted)", origin: "Tamil Nadu (Salem), India", shelfLife: "12 Months", leadTime: "15 Days",
    specifications: { "Moisture": "12% Max", "Starch": "85% Min", "Color": "Brilliant White" },
    grades: [{ name: "Nylon Sabudana", description: "Small, translucent pearls." }, { name: "Glass Sabudana", description: "Standard medium pearls." }],
    applications: ["Fasting foods (Khichdi)", "Snack pellets (Papad)", "Puddings"]
  },
  {
    id: "p93", slug: "sugar-products", name: "Sugar Products", category: "Other",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Africa", "Middle East"], packagingTypes: ["Bulk Bags (50kg)"], moq: "100 MT",
    shortDesc: "Indian crystal sugar exporter. ICUMSA 45, S30, and M30 grades.", image: "/images/placeholder.jpg",
    botanicalName: "Saccharum officinarum (Processed)", origin: "Maharashtra & UP, India", shelfLife: "24 Months", leadTime: "20 Days",
    specifications: { "Polarization": "99.8% Min", "Moisture": "0.04% Max", "Color": "ICUMSA 45 / 100" },
    grades: [{ name: "ICUMSA 45", description: "Refined white sugar." }, { name: "S30 / M30", description: "Standard crystal sugar." }],
    applications: ["Beverage manufacturing", "Confectionery", "Retail packaging"]
  },
  {
    id: "p94", slug: "achar-all-varities", name: "Achar (All Varieties)", category: "Other",
    certifications: ["FSSAI"], exportMarkets: ["USA", "Middle East", "EU"], packagingTypes: ["Glass Jars", "Bulk Drums"], moq: "2 MT",
    shortDesc: "Traditional Indian pickles (Achar). Mango, Mixed, Lime, and Chilli.", image: "/images/placeholder.jpg",
    botanicalName: "Various (Preserved)", origin: "India", shelfLife: "12-18 Months", leadTime: "21 Days",
    specifications: { "Preservative": "Oil/Vinegar/Salt base", "pH": "Acidic" },
    grades: [{ name: "Retail Jars", description: "Ready to eat." }, { name: "Bulk Drums", description: "For repacking or HORECA." }],
    applications: ["Condiment and side dish", "Food service"]
  },
  {
    id: "p95", slug: "salt", name: "Salt", category: "Other",
    certifications: ["FSSAI", "ISO 22000"], exportMarkets: ["Africa", "Asia"], packagingTypes: ["Bulk Bags (25/50kg)"], moq: "100 MT",
    shortDesc: "Refined free-flowing iodized and raw sea salt exporter.", image: "/images/placeholder.jpg",
    botanicalName: "Sodium Chloride", origin: "Gujarat, India", shelfLife: "Unlimited", leadTime: "15 Days",
    specifications: { "NaCl": "99% Min", "Moisture": "0.2% Max", "Iodine": "Available upon request" },
    grades: [{ name: "Refined Iodized", description: "Table salt." }, { name: "Raw Sea Salt", description: "Industrial and food grade." }],
    applications: ["Culinary seasoning", "Food preservation", "Water softening"]
  },
];

export const FILTER_OPTIONS = {
  categories: ["Spices & Powders", "Grains & Millets", "Rice", "Pulses & Beans", "Dry Fruits & Nuts", "Tea & Coffee", "Soya Products", "Herbs & Botanicals", "Flours & Starches", "Other"],
  certifications: ["APEDA", "FSSAI", "ISO 22000", "Organic", "Halal", "Kosher"],
  exportMarkets: ["USA", "EU", "Middle East", "Asia", "Africa"],
  packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches", "Jute Bags", "Custom"],
};
