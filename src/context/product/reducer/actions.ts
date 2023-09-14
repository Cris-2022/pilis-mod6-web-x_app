import { Product } from "@/services/products";

export type ProductAction =
    { type: "GET - product", payload: Product[] }


//  |   LOADING: "loading- product",
//   |  GETPRODUCTS: "GET-products",
//    | DELETE: "DEL-products",
//     |UPDATE: "UP-products"
