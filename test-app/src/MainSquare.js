import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './MainSquare.module.css';
import  { useState } from 'react';





function MainSquare({currentColor}) {




    return (
      <Container>
        <Row>
          <Col className=''></Col>
          <Col className={styles.box} style= {{ backgroundColor: currentColor  } }></Col>
          <Col className=''></Col>

        </Row>
  
      </Container>
    );
  }
    
    export default MainSquare;