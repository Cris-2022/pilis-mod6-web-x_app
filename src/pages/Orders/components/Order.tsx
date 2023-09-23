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
  estado: 'processed' | 'finished';
  Fecha_hora: string;
  total: number;
  code: string;
  description: string[]
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
    <div className="card" style={{ width: "18rem;", backgroundColor: "#8F78C6" }}>
      <h2> <u>Ticket N°: {code}</u></h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h2></h2>
      <h4>DETALLE: {description.join(" ,")} </h4>
      {/* <h4>Estado: {estado}</h4> */}
      <h3>Total: ${total} </h3>
      <div className="card-body">
        <Message status={estado}>
          <Case status={STATUS.PENDING}>
            <button
              onClick={() => updateState(STATUS.PENDING)}
              className='button button--processing'
            >
              Procesar
            </button>
          </Case>
          <Case status={STATUS.PROCESSED}>
            <button
              onClick={() => updateState(STATUS.PROCESSED)}
              className='button button--finish'
            >
              finalizar
            </button>
          </Case>
          <Case className='button button--disable' status={STATUS.FINISHED}>
            finalizado
          </Case>
        </Message>
      </div>
    </div>
  );
};

export default Order;
