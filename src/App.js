import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Navbar from "././Components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Work" component={Work} exact />
          <Navbar />
        </div>
      </Router>
    </div>
  );
}

export default App;
