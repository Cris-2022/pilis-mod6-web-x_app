import { ACTIONS, Actions } from "./actions"
import { ProductState } from "./state"


function productReducer(state: ProductState, action: Actions): ProductState {
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

    case ACTIONS.GETPRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: action.product
      };

    case ACTIONS.ADDPRODUCT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: [...state.product, action.product]
      };

    default:
      return state;
  };
};

export default productReducer;