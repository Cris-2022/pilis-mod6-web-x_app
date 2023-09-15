import { METHODS, Response, createFormDataOptionAuth } from '@/utils/request';
import { Product, ProductFormData } from './types';
import ENDPOINTS from '@/utils/endpoints';

type Result = Response<Product>;
async function addProduct(
  token: string,
  data: Partial<ProductFormData>,
): Promise<Result> {
  const formData = new FormData();
  // const {image} = data

  if (data.name) formData.append('name', data.name);
  if (data.price) formData.append('price', data.price.toString());
  if (data.stock) formData.append('stock', data.stock.toString());
  if (data.category) formData.append('category', data.category);
  if (data.image) formData.append('product', (data.image));
  
  const options = createFormDataOptionAuth(token, formData);
  const method = METHODS.POST;

  const response = await fetch(ENDPOINTS.PRODUCTS, { ...options, method });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { isError, status };

  const result: Product = await response.json();
  result.image = `${ENDPOINTS.PUBLIC}/${result.image}`;

  return { isError, status, result };
}

export default addProduct;
