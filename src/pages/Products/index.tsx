export default function Products() {
  const isLogin = false;

  return isLogin ? <h1>Products</h1> : <h1>Necesitas iniciar sesión</h1>;
}
