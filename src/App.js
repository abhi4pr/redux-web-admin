import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom'
import history from './history';
import Shop from './components/Shop';
import ProductInfo from './components/ProductInfo';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

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
        <Route exact path="/signup" component={SignUp} />
      </Router>
    );
  }
}

export default App;