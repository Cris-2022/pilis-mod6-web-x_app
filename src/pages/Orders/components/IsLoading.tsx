import { OrderContext } from '@/context/order/store/OrderContext';
import { useContext } from 'react';

export default function IsLoading() {
  const { state } = useContext(OrderContext);
  if (state.isLoading) return <p>cargando...</p>;
}
