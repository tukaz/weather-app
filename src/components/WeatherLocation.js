import React from 'react';

const WeatherLocation = (props) => {
    const {city} = props;
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
}
  


export default WeatherLocation;