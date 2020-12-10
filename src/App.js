import icon from "./brand-icon.svg";
import "./App.css";
import TranslateToggle from "./components/menu"
import footSetup from "./components/footSetup"

function App() {
  return (
    <div className="App">
      <div className="main-page">
      <header>
        <img src={icon} alt=''></img>
        <span>BERGAMOT</span>
      </header>
      <TranslateToggle></TranslateToggle>
      <hr></hr>
      <footSetup></footSetup>
      </div>
    </div>
  );
}

export default App;
