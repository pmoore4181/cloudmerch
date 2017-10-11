import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import Store from "../../Store";
import friends from '../../../friends.json';
// import products from '../../../StoreOwner.json';
// import userInfo from '../../../userInfo.json';
import './Shop.css';

class Shop extends Component {

  constructor(props) {
        super(props);
        this.state = { storeInfo: '', products: []};
        
    }

    // state = {storeInfo: [], 
        // products: []
    // };

   componentDidMount() {
    fetch('/stores/59dac308b9267fbcb5d2de32')
        .then(res => res.json())
        .then((storeInfo) => {this.setState({ storeInfo: storeInfo })})
        // .then(this.state.products = {this.state.storeInfo.products})
   }



  // removeStore = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  //  {this.state.storeInfo.map(products => )}

  // {this.state.storeInfo.products.map(storeInfo =>


       // {this.state.storeInfo.map(storeInfo) =>
       //      <ProductCard
       //        // removeItem={this.removeItem}
       //        // id={this.state.storeInfo.products[0].id}
       //        key={i}
       //        name={storeInfo.name}
       //        // img={products.img}
       //        // description={products.description}
       //        // price={products.price}
       //      />
       //      )
       //      })

       // {this.state.storeInfo.products && this.state.storeInfo.products.length &&     

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    // console.log(this.state.storeInfo) // displays all of the JSON
    // console.log(this.state.storeInfo.name); //
    // console.log(this.state.storeInfo['products'][1]['name']);
    // console.log(this.state.storeInfo.products[0].name);

    return (
     <div>
        <Header location="Search all stores"/>
        <Wrapper>

          <StoreLogin
            id={this.state.storeInfo._id}
            userName={this.state.storeInfo.name}
            // productName=
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
            />)
        }

          

          

            </StoreLogin>
          
      </Wrapper>
      <h1>Shop</h1>
      </div>
    );
  }
}


export default Shop;
