import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_BLOGS = 'GET_BLOGS';
export const GET_SINGLE_BLOG = 'GET_SINGLE_BLOG';

export const getProducts = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/getprods`)
      .then(response => {
        dispatch({type: GET_PRODUCTS, products: response.data})
      })
      .catch(error => { throw(error); });
  };
};

export const getBlogs = () => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/getblo`)
      .then(response => {
        dispatch({type: GET_BLOGS, blogs: response.data})
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

export const getBlog = (id) => {
  return (dispatch) => {
    return axios.get(`http://localhost:4000/api/getsblo/${id}`)
      .then(response => {
        dispatch({type: GET_SINGLE_BLOG, blog: response.data});
      })
      .catch(error => { throw(error); });
  };
};