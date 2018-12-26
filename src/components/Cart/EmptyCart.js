import React, {Component} from 'react';
import styles from './Cart.module.css';
import {Link} from 'react-router-dom';

export default class EmptyCart extends Component {
  render() {
    return (
      <div className={styles.emptyBox}>
        <img
          src={require('../../images/emptycart.png')}
          className={styles.empty}
          alt="empty cart"
        />
        <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
        <Link to="/">Tiếp tục mua sắm</Link>
      </div>
    );
  }
}
