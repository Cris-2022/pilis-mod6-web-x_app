import ENDPOINTS from '@/utils/endpoints';
import { Response } from '@/utils/request';
import { Product } from './types';

type Result = Response<Product>;
async function getProduct(id: string): Promise<Result> {
  const url = `${ENDPOINTS.PRODUCTS}/${id}`;
  const response = await fetch(url);

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const result: Product = await response.json();
  result.image = `${ENDPOINTS.PUBLIC}/${result.image}`;

  return { isError, status, result };
}

export default getProduct;
