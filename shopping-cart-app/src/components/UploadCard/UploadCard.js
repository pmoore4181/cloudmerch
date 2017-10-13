import React from 'react';
import './UploadCard.css';


const UploadCard = props => (
  <div className="card">
  <div className ="card-content">
    <p className="storeName"> Upload New Product </p>
    <form action="/" method="POST" encType="multipart/form-data">
    <label htmlFor="name">Product name</label>
    <input type="text" id="name" placeholder="Product name"/>
    <label htmlFor="description">Description</label>
    <input type="text" id="description" placeholder="Description"/>
    <label htmlFor="tags">Tags</label>
    <input type="text" id="tags" placeholder="Tags"/>
    <label htmlFor="price">Price</label>
    <input type="number" id="price" placeholder="Price"/>
    <label htmlFor="image">Upload product image</label>
    <input type="file" id="image" />
    <input type="submit" value="submit" className="submit-button"/>
    </form>
    </div>


      

  </div>
);

export default UploadCard;
