import React from 'react';

export default function toolBar(props){
    const {unit,switchTemp}=props;
    // console.log(props);
    // console.log(switchTemp);
    // console.log(this);
    return (
        <nav>
        <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>

          <button className="temp-switch" onClick={switchTemp}>
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