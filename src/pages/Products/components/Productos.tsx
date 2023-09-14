import React, { useState } from 'react';
import Producto from "./Producto"; 
import './Productos.css' 
import json from "../../../assets/products.json";


const Productos = () => {
  const [prods, setProds] = useState(json.productos);
  

  return (

   <div> 
      <div className='head-prod'>         
         <button className='button-new'>Agregar</button>
         <h2>Gestión de productos</h2>
      </div>
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