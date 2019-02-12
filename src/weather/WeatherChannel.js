import React from 'react';
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import Toolbar from './Toolbar';
import reducers from '../reducers/reducers';
import { createStore } from 'redux';
import { initState,changeUnit } from '../actions/actions';
const store = createStore(reducers);
console.log(store.getState());

export default class WeatherChannel extends React.Component {
    constructor(props) {
        super(props);
        // this.switchTemp = this.switchTemp.bind(this);

        this.state = store.getState();
    }
    componentWillMount() {
        // console.log(store.getState());
        store.subscribe(()=>{
            this.setState(store.getState());
            console.log(` mount${store.getState()}`)
        });
        // // // store.dispatch(initState());
   
       
    }
    render() {

        return (

            <React.Fragment>
                <Toolbar  unit={this.state.unit} store={store} />
                <main>
                    <CityCondition />
                    <Forecast />

                </main>

            </React.Fragment>


        )
    }

    // switchTemp() {
    //     console.log(this);
    //     if (this.state.unit === 'C')
    //         // this.state.unit = 'F';
    //         this.setState({ unit: 'F' })
    //     else
    //         // this.state.unit ='C';
    //         this.setState({ unit: 'C' });

    //     // console.log(this.state.unit)
    // }
}