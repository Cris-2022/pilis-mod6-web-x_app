import { Product } from "@/services/products";


// const GETPRODUCTS = "GET - product"

export enum ACTIONS {
  LOADING,
  ERROR,
  GETPRODUCTS
}

type LoadingAction =
  { type: ACTIONS.LOADING }

type ErrorAction =
  { type: ACTIONS.ERROR }

type GetProductAction =
  { type: ACTIONS.GETPRODUCTS, product: Product[] }

export type Actions =
  | LoadingAction
  | ErrorAction
  | GetProductAction



//  |   LOADING: "loading- product",
//   |  GETPRODUCTS: "GET-products",
//    | DELETE: "DEL-products",
//     |UPDATE: "UP-products"
