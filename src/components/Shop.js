import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productsAction';
import Header from './Header';
import Footer from './Footer';

class Shop extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }   

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  render() {
    if(this.props.products.length) {
      return (
        <div>
         <Header />
          <nav class="breadcrumb-section theme1 bg-lighten2 pt-110 pb-110">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center mb-15">
                            <h2 class="title text-dark text-capitalize">Products</h2>
                        </div>
                    </div>
                    <div class="col-12">
                        <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </div>
                </div>
            </div>
          </nav>
           <div class="product-tab bg-white pt-80 pb-50">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-9 mb-30">
                          <div class="grid-nav-wraper bg-lighten2 mb-30">
                              <div class="row align-items-center">
                                  <div class="col-12 col-md-6 mb-3 mb-md-0">
                                      <nav class="shop-grid-nav">
                                          <ul class="nav nav-pills align-items-center" id="pills-tab" role="tablist">
                                              <li class="nav-item">
                                                  <a class="nav-link active" id="pills-home-tab" data-toggle="pill"
                                                      href="#pills-home" role="tab" aria-controls="pills-home"
                                                      aria-selected="true">
                                                      <i class="fa fa-th"></i>

                                                  </a>
                                              </li>
                                              <li class="nav-item mr-0">
                                                  <a class="nav-link" id="pills-profile-tab" data-toggle="pill"
                                                      href="#pills-profile" role="tab" aria-controls="pills-profile"
                                                      aria-selected="false"><i class="fa fa-list"></i></a>
                                              </li>
                                              <li> <span class="total-products text-capitalize">There are 13 products.</span></li>
                                          </ul>
                                      </nav>
                                  </div>
                                  <div class="col-12 col-md-6 position-relative">
                                      <div class="shop-grid-button d-flex align-items-center">
                                          <span class="sort-by">Sort by:</span>
                                          <button class="btn-dropdown rounded d-flex justify-content-between" type="button"
                                              id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                              aria-expanded="false">
                                              Relevance <span class="ion-android-arrow-dropdown"></span>
                                          </button>
                                          <div class="dropdown-menu shop-grid-menu" aria-labelledby="dropdownMenuButton">
                                              <a class="dropdown-item" href="#">Relevance</a>
                                              <a class="dropdown-item" href="#"> Name, A to Z</a>
                                              <a class="dropdown-item" href="#"> Name, Z to A</a>
                                              <a class="dropdown-item" href="#"> Price, low to high</a>
                                              <a class="dropdown-item" href="#"> Price, high to low</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <div class="tab-content" id="pills-tabContent">                              
                              <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                  aria-labelledby="pills-home-tab">
                                  <div class="row grid-view theme1">
                                    {this.props.products.map(product => {
                                     return ( 
                                      <div class="col-sm-6 col-lg-4 col-xl-3 mb-30" key={product._id}>
                                          <div class="card product-card">
                                              <div class="card-body">
                                                  <div class="product-thumbnail position-relative">
                                                      <span class="badge badge-danger top-right">New</span>
                                                      <a href="/productinfo/${product._id}">
                                                          <img class="first-img" src="assets/img/product/1.jpg" alt="thumbnail" />
                                                      </a>
                                                      
                                                      <ul class="product-links d-flex justify-content-center">
                                                          <li>
                                                              <a href="wishlist.html">
                                                                  <span data-toggle="tooltip" data-placement="bottom"
                                                                      title="add to wishlist" class="icon-heart"> </span>
                                                              </a>
                                                          </li>
                                                          <li>
                                                              <a href="#" data-toggle="modal" data-target="#compare">
                                                                  <span data-toggle="tooltip" data-placement="bottom"
                                                                      title="Add to compare" class="icon-shuffle"></span>
                                                              </a>
                                                          </li>
                                                          <li>
                                                              <a href="#" data-toggle="modal" data-target="#quick-view">
                                                                  <span data-toggle="tooltip" data-placement="bottom"
                                                                      title="Quick view" class="icon-magnifier"></span>
                                                              </a>
                                                          </li>
                                                      </ul>
                                                      
                                                  </div>
                                                  <div class="product-desc py-0">
                                                      <h3 class="title"><a href="shop-grid-4-column.html">{product.pname}</a></h3>
                                                      <div class="star-rating">
                                                          <span class="ion-ios-star"></span>
                                                          <span class="ion-ios-star"></span>
                                                          <span class="ion-ios-star"></span>
                                                          <span class="ion-ios-star"></span>
                                                          <span class="ion-ios-star de-selected"></span>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between">
                                                          <h6 class="product-price">{product.pprice}</h6>
                                                          <button class="pro-btn" data-toggle="modal"
                                                              data-target="#add-to-cart"><i class="icon-basket"></i></button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                      </div>
                                     );
                                    })}                                        
                                  </div>
                              </div>                              
                              
                          </div>
                          
                      </div>
                      <div class="col-lg-3 mb-30 order-lg-first">
                          <aside class="left-sidebar theme1">

                              <div class="search-filter">
                                  <form action="#">
                                      <div class="check-box-inner mt-10">
                                          <h4 class="title">Filter By</h4>
                                          <h4 class="sub-title pt-10">Categories</h4>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="20820" />
                                              <label for="20820">Digital Cameras <span>(13)</span></label>
                                          </div>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="20821" />
                                              <label for="20821">Camcorders <span>(13)</span></label>
                                          </div>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="20822" />
                                              <label for="20822">Camera Drones<span>(13)</span></label>
                                          </div>
                                      </div>
                                      
                                      <div class="check-box-inner mt-10">
                                          <h4 class="sub-title">Price</h4>
                                          <div class="price-filter mt-10">
                                              <div class="price-slider-amount">
                                                  <input type="text" id="amount" name="price" readonly
                                                      placeholder="Add Your Price" />
                                              </div>
                                              <div id="slider-range"></div>
                                          </div>
                                      </div>
                                      <div class="check-box-inner mt-10">
                                          <h4 class="sub-title">Size</h4>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="test9" />
                                              <label for="test9">s <span>(2)</span></label>
                                          </div>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="test10" />
                                              <label for="test10">m <span>(2)</span></label>
                                          </div>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="test11" />
                                              <label for="test11">l <span>(2)</span></label>
                                          </div>
                                          <div class="filter-check-box">
                                              <input type="checkbox" id="test12" />
                                              <label for="test12">xl <span>(2)</span></label>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                              
                          </aside>
                      </div>
                  </div>
              </div>
          </div>
         <Footer /> 
        </div>
      )
    } else {
      return (<div>No Products</div>)
    }      
  }
}

const mapStateToProps = (state) => ({
 products: state.products 
});

export default connect(mapStateToProps)(Shop);