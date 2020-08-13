import React, { Component } from 'react';
import * as Messages from './../constants/message';

class CartItems extends Component {
    render() {
        var { product } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={product.product.image}
                        alt={product.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{product.product.name}</strong>
                    </h5>
                </td>
                <td>{product.product.price} $</td>
                <td className="center-on-small-only">
                    <span className="qty">{product.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = {() => {this.actToggleQuantity(product, -1)}}
                        >
                            <a href="/#">—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = {() => {this.actToggleQuantity(product, 1)}}
                        >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotalPriceMount(product.product.price, product.quantity)} $</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => { this.onDeleteCartItem(product) }}
                    >
                        X
                    </button>
                </td>
            </tr>

        );
    }
    showTotalPriceMount = (price, quantity) => {
        return price * quantity;
    }
    onDeleteCartItem = (product) => {
        this.props.onDeleteCartItem(product);
        this.props.actToggleMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    actToggleQuantity = (product, quantity) => {
        this.props.actToggleQuantity(product, quantity);
        this.props.actToggleMessage(Messages.MSG_UPDATE_CART_SUCCESS);
    }
}
export default CartItems;
