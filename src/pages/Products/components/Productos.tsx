import { useContext, useEffect } from 'react';
import Producto from "./Producto";
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
      <div className='head-prod'>
        <button className='button-new'>Agregar</button>
        <h2>Gestión de productos</h2>
      </div>
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

      </div>
    </div>

  )
}

export default Productos;