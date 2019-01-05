import React, {Component} from 'react';
import styles from './Filters.module.css';

export default class Filters extends Component {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}
