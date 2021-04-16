import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../actions/productsAction';
import Header from './Header';
import Footer from './Footer';

class ProductInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }   

  componentDidMount() {
    this.props.dispatch(getProduct(this.props.match.params.id));
  }

  render() {
    const product = this.props.product;
      return (
        <div>
         <Header />
          <nav class="breadcrumb-section theme3 bg-lighten2 pt-110 pb-110">
              <div class="container">
                  <div class="row">
                      <div class="col-12">
                          <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                              <li class="breadcrumb-item"><a href="shop-grid-3-column.html">All Products</a></li>
                              <li class="breadcrumb-item active" aria-current="page">Single Product</li>
                          </ol>
                      </div>
                  </div>
              </div>
          </nav>

          <section class="product-single theme3 pt-60">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 mb-5 mb-lg-0">
                          <div class="position-relative">
                              <span class="badge badge-danger top-right">New</span>
                          </div>
                          <div class="product-sync-init mb-20">
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <img src="assets/img/single-product/1.jpg" alt="product-thumb" />
                                  </div>
                              </div>
                              
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <img src="assets/img/single-product/2.jpg" alt="product-thumb" />
                                  </div>
                              </div>
                              
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <img src="assets/img/single-product/3.jpg" alt="product-thumb" />
                                  </div>
                              </div>
                              
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <img src="assets/img/single-product/4.jpg" alt="product-thumb" />
                                  </div>
                              </div>
                              
                          </div>

                          <div class="product-sync-nav single-product">
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <a href="javascript:void(0)"> <img src="assets/img/single-product/1.2x.jpg"
                                              alt="product-thumb" /></a>
                                  </div>
                              </div>
                              
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <a href="javascript:void(0)"> <img src="assets/img/single-product/2.2x.jpg"
                                              alt="product-thumb" /></a>
                                  </div>
                              </div>
                              
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <a href="javascript:void(0)"><img src="assets/img/single-product/3.2x.jpg"
                                              alt="product-thumb" /></a>
                                  </div>
                              </div>
                              
                              <div class="single-product">
                                  <div class="product-thumb">
                                      <a href="javascript:void(0)"><img src="assets/img/single-product/4.2x.jpg"
                                              alt="product-thumb" /></a>
                                  </div>
                              </div>
                             
                          </div>
                      </div>
                      <div class="col-lg-6 mt-5 mt-md-0">
                          <div class="single-product-info">
                              <div class="single-product-head">
                                  <h2 class="title mb-20">{product.pname}</h2>
                                  <div class="star-content mb-20">
                                      <span class="star-on"><i class="ion-ios-star"></i> </span>
                                      <span class="star-on"><i class="ion-ios-star"></i> </span>
                                      <span class="star-on"><i class="ion-ios-star"></i> </span>
                                      <span class="star-on"><i class="ion-ios-star"></i> </span>
                                      <span class="star-on"><i class="ion-ios-star"></i> </span>
                                      <a href="#" id="write-comment"><span class="ml-2"><i class="far fa-comment-dots"></i></span>
                                          Read reviews <span>(1)</span></a>
                                      <a href="#" data-toggle="modal" data-target="#exampleModalCenter"><span class="edite"><i
                                                  class="far fa-edit"></i></span> Write a review</a>
                                  </div>
                              </div>
                              <div class="product-body mb-40">
                                  <div class="d-flex align-items-center mb-30">
                                      <h6 class="product-price mr-20"><del class="del">$23.90</del>
                                          <span class="onsale">Rs. {product.pprice}</span></h6>
                                      <span class="badge position-static bg-dark rounded-0">Save 10%</span>
                                  </div>
                                  <p>{product.pdesc}.</p>
                                  
                              </div>
                              <div class="product-footer">
                                  <div class="product-count style d-flex flex-column flex-sm-row mt-30 mb-30">
                                      <div class="count d-flex">
                                          <input type="number" min="1" max="10" step="1" value="1" />
                                          <div class="button-group">
                                              <button class="count-btn increment"><i class="fas fa-chevron-up"></i></button>
                                              <button class="count-btn decrement"><i class="fas fa-chevron-down"></i></button>
                                          </div>
                                      </div>
                                      <div>
                                          <button class="btn theme-btn--dark3 btn--xl mt-5 mt-sm-0 rounded-5">
                                              <span class="mr-2"><i class="ion-android-add"></i></span>
                                              Add to cart
                                          </button>
                                      </div>
                                  </div>
                                  
                                  <div class="pro-social-links mt-10" style={{marginBottom:"60px"}}>
                                      <ul class="d-flex align-items-center">
                                          <li class="share">Share</li>
                                          <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                          <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                          <li><a href="#"><i class="ion-social-google"></i></a></li>
                                          <li><a href="#"><i class="ion-social-pinterest"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="comment-section">
                          <div class="comment-list">
                              <h3 class="title">All Reviews </h3>
                              <img class="avatar" src="assets/img/blog-post/avatar.jpg" alt="avatar" />
                              <h4 class="sub-title">avatar</h4>
                              <span>27 sep, 2020 </span>
                              <button class="reply">Reply</button>
                              <p>Ev kullanımı için en uygun HP Orjinal Ucuz Kartuşlar artık avatar.com adresinde 7/24 aktif
                                  şipariş hattımız ile her zaman Orijinal Kartuş alabilir ve bayilik fırsatlarımız ile her
                                  zaman %50 İndirimli alabilirsiniz. Sarf Depo
                                  olarak her zaman müşteri desteğimiz en ön plandadır.Her zaman canlı destek yada whatsapp
                                  hattımızdan yazmayı unutmayınız. www.avatar.com </p>
                          </div>
                      </div>
                      <div class="contact-form">
                          <h3 class="title">Give a review</h3>
                          <form>
                              <div class="form-group">
                                  <label for="email">Your Email:</label>
                                  <input type="email" class="form-control" id="email" required="" />
                              </div>
                              <div class="form-group">
                                  <label for="subject">Stars:</label>
                                  <input type="text" class="form-control" id="stars" required="" />
                              </div>
                              <div class="form-group">
                                  <label for="subject">Subject:</label>
                                  <input type="text" class="form-control" id="subject" required="" />
                              </div>
                              <button type="submit" class="btn theme-btn--dark1 btn--lg">Submit Button</button>
                          </form>
                      </div>

                  </div>
              </div>
          </section>  
          <Footer />        
        </div>
      )    
  }
}

const mapStateToProps = (state) => ({
 product: state.product
});

export default connect(mapStateToProps)(ProductInfo);