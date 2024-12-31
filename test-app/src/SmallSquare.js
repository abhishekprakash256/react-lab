import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SmallSquare.module.css'; // Assuming you are using CSS Modules
import  { useState } from 'react';



function SmallSquare( {setColorChange }) {


  const handleClick = (color) => {
    setColorChange(color); // Invoke the callback with the selected color
  };


  return (
    <Container>
      <Row className={styles['box-padding']}>
        <Col
          className={`${styles.box1} ${styles['box-padding']}`}
          onClick={() => handleClick('red')} // Pass unique identifier
          role="button"
        ></Col>
        <Col
          className={`${styles.box2} ${styles['box-padding']}`}
          onClick={() => handleClick('green')} // Pass unique identifier
          role="button"
        ></Col>
        <Col
          className={`${styles.box3} ${styles['box-padding']}`}
          onClick={() => handleClick('blue')} // Pass unique identifier
          role="button"
        ></Col>
        <Col
          className={`${styles.box4} ${styles['box-padding']}`}
          onClick={() => handleClick('yellow')} // Pass unique identifier
          role="button"
        ></Col>
      </Row>
    </Container>
  );
}


export default SmallSquare;