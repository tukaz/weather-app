import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div>{weekDay} - {hour} hs</div>
        <WeatherData data={data} />
    </div>
)

ForecastItem.propTypes = {
    weekDay : PropTypes.string.isRequired,
}

export default ForecastItem;