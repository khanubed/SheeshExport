export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Company",
    href: "/about",
    children: [
      { title: "About Us", href: "/about", description: "Our legacy, processing plants, and international presence." },
      { title: "Quality & Testing", href: "/quality", description: "Laboratory infrastructure, grading, and parameters." },
      { title: "Certifications", href: "/certifications", description: "APEDA, Spices Board, ISO 22000, Halal, Kosher, FDA." },
      { title: "Export Process", href: "/export-process", description: "From farm procurement to port dispatch workflow." },
    ],
  },
  {
    title: "Products",
    href: "/products",
    children: [
      { title: "Whole & Ground Spices", href: "/categories/spices", description: "Red Chilli, Turmeric, Cumin, Coriander, Black Pepper." },
      { title: "Oil Seeds", href: "/categories/oil-seeds", description: "Natural & Hulled Sesame, Mustard, Groundnut." },
      { title: "Grains & Pulses", href: "/categories/pulses", description: "Chickpeas, Lentils, Basmati & Non-Basmati Rice." },
      { title: "View All Products", href: "/products", description: "Complete B2B product catalog and grade specifications." },
    ],
  },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Private Label Packaging", href: "/services/private-label", description: "Custom retail & wholesale packaging with brand labeling." },
      { title: "Bulk Exports", href: "/services/bulk-export", description: "Full container loads (FCL) in 25/50 kg export-grade bags." },
      { title: "Mixed Container Logistics", href: "/services/mixed-container", description: "Multi-commodity consolidation in single containers." },
    ],
  },
  {
    title: "Export Markets",
    href: "/export-markets",
    children: [
      { title: "Middle East & GCC", href: "/export-markets/uae", description: "UAE, Saudi Arabia, Oman, Qatar, Kuwait." },
      { title: "European Union", href: "/export-markets/germany", description: "Germany, Netherlands, UK, Spain." },
      { title: "Americas", href: "/export-markets/usa", description: "United States, Canada, Latin America." },
      { title: "All Global Destinations", href: "/export-markets", description: "Overview of port corridors & compliance." },
    ],
  },
  {
    title: "Insights",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const FOOTER_NAV = {
  products: [
    { title: "Red Chilli", href: "/products/red-chilli" },
    { title: "Turmeric Finger & Powder", href: "/products/turmeric" },
    { title: "Cumin Seeds", href: "/products/cumin" },
    { title: "Coriander Seeds", href: "/products/coriander" },
    { title: "Sesame Seeds", href: "/products/sesame-seeds" },
    { title: "All Products", href: "/products" },
  ],
  company: [
    { title: "About Sheesh Exports", href: "/about" },
    { title: "Quality & Assurance", href: "/quality" },
    { title: "Certifications", href: "/certifications" },
    { title: "Export Workflow", href: "/export-process" },
    { title: "Request a Quote", href: "/request-quote" },
    { title: "Contact Us", href: "/contact" },
  ],
  services: [
    { title: "Private Label Packaging", href: "/services/private-label" },
    { title: "Bulk Container Shipping", href: "/services/bulk-export" },
    { title: "Mixed Cargo Consolidation", href: "/services/mixed-container" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Trade", href: "/terms" },
  ],
};
