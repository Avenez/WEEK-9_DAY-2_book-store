import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyLogo from '../assets/img/Screenshot 2023-12-19 165115.png';

function MyNav(props) {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container className='fs-5'>
        <Navbar.Brand href="#home"><img src={MyLogo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={props.homeLink} target='blank'>Home</Nav.Link>
            <Nav.Link href={props.aboutLink} target='blank'>About</Nav.Link>
            <Nav.Link href={props.browseLink} target='blank'>Browse</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;