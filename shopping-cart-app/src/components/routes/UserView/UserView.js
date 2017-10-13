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
        this.state = { storeInfo: ''}; 
        this.deleteItem = this.deleteItem.bind(this)   
    }

    componentDidMount() {
    fetch('/stores/' + this.props.match.params.id)
        .then(res => res.json())
        .then((storeInfo) => {this.setState({ storeInfo: storeInfo })})
    }

    deleteItem(id) {

        let newStoreInfo = 
        // (this.state.storeInfo.products && this.state.storeInfo.products.length && 
            this.state.storeInfo.products.filter(product => id !== product._id);
 
            // );

        this.state.storeInfo.products = newStoreInfo;
        
        // this.setState({storeInfo.products: storeInfo});

        this.forceUpdate();


        fetch('/products/' + id, {method: 'DELETE'})

        .then()
            
            // function() {}
        //     {

            // console.log(res)

            // console.log(this.state.storeInfo)

            
            
            // const products = (this.state.storeInfo.products && this.state.storeInfo.products.length && this.state.storeInfo.products.filter(products => products._id !== id));
  //   // Set this.state.friends equal to the new friends array
            // this.setState({ storeInfo: products });


            // console.log(res)
            // if (this.state.storeInfo.products && this.state.storeInfo.products.length) {
            //     const products = this.state.storeInfo.products.filter(products => products._id !== id);
            //     console.log(products)
            //     if (products) {
            //     this.setState({ storeInfo: products})
            // }
        // }
        // )
        
        .catch( err => console.error(err))  
    }

  // removeItem = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const products = this.state.products.filter(products => products.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ products });
  // };

    render() {

        console.log(this.state.storeInfo)


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
            >



            <Edit 
              id={product._id}
              deleteItem={this.deleteItem}

              />

            </ProductCard>

        )}

        <UploadCard />
        </StoreLogin>

        </Wrapper>
        </div>
    );
  }
}


export default UserView;
