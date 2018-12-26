import {GET_PRODUCT} from '../constants/actionTypes';
import axios from 'axios';

export const getProduct = (_) => (dispatch) => {
  return axios
    .get('products')
    .then((res) => {
      const {data} = res;
      data.header.status === 200 &&
        dispatch({
          type: GET_PRODUCT,
          payload: data.body,
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
