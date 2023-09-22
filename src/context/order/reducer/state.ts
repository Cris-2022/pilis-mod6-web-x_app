import { Order } from "@/services/order/types";

export interface OrderState {
  isLoading: boolean;
  isError: boolean;
  orders: Order[] | [];
  status: "pending" | "processed" | "finished";
  isDeliverd: boolean;
  isExpired: boolean
}

export const initialState: OrderState = {
  isLoading: false,
  isError: false,
  orders: [],
  status: "pending",
  isDeliverd: false,
  isExpired: false
};
