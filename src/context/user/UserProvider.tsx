import { ReactNode } from 'react';
import useUserReducer from './reducer/useUserReducer';
import { UserContext } from '.';

interface Props {
  children: ReactNode;
}

export default function UserProvider({ children }: Props) {
  const value = useUserReducer();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
