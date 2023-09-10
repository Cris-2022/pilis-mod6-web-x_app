import ENDPOINTS from '@/src/utils/endpoints';
import { PayloadAuth, ResponseAuth, Tokens, UserCredentials } from './types';
import { createJsonBodyOptions } from '@/src/utils/request';
import { getPayload } from '@/src/utils/jwt';

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
  const request = createJsonBodyOptions(credentials);

  const response = await fetch(ENDPOINTS.AUTH, request);
  if (!response.ok) throw new Error('usuario y contraseñas incorrectas');

  const auth: ResponseAuth = await response.json();

  const user: PayloadAuth = getPayload(auth.token);
  const tokens = getTokens(auth);

  return { user, tokens };
}

export default auth;
