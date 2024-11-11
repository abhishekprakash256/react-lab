import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';





function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>





        

        <Navbar.Brand href="#">Abhi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" /> 
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Tech</Nav.Link>
            <Nav.Link href="#action1">Project</Nav.Link>
            <Nav.Link href="#action2">Tech</Nav.Link>
            <Nav.Link href="#action1">Life</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;