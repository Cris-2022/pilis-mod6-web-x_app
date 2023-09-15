
import './Producto.css'



const Producto = ({ nombre, img, categoria, precio }) => {
    
  return (
<div className="cookieCard">
      <h3 className="cookieHeading">{nombre}</h3>
      <h3 className="cookieDescription">imagen: {img}</h3>
      <h3 className="cookieDescription">categoria: {categoria}</h3>
      <h3 className="cookieHeading">precio: {precio} </h3>
      <div className="card-footer">
         <button className='editButton'>Editar</button>
         <button className='deleButton'>Eliminar</button>
      </div>      
      
     
</div>

  )
}

export default Producto;