import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from './10_radio';

test('radio', () => {
  render(<Radio />);
  const radio = screen.getByLabelText('phone');
  expect(radio).not.toBeChecked();
  userEvent.click(radio);
  expect(radio).toBeChecked();
});
