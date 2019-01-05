import React, {Component} from 'react';
import CartContainer from '../containers/CartContainer';
import AlertCartContainer from '../containers/AlertCartContainer';
import EmptyCart from '../components/Cart/EmptyCart';
import {connect} from 'react-redux';

class CartPage extends Component {
  render() {
    const {cart} = this.props;
    let quantityOrder = 0;
    for (let item of cart) {
      quantityOrder += item.quantity;
    }
    return (
      <>
        <AlertCartContainer />
        {quantityOrder === 0 ? <EmptyCart /> : <CartContainer />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null
)(CartPage);
