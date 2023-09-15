import ENDPOINTS from '@/utils/endpoints';
import { Response } from '@/utils/request';

type Result = Response;
async function deliver(token: string, id: string): Promise<Result> {
  const url = `${ENDPOINTS.DELIVER}/${id}`;

  const headers = { Authorization: `Bearer ${token}` };
  const options = { headers };

  const response = await fetch(url, options);

  const status = response.status;
  const isError = !response.ok;

  return { status, isError };
}

export default deliver;
