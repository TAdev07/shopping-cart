import React, {Component} from 'react';
import styles from './Categories.module.css';

const images = {
  men: require('../../images/Menswear.jpg'),
  women: require('../../images/Womenswear.jpg'),
  accessories: require('../../images/accessories.jpg'),
};
export default class Category extends Component {
  render() {
    const {category} = this.props;
    return (
      <div className={styles.sm_4}>
        <img
          src={images[category.name]}
          className={styles.img}
          alt={category.name}
        />
        <div className={styles.title}>
          <h3>{category.name}</h3>
        </div>
      </div>
    );
  }
}
