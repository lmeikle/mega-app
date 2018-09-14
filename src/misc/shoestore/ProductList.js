import React, { Component } from 'react';

export const Product = ({ name, brand }) => {
  return (
    <div data-testid="product">
      <span>{name}</span>
      :&nbsp;
      <span>{brand}</span>
    </div>
  );
};

export default class ProductList extends Component {
  render() {
    const { products, onProductSelect, filter = '' } = this.props;

    let filterRegex = new RegExp(filter.toLowerCase(), 'g');
    let filteredProducts = products.filter(product => filterRegex.test(product.name.toLowerCase()));

    return (
      <div>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            onClick={() => {
              onProductSelect(product);
            }}
          >
            <Product {...product} />
          </div>
        ))}
      </div>
    );
  }
}
