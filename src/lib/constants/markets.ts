export interface KeyMarketSummary {
  country: string;
  slug: string;
  region: string;
  ports: string[];
  shippingDays: string;
}

export const KEY_EXPORT_MARKETS: KeyMarketSummary[] = [
  { country: "United Arab Emirates", slug: "uae", region: "Middle East", ports: ["Jebel Ali", "Port Rashid"], shippingDays: "3-5 Days" },
  { country: "Saudi Arabia", slug: "saudi-arabia", region: "Middle East", ports: ["Jeddah Islamic Port", "King Abdul Aziz Port (Dammam)"], shippingDays: "5-7 Days" },
  { country: "United States", slug: "usa", region: "North America", ports: ["New York / New Jersey", "Los Angeles", "Houston"], shippingDays: "22-26 Days" },
  { country: "United Kingdom", slug: "uk", region: "Europe", ports: ["Felixstowe", "Southampton", "London Gateway"], shippingDays: "18-22 Days" },
  { country: "Germany", slug: "germany", region: "Europe", ports: ["Hamburg", "Bremerhaven"], shippingDays: "20-24 Days" },
  { country: "Singapore", slug: "singapore", region: "Asia Pacific", ports: ["Port of Singapore"], shippingDays: "6-8 Days" },
];
