import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import reducerMessage from './reducerMessage';
import {categories} from './categories';

const reducers = combineReducers({
  products,
  cart,
  reducerMessage,
  categories,
});

export default reducers;
