import { useFormContext } from 'react-hook-form';

export default function CodeInput() {
  const { register } = useFormContext();

  return (
    <input
      {...register('code')}
      style={{ textTransform: 'uppercase' }}
      type='text'
      maxLength={4}
    />
  );
}
