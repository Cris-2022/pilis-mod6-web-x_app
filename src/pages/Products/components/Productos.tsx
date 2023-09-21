import { useContext, useEffect, useState } from 'react';
import Producto from "./Producto";
import { ProductContex } from '../../../context/product/ProductContex';
import { Product, getProducts } from '@/services/products';
import { ACTIONS } from '@/context/product/reducer/actions';
import { UserContext } from '@/context/user';
import deleteProduct from '@/services/products/deleteProduct';
import './Productos.css'


interface ProductsProps {
  filteredCategory: string | null;
};

const Productos = ({ filteredCategory }: ProductsProps) => {
  const { state, dispatch } = useContext(ProductContex);
  const { tokens } = useContext(UserContext);
  const [productFiltered, setProductFiltered] = useState<Product[]>([]);

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

  useEffect(() => {
    if (filteredCategory === "all") {
      setProductFiltered(product)
    }
    else {
      const productFilter = product.filter(item => item.category === filteredCategory)
      if (productFilter.length > 0) {
        setProductFiltered(productFilter)
      }
      return;
    }
  }, [product, filteredCategory]);

  const handleDelete = async (id: string) => {
    dispatch({ type: ACTIONS.LOADING });
    if (tokens) {
      const token = tokens.bearer_token;
      const { isError } = await deleteProduct(token, id);
      if (isError) {
        alert('Error');
        return dispatch({ type: ACTIONS.ERROR });
      };
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
      <div className='grid'>
        {
          (productFiltered.length > 0)
            ?
            productFiltered.map((product: Product) => {
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
            })
            :
            product.map((product: Product) => {
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
            })
        }
      </div>
    </div>
  );
};

export default Productos;
