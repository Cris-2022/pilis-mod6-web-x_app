import './style.css';

import { useUserContext } from '@/context/user';
import { Navigate } from 'react-router-dom';
import Message from './Message';
import UserForm, { SubmitHandler } from './UserForm';
import { UserFormData } from '@/services/user';
import { useEffect } from 'react';

export default function Preferences() {
  const { isLogin, logOut, isLoading, isError, status, user, update, resolve } =
    useUserContext();

  useEffect(() => {
    if (isError) resolve();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit: SubmitHandler = data => {
    const userFormData: UserFormData = {
      ...data,
      avatar: data.avatar[0],
    };
    update(userFormData);
  };

  if (!isLogin) return <Navigate to='/' replace />;

  return (
    <div className='set-pref'>
    <main className='preferences bg-light'>
      {isLoading && <h1>cargando...</h1>}
      {user && <UserForm user={user} onSubmit={onSubmit} />}
      <Message isError={isError} status={status} />
      <button className='preferences__logout-button' onClick={logOut}>
        cerrar sesión
      </button>
    </main>
    </div>
  );
}
