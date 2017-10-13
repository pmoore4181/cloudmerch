import React, { Component } from 'react';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import SignupAction from './SignupAction'
import './Signup.css';

class Signup extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	name: '', 
	    	email: '', 
	    	storeName: '', 
	    	password: ''
	    };
	    // use post function from SignupAction.js
	    this.SignupAction = new SignupAction();

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  handleChange(event) {
    	
		const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
		});
	}

  	  handleSubmit(event) {
  	      event.preventDefault();
  	      this.SignupAction.signupUser(this.state.name, this.state.email, this.state.password);
  	  }


	render () {
		return (
			<div>
				<h1>Sign up Today!</h1>
				<form onSubmit={this.handleSubmit}>
				  <label>
				    Name:
				    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
				  </label>
				  <br />
				  <label>
				    Email:
				    <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />
				  </label>
				  <br />
				  <label>
				    Password:
				    <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
				  </label>
				  <br />
				  <input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Signup;