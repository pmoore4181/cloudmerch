import React from 'react';
import './UploadCard.css';


const UploadCard = props => (
  <div className="card">
  <div className="card-header subtitle upload-card-header">Upload New Product</div>

  <div className ="card-content form-card-content">
   
    <form action="/" method="POST" encType="multipart/form-data">
    <div className="field">
        <label htmlFor="name">Product name: </label>
        <input className="input new-product" type="text" id="name" placeholder="Product name"/>
    </div>
    <div className="field">
        <label htmlFor="description">Description: </label>
        <input className="input new-product" type="text" id="description" placeholder="Description"/>
    </div>
    <div className="field">
        <label htmlFor="tags">Tags: </label>
        <input className="input new-product" type="text" id="tags" placeholder="Tags"/>
    </div>
    <div className="field">
        <label htmlFor="price">Price: </label>
        <input className="input new-product" type="text" id="price" placeholder="Price"/>
    </div>
    <div className="field">
        <label htmlFor="image">Upload product image: </label>
        <input className="input new-product" type="file" id="image" />
    </div>
    <button type="submit" className="button submit-button">Submit</button>
    </form>
    </div>


      

  </div>
);

export default UploadCard;
