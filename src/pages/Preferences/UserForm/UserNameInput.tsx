import { useFormContext } from 'react-hook-form';

interface Props {
  username: string;
}
export default function UserNameInput({ username }: Props) {
  const { register } = useFormContext();
  return (
    <div className='form__section form__section--text'>
      <label htmlFor='username'>Nombre de Usuario:</label>
      <input
        {...register('username')}
        className='preferences__input'
        type='text'
        id='username'
        placeholder={username}
      />
    </div>
  );
}
