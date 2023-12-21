import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class MyAddComment extends Component {
  // ------STATE
  state = {
    myComment: {
      comment: "",
      rate: "",
      elementId: this.props.book.asin,
    },
  };

  //---------------

  // -------handleSubmit con fetch e try catch

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
        this.props.fetchComments();
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   -------------------------------

  // --------RENDER-----

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Il tuo commento..."
            value={this.state.myComment.comment}
            onChange={(event) => this.setState({ myComment: { ...this.state.myComment, comment: event.target.value } })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Voto</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="5"
            placeholder="Il tuo voto..."
            value={this.state.myComment.rate}
            onChange={(event) => this.setState({ myComment: { ...this.state.myComment, rate: event.target.value } })}
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
