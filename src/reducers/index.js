import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import reducerMessage from './reducerMessage';

const reducers = combineReducers({
  products,
  cart,
  reducerMessage,
});

export default reducers;
