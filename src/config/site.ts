export const SITE_CONFIG = {
  name: "Sheesh Exports",
  legalName: "Sheesh Exports Private Limited",
  description:
    "Premier Indian exporter and bulk supplier of agricultural commodities, whole and ground spices, oil seeds, and pulses to international markets worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sheeshexports.in",
  ogImage: "https://sheeshexports.in/images/branding/og-default.jpg",
  contact: {
    email: "exports@sheeshexports.in",
    salesEmail: "rfq@sheeshexports.in",
    phone: "+91-9876543210",
    whatsapp: "+91-9876543210",
    address: {
      street: "Plot No. 45, Agro Trade Zone, APMC Market Yard",
      city: "Guntur",
      state: "Andhra Pradesh",
      postalCode: "522004",
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
