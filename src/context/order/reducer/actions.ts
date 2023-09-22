import { Order } from "@/services/order/types";


export enum ACTIONS {
  LOADING,
  ERROR,
  GET_ORDERS,
  ORDER_STATUS,
  ORDER_ISDELIVERED
};

type LoadingAction =
  { type: ACTIONS.LOADING };

type ErrorAction =
  { type: ACTIONS.ERROR };

type GetOrdersAction = {
  type: ACTIONS.GET_ORDERS,
  payload: Order[]
};

type OrderStatusActions = {
  type: ACTIONS.ORDER_STATUS,
  payload: "processed" | "finished"
};

type OrderDeliverdAction = {
  type: ACTIONS.ORDER_ISDELIVERED,
};
export type Actions =
  | LoadingAction
  | ErrorAction
  | GetOrdersAction
  | OrderStatusActions
  | OrderDeliverdAction
