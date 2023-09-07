import logo from "./logo.png";
import "./App.css";
import "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About.js";
import { Portfolio } from "./components/Portfolio";
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
