import { useState } from 'react';
import Producto from "./Producto"; 
import './Productos.css' 
import json from "../../../assets/products.json";


const Productos = () => {
  const [prods, setProds] = useState(json.productos);
  

  return (

   <div> 
      <h1>Gestión de productos</h1>
      <div className='head-prod'>        
          <input type="text" placeholder='ingrese nombre' name="" id="" />
          <select>
              <option value=''>-- Categoria --</option>               
          </select>
          <input className="precio" type="text" placeholder='ingresar precio' name="" id="" />          
          <input type="file" name="" id="" /> 
                    
          <button className='button-new'>Agregar</button>
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