import React, { useState } from 'react';
import Pedido from "./Order"; 
import './Orders.css'
import json from "../../../assets/pedidos.json";


const Orders = () => {
  const [pedidoss, setPedidoss] = useState(json.pedidos);
  

  return (


   <div>      
      <div className='head-prod'>           
          <p className='set-p'>Gestione las ordenes desde aquí.</p>
          <h1>Ordenes</h1>
      </div>      
          
    <div className='grid'>
      {
        pedidoss.map((order) => {
          return ( 
             <Pedido
               key={order.id}
               id={order.id}
               Fecha_hora={order.Fecha_hora}
               estado={order.estado}
               total={order.total}                                       
             />           
          );  
        })
      }  

    </div>
   </div>
    
  )
}

export default Orders;