import Card from 'react-bootstrap/Card';
import "./Card.css"
import Container from 'react-bootstrap/Container';


function CardTemp({ card_para , img_src , card_url } ) {
  return (
    <Container>
    <Card style={{ width: '20rem' }}>
      <Card.Img className = "card-img-container p-3" variant="top" src= { img_src } />
      <Card.Body>

        <Card.Text className="card-text font-color-class desc-container">
        <a href={ card_url }  class="font-color-class text-decoration-none">
            { card_para }
        </a>
        </Card.Text>
 
      </Card.Body>
    </Card>
    </Container>
  );
}

export default CardTemp;