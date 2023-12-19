import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";

function App() {
  return (
    <div className="App">

      <>
    
      <header Container>
        <MyNav/>
        {/* <MyAlert MyText="Questo è Il mio Alert di Prova!" /> */}
      </header>
      <MyFooter/>
      </>
    </div>
  );
}

export default App;
