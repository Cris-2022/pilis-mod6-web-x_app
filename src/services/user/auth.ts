import ENDPOINTS from '@/src/utils/endpoints';
import { PayloadAuth, ResponseAuth, Tokens, UserCredentials } from './types';

function payload(token: string): PayloadAuth {
  const parts = token.split('.');
  const payload = JSON.parse(atob(parts[1]));

  return {
    id: payload.id,
    username: payload.username,
    avatar: payload.avatar,
  };
}

function getTokens(tokens: ResponseAuth): Tokens {
  const bearer_token = tokens.token;
  const refresh_token = tokens.refresh;

  return { bearer_token, refresh_token };
}

interface Result {
  user: PayloadAuth;
  tokens: Tokens;
}
async function auth(credentials: UserCredentials): Promise<Result> {
  const body = JSON.stringify(credentials);
  const headers = { 'Content-Type': 'application/json' };
  const request = { headers, body };

  const response = await fetch(ENDPOINTS.AUTH, request);
  if (!response.ok) throw new Error('usuario y contraseñas incorrectas');

  const auth: ResponseAuth = await response.json();

  const user: PayloadAuth = payload(auth.token);
  const tokens = getTokens(auth);

  return { user, tokens };
}

export default auth;
