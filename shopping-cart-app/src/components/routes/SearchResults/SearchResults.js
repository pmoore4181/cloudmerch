import React, { Component } from 'react';
// import StoreCard from '../../StoreCard';
import ProductCard from '../../ProductCard';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import StoreLogin from "../../StoreLogin";
import './SearchResults.css';

class SearchResults extends Component {

  constructor(props) {
        super(props);
        this.state = { results: [], value: ''};
        
    }

   componentDidMount() {
    fetch('/products/search/' + this.props.match.params.tag, {method: 'GET'})
        .then(res => res.json())
        .then((results) => {this.setState({ results: results })})
   }
   handleClick(e) {
        console.log('The link was clicked.' +  e.target.value)
        this.setState({value: e.target.value})
        window.location = '/products/search/' + e.state.value
       
    }

  render() {
    return (
     <div>
         <Header 
         handleClick={this.handleClick}
         value={this.state.value}
         />
        <Wrapper
         
        >


            <StoreLogin
                id="no id"
                userName="Search Results"
                userDescription=""
            >

 {this.state.results.map((product)  =>
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


export default SearchResults;
