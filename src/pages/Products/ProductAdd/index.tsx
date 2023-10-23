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
import Swal from 'sweetalert2';


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
          stock: data.stock,
        };
        const product: ProductFormData = {
          ...dataProduct,
          image: dataProduct.image[0],
        };

        const token = tokens.bearer_token;
        const { isError, result } = await addProduct(token, product);
        if (isError) {
          dispatch({ type: ACTIONS.ERROR });
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrio un error!',
          })
          return <ErrorMessage status={100} />;
        };
        const getResult = result;
        Swal.fire({
          title: 'Quieres agregar este producto?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          dispatch({
            type: ACTIONS.ADDPRODUCT,
            product: getResult!,
          });
          if (result.isConfirmed) {
            Swal.fire('Producto creado!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          };
        });
      };
    };
    return <ErrorMessage status={400} />;
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
        <input {...register('image')} className='input-form' type='file' />
        <button
          type="submit"
          className='btn-form'
        >
          Guardar cambios
        </button>
      </form>
      <Link to='/products'>
        <button className='back bg-info'>Volver</button>
      </Link>
    </div>
  );
}
