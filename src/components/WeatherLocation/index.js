import React, {Component} from 'react';
import {CircularProgress} from '@material-ui/core';
import {PropTypes} from 'prop-types';
import WeatherData from './WeatherData';
import getURLWeatherLocation from '../../services/getURLWeatherLocation';
import transData from '../../services/transformWeather';
import Location from './Location';
import './style.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        }
    }                                                                    

    componentDidMount() {
        this.handleClick();
    }
 
    componentDidUpdate(prevProps, prevState) {
        
    }                                                                                                                                                                                                           

    handleClick = () => {
        const API_WEATHER = getURLWeatherLocation(this.state.city);
        fetch(API_WEATHER).then(resolve => {
            return resolve.json();
        }).then( weatherData => {
            const newData = transData(weatherData);
            this.setState({
                city: this.state.city,
                data: newData
            });  
        })
    }

    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
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
    city : PropTypes.string.isRequired,
}

export default WeatherLocation;