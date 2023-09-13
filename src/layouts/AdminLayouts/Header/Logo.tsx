import { Link } from 'react-router-dom';

interface Props {
  logo: string;
}
export default function Logo({ logo }: Props) {
  return (
    <Link to='/'>
      <img src={logo} className='header__logo' />
    </Link>
  );
}
