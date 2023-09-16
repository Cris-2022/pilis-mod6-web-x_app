import './style.css';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import login from '@/assets/login.png';

export default function Header() {
  return (
    <header className='Navigation'>
      <Link to='/'>
        <img src={logo} className='logo' />
      </Link>
      <h1 className='Title'>xApp</h1>

      <Link to='/Login' className='login'>
        <img src={login} alt='' />
        <h3 className='text-login'>Iniciar Sesión</h3>
      </Link>
    </header>
  );
}
