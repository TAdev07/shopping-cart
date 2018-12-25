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
    message,
  };
};

export const actionDeleteProduct = (product, message) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product,
    message,
  };
};

export const actionUpdateProduct = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};
