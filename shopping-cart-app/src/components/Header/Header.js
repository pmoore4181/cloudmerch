import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a className="google-login" href="/auth/google">Login With Google</a></li>
        );
      default:
        return (
          <div>
            <a className="dashboard" href="/user-login">Dashboard</a>
            <a className="log-out" href="/api/logout">Logout</a>
          </div>
        );
    }
  }

  render() {
    return (
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
                  <i className="fa fa-search" />
                </span>
              </button>
            </div>
          </div>
          <div className="navbar-end">
            <Link to="/shop" className="sell-with-us">Sell with us!</Link>
            <ul className="seller-login">{this.renderContent()}</ul>
            <Link to="/checkout" className="cart button"><i className="fa fa-shopping-cart"></i></Link>
          </div>
        </div>

      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
