import React from 'react';
import './StoreCard.css';

const StoreCard = props => (
  <div className="card" onClick={props.onClick}>
  <div className="card-header">
    <div className="card-image">
      <img className="image1" alt={props.name} src={props.image1} />
      <img className="image2" alt={props.name} src={props.image2} />
      <img className="image3" alt={props.name} src={props.image3} />
    </div>
    <div>
      <img className="store-image" alt={props.name} src={props.storeImage} />
    </div>
  </div>
    <div className="card-content">
       <p className="storeName">{props.name}</p>
      <div className="description">
        {props.description}
      </div>
    </div>

  </div>
);

export default StoreCard;
