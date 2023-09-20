import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './style.css';
import { UserContext } from '@/context/user';
import { useContext } from 'react';
import { ACTIONS } from '@/context/product/reducer/actions';
import { ProductContex } from '@/context/product/ProductContex';
import { ProductFormData, addProduct } from '@/services/products';
import { SelectCategory } from '../components/SelectCategory';
import { FormValues } from './typesProductForm';
import ErrorMessage from './ErrorMessage';


export default function ProductAdd() {

  const { tokens } = useContext(UserContext);
  const { dispatch } = useContext(ProductContex);
  const { register, handleSubmit, control } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = async data => {
    dispatch({ type: ACTIONS.LOADING });
    if (tokens) {
      if (data.categories) {

        const dataProduct: FormValues = {
          name: data.name,
          category: data.categories.value,
          price: data.price,
          image: data.image,
          stock: data.stock
        };
        const product: ProductFormData = {
          ...dataProduct,
          image: dataProduct.image[0],
        };

        const token = tokens.bearer_token;
        const { isError, result } = await addProduct(token, product);
        if (isError) {
          dispatch({ type: ACTIONS.ERROR });
          return (
            <ErrorMessage status={100} />
          )
        }
        dispatch({
          type: ACTIONS.ADDPRODUCT,
          product: result
        });
        alert("Porducto Creado");
      }
    };
    return (
      <ErrorMessage status={400} />
    )
  };
  

  return (
    <div className='sign-in-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='sign-in-form'>
        <span>Nombre del producto</span>
        <input
          {...register('name', { required: true })}
          className='input-form'
          type='text'
          placeholder='ej: Nueva hamburguesa Dibu'
        />
        <span>Seleccione categoria</span>
        <SelectCategory controler={control} />
        <span>Ingrese precio</span>
        <input
          {...register('price', { required: true })}
          className='input-form'
          type='text'
        />
        <span>Ingresar nuevo Stock</span>
        <input
          {...register('stock', { required: true })}
          className='input-form'
          type='number'
        />
        <span>Cambiar imagen</span>
        <input
          {...register('image')}
          className='input-form'
          type='file'
        />
        <button className='btn-form'>Guardar cambios</button>
      </form>
      <Link to='/products'>
        <button className='back'>Volver</button>
      </Link>
    </div>
  );
};
