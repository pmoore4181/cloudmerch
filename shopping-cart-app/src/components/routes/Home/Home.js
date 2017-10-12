import React, { Component } from 'react';
import StoreCard from '../../StoreCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import Store from "../../Store";
import friends from '../../../friends.json';
import products from '../../../StoreOwner.json';
// import userInfo from '../../../userInfo.json';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        stores: [],
        query: ''
    }

    componentDidMount() {
        fetch('/stores/products')
        .then(res => res.json())
        .then(stores => this.setState({stores}))
    }

    handleClick(e) {
        console.log('The link was clicked.' +  e.target.dataset.id);
        window.location = '/shop/' + e.target.dataset.id;
        // console.log(e.target.dataset.id)
        // console.log(e.target)
    }

    render() {

    return (
     <div>
        <Header location="Search all cloud items"/>
         <Wrapper>

         {this.state.stores.map((store)=>
            <StoreCard 
            key={store._id}
            id={store._id}
            name={store.name}
            storeImage={store.image}
            image1={store.products[0].img}
            image2={store.products[1].img}
            image3={store.products[2].img}
            description={store.description} 
            // onClick={this.handleClick}  
            onClick={this.handleClick}           
            />)}
         
      </Wrapper>
      </div>
    );
  }
}


export default Home;
