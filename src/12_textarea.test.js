import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Textarea from './12_textarea';

test('textarea', () => {
  render(<Textarea />);
  const textarea = screen.getByLabelText('Comments');
  expect(textarea).toHaveDisplayValue('');
  userEvent.paste(textarea, 'Hello,\nWorld!');
  expect(textarea).toHaveDisplayValue('Hello,\nWorld!');
  userEvent.clear(textarea);
  expect(textarea).toHaveDisplayValue('');
});
