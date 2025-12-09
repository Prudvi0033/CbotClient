// ======================
// PRODUCT (Deals)
// ======================
export interface Product {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  dealPrice?: number;
  createdAt: string;
}

// Returned from backend
export interface DealData {
  products: Product[];
}

export interface DealItem {
  section: "deals";
  data: DealData;     // NOT Product[]
  timestamp: number;
}



// ======================
// ORDERS
// ======================
export interface OrderProductData {
  _id?: string;
  userId: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  status: string;     
  createdAt?: string;
}

// Returned from backend
export interface OrdersData {
  orders: OrderProductData[];
}

export interface OrderItem {
  section: "orders";
  data: OrdersData;   // NOT OrderProductData[]
  timestamp: number;
}



// ======================
// PAYMENTS
// ======================
export interface PaymentItemData {
  _id: string;
  orderId: string;
  userId: string;
  amountPaid: number;
  pendingAmount: number;
  status: string;
  createdAt: string;
}

// Returned from backend
export interface PaymentsData {
  payments: PaymentItemData[];
}

export interface PaymentItem {
  section: "payments";
  data: PaymentsData;  // NOT PaymentItemData[]
  timestamp: number;
}



// ======================
// SUPPORT
// ======================
export interface SupportData {
  msg: string;
}

export interface SupportItem {
  section: "support";
  data: SupportData;   // Matches item.data.msg
  timestamp: number;
}



// ======================
// FINAL UNION
// ======================
export type ContentItem =
  | DealItem
  | OrderItem
  | PaymentItem
  | SupportItem;
