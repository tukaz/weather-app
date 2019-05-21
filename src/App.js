import React, { Component } from 'react';
import './App.css';
import WeatherData from './components/WeatherData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherData/>
      </div>
    );
  }
}

export default App;
