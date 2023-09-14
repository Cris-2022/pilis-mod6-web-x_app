import { useContext, useEffect } from 'react';
import Producto from "./Producto";
import './Productos.css'
// import json from "../../../assets/products.json";
import { ProductContex } from '../../../context/product/ProductContex';
import { getProducts } from '@/services/products';


const Productos = () => {
  // const [product, setProds] = useState(json.productos);

  const { state, dispatch } = useContext(ProductContex)
  const { product } = state
  const fetchProduct = async () => {
    const { result } = await getProducts()
    if (result)
      dispatch({ type: "GET - product", payload: result })
  }
  useEffect(() => {
    fetchProduct()
  }, [dispatch])


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