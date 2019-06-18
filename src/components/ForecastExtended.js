import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {CircularProgress} from '@material-ui/core';
import {getURLWeatherForecast} from '../services/getURLWeatherLocation'
import {transForecast} from '../services/transformWeather'
import ForecastItem from './ForecastItem'
import './style.css';

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData : null
        }
    }

    updateForecastItem(city){
        const API_WEATHER = getURLWeatherForecast(city);
        fetch(API_WEATHER).then(
            resolve => resolve.json()
        ).then( foreCastData => {
            const newForecastData = transForecast(foreCastData);
            this.setState({
                forecastData: newForecastData
            });  
        })

    }

    componentDidMount() {
        this.updateForecastItem(this.props.city);
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.city !== this.props.city){
            this.setState({forecastData : null});
            this.updateForecastItem(nextProp.city);

        }
    }
    

    renderForecastItems(){
        const forecastItems = this.state.forecastData;
        return (
            forecastItems.map( (day) => {
                return (
                    <ForecastItem 
                        key={`${day.day}${day.hour}`} 
                        weekDay={day.day} 
                        hour={day.hour} 
                        data={day.data}
                    />
                )
            })
        );

    }

    renderProgress(){
        return(
            <CircularProgress/>
        )   
    }

    render(){

        const {forecastData} = this.state;
        return(
            <div>
                <h2>{this.props.city}</h2>
                { 
                    forecastData ?
                    this.renderForecastItems() :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : Proptypes.string,
}

export default ForecastExtended;