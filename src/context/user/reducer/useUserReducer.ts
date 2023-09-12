import { useReducer } from 'react';
import { IContext } from '../UserContext';
import { ACTIONS } from './action';
import reducer from './reducer';
import { defaultState } from './state';
import {
  UserCredentials,
  auth,
  UserFormData,
  refresh as refreshServices,
  update as updateService,
} from '@/services/user';

function useUserReducer(): IContext {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const logIn = async (credentials: UserCredentials) => {
    dispatch({ type: ACTIONS.LOADING });

    const { isError, status, result } = await auth(credentials);

    if (isError) return dispatch({ type: ACTIONS.ERROR, status });

    const { user, tokens } = result!;
    return dispatch({ type: ACTIONS.LOGIN, user, tokens });
  };

  const logOut = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const refresh = async () => {
    dispatch({ type: ACTIONS.LOADING });

    const { tokens } = state;
    const { refresh_token } = tokens!;
    const { isError, status, result } = await refreshServices(refresh_token);

    if (isError) return dispatch({ type: ACTIONS.ERROR, status });

    const { bearer_token: token, user } = result!;
    return dispatch({ type: ACTIONS.REFRESH, token, user });
  };

  const update = async (data: UserFormData) => {
    dispatch({ type: ACTIONS.LOADING });

    const { bearer_token } = state.tokens!;
    const { isError, status } = await updateService(bearer_token, data);

    if (isError) return dispatch({ type: ACTIONS.ERROR, status });
  };

  return {
    ...state,
    logIn,
    logOut,
    refresh,
    update,
  };
}

export default useUserReducer;
