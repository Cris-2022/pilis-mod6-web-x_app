import { useFormContext } from 'react-hook-form';

export default function PasswordInput() {
  const { register } = useFormContext();
  return (
    <div className='form__section form__section--text'>
      <label htmlFor='password'>Contraseña:</label>
      <input
        {...register('password')}
        className='preferences__input'
        type='password'
        name='password'
        id='password'
        placeholder={'************'}
      />
    </div>
  );
}
