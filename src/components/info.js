import React, { Component } from 'react';
import PropTypes from 'prop-types';

// export default function Info({city}) {
//   return <p>your city:{city}</p>
// }

export default class Info extends Component {
  render() {
    const {city, humidity, temperature} = this.props;
    return(
      <div>
        <p>Your city: {city}</p>
        <p>humidity: {humidity}</p>
        <p>temperature: {Math.round(temperature)}&#176;C</p>
      </div>
    )
  }
}

Info.propTypes = {
  city: PropTypes.string.isRequired,
  humidity: PropTypes.number,
  temperature: PropTypes.number
}
