import ENDPOINTS from '@/utils/endpoints';
import { METHODS, Response, createFormDataOptionAuth } from '@/utils/request';
import { ProductFormData } from './types';

type Result = Response;
async function updateProduct(
  token: string,
  id: string,
  data: Partial<ProductFormData>,
): Promise<Result> {
  const formData = new FormData();

  if (data.category) formData.append('category', data.category);
  if (data.name) formData.append('name', data.name);
  if (data.price) formData.append('price', data.price.toString());
  if (data.image) formData.append('product', data.image);
  if (data.stock) formData.append('stock', data.stock.toString());

  const url = `${ENDPOINTS.PRODUCTS}/${id}`;
  const options = createFormDataOptionAuth(token, formData);
  const method = METHODS.PUT;

  const response = await fetch(url, { ...options, method });

  const status = response.status;
  const isError = !response.ok;

  return { isError, status };
}

export default updateProduct;
