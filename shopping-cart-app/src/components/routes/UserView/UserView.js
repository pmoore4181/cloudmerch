import React, { Component } from 'react';
// import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
// import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import UploadCard from "../../UploadCard";

import './UserView.css';

const Edit = props => (
  <span onClick={() => props.deleteItem(props.id)}  className="remove">
    <button className="button remove">Remove Item</button>
  </span>
);

class UserView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            storeInfo: ''
            }; 
        this.deleteItem = this.deleteItem.bind(this)   
    }

    componentDidMount() {
    fetch('/stores/' + this.props.match.params.id)
        .then(res => res.json())
        .then((storeInfo) => {this.setState({ storeInfo: storeInfo })})
    }

    deleteItem(id) {
        //workaround - manually update state and then force update
        let newStoreInfo = this.state.storeInfo.products.filter(product => id !== product._id);
        this.state.storeInfo.products = newStoreInfo;
        this.forceUpdate();
        // then make request to db to delete product
        fetch('/products/' + id, {method: 'DELETE'})
        .then()
        .catch( err => console.error(err))  
    }

    render() {

        const { pName, description, price, tags } = this.state;


        return (
        <div>

         <Wrapper>

          <StoreLogin
                id={this.state.storeInfo._id}
                userName={this.state.storeInfo.name}
                userDescription={this.state.storeInfo.description}
            >

        {this.state.storeInfo.products && this.state.storeInfo.products.length &&
        this.state.storeInfo.products.map((product)  =>
            <ProductCard
            id={product._id}
            key={product._id}
            name={product.name}
            img={product.img}
            description={product.description}
            price={product.price}
            deleteItem={this.deleteItem}
            >

            <Edit 
              id={product._id}
              deleteItem={this.deleteItem}

              />

            </ProductCard>

        )}

        <UploadCard storeId={this.props.match.params.id} />
        </StoreLogin>

        </Wrapper>
        </div>
    );
  }
}


export default UserView;
