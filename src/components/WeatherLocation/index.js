import React, {Component} from 'react';
import {CircularProgress} from '@material-ui/core';
import {PropTypes} from 'prop-types';
import WeatherData from './WeatherData';
import {getURLWeatherLocation} from '../../services/getURLWeatherLocation';
import {transData} from '../../services/transformWeather';
import Location from './Location';
import './style.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const {onWeatherLocationClick} = props;
        const {city} = props;
        this.state = {
            city,
            onWeatherLocationClick,
            data: null,
        }
    }                                                                    

    componentDidMount() {
        this.init();
    }
 
    componentDidUpdate(prevProps, prevState) {
        
    }                
 

    init = () => {
        const API_WEATHER = getURLWeatherLocation(this.state.city);
        fetch(API_WEATHER).then(
            resolve => resolve.json()
        ).then( weatherData => {
            const newData = transData(weatherData);
            this.setState({
                city: this.state.city,
                data: newData
            });  
        })
    }

    render(){
        const {city, data, onWeatherLocationClick} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} />
                { 
                    data ? 
                    <WeatherData data={data} /> :
                    <CircularProgress />
                }
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;