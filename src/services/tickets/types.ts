export interface Ticket {
  id: string;
  createAt: string;
  isDelivered: boolean;
  isExpired: boolean;
  code: string;
  orderId: string;
  detail: Detail[];
}

export interface Detail {
  id: string;
  description: string;
  quantity: string;
  subTotal: string;
  createdAt: string;
}
