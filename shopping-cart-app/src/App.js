import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import UserView from './components/routes/UserView';
import Shop from './components/routes/Shop';
import Checkout from './components/routes/Checkout';
import Header from './components/Header';

const App = () => (
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

export default App;
