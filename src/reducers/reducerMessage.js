import * as types from '../constants/actionTypes';
import * as message from '../constants/message';

const initialState = message.MSG_WELCOME;

const reducerMessage = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default reducerMessage;
