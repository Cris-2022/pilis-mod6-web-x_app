import { ReactNode, useReducer } from 'react';
import { ProductContex } from './ProductContex';
import { initialState } from './reducer/state';
import productReducer from './reducer/reducer';


interface Props {
  children: ReactNode;
}

const ProductProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  return (
    <ProductContex.Provider value={{ state, dispatch }}>
      {children}
    </ProductContex.Provider>
  )
}

export default ProductProvider