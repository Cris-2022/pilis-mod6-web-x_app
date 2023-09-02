import React, { useState } from 'react';
import Pedido from "./Pedido"; 
import './Pedidos.css'
import json from "../../assets/pedidos.json";


const Pedidos = () => {
  const [pedidoss, setPedidoss] = useState(json.pedidos);
  

  return (

   <div className='col-3'>
      <h2>Ordenes</h2> 
      <h6>Gestione las ordenes desde aquí.</h6>    
    <div className='grid'>
      {
        pedidoss.map((product) => {
          return ( 
             <Pedido
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

export default Pedidos;