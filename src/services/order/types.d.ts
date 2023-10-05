export interface OrderDetail {
  id: string;
  description: string;
  quantity: number;
  subTotal: number;
  createdAt: string;
}

export interface Order {
  id: string;
  code: string;
  status: "pending" |'processed' | 'finished';
  isDelivered: boolean;
  isExpired: boolean;
  createdAt: string;
  updateAt: string;
  detail: OrderDetail[];
}
