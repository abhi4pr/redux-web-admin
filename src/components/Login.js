import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userAction';
import Header from './Header';
import Footer from './Footer';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
       email:'',
       password:''
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userLogin(this.state);
  };

  render() {
      return (
        <div>
         <Header />
            <nav class="breadcrumb-section theme1 bg-lighten2 pt-110 pb-110">
              <div class="container">
                  <div class="row">
                      <div class="col-12">
                          <div class="section-title text-center mb-15">
                              <h2 class="title text-dark text-capitalize">login</h2>
                          </div>
                      </div>
                      <div class="col-12">
                          <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li class="breadcrumb-item active" aria-current="page">Log in to your account </li>
                          </ol>
                      </div>
                  </div>
              </div>
            </nav>

            <div class="my-account pt-80 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="title text-capitalize mb-30 pb-25"> Log in to your account</h3>
                            <form class="log-in-form" onSubmit={ this.handleSubmit }>
                                <div class="form-group row">
                                    <label for="staticEmail" class="col-md-3 col-form-label">Email</label>
                                    <div class="col-md-6">
                                        <input type="email" name="email" required value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-md-3 col-form-label">Password</label>
                                    <div class="col-md-6">
                                        <div class="input-group mb-2 mr-sm-2">
                                           <input type="password" name="password" required value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="password" />
                                            <div class="input-group-prepend">
                                                <button type="button"
                                                    class="input-group-text  theme-btn--dark1 btn--md show-password">show</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="form-group row pb-3 text-center">
                                    <div class="col-md-6 offset-md-3">
                                        <div class="login-form-links">
                                            <a href="#" class="for-get">Forgot your password?</a>
                                            <div class="sign-btn">
                                               
                                                <button type="submit" className="btn theme-btn--dark1 btn--md">Sign In</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row text-center mb-0">
                                    <div class="col-12">
                                        <div class="border-top">
                                            <a href="register.html" class="no-account">No account? Create one here</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         <Footer /> 
        </div>
      )    
  }
}

const mapDispatchToProps = {userLogin};

export default connect(null, mapDispatchToProps)(Login);