import React from "react";
import "./Cart.css";


const Cart = props => (

<div className="box checkout-item-box">
  <article className="media ">
    <div className="media-left">
      <figure className="">
        <img className="checkout-item-image" src={props.img} alt={props.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
         <span onClick={() => props.removeItem(props.id)} className="checkout-item-remove">
            <button className="checkout-item-remove"> remove item</button>
          </span>
          <div className="title checkout-item-title">{props.name}</div>
          <div className="subtitle">{props.quantity} at ${props.price} total = ${props.quantity * props.price} </div>
      </div>
    </div>
  </article>
</div>

);

export default Cart;
