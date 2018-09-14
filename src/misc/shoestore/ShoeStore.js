import React, { Component } from 'react';
import ProductList from './ProductList';

export const STORE_PRODUCTS = [
  { id: 1, name: 'AirMax 90', brand: 'Nike' },
  { id: 2, name: 'Yeezy', brand: 'Adidas' },
  { id: 3, name: 'Classic', brand: 'Reebok' }
];

export default class ShoeStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      products: [...STORE_PRODUCTS],
      filter: ''
    };
  }

  handleProductSelect = product => {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      };
    });
  };

  handleFilterChange = evt => {
    let val = evt.target.value;
    this.setState(prevState => {
      return {
        filter: val
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Shoe Store</h2>
        <p>
          You have selected <span data-testid="cart-total">{this.state.selectedProducts.length}</span> product(s).
        </p>
        <ProductList products={this.state.products} filter={this.state.filter} onProductSelect={this.handleProductSelect} />
        <p>
          <label>Filter:&nbsp;</label>
          <input type="text" data-testid="filter-input" onChange={this.handleFilterChange} />
        </p>
      </div>
    );
  }
}
