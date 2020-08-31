import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip from './13_tooltip';

test('tooltip', () => {
  render(<Tooltip />);
  const span = screen.getByText('Hover');
  userEvent.hover(span);
  const tooltip = screen.queryByRole('tooltip');
  expect(tooltip).toHaveTextContent('Tooltip');
  userEvent.unhover(span);
  expect(tooltip).not.toBeInTheDocument();
});
