import { GET_PRODUCTS } from '../actions/productsAction';

const initialState = { products: [] }
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;  
    default:
      return state;
  }
}