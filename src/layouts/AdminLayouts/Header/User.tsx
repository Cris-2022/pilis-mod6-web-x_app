import { Image } from '@/components';
import { Link } from 'react-router-dom';
import defAvatar from '@/assets/login.png';

interface Props {
  avatar: string | null | undefined;
  username: string | null | undefined;
}
export default function User({ username, avatar }: Props) {
  return (
    <Link className='header__user' to='/preferences'>
      <Image
        className='header__avatar'
        src={avatar}
        altSrc={defAvatar}
        alt='user-avatar'
      />
      <span className='header__username'>{username ?? 'admin'}</span>
    </Link>
  );
}
