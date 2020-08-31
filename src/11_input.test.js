import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './11_input';

test('input', () => {
  render(<Input />);
  const input = screen.getByLabelText('Name');
  expect(input).toHaveDisplayValue('');
  userEvent.type(input, 'Jest');
  expect(input).toHaveDisplayValue('Jest');
  userEvent.clear(input);
  expect(input).toHaveDisplayValue('');
});
