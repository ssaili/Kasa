import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ cardIndex, cardBackground, cardTitle }) {
  return (
    <Link to={`/housing/${cardIndex}`}>
      <div className="card">
        <img
          className="card__background"
          src={cardBackground}
          alt={cardTitle}
        />
        <h2 className="card__title">{cardTitle}</h2>
      </div>
    </Link>
  );
}

Card.propTypes = {
  cardIndex: PropTypes.number.isRequired,
  cardBackground: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
};

export default Card;
