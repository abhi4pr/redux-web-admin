import { USER_REGISTER } from '../actions/userAction';

const initialState = { user: [] };
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
    return { 
    	user: [...state.user, action.payload] 
    };  
    default:
      return state;
  }
}