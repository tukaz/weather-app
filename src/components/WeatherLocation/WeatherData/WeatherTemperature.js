import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';

const icons = {
    sunny:'day-sunny',
    cloud:'cloud',
    cloudy:'cloudy',
    rain:'rain',
    mist: 'fog'
}

const getWeatherIcon = weatherState => {

    const icon = icons[weatherState];
    const size = '3x';

    return (<WeatherIcons className="wicon" name={(icon) ? icon : 'day-sunny'} size={size} />)
}

const WeatherTemperature = ({temperature,weatherState}) => {
    return (
        <div className="weatherTemperatureCont">
            {
                getWeatherIcon(weatherState)
            }
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">°C</span>
        </div> 
    );
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};


export default WeatherTemperature;