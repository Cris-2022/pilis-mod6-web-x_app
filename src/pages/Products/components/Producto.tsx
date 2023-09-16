import { useNavigate } from 'react-router-dom';
import './Producto.css';

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

  const click = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className='cookieCard2'>
      <p className='cookieHeading'>{nombre}</p>
      <div className='card-image-container'>
        <img className='card-image' src={img} alt={`imagen - ${nombre}`} />
      </div>
      <p className='cookieDescription'>categoria: {categoria}</p>
      <p className='cookieHeading'>precio: {precio} </p>
      <div className='card-footer'>
        <button className='editButton' onClick={click}>
          Editar
        </button>
        <button className='deleButton' onClick={() => deleteProduct(productId)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Producto;
