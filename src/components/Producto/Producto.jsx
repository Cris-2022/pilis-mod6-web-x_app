import React from 'react';
import './Producto.css'



const Producto = ({ nombre, img, categoria, precio }) => {
    
  return (
<div class="cookieCard">
      <h3 class="cookieHeading">{nombre}</h3>
      <h3 class="cookieDescription">imagen: {img}</h3>
      <h3 class="cookieDescription">categoria: {categoria}</h3>
      <h3 class="cookieHeading">precio: {precio} </h3>
      <div class="card-footer">
         <button className='acceptButton'>Editar</button>
         <button className='delButton'>Eliminar</button>
      </div>      
      
     
</div>

  )
}

export default Producto;