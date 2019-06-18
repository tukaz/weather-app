import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation/';
import './style.css'



const LocationList = ({cities,onSelectedLocation}) => {

    const handleLocationClick = (city) => {
        onSelectedLocation(city);
    };
    
    const strToComponents = cities => (
        cities.map( (city,index ) => {
            return (
                <WeatherLocation 
                    key={index} 
                    city={city} 
                    onWeatherLocationClick={()=> {handleLocationClick(city)}}
                />
            )
        })
    );

    return (
        <div className="locationList">
            { strToComponents(cities) }
        </div>
    );

}

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
}

export default LocationList;