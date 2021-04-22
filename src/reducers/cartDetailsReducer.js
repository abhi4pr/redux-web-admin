import { CART_ITEMS, REMOVE_CART } from '../actions/cartAction';

export default function cartDetailsReducer(state = {}, action) {
  switch (action.type) {
    case CART_ITEMS:
      return action.cartDetails;
    case REMOVE_CART:
      return state.filter(id => id !== action.payload);
    default:
      return state;
  }
};
