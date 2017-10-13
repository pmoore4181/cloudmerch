import React, { Component } from 'react';
// import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import './Shop.css';

class Shop extends Component {

  constructor(props) {
        super(props);
        this.state = { storeInfo: '', products: []};
        
    }

   componentDidMount() {
    fetch('/stores/' + this.props.match.params.id, {method: 'GET'})
        .then(res => res.json())
        .then((storeInfo) => {this.setState({ storeInfo: storeInfo })})
   }

   // <Header location="Search all stores"/>

  render() {
    return (
     <div>
        
        <Header />
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
