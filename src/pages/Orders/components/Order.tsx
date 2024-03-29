import './Order.css';
import { ACTIONS } from '@/context/order/reducer/actions';
import { Case, Message } from '@/components/Message';
import { OrderContext } from '@/context/order/store/OrderContext';
import { useUserContext } from '@/context/user';
import getOrders from '@/services/order/getOrders';
import { useContext } from 'react';
import updateOrder from '@/services/order/updateOrder';

const STATUS = {
  PENDING: 'pending',
  PROCESSED: 'processed',
  FINISHED: 'finished',
} as const;

interface Props {
  id: string;
  estado: 'pending' | 'processed' | 'finished';
  Fecha_hora: string;
  total: number;
  code: string;
  description: string[];
}

function useOrderCard(id: string) {
  const { tokens } = useUserContext();
  const { dispatch } = useContext(OrderContext);

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

  const updateStateOrder = (status: string) => {
    dispatch({ type: ACTIONS.LOADING });
    switch (status) {
      case STATUS.PENDING:
        updateOrder(id, STATUS.PROCESSED).then(r => {
          if (r.isError) return;
          fetchOrders();
        });
        break;

      case STATUS.PROCESSED:
        updateOrder(id, STATUS.FINISHED).then(r => {
          if (r.isError) return;
          fetchOrders();
        });
        break;

      default:
        break;
    }
  };

  return updateStateOrder;
}

const Order = ({ id, Fecha_hora, estado, total, code, description }: Props) => {
  const updateState = useOrderCard(id);

  return (
    <article
      className='card bg-secondary col-lg-4 col-md-6 col-xl-3 border-5'
      style={{ width: '18rem;', backgroundColor: '#8F78C6' }}
    >
      <h5 className='text-info'>
        <u>TICKET Cod: {code}</u>
      </h5>
      <h2></h2>
      <h2></h2>
      <h6>DETALLE: {description.join(' ,')} </h6>
      {/* <h4>Estado: {estado}</h4> */}
      <h4 className='text-success'>Total: $ {total} </h4>
      <div className='card-body'>
        <Message status={estado}>
          <Case status={STATUS.PENDING}>
            <button
              onClick={() => updateState(STATUS.PENDING)}
              className='button--processing btn btn-warning'
            >
              Procesar
            </button>
          </Case>
          <Case status={STATUS.PROCESSED}>
            <button
              type='button'
              onClick={() => updateState(STATUS.PROCESSED)}
              className='button button--finish btn btn-success'
            >
              Finalizar
            </button>
          </Case>
          <Case className='button button--disable' status={STATUS.FINISHED}>
            Finalizado
          </Case>
        </Message>
      </div>
    </article>
  );
};

export default Order;
