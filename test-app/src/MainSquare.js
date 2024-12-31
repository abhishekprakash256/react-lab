import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './MainSquare.module.css';


function MainSquare() {

    return (
      <Container>
        <Row>
          <Col className=''></Col>
          <Col className={styles.box}></Col>
          <Col className=''></Col>

        </Row>
  
      </Container>
    );
  }
    
    export default MainSquare;