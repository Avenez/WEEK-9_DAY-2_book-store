import { Button, ListGroupItem } from "react-bootstrap";
import { Component } from "react";

class MySingleComment extends Component {
  // ----STATE

  state = {
    myId: this.props.commentObj._id,
  };

  handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.state.myId}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDMxNjQ0MTQsImV4cCI6MTcwNDM3NDAxNH0.X1GMxJnGEZB7B2iiPcTT5fG7DkgIXpQT1qxrB8qfdJo",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Commento Eliminato");
      }
    } catch (err) {
      console.log(err);
    }
  };

  createStars(number) {
    let stars = "";
    for (let i = 1; i <= number; i++) {
      stars += "⭐";
    }
    return stars;
  }

  render() {
    const { commentObj } = this.props;
    const numberOfStar = parseInt(commentObj.rate);
    return (
      //   <ListGroupItem>{`Commento: ${commentObj.comment} ${commentObj.rate}⭐`}</ListGroupItem>
      <>
        <ListGroupItem>
          {`${commentObj.comment} ${this.createStars(numberOfStar)}`}{" "}
          <Button
            variant="danger"
            onClick={async () => {
              this.setState({ myId: commentObj._id });
              await this.handleDelete();
              this.props.myFunction();
            }}
          >
            Elimina
          </Button>
        </ListGroupItem>
      </>
    );
  }
}

export default MySingleComment;
