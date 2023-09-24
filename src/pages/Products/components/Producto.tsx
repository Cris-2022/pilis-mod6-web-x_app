import { useNavigate } from 'react-router-dom';
import './Producto.css';
import { Row } from 'react-bootstrap';

interface Props {
  nombre: string;
  img: string;
  categoria: string;
  precio: number;
  productId: string;
  deleteProduct: (id: string) => void;
}

const Producto = ({
  nombre,
  img,
  categoria,
  precio,
  productId,
  deleteProduct,
}: Props) => {
  const navigate = useNavigate();

  const editProduct = () => {
    navigate(`/product/${productId}`)
  };

  return (

    <Row className="container justify-content-md-center">
    <div className="card text-black mb-3 bg-light" Style="max-width: 20rem;">

      <h4>{nombre}</h4>

      <div className='card-image-container'>
        <img className='card-image' src={img} alt={`imagen - ${nombre}`} />
      </div>

      <p className='cookieDescription'>Categoría: {categoria}</p>
      <p className='cookieHeading'>Precio: $ {precio} </p>
      <div className='card-footer'>
        <button className='editButton' onClick={editProduct}>Editar</button>
        <button className='deleButton' onClick={() => deleteProduct(productId)}>
          Eliminar
        </button>
      </div>
    </div>
    </Row>
  );
};

export default Producto;
