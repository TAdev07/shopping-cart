import * as types from '../constants/actionTypes';

export const changeMessage = (message) => (dispatch) => {
  dispatch({
    type: types.CHANGE_MESSAGE,
    message,
  });
};
