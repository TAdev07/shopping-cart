import React, {Component} from 'react';
import styles from './Layout.module.css';
import ProductsContainer from '../containers/ProductsContainer';
import MessageContainer from '../containers/MessageContainer';
import Banner from '../components/Banner/Banner';
import CategoriesContainer from '../containers/CategoriesContainer';
import FiltersContainer from '../containers/FiltersContainer';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className={styles.containerFluid}>
          <CategoriesContainer />
          <MessageContainer />
          <div className={styles.row}>
            <div className={styles.md_3}>
              <FiltersContainer />
            </div>
            <div className={styles.md_9}>
              <ProductsContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
