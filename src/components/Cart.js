import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartItems, removeCart, updateCart } from '../actions/cartAction';
import Header from './Header';
import Footer from './Footer';

class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
       
    };
  }

  componentWillMount() {
    let getValue = localStorage.getItem("userData");     
    this.setState({ 
      getValue: JSON.parse(getValue), 
    }); 
  }

  componentDidMount() {
    const emailData = this.state.getValue.email;
    this.props.cartItems(emailData);
  }

  handleChange = (share) => (event) => {
    this.setState({ [event.target.name]: event.target.value });
    const cID = share._id;
    const pprice = share.pprice;
    const qty = event.target.value;
    const updateData = {cID: cID, pprice: pprice, qty: qty}
    this.props.updateCart(updateData);
  };

  deleteCart = (share) => (event) => {
    event.preventDefault();
    const id = share._id;
    this.props.removeCart(id);
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
                              <h2 class="title text-dark text-capitalize">cart</h2>
                          </div>
                      </div>
                      <div class="col-12">
                          <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li class="breadcrumb-item active" aria-current="page">cart</li>
                          </ol>
                      </div>
                  </div>
              </div>
            </nav>
            
             <section class="whish-list-section theme1 pt-80 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="title mb-30 pb-25 text-capitalize">Your cart items</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th class="text-center" scope="col">ID</th>
                                            <th class="text-center" scope="col">Product Image</th>
                                            <th class="text-center" scope="col">Product Name</th>
                                            <th class="text-center" scope="col">Price</th>
                                            <th class="text-center" scope="col">Qty</th>
                                            <th class="text-center" scope="col">Total Price</th>
                                            <th class="text-center" scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {this.props.cartDetails.length && this.props.cartDetails.map(share => {
                                     return ( 
                                       
                                        <tr key={share._id}>
                                            <td class="text-center">
                                                <p> {share.pid} </p>
                                            </td>
                                            <th class="text-center" scope="row">
                                                <img src="assets/img/product/2.jpg" alt="img" height="150px"/>
                                            </th>
                                            <td class="text-center">
                                                <span class="whish-title">{share.pname}</span>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    {share.pprice}
                                                </span>
                                            </td>                                            
                                            <td class="text-center">
                                                <div class="product-count style">
                                                    <div class="count d-flex justify-content-center">
                                                        <input type="number" onChange={this.handleChange(share)} defaultValue={share.qty} name="qty" min="1" max="10" step="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    {share.total_price}
                                                </span>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    <button onClick={this.deleteCart(share)} className="btn theme-btn--dark1 btn--md">Delete</button>
                                                </span>
                                            </td>
                                        </tr>   
                                       );
                                    })}  
                                                                           
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         
        <Footer />
        </div>
      ) 
    }
 }    

const mapStateToProps = (state) => ({ cartDetails: state.cartDetails });

const mapDispatchToProps = {cartItems, removeCart, updateCart};

export default connect(mapStateToProps,mapDispatchToProps)(Cart); 