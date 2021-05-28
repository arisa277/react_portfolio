import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Work">Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
