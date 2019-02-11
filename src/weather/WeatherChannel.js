import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Toolbar from './Toolbar';

export default class WeatherChannel extends React.Component {
    constructor(props) {
        super(props);
        this.switchTemp = this.switchTemp.bind(this);
        this.state = {
            condition: {

            },
            forecast: {

            },
            unit: 'F'


        }
    }

    render() {
        return (
            
            <React.Fragment>
                <Toolbar unit={this.state.unit} switchTemp={this.switchTemp} />
                <main>
                    <CityCondition />
                    <Forecast />

                </main>
                            
            </React.Fragment>


        )
    }

    switchTemp() {
        console.log(this);
        if (this.state.unit === 'C')
            // this.state.unit = 'F';
            this.setState({ unit: 'F' })
        else
            // this.state.unit ='C';
            this.setState({ unit: 'C' });

        // console.log(this.state.unit)
    }
}