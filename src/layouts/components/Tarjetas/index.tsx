import './style.css';

export const Tarjeta = ({
  name = 'string',
  /* imag */ producto = 'string',
  precio = 'string',
  otros = 'string',
  otros2 = 'string',
}) => {
  return (
    <div className='card-container' id='tarjeta'>
      <div className='card'>
        <h3>{name}</h3>
        {/* <img className="imgs" src={imag} alt="aqui va una imagen" /> */}
        <ul>
          <li>productos: {producto}</li>
          <li>precio: {precio}</li>
          <li>otro: {otros}</li>
          <li>otro2: {otros2}</li>
        </ul>
      </div>
    </div>
  );
};

const CardList = [
  {
    id: 1,
    name: 'Ejemplo',
    // imag: 'https://cf.bstatic.com/images/hotel/840x460/317/317166470.jpg',
    producto: 'XXXXX-XXX',
    precio: 'XXXX',
    otros: 'XXXXX',
    otros2DelViento: 'XXXX',
  },
  {
    id: 2,
    name: 'Ejemplo',
    // imag: 'https://sanpedrodejujuy.gob.ar/wp-content/uploads/2020/07/IMG-20200724-WA0032.jpg',
    producto: 'XXXXX-XXX',
    precio: 'XXXXX',
    otros: 'XXXXX',
    otros2DelViento: 'XXXX',
  },
  {
    id: 3,
    name: 'Ejemplo',
    // imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWQdtOZuSLAEFhE7yiwnktf9TYXSWSQByGQ&usqp=CAU',
    producto: 'XXXXX-XXX',
    precio: 'XXXXXX',
    otros: 'XXXXXX',
    otros2DelViento: 'XXXXX',
  },
  {
    id: 4,
    name: 'Ejemplo',
    // imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdNMk93cbwGQWxZg6fXDT_MWrgWDcvucSp6zBmw0eYoHb7QjzfqSPmjBGRBR204xqnUY&usqp=CAU',
    producto: 'XXXXX-XXX',
    precio: 'XXXXXX',
    otros: 'XXXXXX',
    otros2DelViento: 'XXXXX',
  },
];

export const Tarjetas = () => {
  return CardList.map(card => (
    <Tarjeta
      name={card.name}
      /* imag={card.imag}  */ producto={card.producto}
      precio={card.precio}
      otros={card.otros}
      otros2={card.otros2DelViento}
      key={card.id}
    />
  ));
};
