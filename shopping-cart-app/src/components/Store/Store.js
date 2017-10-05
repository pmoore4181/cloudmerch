import React from "react";
import "./Store.css";

const Store = props => (
	<div className="card">
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

    <span onClick={() => props.removeStore(props.id)} className="remove">
     <button className="remove"> remove item</button>
    </span>
  </div>
);

export default Store;
