import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeadingBar.css';


function HeadingBar({ title }) {
    return (
      <Container>
        <Row className="p-3">
          <Col className="text-center background-color-body rounded">
            <h1 className="bio-font font-color-class heading-responsive-font mb-2 mt-2">
              {title}
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
  
export default HeadingBar;


