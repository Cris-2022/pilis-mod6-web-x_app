import { METHODS, Response, createFormDataOptionAuth } from '@/utils/request';
import { UserFormData } from './types';
import ENDPOINTS from '@/utils/endpoints';

async function update(
  bearer_token: string,
  data: Partial<UserFormData>,
): Promise<Response> {
  const formData = new FormData();

  if (data.avatar) formData.append('avatar', data.avatar);
  if (data.username) formData.append('username', data.username);
  if (data.password) formData.append('password', data.password);

  const options = createFormDataOptionAuth(bearer_token, formData);
  const method = METHODS.PUT;

  const response = await fetch(ENDPOINTS.USER, { ...options, method });

  const status = response.status;
  const isError = !response.ok;

  return { status, isError };
}

export default update;
