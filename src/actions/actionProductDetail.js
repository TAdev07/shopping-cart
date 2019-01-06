import * as types from '../constants/actionTypes';

const query = (id) => `query products {
  product(productId: "${id}") {
    id
    name
    price
    description
    images {
      url
      alt
    }
    rating
  }
}`;

export const getProductDetail = (id) => (dispatch) => {
  return fetch('https://nordic-shop-api.herokuapp.com/', {
    credentials: 'omit',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      variables: {},
      query: query(id),
    }),
    method: 'POST',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((res) => {
      const {data} = res;
      dispatch({
        type: types.GET_PRODUCT_DETAIL,
        payload: data.product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
