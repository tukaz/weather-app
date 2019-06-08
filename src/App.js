import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList />
      </div>
    );
  }
}

export default App;
