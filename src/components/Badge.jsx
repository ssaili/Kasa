import PropTypes from "prop-types";

function Badge({ housing }) {
  return (
    <>
      {housing.tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </>
  );
}

Badge.propTypes = {
  housing: PropTypes.object.isRequired,
};

export default Badge;
