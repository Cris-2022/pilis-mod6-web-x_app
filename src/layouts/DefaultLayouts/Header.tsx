import './style.css';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import login from '@/assets/login.png';

export default function Header() {
  return (
    <>
    <header>      
<nav className="navbar fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
      <Link to='/'>
        <img src={logo} className='logo' />
      </Link>
    <a className="navbar-brand" href="#">xApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item font-empresa">
          <a className="nav-link active" href="#">para DELIVERY CHUY - Comidas Rápidas
            <span className="visually-hidden">(current)</span>
          </a>
        </li>                     
      </ul>
      <Link to='/Login' className='login'>
        <img src={login} alt='' />
          <h3 className='text-login'>Iniciar Sesión</h3>
      </Link>

    </div>
  </div>

</nav>

    </header>


 
    </>
  );
}
