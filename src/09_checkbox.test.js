import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './09_checkbox';

test('checkbox', () => {
  render(<Checkbox />);
  const checkbox = screen.getByLabelText('remember me');
  expect(checkbox).not.toBeChecked();
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
