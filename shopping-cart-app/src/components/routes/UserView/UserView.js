import React, { Component } from 'react';
// import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
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
            storeInfo: '',
            // handlerValue: true
            form: {
                name: '',
                description: '',
                tags: '',
                price: '',
                img: ''
                }
            }; 
        this.deleteItem = this.deleteItem.bind(this)  
        this.addItem = this.addItem.bind(this)
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

  addItem(headingStuff)  {

        console.log(headingStuff);
        let newState = this.state
        newState.form = headingStuff;
        console.log(newState);
        console.log((this.state.form))
        return fetch('/stores/' + this.props.match.params.id + '/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(this.state.form)

    }).then(response => response.json())
}

    render() {

        return (
        <div>
          
        <Wrapper>
        <Header />

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
            quantity={product.quantity}
            >

            <Edit 
              id={product._id}
              deleteItem={this.deleteItem}

              />

            </ProductCard>

        )}

        <UploadCard storeId={this.props.match.params.id} onSubmit={this.addItem}/>
        </StoreLogin>

        </Wrapper>
        </div>
    );
  }
}


export default UserView;
