import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import MySingleComment from "./MySingleComment";
import MyAddComment from "./MyAddComment";

const MyCommentArea = ({ commentList, book }) => (
  <>
    <Card>
      <Card.Body>
        <Card.Text>
          <ListGroup>
            {commentList.map((comment, index) => (
              <MySingleComment key={index} commentObj={comment} />
            ))}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
    {/* <MyAddComment book={book} /> */}
  </>
);

export default MyCommentArea;
