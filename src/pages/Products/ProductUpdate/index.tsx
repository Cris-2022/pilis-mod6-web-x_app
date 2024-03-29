import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './style.css';
import { UserContext } from '@/context/user';
import { useContext, useEffect } from 'react';
import { ACTIONS } from '@/context/product/reducer/actions';
import { ProductContex } from '@/context/product/ProductContex';
import { ProductFormData, getProduct } from '@/services/products';
import updateProduct from '@/services/products/updateProduct';
import ErrorMessage from './ErrorMessage';
import { SelectCategory } from '../components/SelectCategory';
import { FormValues } from '../ProductAdd/typesProductForm';

export default function ProductUpdate() {
  const { tokens } = useContext(UserContext);
  const { dispatch } = useContext(ProductContex);
  const { register, handleSubmit, reset, control, setValue } =
    useForm<FormValues>({});

  const params = useParams();
  const navigate = useNavigate();

  const productId = params.id;
  useEffect(() => {
    const getDefaultValue = async () => {
      if (productId) {
        const product = await getProduct(productId);
        const { result } = product;
        if (result) {
          const defaultValues = {
            name: result.name,
            category: result.category,
            price: result.price,
            stock: result.stock,
          };
          reset(defaultValues);
          // setValue("categories", defaultValues.category)
        }
      }
      <ErrorMessage status={100} />;
    };
    getDefaultValue();
  }, [reset, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async data => {
    dispatch({ type: ACTIONS.LOADING });
    if (tokens) {
      const product: ProductFormData = {
        ...data,
        image: data.image[0],
      };
      const token = tokens.bearer_token;
      if (productId) {
        const { isError } = await updateProduct(token, productId, product);
        if (isError) {
          alert(JSON.stringify(isError));
          return dispatch({ type: ACTIONS.ERROR });
        }
        dispatch({
          type: ACTIONS.UPDATE_PRODUCT,
        });
        alert('Producto Actualizado');
      }
    }
    navigate('/products');
  };

  return (
    <div className='sign-in-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='sign-in-form'>
        <span>Nombre del producto</span>
        <input
          {...register('name', { required: true })}
          className='input-form bg-white'
          type='text'
          placeholder='ej: Nueva hamburguesa Dibu'
        />
        <span>Seleccione categoria</span>
        <SelectCategory controler={control} />
        <span>Ingrese precio</span>
        <input
          {...register('price', { required: true })}
          className='input-form bg-white'
          type='text'
        />
        <span>Ingresar nuevo Stock</span>
        <input
          {...register('stock', { required: true })}
          className='input-form bg-white'
          type='number'
        />
        <span>Cambiar imagen</span>
        <input
          {...register('image')}
          className='input-form'
          type='file'
          placeholder='************'
        />
        <button className='btn-form'>Guardar cambios</button>
      </form>
      <Link to='/products'>
        <button className='back bg-info'>Volver</button>
      </Link>
    </div>
  );
}
