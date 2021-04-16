import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRegistration } from '../actions/userAction';
import Header from './Header';
import Footer from './Footer';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      address: '',
      number: ''
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userRegistration(this.state);
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
                              <h2 class="title text-dark text-capitalize">Register</h2>
                          </div>
                      </div>
                      <div class="col-12">
                          <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li class="breadcrumb-item active" aria-current="page">Register</li>
                          </ol>
                      </div>
                  </div>
              </div>
            </nav>

            <div class="register pt-80 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="title text-capitalize mb-30 pb-25">Create an account</h3>
                            <div class="log-in-form">
                                <form class="personal-information" onSubmit={ this.handleSubmit }>
                                    <div class="order-asguest theme1 mb-3">
                                        <span>Already have an account?</span>
                                        <a class="text-muted hover-color" href="login.html">Log in instead!</a>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-md-3 col-form-label">
                                            Social title
                                        </label>
                                        <div class="col-md-6">
                                            <div class="d-flex flex-wrap">
                                                <div class="custom-radio">
                                                    <input type="radio" id="test1" name="radio-group" />
                                                    <label for="test1">Mr</label>
                                                </div>
                                                <div class="custom-radio">
                                                    <input type="radio" id="test2" name="radio-group" />
                                                    <label for="test2">Mrs</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="firstname" class="col-md-3 col-form-label">First
                                            name</label>
                                        <div class="col-md-6">
                                            <input type="text" name="name" required value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-3 col-form-label">Email</label>
                                        <div class="col-md-6">
                                            <input type="email" name="email" required value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Password" class="col-md-3 col-form-label">Password</label>
                                        <div class="col-md-6">
                                            <div class="input-group mb-2 mr-sm-2">
                                                <input type="password" name="password" required value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="password" />

                                                <div class="input-group-prepend">
                                                    <button type="button"
                                                        class="input-group-text theme-btn--dark1 btn--md show-password">show</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="address" class="col-md-3 col-form-label">Address</label>
                                        <div class="col-md-6">
                                            <input type="text" name="address" required value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="address" />

                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="Number" class="col-md-3 col-form-label">Number</label>
                                        <div class="col-md-6">
                                            <input type="text" name="number" required value={this.state.number} onChange={this.handleChange} className="form-control" placeholder="number" />

                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-3"></div>
                                        <div class="col-md-6">
                                            <div class="check-box-inner pt-0">
                                                <div class="filter-check-box">
                                                    <input type="checkbox" id="20821" />
                                                    <label for="20821">Sign up for our newsletter</label>
                                                    <p class="pl-25">You may unsubscribe at any moment. For that purpose, please
                                                        find our contact info in the legal notice.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="sign-btn text-right">
                                               
                                                <button type="submit" className="btn theme-btn--dark1 btn--md">Create</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <Footer />  
        </div>
      )    
  }
}

const mapDispatchToProps = {userRegistration};

export default connect(null, mapDispatchToProps)(Register);