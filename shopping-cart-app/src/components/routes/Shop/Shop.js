import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import Store from "../../Store";
import friends from '../../../friends.json';
import './Shop.css';

class Shop extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
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
        )} */}
      </Wrapper>
      <h1>Shop</h1>
      </div>
    );
  }
}


export default Shop;
