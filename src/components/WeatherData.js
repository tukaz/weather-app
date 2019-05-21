import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherLocation from './WeatherLocation';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherLocation city='Santiago'/>
        <WeatherTemperature temperature={20} weatherState=''/>
        <WeatherExtraInfo humidity={80} wind={10} />
    </div>
);

export default WeatherData;