import React from 'react';
import {changeUnit} from '../actions/actions'

export default function toolBar(props){
    const {unit,store}=props;
    // console.log(props);
    // console.log(switchTemp);
    // console.log(this);
    // console.log(store);
   
    return (
  
        <nav>
        <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>

          <button className="temp-switch" onClick={()=>(store.dispatch(changeUnit()))}>
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{paddingRight:'5px'}}
            ></i>
            <sup>&deg;</sup>{unit}
          </button>
        </div>
      </nav>
    )
}