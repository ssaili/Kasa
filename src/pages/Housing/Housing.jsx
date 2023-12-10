import { Link } from "react-router-dom";

function Housing() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <h1>Page de logement</h1>
    </div>
  );
}

export default Housing;
