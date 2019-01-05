import * as types from '../constants/actionTypes';

const productDetail = (state = [], action) => {
  switch (action.type) {
    case types.GET_PRODUCT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default productDetail;
