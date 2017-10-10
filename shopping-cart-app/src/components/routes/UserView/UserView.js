import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import friends from '../../../friends.json';
import products from '../../../StoreOwner.json';
import userInfo from '../../../userInfo.json';


import './UserView.css';

const Edit = props => (
  <span onClick={() => props.removeItem(props.id)}  className="remove">
    <button className="button remove">Remove Item</button>
  </span>
);

class UserView extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      products,
      userInfo
  };

  removeItem = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const products = this.state.products.filter(products => products.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ products });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>
        <Header location="Search all cloud items"/>
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
            >
              <Edit 
              removeItem={this.removeItem}
              id={products.id}/>
            </ProductCard>
            )}
          </StoreLogin>

      </Wrapper>
      </div>
    );
  }
}


export default UserView;
