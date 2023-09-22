import { ACTIONS } from '@/context/order/reducer/actions';
import { OrderContext } from '@/context/order/store/OrderContext';
import { UserContext } from '@/context/user';
import ErrorMessage from '@/pages/Login/ErrorMessage';
import getOrders from '@/services/order/getOrders';
import updateDeliveredOrder from '@/services/order/updateOrderDelivered';
import { useContext, useEffect } from 'react';
import '../css/detail-ticket.css';
import Ticket from './Ticket';

export default function DeliveredOrders() {
  const { state, dispatch } = useContext(OrderContext);
  const { orders } = state;

  const { tokens } = useContext(UserContext);

  const ordersFilter = orders.filter(
    order => order.status === 'finished' && order.isDelivered === false,
  );

  const fetchOrders = async () => {
    dispatch({ type: ACTIONS.LOADING });

    if (tokens) {
      const token = tokens.bearer_token;
      const { result, isError } = await getOrders(token);

      if (isError && !result) {
        return dispatch({ type: ACTIONS.ERROR });
      }
      if (result) {
        dispatch({
          type: ACTIONS.GET_ORDERS,
          payload: result,
        });
      }
      [];
    }
  };

  const handleDelivered = async (orderId: string) => {
    dispatch({ type: ACTIONS.LOADING });
    if (tokens) {
      const { bearer_token } = tokens;
      const { isError } = await updateDeliveredOrder(orderId, bearer_token);
      if (isError) {
        return dispatch({ type: ACTIONS.ERROR });
      }
      dispatch({ type: ACTIONS.ORDER_ISDELIVERED });
      fetchOrders();
    }
    return <ErrorMessage status={500} />;
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-decoration-underline'>Entrega de Ordenes</h2>
      </div>
      <div className='d-flex justify-content-end mb-3'>
        <Ticket />
      </div>
      <div className='table-responsive'>
        <table className='table table-hover  '>
          <thead>
            <tr className='table-primary'>
              <th scope='col'>N°Ticket</th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'>Fecha de creacion</th>
              <th scope='col'>Description</th>
              <th scope='col'>Total</th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersFilter.map(p => {
              return (
                <tr className='table-info' key={p.id}>
                  <th scope='row'>{p.code}</th>
                  <th scope='row'></th>
                  <th scope='row'></th>
                  <th scope='row'></th>
                  <td>{p.updateAt}</td>
                  <td>{p.detail[0].description}</td>
                  <td>
                    {p.detail.reduce(
                      (total, price) => total + Number(price.subTotal),
                      0,
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button
                      className='btn btn-info'
                      onClick={() => handleDelivered(p.id)}
                    >
                      Entregar
                    </button>
                  </td>

                  <td>
                    <span className='text-danger'>Finalizado</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
