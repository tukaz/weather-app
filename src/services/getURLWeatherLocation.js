import {API_WEATHER_BASE_URL} from './../constants/api_weather'
import {API_WEATHER_FORECAST_URL} from './../constants/api_weather'
import {API_WEATHER_KEY} from './../constants/api_weather'

export const getURLWeatherLocation = city => {
    return `${API_WEATHER_BASE_URL}?q=${city}&appid=${API_WEATHER_KEY}`
}

export const getURLWeatherForecast = city => {
    return `${API_WEATHER_FORECAST_URL}?q=${city}&appid=${API_WEATHER_KEY}`
}
