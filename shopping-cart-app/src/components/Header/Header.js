import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        console.log('The link was clicked ' +  this.state.searchTerm);
        window.location = /search-results/ + this.state.searchTerm;
    }

    handleChange(event) {
        let newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState(newState);

    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.handleClick();
        }
    }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
          <li><a className="sell-with-us" href="/local-login">Login</a></li>
          <li><a className="sell-with-us" href="/signup">Sell with us!</a></li>
          <li><a className="google-login" href="/auth/google">Login With Google</a></li>
          </div>
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
              <div className="title"> cM </div>
              <div className="subtitle"> cloudMerch </div>
            </Link>

          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="field">
              <div className="search-input">
                <p className="control">
                  <input className="input search-bar-input" name="searchTerm" type="text" placeholder="Search all stores"  value={this.state.searchTerm} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                </p>
              </div>
            </div>
            <div className="field">
              <button className="button search" onClick={this.handleClick}>
                <span className="icon is-small is-left">
                  <i className="fa fa-search" />
                </span>
              </button>
            </div>
          </div>
          <div className="navbar-end">
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
