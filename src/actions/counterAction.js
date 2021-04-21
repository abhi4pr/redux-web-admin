import axios from 'axios';

export const COUNT_CART = 'COUNT_CART';

export const countCart = (email) => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/countcart/${email}`)
      .then(response => {
        let bckresponse = response.data;
        dispatch({type: COUNT_CART, cart: bckresponse})
      })
      .catch(error => { throw(error); });
  };
};