import * as Message from './../constants/message';
import * as Types from './../constants/actionTypes';


var initialState = Message.MSG_WELCOME;

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.TOGGLE_MESSAGE:
            state = action.message;
            return state;
        default:
            return state;
    }
}

export default myReducer;