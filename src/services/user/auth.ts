import ENDPOINTS from '@/src/utils/endpoints';
import { PayloadAuth, ResponseAuth, Tokens, UserCredentials } from './types';
import { Response, createJsonBodyOptions } from '@/src/utils/request';
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
async function auth(credentials: UserCredentials): Promise<Response<Result>> {
  const request = createJsonBodyOptions(credentials);
  const response = await fetch(ENDPOINTS.AUTH, request);

  const status = response.status;
  const isError = response.ok;

  if (isError) return { isError, status };

  const auth: ResponseAuth = await response.json();

  const user: PayloadAuth = getPayload(auth.token);
  const tokens = getTokens(auth);
  const body = { user, tokens };

  return { isError, status, body };
}

export default auth;
