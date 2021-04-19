import { GET_BLOGS } from '../actions/productsAction';

const initialState = { blogs: [] }
export default function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return action.blogs;  
    default:
      return state;
  }
}