import { ReactNode } from 'react';
import { useProductReducer } from './reducer/useProductReducer';
import ProductContex from './ProductContex';

interface Props {
  children: ReactNode;
}

export default function ProductProvider({ children }: Props) {
  const value = useProductReducer();
  return <ProductContex.Provider value={value}>{children}</ProductContex.Provider>;
}
