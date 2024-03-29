import ENDPOINTS from '@/utils/endpoints';
import {
  User,
  ResponseAuth,
  Tokens,
  UserCredentials,
  PayloadAuth,
} from './types';
import { METHODS, Response, createJsonBodyOptions } from '@/utils/request';
import { getPayload } from '@/utils/jwt';

function getTokens(tokens: ResponseAuth): Tokens {
  const bearer_token = tokens.token;
  const refresh_token = tokens.refresh;

  return { bearer_token, refresh_token };
}

interface Result {
  user: User;
  tokens: Tokens;
}
async function auth(credentials: UserCredentials): Promise<Response<Result>> {
  const options = createJsonBodyOptions(credentials);
  const response = await fetch(ENDPOINTS.AUTH, {
    ...options,
    method: METHODS.POST,
  });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const auth: ResponseAuth = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { iat, ...user } = <PayloadAuth>getPayload(auth.token);

  const tokens = getTokens(auth);
  const result = { user, tokens };

  return { isError, status, result };
}

export default auth;
