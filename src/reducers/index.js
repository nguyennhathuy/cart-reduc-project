import {combineReducers} from 'redux';
import products from './products';
import cart from './cartItems';
import message from './message';

var myReducer = combineReducers({
    products,
    cart,
    message
});

export default myReducer;