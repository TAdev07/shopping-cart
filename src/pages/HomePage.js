import React, {Component} from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import MessageContainer from '../containers/MessageContainer';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ProductsContainer />
        <MessageContainer />
      </div>
    );
  }
}
