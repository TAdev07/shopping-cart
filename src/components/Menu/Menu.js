import React from 'react';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import MenuCart from './MenuCart';

const menuData = [
  {
    name: 'Home',
    to: '/',
    exact: true,
  },
  {
    name: 'Shop',
    to: '/shop',
    exact: true,
  },
  {
    name: 'Promotion',
    to: '/promotion',
    exact: true,
  },
  {
    name: 'BLog',
    to: '/blog',
    exact: true,
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: true,
  },
];

export default class NavLink extends React.Component {
  state = {
    showMenu: false,
  };

  onShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  };

  onHiddenMenu = () => {
    this.setState({showMenu: false});
  };

  render() {
    return (
      <nav className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={require('../../images/logo.png')} alt="logo" />
        </div>
        <div
          className={`${styles.navBar} ${
            this.state.showMenu ? styles.show : ''
          }`}
        >
          <div className={styles.close} onClick={this.onHiddenMenu} />
          <ul className={styles.nav}>
            {menuData.map((item, index) => (
              <MenuItem
                key={index}
                menuItem={item}
                onHiddenMenu={this.onHiddenMenu}
              />
            ))}
          </ul>
        </div>

        <div className={styles.toggle}>
          <span className={styles.title}>
            <img src={require('../../images/logo.png')} alt="logo" />
          </span>
          <span
            className={`fa ${this.state.showMenu ? 'fa-times' : 'fa-navicon'} ${
              styles.button
            }`}
            onClick={this.onShowMenu}
          />
        </div>
        <MenuCart />
      </nav>
    );
  }
}
