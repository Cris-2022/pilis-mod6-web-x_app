import { useTicketContext } from './context';

export default function DeliverButtons() {
  const { ticket, deliver, clear } = useTicketContext();
  if (!ticket) return;

  return (
    <div>
      <button onClick={deliver}>Entregar</button>
      <button onClick={clear}>Cancelar</button>
    </div>
  );
}
