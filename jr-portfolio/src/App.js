import logo from "./logo.png";
import "./App.css";
import "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
    </div>
  );
}

export default App;
