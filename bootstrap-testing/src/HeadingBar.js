import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeadingBar.css';


function HeadingBar({ title }) {
  return (
    <Container>
      <Row className="rounded background-color-body m-3 p-2">
        <Col className="text-center">
          <h1 className="bio-font font-color-class heading-responsive-font m-0" >
            {title}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default HeadingBar;


