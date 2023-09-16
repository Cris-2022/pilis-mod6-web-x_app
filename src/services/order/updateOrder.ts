import ENDPOINTS from '@/utils/endpoints';
import { METHODS, Response, createJsonBodyOptions } from '@/utils/request';
import { Order } from './types';

type Result = Response;
const updateOrder = async (
  id: string,
  data: Partial<Order>,
): Promise<Result> => {

  const url = `${ENDPOINTS.ORDERS}/${id}`;
  const options = createJsonBodyOptions(data);
  const method = METHODS.PUT;

  const response = await fetch(url, { ...options, method });

  const status = response.status;
  const isError = !response.ok;

  return { isError, status };
}

export default updateOrder;
