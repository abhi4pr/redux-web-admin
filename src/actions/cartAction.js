import axios from 'axios';
import history from '../history';

export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = ({ pid, pname, pprice, pimg, qty, total_price, email }) => {
  return (dispatch) => {
    return axios.post(`http://localhost:4000/api/addcart`, {pid, pname, pprice, pimg, qty, total_price, email})
      .then(response => {
        let data = response.data;

        //const UserData = "";
        
        dispatch({type: ADD_TO_CART, payload: {data}})
      })
      .then(() => {
        history.push("/shop")
      })
      .catch(error => { throw(error); });
  };
};