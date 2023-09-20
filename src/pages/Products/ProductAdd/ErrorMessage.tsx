interface Props {
  status: number;
}
export default function ErrorMessage({ status }: Props) {
  switch (status) {
    case 400:
      return <h1>Usuario o contraseña no validos</h1>;
    case 500:
      return <h1>Fallo al iniciar sesión intente conectarse mas tarde</h1>;
    default:
      return (
        <h1>Error desconocido comuníquese con el administrador de la pagina</h1>
      );
  }
}
