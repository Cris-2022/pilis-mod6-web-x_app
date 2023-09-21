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
  filteredStatus: string | null
};

const Orders: React.FC<OrdersProps> = ({ filteredStatus }) => {
  const { state, dispatch } = useContext(OrderContext);
  const { tokens } = useContext(UserContext);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([])

  const { orders } = state;

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch({ type: ACTIONS.LOADING });

      if (tokens) {
        const token = tokens.bearer_token;
        const { result, isError } = await getOrders(token);

        if (isError && !result) {
          return dispatch({ type: ACTIONS.ERROR });
        };
        if (result)
          dispatch({
            type: ACTIONS.GET_ORDERS,
            payload: result,
          });
        [];
      };
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (filteredStatus === "all") {
      setFilteredOrders(orders);
    } else {
      const filtered = orders.filter((order) => order.status === filteredStatus);
      setFilteredOrders(filtered);
    }
  }, [orders, filteredStatus]);

  return (
    <div>
      <div className='head-prod'>
        <p className='set-p'>Gestione las ordenes desde aquí.</p>
        <IsLoading />

        <h1>Ordenes</h1>
      </div>
      <div className='grid'>
        {
          (filteredOrders.length > 0)
            ?
            filteredOrders.map(order => {
              return (
                <Pedido
                  key={order.id}
                  id={order.id}
                  Fecha_hora={order.createdAt}
                  estado={order.status}
                  total={order.orderDetail.reduce(
                    (total, order) => total + Number(order.subTotal),
                    0,
                  )}
                />
              );
            })
            :
            orders.map(order => {
              return (
                <Pedido
                  key={order.id}
                  id={order.id}
                  Fecha_hora={order.createdAt}
                  estado={order.status}
                  total={order.orderDetail.reduce(
                    (total, order) => total + Number(order.subTotal),
                    0,
                  )}
                />
              );
            })
        }
      </div>
    </div>
  );
};

export default Orders;
