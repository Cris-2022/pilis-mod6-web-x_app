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

  const editProduct = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <article
      className='card bg-secondary col-lg-4 col-md-6 col-xl-3 border-5'
      style={{ width: '18rem;', backgroundColor: '#8F78C6' }}
    >
      <h5 className='mt-2'>{nombre}</h5>

      <div className='card-image-container'>
        <img className='card-image mt-2' src={img} alt={`imagen - ${nombre}`} />
      </div>
      <h6 className='mt-3'>Categoría: {categoria}</h6>
      <h5 className='text-success precio-prod'>Total: $ {precio} </h5>
      <div className='card-footer'>
        <button className='editButton' onClick={editProduct}>
          Editar
        </button>
        <button className='deleButton' onClick={() => deleteProduct(productId)}>
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default Producto;
