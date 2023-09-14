import React, { useState } from 'react';
import defaultAvatar from '@/assets/login.png';
import { Image } from '@/components';
import { useFormContext } from 'react-hook-form';

interface Props {
  id: string;
  avatar: string | null;
}
export default function UserAvatarInput({ avatar, id }: Props) {
  const [avatarURL, setAvatarURL] = useState<string | null>(avatar);
  const { register } = useFormContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const result = event.target?.result as string;
        setAvatarURL(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='form__section form__section--avatar'>
      <label htmlFor='avatar'>
        <Image
          className='form__avatar'
          src={avatarURL}
          altSrc={defaultAvatar}
          alt='user-avatar'
        />
      </label>
      <span>ID: {id}</span>
      <input
        id='avatar'
        className='form__input-file'
        type='file'
        accept='image/*'
        {...register('avatar', { onChange })}
      />
    </div>
  );
}
