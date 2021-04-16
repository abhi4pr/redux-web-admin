import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class MyAccount extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }; 
    this.shoot = this.shoot.bind(this)
  }   

    componentDidMount() {
      let getValue = localStorage.getItem("userData");       
    }

    shoot() {
      localStorage.removeItem("userData");
    }

  render() {
      return (
        <div>
         <Header />
            <nav class="breadcrumb-section theme1 bg-lighten2 pt-110 pb-110">
              <div class="container">
                  <div class="row">
                      <div class="col-12">
                          <div class="section-title text-center mb-15">
                              <h2 class="title text-dark text-capitalize">my account</h2>
                          </div>
                      </div>
                      <div class="col-12">
                          <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li class="breadcrumb-item active" aria-current="page">my account</li>
                          </ol>
                      </div>
                  </div>
              </div>
            </nav>


          <div class="my-account pt-80 pb-50">
              <div class="container">
                  <div class="row">
                      <div class="col-12">
                          <h3 class="title text-capitalize mb-30 pb-25">my account</h3>
                      </div>
                      
                      <div class="col-lg-3 col-12 mb-30">
                          <div class="myaccount-tab-menu nav" role="tablist">
                              <a href="#dashboad" data-toggle="tab" class="active"><i class="fas fa-tachometer-alt"></i>
                                  Dashboard</a>

                              <a href="#orders" data-toggle="tab"><i class="fa fa-cart-arrow-down"></i>
                                  Orders</a>

                              <a href="#account-info" data-toggle="tab"><i class="fa fa-user"></i> Account
                                  Details</a>

                              <a onClick={this.shoot}><i class="fa fa-sign-out"></i> Logout</a>
                              
                          </div>
                      </div>
                      
                      <div class="col-lg-9 col-12 mb-30">
                          <div class="tab-content" id="myaccountContent">
                              
                              <div class="tab-pane fade active show" id="dashboad" role="tabpanel">
                                  <div class="myaccount-content">
                                      <h3>Dashboard</h3>

                                      <div class="welcome mb-20">
                                          <p>Hello, <strong></strong> (If Not <strong>Tuntuni !</strong><a
                                                  href="login-register.html" class="logout"> Logout</a>)</p>
                                      </div>

                                      <p class="mb-0">From your account dashboard. you can easily check &amp; view your
                                          recent orders, manage your shipping and billing addresses and edit your
                                          password and account details.</p>
                                  </div>
                              </div>
                              
                              <div class="tab-pane fade" id="orders" role="tabpanel">
                                  <div class="myaccount-content">
                                      <h3>Orders</h3>

                                      <div class="myaccount-table table-responsive text-center">
                                          <table class="table table-bordered">
                                              <thead class="thead-light">
                                                  <tr>
                                                      <th>No</th>
                                                      <th>Name</th>
                                                      <th>Date</th>
                                                      <th>Status</th>
                                                      <th>Total</th>
                                                      <th>Action</th>
                                                  </tr>
                                              </thead>

                                              <tbody>
                                                  <tr>
                                                      <td>1</td>
                                                      <td>Mostarizing Oil</td>
                                                      <td>Aug 22, 2018</td>
                                                      <td>Pending</td>
                                                      <td>$45</td>
                                                      <td><a href="shopping-cart.html" class="ht-btn black-btn">View</a>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>2</td>
                                                      <td>Katopeno Altuni</td>
                                                      <td>July 22, 2018</td>
                                                      <td>Approved</td>
                                                      <td>$100</td>
                                                      <td><a href="shopping-cart.html" class="ht-btn black-btn">View</a>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>3</td>
                                                      <td>Murikhete Paris</td>
                                                      <td>June 12, 2017</td>
                                                      <td>On Hold</td>
                                                      <td>$99</td>
                                                      <td><a href="shopping-cart.html" class="ht-btn black-btn">View</a>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                              
                              <div class="tab-pane fade" id="account-info" role="tabpanel">
                                  <div class="myaccount-content">
                                      <h3>Account Details</h3>

                                      <div class="account-details-form">
                                          <form action="#">
                                            <div class="row">
                                                <div class="col-lg-6 col-12 mb-30">
                                                    <input id="first-name" name="name" type="text" />
                                                </div>

                                                <div class="col-lg-6 col-12 mb-30">
                                                    <input id="last-name" name="email" type="email" />
                                                </div>

                                                <div class="col-12 mb-30">
                                                    <input id="display-name" name="password" type="password" />
                                                </div>

                                                <div class="col-12 mb-30">
                                                    <input id="email" name="address" type="text" />
                                                </div>

                                                <div class="col-12 mb-30">
                                                    <input id="current-pwd" name="number" type="text" />
                                                </div>

                                                <div class="col-12">
                                                    <button class="btn theme-btn--dark1 btn--md">Save
                                                        Changes</button>
                                                </div>

                                            </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                              
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
