import React, { useState } from 'react';
import Producto from "./Producto"; 
import './Productos.css'
import json from "../../assets/products.json";


const Productos = () => {
  const [prods, setProds] = useState(json.productos);
  

  return (

   <div>    
      <button className='button-add'>
       Nuevo
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