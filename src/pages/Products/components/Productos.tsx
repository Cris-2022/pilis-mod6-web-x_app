import { useContext, useEffect, useState } from 'react';
import Producto from './Producto';
import { ProductContex } from '../../../context/product/ProductContex';
import { Product, getProducts } from '@/services/products';
import { ACTIONS } from '@/context/product/reducer/actions';
import { UserContext } from '@/context/user';
import deleteProduct from '@/services/products/deleteProduct';
import './Productos.css';

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
    if (result && result.length > 0) {
      setProductFiltered(result);
    } else {
      setProductFiltered([]);
    };
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (filteredCategory === 'all') {
      if (product.length > 0) {
        setProductFiltered(product)
      } else {
        alert("No hay stock de productos")
      };
    };

    if (filteredCategory === "sandwiches") {
      const sandwiches = product.filter(prod => prod.category === filteredCategory)
      if (sandwiches.length > 0) {
        setProductFiltered(sandwiches)
      } else {
        setProductFiltered([])
        alert("No hay productos relacionados a SANDWICHES")
      };
    };

    if (filteredCategory === "hamburguesas") {
      const hamburguesas = product.filter(prod => prod.category === filteredCategory);
      if (hamburguesas.length > 0) {
        setProductFiltered(hamburguesas);
      } else {
        setProductFiltered([]);
        alert("No hay productos relacionados a HAMBURGUESAS");
      };
    };

    if (filteredCategory === "pizzas") {
      const pizzas = product.filter(prod => prod.category === filteredCategory);
      if (pizzas.length > 0) {
        setProductFiltered(pizzas);
      } else {
        setProductFiltered([]);
        alert("No hay productos relacionados a PIZZAS");
      };
    };

    if (filteredCategory === "bebidas") {
      const bebidas = product.filter(prod => prod.category === filteredCategory);
      if (bebidas.length > 0) {
        setProductFiltered(bebidas);
      } else {
        setProductFiltered([]);
        alert("No hay productos relacionados a BEBIDAS");
      };
    };

    if (filteredCategory === "postres") {
      const postres = product.filter(prod => prod.category === filteredCategory);
      if (postres.length > 0) {
        setProductFiltered(postres);
      } else {
        setProductFiltered([]);
        alert("No hay productos relacionados a POSTRES");
      };
    };
  }, [product, filteredCategory]);

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
    <div className='container bg-light'>
      <div className='head-prod'>
        <p className='set-p'></p>
        <h4 className='title-crud'>Gestión de Productos</h4>
      </div>

      <div className='row p-2'>
        {
          productFiltered.length > 0
          &&
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
        }
      </div>
    </div>
  );
};

export default Productos;
