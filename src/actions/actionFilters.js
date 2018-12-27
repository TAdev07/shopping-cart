import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getProductInCategory = (id) => (dispatch) => {
  return axios
    .get(`categories/${id}/products`)
    .then((res) => {
      const {data} = res;
      data.header.status === 200 &&
        dispatch({
          type: types.GET_PRODUCT_IN_CATEGORY,
          payload: data.body,
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
