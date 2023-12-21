import { ListGroupItem } from "react-bootstrap";

const MySingleComment = ({ commentObj }) => (
  <ListGroupItem>{`Commento: ${commentObj.comment} ${commentObj.rate}⭐`}</ListGroupItem>
);

export default MySingleComment;
