import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

class MySingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book, index } = this.props;
    const cardClassName = `me-4 mb-4 ${this.state.selected ? "greenCardBorder" : ""}`;

    return (
      <Card key={`book-id-${index}`} className={cardClassName}>
        <Card.Img
          variant="top"
          src={book.img}
          style={{ objectFit: "cover", height: "200px" }}
          onClick={() => {
            this.setState({ selected: true });
          }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <Badge bg="danger" className="me-2">
              {book.price}€
            </Badge>
            <Badge bg="info">{book.category}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MySingleBook;
