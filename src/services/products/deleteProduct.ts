import ENDPOINTS from '@/utils/endpoints';
import { METHODS, Response } from '@/utils/request';

async function deleteProduct(token: string, id: string): Promise<Response> {
  const url = `${ENDPOINTS.PRODUCTS}/${id}`;
  const headers = { Authorization: `Bearer ${token}` };
  const method = METHODS.DELETE;
  const options = { headers, method };

  const response = await fetch(url, options);

  const status = response.status;
  const isError = !response.ok;

  return { status, isError };
}

export default deleteProduct;
