import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        <WeatherIcons name="day-sunny" size="2x"/>
        <span>{temperature}°</span>
    </div>  
);

export default WeatherTemperature;