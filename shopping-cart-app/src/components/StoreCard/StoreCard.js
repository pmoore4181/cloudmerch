import React from "react";
import "./StoreCard.css";

const StoreCard = props => (
  <div className="card">
    <div className="card-image">
      <img className="image1" alt={props.name} src={props.image1} />
      <img className="image2" alt={props.name} src={props.image2} />
      <img className="image3" alt={props.name} src={props.image3} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Price:</strong> {props.price}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeStore(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default StoreCard;
