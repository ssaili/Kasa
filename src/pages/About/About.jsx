import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <h1>Page à propos</h1>
    </div>
  );
}

export default About;
