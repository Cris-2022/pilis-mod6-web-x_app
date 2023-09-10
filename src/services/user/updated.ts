import {
  METHODS,
  Response,
  createFormDataOptionAuth,
} from '@/src/utils/request';
import { UserFormData } from './types';
import ENDPOINTS from '@/src/utils/endpoints';

interface Body {
  message: string;
}

async function updateUser(
  bearer_token: string,
  data: Partial<UserFormData>,
): Promise<Response<Body>> {
  const formData = new FormData();

  if (data.avatar) formData.append('avatar', data.avatar);
  if (data.username) formData.append('username', data.username);
  if (data.password) formData.append('password', data.password);

  const options = createFormDataOptionAuth(bearer_token, formData);
  const response = await fetch(ENDPOINTS.USER, {
    ...options,
    method: METHODS.PUT,
  });

  const status = response.status;
  if (response.ok) return { isError: false, status };

  const body = await response.json();
  return { isError: true, status, body };
}

export default updateUser;
