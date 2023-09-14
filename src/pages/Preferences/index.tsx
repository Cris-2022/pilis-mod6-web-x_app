import './style.css';

import { Image } from '@/components';
import { useUserContext } from '@/context/user';
import { Navigate } from 'react-router-dom';
import defaultAvatar from '@/assets/login.png';

export default function Preferences() {
  const { isLogin, user, logOut } = useUserContext();

  if (!isLogin) return <Navigate to='/' replace />;
  const { id, username, avatar } = user!;

  return (
    <main className='preferences'>
      <form className='preferences__form'>
        <div className='preferences__form-section-avatar'>
          <label htmlFor='avatar'>
            <Image
              className='preferences__avatar'
              src={avatar}
              altSrc={defaultAvatar}
              alt='user-avatar'
            />
          </label>
          <span>ID: {id}</span>
          <input
            className='preferences__form-input--file'
            type='file'
            name='avatar'
            id='avatar'
          />
        </div>

        <div className='preferences__form-section'>
          <label htmlFor='username'>Nombre de Usuario:</label>
          <input
            className='preferences__input'
            type='text'
            name='username'
            id='username'
            placeholder={username}
          />
        </div>

        <div className='preferences__form-section'>
          <label htmlFor='password'>Contraseña:</label>
          <input
            className='preferences__input'
            type='password'
            name='password'
            id='password'
            placeholder={'************'}
          />
        </div>

        <p className='preferences__form-note'>
          Recuerde cambiar de contraseña periódicamente. Aproximadamente una vez
          cada 3 meses.
        </p>

        <button className='preferences__form-button'>Guardar Cambios</button>
      </form>
      <button onClick={logOut}>cerrar sesión</button>
    </main>
  );
}
