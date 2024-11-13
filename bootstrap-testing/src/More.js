import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './More.css';


function More({ more_link }) {
    return (
        <Container>
        <Row className='p-2'>
          <Col className="text-center">
            <h1 className="animate bounce">
              <a className="text-decoration-none more-color" href={more_link}>
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </a>
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default More;