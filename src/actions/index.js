import * as types from '../constants/actionTypes';

export const actionAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};
