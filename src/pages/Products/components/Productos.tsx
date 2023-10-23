import { useContext, useEffect, useState } from 'react';
import Producto from './Producto';
import { ProductContex } from '../../../context/product/ProductContex';
import { Product, getProducts } from '@/services/products';
import { ACTIONS } from '@/context/product/reducer/actions';
import { UserContext } from '@/context/user';
import deleteProduct from '@/services/products/deleteProduct';
import './Productos.css';
import Swal from 'sweetalert2';
import IsLoading from './IsLoading';


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

  const handleDelete = async (id: string) => {
    dispatch({ type: ACTIONS.LOADING });

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed && tokens) {
        const token = tokens.bearer_token;
        const { isError } = await deleteProduct(token, id);
        if (isError) {
          alert('Error');
          return dispatch({ type: ACTIONS.ERROR });
        }
        else {
          dispatch({
            type: ACTIONS.DELETEPRODUCT,
            payload: id,
          });
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        };
      };
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (filteredCategory === 'all') {
      if (product.length > 0) {
        setProductFiltered(product)
      } else {
        setProductFiltered([])
      };
    };

    if (filteredCategory === "sandwiches") {
      const sandwiches = product.filter(prod => prod.category === filteredCategory)
      if (sandwiches.length > 0) {
        setProductFiltered(sandwiches)
      } else {
        setProductFiltered([])
      };
    };

    if (filteredCategory === "hamburguesas") {
      const hamburguesas = product.filter(prod => prod.category === filteredCategory);
      if (hamburguesas.length > 0) {
        setProductFiltered(hamburguesas);
      } else {
        setProductFiltered([]);
      };
    };

    if (filteredCategory === "pizzas") {
      const pizzas = product.filter(prod => prod.category === filteredCategory);
      if (pizzas.length > 0) {
        setProductFiltered(pizzas);
      } else {
        setProductFiltered([]);
      };
    };

    if (filteredCategory === "bebidas") {
      const bebidas = product.filter(prod => prod.category === filteredCategory);
      if (bebidas.length > 0) {
        setProductFiltered(bebidas);
      } else {
        setProductFiltered([]);
      };
    };

    if (filteredCategory === "postres") {
      const postres = product.filter(prod => prod.category === filteredCategory);
      if (postres.length > 0) {
        setProductFiltered(postres);
      } else {
        setProductFiltered([]);
      };
    };
  }, [product, filteredCategory]);


  return (
    <div className='container bg-light'>
      <div className='head-prod'>
        <p className='set-p'></p>
        <h4 className='title-crud'>Gestión de Productos</h4>
        <IsLoading/>
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
