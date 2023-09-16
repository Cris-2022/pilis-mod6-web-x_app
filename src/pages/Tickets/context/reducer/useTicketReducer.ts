import { useReducer } from 'react';
import { TicketContextValue } from '../TicketContext';
import reducer from './reducer';
import { STATE_ACTION, defaultState } from './state';
import { useUserContext } from '@/context/user';
import { ACTIONS } from './actions';
import {
  Ticket,
  deliver as deliverService,
  getTicket as getTicketService,
} from '@/services/tickets';

function useTicketReducer(): TicketContextValue {
  const { tokens } = useUserContext();
  const [state, dispatch] = useReducer(reducer, defaultState);

  const loadingDispatch = () => dispatch({ type: ACTIONS.LOADING });
  const foundDispatch = (ticket: Ticket) =>
    dispatch({ type: ACTIONS.FOUND, ticket });

  const deliverDispatch = () => dispatch({ type: ACTIONS.DELIVER });
  const errorDispatch = (status: number, action: string) =>
    dispatch({ type: ACTIONS.ERROR, status, action });

  const getTicket = async (code: string) => {
    loadingDispatch();
    const { bearer_token } = tokens!;
    const response = await getTicketService(bearer_token, code);
    if (response.isError) {
      clear();
      return errorDispatch(response.status, STATE_ACTION.FIND);
    }
    foundDispatch(response.result!);
  };

  const deliver = async () => {
    loadingDispatch();
    const { bearer_token } = tokens!;
    const { ticket } = state;

    if (!ticket) throw new Error('ticket undefined');

    const response = await deliverService(bearer_token, ticket.ticketId);
    if (response.isError)
      return errorDispatch(response.status, STATE_ACTION.DELIVER);
    deliverDispatch();
  };

  const clear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  return { ...state, getTicket, deliver, clear };
}

export default useTicketReducer;
