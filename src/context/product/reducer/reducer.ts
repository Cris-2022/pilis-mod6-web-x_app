import { ProductAction } from "./actions"
import { ProductState } from "./state"


function productReducer(state: ProductState, action: ProductAction): ProductState {
  switch (action.type) {
    case "GET - product":
      return { ...state, product: action.payload };

    default:
      return state;
  }

}

export default productReducer