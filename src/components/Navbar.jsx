import Container from "react-bootstrap/Container";
import {LinkContainer} from 'react-router-bootstrap'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cake from "../img/navbarcake.png";
import home from "../img/navbarhome.png";
import book from "../img/navbarbook.png";

function Nabvar() {
  return (
    <Navbar style={{backgroundColor:'crimson'}}>
      <Container>
        <Nav className=" w-100 d-flex flex-row justify-content-between">
          <div className="d-flex">
            <div className="d-flex align-items-center ">
              <img src={home} width="24" height="24" alt="home" />
              <LinkContainer to="/Home">
                <Nav.Link className="me-5">Home</Nav.Link>
              </LinkContainer>
            </div>
            <div className="d-flex  align-items-center">
              <img src={book} width="20" height="20" alt="book" />
              <LinkContainer to="/Contacto">
                <Nav.Link>Contacto</Nav.Link>
              </LinkContainer>
            </div>
          </div>
          <div className=" d-flex align-items-center">
          <LinkContainer to="/Home">
            <Navbar.Brand> Happy Cake</Navbar.Brand>
          </LinkContainer>
            <img src={cake} width="24" height="24" alt="store logo" />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Nabvar;
