import ENDPOINTS from '@/utils/endpoints';
import { Product } from './types';
import { Response } from '@/utils/request';

type Result = Response<Product[]>;
async function getProducts(): Promise<Result> {
  const response = await fetch(ENDPOINTS.PRODUCTS);

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const _result: Product[] = await response.json();
  const result = _result.map(p => {
    p.image = `${ENDPOINTS.PUBLIC}/${p.image}`;
    return p;
  });

  return { isError, status, result };
}

export default getProducts;
