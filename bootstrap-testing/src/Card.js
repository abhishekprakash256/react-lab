import "./Card.css"
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';



function CardTemp({ card_para , img_src , card_url, card_title } ) {
  return (
    <Container >

      <Card >
      <Card.Img className = "card-img-container p-3" variant="top" src= { img_src } />
      <Card.Body>
      <div className='font-color-class text-center card-title'>
      <Card.Title>{ card_title }</Card.Title>
      </div>

        <Card.Text className="card-text font-color-class mt-3">
   
            { card_para }
 
        </Card.Text>

        <div className='text-center mt-4'>
        <Button className='button-custom-color' href={ card_url } >Explore</Button>
        </div>
 
      </Card.Body>
    </Card>

    </Container>
  );
}

export default CardTemp;