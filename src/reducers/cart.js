import * as types from '../constants/actionTypes';

const data = JSON.parse(localStorage.getItem('CART'));
const initialState = data ? data : [];

const products = (state = initialState, action) => {
  const {product, quantity} = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      let index = state.findIndex(
        (item) => item.product.id === action.product.id
      );
      if (index !== -1) {
        state[index].quantity += action.quantity;
      } else {
        state.push({product, quantity});
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default products;
