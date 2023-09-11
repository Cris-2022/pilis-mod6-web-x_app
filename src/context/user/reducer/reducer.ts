import { ACTIONS, Action } from './action';
import { State, defaultState } from './state';

function reducer(state: State, action: Action): State {
  const typeAction = action.type;

  switch (typeAction) {
    case ACTIONS.LOADING:
      return { ...state, isLoading: true, isError: false, status: null };

    case ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        status: action.status,
      };

    case ACTIONS.LOGIN:
      return {
        ...state,
        isLoading: false,
        isError: false,
        status: null,
        user: action.user,
        tokens: action.tokens,
      };

    case ACTIONS.LOGOUT:
      return defaultState;

    case ACTIONS.REFRESH:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.user,
        tokens: { ...state.tokens!, bearer_token: action.token },
        status: null,
      };

    default:
      return state;
  }
}

export default reducer;
