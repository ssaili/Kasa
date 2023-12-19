import { useState } from "react";
import upArrow from "../assets/arrow-up.png";
import downArrow from "../assets/arrow-down.png";
import PropTypes from "prop-types";

function Collapse({ collapseTitle, children }) {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div>
      <div className="collapse" onClick={toggle}>
        <p className="collapse__title">{collapseTitle}</p>
        {open ? (
          <img src={upArrow} alt="flèche vers le haut" />
        ) : (
          <img src={downArrow} alt="flèche vers le bas" />
        )}
      </div>
      {open ? null : <div className="collapse__content">{children}</div>}
    </div>
  );
}

Collapse.propTypes = {
  collapseTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Collapse;
