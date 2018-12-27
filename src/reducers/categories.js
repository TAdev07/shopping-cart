import * as types from '../constants/actionTypes';

export const categories = (state = [], action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
