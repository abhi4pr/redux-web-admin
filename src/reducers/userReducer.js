import { USER_REGISTER, USER_LOGIN, UPDATE_PROFILE } from '../actions/userAction';

const initialState = { user: [], userData:[], userUp:[] };
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
    case UPDATE_PROFILE:
    return {
      userUp: [...state.userUp, action.payload]
    };
    default:
      return state;
  }
}