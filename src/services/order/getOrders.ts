import ENDPOINTS from '@/utils/endpoints';
import { Response, createDataOptionAuth } from '@/utils/request';
import { Order } from './types';

type Result = Response<Order[]>;
const getOrders = async (token: string): Promise<Result> => {
  const options = createDataOptionAuth(token);

  const response = await fetch(ENDPOINTS.ORDERS, { ...options });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const result: Order[] = await response.json();

  return { isError, status, result };
}

export default getOrders;
