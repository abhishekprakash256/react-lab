import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Counter.module.css';

const val = 12;

function Counter () {
    

    return (
      <Container>
        <Row className=''>

        <Col></Col>

        <Col>
        <h1 className={styles.box} >{val}</h1>
        </Col>
        
        <Col>
        </Col>
        </Row>
  
      </Container>
    );
  }
    
    export default Counter;