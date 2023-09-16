import { Ticket } from '@/services/tickets';

export enum ACTIONS {
  LOADING,
  ERROR,
  FOUND,
  DELIVER,
  CLEAR,
}

export interface LoadingAction {
  type: ACTIONS.LOADING;
}

export interface ErrorAction {
  type: ACTIONS.ERROR;
  status: number;
  action: string;
}

export interface FoundAction {
  type: ACTIONS.FOUND;
  ticket: Ticket;
}

export interface DeliverAction {
  type: ACTIONS.DELIVER;
}

export interface ClearAction {
  type: ACTIONS.CLEAR;
}

export type Action =
  | LoadingAction
  | ErrorAction
  | FoundAction
  | DeliverAction
  | ClearAction;
