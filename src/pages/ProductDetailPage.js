import React, {Component} from 'react';
import ProductDetailContainer from '../containers/ProductDetailContainer';

export default class ProductDetailPage extends Component {
  render() {
    const {match} = this.props;
    return (
      <div>
        <ProductDetailContainer match={match} />
      </div>
    );
  }
}
