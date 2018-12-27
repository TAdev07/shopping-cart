import React, {Component} from 'react';
import {connect} from 'react-redux';
import Alert from '../components/Alert/Alert';

class MessageContainer extends Component {
  render() {
    const {cart} = this.props;
    let quantityOrder = 0;
    for (let item of cart) {
      quantityOrder += item.quantity;
    }
    return <div>{quantityOrder === 0 && <Alert />}</div>;
  }
}

const mapStatetopProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(
  mapStatetopProps,
  null
)(MessageContainer);
