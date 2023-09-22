import { Product } from "../products";

export interface Product {
  productId: string;
  quantity: number;
}

export interface OrderData {
  products: Product[];
}

export interface OrderDetail {
  id: string;
  description: string
  quantity: number;
  subTotal: number
  createdAt: string;
  order: Order;
  product: Product | null
}

export interface Order {
  id: string;
  code: string
  status: "processed" | "finished";
  isDelivered: boolean;
  isExpired: boolean
  createdAt: string;
  updateAt: string;
  detail: OrderDetail[];
}

