export interface Tokens {
  bearer_token: string;
  refresh_token: string;
}

export interface UserData {
  username: string;
  password: string;
  avatar: File;
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
