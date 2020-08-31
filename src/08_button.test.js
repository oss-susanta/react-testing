import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CounterButton from './08_button';

test('click', () => {
  render(<CounterButton />);
  userEvent.click(screen.getByText('increment'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('double click', () => {
  render(<CounterButton />);
  const button = screen.getByRole('button', {
    name: 'increment',
  });
  userEvent.dblClick(button);
  expect(screen.getByText('2')).toBeInTheDocument();
});