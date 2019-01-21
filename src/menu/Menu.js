import React from "react";
import PropTypes from "prop-types";

function Menu(props) {
  return (
  		<li><a href={props.path}>{props.name}</a></li>	
  );
}

Menu.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Menu;