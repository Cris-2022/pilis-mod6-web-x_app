import { Product } from "../../../services/products/types";

export interface ProductState {
    isLoading: boolean;
    isError: boolean;
    product: Product[] | [];
    image: string | null
}

export const initialState: ProductState = {
    isLoading: false,
    isError: false,
    product: [],
    image: null
};
