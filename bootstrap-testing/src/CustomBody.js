import { Container, Row, Col } from 'react-bootstrap';
import "./CustomBody.css"


function CustomBody({ children }) {
  return (
    <div className='custom-body'>
    <Container >
      <Row>
        <Col>
          {children} {/* This will render the children components passed to CustomBody */}
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CustomBody;