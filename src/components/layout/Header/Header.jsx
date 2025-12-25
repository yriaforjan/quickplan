import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import logoMobile from "../../../assets/logo-mobile.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <picture>
          <source media="(max-width: 480px)" srcSet={logoMobile} />
          <img className="logo" src={logo} alt="QuickPlan Logo" />
        </picture>
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
