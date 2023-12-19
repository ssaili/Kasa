import { useState } from "react";
import PropTypes from "prop-types";
import leftArrow from "../assets/arrow-left.png";
import rightArrow from "../assets/arrow-right.png";

function Slideshow({ housing }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  function increment() {
    pictureIndex + 1 < housing.pictures.length
      ? setPictureIndex(pictureIndex + 1)
      : setPictureIndex(0);
  }

  function decrement() {
    pictureIndex + 1 === 1
      ? setPictureIndex(housing.pictures.length - 1)
      : setPictureIndex(pictureIndex - 1);
  }

  return (
    <div className="slideshow">
      <img
        className="slideshow__background"
        src={housing.pictures[pictureIndex]}
        alt="flèche vers la gauche"
      />
      {housing.pictures.length === 1 ? null : (
        <>
          <img
            onClick={decrement}
            className="slideshow__left-arrow"
            src={leftArrow}
            alt="flèche vers la gauche"
          />
          <img
            onClick={increment}
            className="slideshow__right-arrow"
            src={rightArrow}
            alt="flèche vers la droite"
          />
          <p className="slideshow__photo-index">
            {pictureIndex + 1}/{housing.pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

Slideshow.propTypes = {
  housing: PropTypes.object.isRequired,
};

export default Slideshow;
