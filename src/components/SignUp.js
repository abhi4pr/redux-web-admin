import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userRegistration } from '../actions/userAction';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      address: '',
      number: ''
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userRegistration(this.state);
  };


  render() {
      return (
        <div>
          <h4>Register user</h4>
          <div class="row">
    <div class="col-md-2"> </div>
    <div class="col-md-8">
    
          <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <input type="text" name="name" required value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" required value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" name="password" required value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="text" name="address" required value={this.state.address} onChange={this.handleChange} className="form-control" placeholder="Address" />
            </div>
            <div className="form-group">
              <input type="text" name="number" required value={this.state.number} onChange={this.handleChange} className="form-control" placeholder="Number" />
            </div>
            <button type="submit" className="btn btn-dark">Register</button>
          </form>
          </div>
          </div>
        </div>
      )    
  }
}

const mapDispatchToProps = {userRegistration};

export default connect(null, mapDispatchToProps)(SignUp);