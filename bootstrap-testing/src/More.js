import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './More.css';


function More({ more_link }) {
  // Ensure the link is absolute
  const normalizedLink = more_link.startsWith('http://') || more_link.startsWith('https://')
    ? more_link
    : `https://${more_link}`; // Default to HTTPS if no protocol is provided

  return (
    <Container>
      <Row className='p-2'>
        <Col className="text-center">
          <h1 className="animate bounce">
            <a 
              className="text-decoration-none more-color" 
              href={normalizedLink} 
              //target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practices
            >
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
