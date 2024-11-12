import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TestGrid.css"
import CardTemp from './Card';

function TestGrid() {
  return (
    <Container>

      <Row fluid="md"> 
        <Col xs={12} md={4} className='test-box'>
        <CardTemp></CardTemp>
        </Col>
        <Col xs={12} md={4} className='test-box'>
        
        <CardTemp></CardTemp>
        </Col>
        <Col  xs={12} md={4} className='test-box'>
        <CardTemp></CardTemp>
        </Col>
      </Row>
    </Container>
  );
}

export default TestGrid;