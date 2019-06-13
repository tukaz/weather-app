import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    DRIZZLE,
    RAIN,
    SNOW,
    THUNDER
} from '../../../constants/weatherState'
import './style.css';

const icons = {
    [SUN]:'day-sunny',
    [CLOUD]:'cloud',
    [RAIN]:'rain',
    [DRIZZLE]: 'day-showers',
    [THUNDER]: 'day-thunderstorm',
    [SNOW]: 'snow'
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