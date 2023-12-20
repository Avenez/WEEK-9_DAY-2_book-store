import React from "react";
import { Row, Col, Form } from "react-bootstrap";

class MyInputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearch = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm }, () => {
      this.props.onChange(searchTerm);
    });
  };

  render() {
    return (
      <Row className="justify-content-center mb-2">
        <Col lg={5}>
          <Form.Control
            placeholder="Inserisci qui il titolo del libro che stai cercando..."
            onChange={this.handleSearch}
          />
        </Col>
      </Row>
    );
  }
}

export default MyInputSearch;
