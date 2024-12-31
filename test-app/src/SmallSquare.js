import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SmallSquare.module.css'; // Assuming you are using CSS Modules



function SmallSquare() {
  const handleClick = (boxNumber) => {
    alert(`You clicked on Box ${boxNumber}!`);
  };


  
  return (
    <Container>
      <Row className={styles['box-padding']}>
        <Col
          className={`${styles.box1} ${styles['box-padding']}`}
          onClick={() => handleClick(1)} // Pass unique identifier
          role="button"
        ></Col>
        <Col
          className={`${styles.box2} ${styles['box-padding']}`}
          onClick={() => handleClick(2)} // Pass unique identifier
          role="button"
        ></Col>
        <Col
          className={`${styles.box3} ${styles['box-padding']}`}
          onClick={() => handleClick(3)} // Pass unique identifier
          role="button"
        ></Col>
        <Col
          className={`${styles.box4} ${styles['box-padding']}`}
          onClick={() => handleClick(4)} // Pass unique identifier
          role="button"
        ></Col>
      </Row>
    </Container>
  );
}

export default SmallSquare;

