import React from 'react';
import { render, wait, waitForElement, fireEvent, within } from 'react-testing-library';
import ProductList from '../ProductList';
import dummyData from './dummyData.json';

describe('ProductList', () => {
  let productSelectFn = jest.fn();
  beforeEach(() => {
    productSelectFn.mockReset();
    fetch.resetMocks();
  });

  test('displays a list of products', async () => {
    let { queryAllByTestId } = render(<ProductList products={dummyData} />);

    expect(queryAllByTestId('product')).toHaveLength(dummyData.length);
  });

  test('renders the name and brand for a product', async () => {
    let { queryAllByTestId } = render(<ProductList products={dummyData} />);

    let productNodes = queryAllByTestId('product');
    expect(within(productNodes[0]).getByText(dummyData[0].name)).toBeInTheDocument();
    expect(within(productNodes[0]).getByText(dummyData[0].brand)).toBeInTheDocument();
  });

  test('clicking on a product add its to the cart', async () => {
    let { getByTestId } = render(<ProductList products={dummyData} onProductSelect={productSelectFn} />);

    // We check that the function has not been called yet
    expect(productSelectFn.mock.calls.length).toEqual(0);

    let productNode = getByTestId('product');
    fireEvent.click(productNode);

    // We check that the function has now been called
    expect(productSelectFn.mock.calls.length).toEqual(1);

    // We check it's been called with the right arguments
    expect(productSelectFn.mock.calls[0][0]).toEqual(dummyData[0]);
  });
});
