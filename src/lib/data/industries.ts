export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  heroImage: string;
  workflowImage?: string;
  caseStudyImage?: string;
  overview: {
    heading: string;
    content: string[];
  };
  challenges: { title: string; description: string }[];
  products: string[];
  workflow: string[];
  packaging: { title: string; description: string }[];
  certifications: { name: string; description: string }[];
  insights: { title: string; content: string[] };
  caseStudy: { challenge: string; solution: string; outcome: string };
  faqs: { question: string; answer: string }[];
}

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "ind-1",
    slug: "food-manufacturing",
    name: "Food Manufacturing",
    shortDescription: "Industrial ingredient sourcing for processed foods, sauces, snacks and ready-to-eat products.",
    heroDescription: "Reliable sourcing of export-grade spices, grains, oilseeds and agricultural ingredients for industrial food production and processing operations worldwide.",
    heroImage: "/images/industries/food-manufacturing.jpg",
    workflowImage: "/images/about/factory-processing.jpg",
    caseStudyImage: "/images/about/infra-warehouse.jpeg",
    overview: {
      heading: "Understanding Ingredient Procurement For Food Manufacturers",
      content: [
        "In the highly competitive food manufacturing sector, the reliability of ingredient supply chains directly impacts production efficiency and final product quality. Food manufacturers require a constant, stable, and highly standardized supply of agricultural commodities.",
        "Our export operations are designed to meet these exacting industrial standards. We understand that a slight deviation in the ASTA color of Red Chilli or the curcumin content of Turmeric can alter a manufacturer's standardized recipe, leading to significant commercial losses.",
        "Through strict farm-level sourcing, automated mechanical cleaning, and rigorous pre-shipment laboratory testing, we ensure that every batch of spices, grains, and oilseeds meets precise industrial specifications, ensuring seamless integration into your production lines."
      ]
    },
    challenges: [
      {
        title: "Consistency",
        description: "Maintaining standardized specifications (flavor, color, moisture) across different seasonal batches."
      },
      {
        title: "Traceability",
        description: "Ensuring full visibility into sourcing, processing, and handling for food safety audits."
      },
      {
        title: "Compliance",
        description: "Meeting stringent maximum residue limits (MRLs) for pesticides and heavy metals in destination markets."
      },
      {
        title: "Logistics",
        description: "Reliable shipment scheduling and container planning to prevent production downtimes."
      }
    ],
    products: ["red-chilli-stemless-premium", "turmeric-fingers-premium", "cumin-seeds-premium", "coriander-seeds-premium", "black-pepper-premium"],
    workflow: [
      "Requirement Analysis",
      "Product Matching & Specification",
      "Lab Sampling",
      "Commercial Proposal",
      "Processing & Production",
      "Quality Inspection",
      "Global Shipment"
    ],
    packaging: [
      { title: "Bulk PP Bags", description: "Standard 25kg/50kg Polypropylene bags for industrial usage." },
      { title: "Jute Bags", description: "Traditional breathable packaging for specific commodities." },
      { title: "Custom Industrial Packaging", description: "Buyer-specified bulk formats adapted for specific production lines." }
    ],
    certifications: [
      { name: "ISO 22000", description: "Guarantees food safety management across our processing facilities." },
      { name: "US FDA", description: "Ensures compliance for all ingredients exported to the United States." },
      { name: "FSSAI", description: "Indian food safety standards for origin-level compliance." }
    ],
    insights: {
      title: "Trends In Global Food Manufacturing Ingredient Sourcing",
      content: [
        "The global food manufacturing industry is increasingly moving towards direct-origin sourcing to improve margins and enhance traceability. Manufacturers are bypassing traditional intermediaries to establish direct relationships with exporters in agricultural hubs like India.",
        "There is also a growing demand for 'clean label' ingredients. This requires exporters to implement stricter mechanical cleaning and natural sterilization processes (such as steam sterilization) to meet the microbiological standards required for ready-to-eat products without relying on chemical treatments.",
        "Furthermore, supply chain resilience has become a paramount concern. Manufacturers are diversifying their sourcing strategies and holding slightly higher inventory buffers, requiring exporters to offer flexible warehousing and scheduled shipment solutions."
      ]
    },
    caseStudy: {
      challenge: "A European sauce manufacturer struggled with inconsistent heat levels (SHU) in their bulk Red Chilli procurement, causing production delays.",
      solution: "We established a dedicated sourcing program, selecting specific chilli varieties (Teja) and blending them at our facility to achieve a consistent, standardized SHU level batch after batch.",
      outcome: "The manufacturer reduced product rejection rates by 98% and achieved complete flavor consistency across their entire European product line."
    },
    faqs: [
      {
        question: "Can ingredients be customized to our exact specifications?",
        answer: "Yes, we can customize parameters such as ASTA color, SHU heat levels, moisture content, and particle size (for powders) to match your manufacturing requirements."
      },
      {
        question: "What quality documentation is available?",
        answer: "Every shipment is accompanied by a Certificate of Analysis (CoA) from accredited third-party laboratories, detailing physical, chemical, and microbiological parameters."
      },
      {
        question: "What is the typical MOQ for industrial supply?",
        answer: "Our standard Minimum Order Quantity is a 20FT FCL (Full Container Load), but we offer Mixed Container solutions for buyers needing multiple ingredients."
      },
      {
        question: "Can third-party inspections be arranged?",
        answer: "Absolutely. We welcome and frequently coordinate pre-shipment inspections by SGS, Geo-Chem, or any buyer-nominated inspection agency."
      }
    ]
  },
  {
    id: "ind-2",
    slug: "retail-private-label",
    name: "Retail & Private Label",
    shortDescription: "Custom packaging and private label solutions for retail food brands and supermarkets.",
    heroDescription: "End-to-end OEM manufacturing and private label packaging services for retail food brands, supermarket chains, and FMCG companies worldwide.",
    heroImage: "/images/industries/retail-private-label.jpg",
    workflowImage: "/images/about/infra-packaging.jpeg",
    caseStudyImage: "/images/about/factory-processing.jpg",
    overview: {
      heading: "Building Retail-Ready Spice & Grocery Brands",
      content: [
        "The private label food market is expanding rapidly as retailers seek to offer high-quality alternatives to established brands while improving their profit margins. Sourcing retail-ready agricultural commodities directly from the origin country is a complex but highly rewarding strategy.",
        "Sheesh Exports bridges the gap between Indian agriculture and global retail shelves. We provide comprehensive private label solutions, handling everything from sourcing and processing to custom pouch filling, labeling, and retail-ready carton packing.",
        "By partnering with us, retail brands can eliminate multiple intermediaries, ensuring fresher products, stronger traceability, and significantly reduced cost of goods sold (COGS)."
      ]
    },
    challenges: [
      {
        title: "Packaging Quality",
        description: "Ensuring packaging materials maintain freshness and visual appeal on the shelf."
      },
      {
        title: "Label Compliance",
        description: "Meeting complex local regulations regarding nutritional facts, ingredients, and origin declarations."
      },
      {
        title: "Inventory Management",
        description: "Balancing MOQ requirements with warehouse storage constraints."
      },
      {
        title: "Brand Consistency",
        description: "Maintaining a uniform visual identity and product quality across different SKUs."
      }
    ],
    products: ["basmati-rice-premium", "green-peas-premium", "coriander-powder-premium", "almonds-premium", "tea-premium"],
    workflow: [
      "Brand Consultation",
      "Packaging Design Review",
      "Sample Approval",
      "Material Procurement",
      "Processing & Packing",
      "Quality Assurance",
      "Retail-Ready Shipping"
    ],
    packaging: [
      { title: "Retail Pouches", description: "Stand-up pouches, zip-lock bags, and flat pouches (100g to 5kg)." },
      { title: "PET Jars & Bottles", description: "Transparent, food-grade jars for premium spice presentation." },
      { title: "Custom Cartons", description: "Shelf-ready display cartons (SRPs) and master shipper boxes." }
    ],
    certifications: [
      { name: "ISO 22000", description: "Ensures food safety standards suitable for direct-to-consumer products." },
      { name: "HALAL", description: "Essential for retail brands targeting Middle Eastern or Halal-conscious markets." },
      { name: "US FDA", description: "Required for retail products entering the US market." }
    ],
    insights: {
      title: "The Shift Towards Premium Private Label Offerings",
      content: [
        "Private label products are no longer just the 'budget' option. Retailers are increasingly developing premium, origin-specific private label tiers (e.g., 'Single Origin Indian Tellicherry Pepper') to compete directly with leading national brands.",
        "This shift requires exporters to offer more sophisticated processing and packaging capabilities. Consumers demand transparent packaging, sustainable materials, and clear traceability information on the label.",
        "Agility in packaging is also crucial. Exporters must be able to quickly adapt to changing label regulations in destination markets or accommodate seasonal promotional packaging without causing supply chain disruptions."
      ]
    },
    caseStudy: {
      challenge: "A Middle Eastern supermarket chain wanted to launch a new line of premium Indian spices but lacked packaging infrastructure and origin-sourcing expertise.",
      solution: "We managed the entire project: sourcing top-grade spices, printing custom Arabic/English pouches based on their artwork, and delivering shelf-ready mixed containers.",
      outcome: "The client launched 15 new SKUs in 3 months, achieving a 40% higher profit margin compared to sourcing domestically from local distributors."
    },
    faqs: [
      {
        question: "Do you design the packaging?",
        answer: "We require the buyer to provide the final artwork/design files. However, we source the packaging materials and execute the printing and packing processes."
      },
      {
        question: "Can we mix different retail SKUs in one container?",
        answer: "Yes, our Mixed Container service is perfect for retail brands looking to receive a variety of SKUs in a single consolidated shipment."
      },
      {
        question: "What are the MOQs for private labeling?",
        answer: "Private label MOQs depend on the packaging manufacturer's requirements (usually a minimum run for pouches or jars). We will provide specific MOQs during the consultation."
      },
      {
        question: "How do you handle barcoding?",
        answer: "We apply buyer-provided GS1 barcodes or internal SKUs to individual products and master cartons according to your specific retail requirements."
      }
    ]
  },
  {
    id: "ind-3",
    slug: "importers-distributors",
    name: "Importers & Distributors",
    shortDescription: "Bulk commodity sourcing with flexible shipment and consolidation options.",
    heroDescription: "Reliable bulk supply and mixed container solutions for global agricultural commodity importers, wholesale distributors, and trading houses.",
    heroImage: "/images/industries/importers-distributors.jpg",
    workflowImage: "/images/about/global-delivery.jpeg",
    caseStudyImage: "/images/about/infra-sourcing.png",
    overview: {
      heading: "Streamlining Procurement For Wholesale Distributors",
      content: [
        "Agricultural commodity importers and wholesale distributors operate in a high-volume, margin-sensitive environment. Success depends on securing competitive origin pricing, reliable shipment schedules, and consistent product quality that satisfies downstream buyers.",
        "Sheesh Exports acts as a strategic origin partner for distributors worldwide. We provide deep market intelligence, transparent pricing, and the operational capacity to fulfill large-volume contracts efficiently.",
        "Whether you require full container loads (FCL) of a single commodity like Basmati Rice or complex mixed containers containing 10 different spices, we manage the entire export process—from farm sourcing to port clearance."
      ]
    },
    challenges: [
      {
        title: "Market Volatility",
        description: "Navigating price fluctuations in origin markets to secure competitive procurement."
      },
      {
        title: "Freight Optimization",
        description: "Maximizing container payloads to reduce per-ton shipping costs."
      },
      {
        title: "Supplier Reliability",
        description: "Finding exporters capable of consistently fulfilling long-term volume contracts."
      },
      {
        title: "Customs Clearance",
        description: "Ensuring all origin documentation is flawless to prevent port delays."
      }
    ],
    products: ["maize-premium", "wheat-flour-premium", "basmati-rice-premium", "red-chilli-stemless-premium", "peanuts-premium"],
    workflow: [
      "Market Pricing Update",
      "Volume Contracting",
      "Proforma Agreement",
      "Bulk Processing",
      "Container Stuffing",
      "Documentation & Customs",
      "FOB/CIF Handover"
    ],
    packaging: [
      { title: "Bulk PP Bags", description: "25kg, 50kg, or 100lbs Polypropylene bags for efficient stacking." },
      { title: "Jumbo Bags (FIBC)", description: "1-ton bulk bags for mechanized warehouse handling." },
      { title: "Custom Master Cartons", description: "For premium spices requiring extra protection during transit." }
    ],
    certifications: [
      { name: "APEDA", description: "Mandatory Indian export registration ensuring legitimacy." },
      { name: "Phytosanitary", description: "Plant quarantine clearance provided with every agricultural shipment." },
      { name: "Certificate of Origin", description: "Chamber of Commerce verified documentation for customs duties." }
    ],
    insights: {
      title: "Consolidation And Agility In Global Commodity Trading",
      content: [
        "The traditional model of importing single-commodity containers is shifting. Distributors serving diverse client bases (like ethnic grocers or regional manufacturers) are increasingly demanding Mixed Container shipments. This allows them to maintain broader inventories without tying up capital in excessive stock of a single item.",
        "Furthermore, distributors are seeking closer partnerships with origin exporters rather than relying on intermediaries. This direct relationship provides better market intelligence (e.g., crop yield forecasts, price trends) and allows for more agile procurement decisions.",
        "Digitization of trade documentation is also accelerating, reducing the risk of demurrage caused by delayed or lost paperwork, making the entire import process smoother."
      ]
    },
    caseStudy: {
      challenge: "A North American distributor faced high freight costs and inventory holding costs by importing separate containers of Chilli, Cumin, and Turmeric.",
      solution: "We implemented a customized Mixed Container program, consolidating 5 different spices into a single 40FT HC container on a monthly schedule.",
      outcome: "The distributor reduced their overall freight costs by 18% and improved their cash flow by optimizing inventory turnover."
    },
    faqs: [
      {
        question: "Do you offer CIF/CFR pricing?",
        answer: "Yes, we work with leading shipping lines to offer competitive CIF and CFR rates to all major global ports."
      },
      {
        question: "Can we lock in prices for future shipments?",
        answer: "Depending on the commodity and market conditions, we can negotiate forward contracts to help you hedge against price volatility."
      },
      {
        question: "How do you handle mixed container loading?",
        answer: "Our logistics team expertly plans the container stuffing to maximize payload, ensuring heavier bags are at the bottom and aromatic spices are properly segregated."
      },
      {
        question: "What is your typical lead time?",
        answer: "Standard orders are usually processed, stuffed, and moved to the port within 10 to 15 days from order confirmation."
      }
    ]
  },
  {
    id: "ind-4",
    slug: "horeca-hospitality",
    name: "Hospitality & HORECA",
    shortDescription: "Foodservice-grade ingredients for restaurants, hotel chains and catering businesses.",
    heroDescription: "Consistent, high-quality bulk spices, rice, and ingredients tailored for the demanding fast-paced foodservice and hospitality sectors.",
    heroImage: "/images/industries/horeca-hospitality.jpg",
    workflowImage: "/images/about/infra-testing.jpeg",
    caseStudyImage: "/images/about/global-delivery.jpeg",
    overview: {
      heading: "Elevating Culinary Standards In Global Hospitality",
      content: [
        "The HORECA (Hotel, Restaurant, and Café) sector demands a delicate balance: ingredients must offer premium culinary quality while remaining cost-effective for high-volume usage. Consistency is critical, as executive chefs rely on uniform flavor profiles to maintain standardized menus across multiple locations.",
        "Sheesh Exports supplies foodservice-grade agricultural products directly to large hospitality groups, catering companies, and restaurant supply distributors. We understand the specific needs of commercial kitchens.",
        "From authentic Basmati Rice for large-scale catering to vibrant whole spices for fine dining, we provide the foundational ingredients that drive culinary excellence worldwide."
      ]
    },
    challenges: [
      {
        title: "Flavor Consistency",
        description: "Ensuring spices deliver the same heat and aroma in every batch to maintain menu standards."
      },
      {
        title: "Kitchen-Friendly Packaging",
        description: "Sourcing ingredients in formats that are easy to handle and store in commercial kitchens."
      },
      {
        title: "Cost Control",
        description: "Managing food costs without compromising on the quality expected by diners."
      },
      {
        title: "Supply Reliability",
        description: "Preventing stockouts of critical ingredients during peak hospitality seasons."
      }
    ],
    products: ["basmati-rice-premium", "black-pepper-premium", "cumin-seeds-premium", "coriander-powder-premium", "turmeric-premium"],
    workflow: [
      "Menu Requirement Analysis",
      "Sample Dispatch to Chefs",
      "Approval & Specification",
      "Bulk Processing",
      "Foodservice Packaging",
      "Quality Certification",
      "Export & Delivery"
    ],
    packaging: [
      { title: "Foodservice Tubs", description: "1kg to 5kg stackable plastic tubs for easy kitchen access." },
      { title: "Bulk Cartons", description: "10kg to 25kg master cartons for centralized commissary kitchens." },
      { title: "Vacuum Sealed Bags", description: "To preserve aroma and freshness of premium spices over time." }
    ],
    certifications: [
      { name: "ISO 22000", description: "Food safety management crucial for hospitality supply chains." },
      { name: "HALAL", description: "Required for catering in diverse and Middle Eastern markets." },
      { name: "FSSAI", description: "Indian regulatory compliance for safe export." }
    ],
    insights: {
      title: "Global Flavors And The Evolution Of Foodservice Sourcing",
      content: [
        "As global palates become more adventurous, the demand for authentic, regional ingredients in mainstream hospitality is soaring. Chefs are moving away from pre-mixed, generic curry powders towards sourcing whole, origin-specific spices to toast and grind in-house for superior flavor.",
        "Sustainability and ethical sourcing are also becoming significant selling points for premium restaurant chains. Diners care about where their food comes from, prompting hospitality groups to seek direct relationships with exporters who can verify farm-level practices.",
        "Operationally, large catering groups are increasingly utilizing central kitchens (commissaries). This shifts their procurement needs towards larger bulk formats (e.g., 25kg bags of spices or rice) rather than small retail packs, emphasizing the need for robust industrial packaging."
      ]
    },
    caseStudy: {
      challenge: "A UAE-based hotel chain struggled with inconsistent quality and high prices when buying Basmati rice and spices from local secondary distributors.",
      solution: "We established a direct-import program for them, providing consistent XXL grain Basmati rice and whole spices in custom 10kg foodservice packaging.",
      outcome: "The hotel chain reduced ingredient costs by 22%, improved the consistency of their banquet biryanis, and secured a reliable year-round supply."
    },
    faqs: [
      {
        question: "Can you pack in 1kg or 5kg tubs for restaurant use?",
        answer: "Yes, we offer specialized foodservice packaging including food-grade plastic tubs and small bulk bags tailored for commercial kitchens."
      },
      {
        question: "Do you supply pre-blended seasonings?",
        answer: "While our primary focus is on single agricultural commodities, we can partner with spice blenders to provide specific formulations for large contracts."
      },
      {
        question: "Can we request samples for our Executive Chef to test?",
        answer: "Absolutely. We encourage culinary teams to test our products in their kitchens before committing to commercial volumes."
      },
      {
        question: "What is the MOQ for HORECA supply?",
        answer: "Since restaurants usually don't buy full containers of a single spice, we highly recommend our Mixed Container service, allowing you to import rice, spices, and pulses together."
      }
    ]
  },
  {
    id: "ind-5",
    slug: "nutraceuticals-supplements",
    name: "Nutraceuticals & Supplements",
    shortDescription: "High-curcumin turmeric, ashwagandha, and botanical extracts for health brands.",
    heroDescription: "Scientifically tested, high-potency agricultural ingredients for the global nutraceutical and dietary supplement manufacturing industry.",
    heroImage: "/images/industries/nutraceuticals-supplements.jpg",
    workflowImage: "/images/about/infra-warehouse.jpeg",
    caseStudyImage: "/images/about/infra-testing.jpeg",
    overview: {
      heading: "Sourcing High-Potency Botanicals For Dietary Supplements",
      content: [
        "The nutraceutical industry operates at the intersection of agriculture and pharmaceuticals. Ingredients must not only be safe and pure but must also deliver guaranteed levels of active compounds, such as curcumin in turmeric or piperine in black pepper.",
        "Sheesh Exports provides origin-verified, high-potency botanicals tailored for supplement extraction. We work directly with specialized farming clusters to source crops with the highest natural active ingredient profiles.",
        "Our stringent testing protocols ensure that all ingredients meet rigorous international limits for heavy metals, microbiology, and pesticide residues, safeguarding your brand's reputation and consumer health."
      ]
    },
    challenges: [
      { title: "Active Compound Levels", description: "Securing crops with consistently high natural levels of targeted active ingredients." },
      { title: "Heavy Metal Limits", description: "Meeting extreme regulatory limits for lead, arsenic, cadmium, and mercury." },
      { title: "Pesticide Residues", description: "Sourcing IP (Identity Preserved) or organic crops free from prohibited agricultural chemicals." },
      { title: "Microbiological Safety", description: "Ensuring low plate counts suitable for raw supplement encapsulation." }
    ],
    products: ["turmeric-fingers-premium", "black-pepper-premium", "coriander-seeds-premium"],
    workflow: [
      "Specification Alignment",
      "Farm-Level Sourcing",
      "Active Compound Testing",
      "Sterilization (If required)",
      "Milling to Specific Mesh",
      "Heavy Metal/Micro Audit",
      "Export Documentation"
    ],
    packaging: [
      { title: "Vacuum Sealed Foil Bags", description: "To prevent oxidation and degradation of active compounds." },
      { title: "HDPE Drums", description: "For high-value botanical extracts and powders." },
      { title: "Multi-wall Kraft Bags", description: "25kg bags with moisture-barrier liners for bulk herbs." }
    ],
    certifications: [
      { name: "ISO 22000", description: "Baseline food safety standard for raw ingredient processing." },
      { name: "US FDA", description: "Mandatory compliance for the lucrative North American supplement market." },
      { name: "Organic (On Request)", description: "NPOP/NOP certified sourcing for organic supplement lines." }
    ],
    insights: {
      title: "The Rise of 'Food As Medicine' and Traceable Sourcing",
      content: [
        "Consumer demand for natural immunity boosters and dietary supplements (like Turmeric/Curcumin capsules) is driving unprecedented growth in the botanical extract sector.",
        "However, the industry faces intense scrutiny over adulteration and false labeling. Sourcing transparently from reputable origin exporters is now a strategic necessity, not just a procurement function.",
        "Brands that can prove the origin and purity of their ingredients are commanding premium retail prices, making direct farm-to-extraction sourcing highly profitable."
      ]
    },
    caseStudy: {
      challenge: "A US-based supplement brand struggled to find Turmeric Fingers that consistently met the minimum 5% Curcumin requirement for their extraction process.",
      solution: "We implemented a targeted sourcing program in the Erode and Nizamabad regions, testing multiple farm lots before procurement to guarantee a baseline of 5.5% Curcumin.",
      outcome: "The brand increased their extraction yield by 15%, significantly reducing the raw material cost per kilogram of final extract."
    },
    faqs: [
      { question: "Do you supply finished extracts or raw materials?", answer: "We supply the premium raw agricultural commodities (whole or powdered) which are used by extraction facilities to produce finished extracts." },
      { question: "Can you guarantee specific active ingredient levels?", answer: "Yes, we can provide batch-specific CoAs confirming Curcumin, Piperine, or other relevant compound levels prior to shipment." },
      { question: "How do you handle microbial sterilization?", answer: "We offer steam sterilization services for powders to ensure they meet strict microbiological standards without chemical treatment." },
      { question: "What is the MOQ?", answer: "Given the specialized nature of these ingredients, we offer flexible MOQs, often starting from 1 to 5 Metric Tons depending on the commodity." }
    ]
  },
  {
    id: "ind-6",
    slug: "spice-blenders-seasoning",
    name: "Spice Blenders & Seasoning",
    shortDescription: "Bulk pure spices for B2B seasoning manufacturers and flavor houses.",
    heroDescription: "Providing consistent, high-aroma whole and ground spices to global spice blending, seasoning, and flavor manufacturing companies.",
    heroImage: "/images/industries/spice-blenders-seasoning.jpg",
    workflowImage: "/images/about/factory-processing.jpg",
    caseStudyImage: "/images/about/infra-sourcing.png",
    overview: {
      heading: "The Foundation of Global Flavor Profiles",
      content: [
        "Spice blenders and seasoning manufacturers rely on a consistent supply of pure, unadulterated raw spices to create their proprietary flavor profiles for snack foods, meats, and retail blends.",
        "Sheesh Exports supplies premium whole spices and custom-milled powders specifically tailored for the blending industry. We understand that volatile oil content (VOC) and precise particle size (mesh size) are critical to your blending formulas.",
        "By sourcing directly from major Indian auction yards and farming communities, we offer blenders the raw materials needed to achieve complex, stable, and cost-effective seasoning solutions."
      ]
    },
    challenges: [
      { title: "Volatile Oil Content", description: "Preserving the essential oils that give spices their aroma and flavor." },
      { title: "Mesh Size Consistency", description: "Ensuring ground spices blend evenly without separating in the final seasoning." },
      { title: "Adulteration Risks", description: "Guaranteeing 100% pure spices free from synthetic colors or bulking agents." },
      { title: "Color Stability", description: "Maintaining visual consistency in blends (e.g., ASTA color in paprika/chilli)." }
    ],
    products: ["red-chilli-stemless-premium", "turmeric-fingers-premium", "cumin-seeds-premium", "coriander-seeds-premium", "black-pepper-premium"],
    workflow: [
      "Aroma & Color Profiling",
      "Origin Sourcing",
      "Cryogenic Milling (Optional)",
      "Mesh Size Verification",
      "Blending & Homogenization",
      "Pre-shipment Sample",
      "Bulk Export"
    ],
    packaging: [
      { title: "Bulk PP Bags with Liner", description: "Standard 25kg bags protecting against moisture loss." },
      { title: "Foil-Lined Cartons", description: "Premium packaging to retain maximum volatile oils during transit." },
      { title: "Jumbo Bags", description: "1-ton bags for large-scale automated blending facilities." }
    ],
    certifications: [
      { name: "ISO 22000", description: "Crucial for integration into secondary food processing." },
      { name: "Spices Board of India", description: "Ensures adherence to mandatory Indian spice export quality parameters." },
      { name: "Kosher & Halal", description: "Often required by blenders serving diverse consumer bases." }
    ],
    insights: {
      title: "Innovation in the Seasoning Sector",
      content: [
        "The snack food and processed meat industries are constantly seeking novel flavor profiles, driving seasoning manufacturers to source a wider variety of regional Indian spices.",
        "There is a strong push towards clean-label seasonings, requiring raw spices that have undergone natural sterilization (like steam) rather than ETO (Ethylene Oxide) treatment, which is increasingly banned in the EU.",
        "Blenders are also requesting specific particle sizes to prevent stratification in their dry mixes, requiring exporters to invest in advanced milling and sifting technologies."
      ]
    },
    caseStudy: {
      challenge: "A European seasoning company was experiencing flavor loss in their cumin-based meat rubs due to poor grinding practices by their previous supplier.",
      solution: "We supplied whole Cumin Seeds with a guaranteed high volatile oil content and utilized low-temperature grinding to preserve the essential oils.",
      outcome: "The seasoning company reported a 30% increase in flavor retention and extended the shelf life of their meat rubs."
    },
    faqs: [
      { question: "Can you mill spices to a specific mesh size?", answer: "Yes, our milling facilities can produce powders ranging from coarse grinds to fine powders (e.g., 30 to 80 mesh) based on your requirements." },
      { question: "Do you offer ETO-free sterilization?", answer: "Yes, we offer steam sterilization as a clean-label alternative to ETO treatment, fully compliant with EU regulations." },
      { question: "How do you prevent flavor loss during shipping?", answer: "We use moisture-barrier liners and recommend temperature-controlled containers for highly volatile spices shipped during summer months." },
      { question: "Can you supply bespoke blends?", answer: "While we specialize in single ingredients, we can formulate and supply custom bulk blends for clients meeting specific MOQ thresholds." }
    ]
  },
  {
    id: "ind-7",
    slug: "oleoresin-extractors",
    name: "Oleoresin Extractors",
    shortDescription: "High-yield raw spices for essential oil and oleoresin extraction.",
    heroDescription: "Specialized sourcing of raw spices optimized for maximum yield in oleoresin and essential oil extraction facilities globally.",
    heroImage: "/images/industries/oleoresin-extractors.jpg",
    workflowImage: "/images/about/infra-sourcing.png",
    caseStudyImage: "/images/about/infra-packaging.jpeg",
    overview: {
      heading: "Maximizing Extraction Yields with Precision Sourcing",
      content: [
        "The oleoresin and essential oil extraction industry requires raw materials that offer the absolute highest concentration of target compounds (color value, piperine, capsaicin, etc.). For extractors, the quality of the raw spice directly dictates the profitability of the extraction run.",
        "Sheesh Exports acts as a specialized procurement arm for global extraction companies. We bypass standard commercial grades to source crops specifically grown for extraction purposes.",
        "Whether you need high-color Teja Chilli for paprika oleoresin or specific grades of Black Pepper for piperine extraction, we provide the raw material foundation for your specialized manufacturing."
      ]
    },
    challenges: [
      { title: "Yield Optimization", description: "Sourcing spices with the highest possible concentration of desired extractable compounds." },
      { title: "Moisture Control", description: "Strict moisture limits to ensure efficient solvent extraction without interference." },
      { title: "Aflatoxin Strictness", description: "Meeting extreme limits for mycotoxins which can become concentrated during extraction." },
      { title: "Cost per Unit of Active", description: "Balancing the raw material cost against the guaranteed yield of the active compound." }
    ],
    products: ["red-chilli-stemless-premium", "turmeric-fingers-premium", "black-pepper-premium"],
    workflow: [
      "Compound Targeting",
      "Farm-Level Lot Selection",
      "Pre-shipment Extraction Test",
      "Drying Optimization",
      "Bulk Packing",
      "Laboratory Certification",
      "Direct Factory Delivery"
    ],
    packaging: [
      { title: "Bulk Jute Bags", description: "Allows for breathability and prevents condensation during transit." },
      { title: "Bulk PP Bags", description: "Standard 50kg bags for efficient unloading at extraction facilities." },
      { title: "Jumbo Bags", description: "For seamless integration into automated solvent extraction hoppers." }
    ],
    certifications: [
      { name: "ISO 9001 / 22000", description: "Ensures standardized handling of raw materials prior to extraction." },
      { name: "Spices Board of India", description: "Mandatory quality checks for exported spices." },
      { name: "Specific CoA", description: "Batch-specific analysis confirming volatile oil, color, or capsaicin levels." }
    ],
    insights: {
      title: "The Growing Demand for Natural Colors and Flavors",
      content: [
        "The global shift away from synthetic food dyes is driving massive demand for natural alternatives like Paprika Oleoresin (for red color) and Turmeric Oleoresin (for yellow color).",
        "This is placing pressure on extractors to secure reliable supplies of high-color-value raw chilli and turmeric. Exporters must maintain close relationships with farmers to secure these premium lots before they enter the general commercial market.",
        "Extractors are also looking for long-term contract farming agreements to ensure a stable supply of specific cultivars bred for high extraction yields."
      ]
    },
    caseStudy: {
      challenge: "A European natural food color manufacturer needed a stable supply of Red Chilli with an ASTA color value exceeding 100 for their extraction lines.",
      solution: "We established a direct procurement channel for the 'Byadgi' chilli variety, known for its exceptional color, and implemented careful sun-drying techniques to preserve the pigments.",
      outcome: "The manufacturer achieved a 12% higher oleoresin yield per metric ton of raw chilli, significantly improving their production economics."
    },
    faqs: [
      { question: "Can you guarantee specific ASTA color values?", answer: "Yes, we can source specific chilli varieties (like Byadgi) and provide CoAs guaranteeing minimum ASTA color values." },
      { question: "Do you supply spices with stems or stemless for extraction?", answer: "We offer both. However, stemless chilli is generally preferred for extraction to maximize the yield per kilogram of raw material." },
      { question: "Can you supply crushed spices for extraction?", answer: "Yes, we can supply crushed or coarsely ground spices to facilitate faster solvent penetration during your extraction process." },
      { question: "What volume can you supply?", answer: "We have the capacity to supply hundreds of metric tons annually for large-scale extraction facilities." }
    ]
  }
];
