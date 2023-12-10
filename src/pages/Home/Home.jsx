import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/housing">Logement</Link>
      </nav>
      <h1>Page d'accueil 🏡</h1>
    </div>
  );
}

export default Home;
