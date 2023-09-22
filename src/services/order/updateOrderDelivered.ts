import ENDPOINTS from '@/utils/endpoints';
import { METHODS, Response, createDataOptionAuth } from '@/utils/request';

type Result = Response;
const updateDeliveredOrder = async (id: string, token: string): Promise<Result> => {
  const url = `${ENDPOINTS.DELIVER}/${id}`;
  const options = createDataOptionAuth(token);
  const method = METHODS.PUT;

  const response = await fetch(url, { ...options, method });
  console.log("RESPONSE", response)

  const _status = response.status;
  const isError = !response.ok;

  return { isError, status: _status };
};

export default updateDeliveredOrder;
