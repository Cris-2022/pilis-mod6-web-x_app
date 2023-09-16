import { useContext, useEffect } from 'react';
import Pedido from './Order';
import './Orders.css';
import { OrderContext } from '@/context/order/store/OrderContext';
import { UserContext } from '@/context/user';
import { ACTIONS } from '@/context/order/reducer/actions';
import getOrders from '@/services/order/getOrders';
import IsLoading from './IsLoading';

const Orders = () => {
  const { state, dispatch } = useContext(OrderContext);
  const { tokens } = useContext(UserContext);

  const { orders } = state;

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch({ type: ACTIONS.LOADING });

      if (tokens) {
        const token = tokens.bearer_token;
        const { result, isError } = await getOrders(token);

        if (isError && !result) {
          return dispatch({ type: ACTIONS.ERROR });
        }

        if (result)
          dispatch({
            type: ACTIONS.GET_ORDERS,
            payload: result,
          });
        [];
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <div className='head-prod'>
        <p className='set-p'>Gestione las ordenes desde aquí.</p>
        <IsLoading />

        <h1>Ordenes</h1>
      </div>

      <div className='grid'>
        {orders.map(order => {
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
        })}
      </div>
    </div>
  );
};

export default Orders;
