import { COUNT_CART } from '../actions/counterAction';

export default function counterReducer(state = {}, action) {
  switch (action.type) {
    case COUNT_CART:
      return action.cart;
    default:
      return state;
  }
};
