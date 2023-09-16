import { ACTIONS, Actions } from "./actions"
import { OrderState } from "./state"


function orderReducer(state: OrderState, action: Actions): OrderState {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        isError: true
      };

    case ACTIONS.GET_ORDERS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        orders: action.payload
      };

    case ACTIONS.ORDER_STATUS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        status: action.payload
      };

    default:
      return state;
  };
};

export default orderReducer;