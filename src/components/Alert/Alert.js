import React, {Component} from 'react';
import styles from './Alert.module.css';

class Alert extends Component {
  render() {
    return (
      <div className={`${styles.alert} ${styles.danger}`}>
        Giỏ hàng không có sản phẩm. Vui lòng thực hiện lại.
      </div>
    );
  }
}

export default Alert;
