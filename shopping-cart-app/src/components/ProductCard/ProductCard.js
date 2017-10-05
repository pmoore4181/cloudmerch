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
       <p className="storeName">{props.name}</p>
      <div className="description">
        {props.description}
      </div>
    </div>

    <span onClick={() => props.removeStore(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default ProductCard;
