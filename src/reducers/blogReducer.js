import { GET_SINGLE_BLOG } from '../actions/productsAction';

export default function blogReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_BLOG:
      return action.blog;
    default:
      return state;
  }
};
