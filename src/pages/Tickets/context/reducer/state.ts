import { Ticket } from '@/services/tickets';

export const STATE_ACTION = {
  LOADING: 'cargando...',
  DELIVER: 'entregar',
  FIND: 'buscar',
};

export interface State {
  status: number | null;
  isError: boolean;
  ticket: Ticket | null;
  action: string;
  isLoading: boolean;
}

export const defaultState: State = {
  status: null,
  isError: false,
  ticket: null,
  action: 'buscar',
  isLoading: false,
};
