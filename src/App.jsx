
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">

      <>
    
      <header Container>
        <MyNav/>
        <MyAlert color="success" MyText="Questo è Il mio Alert di Prova!" />
      </header>
      
      <AllTheBooks/>
      <MyFooter/>
      </>
    </div>
  );
}

export default App;
