import { Response } from '@/utils/request';
import { Ticket } from './types';
import ENDPOINTS from '@/utils/endpoints';

type Result = Response<Ticket>;
async function getTicket(token: string, code: string): Promise<Result> {
  const url = `${ENDPOINTS.CODE_TICKET}/${code}`;

  const headers = { Authorization: `Bearer ${token}` };
  const options = { headers };

  const response = await fetch(url, options);

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const result: Ticket = await response.json();

  return { status, isError, result };
}

export default getTicket;
