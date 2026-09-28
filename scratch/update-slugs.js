const fs = require('fs');
const path = require('path');

const categoriesPath = path.join(__dirname, '../../src/lib/data/categories.ts');
const productsPath = path.join(__dirname, '../../src/lib/data/products.ts');

let catContent = fs.readFileSync(categoriesPath, 'utf8');

// 1. Add CategorySlug type
const typeDefinition = `
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
`;

catContent = catContent.replace('export interface Category {', typeDefinition + '\nexport interface Category {');

// 2. Change slug: string to slug: CategorySlug
catContent = catContent.replace('slug: string;', 'slug: CategorySlug;');

// 3. Rename existing mismatched slugs
catContent = catContent.replace(/slug: "pulses",/g, 'slug: "pulses-beans",');
catContent = catContent.replace(/slug: "grains",/g, 'slug: "grains-millets",');
catContent = catContent.replace(/slug: "dry-fruits",/g, 'slug: "dry-fruits-nuts",');

// 4. Add missing categories
const newCategories = `
  {
    id: "cat-powdered-spices",
    slug: "powdered-spices",
    name: "Powdered Spices",
    label: "Export Grade Powdered Spices",
    description: "Finely ground, pure Indian spices with high volatile oil content and vibrant natural colors.",
    heroImage: "/images/product-categories/spices.jpg",
    overview: {
      industry: "India produces world-class powdered spices used globally.",
      production: "Machine-ground at low temperatures to retain volatile oils.",
      supplyNetwork: "Direct from state-of-the-art GFSI recognized milling facilities.",
      quickStats: { productsAvailable: 8, countriesServed: 40, moq: "10 MT", leadTime: "14 Days" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "Year-round", exportSeason: "Year-round", demandTrends: "Consistent" },
    certifications: ["ISO 22000", "US FDA", "FSSAI"],
    exportMarkets: ["Global"],
    faqs: []
  },
  {
    id: "cat-tea-coffee",
    slug: "tea-coffee",
    name: "Tea & Coffee",
    label: "Premium Indian Tea & Coffee",
    description: "Authentic Assam, Darjeeling teas and robust Arabica and Robusta Indian coffees.",
    heroImage: "/images/product-categories/tea.jpg",
    overview: {
      industry: "India is a leading producer of premium teas and coffees.",
      production: "Sourced from high-altitude estates.",
      supplyNetwork: "Integrated supply chain.",
      quickStats: { productsAvailable: 6, countriesServed: 30, moq: "5 MT", leadTime: "21 Days" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "Varies", exportSeason: "Year-round", demandTrends: "High" },
    certifications: ["Tea Board", "Coffee Board", "ISO 22000"],
    exportMarkets: ["Global"],
    faqs: []
  },
  {
    id: "cat-soya-products",
    slug: "soya-products",
    name: "Soya Products",
    label: "High-Protein Soya Products",
    description: "Non-GMO Soya chunks, granules, and meal sourced from Central India.",
    heroImage: "/images/product-categories/soya.jpg",
    overview: {
      industry: "Soya is a staple plant-based protein.",
      production: "Produced from Non-GMO Indian soybeans.",
      supplyNetwork: "Exported directly from Madhya Pradesh.",
      quickStats: { productsAvailable: 4, countriesServed: 25, moq: "1x20FT", leadTime: "15 Days" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "October", exportSeason: "Year-round", demandTrends: "Growing" },
    certifications: ["Non-GMO", "FSSAI", "ISO 22000"],
    exportMarkets: ["Global"],
    faqs: []
  },
  {
    id: "cat-rice",
    slug: "rice",
    name: "Rice Varieties",
    label: "Premium Basmati & Non-Basmati Rice",
    description: "Aged 1121 Basmati, Sharbati, and Sona Masoori rice varieties.",
    heroImage: "/images/product-categories/rice.jpg",
    overview: {
      industry: "India is the largest exporter of rice globally.",
      production: "Aged to perfection for optimal cooking characteristics.",
      supplyNetwork: "Extensive network of rice mills.",
      quickStats: { productsAvailable: 10, countriesServed: 60, moq: "24 MT", leadTime: "14 Days" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "November", exportSeason: "Year-round", demandTrends: "Stable" },
    certifications: ["APEDA", "ISO 22000", "FSSAI"],
    exportMarkets: ["Global"],
    faqs: []
  },
  {
    id: "cat-herbs-botanicals",
    slug: "herbs-botanicals",
    name: "Herbs & Botanicals",
    label: "Indian Herbs & Botanicals",
    description: "Senna leaves, Ashwagandha, and Psyllium Husk for pharmaceutical and nutraceutical use.",
    heroImage: "/images/product-categories/herbs.jpg",
    overview: {
      industry: "India supplies critical botanicals for global pharma.",
      production: "Ethically harvested and processed.",
      supplyNetwork: "Direct from specialized botanical farms.",
      quickStats: { productsAvailable: 5, countriesServed: 20, moq: "2 MT", leadTime: "20 Days" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "Varies", exportSeason: "Year-round", demandTrends: "High Growth" },
    certifications: ["GMP", "ISO 22000", "US FDA"],
    exportMarkets: ["Global"],
    faqs: []
  },
  {
    id: "cat-flours-starches",
    slug: "flours-starches",
    name: "Flours & Starches",
    label: "Industrial Flours & Starches",
    description: "Maize starch, wheat flour, and gram flour for food and industrial applications.",
    heroImage: "/images/product-categories/flour.jpg",
    overview: {
      industry: "Essential ingredients for food manufacturing.",
      production: "Milled under strict hygienic conditions.",
      supplyNetwork: "Sourced from high-capacity mills.",
      quickStats: { productsAvailable: 5, countriesServed: 30, moq: "1x20FT", leadTime: "14 Days" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "Year-round", exportSeason: "Year-round", demandTrends: "Stable" },
    certifications: ["FSSAI", "ISO 22000"],
    exportMarkets: ["Global"],
    faqs: []
  },
  {
    id: "cat-other",
    slug: "other",
    name: "Other Commodities",
    label: "Specialty Commodities",
    description: "Specialty agricultural products tailored to buyer requirements.",
    heroImage: "/images/product-categories/other.jpg",
    overview: {
      industry: "Diverse agricultural exports.",
      production: "Sourced on demand.",
      supplyNetwork: "Extensive procurement channels.",
      quickStats: { productsAvailable: 5, countriesServed: 10, moq: "Varies", leadTime: "Varies" },
    },
    origins: [],
    applications: [],
    marketIntelligence: { harvestSeason: "Varies", exportSeason: "Varies", demandTrends: "N/A" },
    certifications: ["FSSAI"],
    exportMarkets: ["Global"],
    faqs: []
  }
];
`;

catContent = catContent.replace('];\n', ',\n' + newCategories);
fs.writeFileSync(categoriesPath, catContent);


// Now update products.ts
let prodContent = fs.readFileSync(productsPath, 'utf8');

if (!prodContent.includes('import { CategorySlug }')) {
  prodContent = 'import { CategorySlug } from "./categories";\n' + prodContent;
}
prodContent = prodContent.replace('categorySlug: string;', 'categorySlug: CategorySlug;');

fs.writeFileSync(productsPath, prodContent);
console.log("Done");
