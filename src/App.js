import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom'
import history from './history';
import Shop from './components/Shop';
import ProductInfo from './components/ProductInfo';
import SignUp from './components/SignUp';

class App extends Component {
	
  constructor(props) {
      super(props);    
      this.state = {

      }  
  }  

  render() {
    return (
      <Router history={history}>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/productinfo/:id" component={ProductInfo} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    );
  }
}

export default App;