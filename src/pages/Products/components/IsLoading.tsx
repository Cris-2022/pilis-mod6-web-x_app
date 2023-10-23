import { ProductContex } from '@/context/product/ProductContex';
import { useContext } from 'react';

export default function IsLoading() {
  const { state } = useContext(ProductContex);
  if (state.isLoading) return <p>cargando...</p>;
};
