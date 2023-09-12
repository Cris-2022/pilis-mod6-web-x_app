import { ACTIONS, Action } from './actions';
import { State, defaultState } from './state';

const reducer = (state: State, action: Action): State => {
  const typeAction = action.type;

  switch (typeAction) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case ACTIONS.STARTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ACTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: action.product
      }

    default:
      return defaultState;
  };
};

export default reducer;
