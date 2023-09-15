import { useState } from 'react';
import Producto from "./Producto"; 
import Form from "./Form";
import './Productos.css' 
import json from "../../../assets/products.json";


const Productos = () => {
const [prods, setProds] = useState(json.productos);
  

  return (

   <div> 
      <h1>Gestión de productos</h1>
      <Form/>      
    <div className='grid'>
      {
        prods.map((product) => {
          return ( 
             <Producto
               key={product.id}
               nombre={product.nombre}
               img={product.img}
               categoria={product.categoria}
               precio={product.precio}          
             />           
          );  
        })
      }  

    </div>
   </div>
    
  )
}

export default Productos;