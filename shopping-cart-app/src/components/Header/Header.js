import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => (
<div>
<nav className="navbar">
	<div className="navbar-brand">
		<div className="navbar-item">

		  <Link to="/" className="logo">
			<div className="title"> CM </div>
			<div className="subtitle"> cloudmerch </div>
		</Link>

		</div>
	</div>
	<div className="navbar-menu">
		<div className="navbar-start">
			<div className="field">
 				<div className="search-input">
 				 	<p className="control">
  	  					<input className="input" type="text" placeholder="Search all stores" />
  	  				</p>
 				</div>
			</div>
			<div className="field">
				<button className="button search"> 
					<span className="icon is-small is-left">
                        <i className="fa fa-search"></i>
                    </span>
                </button>
			</div>
		</div>
		<div className="navbar-end">
			<Link to="/signup" className="sell-with-us">Sell with us!</Link>
			<Link to="/user-login" className="seller-login">Seller Login</Link>
			<a href="/auth/google">Sign in with Google</a>
			<Link to="/checkout" className="cart button"><i className="fa fa-shopping-cart"></i></Link>
		</div>
	</div>

</nav>
</div>
);

export default Header;

// {props.children}
