import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../actions/productsAction';

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
          <h4>Articles</h4>
          {this.props.products.map(product => {
            return (
              <div key={ product.id }>
                <hr/>          
                <h4><Link to={`/productinfo/${product.id}`}>{product.id}: {product.name}</Link></h4>
                <p>{product.content}</p>
              </div>
            );
          })}
        </div>
      )    
    } else {
      return (<div>No Articles</div>)
    }
  }
}

const mapStateToProps = (state) => ({
 products: state.products 
});

export default connect(mapStateToProps)(Shop);