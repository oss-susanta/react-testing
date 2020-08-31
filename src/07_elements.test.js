import React from 'react';
import {render, screen} from '@testing-library/react';
import Text from './07_elements';

test('component rendering', () => {
  const value = 'Testing Library';
  render(<Text value={value} />);
  const div = screen.getByText(value);
  expect(div).toBeInTheDocument();
});

test('using className', () => {
  const value = 'Testing Library';
  const {container} = render(<Text value={value} />);
  const div = container.querySelector('.text');
  expect(div).toHaveTextContent(value);
});

test('using testid', () => {
  const value = 'Testing Library';
  render(<Text value={value} data-testid="div"/>);
  const div = screen.getByTestId('div');
  expect(div).toHaveTextContent(value);
});

// works for other simple non-form elements span, p, section, article, header, footer