import { USER_REGISTER, USER_LOGIN } from '../actions/userAction';

const initialState = { user: [], userData:[] };
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
    return { 
    	user: [...state.user, action.payload] 
    };  
    case USER_LOGIN:
    return {
    	userData: [...state.userData, action.payload]
    };
    default:
      return state;
  }
}