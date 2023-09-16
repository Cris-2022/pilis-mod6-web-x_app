import { Product } from "@/services/products";


export enum ACTIONS {
  LOADING,
  ERROR,
  GETPRODUCTS,
  ADDPRODUCT,
  DELETEPRODUCT,
  UPDATE_PRODUCT
};

type LoadingAction =
  { type: ACTIONS.LOADING };

type ErrorAction =
  { type: ACTIONS.ERROR };

type GetProductAction =
  {
    type: ACTIONS.GETPRODUCTS,
    product: Product[]
  };

type AddProductAction =
  {
    type: ACTIONS.ADDPRODUCT,
    product: Product
  };

type DeleteAction =
  {
    type: ACTIONS.DELETEPRODUCT,
    payload: string
  };

type UpdateAction =
  {
    type: ACTIONS.UPDATE_PRODUCT,
  };

export type Actions =
  | LoadingAction
  | ErrorAction
  | GetProductAction
  | AddProductAction
  | DeleteAction
  | UpdateAction
