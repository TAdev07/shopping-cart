import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Menu.module.css';
import {connect} from 'react-redux';

class MenuCart extends Component {
  render() {
    const {cart} = this.props;
    let quantityOrder = 0;
    for (let item of cart) {
      quantityOrder += item.quantity;
    }
    return (
      <Link to="/cart" className={styles.cart}>
        <img src={require('../../images/shopping-cart.png')} alt="cart" />
        {quantityOrder !== 0 && (
          <div className={styles.badge}>
            <span>{quantityOrder}</span>
          </div>
        )}
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return {cart: state.cart};
};

export default connect(
  mapStateToProps,
  null
)(MenuCart);
