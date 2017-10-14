import React, { Component } from 'react';
import Wrapper from '../../Wrapper';
import Header from '../../Header';
import Cart from "../../Cart";
import cartItems from '../../../cartItems.json';
import './Checkout.css';

class Checkout extends Component {
  // Setting this.state.friends to the friends json array



  state = {
    cartItems
  };



  removeItem = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cartItems = this.state.cartItems.filter(cart => cart.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cartItems });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <div>
        <Header />
        <Wrapper>
          <div className="columns">
          <div className="column is-8">
            {this.state.cartItems.map(cartItems =>
              <Cart
              id={cartItems.id}
              key={cartItems.id}
              removeItem={this.removeItem}
              itemImg= {cartItems.itemImg}
              name={cartItems.name}
              price= {cartItems.price}
              quantity={cartItems.quantity}
              />
            )}
          </div>
        
          <div className="column is-4">
          <div className="box total-box">
          <h1 className="title checkout-title">Ready to checkout?</h1>

              <div className='field'>
                <label className='label'>Name on Card</label>
                <input className='control input' type='text' />
              </div>
     
           
              <div className='field'>
                <label className='label'>Card Number</label>
                <input autocomplete='off' className='input card-number'  type='text'/>
              </div>

            
              <div className='field'>
                <label className='label'>CVC</label>
                <input autocomplete='off' className='input card-cvc' placeholder='ex. 311' size='4' type='text'/>
                </div>

              <div className='field expiration required'>
                <label className='label'>Expiration</label>
                <input className='input card-expiry-month' placeholder='MM'  type='text'/>
                <input className='input card-expiry-year' placeholder='YYYY' type='text'/>
              </div>

              <div className='field' >        
              <div className='label'>
                  Total:
                  <span className='amount'>  $300</span>
                </div>

            </div>
           
              <div className='field'>
                <button className='button' type='submit'>Pay</button>
              </div>
     
          </div>
          </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}


export default Checkout;
