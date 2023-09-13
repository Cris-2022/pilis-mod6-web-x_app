import { Link as LinkRouterDom } from 'react-router-dom';
import { ReactElement } from 'react';

interface LinkProps {
  to: string;
  label: string;
}
function Link({ to, label }: LinkProps) {
  return (
    <li className='header__navbar-item'>
      <LinkRouterDom className='header__navbar-link' to={to}>
        {label}
      </LinkRouterDom>
    </li>
  );
}

interface NavbarProps {
  children: ReactElement<LinkProps> | ReactElement<LinkProps>[];
}

Navbar.Link = Link;
export default function Navbar({ children }: NavbarProps) {
  return <ul className='header__navbar'>{children}</ul>;
}
