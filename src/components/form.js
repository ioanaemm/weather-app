import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: ""
    };
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.state.city, this.state.country);
        }}
      >
        <input
          type="text"
          name="city"
          placeholder="City..."
          value={this.state.city}
          onChange={e => this.setState({ city: e.target.value })}
        />
        <input
          type="text"
          name="country"
          placeholder="Country..."
          value={this.state.country}
          onChange={e => this.setState({ country: e.target.value })}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
