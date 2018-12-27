import React, {Component} from 'react';
import styles from './Banner.module.css';

export default class Banner extends Component {
  render() {
    return (
      <div>
        <img
          src={require('../../images/SHOP_Banner.png')}
          className={styles.img}
          alt="shop banner"
        />
      </div>
    );
  }
}
