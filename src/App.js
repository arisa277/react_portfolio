import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./Pages/Me";
import Works from "./Pages/Works";
import Navbar from "././Components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/Me" component={Me} exact />
          <Route path="/Works" component={Works} exact />
          <Navbar />
        </div>
      </Router>
    </div>
  );
}

export default App;
