import { METHODS, Response, createJsonBodyOptions } from '@/utils/request';
import ENDPOINTS from '@/utils/endpoints';
import { Order, OrderData } from './types';

type Result = Response<Order>;
const addOrder = async (data: Partial<OrderData>): Promise<Result> => {

  const options = createJsonBodyOptions(data);
  const method = METHODS.POST;

  const response = await fetch(ENDPOINTS.ORDERS, { ...options, method });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const result: Order = await response.json();

  return { isError, status, result };
};

export default addOrder;
