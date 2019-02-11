import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.css';
import Header from './weather/Header';
import Footer from './weather/Footer';
import CityCondition from './weather/CityCondition';
import WeatherChannel from './weather/WeatherChannel';

class App extends Component {
  render() {
    return (
      <div class="weather-channel__container">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}

export default App;
