import React, { Component } from 'react';
import Product from './../components/Product';
import Products from './../components/Products';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './../actions/index';

class ProductsContainer extends Component {

    render() {
        return (
            <Products>
                {this.showProducts(this.props.products)}
            </Products>
        );
    }
    showProducts = (products) => {
        var {onAddToCart, onToggleMessage} = this.props;
        if (products.length > 0) {
            var listProducts = products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onToggleMessage={onToggleMessage}/>
            })
            return listProducts;
        } else {
            return '';
        }
    }
}


ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
}


var mapStateToProps = state => {
    return {
        products: state.products
    }
}



const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(Actions.actAddToCart(product, 1));
        },
        onToggleMessage: (message) => {
            dispatch(Actions.actToggleMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);