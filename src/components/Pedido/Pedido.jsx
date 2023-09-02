import React from 'react';
import './Pedido.css'



const Pedido = ({ nombre, img, categoria, precio }) => {
    
  return (
<div class="cookieCard">
      <h3 class="cookieHeading">{nombre}</h3>
      <h2 class="cookieDescription">Detalle Pedido: {img}</h2>
      <h3 class="cookieDescription">Estado: {categoria}</h3>
      <h3 class="cookieHeading">Importe: {precio} </h3>
      <div class="card-footer">
         <button className='acceptButton'>Cambiar estado</button>
      </div>      
      
     
</div>

  )
}

export default Pedido;