import { Container, Row, Col } from 'react-bootstrap';


function CustomBody({ children }) {
  return (
    <Container>
      <Row>
        <Col>
          {children} {/* This will render the children components passed to CustomBody */}
        </Col>
      </Row>
    </Container>
  );
}

export default CustomBody;