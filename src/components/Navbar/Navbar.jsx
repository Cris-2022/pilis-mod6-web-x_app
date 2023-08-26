import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Gestión Productos</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Gestión Pedidos</Navbar.Brand>
        </Container>
      </Navbar>

      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Configuraciones</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Cerrar Sesión</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;