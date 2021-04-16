import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';

export const getProducts = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/getprods`)
      .then(response => {
        dispatch({type: GET_PRODUCTS, products: response.data})
      })
      .catch(error => { throw(error); });
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/getsprods/${id}`)
      .then(response => {
        dispatch({type: GET_PRODUCT, product: response.data});
      })
      .catch(error => { throw(error); });
  };
};