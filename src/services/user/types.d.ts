export interface UserData {
  username: string;
  password: string;
  avatar: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface ResponseAuth {
  token: string;
  refresh: string;
}

export interface ResponseRefresh {
  token: string;
}

export interface PayloadAuth {
  id: string;
  username: string;
  avatar: string | null;
}
