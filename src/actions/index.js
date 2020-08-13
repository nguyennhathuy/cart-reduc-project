import * as Types from './../constants/actionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actToggleMessage = (message) => {
    return {
        type: Types.TOGGLE_MESSAGE,
        message
    }
}

export const actDeleteCartItem = (product) => {
    return {
        type: Types.DELETE_CART_ITEM,
        product
    }
}

export const actToggleQuantity = (product, quantity) => {
    return {
        type: Types.TOGGLE_QUANTITY,
        product,
        quantity
    }
}