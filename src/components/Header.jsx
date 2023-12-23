import { NavLink } from "react-router-dom";
import headerLogo from "../assets/kasa-logo-header.png";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="logo de kasa" />
      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__menu-item-link header__menu-item-link--active"
                  : "header__menu-item-link"
              }
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "header__menu-item-link header__menu-item-link--active"
                  : "header__menu-item-link"
              }
              to="/about"
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
