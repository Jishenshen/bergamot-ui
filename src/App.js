import icon from "./brand-icon.svg";
import "./App.css";
import TranslateToggle from "./components/menu/menu";
import FootSetup from "./components/footSetup/footSetup";

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <header>
          <img src={icon} alt=""></img>
          <span>BERGAMOT</span>
        </header>
        <TranslateToggle></TranslateToggle>
        <hr></hr>
        <FootSetup></FootSetup>
      </div>
    </div>
  );
}

export default App;
