import React from 'react';
import './UploadCard.css';

class UploadCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                description: '',
                tags: '',
                price: ''
            }
        }; 
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let newState = this.state; 
        newState.form[event.target.name] = event.target.value; 
        this.setState(newState); 
    }

    handleSubmit(event)  {
        event.preventDefault();
        console.log(this.props.storeId)
        console.log(JSON.stringify(this.state.form))
        return fetch('/stores/' + this.props.storeId + '/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(this.state.form)
    })
    .then(response => response.json())
    }

    render() {
        const { form } = this.state;

        return (
            <div>
  <div className="card">
  <div className ="card-content">
    <p className="storeName"> Upload New Product </p>
    <form onSubmit={this.handleSubmit}> 
    <label htmlFor="name">Product name</label>
    <input type="text"  name="name" value={form.name} onChange={this.handleChange} placeholder="Product name"/>
    <label htmlFor="description">Description</label>
    <input type="text"  name="description"  value={form.description} onChange={this.handleChange} placeholder="Description"/>
    <label htmlFor="tags">Tags</label>
    <input type="text"  name="tags"  value={form.tags} onChange={this.handleChange} placeholder="Tags"/>
    <label htmlFor="price">Price</label>
    <input type="number"  name="price" value={form.price} onChange={this.handleChange} placeholder="Price"/>
    <label htmlFor="image">Upload product image</label>
    <input type="file"  name="image" />
    <input type="submit" value="submit" className="submit-button"/>
    </form>
    </div>
  </div>
  </div>
  )
}
};

export default UploadCard;
