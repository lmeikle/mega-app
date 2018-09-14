import React from 'react';
import { render, wait, waitForElement, fireEvent, within } from 'react-testing-library';
import ShoeStore, { STORE_PRODUCTS } from '../ShoeStore';

describe('ShoeStore', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('the cart displays the correct number of selected products', async () => {
    let { getByTestId } = render(<ShoeStore />);

    let productNode = getByTestId('product');
    fireEvent.click(productNode);
    fireEvent.click(productNode);
    fireEvent.click(productNode);

    expect(getByTestId('cart-total')).toHaveTextContent(3);
  });

  test('filters the product list', async () => {
    let { getByTestId, queryAllByTestId } = render(<ShoeStore />);

    // check the correct number of products are displayed
    expect(queryAllByTestId('product')).toHaveLength(STORE_PRODUCTS.length);

    let filterInputNode = getByTestId('filter-input');
    fireEvent.change(filterInputNode, {
      target: { value: 'Air' }
    });

    expect(queryAllByTestId('product')).toHaveLength(1);
  });
});
