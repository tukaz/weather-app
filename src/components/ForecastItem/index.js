import React from 'react';
import PropTypes from 'prop-types'
import './style.css';
import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => (
    <div className="forecastItemsWrapper">
        <div className="forecastItemDate">{weekDay} - {hour} hs</div>
        <WeatherData data={data} />
    </div>
)

ForecastItem.propTypes = {
    weekDay : PropTypes.string.isRequired,
}

export default ForecastItem;