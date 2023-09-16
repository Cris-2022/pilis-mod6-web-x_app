import { createContext } from "react";
import { OrderState, initialState } from "../reducer/state";
import { Actions } from "../reducer/actions";


export const OrderContext = createContext<{
    state: OrderState;
    dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });
