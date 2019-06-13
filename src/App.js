import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import LocationList from './components/LocationList';
import {Grid,Row,Col} from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended';

class App extends Component {

  constructor(){
    super();
    this.state = {
      selectedCity : null
    }
  }


  handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
    this.setState({
      selectedCity : city
    });
  }

  render() {
  
    const {selectedCity} = this.state;
    const cities = [
      'Buenos Aires',
      'Lima',
      'Moscu'
    ];


    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="subtitle1" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={5}>
              <div className="details">
                {
                  selectedCity &&
                  <ForecastExtended city={selectedCity} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
