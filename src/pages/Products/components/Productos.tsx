import { useContext, useEffect } from 'react';
import Producto from "./Producto";
import Form from "./Form";
import './Productos.css'
// import json from "../../../assets/products.json";
import { ProductContex } from '../../../context/product/ProductContex';
import { getProducts } from '@/services/products';
import { ACTIONS } from '@/context/product/reducer/actions';


const Productos = () => {

  const { state, dispatch } = useContext(ProductContex)
  const { product } = state

  const fetchProduct = async () => {
    dispatch({ type: ACTIONS.LOADING })

    const { result, isError } = await getProducts()
    if (isError && !result) dispatch({ type: ACTIONS.ERROR })

    dispatch({
      type: ACTIONS.GETPRODUCTS,
      product: result
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [dispatch]);

  return (

    <div>
      <h1>Gestión de productos</h1>
      <Form/>
      <div className='grid'>
        {
          product.map((product) => {
            return (
              <Producto
                key={product.id}
                nombre={product.name}
                img={product.image}
                categoria={product.category}
                precio={product.price}
              />
            );
          })
        }

      F</div>
    </div>

  )
}

export default Productos;