import './style.css';

import { useUserContext } from '@/context/user';
import logo from '@/assets/logo.png';
import Logo from './Logo';
import Navbar from './Navbar';
import User from './User';
import Title from './Title';

export default function Header() {
  const { user } = useUserContext();

  const { username, avatar } = user!;

  return (
    <header className='header'>
      <Logo logo={logo} />

      <Navbar>
        <Navbar.Link to='/products' label='Productos' />
        <Navbar.Link to='/orders' label='Ordenes' />
        <Navbar.Link to='/order/deliver' label='Entega' />
        <Navbar.Link to='/tickets' label='Tickets' />
      </Navbar>

      <Title>Empresa: Comidas Rápidas</Title>
      <h6>Fecha: {new Date().toLocaleDateString()}</h6>

      <User avatar={avatar} username={username} />
    </header>
  );
}
