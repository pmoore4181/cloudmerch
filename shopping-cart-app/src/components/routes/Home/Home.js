import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import friends from '../../../friends.json';
import products from '../../../StoreOwner.json';
import userInfo from '../../../userInfo.json';
import './Home.css';

class Home extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    products,
    userInfo
  };

  render() {
    return (
     <div>
        <Header location="Search all cloud items"/>
         <Wrapper>
       
          <StoreCard
            id={userInfo[0].id}
            name={userInfo[0].name}
            storeImage={userInfo[0].storeImg}
            image1={products[0].img}
            image2={products[1].img}
            image3={products[2].img}
            description={userInfo[0].description}
          />
            <StoreCard
            id={userInfo[0].id}
            name={userInfo[0].name}
            storeImage={userInfo[0].storeImg}
            image1={products[0].img}
            image2={products[1].img}
            image3={products[2].img}
            description={userInfo[0].description}
          />
            <StoreCard
            id={userInfo[0].id}
            name={userInfo[0].name}
            storeImage={userInfo[0].storeImg}
            image1={products[0].img}
            image2={products[1].img}
            image3={products[2].img}
            description={userInfo[0].description}
          />
            <StoreCard
            id={userInfo[0].id}
            name={userInfo[0].name}
            storeImage={userInfo[0].storeImg}
            image1={products[0].img}
            image2={products[1].img}
            image3={products[2].img}
            description={userInfo[0].description}
          />
            <StoreCard
            id={userInfo[0].id}
            name={userInfo[0].name}
            storeImage={userInfo[0].storeImg}
            image1={products[0].img}
            image2={products[1].img}
            image3={products[2].img}
            description={userInfo[0].description}
          />
        
      </Wrapper>
      </div>
    );
  }
}


export default Home;
