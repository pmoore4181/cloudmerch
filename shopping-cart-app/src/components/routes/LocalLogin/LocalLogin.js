import React, { Component } from 'react';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import LocalLoginAction from './LocalLoginAction'
import './LocalLogin.css';

class LocalLogin extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	name: '',  
	    	password: ''
	    };
	    // use post function from LocalLoginAction.js
	    this.LocalLoginAction = new LocalLoginAction();

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
  	      this.LocalLoginAction.loginUser(this.state.name, this.state.password);
  	  }


	render () {
		return (
			<div>
			<Header/>
			<Wrapper>
			<h1>Sign up Today!</h1>
				<form onSubmit={this.handleSubmit}>
				  <label>
				    Username:
				    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
				  </label>
				  <br />
				  <label>
				    Password:
				    <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
				  </label>
				  <br />
				  <input type="submit" value="Submit" />
				</form>
			</Wrapper>
			</div>
		);
	}
}

export default LocalLogin;