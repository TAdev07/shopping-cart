import * as types from '../constants/actionTypes';

const query = `query products {
  products {
    id
    name
    description
    rating
    price
    images {
      url
      alt
    }
  }
}`;

export const getProduct = (_) => (dispatch) => {
  return fetch('https://nordic-shop-api.herokuapp.com/', {
    credentials: 'omit',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      variables: {},
      query: query,
    }),
    method: 'POST',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((res) => {
      const {data} = res;
      dispatch({
        type: types.GET_PRODUCT,
        payload: data.products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
