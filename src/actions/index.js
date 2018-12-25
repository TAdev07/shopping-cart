import * as types from '../constants/actionTypes';

export const actionAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};

export const actionChangeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
}