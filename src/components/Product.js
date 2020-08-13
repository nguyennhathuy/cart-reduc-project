import React, { Component } from 'react';
import * as Messages from './../constants/message';

class Product extends Component {
    render() {
        var {product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={this.props.product.image}
                            className="img-fluid" alt={this.props.product.name} />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{this.props.product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(this.props.product.rating)}
                        </ul>
                        <p className="card-text">
                            {this.props.product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{this.props.product.price} $</span>
                            <span className="right" >
                                <a
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="" 
                                    data-original-title="Add to Cart"
                                    href="#something"
                                    onClick = {() => {this.onAddToCart(product)}}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onToggleMessage(Messages.MSG_ADD_TO_CART_SUCCESS);
    }

    showRating = (rating) => {
        var displayRating = [];
        for (var i = 1; i <= rating; i++) {
            displayRating.push(<li key={i}>
                <i className="fa fa-star"></i>
            </li>);
        }
        for (var j = 5; j > rating; j--) {
            displayRating.push(<li key={j}>
                <i className="fa fa-star-o"></i>
            </li>);
        }
        return displayRating;
    }
}

export default Product;
