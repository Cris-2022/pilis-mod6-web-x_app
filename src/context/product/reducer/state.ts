import { Product } from "@/src/services/product/types";

export interface State {
    isLoading: boolean;
    isError: boolean;
    product: Product | null;
    image: string | null
}

export const defaultState: State = {
    isLoading: false,
    isError: false,
    product: null,
    image: null
};
