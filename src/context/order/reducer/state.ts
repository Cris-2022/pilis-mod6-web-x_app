import { Order } from "@/services/order/types";

export interface OrderState {
    isLoading: boolean;
    isError: boolean;
    orders: Order[] | [];
    status: "pending" | "processed" | "finished"
}

export const initialState: OrderState = {
    isLoading: false,
    isError: false,
    orders: [],
    status: "pending"
};
