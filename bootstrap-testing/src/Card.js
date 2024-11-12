import Card from 'react-bootstrap/Card';
import "./Card.css"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function CardTemp({ card_para , img_src , card_url, card_title } ) {
  return (
    <Container>
    <Card style={{ width: '20rem' }}>
      <Card.Img className = "card-img-container p-3" variant="top" src= { img_src } />
      <Card.Body>
      <div className='font-color-class text-center card-title'>
      <Card.Title>{ card_title }</Card.Title>
      </div>

        <Card.Text className="card-text font-color-class ">
        <a  class="font-color-class text-decoration-none">
            { card_para }
        </a>
        </Card.Text>

        <div className='text-center'>
        <Button className='button-custom-color' href={ card_url } >Learn More</Button>
        </div>
 
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CardTemp;