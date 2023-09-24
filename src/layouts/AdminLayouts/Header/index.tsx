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
        <Navbar.Link to='/tickets' label='tickets' />
        <Navbar.Link to='/orders' label='ordenes' />
        <Navbar.Link to='/products' label='productos' />
      </Navbar>

      <Title>al servicio de: DELIVERY CHUY</Title>

      <User avatar={avatar} username={username} />
    </header>
  );
}
