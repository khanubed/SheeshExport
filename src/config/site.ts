export const SITE_CONFIG = {
  name: "Sheesh Exports",
  legalName: "Sheesh Exports Private Limited",
  description:
    "Premier Indian exporter and bulk supplier of agricultural commodities, whole and ground spices, oil seeds, and pulses to international markets worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sheeshexports.in",
  ogImage: "https://sheeshexports.in/images/branding/og-default.jpg",
  contact: {
    email: "info@sheeshexports.in",
    salesEmail: "info@sheeshexports.in",
    phone: "+91 9826270888",
    whatsapp: "+91 90399 20069",
    address: {
      street: "507, B-Block, The One Building, 5 RNT Marg",
      city: "Indore",
      state: "Madhya Pradesh",
      postalCode: "452001",
      country: "India",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/sheesh-exports",
    twitter: "https://twitter.com/sheeshexports",
    facebook: "https://facebook.com/sheeshexports",
  },
  certificationsList: [
    "APEDA Registered",
    "Spices Board of India",
    "FSSAI Licensed",
    "ISO 22000:2018",
    "HACCP Certified",
    "Halal Certified",
    "US FDA Registered Facility",
  ],
};
