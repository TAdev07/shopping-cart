import React, {Component} from 'react';
import {connect} from 'react-redux';
import Categories from '../components/Categories/Categories';
import Category from '../components/Categories/Category';
import {getCategory} from '../actions';

class CategoriesContainer extends Component {
  async componentDidMount() {
    const {getCategory} = this.props;
    await getCategory();
  }
  showCategory = (categories) => {
    let result = null;
    result = categories.map((category) => {
      return (
        category.name.toUpperCase() !== 'ALL' && (
          <Category key={category.id} category={category} />
        )
      );
    });
    return result;
  };

  render() {
    const {categories} = this.props;
    return (
      <div>
        <Categories>{this.showCategory(categories)}</Categories>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories};
};

const mapDispatchToProps = {
  getCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
