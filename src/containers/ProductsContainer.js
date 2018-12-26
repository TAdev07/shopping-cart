import React, {Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import {addToCart, changeMessage, getProduct} from '../actions';

class ProductsContainer extends Component {
  async componentDidMount() {
    const {getProduct} = this.props;
    await getProduct();
  }

  showProducts = (products) => {
    let result = null;
    const {addToCart, changeMessage} = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={addToCart}
            onChangeMessage={changeMessage}
          />
        );
      });
    }
    return result;
  };

  render() {
    const {products} = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  changeMessage: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  changeMessage,
  getProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
