import MySingleBook from "./MySingleBook";

const MyBookList = ({ bookList }) =>
  bookList.map((book, index) => <MySingleBook key={`book-id-${index}`} book={book} />);

export default MyBookList;
