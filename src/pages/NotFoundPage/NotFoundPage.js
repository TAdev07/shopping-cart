import React, {Component} from 'react';
import styles from './NotFoundPage.module.css';
import {Link} from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src={require('./404-page.png')} alt="" />
        <Link to="/">
          <h3 className={styles.title}>Go back to the homepage</h3>
        </Link>
      </div>
    );
  }
}
