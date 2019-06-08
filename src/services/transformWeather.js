
import convert from 'convert-units';

const getTemp = temp => {
        return Number(convert(temp).from('K').to('C')).toFixed(0);
    }

const transData = (weatherData) => {
        const {temp,humidity} = weatherData.main;
        const {wind} = weatherData;
        const weatherState = 'sunny';

        const data = {
            humidity: humidity,
            temperature: getTemp(temp),
            wind: wind.speed,
            weatherState: weatherState
        }

        return data;
    }


export default transData;