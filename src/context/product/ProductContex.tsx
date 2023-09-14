import { createContext } from 'react';
import { ProductState, initialState } from './reducer/state';
import { ProductAction } from './reducer/actions';


export const ProductContex = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}>({ state: initialState, dispatch: () => null })

