import { useContext, useEffect, useState } from 'react';
import Pedido from './Order';
import './Orders.css';
import { OrderContext } from '@/context/order/store/OrderContext';
import { UserContext } from '@/context/user';
import { ACTIONS } from '@/context/order/reducer/actions';
import getOrders from '@/services/order/getOrders';
import IsLoading from './IsLoading';
import { Order } from '@/services/order/types';

interface OrdersProps {
  filteredStatus: string | null;
}

const Orders: React.FC<OrdersProps> = ({ filteredStatus }) => {
  const { state, dispatch } = useContext(OrderContext);
  const { tokens } = useContext(UserContext);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  const { orders } = state;
  const ordersPendingAndProcessed = orders.filter(order => order.status !== "finished");

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch({ type: ACTIONS.LOADING });

      if (tokens) {
        const token = tokens.bearer_token;
        const { result, isError } = await getOrders(token);

        if (isError && !result) {
          return dispatch({ type: ACTIONS.ERROR });
        };
        if (result && result.length > 0) {
          dispatch({
            type: ACTIONS.GET_ORDERS,
            payload: result,
          });
          const ordersPendingAndProcessed = result.filter(order => order.status !== "finished")
          setFilteredOrders(ordersPendingAndProcessed)
        };
      };
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (filteredStatus === 'all') {
      if (ordersPendingAndProcessed.length > 0) {
        setFilteredOrders(ordersPendingAndProcessed);
      } else {
        alert("No hay ordenes activas");
        setFilteredOrders([]);
      };
    };
    
    if (filteredStatus === 'pending') {
      const filterPendig = orders.filter(order => order.status === filteredStatus);
      if (filterPendig.length > 0) {
        setFilteredOrders(filterPendig);
      } else {
        setFilteredOrders([])
        alert("No hay ordenes pendientes");
      };
    };

    if (filteredStatus === 'processed') {
      const filterProcessed = orders.filter(order => order.status === "processed");
      if (filterProcessed.length > 0) {
        setFilteredOrders(filterProcessed);
      }
      else {
        setFilteredOrders([]);
        alert("No hay ordenes procesadas");
      };
    };
  }, [orders, filteredStatus]);

  return (
    <div className='container bg-light'>
      <div className='head-prod'>
        <p className='set-p'></p>
        <IsLoading />

        <h4 className='title-crud'>Gestión de Ordenes</h4>
      </div>
      <div className='row'>
        {filteredOrders.length > 0
          && filteredOrders.map(order => {
            return (
              <Pedido
                key={order.id}
                id={order.id}
                code={order.code}
                description={order.detail.map(detail => detail.description)}
                Fecha_hora={new Date(order.createdAt).toLocaleTimeString()}
                estado={order.status}
                total={order.detail.reduce(
                  (total, order) => total + Number(order.subTotal),
                  0,
                )}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Orders;
