import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardTemp from './Card';

function CardBundle() {
  const cardData = [
    {
      card_title: "Card Title 1",
      card_para: "System design a multidisciplinary field that encompasses various aspects of designing the destributed",
      img_src: "cards.jpg",
      card_url: "https://example.com/card1",
    },
    {
      card_title: "Card Title 2",
      card_para: "System design a multidisciplinary field that encompasses various aspects of designing the destributed",
      img_src: "federated-learning-flow.png",
      card_url: "https://example.com/card2",
    },
    {
      card_title: "Card Title 3",
      card_para: "System design a multidisciplinary field that encompasses various aspects of designing the destributed",
      img_src: "federated-learning-flow.png",
      card_url: "https://example.com/card3",
    },
  ];

  return (
 
<Container>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <CardTemp
              card_title={card.card_title}
              card_para={card.card_para}
              img_src={card.img_src}
              card_url={card.card_url}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardBundle;
