import { useUserContext } from '@/context/user';
import { UserCredentials } from '@/services/user';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import './style.css';

export function Login() {
  const { logIn, isLogin, isLoading, isError, status } = useUserContext();
  const { register, handleSubmit } = useForm<UserCredentials>();

  const onSubmit: SubmitHandler<UserCredentials> = data => {
    void logIn(data);
  };

  return (
    <div className='sign-in-container'>
      {isLogin && <Navigate to='/' replace />}
      {isLoading && <h1>cargando...</h1>}
      {isError && <ErrorMessage status={status!} />}

      <form onSubmit={handleSubmit(onSubmit)} className='sign-in-form'>
        <span>Ingresar usuario y contraseña</span>
        <input
          {...register('username', { required: true })}
          className='input-form'
          type='text'
          placeholder='admin'
        />
        <input
          {...register('password', { required: true })}
          className='input-form'
          type='password'
          placeholder='************'
        />
        <button className='btn-form'>Iniciar Sesión</button>
      </form>
      <Link to='/'>
        <button className='back'>Volver al Inicio</button>
      </Link>
    </div>
  );
}
