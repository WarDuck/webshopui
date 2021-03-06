import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.description}</p>
        <img src={this.props.product.image}></img>
        <p>Eur: {this.props.product.price}</p>
        {this.props.loggedIn && (
            <button onClick={() => this.props.addToCart(this.props.product)}>Add to Cart</button>
        )}
      </div>
    );
  }
}

export default Product;
