import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import MySingleComment from "./MySingleComment";
import MyAddComment from "./MyAddComment";

class MyCommentArea extends Component {
  state = { commentsList: [] };

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDMxNjQ0MTQsImV4cCI6MTcwNDM3NDAxNH0.X1GMxJnGEZB7B2iiPcTT5fG7DkgIXpQT1qxrB8qfdJo",
        },
      });

      if (response.ok) {
        const commentsList = await response.json();
        this.setState({ commentsList });
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
    return (
      <>
        <Card className="commentArea mb-2">
          <Card.Body>
            <Card.Text>
              <ListGroup>
                {this.state.commentsList.map((comment, index) => (
                  <MySingleComment key={comment._id} commentObj={comment} myFunction={this.fetchComments} />
                ))}
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
        <MyAddComment book={book} fetchComments={this.fetchComments} />
      </>
    );
  }
}

export default MyCommentArea;
