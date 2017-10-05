import React from 'react';
import './Header.css';

const Header = props => (
<div>
<nav className="navbar">
	<div className="navbar-brand">
		<div className="navbar-item">
			<a className="logo" href="">Logo</a>
		</div>
	</div>
	<div className="navbar-menu">
		<div className="navbar-start">
			<div className="field">
 				<div className="search-input">
 				 	<p className="control">
  	  					<input className="input" type="text" placeholder={props.location} />
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
			<a className="sell-with-us" href="">Sell with us!</a>
			<a className="seller-login">Seller Login</a>
			<a className="cart button"><i className="fa fa-shopping-cart"></i></a>
		</div>
	</div>

</nav>
</div>
);

export default Header;

// {props.children}
