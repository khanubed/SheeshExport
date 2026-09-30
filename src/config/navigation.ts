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
      { title: "Investor Relations", href: "/investor", description: "Corporate governance, financial disclosures, and shareholder info." },
    ],
  },
  {
    title: "Categories",
    href: "/categories",
    children: [
      { title: "Whole Spices", href: "/categories/whole-spices", description: "Premium Indian whole spices including chilli, cumin, and turmeric." },
      { title: "Oil Seeds", href: "/categories/oil-seeds", description: "Sortex-cleaned sesame, peanut, and mustard seeds." },
      { title: "Pulses", href: "/categories/pulses", description: "Export-grade chickpeas, lentils, and beans." },
      { title: "Grains", href: "/categories/grains", description: "Basmati rice, wheat, and millets." },
      { title: "Dry Fruits", href: "/categories/dry-fruits", description: "High-grade cashews, raisins, and premium nuts." },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      { title: "Food Manufacturing", href: "/industries/food-manufacturing", description: "Industrial ingredient sourcing for processed foods." },
      { title: "Retail & Private Label", href: "/industries/retail-private-label", description: "Custom packaging and private label solutions." },
      { title: "Importers & Distributors", href: "/industries/importers-distributors", description: "Bulk commodity sourcing with flexible shipment." },
      { title: "Hospitality & HORECA", href: "/industries/horeca-hospitality", description: "Foodservice-grade ingredients for restaurants." },
    ],
  },
  {
    title: "Products",
    href: "/products",
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
    title: "International Trade",
    href: "/international",
    children: [
      { title: "Middle East & GCC", href: "/international/uae", description: "UAE, Saudi Arabia, Oman, Qatar, Kuwait." },
      { title: "European Union", href: "/international/germany", description: "Germany, Netherlands, UK, Spain." },
      { title: "Americas", href: "/international/usa", description: "United States, Canada, Latin America." },
      { title: "All Global Destinations", href: "/international", description: "Overview of port corridors & compliance." },
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
    { title: "Whole Red Chilli", href: "/products/whole-spices/whole-red-chilli-guntur" },
    { title: "1121 Basmati Rice", href: "/products/rice/1121" },
    { title: "Yellow Maize", href: "/products/grains-millets/maizewhite-yellow" },
    { title: "Peanuts", href: "/products/dry-fruits-nuts/peanut-whole" },
    { title: "Green Peas", href: "/products/pulses-beans/green-peas" },
    { title: "All Products", href: "/products" },
  ],
  company: [
    { title: "About Sheesh Exports", href: "/about" },
    { title: "Quality & Assurance", href: "/quality" },
    { title: "Certifications", href: "/certifications" },
    { title: "Export Workflow", href: "/export-process" },
    { title: "Investor Relations", href: "/investor" },
    { title: "Request a Quote", href: "/request-quote" },
    { title: "Contact Us", href: "/contact" },
  ],
  services: [
    { title: "Private Label Packaging", href: "/services/private-label" },
    { title: "Bulk Container Shipping", href: "/services/bulk-export" },
    { title: "Mixed Cargo Consolidation", href: "/services/mixed-container" },
  ],
  industries: [
    { title: "Food Manufacturing", href: "/industries/food-manufacturing" },
    { title: "Retail & Private Label", href: "/industries/retail-private-label" },
    { title: "Importers & Distributors", href: "/industries/importers-distributors" },
    { title: "Hospitality & HORECA", href: "/industries/horeca-hospitality" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Trade", href: "/terms" },
  ],
};
