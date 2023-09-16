import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './style.css';
import { categories } from '@/utils/productCategory';
import { UserContext } from '@/context/user';
import { useContext } from 'react';
import { ACTIONS } from '@/context/product/reducer/actions';
import { ProductContex } from '@/context/product/ProductContex';
import { ProductFormData } from '@/services/products';
import updateProduct from '@/services/products/updateProduct';


type FormValues = {
  name: string;
  category: string;
  price: number;
  image: FileList;
  stock: number;
};

export default function ProductUpdate() {

  const { tokens } = useContext(UserContext);
  const { dispatch } = useContext(ProductContex);
  const { register, handleSubmit } = useForm<FormValues>({});
  const params = useParams()
  const navigate = useNavigate()

  const productId = params.id

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
        };
        dispatch({
          type: ACTIONS.UPDATE_PRODUCT
        });
        alert("Producto Actualizado");
      }
    }
    navigate("/products/")
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
        <select {...register('category')}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
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
          placeholder='************'
        />
        <button className='btn-form'>Guardar cambios</button>
      </form>
      <Link to='/'>
        <button className='back'>Volver</button>
      </Link>
    </div>
  );
}
