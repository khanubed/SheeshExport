export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export type Order = {
  id: string;
  rfqId?: string;
  productName: string;
  quantity: string;
  totalAmount: number;
  currency: string;
  status: OrderStatus;
  createdAt: string;
  destinationPort: string;
  customerName: string;
};

export const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-9001",
    rfqId: "RFQ-1003",
    productName: "1121 Basmati Rice",
    quantity: "500 MT",
    totalAmount: 450000,
    currency: "USD",
    status: "Processing",
    createdAt: "2026-09-16T10:00:00Z",
    destinationPort: "Doha, Qatar",
    customerName: "Middle East Food Co."
  },
  {
    id: "ORD-9002",
    productName: "Dehydrated Garlic Flakes",
    quantity: "10 MT",
    totalAmount: 25000,
    currency: "USD",
    status: "Shipped",
    createdAt: "2026-09-01T14:30:00Z",
    destinationPort: "Rotterdam, Netherlands",
    customerName: "Spice World Inc."
  },
  {
    id: "ORD-9003",
    productName: "Turmeric Powder",
    quantity: "50 MT",
    totalAmount: 60000,
    currency: "USD",
    status: "Delivered",
    createdAt: "2026-08-15T09:15:00Z",
    destinationPort: "Jebel Ali, Dubai",
    customerName: "Dubai Trading LLC"
  },
  {
    id: "ORD-9004",
    productName: "Soya Chunks",
    quantity: "100 MT",
    totalAmount: 55000,
    currency: "USD",
    status: "Cancelled",
    createdAt: "2026-09-20T11:00:00Z",
    destinationPort: "Mombasa, Kenya",
    customerName: "AfriFoods"
  }
];
