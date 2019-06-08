import React from 'react';
import WeatherLocation from './';

const LocationList = () => (
    <div>
        <WeatherLocation city='Buenos Aires' />
        <WeatherLocation city='Tokyo' />
        <WeatherLocation city='California' />
    </div>
);

export default LocationList;