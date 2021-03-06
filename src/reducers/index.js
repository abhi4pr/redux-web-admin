import { combineReducers } from 'redux';
import products from './productsReducer';
import product from './productReducer';
import userReducer from './userReducer';
import blogs from './blogsReducer';
import blog from './blogReducer';
import cartReducer from './cartReducer';
import cart from './counterReducer';
import cartDetails from './cartDetailsReducer';

export default combineReducers({
  products: products,
  product: product,
  userReducer: userReducer,
  blogs: blogs,
  blog: blog,
  cartReducer: cartReducer,
  cart: cart,
  cartDetails: cartDetails,
});