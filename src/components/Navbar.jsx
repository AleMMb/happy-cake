import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nabvar(){
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
        <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

    )
}
export default Nabvar