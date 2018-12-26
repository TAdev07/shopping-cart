import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from 'react-router-dom';

export default class MenuItem extends React.Component {
  state = {
    active: false,
  };
  render() {
    const {menuItem, onHiddenMenu} = this.props;
    return (
      <li className={styles.navItem}>
        <NavLink
          exact
          activeClassName={styles.active}
          to={menuItem.to}
          onClick={onHiddenMenu}
        >
          {/* <i className={menuItem.icon} style={{paddingRight: '15px'}} /> */}
          {menuItem.name}
        </NavLink>
      </li>
    );
  }
}
