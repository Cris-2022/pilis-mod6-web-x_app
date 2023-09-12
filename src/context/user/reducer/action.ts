import { Tokens, User } from '@/services/user/types';

export enum ACTIONS {
  LOADING,
  ERROR,
  LOGIN,
  LOGOUT,
  REFRESH,
}

export interface LoadingAction {
  type: ACTIONS.LOADING;
}

export interface ErrorAction {
  type: ACTIONS.ERROR;
  status: number;
}

export interface LoginAction {
  type: ACTIONS.LOGIN;
  user: User;
  tokens: Tokens;
}

export interface LogOutAction {
  type: ACTIONS.LOGOUT;
}

export interface RefreshAction {
  type: ACTIONS.REFRESH;
  user: User;
  token: string;
}

export type Action =
  | LoadingAction
  | ErrorAction
  | LoginAction
  | LogOutAction
  | RefreshAction;
