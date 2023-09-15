import PropTypes from "prop-types"
import './Producto.css'


const Producto = ({ nombre, img, categoria, precio, productId, deleteProduct }) => {

  return (
    <div className="cookieCard">
      <h3 className="cookieHeading">{nombre}</h3>
      <h3 className="cookieDescription">imagen: {img}</h3>
      <h3 className="cookieDescription">categoria: {categoria}</h3>
      <h3 className="cookieHeading">precio: {precio} </h3>
      <div className="card-footer">
        <button className='editButton' >Editar</button>
        <button className='deleButton' onClick={() => deleteProduct(productId)}>Eliminar</button>
      </div>
    </div>

  );
};

Producto.propsTypes = {
  productId: PropTypes.string,
  nombre: PropTypes.string,
  categoria: PropTypes.string,
  stock: PropTypes.number,
  img: PropTypes.string,
  precio: PropTypes.number,
  deleteProduct: PropTypes.func
};

export default Producto;
