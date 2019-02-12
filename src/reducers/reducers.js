import { CHANGE_UNIT } from "../actions/actions";
const initState = {
        condition: {

        },
        forecast: {

        },
        unit: 'F'
}

export default function weather(state = initState, action) {
    switch (action.type) {
        case CHANGE_UNIT:
            let newState = { ...state }
            if (newState.unit === 'F') {
                newState.unit = 'C';
            } else {
                newState.unit = 'F';
            }
            return newState;
        default:
        return state;

    }
}