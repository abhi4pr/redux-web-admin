import { GET_PRODUCT } from '../actions/productsAction';

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
