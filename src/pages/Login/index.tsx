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
  <main className='set-main'>
    <div className="card text-white bg-dark mb-3" Style="max-width: 30rem;">      
      <div className="card-body">       
        {isLogin && <Navigate to='/orders' replace />}
      {isLoading && <h5 className='text-info'>Verificando...</h5>}
      
      {isError && <ErrorMessage status={status!} />}

      <form onSubmit={handleSubmit(onSubmit)} className='sign-in-form'>
        <h5>Ingresar usuario y contraseña</h5>
        <input
          {...register('username', { required: true })}
          className='input-form bg-white'
          type='text'
          placeholder='admin'
        />
        <input
          {...register('password', { required: true })}
          className='input-form bg-white'
          type='password'
          placeholder='************'
        />
        <button className='btn-form'>Iniciar Sesión</button>
      </form>
      <Link to='/'>
        <button className='btn btn-info'>Volver al Inicio</button>
      </Link>   
      
      </div>
    </div>   
    </main>
  );
}
