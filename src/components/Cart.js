import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center">
                                                <h3> 789 </h3>
                                            </td>
                                            <th class="text-center" scope="row">
                                                <img src="assets/img/product/2.jpg" alt="img" />
                                            </th>
                                            <td class="text-center">
                                                <span class="whish-title">Water and Wind Resistant</span>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    $38.24
                                                </span>
                                            </td>                                            
                                            <td class="text-center">
                                                <div class="product-count style">
                                                    <div class="count d-flex justify-content-center">
                                                        <input type="number" min="1" max="10" step="1" value="1" />
                                                        <div class="button-group">
                                                            <button class="count-btn increment"><i
                                                                    class="fas fa-chevron-up"></i></button>
                                                            <button class="count-btn decrement"><i
                                                                    class="fas fa-chevron-down"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                <span class="whish-list-price">
                                                    $38.24
                                                </span>
                                            </td>
                                        </tr>                                        
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
