import { Case, Message } from '@/components/Message';
import { STATE_ACTION, useTicketContext } from './context';

export default function MessageTicket() {
  const { status, action, isError, isLoading } = useTicketContext();
  if (isLoading) return <p>cargando...</p>;
  if (!isError) return;
  if (!status) return;

  if (action === STATE_ACTION.DELIVER)
    return (
      <Message status={status}>
        <Case status={400}>Envié el código del ticket</Case>
        <Case status={403}>pedido entregado</Case>
        <Case status={404}>ticket no encontrado</Case>
      </Message>
    );

  if (action === STATE_ACTION.FIND)
    return (
      <Message status={status}>
        <Case status={400}>ticket invalido o no encontrado</Case>
      </Message>
    );
}
