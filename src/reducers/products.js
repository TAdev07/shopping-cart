import * as types from '../constants/actionTypes';

const products = (state = [], action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default products;
