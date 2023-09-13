import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='Navigation'>
        <Link to='/'>
          <img src='' className='logo' />
          Logo
        </Link>
        <ul>
          <li>
            <Link to='/'>Órdenes</Link>
          </li>
          <li>
            <Link to='/'>Productos</Link>
          </li>
        </ul>
        <h1 className='Title'>xApp</h1>
        <Link to='/Login' className='login'>
          <img src='' alt='' />
          <h3 className='text-login'>Iniciar Sesión</h3>
        </Link>
      </header>
    </>
  );
}
