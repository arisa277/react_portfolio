import { Link } from "react-router-dom";
import "./Navbar-module.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
