import './Order.css'

const Order = ({ id, Fecha_hora, estado, total }) => {
    
  return (
<div className="cookieCard">
      <h2 >Orden id: {id}</h2>
      <h4 >Fecha y hora:{Fecha_hora} </h4>
      <h4 >Estado: {estado}</h4>
      <h3 >Total: {total} </h3>
      <div className="card-footer">
         <button className='editButton'>Cambiar estado</button>
      </div>    
           
</div>

  )
}

export default Order;