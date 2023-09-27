interface Props {
  status: number;
}
export default function ErrorMessage({ status }: Props) {
  switch (status) {
    case 400:
      return <h5 className='text-warning'>Usuario ó contraseña no válidos</h5>;
    case 500:
      return (
        <h5 className='text-warning'>
          Fallo al iniciar sesión, intente conectarse mas tarde
        </h5>
      );
    default:
      return (
        <h4>Error desconocido comuníquese con el administrador de la pagina</h4>
      );
  }
}
