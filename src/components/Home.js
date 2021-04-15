import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }   

  render() {
    return (
        <div>
           <Header /> 
            
            <div class="row">
                <div class="col-md-12 mr-auto ml-auto">
                    <div class="card card-raised card-carousel">
                        <div id="carouselindicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselindicators" data-slide-to="0" class=""></li>
                                <li data-target="#carouselindicators" data-slide-to="1" class="active"></li>
                                <li data-target="#carouselindicators" data-slide-to="2" class=""></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active carousel-item-left"> <img class="d-block w-100" src="https://i.imgur.com/kjR96mD.jpg" alt="First slide" height="400px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4> <i class="fa fa-map-marker"></i> Dharamshala,Himachal Pradesh, India </h4>
                                    </div>
                                </div>
                                <div class="carousel-item carousel-item-next carousel-item-left"> <img class="d-block w-100" src="https://i.imgur.com/l3iUv92.jpg" alt="Second slide" height="400px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4> <i class="fa fa-map-marker"></i> Manali,Himachal Pradesh, India </h4>
                                    </div>
                                </div>
                                <div class="carousel-item"> <img class="d-block w-100" src="https://i.imgur.com/rHCSTM1.jpg" alt="Third slide" height="400px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h4> <i class="fa fa-map-marker"></i> Kerala,Kerala, India </h4>
                                    </div>
                                </div>
                            </div> <a class="carousel-control-prev" href="#carouselindicators" role="button" data-slide="prev" data-abc="true"> <i class="fa fa-chevron-left"></i> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselindicators" role="button" data-slide="next" data-abc="true"> <i class="fa fa-chevron-right"></i> <span class="sr-only">Next</span> </a>
                        </div>
                    </div>
                </div>
            </div>

            <section class="product-tab bg-white pt-50 pb-80">
                <div class="container">
                    <div class="product-tab-nav mb-35">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="section-title text-center mb-30">
                                    <h2 class="title text-dark text-capitalize">Our products</h2>
                                    <p class="text mt-10">Add our products to weekly line up</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-3">
                           <div class="product-list">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-success top-left">-10%</span>
                                                <span class="badge badge-danger top-right">New</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="assets/img/product/6.jpg"
                                                        alt="thumbnail" />
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
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html">New Balance
                                                            Running Arishi trainers in triple</a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price"><del class="del">$23.90</del>
                                                            <span class="onsale">$21.51</span></h6>
                                                        <button class="pro-btn" data-toggle="modal"
                                                            data-target="#add-to-cart"><i
                                                                class="icon-basket"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                
                           </div> 
                        </div>
                        <div class="col-md-3">
                           <div class="product-list">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-success top-left">-10%</span>
                                                <span class="badge badge-danger top-right">New</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="assets/img/product/6.jpg"
                                                        alt="thumbnail" />
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
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html">New Balance
                                                            Running Arishi trainers in triple</a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price"><del class="del">$23.90</del>
                                                            <span class="onsale">$21.51</span></h6>
                                                        <button class="pro-btn" data-toggle="modal"
                                                            data-target="#add-to-cart"><i
                                                                class="icon-basket"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                
                           </div> 
                        </div>
                        <div class="col-md-3">
                           <div class="product-list">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-success top-left">-10%</span>
                                                <span class="badge badge-danger top-right">New</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="assets/img/product/6.jpg"
                                                        alt="thumbnail" />
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
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html">New Balance
                                                            Running Arishi trainers in triple</a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price"><del class="del">$23.90</del>
                                                            <span class="onsale">$21.51</span></h6>
                                                        <button class="pro-btn" data-toggle="modal"
                                                            data-target="#add-to-cart"><i
                                                                class="icon-basket"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                
                           </div> 
                        </div>
                        <div class="col-md-3">
                           <div class="product-list">
                                <div class="card product-card">
                                    <div class="card-body p-0">
                                        <div class="media flex-column">
                                            <div class="product-thumbnail position-relative">
                                                <span class="badge badge-success top-left">-10%</span>
                                                <span class="badge badge-danger top-right">New</span>
                                                <a href="single-product.html">
                                                    <img class="first-img" src="assets/img/product/6.jpg"
                                                        alt="thumbnail" />
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
                                            <div class="media-body">
                                                <div class="product-desc">
                                                    <h3 class="title"><a href="shop-grid-4-column.html">New Balance
                                                            Running Arishi trainers in triple</a></h3>
                                                    <div class="star-rating">
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star"></span>
                                                        <span class="ion-ios-star de-selected"></span>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h6 class="product-price"><del class="del">$23.90</del>
                                                            <span class="onsale">$21.51</span></h6>
                                                        <button class="pro-btn" data-toggle="modal"
                                                            data-target="#add-to-cart"><i
                                                                class="icon-basket"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                                
                           </div> 
                        </div>
                    </div>
                </div>
            </section>

            <section class="static-media-section pb-80 bg-white">
                <div class="container">
                    <div class="static-media-wrap theme-bg rounded-5">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6 py-3">
                                <div class="d-flex static-media2 flex-column flex-sm-row">
                                    <img class="align-self-center mb-2 mb-sm-0 mr-auto  mr-sm-3" src="assets/img/icon/2.png"
                                        alt="icon" />
                                    <div class="media-body">
                                        <h4 class="title text-capitalize text-white">Free Shipping</h4>
                                        <p class="text text-white">On all orders over $75.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 py-3">
                                <div class="d-flex static-media2 flex-column flex-sm-row">
                                    <img class="align-self-center mb-2 mb-sm-0 mr-auto  mr-sm-3" src="assets/img/icon/3.png"
                                        alt="icon" />
                                    <div class="media-body">
                                        <h4 class="title text-capitalize text-white">Free Returns</h4>
                                        <p class="text text-white">Returns are free within 9 days</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 py-3">
                                <div class="d-flex static-media2 flex-column flex-sm-row">
                                    <img class="align-self-center mb-2 mb-sm-0 mr-auto  mr-sm-3" src="assets/img/icon/4.png"
                                        alt="icon" />
                                    <div class="media-body">
                                        <h4 class="title text-capitalize text-white">100% Payment Secure</h4>
                                        <p class="text text-white">Your payment are safe with us.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 py-3">
                                <div class="d-flex static-media2 flex-column flex-sm-row">
                                    <img class="align-self-center mb-2 mb-sm-0 mr-auto  mr-sm-3" src="assets/img/icon/5.png"
                                        alt="icon" />
                                    <div class="media-body">
                                        <h4 class="title text-capitalize text-white">Support 24/7</h4>
                                        <p class="text text-white">Contact us 24 hours a day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-section theme1 pb-65">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title text-center mb-30">
                                <h2 class="title text-dark text-capitalize">Latest Blogs</h2>
                                <p class="text mt-10">Present posts in a best way to highlight interesting moments of your blog.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">

                            <div class="single-blog">
                                <a class="blog-thumb mb-20 zoom-in d-block overflow-hidden"
                                    href="blog-grid-left-sidebar.html">
                                    <img src="assets/img/blog-post/1.jpg" alt="blog-thumb-naile" />
                                </a>
                                <div class="blog-post-content">
                                    <a class="blog-link theme-color d-inline-block mb-10 text-uppercase"
                                        href="https://themeforest.net/user/hastech">Fashion</a>
                                    <h3 class="title text-capitalize mb-15"><a href="single-blog.html">This is first
                                            Post For XipBlog</a></h3>
                                    <h5 class="sub-title"> Posted by <a class="blog-link theme-color d-inline-block mx-1"
                                            href="https://themeforest.net/user/hastech">HasTech</a>31TH Aug 2020</h5>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">        
                            <div class="single-blog">
                                <a class="blog-thumb mb-20 zoom-in d-block overflow-hidden"
                                    href="blog-grid-left-sidebar.html">
                                    <img src="assets/img/blog-post/2.jpg" alt="blog-thumb-naile" />
                                </a>
                                <div class="blog-post-content">
                                    <a class="blog-link theme-color d-inline-block mb-10 text-uppercase"
                                        href="https://themeforest.net/user/hastech">Fashion</a>
                                    <h3 class="title text-capitalize mb-15"><a href="single-blog.html">This is Secound
                                            Post For XipBlog</a></h3>
                                    <h5 class="sub-title"> Posted by <a class="blog-link theme-color d-inline-block mx-1"
                                            href="https://themeforest.net/user/hastech">HasTech</a>31TH Aug 2020</h5>

                                </div>
                            </div>
                         </div>
                         <div class="col-md-3">       
                            <div class="single-blog">
                                <a class="blog-thumb mb-20 zoom-in d-block overflow-hidden"
                                    href="blog-grid-left-sidebar.html">
                                    <img src="assets/img/blog-post/3.jpg" alt="blog-thumb-naile" />
                                </a>
                                <div class="blog-post-content">
                                    <a class="blog-link theme-color d-inline-block mb-10 text-uppercase"
                                        href="https://themeforest.net/user/hastech">Fashion</a>
                                    <h3 class="title text-capitalize mb-15"><a href="single-blog.html">This is third
                                            Post For XipBlog</a></h3>
                                    <h5 class="sub-title"> Posted by <a class="blog-link theme-color d-inline-block mx-1"
                                            href="https://themeforest.net/user/hastech">HasTech</a>31TH Aug 2020</h5>

                                </div>
                            </div>
                         </div>
                         <div class="col-md-3">       
                            <div class="single-blog">
                                <a class="blog-thumb mb-20 zoom-in d-block overflow-hidden"
                                    href="blog-grid-left-sidebar.html">
                                    <img src="assets/img/blog-post/4.jpg" alt="blog-thumb-naile" />
                                </a>
                                <div class="blog-post-content">
                                    <a class="blog-link theme-color d-inline-block mb-10 text-uppercase"
                                        href="https://themeforest.net/user/hastech">Fashion</a>
                                    <h3 class="title text-capitalize mb-15"><a href="single-blog.html">This is fourth
                                            Post For XipBlog</a></h3>
                                    <h5 class="sub-title"> Posted by <a class="blog-link theme-color d-inline-block mx-1"
                                            href="https://themeforest.net/user/hastech">HasTech</a>31TH Aug 2020</h5>

                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </section>

            <div class="brand-slider-section theme1 bg-white">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="brand-init border-top py-35 slick-nav-brand">
                                <div class="slider-item" style={{display: "table-cell"}}>
                                    <div class="single-brand">
                                        <a href="https://themeforest.net/user/hastech" class="brand-thumb">
                                            <img src="assets/img/brand/1.jpg" alt="brand-thumb-nail" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="slider-item" style={{display: "table-cell"}}>
                                    <div class="single-brand">
                                        <a href="https://themeforest.net/user/hastech" class="brand-thumb">
                                            <img src="assets/img/brand/2.jpg" alt="brand-thumb-nail" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="slider-item" style={{display: "table-cell"}}>
                                    <div class="single-brand">
                                        <a href="https://themeforest.net/user/hastech" class="brand-thumb">
                                            <img src="assets/img/brand/3.jpg" alt="brand-thumb-nail" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="slider-item" style={{display: "table-cell"}}>
                                    <div class="single-brand">
                                        <a href="https://themeforest.net/user/hastech" class="brand-thumb">
                                            <img src="assets/img/brand/4.jpg" alt="brand-thumb-nail" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="slider-item" style={{display: "table-cell"}}>
                                    <div class="single-brand">
                                        <a href="https://themeforest.net/user/hastech" class="brand-thumb">
                                            <img src="assets/img/brand/5.jpg" alt="brand-thumb-nail" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="slider-item" style={{display: "table-cell"}}>
                                    <div class="single-brand">
                                        <a href="https://themeforest.net/user/hastech" class="brand-thumb">
                                            <img src="assets/img/brand/2.jpg" alt="brand-thumb-nail" />
                                        </a>
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
 