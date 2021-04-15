import { combineReducers } from 'redux';
import products from './productsReducer';
import product from './productReducer';
import userReducer from './userReducer';

export default combineReducers({
  products: products,
  product: product,
  userReducer: userReducer,
});