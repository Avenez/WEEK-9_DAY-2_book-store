import MySingleBook from "./MySingleBook";

const MyBookList = ({ bookList }) => bookList.map((book, index) => <MySingleBook idKey={index} book={book} />);

export default MyBookList;
