import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import Shop from './components/Shop';
import ProductInfo from './components/ProductInfo';
import Register from './components/Register';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Logout from './components/Logout';
import MyAccount from './components/MyAccount';
import PrivateRoute from './PrivateRoute';
import BlogInfo from './components/BlogInfo';
import Blogs from './components/Blogs';
import Cart from './components/Cart';

class App extends Component {
	
  constructor(props) {
      super(props);    
      this.state = {

      }   
  }  

  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/productinfo/:id" component={ProductInfo} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/bloginfo/:id" component={BlogInfo} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/cart" component={Cart} />
        <PrivateRoute exact path="/myaccount" component={MyAccount} />
      </Router>
    );
  }
}

export default App;