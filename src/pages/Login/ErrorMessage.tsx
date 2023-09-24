interface Props {
  status: number;
}
export default function ErrorMessage({ status }: Props) {
  switch (status) {
    case 400:
      return <h4>Usuario o contraseña no validos</h4>;
    case 500:
      return <h4>Fallo al iniciar sesión intente conectarse mas tarde</h4>;
    default:
      return (
        <h4>Error desconocido comuníquese con el administrador de la pagina</h4>
      );
  }
}
