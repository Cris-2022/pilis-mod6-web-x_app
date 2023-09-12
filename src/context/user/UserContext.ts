import {
  Tokens,
  User,
  UserCredentials,
  UserFormData,
} from '@/src/services/user/types';
import { createContext } from 'react';

export interface IContext {
  isLogin: boolean;
  user: User | null;
  tokens: Tokens | null;

  isLoading: boolean;
  logIn: (credential: UserCredentials) => void;
  refresh: () => void;
  update: (data: UserFormData) => void;
  logOut: () => void;
  isError: boolean;
  status: number | null;
}

const Context: IContext = {
  isLogin: false,
  user: null,
  tokens: null,

  isLoading: false,
  logIn() {},
  refresh() {},
  update() {},
  logOut() {},
  isError: false,
  status: null,
};

const UserContext = createContext<IContext>(Context);
export default UserContext;