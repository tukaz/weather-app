import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './style.css';

const WeatherData = ({data : { temperature, humidity, wind, weatherState } }) => {
    return(
        <div className="weatherDataCont">
            <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );

}

WeatherData.propType = {
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
    })
}

export default WeatherData;