import PropTypes from "prop-types";
import Badge from "./Badge";
import Collapse from "./Collapse";
import Rating from "./Rating";

function HousingDescription({ housing }) {
  return (
    <div className="housing-description">
      <div className="housing-description__section-1">
        <div className="housing-description__section-1-left">
          <h1 className="housing-description__title">{housing.title}</h1>
          <p className="housing-description__location">{housing.location}</p>
        </div>
        <div className="housing-description__section-1-right">
          <p className="housing-description__host-name">{housing.host.name}</p>
          <img
            className="housing-description__host-photo"
            src={housing.host.picture}
            alt={housing.host.name}
          />
        </div>
      </div>
      <div className="housing-description__section-2">
        <div className="housing-description__badges">
          <Badge housing={housing} />
        </div>
        <div className="housing-description__rating">
          <Rating housing={housing} />
        </div>
      </div>
      <div className="housing-description__section-3">
        <Collapse collapseTitle="Description">
          <p>{housing.description}</p>
        </Collapse>
        <Collapse collapseTitle="Équipements">
          <ul>
            {housing.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

HousingDescription.propTypes = {
  housing: PropTypes.object.isRequired,
};

export default HousingDescription;
