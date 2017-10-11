import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Home from './components/routes/Home';
import UserView from './components/routes/UserView';
import Shop from './components/routes/Shop';
import Checkout from './components/routes/Checkout';
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/user-login" component={UserView} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
