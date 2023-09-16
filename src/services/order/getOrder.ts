import ENDPOINTS from '@/utils/endpoints';
import { Response, createDataOptionAuth } from '@/utils/request';
import { Order } from './types';

type Result = Response<Order>;
const getOrder = async (token: string, id: string): Promise<Result> => {

  const options = createDataOptionAuth(token)

  const url = `${ENDPOINTS.ORDERS}/${id}`;
  const response = await fetch(url, { ...options });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const result: Order = await response.json();

  return { isError, status, result };
}

export default getOrder;
