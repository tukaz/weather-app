import React, {Component} from 'react';
import Proptypes from 'prop-types';
import ForecastItem from './ForecastItem'
import './style.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const dataItem = {
    temperature : 10,
    humidity: 10,
    weatherState: 'sun',
    wind: '10'
}

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            city : null
        }
    }

    renderForecastItem(){
        
        return(
            days.map( (day) => (
                <ForecastItem weekDay={day} hour="10" data={dataItem}/>
            ))
        )
    }

    render(){
        return(
            <div>
                <h2>{this.props.city}</h2>
                { this.renderForecastItem() }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : Proptypes.string,
}

export default ForecastExtended;