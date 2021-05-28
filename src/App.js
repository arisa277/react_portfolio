import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";


function App() {
  return (
    <div>
      <div className="gradientColor">
        <Home />
      </div>
      <main></main>
    </div>
  );
}

export default App;
