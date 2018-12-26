import * as types from '../constants/actionTypes';

export const addToCart = (product, quantity = 1) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    product,
    quantity,
  });
};

export const removeProductInCart = (product, message) => (dispatch) => {
  dispatch({
    type: types.DELETE_PRODUCT_IN_CART,
    product,
    message,
  });
};

export const updateProductInCart = (product, quantity) => (dispatch) => {
  dispatch({
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  });
};
