import React from "react";
import PropTypes from "prop-types";

function List(props) {
  return (

    <div className="list"  filter={props.filter} filter2={props.filter2}>
    	<div className="img-product"> 
    		<img src={props.image} alt={props.price}/>
    	</div>
    	<div className="price"> 
    		<h2>{props.name}</h2>
    		<h3>{props.price}</h3>
    		<a href={props.path}>COMPRAR</a>
    	</div>
    </div>

  		
  );
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default List;