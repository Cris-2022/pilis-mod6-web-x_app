import { ProductFormData, addProduct } from '@/services/products';
import './Form.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '@/context/user';
import { ACTIONS } from '@/context/product/reducer/actions';
import { ProductContex } from '@/context/product/ProductContex';
import { categories } from '@/utils/productCategory';

type FormValues = {
  name: string;
  category: string;
  price: number;
  image: FileList;
  stock: number;
};

const Form = () => {
  const { dispatch } = useContext(ProductContex);
  const { register, handleSubmit } = useForm<FormValues>({});
  const { tokens } = useContext(UserContext);

  const onSubmit: SubmitHandler<FormValues> = async data => {
    dispatch({ type: ACTIONS.LOADING });
    if (tokens) {
      const product: ProductFormData = {
        ...data,
        image: data.image[0],
      };

      const token = tokens.bearer_token;
      const { isError, result } = await addProduct(token, product);
      if (isError) {
        alert(JSON.stringify(result));
        return dispatch({ type: ACTIONS.ERROR });
      }
      dispatch({
        type: ACTIONS.ADDPRODUCT,
        product: result!,
      });
      alert(JSON.stringify(result));
    }
  };

  return (
    <div className='head-prod'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Product name'
          id='name'
          {...register('name', { required: 'The name es required' })}
        />
        <select {...register('category')}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          className='precio'
          type='text'
          placeholder='ingresar precio'
          id='price'
          {...register('price', { required: 'The price es required' })}
        />
        <input
          type='number'
          placeholder='ingrese Stock'
          id='stock'
          {...register('stock', { required: 'The stock es required' })}
        />
        <input type='file' id='imageInput' {...register('image')} />
        <button className='button-new' type='submit'>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Form;
