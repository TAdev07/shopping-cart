import React, {Component} from 'react';
import styles from './Categories.module.css';

export default class Categories extends Component {
  render() {
    return (
      <div className={styles.mt_30}>
        <div className={styles.container}>
          <div className={styles.row}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
