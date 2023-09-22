import './css/index.css';

import DetailTicket from './DetailTicket';
import ErrorMessage from './Message';
import FormTickets from './FormTicket';
import { TicketProvider } from './context';
import DeliverButtons from './DeliverButtons';

export default function Tickets() {
  return (
    <TicketProvider>
      {/* <main className='tickets'> */}
        <FormTickets />
        <DetailTicket />
        <DeliverButtons />
        <ErrorMessage />
      {/* </main> */}
    </TicketProvider>
  );
}
