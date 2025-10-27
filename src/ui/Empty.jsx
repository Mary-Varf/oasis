import PropTypes from "prop-types";

const Empty = ({ resource }) => {
  return <p>No {resource} could be found.</p>;
};

Empty.propTypes = {
  resource: PropTypes.string.isRequired,
};

export default Empty;
