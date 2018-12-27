import React, {Component} from 'react';
import styles from './Filters.module.css';

export default class CategoryFilter extends Component {
  state = {
    id: 0,
  };
  showcategoryFilter = (categories) => {
    let result = null;
    if (categories.length > 0) {
      result = categories.map((category, index) => {
        return (
          <li
            key={index}
            className={`${styles.category} ${
              this.state.id === index ? styles.action : ''
            }`}
            onClick={() => {
              this.props.getProductInCategory(category.id, category.name);
              this.setState({id: index});
            }}
          >
            {category.name}
          </li>
        );
      });
    }
    return result;
  };
  render() {
    const {categories} = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Product Category</h3>
        </div>
        <div className={styles.categories}>
          <ul className={styles.wrapperList}>
            {this.showcategoryFilter(categories)}
          </ul>
        </div>
      </div>
    );
  }
}
