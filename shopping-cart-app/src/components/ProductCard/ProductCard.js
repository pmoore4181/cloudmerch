import React from 'react';
import './ProductCard.css';


const ProductCard = props => (
  <div className="card">
  <div className="card-header">
    <div className="card-image">
   
      <img className="image" alt={props.name} src={props.img} />
    </div>
    <div>
      
    </div>
  </div>
    <div className="card-content">
      <div className="remove">{props.children}</div>
      <p className="storeName">{props.name}</p>
      <div className="description">
        {props.description}
      </div>
    </div>
   <box className="price">{props.price}</box>

  </div>
);

export default ProductCard;
