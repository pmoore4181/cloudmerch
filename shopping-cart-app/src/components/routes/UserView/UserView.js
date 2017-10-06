import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import Store from "../../Store";
import friends from '../../../friends.json';
import products from '../../../StoreOwner.json';
import './UserView.css';

class UserView extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    products
  };

  removeItem = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const products = this.state.products.filter(products => products.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ products });
  };

  searcForStore = name => {
    const passwordRef = this.refs.storeName;
    if (passwordRef.value) {
      this.props.register(passwordRef.value);
      passwordRef.value = '';
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>
        <Header location="Search all stores"/>
         <Wrapper>
        {/*{this.state.friends.map(friend => 
          <StoreCard
            removeStore={this.removeStore}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            storeImage={friend.storeImage}
            image1={friend.image1}
            image2={friend.image2}
            image3={friend.image3}
            description={friend.description}
          />
        )}*/}
      </Wrapper>
      <h1>Login</h1>
      </div>
    );
  }
}


export default UserView;
