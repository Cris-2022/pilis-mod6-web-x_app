import { Tokens, User } from '@/services/user/types';

export interface State {
  isLoading: boolean;
  isError: boolean;
  isLogin: boolean;
  user: User | null;
  tokens: Tokens | null;
  status: number | null;
}

export const defaultState: State = {
  isLoading: false,
  isError: false,
  isLogin: false,
  user: null,
  tokens: null,
  status: null,
};
