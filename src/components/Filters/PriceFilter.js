import React, {Component} from 'react';
import styles from './Filters.module.css';

export default class CategoryFilter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Filter by Price</h3>
        </div>
        <div className={styles.categories} />
      </div>
    );
  }
}
