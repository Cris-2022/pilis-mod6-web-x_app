import { Product } from "@/src/services/product/types";

export enum ACTIONS {
  LOADING,
  ERROR,
  STARTED,
  SUCCESS,
}

export interface LoadingAction {
  type: ACTIONS.LOADING;
}

export interface ErrorAction {
  type: ACTIONS.ERROR;
}

export interface StardedAction {
  type: ACTIONS.STARTED
}

export interface SuccessAction {
  type: ACTIONS.SUCCESS;
  product: Product
}

export type Action =
  | LoadingAction
  | ErrorAction
  | SuccessAction
  | StardedAction
