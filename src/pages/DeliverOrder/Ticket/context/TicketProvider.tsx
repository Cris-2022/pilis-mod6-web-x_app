import { ReactNode } from 'react';
import TicketContext from './TicketContext';
import useTicketReducer from './reducer/useTicketReducer';

interface Props {
  children: ReactNode;
}
export default function TicketProvider({ children }: Props) {
  const value = useTicketReducer();
  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
}
