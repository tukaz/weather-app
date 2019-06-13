
import convert from 'convert-units';
import {
    SUN,
    CLOUD,
    DRIZZLE,
    RAIN,
    SNOW,
    THUNDER
} from '../constants/weatherState'

const getTemp = temp => {
        return parseInt(convert(temp).from('K').to('C').toFixed(0));
    }

const getWeatherState = (weather) => {
    const {id} = weather;
    if(id < 300){
        return THUNDER;
    } else if(id < 400){
        return DRIZZLE
    } else if(id < 600){
        return RAIN;
    } else if( id < 700){
        return SNOW;
    } else if( id < 800){
        return SUN;
    } else {
        return CLOUD;
    }
}

const transData = (weatherData) => {
        const {temp,humidity} = weatherData.main;
        const {wind} = weatherData;
        const data = {
            humidity: humidity,
            temperature: getTemp(temp),
            wind: wind.speed,
            weatherState: getWeatherState(weatherData.weather[0])
        }

        return data;
    }


export default transData;