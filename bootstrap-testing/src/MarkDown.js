import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MarkDown.css';
import ReactMarkdown from 'react-markdown';


function MarkDown({ mark_down_data }) {
  return (
    <Container>
      <Row className="rounded background-color-body mt-3 p-2">
        <Col className="">
        <ReactMarkdown className="mb-0 font-color-class bio-desc markdown-body">
                { mark_down_data }
        </ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}

export default MarkDown;
