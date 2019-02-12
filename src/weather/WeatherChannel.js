import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Toolbar from './Toolbar';
import { connect } from 'react-redux'

class WeatherChannel extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.switchTemp = this.switchTemp.bind(this);
    //     // this.state = {}
    // }

    render() {
        console.log('weathercChannel log');
        console.log(this.state);
        return (
            
            <React.Fragment>
                <Toolbar unit={this.props.unit} />
                <main>
                    <CityCondition />
                    <Forecast />

                </main>
                            
            </React.Fragment>


        )
    }

}
const mapStateToProps = state => ({
    unit: state.unit
  })


export default connect(mapStateToProps)(WeatherChannel);