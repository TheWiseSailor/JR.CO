import logo from "./logo.png";
import "./App.css";
import "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About.js";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
