import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="ingredient">Ingredient</Nav.Link>
            <Nav.Link href="products">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}
