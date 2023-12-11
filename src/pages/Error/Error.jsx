import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Error() {
  return (
    <>
      <Header />
      <div className="error">
        <p className="error__name">404</p>
        <p className="error__description">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error__homepage-link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Error;
