// import { combineReducers } from "redux";
import { CHANGE_UNIT, INIT_STATE } from "../actions/actions";
const initialState = {
    condition: {
    },
    forecast: {
    },
    unit: 'F'
}

function weather(state = initialState, action) {

    switch (action.type) {
        case CHANGE_UNIT:
            const newState = { ...state }
            if (state.unit === 'F') {
                newState.unit = 'C';
                console.log('c');
            } else {
                newState.unit = 'F';
                console.log('f');
            }
            return newState;
        case INIT_STATE:
            return initialState;
        default:
            return state;

    }
}
export default weather;