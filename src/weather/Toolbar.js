import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

function toolBar(props){
    const {unit,switchTemp}=props;
    // console.log(props);
    // console.log(switchTemp);
    // console.log(this);
    console.log(props);
    console.log(props.changeUnit);
    return (
        <nav>
        <div style={{flex:1}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>
  
          <button className="temp-switch" onClick={props.changeUnit()} >
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
const mapStateToProps = state => ({
  unit: state.unit
})


const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: () => dispatch(actions.changeUnit()),
    // decrease: (...args) => dispatch(actions.decrease(...args))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(toolBar);