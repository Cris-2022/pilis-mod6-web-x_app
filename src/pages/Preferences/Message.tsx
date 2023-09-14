import { useUserContext } from '@/context/user';

const DEFAULT_MESSAGE =
  'Recuerde cambiar de contraseña periódicamente. Aproximadamente una vez cada 3 meses.';

const ErrorMessage = ({ children = '', onClick = () => {} }) => (
  <p
    onClick={onClick}
    className='preferences__message preferences__message--error'
  >
    {children}
  </p>
);

interface Props {
  isError: boolean;
  status: number | null;
}
export default function Message({ isError, status }: Props) {
  const { resolve } = useUserContext();

  if (!isError)
    return <p className='preferences__message'>{DEFAULT_MESSAGE}</p>;

  switch (status) {
    case 400:
      return (
        <ErrorMessage onClick={resolve}>
          parámetros no valido o campos vació
        </ErrorMessage>
      );
    case 500:
      return (
        <ErrorMessage onClick={resolve}>
          Fallo en actualizar los cambios intente mas tarde
        </ErrorMessage>
      );
    default:
      return (
        <ErrorMessage onClick={resolve}>
          Error desconocido comuníquese con el administrador de la pagina
        </ErrorMessage>
      );
  }
}
