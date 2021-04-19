import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlog } from '../actions/productsAction';
import Header from './Header';
import Footer from './Footer';

class BlogInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }   

  componentDidMount() {
    this.props.dispatch(getBlog(this.props.match.params.id));
  }

  render() {
    const blog = this.props.blog;
      return (
        <div>
         <Header />
          <nav class="breadcrumb-section theme1 bg-lighten2 pt-110 pb-110">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title text-center mb-15">
                            <h2 class="title text-dark text-capitalize">single blog</h2>
                        </div>
                    </div>
                    <div class="col-12">
                        <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">single blog</li>
                        </ol>
                    </div>
                </div>
            </div>
          </nav>

          <section class="blog-section pt-80 pb-80">
              <div class="container">
                  <div class="row">
                      <div class="col-12 col-xl-9 mx-auto">
                          <div class="blog-title">
                              <h2 class="title">From Our Blog </h2>
                              <p class="text">The latest news, videos, and discussion topics</p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-xl-9 mx-auto">
                          <div class="single-blog text-left">
                              <a class="blog-thumb zoom-in d-block overflow-hidden" href="blog-grid-left-sidebar.html">
                                  <img class="object-fit-none" src="assets/img/blog-post/large-blog.jpg" alt="blog-thumb-naile" />
                              </a>
                              <div class="blog-post-content pt-30">
                                  <h3 class="title mb-15"><a href="#">{blog.aname}</a></h3>
                                  <h5 class="sub-title font-style-normal"> Posted by <a class="blog-link" href="#">Admin</a> <span class="separator">/</span>
                                      {blog.created_on} <span class="separator">/</span> <a class="blog-link" href="#">Electronics</a></h5>
                                  <p class="text">
                                      {blog.adesc}
                                  </p>
                              </div>
                          </div>
                          
                          <div class="comment-section">
                              <div class="comment-list">
                                  <h3 class="title">All comments </h3>
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
                              <h3 class="title">Leave a Reply</h3>
                              <form>
                                  <div class="form-group">
                                      <label for="name">your name</label>
                                      <input type="text" class="form-control" id="name" required="" />
                                  </div>
                                  <div class="form-group">
                                      <label for="email">Your Email:</label>
                                      <input type="email" class="form-control" id="email" required="" />
                                  </div>
                                  <div class="form-group">
                                      <label for="comment">Comment:</label>
                                      <textarea class="form-control mb-30" id="comment" required=""></textarea>
                                  </div>
                                  <button type="submit" class="btn theme-btn--dark1 btn--lg">Submit Button</button>
                              </form>
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

const mapStateToProps = (state) => ({
 blog: state.blog
});

export default connect(mapStateToProps)(BlogInfo);