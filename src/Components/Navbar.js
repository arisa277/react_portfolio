import { Link } from "react-router-dom";
import "./Navbar-module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/me">Me</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
