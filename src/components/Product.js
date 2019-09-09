import React, { useState } from 'react';

class Product extends React.Component {
  
	constructor() {
		super();
		this.state = {
			products: []
		};
	  }

	  

render(props) {
	
	return (
		<div className="product">
			<img src={this.props.product.image} alt={`${this.props.product.title} book`} />

			<h1 className="title">{this.props.product.title}</h1>

			<p className="price">${this.props.product.price}</p>

			<button onClick={() => this.props.addItem(this.props.product)}>
				Add to cart
			</button>

			<button onClick={() => this.props.addItem(this.props.product)}>
				Add to localStorage
			</button>
			{console.log(this.props.product)}
		</div>
	);
};

}

export default Product;
