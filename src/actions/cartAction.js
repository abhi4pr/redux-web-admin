import axios from 'axios';
import history from '../history';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CART_ITEMS = 'CART_ITEMS';
export const REMOVE_CART = 'REMOVE_CART';
export const UPDATE_CART = 'UPDATE_CART';

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

export const cartItems = (email) => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/cartbyid/${email}`)
      .then(response => {
        dispatch({type: CART_ITEMS, cartDetails: response.data});
      })
      .catch(error => { throw(error); });
  };
};

export const removeCart = (id) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:4000/api/removecart/${id}`)
      .then(response => {
        const sms = "Cart removed Successfully !"
        dispatch({type: REMOVE_CART, payload: {sms}})
      })
      .catch(error => { throw(error); });
  };
};

export const updateCart = (updateData) => {  
  return (dispatch) => {
    return axios.put(`http://localhost:4000/api/updtcart/${updateData.cID}`, {pprice:updateData.pprice, qty:updateData.qty})
      .then(response => {
        //const data = "Cart Updated !!!";
        const data = response.data;
        dispatch({type: UPDATE_CART, payload: {qty: data.qty, total_price: data.total_price, pprice: data.pprice}})
      })
      .then(() => {
        window.location.reload();
      })
      .catch(error => { throw(error); });
  };
};