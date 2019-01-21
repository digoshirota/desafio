import React from "react";
import PropTypes from "prop-types";

function Color(props) {
  return (

    <div className="cor">
      <h3>CORES</h3>
      <ul className="colors">
        <li filter={props.filter}></li>
      </ul>
    </div>

  		
  );
}

Color.propTypes = {
  filter: PropTypes.string.isRequired
};

export default Color;