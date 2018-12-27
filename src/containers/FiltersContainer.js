import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filters from '../components/Filters/Filters';
import CategoryFilter from '../components/Filters/CategoryFilter';
import PriceFilter from '../components/Filters/PriceFilter';
import {getCategory, getProductInCategory, getProduct} from '../actions';

export class FiltersContainer extends Component {
  async componentDidMount() {
    const {getCategory} = this.props;
    await getCategory();
  }

  getProductInCategory = async (id, name) => {
    const {getProductInCategory, getProduct} = this.props;
    if (name.toUpperCase() === 'ALL') {
      await getProduct();
    } else {
      await getProductInCategory(id);
    }
  };

  render() {
    const {categories} = this.props;
    return (
      <div>
        <Filters>
          <CategoryFilter
            categories={categories}
            getProductInCategory={this.getProductInCategory}
          />
          <PriceFilter />
        </Filters>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  getCategory,
  getProductInCategory,
  getProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
