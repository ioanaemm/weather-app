import React, { Component } from "react";
import axios from "axios";
import Titles from "./components/titles";
import Form from "./components/form";
import Info from "./components/info";

const weatherApiKey = "1fb14e31e0510d8d89c711fcac8ed115";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}&q=`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "London",
      info: null
    };
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    axios.get(`${url}${this.state.city}`).then(response => {
      this.setState({ info: response.data });
    });
  }

  render() {
    if (!this.state.info) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <Titles />
        <Form
          onSubmit={(city, country) => {
            console.log("city", city);
            console.log("country", country);
            this.setState({ city, country }, this.fetchWeatherData);
          }}
        />
        <Info
          city={this.state.city}
          humidity={this.state.info.main.humidity}
          temperature={this.state.info.main.temp - 273}
        />
      </div>
    );
  }
}

export default App;
