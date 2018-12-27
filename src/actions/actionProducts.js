import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getProduct = (_) => (dispatch) => {
  return axios
    .get('products')
    .then((res) => {
      const {data} = res;
      data.header.status === 200 &&
        dispatch({
          type: types.GET_PRODUCT,
          payload: data.body,
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
