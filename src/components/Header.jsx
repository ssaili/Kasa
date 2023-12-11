import { Link } from "react-router-dom";
import headerLogo from "../assets/kasa-logo-header.png";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="logo de kasa" />
      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link className="header__menu-item-link" to="/">
              Accueil
            </Link>
          </li>
          <li className="header__menu-item">
            <Link className="header__menu-item-link" to="/about">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
