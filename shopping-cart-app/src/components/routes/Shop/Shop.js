import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import friends from '../../../friends.json';
import './Shop.css';

class Shop extends Component {

  constructor(props) {
        super(props);
        this.state = { storeInfo: '', products: []};
        
    }

   componentDidMount() {
    fetch('/stores/' + this.props.match.params.id)
        .then(res => res.json())
        .then((storeInfo) => {this.setState({ storeInfo: storeInfo })})
   }

  // removeStore = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>

        <Header location="Search all stores"/>

        <Wrapper>

            <StoreLogin
                id={this.state.storeInfo._id}
                userName={this.state.storeInfo.name}
                userDescription={this.state.storeInfo.description}
            >

            {this.state.storeInfo.products && this.state.storeInfo.products.length &&
 this.state.storeInfo.products.map((product)  =>
                <ProductCard
                    // removeItem={this.removeItem}
                    id={product._id}
                    key={product._id}
                    name={product.name}
                    img={product.img}
                    description={product.description}
                    price={product.price}
                />
                )
            }
            
            </StoreLogin>
          
      </Wrapper>
      </div>
    );
  }
}


export default Shop;
