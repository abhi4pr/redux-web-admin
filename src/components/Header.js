import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { countCart } from '../actions/counterAction';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
       email:''
    };
  }

  componentWillMount() {
    let getValue = localStorage.getItem("userData");     
    this.setState({ 
      getValue: JSON.parse(getValue), 
    }); 
  }

  componentDidMount() {
    if(localStorage.getItem("userData")){ 
        const emailData = this.state.getValue.email;
        this.props.countCart(emailData);
    } else {

    }
  }

  render() {
      return (
        <header>
            <div class="header-top theme1 bg-dark py-15">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-7 order-last order-md-first">
                            <div class="static-info text-center text-md-left">
                                <p class="text-white">Join our showroom and get <span class="theme-color">50 % off</span> !
                                    Coupon code : <span class="theme-color">Junno50</span></p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5">
                            <nav class="navbar-top pb-2 pb-md-0 position-relative">
                                <ul class="d-flex justify-content-center justify-content-md-end align-items-center">
                                    
                                    <li class="english">
                                      {localStorage.getItem('userData') ? 
                                        <Link to={`/logout`}>
                                            <img src="assets/img/logo/us-flag.jpg" alt="us flag" />Logout
                                        </Link> :
                                        <Link to={`/login`}>                                        
                                            <img src="assets/img/logo/us-flag.jpg" alt="us flag" />Login                                        
                                        </Link>
                                      }                                        
                                        
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="header-middle pt-20">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-lg-2 order-first">
                            <div class="logo text-center text-sm-left mb-30 mb-sm-0">
                                <a href="index.html"><img src="assets/img/logo/logo-dark.jpg" alt="logo" /></a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-5 col-xl-4">
                            
                            <div class="d-flex align-items-center justify-content-center justify-content-sm-end">
                                <div class="media static-media mr-50 d-none d-lg-flex">
                                    <img class="mr-3 align-self-center" src="assets/img/icon/1.png" alt="icon" />
                                    <div class="media-body">
                                        <div class="phone">
                                            <span class="text-muted">Call us:</span>
                                        </div>
                                        <div class="phone">
                                            <a href="tel:(+123)4567890" class="text-dark">(+123)4567890</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="cart-block-links theme1">
                                    <ul class="d-flex">                                        
                                        <li class="mr-0 cart-block position-relative">
                                            <a class="offcanvas-toggle" href="/cart">
                                                {localStorage.getItem('userData') ? 
                                                 <span class="position-relative">
                                                  <i class="icon-bag"></i>
                                                   {this.props.cart.length && this.props.cart.map(cartige => {
                                                     return (
                                                      <span class="badge cbdg1" key={cartige.well}>{cartige.well}</span>
                                                     );
                                                   })}
                                                 </span> :
                                                 <Link to={`/login`}>                                        
                                                    <p>Login To See Cart</p>                                        
                                                </Link>
                                                } 
                                            </a>
                                        </li>                                        
                                    </ul>
                                </div>
                                <div class="mobile-menu-toggle theme1 d-lg-none">
                                    <a href="#offcanvas-mobile-menu" class="offcanvas-toggle">
                                        <svg viewbox="0 0 800 600">
                                            <path
                                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                id="top"></path>
                                            <path d="M300,320 L540,320" id="middle"></path>
                                            <path
                                                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318)">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-xl-6 order-lg-first">
                            <div class="search-form pt-30 pt-lg-0">
                                <form class="form-inline position-relative">
                                    <input class="form-control theme1-border" type="search"
                                        placeholder="Enter your search key ..." />
                                    <button class="btn search-btn theme-bg btn-rounded" type="submit"><i
                                            class="icon-magnifier"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav id="sticky" class="header-bottom theme1 d-none d-lg-block">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-10 offset-lg-2 d-flex flex-wrap align-items-center position-relative">
                            <ul class="main-menu d-flex">
                                <li class="active ml-0">
                                    <a href="/" class="pl-0">Home </a>
                                    
                                </li>
                                <li class="position-static">
                                    <a href="/shop">Shop</a>
                                    
                                </li>
                                <li>
                                    <a href="/aboutus">About Us</a>
                                    
                                </li>
                                <li>
                                    <a href="/blogs">Blogs </a>
                                    
                                </li>
                                <li><a href="/contactus">Contact Us</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
            
            <div class="mobile-category-nav theme1 d-lg-none py-20">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            
                            <div class="hero-side-category">
                                
                                <div class="category-toggle-wrap">
                                    
                                    <button class="category-toggle"><i class="fa fa-bars"></i> All Categories</button>
                                </div>

                                
                                <nav class="category-menu">
                                    <ul>
                                        <li class="menu-item-has-children menu-item-has-children-1">
                                            <a href="#">Accessories & Parts<i class="ion-ios-arrow-down"></i></a>
                                            
                                            <ul class="category-mega-menu category-mega-menu-1">
                                                <li><a href="#">Cables & Adapters</a></li>
                                                <li><a href="#">Batteries</a></li>
                                                <li><a href="#">Chargers</a></li>
                                                <li><a href="#">Bags & Cases</a></li>
                                                <li><a href="#">Electronic Cigarettes</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children menu-item-has-children-2">
                                            <a href="#">Camera & Photo<i class="ion-ios-arrow-down"></i></a>
                                            
                                            <ul class="category-mega-menu category-mega-menu-2">
                                                <li><a href="#">Digital Cameras</a></li>
                                                <li><a href="#">Camcorders</a></li>
                                                <li><a href="#">Camera Drones</a></li>
                                                <li><a href="#">Action Cameras</a></li>
                                                <li><a href="#">Photo Studio Supplies</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children menu-item-has-children-3">
                                            <a href="#">Smart Electronics <i class="ion-ios-arrow-down"></i></a>
                                            
                                            <ul class="category-mega-menu category-mega-menu-3">
                                                <li><a href="#">Wearable Devices</a></li>
                                                <li><a href="#">Smart Home Appliances</a></li>
                                                <li><a href="#">Smart Remote Controls</a></li>
                                                <li><a href="#">Smart Watches</a></li>
                                                <li><a href="#">Smart Wristbands</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children menu-item-has-children-4">
                                            <a href="#">Audio & Video <i class="ion-ios-arrow-down"></i></a>
                                            
                                            <ul class="category-mega-menu category-mega-menu-4">
                                                <li><a href="#">Televisions</a></li>
                                                <li><a href="#">TV Receivers</a></li>
                                                <li><a href="#">Projectors</a></li>
                                                <li><a href="#">Audio Amplifier Boards</a></li>
                                                <li><a href="#">TV Sticks</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children menu-item-has-children-5">
                                            <a href="#">Portable Audio & Video <i class="ion-ios-arrow-down"></i></a>
                                            
                                            <ul class="category-mega-menu category-mega-menu-5">
                                                <li><a href="#">Headphones</a></li>
                                                <li><a href="#">Speakers</a></li>
                                                <li><a href="#">MP3 Players</a></li>
                                                <li><a href="#">VR/AR Devices</a></li>
                                                <li><a href="#">Microphones</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children menu-item-has-children-6">
                                            <a href="#">Video Game <i class="ion-ios-arrow-down"></i></a>
                                            
                                            <ul class="category-mega-menu category-mega-menu-6">
                                                <li><a href="#">Handheld Game Players</a></li>
                                                <li><a href="#">Game Controllers</a></li>
                                                <li><a href="#">Joysticks</a></li>
                                                <li><a href="#">Stickers</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Televisions</a></li>
                                        <li><a href="#">Digital Cameras</a></li>
                                        <li><a href="#">Headphones</a></li>
                                        <li><a href="#">Wearable Devices</a></li>
                                        <li><a href="#">Smart Watches</a></li>
                                        <li><a href="#">Game Controllers</a></li>
                                        <li><a href="#"> Smart Home Appliances</a></li>
                                        <li class="hidden"><a href="#">Projectors</a></li>
                                        <li>
                                            <a href="#" id="more-btn"><i class="ion-ios-plus-empty"></i>
                                                More Categories</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </header>
      ) 
    }
 }    

const mapStateToProps = (state) => ({ cart: state.cart });

const mapDispatchToProps = {countCart};

export default connect(mapStateToProps, mapDispatchToProps)(Header); 