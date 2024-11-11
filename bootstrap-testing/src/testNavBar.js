import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TestNavBar.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';




function TestNavBar() {


const [theme, setTheme] = useState('light');


useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };


  return (
    

    <Navbar expand="lg" className="footer-header-color">
      <Container fluid>


      <div class="dark-switch">
            <input type="checkbox" className ="checkbox" id="checkbox" onClick={toggleTheme} ></input>
            <label for ="checkbox" className ="checkbox-label">
            <FontAwesomeIcon icon={faMoon} style={{ marginRight: '10px' }} />
            <FontAwesomeIcon icon={faSun} />
                <span className ="ball"></span>
            </label>
        </div>


        <Navbar.Brand className="navbar-brand bold" href="#">Abhi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" /> 
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px'}}
            navbarScroll
          >
            
            <Nav.Link className="nav-link bold-links" href="#action1">About</Nav.Link>
            <Nav.Link className="nav-link bold-links" href="#action2">Tech</Nav.Link>
            <Nav.Link  className="nav-link bold-links" href="#action1">Project</Nav.Link>
            <Nav.Link className="nav-link bold-links" href="#action2">Life</Nav.Link>
            <Nav.Link  className="nav-link bold-links" href="#action1">Contact</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 custom-border "
              aria-label="Search"
            />
            
            <Button className=" button-custom-color ">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default TestNavBar;