import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class MyAddComment extends Component() {
  state = {
    myComment: {
      comment: "",
      rate: "",
      elementId: this.prop.book.asin,
    },
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        method: "POST",
        body: JSON.stringify(this.state.myComment),

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDMxNjQ0MTQsImV4cCI6MTcwNDM3NDAxNH0.X1GMxJnGEZB7B2iiPcTT5fG7DkgIXpQT1qxrB8qfdJo",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        this.setState({
          myComment: {
            comment: "",
            rate: "",
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="email"
            placeholder="Il tuo commento..."
            value={this.state.myComment.comment}
            onChange={(event) => this.setState({ myComment: { ...this.state.myComment, comment: event.target.value } })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Voto</Form.Label>
          <Form.Control
            type="number"
            placeholder="Il tuo voto..."
            value={this.state.myComment.rate}
            onChange={(event) =>
              this.setState({ myComment: { ...this.state.myComment, rate: toString(event.target.value) } })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default MyAddComment;
