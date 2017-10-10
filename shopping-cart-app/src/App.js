import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import UserView from './components/routes/UserView';
import Shop from './components/routes/Shop';
import Checkout from './components/routes/Checkout';

class App extends React.Component {
    myCallback = (dataFromChild) => {
        console.log(dataFromChild.query)
        this.setState.query = dataFromChild.query;
    }


render() {
return(
  <Router>

  	<div>
    	<Route exact path="/" render={routeProps => <Home {...routeProps} callbackFromParent={this.myCallback}/>} />
    	<Route path="/user-login" component={UserView} />
   		<Route path="/shop" render={routeProps => <Shop {...routeProps} query={this.query}/>} />
   		<Route path="/checkout" component={Checkout} />
 		</div>

  </Router>
  )
}
};

export default App;
