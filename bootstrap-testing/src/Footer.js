import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {

    return (

   
    <Container fluid className="footer-header-color " >

        <Row id = "contact "className=" text-center p-2">
        <Col className="text-center">
          <h1 className="bio-font font-color-class heading-responsive-font" >
          Contact Me
          </h1>
        </Col>
      </Row>


      <Row id = "contact "className=" text-center mt-2 p-2">
        <Col className="text-center" xs={12} sm ={12} md={4}>
        </Col>
        <Col className="text-center" xs={12} sm ={12} md={4}>
          <Form className="d-flex">
            <Form.Control
              type="Name"
              placeholder="Name"
              className="me-2 custom-border form-control custom-placeholder"
              aria-label="Search"
            />
          </Form>
        </Col>
        <Col className="text-center" xs={12} sm ={12} md={4}>
        </Col>
      </Row>


      <Row id = "contact "className=" text-center mt-2 p-2">
        <Col className="text-center" xs={12} sm ={12} md={4} >
        </Col>
        <Col className="text-center" xs={12} sm ={12} md={4}>
          <Form className="d-flex">
            <Form.Control
              type="Email"
              placeholder="Email"
              className="me-2 custom-border form-control custom-placeholder"
              aria-label="Search"
            />
          </Form>
        </Col>
        <Col className="text-center" xs={12} sm ={12} md={4}>
        </Col>
      </Row>

      <Row id = "contact "className=" text-center mt-2 p-2">
        <Col className="text-center" xs={12} sm ={12} md={4}>
        </Col>
        <Col className="text-center" xs={12} sm ={12} md={4}>
          <Form className="d-flex">
            <Form.Control
              as="textarea"
              placeholder="Message"
              className="me-2 custom-border form-control custom-placeholder message-inp"
              aria-label="Search"
            />
          </Form>

        </Col>
        <Col className="text-center" xs={12} sm ={12} md={4}>
        </Col>
      </Row>

      <Row id = "contact "className=" text-center p-2">
        <Col className="text-center">
        <Button className="button-custom-color">Submit</Button>

        </Col>
      </Row>

      
      <Row id = "contact "className=" text-center p-2">
        <Col className="text-center">

        <div className="mb-2"> 
      © 2025 Copyright:
      <a className= "copyright" href="https://meabhi.me/"> meabhi.me</a>
    </div>

        </Col>
      </Row>

      
    </Container>
    


    );

}


export default Footer;
