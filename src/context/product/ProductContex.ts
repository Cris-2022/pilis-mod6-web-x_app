import { createContext } from 'react';
import { Product } from '@/src/services/product/types';

export interface IContext {
  product: Product | null;
  isLoading: boolean;
  isError: boolean;
  getList: () => void | any;
  // get: () => void
  // create: (data: FormData) => void;
  // update: (data: FormData) => void;
  // delete: () => void;
}

const Context: IContext = {
  product: null,
  isLoading: false,
  isError: false,
  getList() { },
  // get() { },
  // create() { },
  // update() { },
  // delete() { },
};

const ProductContex = createContext<IContext>(Context);
export default ProductContex;
