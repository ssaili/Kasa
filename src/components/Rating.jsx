import PropTypes from "prop-types";
import activeStar from "../assets/star-active.png";
import inactiveStar from "../assets/star-inactive.png";

function Rating({ housing }) {
  const activeStars = [];
  for (let i = 0; i < housing.rating; i++) {
    activeStars.push(<img key={i} src={activeStar} alt="étoile pleine" />);
  }

  const inactiveStars = [];
  for (let i = 0; i < 5 - housing.rating; i++) {
    inactiveStars.push(<img key={i} src={inactiveStar} alt="étoile vide" />);
  }

  return (
    <>
      {activeStars}
      {inactiveStars}
    </>
  );
}

Rating.propTypes = {
  housing: PropTypes.object.isRequired,
};

export default Rating;
