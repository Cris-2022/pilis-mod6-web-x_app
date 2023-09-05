import './Tarjetas.css'

export const Tarjeta = ({ name, /* imag */ latitud, longitud, temperatura, velocidad }) => {

    return (
        <div className="card-container" id="tarjeta">
            <div className='card'>
                <h3>{name}</h3>
                {/* <img className="imgs" src={imag} alt="aqui va una imagen" /> */}
                <ul>
                    <li>productos: {latitud}</li>
                    <li>precio: {longitud}</li>
                    <li>estimado: {temperatura}</li>
                    <li>Vel. del Viento: {velocidad}</li>
                </ul>
            </div>
        </div>
    );
}

const CardList = [
    {
        id: 1,
        name: 'Ejemplo',
                // imag: 'https://cf.bstatic.com/images/hotel/840x460/317/317166470.jpg',
        Latitud: '-24.19457',
        Longitud: '-65.29712',
        Temperatura: '24°',
        VelocidadDelViento: '6 km/h',
    },
    {
        id: 2,
        name: 'Ejemplo',
                // imag: 'https://sanpedrodejujuy.gob.ar/wp-content/uploads/2020/07/IMG-20200724-WA0032.jpg',
        Latitud: '-24.2333',
        Longitud: '-64.8667 24',
        Temperatura: '29°',
        VelocidadDelViento: '10 km/h',
    },
    {
        id: 3,
        name: 'Ejemplo',
                // imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWQdtOZuSLAEFhE7yiwnktf9TYXSWSQByGQ&usqp=CAU',
        Latitud: '-24.25647',
        Longitud: '-65.21163',
        Temperatura: '23°',
        VelocidadDelViento: '5 km/h',
    },
    {
        id: 4,
        name: 'Ejemplo',
                // imag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdNMk93cbwGQWxZg6fXDT_MWrgWDcvucSp6zBmw0eYoHb7QjzfqSPmjBGRBR204xqnUY&usqp=CAU',
        Latitud: '-23.8',
        Longitud: '-64.7833',
        Temperatura: '28°',
        VelocidadDelViento: '7 km/h',
    },
]

export const Tarjetas = () => {

    return (
        CardList.map(card =>
            <Tarjeta id={card.id} name={card.name} /* imag={card.imag}  */latitud={card.Latitud} longitud={card.Longitud} temperatura={card.Temperatura} velocidad={card.VelocidadDelViento} key={card.id} />)
    )
}

