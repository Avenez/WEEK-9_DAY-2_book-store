import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import fantasyBooks from "../data/books/fantasy.json";
import historyBooks from "../data/books/history.json";
import horrorBooks from "../data/books/horror.json";
import romanceBooks from "../data/books/romance.json";
import scifiBooks from "../data/books/scifi.json";
import Row from "react-bootstrap/esm/Row";
import MyAlert from "./MyAlert";
import MyBookList from "./MyBookList";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";

// -----------CLASSE COMPONET
class AllTheBooks extends Component {
  // ---------IL SUO STATE ALL'INTERNO
  state = {
    // books : fantasyBooks,
    books: null,
  };
  // --------------------------------

  // ---------RENDER
  render() {
    return (
      <Container className="overflow-auto mt-3">
        <div className="mb-3">
          <Button
            className="me-2"
            variant="info"
            onClick={() => {
              this.setState({ books: fantasyBooks });
            }}
          >
            Fantasy
          </Button>
          <Button
            className="me-2"
            variant="warning"
            onClick={() => {
              this.setState({ books: historyBooks });
            }}
          >
            History
          </Button>
          <Button
            className="me-2"
            variant="danger"
            onClick={() => {
              this.setState({ books: horrorBooks });
            }}
          >
            Horror
          </Button>
          <Button
            className="me-2"
            variant="success"
            onClick={() => {
              this.setState({ books: romanceBooks });
            }}
          >
            Romance
          </Button>
          <Button
            className="me-2"
            variant="dark"
            onClick={() => {
              this.setState({ books: scifiBooks });
            }}
          >
            Sci-fi
          </Button>
        </div>

        <Row className="justify-content-center mb-2">
          <Col lg={5}>
            <Form.Control
              placeholder="Inserisci qui il titolo del libro che stai cercando..."
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  this.setState({
                    books: this.state.books.filter((book) =>
                      book.title.toLowerCase().includes(event.target.value.toLowerCase())
                    ),
                  });
                }
              }}
            />
          </Col>
        </Row>
        <Row className="row-cols-xs-2 row-cols-md-3 row-cols-lg-4 overflow-auto">
          {this.state.books ? (
            <>
              <MyBookList bookList={this.state.books} />
            </>
          ) : (
            <Container>
              <MyAlert color="danger" MyText="Premi un bottone per scegliere la categoria" />
            </Container>
          )}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
