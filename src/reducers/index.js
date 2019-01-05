import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import reducerMessage from './reducerMessage';
import {categories} from './categories';
import productDetail from './productDetail';

const reducers = combineReducers({
  products,
  cart,
  reducerMessage,
  categories,
  productDetail,
});

export default reducers;
