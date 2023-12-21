import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import MyCommentArea from "./MyCommentArea";

class MySingleBook extends Component {
  // -----STATE

  state = {
    selected: false,
  };

  // ---------FUNZIONE DI FETCH-------------

  render() {
    const { book } = this.props;
    const cardClassName = `me-1 mb-4 ${this.state.selected ? "greenCardBorder" : ""} p-3 bgColorCard`;

    return (
      <Card className={cardClassName}>
        <Card.Img
          variant="top"
          src={book.img}
          style={{ objectFit: "cover", height: "200px", cursor: "pointer" }}
          onClick={() => {
            this.setState((prevState) => ({
              selected: !prevState.selected,
            }));
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
        <>{this.state.selected && <MyCommentArea book={book} />}</>
      </Card>
    );
  }
}

export default MySingleBook;
