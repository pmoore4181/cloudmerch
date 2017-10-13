import React from 'react';
import './ProductCard.css';


const ProductCard = props => (
  <div className="card product-card effect__hover">
  <div className="card__front">
  <div className="card-header product-card-header">
    <div className="card-image">
      <img className="image product-image" alt={props.name} src={props.img} />
    </div>
    <div>
    </div>
  </div>
    <div className="card-content product-card-content">
      <box className="product-price"> &#36;{props.price}</box>
      <div className="quantity">Quantity in stock: {props.quantity}</div>
      <div className="remove">{props.children}</div>
      <p className="productName">{props.name}</p>
      <div className="description">
        {props.description}
      </div>

    </div>

    </div>
    <div className="card__back">
     <div className="add-product-to-cart-button button">Add to cart</div>
    </div>
  </div>
);

export default ProductCard;
