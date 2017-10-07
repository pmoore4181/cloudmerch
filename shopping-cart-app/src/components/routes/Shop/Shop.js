import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import Store from "../../Store";
import friends from '../../../friends.json';
import products from '../../../storeOwner.json';
import userInfo from '../../../userInfo.json';
import './Shop.css';

class Shop extends Component {
  // Setting this.state.friends to the friends json array
   state = {
      products,
      userInfo
  };

  removeStore = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>
        <Header location="Search all stores"/>
        <Wrapper>
          <StoreLogin
            id={userInfo[0].id}
            userName={userInfo[0].name}
            userDescription={userInfo[0].description}
          >
          {this.state.products.map(products => 
            <ProductCard
              removeItem={this.removeItem}
              id={products.id}
              key={products.id}
              name={products.name}
              img={products.img}
              description={products.description}
              price={products.price}
            />
          )}
          </StoreLogin>
      </Wrapper>
      </div>
    );
  }
}


export default Shop;
