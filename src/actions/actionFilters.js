import * as types from '../constants/actionTypes';

const query = (filter) => `query products {
  products(categoryId:"${filter}") {
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

export const getProductInCategory = (id) => (dispatch) => {
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
        type: types.GET_PRODUCT_IN_CATEGORY,
        payload: data.products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
