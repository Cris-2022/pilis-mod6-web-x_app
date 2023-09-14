import './style.css';

import { User } from '@/services/user';
import {
  FormProvider,
  SubmitHandler as SubmitHandlerHookForm,
  useForm,
} from 'react-hook-form';
import UserAvatarInput from './UserAvatarInput';
import UserNameInput from './UserNameInput';
import PasswordInput from './PasswordInput';

export type SubmitHandler = SubmitHandlerHookForm<FormData>;
export interface FormData {
  username: string;
  password: string;
  avatar: FileList;
}

interface Props {
  user: User;
  onSubmit: SubmitHandler;
}

export default function UserForm({ user, onSubmit }: Props) {
  const methods = useForm<FormData>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='form'>
        <UserAvatarInput {...user} />
        <UserNameInput username={user.username} />
        <PasswordInput />
        <button className='form__button'>Guardar Cambios</button>
      </form>
    </FormProvider>
  );
}
