import React, { Component } from 'react';
import {Router, Route, Redirect} from 'react-router-dom';

  const PrivateRoute = ({ component: Component, ...rest }) => {
        return (
            <Route
                {...rest}
                render={(props) =>
                    localStorage.getItem('userData') ? (
                      <Component {...props} />
                        
                    ) : (
                            <Redirect to="/login" />
                        )
                }           
            />
        );
    };

export default PrivateRoute;    