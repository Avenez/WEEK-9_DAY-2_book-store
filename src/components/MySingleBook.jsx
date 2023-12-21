import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import MyCommentArea from "./MyCommentArea";

class MySingleBook extends Component {
  // -----STATE

  state = {
    selected: false,
    commmentSec: false,
    commentsList: [],
  };

  // ---------FUNZIONE DI FETCH-------------
  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDMxNjQ0MTQsImV4cCI6MTcwNDM3NDAxNH0.X1GMxJnGEZB7B2iiPcTT5fG7DkgIXpQT1qxrB8qfdJo",
        },
      });

      if (response.ok) {
        const commentsListObj = await response.json();
        this.setState({ commentsList: commentsListObj });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { book } = this.props;
    const cardClassName = `me-1 mb-4 ${this.state.selected ? "greenCardBorder" : ""}`;

    return (
      <Card
        style={{ cursor: "pointer" }}
        className={cardClassName}
        onClick={() => {
          this.setState((prevState) => ({
            selected: !prevState.selected,
            commentSec: !prevState.commentSec,
          }));
        }}
      >
        <Card.Img variant="top" src={book.img} style={{ objectFit: "cover", height: "200px" }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <Badge bg="danger" className="me-2">
              {book.price}€
            </Badge>
            <Badge bg="info">{book.category}</Badge>
          </Card.Text>
        </Card.Body>
        {/* <>
          {this.state.commentSec === true && (
            <MyCommentArea commentList={this.state.commentsList} asin={this.props.book.asin} />
          )}
        </> */}
      </Card>
    );
  }
}

export default MySingleBook;
