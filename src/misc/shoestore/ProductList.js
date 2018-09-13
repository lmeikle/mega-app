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
    const { products, onProductSelect } = this.props;

    return (
      <div>
        {products.map(product => (
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
