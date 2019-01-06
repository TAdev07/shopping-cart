import * as types from '../constants/actionTypes';

const query = `query {
  categories {
    id
    name
  }
}`;

export const getCategory = (_) => (dispatch) => {
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
      let all = {name: 'all'};
      dispatch({
        type: types.GET_CATEGORY,
        payload: [all, ...data.categories],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
