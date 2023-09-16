import { useContext, useEffect } from 'react';
import Producto from './Producto';
import Form from './Form';
import './Productos.css';
import { ProductContex } from '../../../context/product/ProductContex';
import { Product, getProducts } from '@/services/products';
import { ACTIONS } from '@/context/product/reducer/actions';
import { UserContext } from '@/context/user';
import deleteProduct from '@/services/products/deleteProduct';

const Productos = () => {
  const { state, dispatch } = useContext(ProductContex);
  const { tokens } = useContext(UserContext);

  const { product } = state;

  const fetchProduct = async () => {
    dispatch({ type: ACTIONS.LOADING });

    const { result, isError } = await getProducts();
    if (isError && !result) dispatch({ type: ACTIONS.ERROR });

    dispatch({
      type: ACTIONS.GETPRODUCTS,
      product: result!,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDelete = async (id: string) => {
    dispatch({ type: ACTIONS.LOADING });
    if (tokens) {
      const token = tokens.bearer_token;
      const { isError } = await deleteProduct(token, id);
      if (isError) {
        alert('Error');
        return dispatch({ type: ACTIONS.ERROR });
      }
      dispatch({
        type: ACTIONS.DELETEPRODUCT,
        payload: id,
      });
      alert('Producto eliminado');
    }
  };

  return (
    <div>
      <h1>Gestión de productos</h1>
      <Form />
      <div className='grid'>
        {product.map((product: Product) => {
          console.log('PRODUCT', product);
          return (
            <Producto
              key={product.id}
              productId={product.id}
              nombre={product.name}
              img={product.image}
              categoria={product.category}
              precio={product.price}
              deleteProduct={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
