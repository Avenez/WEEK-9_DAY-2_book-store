import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = (props) => (
  <footer className="bg-dark text-white position-sticky bottom-0 pt-2">
    <Container>
      {/* <Row className="mb-3 mt-3 pt-3 text-success">
        <h3>Il miglior negozio di libri che puoi trovare</h3>
      </Row> */}
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h4>Contatti</h4>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>Segna Posto</li>
              <li>Segna Posto</li>
              <li>Segna Posto</li>
            </ul>
          </Col>
          <Col>
            <h4>A proposito di noi</h4>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>Segna Posto</li>
              <li>Segna Posto</li>
              <li>Segna Posto</li>
            </ul>
          </Col>
          <Col>
            <h4>Reclami</h4>
            <ul className="d-flex flex-column justify-content-center align-items-center">
              <li>Segna Posto</li>
              <li>Segna Posto</li>
              <li>Segna Posto</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  </footer>
);

export default MyFooter;
