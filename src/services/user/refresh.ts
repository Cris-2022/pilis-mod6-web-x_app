import { METHODS, Response, createJsonBodyOptionsAuth } from '@/utils/request';

import { PayloadAuth, User } from './types';
import ENDPOINTS from '@/utils/endpoints';
import { getPayload } from '@/utils/jwt';

interface Result {
  user: User;
  bearer_token: string;
}

async function refresh(refresh_token: string): Promise<Response<Result>> {
  const options = createJsonBodyOptionsAuth(refresh_token);
  const method = METHODS.PUT;

  const response = await fetch(ENDPOINTS.AUTH, { ...options, method });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const { token: bearer_token } = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { iat, ...user } = <PayloadAuth>getPayload(bearer_token);
  const result = { user, bearer_token };

  return { isError, status, result };
}

export default refresh;
