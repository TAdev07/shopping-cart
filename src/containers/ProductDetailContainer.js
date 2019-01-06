import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductDetail, addToCart} from '../actions';
import ProductDetail from '../components/ProductDetail/ProductDetail';

export class ProductDetailContainer extends Component {
  async componentDidMount() {
    const {name} = this.props.match.params;
    const id = name.slice(name.lastIndexOf() - 1);
    await this.props.getProductDetail(id);
  }
  render() {
    const {productDetail, addToCart} = this.props;
    return (
      <div>
        <ProductDetail product={productDetail} onAddToCart={addToCart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {productDetail: state.productDetail};
};

const mapDispatchToProps = {
  getProductDetail,
  addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);
