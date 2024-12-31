import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './MainBox.module.css';
import MainSquare from './MainSquare';
import SmallSquare from './SmallSquare';



function MainBox() {

  return (
    <Container>
      <Row className=''>
        <Col className={styles.box}>
        
        <MainSquare></MainSquare>
        
        </Col>


        <Col className={styles.box}>
        
        
        <SmallSquare>
            
        </SmallSquare>
        
        
        </Col>
        
      </Row>

    </Container>
  );
}
  
  export default MainBox;
  