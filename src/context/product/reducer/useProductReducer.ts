import { useReducer } from "react"
import { IContext } from '../ProductContex';
import { ACTIONS } from './actions';
import reducer from './reducer';
import { defaultState } from './state';
import { get } from '@/src/services/product/get';

export function useProductReducer(): IContext {
  const [state, dispatch] = useReducer(reducer, defaultState);


  const getList = async () => {
    dispatch({ type: ACTIONS.STARTED });

    const { isError, result } = await get();

    if (isError) return dispatch({ type: ACTIONS.ERROR });

    const { product } = result;
    dispatch({ type: ACTIONS.SUCCESS, product });
  };
  
  return {
    ...state,
    getList
  };
}