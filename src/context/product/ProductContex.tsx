import { createContext } from 'react';
import { ProductState, initialState } from './reducer/state';
import { Actions } from './reducer/actions';


export const ProductContex = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null })

