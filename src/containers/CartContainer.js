import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItems from './../components/CartItems';
import TotalPrice from './../components/TotalPrice';
import PropTypes from 'prop-types';
import * as Message from './../constants/message';
import * as Actions from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItems(cart)}
                {this.showTotalPriceMount(cart)}
            </Cart>
        )
    }
    showCartItems = (cart) => {
        var result = [];
        if (cart.length > 0) {
            result = cart.map((product, index) => {
                return <CartItems key={index} product={product} onDeleteCartItem={this.props.onDeleteCartItem} actToggleMessage={this.props.actToggleMessage} actToggleQuantity={this.props.actToggleQuantity}/>
            });
        } else {
            result.push(
                <tr key={1}>
                    <td>
                        {Message.MSG_CART_EMPTY}
                    </td>
                </tr>
            );
        }
        return result;
    }
    showTotalPriceMount = (cart) => {
        var result = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                result += cart[i].product.price * cart[i].quantity;
            }
        }
        return <TotalPrice price={result} />;
    }
}



CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCartItem: (product) => {
            dispatch(Actions.actDeleteCartItem(product));
        },
        actToggleMessage: (message) => {
            dispatch(Actions.actToggleMessage(message));
        },
        actToggleQuantity: (product, quantity) => {
            dispatch(Actions.actToggleQuantity(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);