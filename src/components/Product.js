import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  //cone: true,
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf( ['white', 'eggshell-white', 'salmon'] ).isRequired,
  weight: PropTypes.number.isRequired,
  weight: function( props, propName, componentName ) {
    let weight = props[propName];
    if (weight === undefined) {
      return new Error("Sorry you must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Sorry weight must be a number.");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Must be within range of 80 to 300");
  }
};
