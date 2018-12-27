import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getCategory = (_) => (dispatch) => {
  return axios
    .get('categories')
    .then((res) => {
      const {data} = res;
      data.header.status === 200 &&
        dispatch({
          type: types.GET_CATEGORY,
          payload: data.body,
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
