import React from 'react'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <div className="weather__extra__info">
            <span>{humidity + '%'}</span>
            <span>{wind + 'm/s'}</span>
        </div>
    </div>
);

export default WeatherExtraInfo;