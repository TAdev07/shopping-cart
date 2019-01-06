import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import * as message from '../constants/message';

class Product extends Component {
  showRating = (rating) => {
    let result = [];
    for (let i = 0; i < rating; i++) {
      result.push(
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      );
    }
    for (let j = 0; j < 5 - rating; j++) {
      result.push(
        <li key={j + 'o'}>
          <i className="fa fa-star-o" />
        </li>
      );
    }
    return result;
  };

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS);
  };

  render() {
    const {product} = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.images[0].url}
              className="img-fluid"
              alt={product.name}
            />
            <NavLink
              to={`product/${product.name.split(' ').join('-')}-${product.id}`}
            >
              <div className="mask waves-light waves-effect waves-light" />
            </NavLink>
          </div>
          <div className="card-body">
            <NavLink
              to={`product/${product.name.split(' ').join('-')}-${product.id}`}
            >
              <h4 className="card-title">
                <strong>
                  <a href=".#">{product.name}</a>
                </strong>
              </h4>
            </NavLink>
            <ul className="rating">{this.showRating(product.rating)}</ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <span
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                  onClick={() => {
                    this.onAddToCart(product);
                  }}
                >
                  <i className="fa fa-shopping-cart" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
