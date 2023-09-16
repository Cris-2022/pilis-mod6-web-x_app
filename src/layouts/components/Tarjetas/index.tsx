import './style.css';
import img1 from '../../../assets/Tarjetas/img-1.png';
import img2 from '@/assets/Tarjetas/img-2.png';
import img3 from '@/assets/Tarjetas/img-3.png';

export const Tarjeta = ({
  name = 'string',
  imag = 'string',
  producto = 'string',
  precio = 'string',
}) => {
  return (
    <div className='card-container' id='tarjeta'>
      <div className='card'>
        <h3>{name}</h3>
        <img className='imgs' src={imag} alt='imagen' />
        <ul>
          <li>productos: {producto}</li>
          <li>precio: {precio}</li>
        </ul>
      </div>
    </div>
  );
};

const CardList = [
  {
    id: 1,
    name: 'Hamburgesa',
    imag: img1,
    producto: 'fast food',
    precio: '1500',
  },
  {
    id: 2,
    name: 'Pizza',
    imag: img2,
    producto: 'fast food',
    precio: '1200',
  },
  {
    id: 3,
    name: 'Super Pancho',
    imag: img3,
    producto: 'fast food',
    precio: '1500',
  },
  {
    id: 4,
    name: 'Hamburgesa XL',
    imag: img1,
    producto: 'fast food',
    precio: '2500',
  },
];

export const Tarjetas = () => {
  return CardList.map(card => (
    <Tarjeta
      name={card.name}
      imag={card.imag}
      producto={card.producto}
      precio={card.precio}
      key={card.id}
    />
  ));
};
