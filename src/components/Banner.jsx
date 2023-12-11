import PropTypes from "prop-types";

function Banner({ bannerBackground, bannerText }) {
  return (
    <div className="banner">
      <img
        className="banner__background"
        src={bannerBackground}
        alt="paysage eau, forêt et montagne"
      />
      <div className="banner__text">{bannerText}</div>
    </div>
  );
}

Banner.propTypes = {
  bannerBackground: PropTypes.string.isRequired,
  bannerText: PropTypes.string.isRequired,
};

export default Banner;
