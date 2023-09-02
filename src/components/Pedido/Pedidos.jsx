import React, { useState } from 'react';
import Pedido from "./Pedido"; 
import './Pedidos.css'
import json from "../../assets/pedidos.json";


const Pedidos = () => {
  const [pedidoss, setPedidoss] = useState(json.pedidos);
  

  return (

   <div className='col-5'>  
      <h3>Recepción de Pedidos desde la app mobile</h3>    
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