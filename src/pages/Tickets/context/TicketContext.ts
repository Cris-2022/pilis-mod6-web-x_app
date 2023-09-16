import { Ticket } from '@/services/tickets/types';
import { createContext } from 'react';

export interface TicketContextValue {
  status: number | null;
  isError: boolean;
  ticket: Ticket | null;
  action: string;
  isLoading: boolean;

  getTicket: (code: string) => void;
  deliver: () => void;
  clear: () => void;
}

const defaultContext: TicketContextValue = {
  status: null,
  isError: false,
  ticket: null,
  action: 'buscar',
  isLoading: false,

  deliver() {},
  getTicket() {},
  clear() {},
};

const TicketContext = createContext<TicketContextValue>(defaultContext);
export default TicketContext;
