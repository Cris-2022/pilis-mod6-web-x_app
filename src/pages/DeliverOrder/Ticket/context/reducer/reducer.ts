import { ACTIONS, Action } from './actions';
import { STATE_ACTION, State } from './state';

function reducer(state: State, action: Action): State {
  const typeAction = action.type;
  switch (typeAction) {
    case ACTIONS.LOADING:
      return {
        ...state,
        action: STATE_ACTION.LOADING,
        isLoading: true,
        isError: false,
        status: null,
      };

    case ACTIONS.FOUND:
      return {
        ticket: action.ticket,
        isError: false,
        isLoading: false,
        status: 200,
        action: STATE_ACTION.FIND,
      };

    case ACTIONS.DELIVER:
      return {
        ticket: null,
        isError: false,
        isLoading: false,
        status: 200,
        action: STATE_ACTION.DELIVER,
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        status: action.status,
        action: action.action,
      };

    case ACTIONS.CLEAR:
      return {
        ticket: null,
        isError: false,
        isLoading: false,
        status: 200,
        action: STATE_ACTION.FIND,
      };

    default:
      return state;
  }
}

export default reducer;
