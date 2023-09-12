import {
  METHODS,
} from '@/src/utils/request';
import ENDPOINTS from '@/src/utils/endpoints';

export const get = async () => {

  const method = METHODS.GET;

  const response = await fetch(ENDPOINTS.PRODUCTS, { method });

  const result = await response.json();
  console.log(result)
  const isError = response.ok;

  return { isError, result };
};
