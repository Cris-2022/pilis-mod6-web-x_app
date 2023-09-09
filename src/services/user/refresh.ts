import {
  METHODS,
  createJsonBodyOptionsAuth,
} from '@/src/utils/request-options';

import { PayloadAuth } from './types';
import ENDPOINTS from '@/src/utils/endpoints';
import { getPayload } from '@/src/utils/jwt';

interface Result {
  user: PayloadAuth;
  bearer_token: string;
}

async function refresh(refresh_token: string): Promise<Result> {
  const options = createJsonBodyOptionsAuth(refresh_token);
  const response = await fetch(ENDPOINTS.AUTH, {
    ...options,
    method: METHODS.PUT,
  });

  if (!response.ok)
    throw new Error('Operación fallida, vuelva a iniciar sesión');

  const { token: bearer_token } = await response.json();
  const user: PayloadAuth = getPayload(bearer_token);

  return { user, bearer_token };
}

export default refresh;
