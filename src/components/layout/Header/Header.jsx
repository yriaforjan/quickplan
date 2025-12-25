import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favoritos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
