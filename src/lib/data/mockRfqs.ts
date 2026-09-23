export type RfqStatus = 'Pending' | 'Quoted' | 'Accepted' | 'Rejected';

export type RFQ = {
  id: string;
  productId: string;
  productName: string;
  quantity: string;
  companyName: string;
  contactEmail: string;
  destinationPort: string;
  notes: string;
  status: RfqStatus;
  createdAt: string;
  assignedTo?: string;
};

export const MOCK_RFQS: RFQ[] = [
  {
    id: "RFQ-1001",
    productId: "p1",
    productName: "Maize (White/Yellow)",
    quantity: "200 MT",
    companyName: "Global Agro Traders LLC",
    contactEmail: "purchasing@globalagro.com",
    destinationPort: "Jebel Ali, Dubai",
    notes: "Require SGS certification before loading.",
    status: "Pending",
    createdAt: "2026-09-20T10:30:00Z"
  },
  {
    id: "RFQ-1002",
    productId: "p7",
    productName: "Saffron",
    quantity: "50 KG",
    companyName: "Premium Spice Imports",
    contactEmail: "imports@premiumspice.eu",
    destinationPort: "Rotterdam, Netherlands",
    notes: "Grade A Organic required.",
    status: "Quoted",
    createdAt: "2026-09-18T14:15:00Z",
    assignedTo: "admin@sheeshexports.in"
  },
  {
    id: "RFQ-1003",
    productId: "p27",
    productName: "1121 Basmati Rice",
    quantity: "500 MT",
    companyName: "Middle East Food Co.",
    contactEmail: "sourcing@mefood.com",
    destinationPort: "Doha, Qatar",
    notes: "Need it in 5kg retail pouches with our private label.",
    status: "Accepted",
    createdAt: "2026-09-15T09:00:00Z"
  },
  {
    id: "RFQ-1004",
    productId: "p58",
    productName: "Psyllium Husk",
    quantity: "20 MT",
    companyName: "HealthNutra Corp",
    contactEmail: "supply@healthnutra.com",
    destinationPort: "New York, USA",
    notes: "99% purity minimum.",
    status: "Rejected",
    createdAt: "2026-09-10T11:45:00Z"
  },
  {
    id: "RFQ-1005",
    productId: "p16",
    productName: "Coffee (All Varieties)",
    quantity: "1 FCL",
    companyName: "EuroBeans Roasters",
    contactEmail: "hello@eurobeans.co.uk",
    destinationPort: "London, UK",
    notes: "Looking for Arabica AAA grade.",
    status: "Pending",
    createdAt: "2026-09-22T08:20:00Z"
  }
];
