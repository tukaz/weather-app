import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LocationList from './../components/LocationList'
import { setCity } from './../actions';
import {connect} from 'react-redux';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
      }

    render() {
        return (
            <LocationList cities={this.props.cities} 
            onSelectedLocation={this.handleSelectedLocation} />
        )
    }
}

LocationListContainer.propType = {
    setCity : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired
} 
const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null,mapDispatchToProps)(LocationListContainer);

