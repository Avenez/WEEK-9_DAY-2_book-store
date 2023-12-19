import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import AllTheBooks from "./components/AllTheBooks";
import MySelect from "./components/MySelect";
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div className="App">

      <>
    
      <header Container>
        <MyNav/>
        <MyAlert color="success" MyText="Questo è Il mio Alert di Prova!" />
      </header>
      <Container className="mb-5"><MySelect/></Container>
      
      <AllTheBooks/>
      <MyFooter/>
      </>
    </div>
  );
}

export default App;
