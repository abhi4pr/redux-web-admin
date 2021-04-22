import { CART_ITEMS, REMOVE_CART, UPDATE_CART } from '../actions/cartAction';

export default function cartDetailsReducer(state = {}, action) {
  switch (action.type) {
    case CART_ITEMS:
      return action.cartDetails;
    case REMOVE_CART:
      return state.filter(id => id !== action.payload);
    case UPDATE_CART:
    return {
      qty: action.qty,
      total_price: action.payload.total_price,
      pprice: action.payload.pprice,
    };  
    default:
      return state;
  }
};
