import { CART_ITEMS } from '../actions/cartAction';

export default function cartDetailsReducer(state = {}, action) {
  switch (action.type) {
    case CART_ITEMS:
      return action.cartDetails;
    default:
      return state;
  }
};
