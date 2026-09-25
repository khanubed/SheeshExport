
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

export interface Variant {
  id: string;
  slug: string;
  name: string;
  shortDescription?: string;
  images: string[];
  attributes: VariantAttribute[];
  specifications: VariantSpecification[];
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
  categorySlug: string;
  botanicalName: string;
  description: string;
  originStory: {
    location: string;
    story: string;
    images: string[];
  };
  variants: Variant[];
  shipping: ShippingDetails;
  certifications: string[];
  exportMarkets: string[];
  packagingOptions: PackagingOption[];
  faqs: FAQ[];
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "p-red-chilli-whole",
    slug: "whole-red-chilli-guntur",
    name: "Whole Red Chilli (Capsicum annuum)",
    category: "Whole Spices",
    categorySlug: "whole-spices",
    botanicalName: "Capsicum annuum",
    seoMetaData: {
      metaTitle: "Whole Red Chilli Bulk Exporter | Guntur Red Chilli Wholesale | Sheesh Exports",
      metaDescription: "Leading Guntur red chilli exporter supplying premium Teja S17, Byadgi, S4 Sannam, 273 & Indo-5 varieties. GAP-certified, ASTA color tested, aflatoxin controlled for global food processors.",
      keywords: [
        "Whole Red Chilli Exporter",
        "Guntur Red Chilli Wholesale",
        "Teja S17 Stemless Bulk",
        "Byadgi Red Chilli ASTA Color",
        "S4 Sannam Red Chilli",
        "Wrinkled 273 Chilli Exporter",
        "Indian Spice Bulk Supplier",
        "Oleoresin Grade Red Chilli"
      ]
    },
    description: "Sheesh Exports is a premier cultivator, processor, and bulk B2B exporter of export-grade Whole Red Chillies (Capsicum annuum), operating directly out of Guntur, Andhra Pradesh—the world's largest hub for red chilli trading and export. India accounts for the largest share of global chilli production and exports, and Sheesh Exports bridges farm-level agronomy directly with international industrial buyers, oleoresin extraction plants, spice grinders, and retail packing brands across North America, Europe, the Middle East, Southeast Asia, and Africa.\n\nWe specialize in all major export-grade commercial varieties including fiery Teja S17, color-rich Byadgi, versatile S4 / Sannam (334), Wrinkled 273, and Indo-5. Sourced from GAP-certified farms, our whole chillies undergo meticulous sun-curing, mechanical destoning, cleaning, and electronic color sorting into Stemless, With Stem, and Cut pod formats.\n\nWe enforce strict compliance controls to maintain moisture below 11–12%, broken/discolored pods under 2%, and total aflatoxin/ochratoxin levels compliant with stringent EU Commission and US FDA threshold standards. Every consignment is pre-inspected by SGS/Geo-Chem, fumigated, palletized, and delivered with full APEDA traceability and Phytosanitary documentation.",
    originStory: {
      location: "Guntur, Andhra Pradesh, India",
      story: "Cultivated in the mineral-rich black soils of the Guntur belt under hot, dry climatic conditions, Guntur chillies are globally renowned for their unmatched heat (capsaicin) and natural color pigments. By pairing age-old sun-curing techniques with modern GAP-compliant farming, Sheesh Exports guarantees 100% farm-to-port traceability, direct community sourcing, and absolute purity without middleman markups.",
      images: [
        "/images/products/red-chilli/red-chilli-whole.jpg",
        "/images/products/red-chilli/red-chilli-1.jpg",
        "/images/products/red-chilli/red-chilli-2.jpg"
      ]
    },
    variants: [
      {
        id: "v-teja-s17-stemless",
        slug: "teja-s17-stemless",
        name: "Teja S17 (Stemless)",
        shortDescription: "Fiery, extra-hot variety widely favored for industrial capsaicin extraction, hot sauces, and spice grinding.",
        images: ["/images/products/red-chilli/stemless.webp"],
        attributes: [
          { label: "Color", value: "Fiery Red" },
          { label: "Heat (SHU)", value: "75,000 - 100,000" },
          { label: "ASTA Color", value: "50 - 70" },
          { label: "Format", value: "Stemless (98%+ destemmed)" }
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "10% - 11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Aflatoxin (B1)", value: "< 5 PPB" },
          { parameter: "Loose/Broken Pods", value: "2% Max" }
        ]
      },
      {
        id: "v-byadgi-with-stem",
        slug: "byadgi-with-stem",
        name: "Byadgi KDL (With Stem / Stemless)",
        shortDescription: "Deep crimson, low-heat chilli valued for high ASTA color extraction, food coloring, and oleoresin production.",
        images: ["/images/products/red-chilli/byadgi.webp"],
        attributes: [
          { label: "Color", value: "Deep Wrinkled Crimson" },
          { label: "Heat (SHU)", value: "8,000 - 15,000" },
          { label: "ASTA Color", value: "120 - 160+" },
          { label: "Format", value: "With Stem / Stemless available" }
        ],
        specifications: [
          { parameter: "Purity", value: "98.5% Min" },
          { parameter: "Moisture", value: "11% - 12% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Total Aflatoxin", value: "< 10 PPB" },
          { parameter: "Pod Length", value: "10 - 12 cm" }
        ]
      },
      {
        id: "v-s4-sannam-334",
        slug: "s4-sannam-stemless",
        name: "S4 / Sannam (334) (Stemless & With Stem)",
        shortDescription: "The world's largest volume export chilli variety, known for balanced heat, medium color, and consistent quality.",
        images: ["/images/products/red-chilli/Sannam-Stemless.jpg"],
        attributes: [
          { label: "Color", value: "Bright Red" },
          { label: "Heat (SHU)", value: "25,000 - 35,000" },
          { label: "ASTA Color", value: "40 - 60" },
          { label: "Format", value: "Stemless / With Stem" }
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Total Aflatoxin", value: "< 10 PPB" },
          { parameter: "Skin Thickness", value: "Thin to Medium" }
        ]
      },
      {
        id: "v-wrinkled-273",
        slug: "wrinkled-273-stemless",
        name: "Wrinkled 273 (Stemless)",
        shortDescription: "Popular medium-heat variety with distinct wrinkled pericarp, excellent for blended curry powders and oleoresin.",
        images: ["/images/products/red-chilli/wrinkled.jpg"],
        attributes: [
          { label: "Color", value: "Dark Red" },
          { label: "Heat (SHU)", value: "15,000 - 25,000" },
          { label: "ASTA Color", value: "60 - 90" },
          { label: "Format", value: "Stemless" }
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" }
        ]
      },
      {
        id: "v-indo-5",
        slug: "indo-5-with-stem",
        name: "Indo-5 / ENDO 5 (With Stem)",
        shortDescription: "Long-pod, thick-skinned variety delivering sharp pungency and ideal durability for long ocean transportation.",
        images: ["/images/products/red-chilli/indo-5-chilli.jpg"],
        attributes: [
          { label: "Color", value: "Light to Vibrant Red" },
          { label: "Heat (SHU)", value: "50,000 - 65,000" },
          { label: "ASTA Color", value: "50 - 70" },
          { label: "Format", value: "With Stem" }
        ],
        specifications: [
          { parameter: "Purity", value: "98% Min" },
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Pod Length", value: "11 - 14 cm" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "7 to 7.5 MT (Uncompressed Jute/PP Bags) / Up to 11 MT (Compressed Bales)",
      capacity40ft: "14 to 15 MT (Jute/PP Bags) / Up to 24 MT (High Cube Compressed Bales)",
      transitTime: "12 - 35 Days depending on port of destination",
      exportPorts: ["Krishnapatnam Port", "Chennai Port", "Visakhapatnam Port", "Nhava Sheva (JNPT)"],
      shippingModes: ["FCL (Full Container Load)", "LCL (Less Than Container Load)", "Break Bulk"]
    },
    certifications: [
      "FSSAI Certified",
      "APEDA (Ministry of Commerce India)",
      "Spices Board of India Registered Exporter",
      "ISO 22000:2018 Food Safety",
      "US FDA Registered Facility",
      "GMP & HACCP Compliant",
      "SGS / Geo-Chem Quality Certified"
    ],
    exportMarkets: [
      "United States & Canada",
      "European Union (Germany, Netherlands, UK, Spain)",
      "Middle East (UAE, Saudi Arabia, Qatar, Oman)",
      "Southeast Asia (China, Vietnam, Malaysia, Indonesia, Thailand)",
      "North & East Africa"
    ],
    packagingOptions: [
      {
        id: "pkg-raw",
        name: "Bulk Commodity Packaging (B2B Grinders & Extractors)",
        description: "Heavy-duty breathable Jute sacks, PP woven bags, or high-density hydraulic compressed bales (to maximize payload).",
        moq: "14 MT (1 x 40FT HC Container)",
        leadTime: "7 - 10 Days from order confirmation",
        bestFor: "Spice Grinders, Capsaicin Extractors, Oleoresin Manufacturers, Wholesale Importers"
      },
      {
        id: "pkg-private",
        name: "Private Label Retail & Foodservice Packaging",
        description: "Customized pouch packing, pillow bags, zip-lock stand-up pouches, or retail master cartons with customer logo and compliance labeling.",
        moq: "5 MT per variant/brand design",
        leadTime: "18 - 25 Days",
        bestFor: "Retail Brands, Supermarket Chains, Foodservice Distributors"
      },
      {
        id: "pkg-sheesh",
        name: "Sheesh Exports Branded Packaging",
        description: "Standard high-barrier export-grade 10kg/25kg branded poly-laminated multi-wall bags ready for distribution.",
        moq: "5 MT",
        leadTime: "10 Days",
        bestFor: "Regional Spice Distributors, Re-exporters, Food Processing Units"
      }
    ],
    faqs: [
      {
        question: "Which commercial red chilli varieties does Sheesh Exports export?",
        answer: "We export Teja S17, Byadgi KDL, S4 / Sannam (334), Wrinkled 273, and Indo-5 varieties in Stemless, With Stem, or Crush/Flake forms depending on client requirements."
      },
      {
        question: "What is the difference between Stemless and With-Stem chillies?",
        answer: "Stemless chillies have the natural stem manually or mechanically removed, reducing container shipping weight, lowering waste for spice grinders, and eliminating processing steps. With-Stem chillies retain their original stem and are often preferred for whole-spice distribution."
      },
      {
        question: "How do you ensure aflatoxin and pesticide residue limits comply with US FDA and EU standards?",
        answer: "Chillies are sun-dried on food-grade raised poly-tarpaulins to eliminate soil contact and fungal growth. Every lot is tested via HPLC/LC-MS-MS for aflatoxin B1/total and pesticide residues prior to dispatch."
      },
      {
        question: "Can you increase the container loading capacity for whole chillies?",
        answer: "Yes. While standard loose-bagged chillies yield ~14-15 MT per 40ft HC container, we offer hydraulically compressed paper/jute bales that allow loading up to 22-24 MT per 40ft HC container, significantly reducing freight cost per metric ton."
      }
    ]
  },
  {
    id: "p1",
    slug: "maizewhite-yellow",
    name: "Maize (White/Yellow)",
    category: "Grains & Millets",
    categorySlug: "grains-millets",
    botanicalName: "Zea mays",
    description: "Sheesh Exports is a premier Indian manufacturer, processor, and bulk exporter of high-grade Yellow and White Maize (Zea mays), catering to global feed mills, food processing corporations, starch manufacturers, and brewery industries worldwide. Sourced directly from fertile agrarian belts across Madhya Pradesh, Karnataka, Maharashtra, and Bihar, our export-quality corn is harvested under optimal agro-climatic conditions and processed in advanced sortex cleaning facilities.\n\nWe offer both Food Grade Yellow/White Maize suitable for human consumption, corn meal, grits, and tortilla manufacturing, as well as high-energy Feed Grade Maize customized for poultry, cattle, and aquafeed rations. Our stringent processing protocols guarantee foreign matter below 1%, maximum moisture controlled at 14%, low broken kernels, and strict compliance with global aflatoxin standards.",
    originStory: {
      location: "Guntur, Andhra Pradesh, India",
      story: "Guntur, the chilli capital of the world, offers the perfect confluence of rich volcanic soil and a hot, dry climate essential for cultivating the world's finest red chillies. The heritage of chilli farming here dates back centuries, with farmers utilizing traditional sun-curing methods alongside modern GAP-certified agronomy. Our deep-rooted relationships with local farming communities ensure absolute traceability from seed to shipment. By bypassing middlemen, we guarantee that only the most vibrant, pungent, and unadulterated chillies reach our global clientele.",
      images: ["/images/products/red-chilli.jpg", "/images/products/red-chilli.jpg", "/images/products/red-chilli.jpg"]
    },
    variants: [
      {
        id: "v-yellow-maize-food",
        slug: "yellow-maize-food-grade",
        name: "Yellow Maize (Food Grade)",
        shortDescription: "Premium grade Yellow Maize (Food Grade) specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/maize-main.png"],
        attributes: [
          { label: "Color", value: "Bright Yellow" },
          { label: "Grade", value: "Food Grade (Sortex Cleaned)" },
          { label: "Protein", value: "8-9% Min" },
          { label: "Use Case", value: "Human Consumption, Starch" }
        ],
        specifications: [
          { parameter: "Purity", value: "99% Min" },
          { parameter: "Moisture", value: "14% Max" },
          { parameter: "Broken Kernels", value: "2% Max" },
          { parameter: "Aflatoxin", value: "< 10 PPB" }
        ]
      },
      {
        id: "v-yellow-maize-feed",
        slug: "yellow-maize-feed-grade",
        name: "Yellow Maize (Feed Grade)",
        images: ["/images/products/maize-main.png"],
        attributes: [
          { label: "Color", value: "Yellow" },
          { label: "Grade", value: "Feed Grade" },
          { label: "Energy", value: "High Caloric Value" },
          { label: "Use Case", value: "Poultry, Cattle Feed" }
        ],
        specifications: [
          { parameter: "Purity", value: "98% Min" },
          { parameter: "Moisture", value: "14% Max" },
          { parameter: "Broken Kernels", value: "3% Max" },
          { parameter: "Aflatoxin", value: "< 20 PPB" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "24 - 26 MT (Packed in 50kg bags)",
      capacity40ft: "N/A (Weight restrictions usually apply)",
      transitTime: "10 - 30 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL", "Break Bulk Vessel"]
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
        bestFor: "Feed Mills, Starch Manufacturers"
      },
      {
        id: "pkg-bulk-vessel",
        name: "Break Bulk",
        description: "Loose bulk loading into vessel holds.",
        moq: "5,000 MT",
        leadTime: "30-45 Days",
        bestFor: "Large Scale Procurement"
      }
    ],
    faqs: [
      { question: "What is your MOQ for Maize?", answer: "Our standard MOQ is 100 Metric Tons (approx 4x20ft FCL) for containerized shipments." },
      { question: "Do you supply Non-GMO Maize?", answer: "Yes, Indian maize is strictly Non-GMO, and we provide Non-GMO certification with every shipment." }
    ]
  },
  {
    id: "p16",
    slug: "coffee-all-varities",
    name: "Coffee (Arabica & Robusta)",
    category: "Tea & Coffee",
    categorySlug: "tea-coffee",
    botanicalName: "Coffea arabica / canephora",
    description: "Sheesh Exports is a premier exporter of Indian green coffee beans, sourcing directly from the lush, high-altitude estates of Coorg, Chikmagalur, and Wayanad. Indian coffee is globally celebrated for its shade-grown cultivation, intricate flavor profiles, and low acidity, making it a highly sought-after commodity for specialty roasters, commercial blenders, and instant coffee manufacturers across Europe, the Middle East, and North America.\n\nOur portfolio encompasses top-tier washed Arabica (Plantation A, B, PB) known for its sweet, aromatic, and balanced cup, as well as robust, full-bodied unwashed Robusta (Cherry AB, PB) which provides the perfect crema and strength for espresso blends. Every bean undergoes meticulous processing, including selective hand-picking, eco-friendly pulping, sun-drying on raised African beds, and rigorous optical sortexing to guarantee zero defects and consistent screen sizes.",
    originStory: {
      location: "Madhya Pradesh & Karnataka, India",
      story: "The agrarian heartlands of Madhya Pradesh and Karnataka provide an ideal ecosystem for robust maize cultivation. Leveraging generations of farming expertise combined with precision agriculture, we ensure robust kernel development. Our dedicated sourcing network directly procures from farmer cooperatives immediately post-harvest, ensuring freshness and minimizing post-harvest losses. The result is nutrient-dense, vibrant maize that forms the backbone of global food and feed supply chains.",
      images: ["/images/products/maize-main.png", "/images/products/maize-main.png", "/images/products/maize-main.png"]
    },
    variants: [
      {
        id: "v-arabica-plantation-a",
        slug: "arabica-plantation-a",
        name: "Arabica Plantation A",
        shortDescription: "Premium grade Arabica Plantation A specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/turmeric.jpg"],
        attributes: [
          { label: "Type", value: "Washed Arabica" },
          { label: "Screen Size", value: "17" },
          { label: "Cup Profile", value: "Sweet, Balanced, Mild Acidity" },
          { label: "Defects", value: "Zero" }
        ],
        specifications: [
          { parameter: "Moisture", value: "10-11% Max" },
          { parameter: "Triage", value: "2% Max" },
          { parameter: "Black Beans", value: "Nil" },
          { parameter: "Packaging", value: "60kg Jute Bags with GrainPro" }
        ]
      },
      {
        id: "v-robusta-cherry-ab",
        slug: "robusta-cherry-ab",
        name: "Robusta Cherry AB",
        images: ["/images/products/turmeric.jpg"],
        attributes: [
          { label: "Type", value: "Unwashed Robusta" },
          { label: "Screen Size", value: "15-16" },
          { label: "Cup Profile", value: "Strong, Earthy, Excellent Crema" },
          { label: "Defects", value: "Minimal" }
        ],
        specifications: [
          { parameter: "Moisture", value: "11% Max" },
          { parameter: "Triage", value: "3% Max" },
          { parameter: "Black Beans", value: "1% Max" },
          { parameter: "Packaging", value: "60kg Jute Bags" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "19.2 MT (320 bags of 60kg)",
      capacity40ft: "24 MT (approx)",
      transitTime: "15 - 35 Days",
      exportPorts: ["Mangalore Port", "Chennai Port", "Cochin Port"],
      shippingModes: ["FCL", "LCL"]
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
        bestFor: "Commercial Roasters"
      },
      {
        id: "pkg-grainpro",
        name: "GrainPro / Ecotact Bags",
        description: "Hermetically sealed liners inside jute bags to preserve freshness and moisture.",
        moq: "5 MT",
        leadTime: "15-21 Days",
        bestFor: "Specialty Coffee Roasters"
      }
    ],
    faqs: [
      { question: "Do you supply specialty grade Indian coffee?", answer: "Yes, we supply specialty graded Arabica and Robusta, including Monsooned Malabar upon request." },
      { question: "What is the standard packaging for export?", answer: "Green coffee is typically exported in 60kg jute bags, with optional GrainPro liners for enhanced quality preservation." }
    ]
  },
  {
    id: "p17",
    slug: "tea-all-varieties",
    name: "Indian Tea (Assam & Darjeeling)",
    category: "Tea & Coffee",
    categorySlug: "tea-coffee",
    botanicalName: "Camellia sinensis",
    description: "As a leading bulk exporter of premium Indian teas, Sheesh Exports bridges the gap between historic tea estates and global beverage brands. India produces some of the most distinguished teas in the world, and our catalog encompasses the full spectrum of this rich heritage. We specialize in robust, malty Assam CTC (Crush, Tear, Curl) black teas, renowned for their strength and color, making them the preferred choice for morning blends, Karak chai, and breakfast teas globally.\n\nIn addition, we export the 'Champagne of Teas'—Darjeeling Orthodox. Grown in the misty Himalayan foothills, these teas offer delicate muscatel flavors and exquisite floral aromas. Our sourcing team rigorously evaluates cup quality, liquor, and leaf appearance, ensuring that every consignment meets strict international standards for moisture content, purity, and pesticide residues. Whether you require bulk supply for large-scale blending or premium single-estate lots for specialty retail, Sheesh Exports delivers unparalleled quality and consistency.",
    originStory: {
      location: "Coorg & Chikmagalur, Karnataka, India",
      story: "Cultivated under a dense canopy of shade trees alongside spices like pepper and cardamom, Indian coffee boasts a unique terroir. The high-altitude estates of the Western Ghats benefit from copious monsoon rains and rich organic soils. This biodiversity-friendly, shade-grown approach allows the cherries to mature slowly, developing complex sugars and nuanced flavor notes. Our partner estates adhere to sustainable farming practices, preserving the delicate ecosystem while yielding beans of exceptional quality.",
      images: ["/images/products/turmeric.jpg", "/images/products/turmeric.jpg", "/images/products/turmeric.jpg"]
    },
    variants: [
      {
        id: "v-assam-ctc",
        slug: "assam-ctc-bopl",
        name: "Assam CTC (BOPL/BP)",
        shortDescription: "Premium grade Assam CTC (BOPL/BP) specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/turmeric.jpg"],
        attributes: [
          { label: "Type", value: "Black Tea (CTC)" },
          { label: "Grade", value: "BOPL / BP" },
          { label: "Liquor", value: "Bright Red, Strong" },
          { label: "Flush", value: "Second Flush / Autumn" }
        ],
        specifications: [
          { parameter: "Moisture", value: "5% Max" },
          { parameter: "Total Ash", value: "8% Max" },
          { parameter: "Water Extract", value: "32% Min" },
          { parameter: "Packaging", value: "Paper Sacks (25-30kg)" }
        ]
      },
      {
        id: "v-darjeeling-orthodox",
        slug: "darjeeling-orthodox",
        name: "Darjeeling Orthodox",
        images: ["/images/products/turmeric.jpg"],
        attributes: [
          { label: "Type", value: "Black Tea (Orthodox)" },
          { label: "Grade", value: "FTGFOP1" },
          { label: "Liquor", value: "Light Amber, Muscatel" },
          { label: "Flush", value: "First / Second Flush" }
        ],
        specifications: [
          { parameter: "Moisture", value: "5% Max" },
          { parameter: "Total Ash", value: "8% Max" },
          { parameter: "Water Extract", value: "32% Min" },
          { parameter: "Packaging", value: "Vacuum Packed Cartons" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "9-11 MT (approx)",
      capacity40ft: "20-22 MT (approx)",
      transitTime: "15 - 30 Days",
      exportPorts: ["Kolkata Port", "Haldia Port"],
      shippingModes: ["FCL", "LCL"]
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
        bestFor: "Tea Packers, Blenders"
      },
      {
        id: "pkg-carton",
        name: "Corrugated Cartons",
        description: "Vacuum sealed foil bags inside strong corrugated cartons for delicate orthodox teas.",
        moq: "1 MT",
        leadTime: "14-21 Days",
        bestFor: "Specialty Tea Buyers"
      }
    ],
    faqs: [
      { question: "Can you supply bespoke tea blends?", answer: "Yes, our expert tea tasters can match specific flavor profiles and create custom blends for your brand." },
      { question: "Are your teas tested for heavy metals and pesticides?", answer: "Absolutely. All export consignments are tested by NABL accredited labs to ensure compliance with EU MRLs and global safety standards." }
    ]
  },
  {
    id: "p23",
    slug: "soya-chunks",
    name: "Soya Chunks (TVP)",
    category: "Soya Products",
    categorySlug: "soya-products",
    botanicalName: "Glycine max (Processed)",
    description: "Sheesh Exports is a prominent supplier and exporter of high-protein Soya Chunks, also known as Textured Vegetable Protein (TVP). Manufactured from defatted soy flour using advanced extrusion technology, our soya chunks are a highly versatile, nutrient-dense meat substitute gaining immense popularity in vegetarian, vegan, and health-conscious diets globally.\n\nWith a protein content exceeding 52%, low fat, and zero cholesterol, our soya chunks offer excellent water absorption, expanding significantly upon hydration while maintaining a satisfying, meat-like fibrous texture. We supply various sizes including large chunks, mini chunks, and granules, catering to diverse culinary applications from curries and stews to ready-to-eat meals and institutional feeding programs. Produced in state-of-the-art, ISO-certified facilities, our TVP guarantees strict hygiene, long shelf life, and superior nutritional integrity.",
    originStory: {
      location: "Assam & Darjeeling, India",
      story: "The Brahmaputra valley in Assam provides a tropical climate that yields strong, bold teas, while the steep, cool slopes of Darjeeling foster slow growth, resulting in complex, aromatic profiles. Our teas are sourced from estates with over a century of plucking tradition, where 'two leaves and a bud' remains the gold standard. We champion ethical sourcing, supporting estates that prioritize worker welfare and sustainable, pesticide-controlled cultivation.",
      images: ["/images/products/turmeric.jpg", "/images/products/turmeric.jpg", "/images/products/turmeric.jpg"]
    },
    variants: [
      {
        id: "v-soya-chunks-large",
        slug: "soya-chunks-large",
        name: "Large Soya Chunks",
        shortDescription: "Premium grade Large Soya Chunks specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/oats.jpg"],
        attributes: [
          { label: "Size", value: "Large (20-25mm)" },
          { label: "Protein", value: "52% Min" },
          { label: "Fat", value: "1% Max" },
          { label: "Texture", value: "Fibrous, Spongy" }
        ],
        specifications: [
          { parameter: "Moisture", value: "8% Max" },
          { parameter: "Ash", value: "6% Max" },
          { parameter: "Crude Fiber", value: "3.5% Max" },
          { parameter: "Water Absorption", value: "300% Min" }
        ]
      },
      {
        id: "v-soya-granules",
        slug: "soya-granules",
        name: "Soya Granules / Mince",
        images: ["/images/products/oats.jpg"],
        attributes: [
          { label: "Size", value: "Fine Granules (2-4mm)" },
          { label: "Protein", value: "52% Min" },
          { label: "Fat", value: "1% Max" },
          { label: "Texture", value: "Mince-like" }
        ],
        specifications: [
          { parameter: "Moisture", value: "8% Max" },
          { parameter: "Ash", value: "6% Max" },
          { parameter: "Crude Fiber", value: "3.5% Max" },
          { parameter: "Water Absorption", value: "250% Min" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "7 - 8 MT (Due to low bulk density)",
      capacity40ft: "16 - 18 MT (approx)",
      transitTime: "15 - 35 Days",
      exportPorts: ["Nhava Sheva", "Mundra Port"],
      shippingModes: ["FCL"]
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
        bestFor: "Food Manufacturers, Institutions"
      },
      {
        id: "pkg-retail-soya",
        name: "Retail Pouches",
        description: "200g, 500g, or 1kg printed pouches packed in master cartons (Private Label available).",
        moq: "1x20ft Container",
        leadTime: "21-28 Days",
        bestFor: "Supermarkets, FMCG Brands"
      }
    ],
    faqs: [
      { question: "Is your TVP made from Non-GMO soybeans?", answer: "Yes, all our soya products are manufactured exclusively from Non-GMO Indian soybeans." },
      { question: "What is the shelf life of soya chunks?", answer: "When stored in a cool, dry place away from direct sunlight, the shelf life is 12 months from the date of manufacture." }
    ]
  },
  {
    id: "p27",
    slug: "1121",
    name: "1121 Basmati Rice",
    category: "Rice",
    categorySlug: "rice",
    botanicalName: "Oryza sativa",
    description: "Sheesh Exports is a premier exporter of 1121 Basmati Rice, globally recognized as the world's longest grain rice. Cultivated in the fertile plains of Punjab and Haryana fed by Himalayan rivers, our 1121 Basmati is celebrated for its extraordinary grain length (averaging 8.35mm+ before cooking), delicate aroma, and exceptional elongation ratio, expanding up to 2.5 times its original size when cooked.\n\nWe supply all major variations including White Sella (Parboiled), Golden/Cream Sella, and Steam Basmati. Our rice undergoes rigorous processing in ultra-modern milling facilities equipped with Satake sortex machines, ensuring 100% purity, zero admixture, and absolute uniformity. Ideal for premium culinary applications such as Arabic Mandi, Kabsa, and Royal Biryani, our 1121 Basmati Rice is the first choice for fine-dining restaurants, royal caterers, and premium retail brands across the Middle East, Europe, and North America.",
    originStory: {
      location: "Madhya Pradesh, India",
      story: "Madhya Pradesh, often referred to as the 'Soya Bowl of India', produces the country's highest quality non-GMO soybeans. We source premium defatted soy flour directly from integrated crushing plants in this region. The extrusion process is tightly controlled for temperature and pressure, ensuring the anti-nutritional factors are neutralized while preserving the high-quality plant protein. The result is a clean-tasting, highly functional ingredient ready for global export.",
      images: ["/images/products/oats.jpg", "/images/products/oats.jpg", "/images/products/oats.jpg"]
    },
    variants: [
      {
        id: "v-1121-creamy-sella",
        slug: "1121-creamy-sella",
        name: "1121 Creamy Sella",
        shortDescription: "Premium grade 1121 Creamy Sella specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/wheat.jpg"],
        attributes: [
          { label: "Type", value: "Parboiled (Sella)" },
          { label: "Average Length", value: "8.35mm+" },
          { label: "Color", value: "Creamy / Light Yellow" },
          { label: "Elongation", value: "Excellent" }
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Broken", value: "1% Max" },
          { parameter: "Sortex", value: "100% Cleaned" },
          { parameter: "Discolor", value: "1% Max" }
        ]
      },
      {
        id: "v-1121-steam",
        slug: "1121-steam",
        name: "1121 Steam Basmati",
        images: ["/images/products/wheat.jpg"],
        attributes: [
          { label: "Type", value: "Steamed White" },
          { label: "Average Length", value: "8.35mm+" },
          { label: "Color", value: "Pearl White" },
          { label: "Aroma", value: "Highly Aromatic" }
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Broken", value: "1% Max" },
          { parameter: "Sortex", value: "100% Cleaned" },
          { parameter: "Discolor", value: "0.5% Max" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "24 - 25 MT",
      capacity40ft: "N/A (Weight limits)",
      transitTime: "15 - 30 Days",
      exportPorts: ["Mundra Port", "Kandla Port"],
      shippingModes: ["FCL"]
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
        bestFor: "Wholesale & Premium Retail"
      },
      {
        id: "pkg-non-woven",
        name: "Non-Woven Bags",
        description: "High-quality non-woven bags (5kg, 10kg, 20kg) with handle and zipper.",
        moq: "25 MT",
        leadTime: "21-28 Days",
        bestFor: "Supermarkets, Consumer Retail"
      },
      {
        id: "pkg-pp-rice",
        name: "BOPP / PP Bags",
        description: "Laminated BOPP bags for excellent moisture barrier and vibrant printing.",
        moq: "25 MT",
        leadTime: "21-28 Days",
        bestFor: "Mass Retail Brands"
      }
    ],
    faqs: [
      { question: "Is the rice aged?", answer: "Yes, our premium 1121 Basmati is aged for a minimum of 12 to 18 months to ensure optimum cooking results and non-sticky texture." },
      { question: "Can you pack under our private label?", answer: "Absolutely. We specialize in OEM / private label packing and can manufacture custom bags (Jute, Non-woven, BOPP) with your brand design." }
    ]
  },
  {
    id: "p40",
    slug: "almond",
    name: "Almond Kernels",
    category: "Dry Fruits & Nuts",
    categorySlug: "dry-fruits-nuts",
    botanicalName: "Prunus dulcis",
    description: "Sheesh Exports provides premium quality Almond kernels sourced from the best global orchards and processed to exacting standards. Almonds are a nutritional powerhouse, rich in healthy fats, antioxidants, vitamins, and minerals. We cater to wholesale buyers, snack manufacturers, bakeries, and cosmetic oil extractors worldwide, delivering consistent quality, crunch, and flavor.\n\nOur rigorous processing involves advanced mechanical shelling, electronic color sorting, and manual inspection to ensure uniform size, minimal scratches, and absence of bitter kernels. We offer various grades including Nonpareil Supreme, Carmel, and standard processing grades, available in different count sizes per ounce (e.g., 23-25, 27-30). Stringent moisture control and hygienic vacuum or carton packaging guarantee extended shelf life and prevent lipid oxidation during oceanic transit.",
    originStory: {
      location: "Punjab & Haryana, India",
      story: "True Basmati can only be grown in the specific geographic footprint at the foothills of the Himalayas. The combination of mineral-rich glacial waters, specific soil composition, and the unique diurnal temperature variations of Punjab and Haryana impart the distinct aroma and elongation characteristics to the 1121 variety. Our paddy is carefully aged for a minimum of 12 months before milling, a crucial step that reduces moisture, enhances aroma, and ensures the grains remain separate and fluffy upon cooking.",
      images: ["/images/products/wheat.jpg", "/images/products/wheat.jpg", "/images/products/wheat.jpg"]
    },
    variants: [
      {
        id: "v-almond-nonpareil",
        slug: "almond-nonpareil",
        name: "Nonpareil Supreme",
        shortDescription: "Premium grade Nonpareil Supreme specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/almond.jpg"],
        attributes: [
          { label: "Type", value: "Flat, Light Colored" },
          { label: "Size", value: "23/25, 27/30 count/oz" },
          { label: "Appearance", value: "Smooth surface, high visual appeal" },
          { label: "Use Case", value: "Premium snacking, gifting" }
        ],
        specifications: [
          { parameter: "Moisture", value: "6% Max" },
          { parameter: "Scratched/Split", value: "5% Max" },
          { parameter: "Foreign Material", value: "0.1% Max" },
          { parameter: "Purity", value: "99.9%" }
        ]
      },
      {
        id: "v-almond-carmel",
        slug: "almond-carmel",
        name: "Carmel Type",
        images: ["/images/products/almond.jpg"],
        attributes: [
          { label: "Type", value: "Slightly wrinkled, darker" },
          { label: "Size", value: "27/30, 30/32 count/oz" },
          { label: "Flavor", value: "Rich, nutty" },
          { label: "Use Case", value: "Roasting, baking, processing" }
        ],
        specifications: [
          { parameter: "Moisture", value: "6% Max" },
          { parameter: "Scratched/Split", value: "10% Max" },
          { parameter: "Foreign Material", value: "0.1% Max" },
          { parameter: "Purity", value: "99.9%" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "15 - 17 MT",
      capacity40ft: "25 MT",
      transitTime: "15 - 30 Days",
      exportPorts: ["Nhava Sheva"],
      shippingModes: ["FCL"]
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
        bestFor: "Wholesale, Processing"
      }
    ],
    faqs: [
      { question: "Do you supply blanched or sliced almonds?", answer: "Yes, we can supply value-added almond products such as blanched, sliced, and diced almonds upon specific request." }
    ]
  },
  {
    id: "p46",
    slug: "peanut-whole",
    name: "Indian Peanuts (Groundnuts)",
    category: "Dry Fruits & Nuts",
    categorySlug: "dry-fruits-nuts",
    botanicalName: "Arachis hypogaea",
    description: "Sheesh Exports is a significant exporter of premium Indian Peanuts (Groundnuts), sourcing predominantly from the fertile Saurashtra region of Gujarat. Indian peanuts are favored globally for their rich, nutty flavor, high oil content, and crunchy texture, making them ideal for direct snacking, peanut butter manufacturing, oil extraction, and confectionery use.\n\nWe supply both major Indian varieties: the larger, elongated 'Bold' peanuts and the smaller, rounder 'Java' peanuts. Quality and food safety are paramount in our peanut export operations. Every batch undergoes rigorous mechanized destoning, decortication, and electronic color sorting to ensure uniform size and eliminate damaged kernels. Most critically, we employ strict moisture control and comprehensive laboratory testing to guarantee our peanuts are free from Aflatoxin, fully complying with stringent European and international safety regulations.",
    originStory: {
      location: "Processed in India (Global Sourcing)",
      story: "While we source raw inshell almonds from top-tier global origins like California and Australia, the meticulous processing, grading, and sorting are conducted in our state-of-the-art facilities in India. This dual approach allows us to leverage global crop quality while applying highly cost-effective, precise Indian processing capabilities, delivering unmatched value and customized grading to our international B2B clients.",
      images: ["/images/products/almond.jpg", "/images/products/almond.jpg", "/images/products/almond.jpg"]
    },
    variants: [
      {
        id: "v-peanut-bold",
        slug: "peanut-bold",
        name: "Bold Peanuts",
        shortDescription: "Premium grade Bold Peanuts specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/peanut.jpg"],
        attributes: [
          { label: "Shape", value: "Long, Elongated" },
          { label: "Skin Color", value: "Reddish Brown" },
          { label: "Counts per Ounce", value: "38/42, 40/50, 50/60" },
          { label: "Use Case", value: "Roasting, Snacking" }
        ],
        specifications: [
          { parameter: "Moisture", value: "7% Max" },
          { parameter: "Admixture", value: "1% Max" },
          { parameter: "Imperfect Grains", value: "1% Max" },
          { parameter: "Aflatoxin", value: "< 5 PPB (or as required)" }
        ]
      },
      {
        id: "v-peanut-java",
        slug: "peanut-java",
        name: "Java Peanuts",
        images: ["/images/products/peanut.jpg"],
        attributes: [
          { label: "Shape", value: "Round" },
          { label: "Skin Color", value: "Light Pink" },
          { label: "Counts per Ounce", value: "50/60, 60/70, 70/80" },
          { label: "Use Case", value: "Peanut Butter, Confectionery" }
        ],
        specifications: [
          { parameter: "Moisture", value: "7% Max" },
          { parameter: "Admixture", value: "1% Max" },
          { parameter: "Imperfect Grains", value: "1% Max" },
          { parameter: "Aflatoxin", value: "< 5 PPB (or as required)" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "19 MT",
      capacity40ft: "N/A",
      transitTime: "15 - 30 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL"]
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
        bestFor: "Standard Wholesale Export"
      },
      {
        id: "pkg-vacuum-peanut",
        name: "Vacuum Pack",
        description: "25kg vacuum-packed poly bags inside cartons to guarantee zero aflatoxin development.",
        moq: "19 MT",
        leadTime: "21 Days",
        bestFor: "EU Markets, Premium Buyers"
      }
    ],
    faqs: [
      { question: "How do you guarantee Aflatoxin limits?", answer: "We conduct pre-shipment tests through independent NABL/SGS labs using HPLC methods. We also offer vacuum packing to ensure conditions remain stable during transit." }
    ]
  },
  {
    id: "p49",
    slug: "green-peas",
    name: "Green Peas (Dry)",
    category: "Pulses & Beans",
    categorySlug: "pulses-beans",
    botanicalName: "Pisum sativum",
    description: "Sheesh Exports supplies premium quality whole dried Green Peas, a staple pulse valued globally for its high protein content, dietary fiber, and versatility. Sourced from the robust agricultural zones of Uttar Pradesh and Madhya Pradesh, our green peas are uniformly sized, vibrant in color, and free from weevil damage or fungal infection.\n\nIdeal for canning, freezing, snack roasting (like wasabi peas), and traditional curries, our green peas undergo comprehensive machine cleaning, destoning, and sortex processing. We ensure strict adherence to international grading standards, guaranteeing minimal foreign matter, split peas, or discoloration. With a long shelf life and excellent nutritional profile, our bulk green peas are a dependable commodity for global food manufacturers, distributors, and relief agencies.",
    originStory: {
      location: "Gujarat, India",
      story: "Gujarat accounts for the lion's share of India's peanut production. The region's well-drained sandy loam soils and favorable monsoon cycles create the perfect environment for robust pod development. We work closely with farming cooperatives to ensure timely harvesting and proper sun-drying, which is critical to preventing mold growth and ensuring aflatoxin-free kernels. Our integrated processing units near the major ports ensure minimal transit time from factory to vessel.",
      images: ["/images/products/peanut.jpg", "/images/products/peanut.jpg", "/images/products/peanut.jpg"]
    },
    variants: [
      {
        id: "v-whole-green-peas",
        slug: "whole-green-peas",
        name: "Whole Green Peas",
        shortDescription: "Premium grade Whole Green Peas specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/green-peas.jpg"],
        attributes: [
          { label: "Type", value: "Whole, Unsplit" },
          { label: "Color", value: "Vibrant Green" },
          { label: "Processing", value: "Machine Cleaned & Sortexed" },
          { label: "Use Case", value: "Canning, Snacking, Curries" }
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Foreign Matter", value: "1% Max" },
          { parameter: "Broken/Split", value: "2% Max" },
          { parameter: "Damage/Weevil", value: "Max 1%" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "24 MT",
      capacity40ft: "N/A",
      transitTime: "15 - 30 Days",
      exportPorts: ["Nhava Sheva", "Mundra Port"],
      shippingModes: ["FCL"]
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
        bestFor: "Wholesale, Canning Industry"
      }
    ],
    faqs: [
      { question: "Are these peas suitable for sprouting?", answer: "Yes, our whole green peas have high germination rates and are suitable for sprouting." }
    ]
  },
  {
    id: "p57",
    slug: "psyllium-seed",
    name: "Psyllium Seed & Husk",
    category: "Herbs & Botanicals",
    categorySlug: "herbs-botanicals",
    botanicalName: "Plantago ovata",
    description: "Sheesh Exports is a premier supplier of high-purity Psyllium Seeds and Psyllium Husk (Isabgol), sourced directly from the arid, sandy soils of Gujarat and Rajasthan—the global epicenter for Psyllium cultivation. Psyllium is a natural, soluble dietary fiber widely utilized in the pharmaceutical, nutraceutical, and food industries as a gentle bulk-forming laxative, cholesterol-lowering agent, and gluten-free baking binder.\n\nWe offer an array of purities ranging from 85% to 99% for both whole seeds and milled husk powder. Our state-of-the-art processing facility employs mechanical sieving, gravity separation, and sterilization techniques to eliminate sand, dust, and heavy metals, ensuring a pristine, pharmaceutical-grade product. We proudly supply both conventional and certified organic Psyllium to global pharmaceutical giants, dietary supplement brands, and health food manufacturers.",
    originStory: {
      location: "Uttar Pradesh & MP, India",
      story: "Cultivated as a winter (Rabi) crop, Indian green peas benefit from the cool climate and fertile alluvial soils of the Gangetic plains. Upon harvesting, the peas are naturally sun-dried to optimal moisture levels before being transported to our processing hubs. Our meticulous sorting process removes any bleached or shriveled peas, ensuring our clients receive a product that cooks evenly and presents beautifully in end-consumer products.",
      images: ["/images/products/green-peas.jpg", "/images/products/green-peas.jpg", "/images/products/green-peas.jpg"]
    },
    variants: [
      {
        id: "v-psyllium-husk-99",
        slug: "psyllium-husk-99",
        name: "Psyllium Husk 99%",
        shortDescription: "Premium grade Psyllium Husk 99% specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/psyllium.jpg"],
        attributes: [
          { label: "Purity", value: "99%" },
          { label: "Format", value: "Whole Husk or Powder" },
          { label: "Color", value: "Light Off-White" },
          { label: "Swell Volume", value: "50 ml/g Min" }
        ],
        specifications: [
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Total Ash", value: "4% Max" },
          { parameter: "Acid Insoluble Ash", value: "1% Max" },
          { parameter: "Heavy Metals", value: "Within USP/Ph. Eur. Limits" }
        ]
      },
      {
        id: "v-psyllium-seed",
        slug: "psyllium-seed-whole",
        name: "Psyllium Seeds",
        images: ["/images/products/psyllium.jpg"],
        attributes: [
          { label: "Purity", value: "99%" },
          { label: "Format", value: "Whole Seed" },
          { label: "Color", value: "Pinkish Brown" },
          { label: "Use Case", value: "Husk Extraction, Direct Consumption" }
        ],
        specifications: [
          { parameter: "Moisture", value: "10% Max" },
          { parameter: "Extraneous Matter", value: "1% Max" },
          { parameter: "Weevil Damage", value: "Nil" },
          { parameter: "Packaging", value: "25kg Paper Bags" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "9 - 10 MT (Husk) / 19 MT (Seed)",
      capacity40ft: "19 - 21 MT (Husk)",
      transitTime: "15 - 35 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL"]
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
        bestFor: "Pharmaceutical & Nutraceutical Brands"
      },
      {
        id: "pkg-jumbo-psyllium",
        name: "Jumbo Bags",
        description: "1000kg FIBC bags for bulk buyers.",
        moq: "10 MT",
        leadTime: "15-20 Days",
        bestFor: "Large Scale Extractors/Processors"
      }
    ],
    faqs: [
      { question: "Is your Psyllium treated for microbial loads?", answer: "Yes, we offer steam-sterilized (ETO-free) Psyllium husk and powder to meet strict microbiological limits for the US and EU markets." },
      { question: "Can you provide Certified Organic Psyllium?", answer: "Yes, we supply NPOP/NOP/EU certified organic Psyllium." }
    ]
  },
  {
    id: "p76",
    slug: "wheat-flour-chakki-atta",
    name: "Wheat Flour (Chakki Atta)",
    category: "Flours & Starches",
    categorySlug: "flours-starches",
    botanicalName: "Triticum aestivum (Milled)",
    description: "Sheesh Exports supplies premium 100% Whole Wheat Flour, traditionally known as Chakki Atta. Milled from the finest high-protein wheat grains sourced from Madhya Pradesh and Gujarat (including the renowned Sharbati wheat varieties), our Atta delivers superior taste, nutrition, and dough extensibility. Our flour is stone-ground (Chakki milled) using modern, hygienic milling technology that retains the bran and germ, ensuring the flour remains rich in dietary fiber, vitamins, and minerals.\n\nIdeal for baking soft, fluffy chapatis, rotis, parathas, and artisanal flatbreads, our Chakki Atta is a staple for the South Asian diaspora and Middle Eastern bakeries. We strictly avoid any chemical bleaching or artificial additives. Packaged under highly controlled conditions to prevent moisture ingress and pest infestation, our flour guarantees long shelf life and consistent baking performance for wholesale distributors and retail brands alike.",
    originStory: {
      location: "Gujarat & Rajasthan, India",
      story: "India produces over 80% of the world's Psyllium, driven by the unique agro-climatic conditions of Gujarat and Rajasthan. The crop requires dry, cool weather during maturation and zero rainfall during harvest to prevent seed drop and spoilage. We partner with specialized farmer networks in Unjha and surrounding districts, ensuring sustainable harvesting and immediate post-harvest processing to preserve the crucial mucilage content of the seeds.",
      images: ["/images/products/psyllium.jpg", "/images/products/psyllium.jpg", "/images/products/psyllium.jpg"]
    },
    variants: [
      {
        id: "v-chakki-atta-standard",
        slug: "chakki-atta-standard",
        name: "100% Whole Wheat Atta",
        shortDescription: "Premium grade 100% Whole Wheat Atta specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/wheat-flour.jpg"],
        attributes: [
          { label: "Type", value: "Stone Ground" },
          { label: "Color", value: "Creamy Brownish" },
          { label: "Protein", value: "11-12% Min" },
          { label: "Gluten", value: "8% Min" }
        ],
        specifications: [
          { parameter: "Moisture", value: "12% Max" },
          { parameter: "Total Ash", value: "1.5% Max" },
          { parameter: "Acid Insoluble Ash", value: "0.1% Max" },
          { parameter: "Alcoholic Acidity", value: "0.1% Max" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "24 MT",
      capacity40ft: "N/A",
      transitTime: "15 - 30 Days",
      exportPorts: ["Mundra Port", "Nhava Sheva"],
      shippingModes: ["FCL"]
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
        bestFor: "Supermarkets, Ethnic Grocers"
      },
      {
        id: "pkg-bulk-atta",
        name: "Bulk Sacks",
        description: "25kg or 50kg PP woven bags.",
        moq: "24 MT",
        leadTime: "14 Days",
        bestFor: "Bakeries, HORECA, Repackers"
      }
    ],
    faqs: [
      { question: "Is the flour fortified?", answer: "Our standard Chakki Atta is 100% natural without additives. However, we can provide iron and vitamin fortification upon buyer request." },
      { question: "Do you offer private labeling for flour?", answer: "Yes, we specialize in OEM packing for retail flour brands in 5kg and 10kg formats." }
    ]
  },
  {
    id: "p87",
    slug: "desiccated-coconut-powder",
    name: "Desiccated Coconut",
    category: "Other",
    categorySlug: "other",
    botanicalName: "Cocos nucifera",
    description: "Sheesh Exports offers premium High Fat Desiccated Coconut Powder, sourced from the lush, tropical coastlines of Kerala and Tamil Nadu. Processed from freshly selected, mature coconuts, our desiccated coconut retains its natural sweetness, rich aroma, and high nutritional value. It is a highly sought-after ingredient in the bakery, confectionery, and culinary industries worldwide, used extensively in biscuits, cakes, chocolates, and traditional curries.\n\nOur manufacturing process involves meticulous de-husking, paring, washing, and hot air drying to ensure crispness and pristine white color without the use of harsh bleaches. We guarantee a High Fat content (minimum 65%), which is critical for flavor retention and mouthfeel in baking. Available in Fine and Medium grades, our desiccated coconut is packed in moisture-proof multi-ply kraft paper bags to ensure absolute freshness and extended shelf life upon reaching international destinations.",
    originStory: {
      location: "Madhya Pradesh & Gujarat, India",
      story: "The 'Sharbati' wheat of Madhya Pradesh is famously known as the golden grain of India. Grown under rain-fed conditions with potash-rich soil, the grains naturally develop higher protein content and a sweeter taste compared to other varieties. By combining this superior raw material with traditional slow stone-grinding principles (which prevents overheating and nutrient loss) scaled in modern hygienic facilities, we produce an Atta that honors tradition while meeting global food safety standards.",
      images: ["/images/products/wheat-flour.jpg", "/images/products/wheat-flour.jpg", "/images/products/wheat-flour.jpg"]
    },
    variants: [
      {
        id: "v-coconut-fine",
        slug: "coconut-fine",
        name: "Fine Grade",
        shortDescription: "Premium grade Fine Grade specifically processed and sorted for bulk B2B export.",
        images: ["/images/products/coconut.jpg"],
        attributes: [
          { label: "Grade", value: "Fine Shred" },
          { label: "Fat Content", value: "High Fat (65% Min)" },
          { label: "Color", value: "Pure White" },
          { label: "Flavor", value: "Sweet, Nutty, Fresh" }
        ],
        specifications: [
          { parameter: "Moisture", value: "3% Max" },
          { parameter: "Free Fatty Acid (FFA)", value: "0.3% Max" },
          { parameter: "SO2", value: "Max 50 PPM (or as per buyer)" },
          { parameter: "Coliforms", value: "Absent" }
        ]
      },
      {
        id: "v-coconut-medium",
        slug: "coconut-medium",
        name: "Medium Grade",
        images: ["/images/products/coconut.jpg"],
        attributes: [
          { label: "Grade", value: "Medium Shred" },
          { label: "Fat Content", value: "High Fat (65% Min)" },
          { label: "Color", value: "Pure White" },
          { label: "Flavor", value: "Sweet, Nutty, Fresh" }
        ],
        specifications: [
          { parameter: "Moisture", value: "3% Max" },
          { parameter: "Free Fatty Acid (FFA)", value: "0.3% Max" },
          { parameter: "SO2", value: "Max 50 PPM" },
          { parameter: "Coliforms", value: "Absent" }
        ]
      }
    ],
    shipping: {
      capacity20ft: "12 - 13 MT",
      capacity40ft: "25 - 26 MT",
      transitTime: "15 - 35 Days",
      exportPorts: ["Cochin Port", "Tuticorin Port", "Chennai Port"],
      shippingModes: ["FCL"]
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
        bestFor: "Bakeries, Confectionery Manufacturers"
      }
    ],
    faqs: [
      { question: "Is your desiccated coconut High Fat or Low Fat?", answer: "We primarily export High Fat desiccated coconut (min 65% fat) as it is preferred for premium baking and confectionery. Low fat can be provided on request." },
      { question: "How do you ensure the product stays fresh?", answer: "The inner HDPE liner prevents moisture absorption and lipid oxidation, ensuring the product retains its flavor and crispness for up to 12 months." }
    ]
  }
];

export const FILTER_OPTIONS = {
  categories: ["Whole Spices", "Powdered Spices", "Grains & Millets", "Rice", "Pulses & Beans", "Dry Fruits & Nuts", "Tea & Coffee", "Soya Products", "Herbs & Botanicals", "Flours & Starches", "Other"],
  certifications: ["APEDA", "FSSAI", "ISO 22000", "Organic", "Halal", "Kosher", "US FDA", "Spices Board India"],
  exportMarkets: ["USA", "EU", "Middle East", "Asia", "Africa", "Australia", "UK"],
  packagingTypes: ["Bulk Bags (25/50kg)", "Retail Pouches", "Jute Bags", "Custom", "Paper Bags"],
};
