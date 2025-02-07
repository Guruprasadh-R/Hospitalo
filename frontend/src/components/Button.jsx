// src/components/Button.jsx

import PropTypes from "prop-types";

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

// Define prop types
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Ensure onClick is validated
};

export default Button;
