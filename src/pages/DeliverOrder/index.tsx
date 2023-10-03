import { ACTIONS } from '@/context/order/reducer/actions';
import { OrderContext } from '@/context/order/store/OrderContext';
import { UserContext } from '@/context/user';
import ErrorMessage from '@/pages/Login/ErrorMessage';
import getOrders from '@/services/order/getOrders';
import updateDeliveredOrder from '@/services/order/updateOrderDelivered';
import { useContext, useEffect, useState } from 'react';
// import '@/index.css';
import OrderDetail from './OrderDetail';
import { Order } from '@/services/order/types';
import getOrder from '@/services/order/getOrder';

const ordersValidate = (orders: Order[]) =>
  orders.filter(
    order =>
      order.status === 'finished' &&
      order.isDelivered === false &&
      order.isExpired === false,
  );

export default function DeliveredOrders() {
  const { tokens } = useContext(UserContext);
  const { state, dispatch } = useContext(OrderContext);
  const [orderSelected, setOrderSelected] = useState<Order | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const { orders } = state;
  const ordersFilter = ordersValidate(orders);

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

  const watchOrderDetail = async (orderId: string) => {
    if (tokens) {
      const { bearer_token } = tokens;
      const { result } = await getOrder(bearer_token, orderId);
      if (result) {
        setOrderSelected(result);
        openModal();
      }
      return;
    }
    <ErrorMessage status={500} />;
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className='container'>
      <div className='d-flex flex-row bg-light'>
        <h3 className='text-decoration-underline pt-4 mb-3 ps-3 text-secondary'>
          Entrega de Ordenes
        </h3>
      </div>
      {orderSelected && (
        <div className='d-flex justify-content-end mb-3'>
          <OrderDetail
            order={orderSelected}
            closeModal={closeModal}
            isOpen={isOpenModal}
          />
        </div>
      )}
      <div className='table-responsive d-flex flex-row bg-secondary mb-5 pb-5'>
        <table className='table table-hover'>
          <thead>
            <tr className='table-secondary'>
              <th scope='col'>N° Ticket</th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'>Fecha de creación</th>
              <th scope='col'>Descripcion</th>
              <th scope='col'>Total</th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'></th>
              <th scope='col'>Estado</th>

              <th scope='col'>Acciones</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {ordersFilter.map(p => {
              return (
                <tr className='table-light text-black' key={p.id}>
                  <th scope='row' className='text-black'>
                    {p.code}
                  </th>
                  <th scope='row'></th>
                  <th scope='row'></th>
                  <th scope='row'></th>
                  <td className='text-black'>{p.updateAt.slice(0, 10)}</td>
                  <td className='text-black'>{p.detail[0].description}</td>
                  <td className='text-black'>
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
                  <td>
                    <span className='text-black'>Finalizado</span>
                  </td>
                  <td
                    style={{ cursor: 'pointer' }}
                    onClick={() => watchOrderDetail(p.id)}
                  >
                    <button className='btn btn-info'>Ver detalle</button>
                  </td>

                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => handleDelivered(p.id)}
                    >
                      Entregar
                    </button>
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
