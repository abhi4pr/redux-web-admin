import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
 <React.StrictMode>	
  <Provider store={store}>
    <App />
  </Provider>
 </React.StrictMode>, 
  document.getElementById('root')
);
