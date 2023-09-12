import React, { useState } from 'react';
import Producto from "./Producto"; 
import './Productos.css' 
import json from "../../../assets/products.json";


const Productos = () => {
  const [prods, setProds] = useState(json.productos);
  

  return (

   <div className='col-2'>  
      <button className='button-add'>
        Agregar
      </button>
    
    <div className='grid'>
      {
        prods.map((product) => {
          return ( 
             <Producto
               key={product.id}
               nombre={product.nombre}
               imagen={product.img}
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