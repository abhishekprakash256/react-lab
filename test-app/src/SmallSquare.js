import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SmallSquare.module.css'; // Assuming you are using CSS Modules

function SmallSquare() {
  return (
    <Container >
      <Row className={`${styles['box-padding']}`} >
        <Col className={`${styles.box1} ${styles['box-padding']}`}></Col> {/* Custom padding */}
        <Col className={`${styles.box2} ${styles['box-padding']}`}></Col> {/* Custom padding */}
        <Col className={`${styles.box3} ${styles['box-padding']}`}></Col> {/* Custom padding */}
        <Col className={`${styles.box4} ${styles['box-padding']}`}></Col> {/* Custom padding */}
      </Row>
    </Container>
  );
}

export default SmallSquare;
