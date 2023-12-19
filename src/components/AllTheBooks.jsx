import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';
import fantasyBooks from '../data/books/fantasy.json';
import Row from 'react-bootstrap/esm/Row';


class AllTheBooks extends React.Component {
    render(){
  return (
    <Container className='overflow-auto'>
        <Row>
            {fantasyBooks.map((book) =>(
                    <Card id={book.id} style={{ width: '18rem' }} className='me-4 mb-4'>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        <Badge bg="warning"> {book.price}€</Badge>
                        <Badge bg="info">{book.category}</Badge>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
            ))}

    </Row>
    </Container>
  );
}
}

export default AllTheBooks;