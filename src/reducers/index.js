import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';

const reducers = combineReducers({
  products,
  cart,
});

export default reducers;
