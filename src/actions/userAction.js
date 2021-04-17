import axios from 'axios';
import history from '../history';

export const USER_REGISTER = 'USER_REGISTER';
export const USER_LOGIN = 'USER_LOGIN';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const userRegistration = ({ name, email, password, address, number }) => {
  return (dispatch) => {
    return axios.post(`http://localhost:4000/api/cadd`, {name, email, password, address, number})
      .then(response => {
        let data = response.data;

        const UserData = {
          name: data.name,
          email: data.email,
          password: data.password,
          address: data.address,
          number: data.number
        }
        
        dispatch({type: USER_REGISTER, payload: {UserData}})
      })
      .then(() => {
        history.push("/shop")
      })
      .catch(error => { throw(error); });
  };
};

export const userLogin = ({email, password}) => {
  return (dispatch) => {
    return axios.post('http://localhost:4000/api/clogin', {email, password})
      .then(response => {
        let bckresponse = response.data;
        localStorage.setItem("userData",JSON.stringify(bckresponse));
        dispatch({type: USER_LOGIN, payload: {bckresponse}})
      })
      .then(() => {
        history.push("/myaccount")
      })
      .catch(error => { throw(error); });
  };
};

export const updateUser = (UpdateData) => {  
  return (dispatch) => {
    return axios.put(`http://localhost:4000/api/upuser/${UpdateData.id}`, {name:UpdateData.name, password:UpdateData.password, address:UpdateData.address, number:UpdateData.number})
      .then(response => {
        const data = "Profile Updated Successfully !";
        dispatch({type: UPDATE_PROFILE, payload: {data}})
      })
      .then(() => {
        history.push("/myaccount")
      })
      .catch(error => { throw(error); });
  };
};