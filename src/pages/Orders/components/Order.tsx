import './Order.css';
import { Case, Message } from '@/components/Message';

const STATUS = {
  PENDING: 'pending',
  PROCESSED: 'processed',
  FINISHED: 'finished',
};

interface Props {
  id: string;
  estado: 'processed' | 'finished';
  Fecha_hora: string;
  total: number;
}

const Order = ({ id, Fecha_hora, estado, total }: Props) => {
  return (
    <div className='cookieCard'>
      <h2>Orden id: {id}</h2>
      <h4>Fecha y hora:{Fecha_hora} </h4>
      <h4>Estado: {estado}</h4>
      <h3>Total: {total} </h3>
      <div className='card-footer'>
        <Message status={estado}>
          <Case status={STATUS.PENDING}>
            <button className='editButton'>Procesar</button>
          </Case>
          <Case status={STATUS.PROCESSED}>
            <button className='editButton'>finalizar</button>
          </Case>
          <Case className='editButton' status={STATUS.FINISHED}>
            finalizado
          </Case>
        </Message>
      </div>
    </div>
  );
};

export default Order;
