import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './MainBox.module.css';
import MainSquare from './MainSquare';
import SmallSquare from './SmallSquare';
import Button from 'react-bootstrap/Button';
import Counter from './Counter';
import  { useState } from 'react';


function MainBox() {

  const [value, setValue] = useState(0); // Initialize state

  const handleClick = () => {
    setValue(value + 1); // Update state
  };
  return (

    
    <Container>
      <Row className=''>
        <Col className={styles.box}>
        
        <MainSquare></MainSquare>
        
        </Col>


        <Col className={styles.box}>
        
        
        <SmallSquare>
            
        </SmallSquare>


        <Button onClick={() => handleClick()} variant="primary">Count</Button>

        
        </Col>
        
      </Row>

      <Row >

        <Col className={styles.box}>

        <Counter val = {value} ></Counter>

        
        </Col>
      </Row>

    </Container>
  );
}
  
  export default MainBox;
  