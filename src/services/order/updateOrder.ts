import ENDPOINTS from '@/utils/endpoints';
import { METHODS, Response, createJsonBodyOptions } from '@/utils/request';
type Status = 'processed' | 'finished';

type Result = Response;
const updateOrder = async (id: string, status: Status): Promise<Result> => {
  const url = `${ENDPOINTS.ORDERS}/${id}`;
  const options = createJsonBodyOptions({ status });
  const method = METHODS.PUT;

  const response = await fetch(url, { ...options, method });

  const _status = response.status;
  const isError = !response.ok;

  return { isError, status: _status };
};

export default updateOrder;
