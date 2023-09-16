import { useContext, useEffect } from 'react';
import Pedido from "./Order";
import './Orders.css'
import { OrderContext } from '@/context/order/store/OrderContext';
import { UserContext } from '@/context/user';
import { ACTIONS } from '@/context/order/reducer/actions';
import getOrders from '@/services/order/getOrders';


const Orders = () => {

  const { state, dispatch } = useContext(OrderContext)
  const { tokens } = useContext(UserContext);

  const { orders } = state;

  const fetchOrders = async () => {
    dispatch({ type: ACTIONS.LOADING });

    if (tokens) {
      const token = tokens.bearer_token
      const { result, isError } = await getOrders(token);

      if (isError && !result) {
        return dispatch({ type: ACTIONS.ERROR });
      };

      if (result)
        dispatch({
          type: ACTIONS.GET_ORDERS,
          payload: result
        });
      []
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [dispatch]);

  return (


    <div>
      <div className='head-prod'>
        <p className='set-p'>Gestione las ordenes desde aquí.</p>
        <h1>Ordenes</h1>
      </div>

      <div className='grid'>
        {
          orders.map((order) => {
            return (
              <Pedido
                key={order.id}
                id={order.id}
                Fecha_hora={order.createdAt}
                estado={order.status}
                total={order.orderDetail[0].subTotal}
              />
            );
          })
        }

      </div>
    </div>

  )
}

export default Orders;