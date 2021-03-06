import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart/Cart';
import CartItem from '../components/Cart/CartItem';
import CartResult from '../components/Cart/CartResult';

import {
  removeProductInCart,
  changeMessage,
  updateProductInCart,
} from '../actions';

class CartContainer extends Component {
  showCartItem = (cart) => {
    let result = null;
    const {
      removeProductInCart,
      changeMessage,
      updateProductInCart,
    } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDeleteProduct={removeProductInCart}
            onChangeMessage={changeMessage}
            onUpdateProduct={updateProductInCart}
          />
        );
      });
    }
    return result;
  };

  showTotalPrice = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };

  render() {
    const {cart} = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalPrice(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStatetopProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeProductInCart,
  changeMessage,
  updateProductInCart,
};
export default connect(
  mapStatetopProps,
  mapDispatchToProps
)(CartContainer);
