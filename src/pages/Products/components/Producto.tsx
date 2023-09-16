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

  const navigate = useNavigate()

  const click = () => {
    navigate(`/product/${productId}`)
  };

  return (
    <div className='cookieCard'>
      <h3 className='cookieHeading'>{nombre}</h3>
      <h3 className='cookieDescription'>imagen: {img}</h3>
      <h3 className='cookieDescription'>categoria: {categoria}</h3>
      <h3 className='cookieHeading'>precio: {precio} </h3>
      <div className='card-footer'>
        <button className='editButton' onClick={click}>Editar</button>
        <button className='deleButton' onClick={() => deleteProduct(productId)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Producto;
