import { ReactNode, useReducer } from 'react';
import orderReducer from '../reducer/reducer';
import { initialState } from '../reducer/state';
import { OrderContext } from './OrderContext';


interface Props {
  children: ReactNode;
};

const OrderProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
