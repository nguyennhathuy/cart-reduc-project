import * as Types from './../constants/actionTypes';

var data = localStorage.getItem('items');
var initialState = data ? JSON.parse(data) : [];
var myReducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findIndex(state, action.product.id);
            if (index !== -1) {
                state[index].quantity += action.quantity;
            } else {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                })
            }
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        case Types.DELETE_CART_ITEM:
            index = findIndex(state, action.product.product.id);
            if(index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        case Types.TOGGLE_QUANTITY:
            index = findIndex(state, action.product.product.id);
            if(index !== -1) {
                if(state[index].quantity > 0) {
                    state[index].quantity += action.quantity;
                    if(state[index].quantity === 0) {
                        state[index].quantity = 1;
                    }
                }
            }
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

var findIndex = (cart, idProduct) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (idProduct === cart[i].product.id) {
                index = i;
                return index;
            }
        }
    }
    return index;
}

export default myReducer;