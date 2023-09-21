import './Order.css';
import { Row } from 'react-bootstrap';
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

const Order = ({ id, Fecha_hora, estado, total }: Props) => {
  const updateState = useOrderCard(id);

  return (
    <>
    
    <Row className="justify-content-md-center">
    <div className="card text-white bg-secondary mb-3" Style="max-width: 20rem;">
      <h4>Orden id: {id}</h4>
      <h6>Fecha y hora:{Fecha_hora} </h6>
      <h6>Estado: {estado}</h6>
      <h5>Total: {total} </h5>
      <div className='card-footer'>
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
            <button type="button"
              onClick={() => updateState(STATUS.PROCESSED)}
              className='button button--finish btn btn-outline-success'
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
    </Row>
    </>
  );
};

export default Order;
