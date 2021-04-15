import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../actions/productsAction';

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
          <h4>Article Info</h4>
          <h5> {product.name} </h5>
          <h5> {product.username} </h5>
          <h5> {product.email} </h5>
        </div>
      )    
  }
}

const mapStateToProps = (state) => ({
 product: state.product
});

export default connect(mapStateToProps)(ProductInfo);